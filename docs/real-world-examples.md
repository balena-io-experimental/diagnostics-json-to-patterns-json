# Real-world examples

## Engine killed by the watchdog

Let's start with a simple (maybe simplistic) case, in which one single symptom
tells us what the problem is.

**Symptom 1.** `journalctl --no-pager --no-hostname -n 1000 -at balenad` has
output like

```text
Sep 21 07:20:57 1d8c4bb systemd[1]: balena.service: Watchdog timeout (limit 6min)!
```

(This matches an [existing
pattern](https://jel.ly.fish/pattern-systemd-watchdog-kills-balenaengine-extended-heavy-load-6min--33f2d65);
we could attach it automatically or ask if the support agent wants to attach
it.)

**Diagnosed problem.** If that one symptom is present, we can conclude that
balenaEngine is being killed by the Watchdog. The workaround is to increase the
health check timeout.

## Slice bounds out of range when applying delta

A nicer example, in which we combine two symptoms to pinpoint the underlying
problem with a very good level of confidence.

### Symptoms

**Symptom 1.** `journalctl --no-pager --no-hostname -n 1000 -at balenad` gives
us something like us

```text
panic: runtime error: slice bounds out of range
Sep 21 12:05:35 balenad[22665]: goroutine 946 [running]:
Sep 21 12:05:35 balenad[22665]: github.com/docker/docker/pkg/ioutils.(*concatReadSeekCloser).Read(0x72b1d10, 0x5a5b800, 0x200, 0x200, 0x11ad100, 0x1, 0x5a5b800)
```
Here's [the correponding
pattern](https://jel.ly.fish/pattern-balenad-panic-runtime-error-slice-bounds-range-1770803200--581d706).

**Symptom 2.** From the output of `uname -a` (or `cat /proc/cpuinfo`?) we
detect this is a 32-bit device.

**Diagnosed problem.** If both symptoms are present, we conclude that this is a
known bug caused by an integer overflow while applying deltas. The workaround is
to disable deltas.

(We could even try to add a third symptom here: the delta being applied must be
larger than 2GB. I think we can get this information from the Engine or
Supervisor logs.)

### Engine storage migration timing out

**Symptom 1.** From `journalctl --no-pager --no-hostname -n 1000 -at balenad` we
detect that we have recently done a storage migration:

```text
Mar 16 18:31:01 9c92dd1 balenad[1090]: time="2022-03-16T18:31:01.527617507Z" level=info msg="Storage migration from aufs to overlay2 starting"
```

**Symptom 2.** From `journalctl --no-pager --no-hostname -pwarning -perr -a` we
detect baleanEngine timed out during initialization:

```text
Mar 16 18:32:25 9c92dd1 systemd[1]: balena.service: start operation timed out. Terminating.
```

[Pattern](https://jel.ly.fish/pattern-container-images-redownloaded-hup-engine-killed-due-timeout-middle-migration-358ef91).

**Symptom 3.** From `find /mnt/data/*hup/*log -mtime -180 | xargs tail -n 250 -v`
we find out that we HUPped recently. (I think we can ignore this one because
it's redundant: we only migrate during HUPs.)

**Symptom 4.** From `cat /etc/os-release` we get that the OS version is less
than v2.98.4 (because at that version we fixed this problem).

**Diagnosed problem.** The device tried to migrate the Engine storage from aufs
to overlay2, but the migration took more than the initialization time out, so
Systemd killed the Engine during the migration. Fixed in balenaOS v2.98.4.

## Corrupted filesystem / broken SD card

We have a number of patterns related with SD card issues and some more about
filesystem corruption. However, I could not find a single one showing logs or
any other symptom we could look at in the diagnostics.

I thus got the symptoms below from a quick web search for "dmesg corrupted sd
card".

**Symptom 1.** From `dmesg`, we get this I/O error:

```text
[37716.939131] print_req_error: I/O error, dev sda, sector 4780104
```

**Symptom 2.** From `dmesg`, we get this I/O error:

```text
[37716.939136] Buffer I/O error on dev sda2, logical block 571657, async page read
```

**Diagnosed problem.** The more of the symptoms above we have, the more likely
it is that the device has a failing storage device. This would be "more true" if
we could guaranteed that all messages refer to the same device (`sda`, in the
example).

**For the future.** [This
pattern](https://jel.ly.fish/pattern-faulty-or-slow-sd-cards-causing-problems-b62c3dcf-bd2e-4852-bc9a-6d0b26b25054)
has some ideas of what we could do to check for SD issues.

## HUP fails, status shown as stuck at 50%

I don't understand the problem well enough to describe it and its diagnostic
nicely here, but here's what we got.

**Symptom 1.** We see this on the Host OS update logs
(`find /mnt/data/*hup/*log -mtime -180 | xargs tail -n 250 -v`):

```text
[000002865][LOG]Image type balena_registry, location 'registry2.balena-cloud.com/v2/aaf9630084a1b2c424f2aa3f717ceabf@sha256:1a66fe702672d5d5c9f1678454180a7f9c6556a5d90412446d24a7ced8a0c250' failed or not found, trying another source
```

[Pattern](https://jel.ly.fish/pattern-network-failure-during-hup-ad569ca).

**Symptom 2.** We detect a connectivity issue somewhere else -- not sure where,
maybe it appears on the regular error logs
(`journalctl --no-pager --no-hostname -pwarning -perr -a`):

```text
test_balena_registry: Could not communicate with registry2.balena-cloud.com for authentication
```

This second symptom is mentioned on [this
pattern](https://jel.ly.fish/pattern-host-os-update-hup-stuck-50-when-connectivity-unstable-23d662d),
which also happens to mention the first symptom. So, in a way it refers more to
the problem as a whole, not to specific symptoms. It is one of the cases in
which the theoretical "a pattern is a symptom" mantra does not correspond to
what we do in practice.

**Diagnosed problem.** If these two symptoms are present, it probably means that
the HUP failed because of a networking issue. Recommendation/workaround is to
try again, and possibly check the Internet connectivity if it keeps failing.

- - - - -
*The examples below are "work in progress".*
- - - - -

## `balena-engine.sock` becomes a directory

[Pattern](https://jel.ly.fish/pattern--cannot-connect-balenaengine-daemon-unix-var-run-balena-engine-sock-balenaengine-daemon-running--d170408)

I think we don't have anything in the diagnostics that allow to identify if
`balena-engine.sock` has become a directory, so we cannot diagnose this problem
with much certainty. Anyway, some other symptoms are:

When

```text
Cannot connect to the balenaEngine daemon at unix:///var/run/balena-engine.sock. Is the balenaEngine daemon running?
```

## Wrong perception that something is an issue?

I am not digging into [this
pattern](https://jel.ly.fish/pattern-large-image-size-with-potentially-large-deltas-create-erroneous-user-perception-that-user-devices-aren-t-working-or-aren-t-updating-1861d230-b2db-4801-a8b3-f11617f624fc)
because I think it is not something we can properly deal with during the hack
week.

But this brings one interesting **point for the future**: we might also be able
to "diagnose" cases in which the device is working as expected, but causes the
wrong impression that it is not. Image a support agent receiving a diagnostic
like "this device may appear broken/unresponsive/whatever, but it actually doing
this and that and shall look normal again soon."

## Services drop off balena bridge networks unexpectedly

[This
one](https://jel.ly.fish/pattern-services-drop-off-balena-bridge0-network-unexpectedly-1d57fb4a-d7d9-40a3-843c-313edf32b13b)
can be interesting because:

1. Depending on the symptoms we know what is happening (Engine initialization
   timeout), but in others we don't.
2. At least one of the symptoms (again, Engine initialization timeout) is shared
   with a different problem. (In other words, this is a concrete example that
   the same symptom can point to different problems; we need to look for
   multiple symptoms to be sure).
3. It has one tricky symptom (crossing information between `balena inspect` of
   the containers and the networks).

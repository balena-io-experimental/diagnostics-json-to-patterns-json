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

[Pattern](https://jel.ly.fish/pattern-container-images-redownloaded-hup-engine-killed-due-timeout-middle-migration-358ef91)

**Symptom 3.** From `find /mnt/data/*hup/*log -mtime -180 | xargs tail -n 250 -v`
we find out that we HUPped recently. (I think we can ignore this one because
it's redundant: we only migrate during HUPs.)

**Symptom 4.** From `cat /etc/os-release` we get that the OS version is less
than v2.98.4 (because at that version we fixed this problem).

**Diagnosed problem.** The device tried to migrate the Engine storage from aufs
to overlay2, but the migration took more than the initialization time out, so
Systemd killed the Engine during the migration. Fixed in balenaOS v2.98.4.

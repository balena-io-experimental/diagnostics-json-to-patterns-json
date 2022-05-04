import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	properties: {
		extractSupervisorVersion: {
			description: 'Extracting Supervisor version with a regex',
			$$formula:
				'REGEXEXTRACT(contract[\'journalctl --no-pager --no-hostname -n 200 -a -u balena\'].stdout, "Supervisor (v[0-9]+.[0-9]+.[0-9]+).starting up")',
		},
		extractLinuxKernelVersion: {
			description: 'Extracting Linux kernel version with regex',
			$$formula:
				'REGEXEXTRACT(contract[\'journalctl --no-pager --no-hostname -n 200 -a -u balena\'].stdout, "Linux version ([0-9]+.[0-9]+.[0-9]+)")',
		},
		extractBalenaOsVersion: {
			description: 'Extracting Linux kernel version with regex',
			$$formula:
				'REGEXEXTRACT(contract[\'journalctl --no-pager --no-hostname -n 200 -a -u balena\'].stdout, "balenaOS ([0-9]+.[0-9]+.[0-9]+.rev[0-9]+)")',
		},
	},
} as JsonSchema;

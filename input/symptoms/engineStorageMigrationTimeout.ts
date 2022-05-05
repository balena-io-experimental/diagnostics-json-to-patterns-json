import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	title: 'Engine storage migration timing out.',
	description: `The device tried to migrate the Engine storage from aufs to overlay2, but the migration took more than the initialization time out, so Systemd killed the Engine during the migration. Fixed in balenaOS v2.98.4.`,
	properties: {
		permalinkPattern:
			'https://jel.ly.fish/pattern-container-images-redownloaded-hup-engine-killed-due-timeout-middle-migration-358ef91',
		recentStorageMigration: {
		
			allOf: [
				{
				        description: 'We have recently done a storage migration',
					$$formula:
						"/Storage migration from aufs to overlay2 starting/.test(contract['journalctl --no-pager --no-hostname -n 1000 -at balenad'].stdout)",
				},
				{
				        description: 'balenaEngine timed out during initialization',
					$$formula:
						"/balena.service: start operation timed out/.test(contract['journalctl --no-pager --no-hostname -pwarning -perr -a'].stdout)",
				},
				{
				        description: 'OS version is less than v2.98.4',
					$$formula:
						"SEMVERCOMP(REGEXEXTRACT(contract['cat /etc/os-release'].stdout, 'balenaOS ([0-9]+.[0-9]+.[0-9])'), '2.98.4', '<')",
				},
			],
		},
	},
} as JsonSchema;

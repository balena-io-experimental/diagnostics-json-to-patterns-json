import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	properties: {
		permalinkPattern: {
			$$formula:
				"'https://jel.ly.fish/pattern-container-images-redownloaded-hup-engine-killed-due-timeout-middle-migration-358ef91'",
		},
		recentStorageMigration: {
			allOf: [
				{
					$$formula:
						"/Storage migration from aufs to overlay2 starting/.test(contract['journalctl --no-pager --no-hostname -n 1000 -at balenad'].stdout)",
				},
				{
					$$formula:
						"/balena.service: start operation timed out/.test(contract['journalctl --no-pager --no-hostname -pwarning -perr -a'].stdout)",
				},
				{
					$$formula:
						"/less than v2.98.4/.test(contract['cat /etc/os-release'].stdout)",
				},
			],
		},
	},
} as JsonSchema;

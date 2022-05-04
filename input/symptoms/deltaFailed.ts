import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	properties: {
		permalinkPattern: {
			$$formula: "'https://jel.ly.fish/<permalink>'",
		},
		deltaFailedAndEngineECONNREFUSED: {
			allOf: [
				{
					$$formula:
						"/Delta failed/.test(contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'].stdout)",
				},
				{
					$$formula:
						"/connect ECONNREFUSED \\/var\\/run\\/balena-engine.sock/.test(contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'].stdout)",
				},
			],
		},
		deltaFailedFind: {
			$$formula:
				"FIND('Delta failed', contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'].stdout) != 0",
		},
		deltaFailedFindShouldFail: {
			$$formula:
				"FIND('Deltaaaaaaa failed', contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'].stdout) != 0",
		},
		deltaFailedIncludes: {
			$$formula:
				"contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'].stdout.includes('Delta failed')",
		},
		engineECONNRESET: {
			$$formula:
				"/connect ECONNREFUSED \\/var\\/run\\/balena-engine.sock/.test(contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'].stdout)",
		},
		balenaEngineIsBusted: {
			$$formula: "contract['deltaFailedRegex'] && contract['engineECONNRESET']",
		},
	},
} as JsonSchema;

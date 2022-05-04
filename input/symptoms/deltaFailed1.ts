/**
 * This file is in typescript just so we can have the types available and auto-completion for fields to make life easier whilst writing these,
 * later on it could be just JSON or typescript or whatever as far as I'm concerned
 */

import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	properties: {
		deltaFailedRegex: {
			description: 'Finding delta failed with a regex',
			$$formula:
				"/Delta failed/.test(contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'])",
		},
		deltaFailedAndEngineECONNREFUSED: {
			allOf: [
				{
					$$formula:
						"/Delta failed/.test(contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'])",
				},
				{
					$$formula:
						"/connect ECONNREFUSED \\/var\\/run\\/balena-engine.sock/.test(contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'])",
				},
			],
		},
		deltaFailedFind: {
			$$formula:
				"FIND('Delta failed', contract['journalctl --no-pager --no-hostname -n 200 -a -u balena']) != 0",
		},
		deltaFailedIncludes: {
			$$formula:
				"contract['journalctl --no-pager --no-hostname -n 200 -a -u balena'].includes('Delta failed')",
		},
	},
} as JsonSchema;

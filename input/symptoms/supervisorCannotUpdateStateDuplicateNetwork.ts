/**
 * This file is in typescript just so we can have the types available and auto-completion for fields to make life easier whilst writing these,
 * later on it could be just JSON or typescript or whatever as far as I'm concerned
 */

import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	properties: {
		permalinkPattern: {
			$$formula:
				"'https://jel.ly.fish/pattern-supervisor-cannot-update-state-duplicate-network-e2822b1'",
		},
		rescheduleUpdateNetworkIsAmbiguous: {
			description: 'Schedule Update network is ambiguous',
			$$formula:
				"/Scheduling another update .* network .* is ambiguous/.test(contract['balena logs {id}'])",
		},
	},
} as JsonSchema;

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
				"'https://jel.ly.fish/pattern-network-failure-during-hup-ad569ca'",
		},
		imageTypeBalenaRegistryFailed: {
			description:
				'Image type balena_registry, location {url} failed or not found',
			$$formula:
				"/Image type balena_registry, location.*failed or not found, trying another source/.test(contract['find /mnt/data/*hup/*log -mtime -180 | xargs tail -n 250 -v'].stdout)",
		},
		allHostappUpdateFailed: {
			description: 'all hostapp-update attempts have failed...',
			$$formula:
				"/all hostapp-update attempts have failed.../.test(contract['find /mnt/data/*hup/*log -mtime -180 | xargs tail -n 250 -v'].stdout)",
		},
	},
} as JsonSchema;

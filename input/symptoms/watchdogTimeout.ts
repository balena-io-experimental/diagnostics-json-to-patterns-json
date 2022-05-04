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
				"'https://jel.ly.fish/pattern-systemd-watchdog-kills-balenaengine-extended-heavy-load-6min--33f2d65'",
		},
		watchdogTimeout: {
			description: 'Engine killed by the watchdog',
			$$formula:
				"/balena.service: Watchdog timeout/.test(contract['journalctl --no-pager --no-hostname -n 1000 -at balenad'])",
		},
	},
} as JsonSchema;

/**
 * This file is in typescript just so we can have the types available and auto-completion for fields to make life easier whilst writing these,
 * later on it could be just JSON or typescript or whatever as far as I'm concerned
 */

import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	title: 'systemd watchdog kills balenaEngine under extended heavy load (6min)',
	description: `We consider increasing the watchdog timeout to be a workaround, and not really a true fix. 
	In some cases 12min might not be enough if the device is under significant load, especially on some low-powered devices,
	 and in other cases 12min is way longer than we want to wait to restart the engine when issues are encountered.
	Instead, we are approaching this a couple ways:
	adjust critical hostOS services like the engine to always take priority over non-critical applications when under very heavy load
	change the requirements of the healthcheck to complete with fewer resources, but still accurately reflect whether the engine is "healthy"`,
	properties: {
		permalinkPattern:
			'https://jel.ly.fish/pattern-systemd-watchdog-kills-balenaengine-extended-heavy-load-6min--33f2d65',
		watchdogTimeout: {
			description: 'Engine killed by the watchdog',
			$$formula:
				"/balena.service: Watchdog timeout/.test(contract['journalctl --no-pager --no-hostname -n 1000 -at balenad'].stdout)",
		},
	},
} as JsonSchema;

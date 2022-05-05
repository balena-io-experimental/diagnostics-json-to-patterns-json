import type { JsonSchema } from '@balena/jellyfish-types';

export default {
	type: 'object',
	description: 'System information extractor',
	properties: {
		extractSupervisorVersion: {
			description: 'Extracting Supervisor version with a regex',
			$$formula:
				"REGEXEXTRACT(contract['balena logs {id}'].stdout, 'Supervisor (v[0-9]+.[0-9]+.[0-9]+).starting up')",
		},
		extractLinuxKernelVersion: {
			description: 'Extracting Linux kernel version with regex',
			$$formula:
				"REGEXEXTRACT(contract['dmesg -T'].stdout, 'Linux version ([0-9]+.[0-9]+.[0-9]+)')",
		},
		extractBalenaOsVersion: {
			description: 'Extracting Linux kernel version with regex',
			$$formula:
				"REGEXEXTRACT(contract['cat /etc/os-release'].stdout, 'balenaOS ([0-9]+.[0-9]+.[0-9]+.rev[0-9]+)')",
		},

		checkBalenaOsVersionTemplate: {
			$$formula:
				"SEMVERCOMP(REGEXEXTRACT(contract['cat /etc/os-release'].stdout, 'balenaOS ([0-9]+.[0-9]+.[0-9]+.rev[0-9]+)'), '2.86.16+rev1', '<=')",
		},
	},
} as JsonSchema;

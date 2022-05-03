import { Jellyscript } from '@balena/jellyfish-jellyscript';

export const run = () => {
	const deltaFailed = require('../example-files/deltaFailed.json');
	const contract = require('../example-files/diagnostics');
	const parser = new Jellyscript();
	const result = parser.evaluateObject(deltaFailed, contract);

	console.log(result);
};

import { Parser } from './parser';

const diagnosticsParser = new Parser();

const exec = async () => {
	await diagnosticsParser.loadDiagnostics('input/diagnostics');
	await diagnosticsParser.loadSymptoms('input/symptoms');
	diagnosticsParser.run('output/');
};

exec();

import * as fs from 'fs';
import * as path from 'path';
import { Jellyscript } from '@balena/jellyfish-jellyscript';
import { JsonSchema } from '@balena/jellyfish-types';
export class Parser {
	contract: any;
	parser: Jellyscript;
	diagnostics: { [key: string]: any } | undefined = undefined;
	symptomsCatalog: { [key: string]: JsonSchema } | undefined = undefined;

	constructor() {
		this.parser = new Jellyscript();
	}

	private async readPathToFileNames(inputPath: string): Promise<string[]> {
		try {
			const inputsPath = path.resolve(inputPath);
			const allFiles = await fs.promises.readdir(inputsPath);
			return allFiles.map((fileName) => inputsPath + '/' + fileName);
		} catch (err) {
			throw Error(`No catalog input folder specified, ${err} `);
		}
	}

	private async loadCatalogFromFiles(
		fileNames: string[],
	): Promise<{ [key: string]: any }> {
		const catalog: { [key: string]: any } = {};

		await Promise.all(
			fileNames.map(async (filename) => {
				const filePath = path.join(filename);
				const { name, ext: fileExtension } = path.parse(filename);
				switch (fileExtension) {
					case '.json':
					case '.ts':
					case '.js':
						catalog[name] = require(filePath);
						break;
					default:
						console.error(
							`Unrecognised symptom file extension, skipping: ${fileExtension}`,
						);
				}
			}),
		);
		return catalog;
	}

	async loadSymptoms(symptomsPath: string) {
		const fileNames = await this.readPathToFileNames(symptomsPath);
		this.symptomsCatalog = await this.loadCatalogFromFiles(fileNames);
	}

	async loadDiagnostics(diagnosticsInputDirPath: string) {
		const fileNames = await this.readPathToFileNames(diagnosticsInputDirPath);
		this.diagnostics = await this.loadCatalogFromFiles(fileNames);
	}

	run() {
		if (this.diagnostics === undefined) {
			throw Error(`No diagnostics loaded, load first`);
		}
		if (this.symptomsCatalog === undefined) {
			throw Error(`No symptoms loaded, load first`);
		}

		for (const [symptomName, symptom] of Object.entries(this.symptomsCatalog)) {
			console.log(`${symptomName}`);
			for (const [diagFileName, structuredDiagnose] of Object.entries(
				this.diagnostics,
			)) {
				console.log(`${diagFileName}`);
				const result = this.parser.evaluateObject(symptom, structuredDiagnose);
				console.log(
					`${diagFileName}, ${JSON.stringify(result.default, null, 2)}`,
				);
			}
		}
	}
}

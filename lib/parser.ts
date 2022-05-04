import * as fs from 'fs';
import * as path from 'path';
import { Jellyscript } from '@balena/jellyfish-jellyscript';
import { JsonSchema } from '@balena/jellyfish-types';

type Catalog = { [key: string]: any };
export class Parser {
	contract: any;
	parser: Jellyscript;
	diagnostics: Catalog | undefined = undefined;
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

	private async loadCatalogFromFiles(fileNames: string[]): Promise<Catalog> {
		const catalog: Catalog = {};

		await Promise.all(
			fileNames.map(async (filename) => {
				const filePath = path.join(filename);
				const { name, ext: fileExtension } = path.parse(filename);
				switch (fileExtension) {
					case '.json':
					case '.ts':
					case '.js':
						catalog[name + fileExtension] = require(filePath);
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

	private async writeResults(results: string, fileDestPath: string) {
		await fs.writeFileSync(fileDestPath, results);
	}

	async loadSymptoms(symptomsPath: string) {
		const fileNames = await this.readPathToFileNames(symptomsPath);
		this.symptomsCatalog = await this.loadCatalogFromFiles(fileNames);
	}

	async loadDiagnostics(diagnosticsInputDirPath: string) {
		const fileNames = await this.readPathToFileNames(diagnosticsInputDirPath);
		this.diagnostics = await this.loadCatalogFromFiles(fileNames);
	}

	async run(outputDestination: string) {
		if (this.diagnostics === undefined) {
			throw Error(`No diagnostics loaded, load first`);
		}
		if (this.symptomsCatalog === undefined) {
			throw Error(`No symptoms loaded, load first`);
		}

		for (const [diagFileName, structuredDiagnose] of Object.entries(
			this.diagnostics,
		)) {
			let results: Catalog = {
				inputFileName: diagFileName,
				input: structuredDiagnose,
			};
			for (const [symptomName, symptom] of Object.entries(
				this.symptomsCatalog,
			)) {
				results[symptomName] = this.parser.evaluateObject(
					symptom,
					structuredDiagnose,
				).default;
				delete structuredDiagnose.default;
			}
			await this.writeResults(
				JSON.stringify(results, null, 2),
				outputDestination + 'out_' + diagFileName,
			);
			results = {};
		}
	}
}

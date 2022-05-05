import * as fs from 'fs';
import * as path from 'path';
import { Jellyscript } from '@balena/jellyfish-jellyscript';
import { JsonSchema } from '@balena/jellyfish-types';
import { compare, CompareOperator } from 'compare-versions';

type Catalog = { [key: string]: any };
export class Parser {
	contract: any;
	parser: Jellyscript;
	diagnostics: Catalog | undefined = undefined;
	symptomsCatalog: { [key: string]: JsonSchema } | undefined = undefined;
	results: { [key: string]: Catalog } | undefined = undefined;

	constructor() {
		const options = {
			formulas: {
				// https://github.com/omichelsen/compare-versions#human-readable-compare
				SEMVERCOMP: (ver1: string, ver2: string, operator: CompareOperator) =>
					compare(ver1, ver2, operator),
			},
		};
		this.parser = new Jellyscript(options);
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
						catalog[name + fileExtension] = require(filePath);
						break;
					case '.ts':
					case '.js':
						catalog[name + fileExtension] = require(filePath).default;
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

	private addSymptomDetailIntoResults() {
		if (this.results === undefined) {
			throw Error(`No results generated, run parser first`);
		}
		if (this.symptomsCatalog === undefined) {
			throw Error(`No symptoms loaded, load first`);
		}

		for (const diagFileName of Object.keys(this.results)) {
			const diagFileResults = this.results[diagFileName].results;

			for (const [key, value] of Object.entries(this.symptomsCatalog)) {
				if (typeof value === 'object') {
					diagFileResults[key].title = value.title;
					diagFileResults[key].description = value.description;

					if (value.properties) {
						diagFileResults[key]['permalinkPattern'] =
							value.properties['permalinkPattern'];
						for (const [singleSymptomKey, singleSymptomValue] of Object.entries(
							value.properties,
						)) {
							if (typeof singleSymptomValue === 'object') {
								diagFileResults[key][singleSymptomKey] = {
									value: diagFileResults[key][singleSymptomKey],
									description: singleSymptomValue.description,
								};
							}
						}
					}
				}
			}
		}
	}

	async loadSymptoms(symptomsPath: string) {
		const fileNames = await this.readPathToFileNames(symptomsPath);
		this.symptomsCatalog = await this.loadCatalogFromFiles(fileNames);
	}

	async loadDiagnostics(diagnosticsInputDirPath: string) {
		const fileNames = await this.readPathToFileNames(diagnosticsInputDirPath);
		this.diagnostics = await this.loadCatalogFromFiles(fileNames);
	}

	async writeResultsToFile(outputDestination: string) {
		if (this.results === undefined) {
			throw Error(`No results generated, run parser first`);
		}
		if (!fs.existsSync(outputDestination)) {
			fs.mkdirSync(outputDestination);
		}

		for await (const diagFileName of Object.keys(this.results)) {
			await fs.writeFileSync(
				outputDestination + 'out_' + diagFileName,
				JSON.stringify(this.results[diagFileName], null, 2),
			);
		}
	}

	async run() {
		if (this.diagnostics === undefined) {
			throw Error(`No diagnostics loaded, load first`);
		}
		if (this.symptomsCatalog === undefined) {
			throw Error(`No symptoms loaded, load first`);
		}

		this.results = {};
		for (const [diagFileName, structuredDiagnose] of Object.entries(
			this.diagnostics,
		)) {
			this.results[diagFileName] = {
				inputFileName: diagFileName,
				input: structuredDiagnose,
			};
			const res = this.parser.evaluateObject(
				this.symptomsCatalog,
				structuredDiagnose,
			);
			res['results'] = {};
			for (const key of Object.keys(this.symptomsCatalog)) {
				res['results'][key] = res[key];
				delete res[key];
			}
			this.results[diagFileName] = res;
		}
		this.addSymptomDetailIntoResults();
	}
}

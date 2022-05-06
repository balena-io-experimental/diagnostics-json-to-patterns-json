/**
 * The argument *must* be named `contract`
 */
export type FormulaFunction = (contract: {
	[key: string]: {
		command: string;
		time: string;
		stdout: string;
		stderr?: string;
		real: string;
		user: string;
		sys: string;
	};
}) => boolean;

export const toFormula = (fn: FormulaFunction) => {
	let s = fn.toString();
	if (!/\s*function/.test(s)) {
		s = s.replace(/^.*=>\s*/, '');
	}
	return s.replace(/\s*{\s*(.*)\s*}/, '$1');
};

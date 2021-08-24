import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';
const inputFileName = 'src/main.js';
const buildFolder = 'dist/';
const plugins = [json(), resolve()];
const packageName = pkg.name.replace('@nl/', '');

const isExternalModuleId = (id) => {
	const ret = /the-answer/.test(id);
	console.log(`${id}: ${ret}`);
	return ret;
};

const cjs = {
	input: inputFileName,
	output: {
		file: `${buildFolder}bundle-cjs.js`,
		format: 'cjs'
	},
	plugins: plugins,
	external: isExternalModuleId
};
const esm = {
	input: inputFileName,
	output: {
		file: `${buildFolder}bundle-esm.js`,
		format: 'es'
	},
	plugins: plugins,
	external: isExternalModuleId
};
const umd = {
	input: inputFileName,
	output: {
		file: `${buildFolder}bundle-umd.js`,
		format: 'umd',
		name: packageName,
	},
	plugins: plugins,
	external: isExternalModuleId
};

export default [cjs, esm, umd];
// export default [esm];

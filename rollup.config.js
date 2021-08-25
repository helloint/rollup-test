import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

const inputFileName = 'src/main.js';
const buildFolder = 'dist/';
const plugins = [json(), peerDepsExternal(), resolve(), commonjs(), babel({
	exclude: 'node_modules/**'
})];
const packageName = pkg.name.replace('@nl/', '');

const cjs = {
	input: inputFileName,
	output: {
		file: `${buildFolder}index.js`,
		format: 'cjs'
	},
	plugins: plugins,
};
const esm = {
	input: inputFileName,
	output: {
		file: `${buildFolder}index.mjs`,
		format: 'es'
	},
	plugins: plugins,
};
const umd = {
	input: inputFileName,
	output: {
		file: `${buildFolder}index.umd.js`,
		format: 'umd',
		name: packageName,
	},
	plugins: plugins,
};

// export default [esm];
export default [cjs, esm, umd];

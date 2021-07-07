import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import stripBanner from 'rollup-plugin-strip-banner';
import bundleWorker from 'rollup-plugin-bundle-worker';
import { terser } from "rollup-plugin-terser";
import strip from "@rollup/plugin-strip";
import nodePolyfills from 'rollup-plugin-node-polyfills';
// import * as THREE from 'three';

const { PRODUCTION } = process.env;
const filename = PRODUCTION ? '3DTilesRender.min.js' : '3DTilesRender.js';

export default {
	input: 'src/index.js',
	output: {
		indent: '\t',
		format: 'umd',
		name: 'TDTilesRender',
		file: `./build/${filename}`,
	},
	treeshake: true,
	// external: [ 'THREE' ],
	plugins: [
		nodePolyfills(),
		babel( {
			exclude: 'node_modules/**'
		} ),
		bundleWorker(),
		resolve(),
		commonjs( {
			exclude: [
				'assets/**'
			]
		} ),
		replace( {
			'process.env.NODE_ENV': JSON.stringify( PRODUCTION ? 'production' : 'development' )
		} ),
		postcss( {
			extract: true,
			minimize: true
		} ),
		stripBanner(),
		strip( {
			debugger: !! PRODUCTION,
			functions: PRODUCTION ? [ 'console.*' ] : []
		} ),
		PRODUCTION && terser()
	],
	onwarn( warning, rollupWarn ) {

		if ( warning.code !== 'CIRCULAR_DEPENDENCY' ) {

			rollupWarn( warning );

		}

	}
};

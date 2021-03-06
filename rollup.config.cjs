/**
 * Bundles the widgets library, which is released independently of the interface application.
 * This library lives in src/lib, but shares code with the interface application.
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const { default: dts } = require('rollup-plugin-dts');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');
const { default: multi } = require('rollup-plugin-multi-input');
const externals = require('rollup-plugin-node-externals');
const sass = require('rollup-plugin-scss');

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

const transpile = {
  input: 'src/index.tsx',
  external: isEthers,
  plugins: [
    // Dependency resolution
    externals({
      exclude: [
        'constants',
        /@lingui\/(core|react)/, // @lingui incorrectly exports esm, so it must be bundled in
        /\.json$/, // esm does not support JSON loading, so it must be bundled in
      ], // marks dependencies as external so they are not bundled inline
      deps: true,
      peerDeps: true,
    }),
    resolve({ extensions: EXTENSIONS }), // resolves third-party modules within node_modules/

    // Source code transformation
    replace({
      // esm requires fully-specified paths:
      // 'react/jsx-runtime': 'react/jsx-runtime.js',
      preventAssignment: true,
    }),
    json(), // imports json as ES6; doing so enables module resolution
    url({ include: ['**/*.png', '**/*.svg'], limit: Infinity }), // imports assets as data URIs
    svgr(), // imports svgs as React components
    sass({ output: 'dist/fonts.css', verbose: false }), // generates fonts.css
    commonjs(), // transforms cjs dependencies into tree-shakeable ES modules

    babel({
      babelHelpers: 'runtime',
      extensions: EXTENSIONS,
    }),
  ],
  onwarn: squelchTypeWarnings, // this pipeline is only for transpilation
};

const esm = {
  ...transpile,
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: false,
  },
};

const cjs = {
  ...transpile,
  output: {
    dir: 'dist/cjs',
    entryFileNames: '[name].cjs',
    chunkFileNames: '[name]-[hash].cjs',
    format: 'cjs',
    sourcemap: false,
  },
  watch: false,
};

const types = {
  input: 'src/index.d.ts',
  output: { file: 'dist/index.d.ts' },
  external: (source) => source.endsWith('.css'),
  plugins: [dts({ compilerOptions: { baseUrl: 'dts' } })],
  watch: false,
};

const assets = [
  {
    // ...locales,
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: false,
    },
  },
];

const config = [esm, cjs, types];
// const config = [esm, cjs];
config.config = { ...esm, output: { ...esm.output, sourcemap: true } };
config.assets = assets;
module.exports = config;

function isEthers(source) {
  // @ethersproject/* modules are provided by ethers
  return source.startsWith('@ethersproject/');
}

function squelchTypeWarnings(warning, warn) {
  if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
  if (warning.code === 'THIS_IS_UNDEFINED') return;
  if (warning.code === 'CIRCULAR_DEPENDENCY') return;
  warn(warning);
}

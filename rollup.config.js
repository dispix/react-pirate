import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import packagejson from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: packagejson.main,
    format: 'cjs',
  },
  plugins: [resolve(), commonjs()],
  external: ['react'],
}

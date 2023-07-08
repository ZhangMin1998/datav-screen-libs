const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
// console.log(inputPath)
const outputUmdPath = path.resolve(__dirname, './dist/datav.min.js')
const outputEsPath = path.resolve(__dirname, './dist/datav.es.min.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd', // umd cjs es
      name: 'datav',
      globals: {
        vue: 'vue'
      }
    },
    {
      file: outputEsPath,
      format: 'es', // umd cjs es
      globals: {
        vue: 'vue'
      }
    }
  ],
  plugins: [
    vue(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    terser(),
    postcss({
      plugins: []
    })
  ],
  external: [
    'vue'
  ]
}
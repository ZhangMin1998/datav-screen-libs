const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
const polyfillNode = require('rollup-plugin-polyfill-node')

const inputPath = path.resolve(__dirname, './src/index.js')
// console.log(inputPath)
const outputUmdPath = path.resolve(__dirname, './dist/datav.js')
const outputEsPath = path.resolve(__dirname, './dist/datav.es.js')

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
    postcss({
      plugins: []
    }),
    polyfillNode({
      preferBuiltins: true, // 让插件优先使用polyfill来解决依赖问题
    })
  ],
  external: [
    'vue'
  ]
}
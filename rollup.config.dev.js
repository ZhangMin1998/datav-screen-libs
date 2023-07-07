const path = require('path')
const resolve = require('rollup-plugin-node-resolve')

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
      name: 'datav'
    },
    {
      file: outputEsPath,
      format: 'es', // umd cjs es
    }
  ],
  plugins: [
    resolve()
  ]
}
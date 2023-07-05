const path = require('path')

const inputPath = path.resolve(__dirname, './src/index.js')
// console.log(inputPath)
const outputPath = path.resolve(__dirname, './dist/datav.js')

module.exports = {
  input: inputPath,
  output: {
    file: outputPath,
    format: 'umd',
    name: 'datav'
  }
}
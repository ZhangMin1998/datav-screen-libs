// // import * as data from 'sam-test-data'
// import { random, a, b } from 'sam-test-data'
// // const data = require('sam-test-data')
// import pkg from '../package.json'

// console.log(pkg)

// // console.log('hello datav-screen!')
// // console.log(data.random(100), data.a, data.b)
// console.log(random(100), a, b)

// export default random
// // module.exports = {}

import Test2 from './Test2.vue'

export default function(Vue) {
  Vue.component(Test2.name, Test2)
}
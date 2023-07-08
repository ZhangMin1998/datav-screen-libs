(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory());
})(this, (function () { 'use strict';

  var a = Math.floor(Math.random() * 10);
  var b = Math.floor(Math.random() * 100);
  function random(base) {
    if (base && base % 1 === 0) {
      return Math.floor(Math.random() * base);
    } else {
      return 0;
    }
  }

  // import * as data from 'sam-test-data'
  // const data = require('sam-test-data')

  // console.log('hello datav-screen!')
  // console.log(data.random(100), data.a, data.b)
  console.log(random(100), a, b);
  // module.exports = {}

  return random;

}));

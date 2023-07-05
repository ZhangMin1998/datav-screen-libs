(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory());
})(this, (function () { 'use strict';

	console.log('hello datav-screen!');

	var index = {};

	return index;

}));

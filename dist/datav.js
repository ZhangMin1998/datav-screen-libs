(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory(global.Vue));
})(this, (function (vue) { 'use strict';

  var script = {
    name: 'TestComponent',
    setup: function setup() {
      var message = 'zm 666';
      var count = vue.ref(1);
      var doubleCount = vue.computed(function () {
        return count.value * 2;
      });
      var add = function add() {
        count.value++;
      };
      return {
        message: message,
        doubleCount: doubleCount,
        add: add
      };
    }
  };

  var _hoisted_1 = {
    "class": "test"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createElementVNode("div", null, " message: " + vue.toDisplayString($setup.message), 1 /* TEXT */), vue.createElementVNode("div", null, " double: " + vue.toDisplayString($setup.doubleCount), 1 /* TEXT */), vue.createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = function () {
        return $setup.add && $setup.add.apply($setup, arguments);
      })
    }, "add count")]);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".test[data-v-07bdddea] {\n  color: pink;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-07bdddea";
  script.__file = "src/Test.vue";

  // // import * as data from 'sam-test-data'
  // import { random, a, b } from 'sam-test-data'
  // // const data = require('sam-test-data')
  // import pkg from '../package.json'

  function index (Vue) {
    Vue.component(script.name, script);
  }

  return index;

}));

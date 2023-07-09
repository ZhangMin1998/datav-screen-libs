(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory(global.vue));
})(this, (function (vue) { 'use strict';

  var script$2 = {
    name: 'TestComponent',
    setup: function setup() {
      var message = 'hello Test';
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

  var _hoisted_1$2 = {
    "class": "test"
  };
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.createElementVNode("div", null, " message: " + vue.toDisplayString($setup.message), 1 /* TEXT */), vue.createCommentVNode(" <div>\r\n      double: {{ doubleCount }}\r\n    </div>\r\n    <button @click=\"add\">add count</button> ")]);
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

  var css_248z$2 = ".test[data-v-7cc4288f] {\n  color: orange;\n}";
  styleInject(css_248z$2);

  script$2.render = render$2;
  script$2.__scopeId = "data-v-7cc4288f";
  script$2.__file = "src/components/Test/Test.vue";

  // // import * as data from 'sam-test-data'
  // import { random, a, b } from 'sam-test-data'
  // // const data = require('sam-test-data')
  // import pkg from '../package.json'

  function Test (Vue) {
    Vue.component(script$2.name, script$2);
  }

  var script$1 = {
    name: 'TestComponent2',
    setup: function setup() {
      var message = 'hello Test2';
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

  var _hoisted_1$1 = {
    "class": "test2"
  };
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [vue.createElementVNode("div", null, " message: " + vue.toDisplayString($setup.message), 1 /* TEXT */), vue.createCommentVNode(" <div>\r\n      double: {{ doubleCount }}\r\n    </div>\r\n    <button @click=\"add\">add count</button> ")]);
  }

  var css_248z$1 = ".test2[data-v-f780135e] {\n  color: pink;\n}";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-f780135e";
  script$1.__file = "src/components/Test2/Test2.vue";

  // // import * as data from 'sam-test-data'
  // import { random, a, b } from 'sam-test-data'
  // // const data = require('sam-test-data')
  // import pkg from '../package.json'

  function Test2 (Vue) {
    Vue.component(script$1.name, script$1);
  }

  var script = {
    name: 'TestComponent3',
    setup: function setup() {
      var message = 'hello Test3';
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
    "class": "test3"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createElementVNode("div", null, " message: " + vue.toDisplayString($setup.message), 1 /* TEXT */), vue.createCommentVNode(" <div>\r\n      double: {{ doubleCount }}\r\n    </div>\r\n    <button @click=\"add\">add count</button> ")]);
  }

  var css_248z = ".test3[data-v-1932c093] {\n  color: blue;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-1932c093";
  script.__file = "src/components/Test3/Test3.vue";

  // // import * as data from 'sam-test-data'
  // import { random, a, b } from 'sam-test-data'
  // // const data = require('sam-test-data')
  // import pkg from '../package.json'

  function Test3 (Vue) {
    Vue.component(script.name, script);
  }

  function index (Vue) {
    // Vue.component(Test.name, Test)
    Vue.use(Test);
    Vue.use(Test2);
    Vue.use(Test3);
  }

  return index;

}));

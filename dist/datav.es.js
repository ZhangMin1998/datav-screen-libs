import { ref, computed, openBlock, createElementBlock, Fragment, createCommentVNode, createStaticVNode, createElementVNode, toDisplayString } from 'vue';

var script$2 = {
  name: 'TestComponent',
  setup: function setup() {
    var message = 'hello Test';
    var count = ref(1);
    var doubleCount = computed(function () {
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

var _hoisted_1$2 = /*#__PURE__*/createStaticVNode("<svg width=\"0\" height=\"0\" data-v-7cc4288f><defs data-v-7cc4288f><symbol id=\"more2\" viewBox=\"0 0 100 100\" data-v-7cc4288f><circle r=\"5\" cx=\"10\" cy=\"10\" fill=\"currentColor\" data-v-7cc4288f></circle><circle r=\"5\" cx=\"10\" cy=\"30\" fill=\"currentColor\" data-v-7cc4288f></circle><circle r=\"5\" cx=\"10\" cy=\"50\" fill=\"currentColor\" data-v-7cc4288f></circle><line x1=\"30\" y1=\"10\" x2=\"90\" y2=\"10\" stroke-width=\"10\" stroke=\"currentColor\" data-v-7cc4288f></line><line x1=\"30\" y1=\"30\" x2=\"90\" y2=\"30\" stroke-width=\"10\" stroke=\"currentColor\" data-v-7cc4288f></line><line x1=\"30\" y1=\"50\" x2=\"90\" y2=\"50\" stroke-width=\"10\" stroke=\"currentColor\" data-v-7cc4288f></line></symbol></defs></svg>", 1);
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" <svg width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\">\r\n    <line x1=\"0\" y1=\"50\" x2=\"100\" y2=\"50\" stroke-width=\"8\" stroke=\"currentColor\" />\r\n    <line x1=\"50\" y1=\"0\" x2=\"50\" y2=\"100\" stroke-width=\"8\" stroke=\"currentColor\" />\r\n  </svg> "), createCommentVNode(" <svg width=\"0\" height=\"0\" viewBox=\"0 0 100 100\">\r\n    <defs>\r\n      <g id=\"more\">\r\n        <circle r=\"5\" cx=\"10\" cy=\"10\" fill=\"currentColor\" />\r\n        <circle r=\"5\" cx=\"10\" cy=\"30\" fill=\"currentColor\" />\r\n        <circle r=\"5\" cx=\"10\" cy=\"50\" fill=\"currentColor\" />\r\n        <line x1=\"30\" y1=\"10\" x2=\"90\" y2=\"10\" stroke-width=\"10\" stroke=\"currentColor\" />\r\n        <line x1=\"30\" y1=\"30\" x2=\"90\" y2=\"30\" stroke-width=\"10\" stroke=\"currentColor\" />\r\n        <line x1=\"30\" y1=\"50\" x2=\"90\" y2=\"50\" stroke-width=\"10\" stroke=\"currentColor\" />\r\n      </g>\r\n    </defs>\r\n  </svg> "), _hoisted_1$2, createCommentVNode(" <div class=\"test\">\r\n    <div>\r\n      message: {{ message }}\r\n    </div>\r\n    <div>\r\n      double: {{ doubleCount }}\r\n    </div>\r\n    <button @click=\"add\">add count</button>\r\n  </div> ")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
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

var css_248z$2 = ".test[data-v-7cc4288f] {\n  color: red;\n}";
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
    var count = ref(1);
    var doubleCount = computed(function () {
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
  return openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("div", null, " message: " + toDisplayString($setup.message), 1 /* TEXT */), createCommentVNode(" <div>\r\n      double: {{ doubleCount }}\r\n    </div>\r\n    <button @click=\"add\">add count</button> ")]);
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
    var count = ref(1);
    var doubleCount = computed(function () {
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
  return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", null, " message: " + toDisplayString($setup.message), 1 /* TEXT */), createCommentVNode(" <div>\r\n      double: {{ doubleCount }}\r\n    </div>\r\n    <button @click=\"add\">add count</button> ")]);
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

export { index as default };

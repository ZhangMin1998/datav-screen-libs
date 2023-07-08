import { openBlock, createElementBlock, toDisplayString } from 'vue';

var script = {
  name: 'TestComponent',
  setup: function setup() {
    var message = 'zm 666';
    return {
      message: message
    };
  }
};

var _hoisted_1 = {
  "class": "test"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, toDisplayString($setup.message), 1 /* TEXT */);
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

export { index as default };

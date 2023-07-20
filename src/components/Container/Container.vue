<template>
  <div class="container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'
import { debounce } from '../../utils/index.js'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Container',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  setup(ctx) {
    const refName = 'container'
    const width = ref(0)
    const height = ref(0)
    const origialWidth = ref(0) // 视口区域
    const origialHeight = ref(0)
    const ready = ref(false)
    let context, dom, observer

    const init = () => {
      return new Promise((resolve) => {
        nextTick(() => {
          // 获取dom
          dom = context.$refs[refName]
          console.log(dom)
          console.log('dom', dom.clientWidth, dom.clientHeight)
          // 获取大屏真实尺寸
          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width
            height.value = ctx.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }
          // 获取画布尺寸
          if (!origialWidth.value || !origialHeight.value) {
            origialWidth.value = window.screen.width
            origialHeight.value = window.screen.height
          }
          console.log(width.value, height.value, window.screen, origialWidth.value, origialHeight.value)
          resolve()
        })
      })
    }
    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        dom.style.width = `${origialWidth.value}px`
        dom.style.height = `${origialHeight.value}px`
      }
    }
    const updateScale = () => {
      // 计算压缩比
      // 获取真实视口尺寸
      const currentWidth = document.body.clientWidth // 视口实际显示区(浏览器页面实际显示的)
      const currentHeight = document.body.clientHeight
      console.log('浏览器页面实际显示', currentWidth, currentHeight)
      
      // 获取大屏最终宽高
      const realWidth = width.value || origialWidth.value
      const realHeight = height.value || origialHeight.value
      
      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }

    const onResize = async (e) => {
      // console.log('resize', e)
      await init()
      await updateScale()
    }

    const initMutationObserver = () => {
      window.addEventListener('resize', debounce(onResize, 100))
      const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
      observer = new MutationObserver(onResize)
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      })
    }

    const removeMutationObserver = () => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }

    onMounted(async () => {
      ready.value = false
      context = getCurrentInstance().ctx
      await init()
      updateSize()
      updateScale()
      initMutationObserver()
      ready.value = true
    })
    onUnmounted(() => {
      window.removeEventListener('resize', debounce(onResize, 100))
      removeMutationObserver()
    })

    return {
      refName,
      ready
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  transform-origin: left top;
  overflow: hidden;
  z-index: 999;
}
</style>
<template>
  <div class="fly_box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path
          :id="pathId"
          :d="path"
          fill="none"
        />
        <radialGradient
          :id="radialGradientId" 
          cx="50%" 
          cy="50%" 
          fx="100%" 
          fy="50%" 
          r="50%"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask :id="maskId">
          <circle cx="0" cy="0" :r="startLength" :fill="`url(#${radialGradientId})`">
            <animateMotion
              :path="path"
              :dur="`${duration}s`"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <use 
        :href="`#${pathId}`"
        stroke-width="1"
        :stroke="lineColor"
      ></use>
      <use 
        :href="`#${pathId}`"
        stroke-width="3"
        :stroke="starColor"
        :mask="`url(#${maskId})`"
      ></use>
    </svg>
    <div class="fly_box_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import { v4 as uuidv4 } from 'uuid'
// import { uuid } from 'vue-uuid'

export default {
  name: 'DatavFlyBox',
  props: {
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    startLength: {
      type: [Number, String],
      default: 100
    },
    duration: {
      type: Number,
      default: 2
    }
  },
  setup(ctx) {
    // const uid = uuid.v1()
    // console.log(uid)
    const width = ref(0)
    const height = ref(0)
    const refName = 'flyBox'
    const customRandomBytes = (length) => {
      const bytes = new Uint8Array(length)
      for (let i = 0; i < length; i++) {
        bytes[i] = Math.floor(Math.random() * 256)
      }
      return bytes
    }
    const uuid = uuidv4({ random: customRandomBytes(16) })
    console.log(uuid)
    const pathId = `${refName}-path-${uuid}`
    const radialGradientId = `${refName}-radial-${uuid}`
    const maskId = `${refName}-mask-${uuid}`
    const path = computed(() => `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`)
    // const path = 'M5 5 L 722 5 L 722 60 L 5 60 Z'

    const init = () => {
      const instance = getCurrentInstance()
      const dom = instance.ctx.$refs[refName]
      // console.log(dom)
      width.value = dom.clientWidth
      height.value = dom.clientHeight
      // console.log(width, height)
    }

    onMounted(() => {
      init()
    })
    return {
      width,
      height,
      refName,
      path,
      pathId,
      radialGradientId,
      maskId
    }
  }
}
</script>

<style lang="scss" scoped>
.fly_box{
  position: relative;
  width: 100%;
  height: 100%;
  svg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .fly_box_content{
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
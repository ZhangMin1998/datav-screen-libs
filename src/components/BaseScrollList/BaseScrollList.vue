<template>
  <div class="base_scroll_list" :id="id">
    <div
      class="header"
      :style="{
        background: config.headerBg,
        height: `${config.headerHeight}px`
      }"
      >
      <div
        class="header_item header_text"
        v-for="(item, index) in headerData"
        :key="item + index"
        :style="{
          width: `${columnWidths[index]}px`,
          ...headerStyle[index],
        }"
        v-html="item"
      >

      </div>
    </div>
    <div class="rows">

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import useScreen from './useScreen.js'
import cloneDeep from 'lodash/cloneDeep'
import assign from 'lodash/assign'

export default {
  name: 'base-scroll-list',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const customRandomBytes = (length) => {
      const bytes = new Uint8Array(length)
      for (let i = 0; i < length; i++) {
        bytes[i] = Math.floor(Math.random() * 256)
      }
      return bytes
    }
    const id = 'base_scroll_list_' + uuidv4({ random: customRandomBytes(16) })

    const { width, height } = useScreen(id)
    const { config } = props

    const defaultConfig = {
      // 列头数据
      headerData: [],
      // header样式
      headerStyle: [],
      // header样式
      headerBg: '#999',
      // header高度
      headerHeight: 35,
      // header序号
      headerIndex: false,
      // header序号内容
      headerIndexContent: '#',
      // header序号样式
      headerIndexStyle: {
        width: '50px'
      }
    }
    const actualConfig = ref([])
    const headerData = ref([])
    const headerStyle = ref({})
    const columnWidths = ref([])

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)
      if (!_headerData.length) return
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
      }
      headerData.value = _headerData
      headerStyle.value = _headerStyle

      // 动态计算header中每一列的宽度
      let useWidth = 0 // 已经使用了的长度 不再平分
      let useColumnNum = 0
      _headerStyle.forEach(s => {
        // 如果自定义width, 则按照自定义width判断
        if (s.width) {
          useWidth += +s.width.replace('px', '')
          useColumnNum++
        }
      })
      // 动态计算列宽，使用剩余的宽度除以剩余的列数
      const avgWidth = (width.value - useWidth) / (_headerData.length - useColumnNum)
      const _columnWidth = new Array(_headerData.length).fill(avgWidth)
      columnWidths.value = _columnWidth
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config)
      handleHeader(_actualConfig)
      actualConfig.value = _actualConfig
    })
    return {
      id,
      headerData,
      headerStyle,
      columnWidths
    }
  }
}
</script>

<style lang="scss" scoped>
.base_scroll_list{
  width: 100%;
  height: 100%;
  .header{
    display: flex;
    align-items: center;
    font-size: 15px;
    .header_text{
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
    .header_item{

    }
  }
  .rows{

  }
}
</style>

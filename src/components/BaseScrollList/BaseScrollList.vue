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
    <div
      class="rows"
      v-for="(item, index) in rowsData"
      :key="index"
      :style="{
        height: `${rowHeights[index]}px`
      }"
    >
      <div
        class="row_item"
        v-for="(colData, i) in item"
        :key="colData + i"
        :style="{
          width: `${columnWidths[i]}px`
        }"
        v-html="colData"
      >
      </div>
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
      },
      // 数据项 二维数组
      data: [],
      rowNum: 5
    }
    const actualConfig = ref([])
    const headerData = ref([])
    const headerStyle = ref({})
    const columnWidths = ref([])
    const rowsData = ref([])
    const rowHeights = ref([])

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)
      const _rowsData = cloneDeep(config.data)
      if (!_headerData.length) return
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
        _rowsData.forEach((rows, i) => {
          rows.unshift(i + 1)
        })
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
      _headerStyle.forEach((s, i) => {
        // 如果自定义width, 则按照自定义width判断
        if (s.width) {
          const headerWidth = +s.width.replace('px', '')
          _columnWidth[i] = headerWidth
        }
      })
      columnWidths.value = _columnWidth
      rowsData.value = _rowsData
    }

    const handleRows = (config) => {
      // rowsData.value = config.data
      // 动态计算每行数据高度
      const { headerHeight, rowNum } = config
      const unuseHeight = height.value - headerHeight
      // 如果rowNum大于实际数据长度， 则以实际数据长度为准
      const avgHeight = unuseHeight / (rowNum > rowsData.value.length ? rowsData.value.length : rowNum)
      rowHeights.value = new Array(rowNum).fill(avgHeight)
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config)
      // 赋值rowsData
      rowsData.value = _actualConfig.data || []
      handleHeader(_actualConfig)
      handleRows(_actualConfig)
      actualConfig.value = _actualConfig
    })
    return {
      id,
      headerData,
      headerStyle,
      columnWidths,
      rowHeights,
      rowsData
    }
  }
}
</script>

<style lang="scss" scoped>
.base_scroll_list{
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    display: flex;
    align-items: center;
    .row_item{
      
      font-size: 24px;
    }
  }
}
</style>

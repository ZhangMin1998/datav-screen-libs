<template>
  <div class="base_scroll_list" :id="id">
    <div
      class="header"
      :style="{
        background: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
        fontSize: `${actualConfig.headerFontSize}px`,
        color: actualConfig.headerColor
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
        :align="aligns[index]"
        v-html="item"
      >
      </div>
    </div>

    <div
      class="rows_box"
      :style="{
        height: `${height - actualConfig.headerHeight}px`
      }"
    >
      <div
        class="rows"
        v-for="(item, index) in currentRowsData"
        :key="item.rowIndex"
        :style="{
          height: `${rowHeights[index]}px`,
          lineHeight: `${rowHeights[index]}px`,
          fontSize: `${actualConfig.rowFontSize}px`,
          backgroundColor: item.rowIndex % 2 === 0 ? rowBg[1] : rowBg[0],
          color: actualConfig.rowColor
        }"
      >
        <div
          class="row_item header_text"
          v-for="(colData, i) in item.data"
          :key="colData + i"
          :style="{
            width: `${columnWidths[i]}px`,
            ...rowStyle[i]
          }"
          :align="aligns[i]"
          v-html="colData"
        >
        </div>
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
      // 行样式
      rowStyle: [],
      // 行背景色
      rowBg: [],
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
      // 序号列内容样式
      rowIndexStyle: {
        width: '50px'
      },
      // 数据项 二维数组
      data: [],
      // 每页数据量
      rowNum: 5,
      // 居中方式
      aligns: [],
      headerFontSize: 24,
      rowFontSize: 20,
      headerColor: 'pink',
      rowColor: '#fff',
      moveNum: 1, // 移动的位置
      duration: 1000 // 动画间隔
    }
    const actualConfig = ref([])
    const headerData = ref([])
    const headerStyle = ref({})
    const rowStyle = ref([])
    const columnWidths = ref([])
    const rowsData = ref([])
    const currentRowsData = ref([]) // 真正渲染的数据
    const currentIndex = ref(0) // 动画指针
    const rowHeights = ref([])
    const rowBg = ref([])
    const aligns = ref([])

    let avgHeight // 行高

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)
      const _rowStyle = cloneDeep(config.rowStyle)
      const _rowsData = cloneDeep(config.data)
      const _aligns = cloneDeep(config.aligns)

      if (!_headerData.length) return
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
        _rowStyle.unshift(config.rowIndexStyle)
        _rowsData.forEach((rows, i) => {
          rows.unshift(i + 1)
        })
        _aligns.unshift('center')
      }
      headerData.value = _headerData
      headerStyle.value = _headerStyle
      rowStyle.value = _rowStyle
      aligns.value = _aligns

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

      const { rowNum } = config
      if (_rowsData.length >= rowNum && _rowsData.length < rowNum * 2) {
        // 加入两倍数据
        const newRowData = [..._rowsData, ..._rowsData]
        rowsData.value = newRowData.map((item, index) => ({
          data: item,
          rowIndex: index
        }))
      } else {
        rowsData.value = _rowsData.map((item, index) => ({
          data: item,
          rowIndex: index
        }))
      }
    }

    const handleRows = (config) => {
      // rowsData.value = config.data
      // 动态计算每行数据高度
      const { headerHeight, rowNum } = config
      const unuseHeight = height.value - headerHeight
      // 如果rowNum大于实际数据长度， 则以实际数据长度为准
      avgHeight = unuseHeight / (rowNum > rowsData.value.length ? rowsData.value.length : rowNum)
      rowHeights.value = new Array(rowNum).fill(avgHeight)
      
      // 获取行背景色
      if (config.rowBg) {
        rowBg.value = config.rowBg
      }
    }

    const startAnimation = async () => {
      const config = actualConfig.value
      const { rowNum, moveNum, duration } = config
      const totalLength = rowsData.value.length

      if (totalLength < rowNum) return // 数据少  不滚动
      const index = currentIndex.value
      const _rowsData = cloneDeep(rowsData.value)
      // 将数据头尾连接
      const rows = _rowsData.slice(index)
      rows.push(..._rowsData.slice(0, index))
      currentRowsData.value = rows
      // 先将所有行的高度还原
      rowHeights.value = new Array(totalLength).fill(avgHeight)
      const waitTime = 300
      await new Promise(resolve => setTimeout(resolve, waitTime))
      
      // moveNum的行高度设置0
      rowHeights.value.splice(0, moveNum, ...new Array(moveNum).fill(0))

      currentIndex.value += moveNum
      // 是否到达最后一组数据
      const isLast = currentIndex.value - totalLength
      if (isLast >= 0) {
        currentIndex.value = isLast // 循环
      }
      // sleep
      await new Promise(resolve => setTimeout(resolve, (duration - waitTime)))
      await startAnimation()
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config)
      // 赋值rowsData
      rowsData.value = _actualConfig.data || []
      handleHeader(_actualConfig)
      handleRows(_actualConfig)
      actualConfig.value = _actualConfig

      // 展示动画
      startAnimation()
    })
    return {
      actualConfig,
      id,
      headerData,
      headerStyle,
      rowStyle,
      rowBg,
      columnWidths,
      rowHeights,
      rowsData,
      currentRowsData,
      aligns,
      height
    }
  }
}
</script>

<style lang="scss" scoped>
.base_scroll_list{
  width: 100%;
  height: 100%;
  .header_text{
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
  .header{
    display: flex;
    align-items: center;
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
  .rows_box{
    overflow: hidden;
    .rows{
      display: flex;
      align-items: center;
      transition: all 0.3s linear;
      .row_item{
      }
    }
  }
}
</style>

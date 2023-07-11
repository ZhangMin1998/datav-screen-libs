<template>
  <svg class="icon" :style="{...style}">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  props: {
    name: String,
    style: Object
  },
  setup(props) {
    const iconName = `#${props.name}`

    return {
      iconName
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
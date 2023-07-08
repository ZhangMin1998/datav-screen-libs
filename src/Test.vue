<template>
  <div class="test">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'TestComponent',
    setup() {
      const message = 'zm 666'

      return{
        message
      }
    }
  }
</script>

<style lang="scss" scoped>
.test{
  color: pink;
}
</style>
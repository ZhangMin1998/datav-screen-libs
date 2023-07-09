<template>
  <!-- <svg width="200px" height="200px" viewBox="0 0 100 100">
    <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor" />
    <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor" />
  </svg> -->
  <!-- <svg width="0" height="0" viewBox="0 0 100 100">
    <defs>
      <g id="more">
        <circle r="5" cx="10" cy="10" fill="currentColor" />
        <circle r="5" cx="10" cy="30" fill="currentColor" />
        <circle r="5" cx="10" cy="50" fill="currentColor" />
        <line x1="30" y1="10" x2="90" y2="10" stroke-width="10" stroke="currentColor" />
        <line x1="30" y1="30" x2="90" y2="30" stroke-width="10" stroke="currentColor" />
        <line x1="30" y1="50" x2="90" y2="50" stroke-width="10" stroke="currentColor" />
      </g>
    </defs>
  </svg> -->
  <svg width="0" height="0">
    <defs>
      <symbol id="more2" viewBox="0 0 100 100">
        <circle r="5" cx="10" cy="10" fill="currentColor" />
        <circle r="5" cx="10" cy="30" fill="currentColor" />
        <circle r="5" cx="10" cy="50" fill="currentColor" />
        <line x1="30" y1="10" x2="90" y2="10" stroke-width="10" stroke="currentColor" />
        <line x1="30" y1="30" x2="90" y2="30" stroke-width="10" stroke="currentColor" />
        <line x1="30" y1="50" x2="90" y2="50" stroke-width="10" stroke="currentColor" />
      </symbol>
    </defs>
  </svg>
  <!-- <div class="test">
    <div>
      message: {{ message }}
    </div>
    <div>
      double: {{ doubleCount }}
    </div>
    <button @click="add">add count</button>
  </div> -->
</template>

<script>
import { ref, computed } from 'vue'
  export default {
    name: 'TestComponent',
    setup() {
      const message = 'hello Test'
      const count = ref(1)
      const doubleCount = computed(() => count.value * 2)
      const add = () => {
        count.value++
      }

      return{
        message,
        doubleCount,
        add
      }
    }
  }
</script>

<style lang="scss" scoped>
.test{
  color: red;
}
</style>
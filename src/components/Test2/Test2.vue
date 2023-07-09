<template>
  <div class="test2">
    <div>
      message: {{ message }}
    </div>
    <!-- <div>
      double: {{ doubleCount }}
    </div>
    <button @click="add">add count</button> -->
  </div>
</template>

<script>
import { ref, computed } from 'vue'
  export default {
    name: 'TestComponent2',
    setup() {
      const message = 'hello Test2'
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
.test2{
  color: pink;
}
</style>
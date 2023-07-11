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
      <symbol id="zdxm" viewBox="0 0 1024 1024">
        <path d="M516.32 285.28A98.56 98.56 0 1 0 614.88 384a98.56 98.56 0 0 0-98.56-98.72z m0 164.96A66.56 66.56 0 1 1 582.88 384a66.56 66.56 0 0 1-66.56 66.24zM996.96 976H835.04a134.24 134.24 0 0 0-135.36-119.52A139.36 139.36 0 0 0 620.8 880a164.48 164.48 0 0 0-36.32-27.2V800a16 16 0 0 0-32 0v39.84a162.4 162.4 0 0 0-46.24-6.72 164.48 164.48 0 0 0-44.64 6.4V800a16 16 0 0 0-32 0v52.32a157.44 157.44 0 0 0-37.92 28.32 139.52 139.52 0 0 0-80-24.8A134.4 134.4 0 0 0 176.96 976H22.72a16 16 0 0 0 0 32h974.24a16 16 0 0 0 0-32z m-297.28-87.84A102.56 102.56 0 0 1 802.88 976h-137.76a148.48 148.48 0 0 0-24-69.76 104.8 104.8 0 0 1 58.56-18.08z m-193.44-22.72A125.92 125.92 0 0 1 633.12 976H379.52a125.76 125.76 0 0 1 126.72-110.56z m-193.92 22.72a108.16 108.16 0 0 1 59.04 17.92A150.08 150.08 0 0 0 347.52 976h-138.24a102.56 102.56 0 0 1 103.04-87.84z" fill="#3FA9F5" p-id="977"></path>
        <path d="M218.72 646.08h99.84a10.56 10.56 0 0 0 2.4 0 14.4 14.4 0 0 0 2.56 0h74.4L368 738.72a16 16 0 0 0 2.24 14.24 16 16 0 0 0 12.96 6.56h259.68a16 16 0 0 0 12.96-6.56 16 16 0 0 0 2.24-14.24l-29.76-92.64H813.92a16 16 0 0 0 16-16v-4.32c0-136.16-52.48-244-121.28-253.76-29.92-204.8-97.12-368-192-368s-161.92 163.36-192 368c-69.28 8.8-122.24 116.96-122.24 253.92v4.32a16 16 0 0 0 16.32 15.84z m376.96 3.2l25.28 78.24H405.28l25.28-78.24a21.76 21.76 0 0 0 0-3.2h164.8a10.88 10.88 0 0 0 0.32 3.2z m-256-35.2c0-185.44 27.04-338.24 64-440h226.24c37.6 101.76 64 254.56 64 440z m458.56 0H726.4a1738.72 1738.72 0 0 0-12.96-208c41.76 15.52 81.76 94.72 84.48 208zM516.96 36c34.4 0 69.92 37.92 100 106.08h-200c30.08-68.16 65.44-106.08 100-106.08zM320 405.76a1741.76 1741.76 0 0 0-13.12 208h-72c2.56-114.08 43.36-193.6 85.12-208z" fill="#3FA9F5" p-id="978"></path>
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
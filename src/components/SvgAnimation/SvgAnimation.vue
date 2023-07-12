<template>
  <div style="display: flex;">
    <div class="container">
      <svg width="500" height="500" viewBox="0 0 500 500">
        <!-- <rect x="0" y="0" width="100" height="100" fill="pink" transform="translate(60,50) rotate(30) scale(.5) skewX(30)" /> -->
        <rect x="0" y="0" width="100" height="100" fill="pink" transform="matrix(3 1 -1 3 30 40)" />
      </svg>
    </div>
    <div class="container">
      <svg width="500" height="500">
        <circle cx="200" cy="200" r="100" stroke-width="20" stroke="#d1d3d7" fill="none"></circle>
        <circle
          class="circle"
          cx="200"
          cy="200"
          r="100"
          stroke-width="20"
          stroke="#00a5e0"
          fill="none"
        ></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SvgAnimation',
  props: {},
    
  setup() {
    

    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  .circle{
    /* stroke-dasharray: 628 628; */
    animation: circle 5s linear infinite;
  }
  @keyframes circle {
    from {
      stroke-dasharray: 0 628;
    }
    to {
      stroke-dasharray: 628 0;
    }
  }
}

</style>
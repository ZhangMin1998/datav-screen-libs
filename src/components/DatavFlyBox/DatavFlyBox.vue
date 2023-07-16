<template>
  <div class="fly_box">
    <svg width="400" height="400">
      <defs>
        <path
          id="fly-box-path"
          d="M5 5 L 395 5 L 395 395 L 5 395 Z"
          fill="none"
        ></path>
        <mask id="fly-box-mask">
          <circle cx="0" cy="0" r="100" fill="pink">
            <animateMotion
              path="M5 5 L 395 5 L 395 395 L 5 395 Z"
              dur="2s"
              rotate="auto"
              fill="freeze"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <use 
        href="#fly-box-path"
        stroke-width="1"
        stroke="#235fa7"
      ></use>
      <use 
        href="#fly-box-path"
        stroke-width="3"
        stroke="#4fd2dd"
        mask="url(#fly-box-mask)"
      ></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DatavFlyBox',
  props: {

  },
  setup(props) {

    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
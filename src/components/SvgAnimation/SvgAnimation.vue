<template>
  <div style="display: flex;">
    <div class="container">
      <svg width="400" height="400" viewBox="0 0 400 400">
        <!-- <rect x="0" y="0" width="100" height="100" fill="pink" transform="translate(60,50) rotate(30) scale(.5) skewX(30)" /> -->
        <rect x="0" y="0" width="100" height="100" fill="pink" transform="matrix(3 1 -1 3 30 40)" />
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
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
    <div class="container">
      <svg viewBox="0 0 1024 1024" width="200" height="200">
        <path class="logo" id="logo" d="M284.2624 84.138667l2.935467-1.809067-0.750934-1.2288a5.563733 5.563733 0 0 1-2.184533 3.072z m27.0336 33.006933c3.515733 8.3968 6.485333 17.066667 9.284267 28.296533 2.1504 11.5712 2.8672 24.302933 2.1504 41.3696l-0.546134 4.164267a112.503467 112.503467 0 0 1-7.8848 24.849067c-6.0416 12.561067-15.291733 25.941333-28.125866 40.618666a210.261333 210.261333 0 0 1-23.415467 20.8896l-9.250133 6.997334a392.260267 392.260267 0 0 0-109.021867 124.689066 344.1664 344.1664 0 0 0-42.9056 166.6048 336.9984 336.9984 0 0 0 30.788267 141.346134 359.253333 359.253333 0 0 0 84.343466 115.234133c74.274133 68.266667 173.4656 105.949867 279.483734 105.949867h4.573866c105.472-1.092267 205.243733-39.355733 281.429334-107.861334a378.709333 378.709333 0 0 0 88.610133-117.009066c21.742933-44.714667 33.621333-93.5936 34.781867-143.36a340.548267 340.548267 0 0 0-66.8672-211.080534c-44.4416-60.654933-107.076267-107.008-181.1456-133.905066-14.199467-5.12-28.672-9.489067-45.568-13.687467a662.6304 662.6304 0 0 0-74.8544-19.2512 146.432 146.432 0 0 1-6.9632-1.536l-3.925334-0.955733a2251.707733 2251.707733 0 0 1-46.2848-13.550934c-45.1584-16.042667-88.064-37.751467-141.243733-68.881066-17.237333-9.728-32.324267-16.2816-43.758933-19.387734a92.8768 92.8768 0 0 0-3.959467-0.9216c7.3728 8.4992 13.7216 17.749333 20.2752 30.378667zM170.666667 882.551467a427.349333 427.349333 0 0 1-100.283734-137.045334 405.230933 405.230933 0 0 1-37.0688-169.915733c0-69.802667 17.271467-136.942933 51.234134-199.2704a459.298133 459.298133 0 0 1 118.784-139.537067l9.4208-7.338666 6.417066-4.778667c6.417067-4.7104 12.424533-9.966933 16.725334-14.336a120.149333 120.149333 0 0 0 16.349866-22.9376c1.365333-3.140267 2.321067-6.144 2.4576-6.382933a121.617067 121.617067 0 0 0-0.7168-20.821334 163.84 163.84 0 0 0-4.334933-13.824 80.452267 80.452267 0 0 0-10.478933-15.189333 98.645333 98.645333 0 0 1-8.465067-11.332267c-9.4208-14.7456-14.4384-31.266133-11.605333-49.7664a62.805333 62.805333 0 0 1 29.320533-44.032L256 21.367467l8.635733-2.116267C269.653333 18.090667 275.3536 17.408 281.8048 17.408c9.216 0 19.1488 1.365333 29.354667 3.9936 19.182933 5.154133 39.389867 13.994667 62.464 27.0336 49.083733 28.7744 88.849067 48.878933 127.658666 62.737067 12.970667 3.925333 27.579733 8.192 41.984 12.288 4.8128 1.1264 5.802667 1.365333 6.724267 1.501866 27.170133 5.256533 54.9888 12.424533 80.4864 20.616534 16.9984 4.164267 33.792 9.216 50.346667 15.189333 86.698667 31.505067 160.426667 86.050133 212.992 157.764267a408.7808 408.7808 0 0 1 80.008533 253.064533 413.969067 413.969067 0 0 1-41.608533 171.52 446.839467 446.839467 0 0 1-104.379734 137.966933c-89.7024 80.725333-207.291733 125.201067-330.990933 125.405867-123.562667-0.034133-239.274667-44.032-326.212267-123.904z m193.194666-439.6032v144.213333h96.1536v-144.213333H363.861333z m312.456534 0v144.213333h96.119466v-144.213333h-96.119466z" fill="#666666" p-id="5711"></path>
      </svg>
    </div>
    <div class="container">
      <svg class="line-box" viewBox="0 0 400 400" width="400" height="400">
        <line class="line" x1="0" y1="20" x2="400" y2="20" fill="none" stroke-width="20" stroke="red"></line>
      </svg>
    </div>

    <!-- svg 动画（SMIL） -->
    <div class="container">
      <!-- 移动的方块 -->
      <!-- <svg width="200" height="200">
        <rect x="0" y="0" fill="pink" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" begin="1s" />
          <set attributeName="x" attributeType="XML" to="20" begin="2s" />
          <set attributeName="fill" attributeType="XML" to="green" begin="3s" />
          <set attributeName="x" attributeType="XML" to="40" begin="4s" />
          <set attributeName="x" attributeType="XML" to="50" begin="5s" />
        </rect>
      </svg> -->

      <!-- 移动的小球 -->
      <svg width="300" height="300">
        <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
          <animate attributeName="cx" from="0" to="200" dur="5s" repeatCount="indefinite" />
          <animate attributeName="cy" from="0" to="200" dur="5s" repeatCount="indefinite" />
          <animate attributeName="fill" from="green" to="red" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
      <!-- 形状补间动画 -->
      <svg width="200" height="200">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze" repeatCount="1" />
        </polygon>
      </svg>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SvgAnimation',
  props: {},
    
  setup() {

    onMounted(() => {
      const path = document.getElementById('logo')
      const pathLen = path.getTotalLength()
      console.log(pathLen) // 6656.9
    })

    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 400px;
  height: 400px;
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

  .logo{
    fill: none;
    stroke: #333;
    stroke-width: 5;
    animation: logo 3s linear infinite forwards;
  }
  @keyframes logo {
    0% {
      stroke-dasharray: 6657;
      stroke-dashoffset: 6657;
    }
    50% {
      stroke-dasharray: 6657;
      stroke-dashoffset: 0;
    }
    75%{
      fill: orange;
    }
    100%{
      fill: red;
    }
  }
  .line-box{
    &:hover{
      .line{
        stroke-dashoffset: 0;
      }
    }
  }
  .line{
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: stroke-dashoffset 0.5s ease-in;
  }
}

</style>
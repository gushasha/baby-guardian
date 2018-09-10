<template>
  <div class="content-wrapper">
    <vue-progress-bar :value="value"  :options="options"></vue-progress-bar>
  </div>
</template>

<script>
  import VueProgressBar from 'svg-progress-bar' // https://juejin.im/post/5a689d34518825732c53b8bf

  export default {
    name: 'TemperatureCircle',
    components: {
      VueProgressBar
    },
    props: ['value'],
    computed: {
      options () {
        let textColor
        if (this.value >= 36.5 && this.value <= 37.5) {
          textColor = '#4FCE98'
        } else if (this.value > 35.5 && this.value < 38.5) {
          textColor = '#FFA500'
        } else {
          textColor = '#FF0000'
        }
        return {
          radius: 100,
          text: function (value) {
            return value + '<span style="font-size: 18px;" class="iconfont">&#xe61e;</span>'
          },
          textColor: textColor,
          maxValue: 42,
          circleWidth: 20,
          pathColors: ['#eeeeee', textColor]
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .content-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>

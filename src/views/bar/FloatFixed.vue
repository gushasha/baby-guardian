<template>
  <div class="footer-wrapper" :class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BarFloatFixed',
  props: {
    background: {
      default: 'warning'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
@import "~styles/veribles.less";
.footer-wrapper {
  position: fixed;
  right: 20px;
  bottom: 60px;
  box-sizing: border-box;
  z-index: 99;
  display: inline-block;
  text-align: center;
  color: #fff;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  border-radius: 60px;
  padding: 0 8px;
  background-clip: padding-box;
  vertical-align: middle;
}
.warning {
  background: @colorWarning;
}
.success {
  background: @colorSuccess;
}
</style>

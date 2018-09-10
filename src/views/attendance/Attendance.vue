<template>
  <div>
    <header-back></header-back>
    <attendance-body></attendance-body>
  </div>
</template>
<script>
  import HeaderBack from 'views/bar/HeaderBack'
  import AttendanceBody from './components/Body'
  import DateTimePicker from 'components/date/DateTimePicker'

  export default {
    components: {
      HeaderBack,
      AttendanceBody,
      DateTimePicker
    }
  }
</script>
<style>
</style>
<style lang="less" scoped>
</style>


<template>
  <div>
    <div class="menu-title">
      <span class="iconfont icon-menu-style">&#xe61d;</span> 近期刷卡记录
    </div>
    <attendance-panel-list :attendanceList="attendanceList"></attendance-panel-list>
    <div class="my-panel">
      <router-link to="/attendance" tag="div" class="my-panel-footer">
        <span class="link">查看更多 >>></span>
      </router-link>
    </div>
  </div>
</template>
<script>
  import AttendancePanelList from '../../attendance/components/PanelList'
  export default {
    name: 'HomeAttendance',
    components: {
      AttendancePanelList
    },
    props: {
      attendanceList: Array
    }
  }
</script>
<style lang="less" scoped>
  .menu-title {
    margin-left: 10px;
    margin-right: 10px;
    color: #666666;
    font-size: 16px;
  }
  .icon-menu-style {
    color: darkorange;
    font-size: 20px;
  }
</style>

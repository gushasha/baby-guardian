<template>
  <div>
    <div class='menu-title'>
      <span class='iconfont icon-menu-style'>&#xe694;</span> 近期通知
    </div>
    <notice-panel-list :noticeList="noticeList"></notice-panel-list>
    <div class="my-panel">
      <router-link to='/notice' tag='div' class='my-panel-footer'>
        <span class='link'>查看更多 >>></span>
      </router-link>
    </div>
  </div>
</template>
<script>
import NoticePanelList from '../../notice/components/PanelList'
export default {
  name: 'HomeNotice',
  components: {
    NoticePanelList
  },
  props: {
    noticeList: Array
  }
}
</script>
<style lang='less' scoped>
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

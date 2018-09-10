<template>
  <div>
    <tab>
      <tab-item
        :selected="$route.path === '/pay/server'"
        @on-item-click="onItemClick('/pay/server')"
      >服务费</tab-item>
      <tab-item
        :selected="$route.path === '/pay/live'"
        @on-item-click="onItemClick('/pay/live')"
      >视频直播</tab-item>
    </tab>
    <div class="avatar-wrapper">
      <user-title
        :img="user.avatar"
        :title="user.name"
        :desc="user.age + ' 岁'"
      ></user-title>
    </div>
    <router-view></router-view>
    <header-back path="/home"></header-back>
  </div>
</template>

<script>
  import UserTitle from 'components/page/UserTitle'
  import HeaderBack from 'views/bar/HeaderBack'
  import { Tab, TabItem } from 'vux'
  export default {
    name: 'Pay',
    components: {
      UserTitle,
      HeaderBack,
      Tab,
      TabItem
    },
    data () {
      return {
        user: {
          id: 1,
          avatar: '/static/img/avatar/farther.png',
          name: '李蓝宝',
          age: '13'
        }
      }
    },
    methods: {
      onItemClick (router) {
        this.$router.push({path: router})
      }
    }
  }
</script>

<style lang="less" scoped>
.avatar-wrapper {
  width: 100%;
  background: #ffffff;
  padding: 10px;
}
</style>

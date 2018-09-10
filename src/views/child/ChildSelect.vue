<template>
  <div class="child-body-wrapper">
    <div class="desc-wrapper">
      <h2 class="desc-title">请选择宝贝</h2>
      <span>进入系统后，可以在首页的"<span style="color: darkorange; font-size: 12px" class="iconfont">&#xe629;宝贝</span>"进行切换～</span>
    </div>
    <group>
      <radio
        :options="childList"
        :value="child.id"
        @on-change="onChildChange"
      ></radio>
    </group>
  </div>
</template>

<script>
  import { _axios } from 'common/myAxios'
  import { Radio, Group } from 'vux'
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'HomeChild',
    components: {
      Radio,
      Group
    },
    data () {
      return {
        childList: []
      }
    },
    computed: {
      ...mapState(['child'])
    },
    methods: {
      ...mapMutations(['changeChildChecked']),
      onChildChange (val) {
        if (!val) {
          this.$vux.toast.text('请选择一个宝贝～', 'middle')
          return
        }
        this.changeChildChecked(val)
        this.$router.push('/home')
      },
      getAllChildren () {
        if (this.childList.length !== 0) {
          return
        }
        _axios.get('/api/wGuardian/child/list').then(res => {
          if (res.child_list.length === 1) {
            this.onChildChange(res.child_list[0].id)
            return
          }
          for (let item of res.child_list) {
            let optionItem = {
              key: item.id,
              value: item.name
            }
            this.childList.push(optionItem)
          }
        })
      }
    },
    mounted () {
      this.getAllChildren()
    }
  }
</script>

<style lang="less" scoped>
  .child-body-wrapper {
    width: 100%;
  }
  .desc-title {
    color: darkorange;
  }
  .desc-wrapper {
    background: #ffffff;
    padding: 10px;
    height: 50px;
    color: #7c7c7c;
    font-size: 12px;
  }
</style>

<template>
  <div class="child-body-wrapper">
    <div class="content">
      <div class="content-left">
        <div class="image-wrapper">
          <img class="img" :src="childInfo.avatar.length ? childInfo.avatar : '/static/img/avatar/child.png'"/>
        </div>
      </div>
      <div class="content-right">
        <div class="right-main">
          <span class="right-main-title">{{ childInfo.name }} </span>
          <span v-if="childInfo.gender === 1" class="iconfont right-main-tag girl">&#xe622;</span>
          <span v-else class="iconfont right-main-tag boy">&#xe73b;</span>
        </div>
        <span class="right-ext">已上幼儿园{{ childInfo.days_enter_school }}天</span>
      </div>
      <div v-transfer-dom>
        <popup v-model="showChildrenChange" position="right" width="100%" :is-transparent="true" :hide-on-blur=true>
          <popup-header
            right-text="关闭"
            title="切换您的宝贝"
            @on-click-left="showChildrenChange = false"
            @on-click-right="showChildrenChange = false"
          ></popup-header>
          <group gutter="0">
            <radio
              @on-change="onChildChange"
              :options="childList"
              :value="child.id"
            ></radio>
          </group>
        </popup>
      </div>
    </div>
    <div class="setting" v-if="childCount > 1">
      <span  @click="displayChangeChild" class="iconfont change-baby-btn" >&#xe629; 宝贝</span>
    </div>
  </div>
</template>

<script>
  import { _axios } from 'common/myAxios'
  import { Popup, PopupHeader, Radio, Group, XButton } from 'vux'
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'HomeChild',
    components: {
      Popup,
      PopupHeader,
      Radio,
      Group,
      XButton
    },
    props: ['childInfo', 'childCount'],
    data () {
      return {
        showChildrenChange: false,
        childList: []
      }
    },
    computed: {
      ...mapState(['child'])
    },
    methods: {
      ...mapMutations(['changeChildChecked']),
      displayChangeChild () {
        this.showChildrenChange = true
        if (this.childList.length === 0) {
          this.getAllChildren()
        }
      },
      onChildChange (val) {
        this.changeChildChecked(val)
        this.$emit('change', val)
        this.showChildrenChange = false
      },
      getAllChildren () {
        this.childList = []
        _axios.get('/api/wGuardian/child/list').then(res => {
          for (let item of res.child_list) {
            let optionItem = {
              key: item.id,
              value: item.name
            }
            this.childList.push(optionItem)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.child-body-wrapper {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid #E5E5E5;
  width: 100%;
}
.content {
  display: flex;
  justify-content: flex-start;
}
.content-left {
  margin: 10px;
}
.image-wrapper {
  margin: 0 auto;
  border-radius: 80px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  background: #eeeeee;
}
.content-right {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.right-main {
  height: 30px;
  line-height: 30px;
}
.right-main-title {
  font-size: 20px;
}
.right-main-tag {
  color: #ffffff;
  border-radius: 12px;
  padding: 2px 4px;
  font-size: 12px;
}
.img {
  width: 100%;
}
.right-ext {
  color: #666666;
  background: #eeeeee;
  border-radius: 12px;
  padding: 0 6px;
  font-size: 12px;
}
.girl {
  background: #d90a16;
}
.boy {
  background: #42b983;
}
.setting {
  margin: 15px 10px 0 0 ;
}
.change-baby-btn {
  display: block;
  color: #FF8C00;
  border: 1px solid #FF8C00;
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 12px;
}
</style>

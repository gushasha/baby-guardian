<template>
  <div>
    <group title="家长信息">
      <x-input title="姓 名" required v-model="guardian.name"></x-input>
      <x-input title="手机号" :max="13" is-type="china-mobile" v-model="guardian.mobile"></x-input>
    </group>
    <group title="孩子信息">
      <x-input title="姓 名" required v-model="child.name"></x-input>
      <x-input title="年 龄" required type="number" v-model="child.age" ></x-input>
      <popup-radio title="性  别" :options="genderMap" v-model="child.gender"></popup-radio>
    </group>
    <group title="说明">
      <x-textarea
        :min="0"
        :max="500"
        :rows="5"
        :autosize="true"
        v-model="desc"
      ></x-textarea>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="submitAdvice" type="primary">提&emsp;交</x-button>
    </div>
    <header-back></header-back>
  </div>
</template>
<script>
  import { XTextarea, Group, XInput, XButton, PopupRadio } from 'vux'
  import { _axios } from 'common/myAxios'
  import HeaderBack from 'views/bar/HeaderBack'
  import { genderMap } from 'common/map'

  export default {
    components: {
      XTextarea,
      Group,
      XInput,
      XButton,
      PopupRadio,
      HeaderBack
    },
    data () {
      return {
        genderMap,
        guardian: {
          name: '',
          mobile: ''
        },
        child: {
          name: '',
          gender: '1',
          age: ''
        },
        desc: ''
      }
    },
    methods: {
      submitAdvice () {
        let requestData = {
          params: {
            guardian: this.guardian,
            child: this.child,
            desc: this.desc
          }
        }
        _axios.get('/api/wGuardian/recommend/create', requestData).then(res => {
          this.$vux.toast.show({
            type: 'success',
            text: '成功'
          })
        })
      }
    }
  }
</script>
<style>
</style>
<style lang="less" scoped>
</style>

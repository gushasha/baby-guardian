<template>
  <div>
    <div class="header-wrapper">
      <div class="image-wrapper" @click="onClickAvatar">
        <img class="img" :src="child.avatar">
        <input
          id="upload-input"
          type="file"
          style="display: none"
          ref="uploadAvatar"
          @change="upLoad($event)"
          accept="image/jpeg,image/png,image/gif"
        >
      </div>
    </div>
    <group label-width="5em">
      <x-input title="宝贝姓名" text-align="right" v-model="child.name"></x-input>
      <popup-radio title="性别" :options="genderMap" v-model="child.gender"></popup-radio>
      <datetime
        v-model="child.birthday"
        title="出生日期"
        :start-date="minDate"
        :end-date="today"
        placeholder="未设置"
      ></datetime>
      <datetime
        v-model="child.date_enter_school"
        title="入园时间"
        :start-date="minDate"
        :end-date="today"
        placeholder="未设置"
      ></datetime>
    </group>
    <group >
      <x-input title="学校" disabled text-align="right" :value="child.school_name" @click.native="onClickDisabled"></x-input>
      <x-input title="班级" disabled text-align="right" :value="child.class_name" @click.native="onClickDisabled" ></x-input>
    </group>
    <group>
      <x-input title="身高" text-align="right" placeholder="请输入身高" v-model="child.height"><span slot="right">&emsp;CM</span></x-input>
      <x-input title="体重" text-align="right" placeholder="请输入体重" v-model="child.weight"><span slot="right">&emsp;KG</span></x-input>
      <popup-radio title="我与宝贝关系" :options="familyRelationMap"  placeholder="未设置" v-model="child.family_relation"></popup-radio>
    </group>
    <div class="btn-wrapper">
      <x-button type="primary" @click.native="submitChild">提交修改</x-button>
    </div>
    <header-back></header-back>
  </div>
</template>

<script>
  import HeaderBack from 'views/bar/HeaderBack'
  import { Group, XButton, XInput, PopupRadio, Datetime } from 'vux'
  import { genderMap, familyRelationMap } from 'common/map'
  import { today } from 'common/date'
  import { _axios } from 'common/myAxios'
  import axios from 'axios'
  export default {
    name: 'UserEdit',
    components: {
      HeaderBack,
      Group,
      XButton,
      XInput,
      PopupRadio,
      Datetime
    },
    data () {
      return {
        genderMap,
        familyRelationMap,
        child: {
          id: '',
          name: '',
          avatar: '',
          gender: '',
          birthday: '',
          date_enter_school: '',
          school_name: '',
          class_name: '',
          height: '',
          weight: '',
          family_relation: ''
        },
        minDate: '2010-01-01',
        today: today()
      }
    },
    methods: {
      getChildInfo () {
        _axios.get('/api/wGuardian/child/getOne').then(res => {
          this.child = res
        })
      },
      submitChild () {
        let requestData = {
          params: {
            child: this.child
          }
        }
        _axios.get('/api/wGuardian/child/editOne', requestData).then(res => {
          this.getChildInfo()
          this.$vux.toast.show({
            type: 'success',
            text: '成功'
          })
        })
      },
      onClickAvatar () {
        this.$refs.uploadAvatar.click()
        this.$refs.uploadAvatar.click()
      },
      onClickDisabled () {
        this.$vux.toast.text('不可以修改哦～')
      },
      upLoad (e) {
        let files = e.target.files
        if (files.length <= 0) {
          return
        }
        axios.get('https://yesno.wtf/api').then((res) => {
          this.child.avatar = res.data.image
        })
      }
    },
    mounted () {
      this.getChildInfo()
    }
  }
</script>

<style lang="less" scoped>
  .header-wrapper {
    background: #ffffff;
    padding: 15px 0;
  }
  .image-wrapper {
    margin: 0 auto;
    border-radius: 100px;
    width: 100px;
    height: 100px;
    background: #cccccc;
    .img {
      border-radius: 200px;
      width: 100%;
      height: 100%;
    }
  }
  .btn-wrapper {
    padding: 10px;
  }
  .weui-btn_primary {
    background-color: orange;
  }
</style>

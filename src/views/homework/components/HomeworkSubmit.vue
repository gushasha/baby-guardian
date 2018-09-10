<template>
  <div>
    <group title="提交作业">
      <x-textarea :max="2000" autosize v-model="desc" :rows="6"></x-textarea>
    </group>
    <upload-img @change="changeImgList"></upload-img>
    <div class="button-wrapper">
      <div>
        <x-button type="default"  @click.native="handleCancel">取消</x-button>
      </div>
      <div>
        <x-button type="primary"  @click.native="handleSubmit">提交</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { XTextarea, Group, XButton, Toast } from 'vux'
  import UploadImg from 'components/upload/UploadImg'
  import { _axios } from 'common/myAxios'

  export default {
    name: 'HomeworkSubmit',
    components: {
      XTextarea,
      Group,
      XButton,
      Toast,
      UploadImg
    },
    data () {
      return {
        desc: '',
        imageList: []
      }
    },
    methods: {
      changeImgList (imageList) {
        this.imageList = imageList
      },
      handleSubmit () {
        if (this.desc.length === 0 && this.imageList.length === 0) {
          this.showError('作业内容不能为空～')
          return
        }
        let requestData = {
          params: {
            desc: this.desc,
            image_list: this.imageList
          }
        }
        _axios.get('/api/wGuardian/homework/submit', requestData).then(res => {
          this.$vux.toast.show({
            type: 'success',
            text: '成功～'
          })
          this.$emit('on-submit')
        })
      },
      handleCancel () {
        this.$emit('on-cancel')
      },
      showError (msg) {
        this.$vux.toast.text(msg, 'middle')
      }
    }
  }
</script>

<style lang="less" scoped>
.button-wrapper {
  background: #ffffff;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>

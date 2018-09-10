<template>
  <div class="wrapper">
    <div class="desc-wrapper">
      <span>到期时间:&emsp;</span>
      <span :class="expireStatus">2018/12/12</span>
    </div>
      <checker
        class="pay-wrapper"
        v-model="feeType"
        default-item-class="pay-item-default"
        selected-item-class="pay-item-selected"
        type="radio"
        radio-required
      >
        <checker-item value="year">
          <div class="pay-item">
            <div class="pay-item-title">一学年</div>
            <div class="pay-item-content">
              <span class="content-tag iconfont">&#xe600;</span>
              <span class="content-num">24.00</span>
            </div>
            <div class="pay-item-note">12个月</div>
          </div>
        </checker-item>
        <checker-item value="term">
          <div class="pay-item">
            <div class="pay-item-title">一学期</div>
            <div class="pay-item-content">
              <span class="content-tag iconfont">&#xe600;</span>
              <span class="content-num">12.00</span>
            </div>
            <div class="pay-item-note">6个月</div>
          </div>
        </checker-item>
      </checker>
    <div>
      <x-button type="primary" @click.native="handlePay">立即续费</x-button>
    </div>
  </div>
</template>

<script>
  import { XButton, Checker, CheckerItem } from 'vux'
  export default {
    name: 'PayServer',
    components: {
      XButton,
      Checker,
      CheckerItem
    },
    data () {
      return {
        expireStatus: 'warning',
        feeType: 'year'
      }
    },
    methods: {
      handlePay () {
        this.$vux.toast.show({
          type: 'success',
          text: '支付成功'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.wrapper {
  background: #ffffff;
  padding: 10px;
}
.desc-wrapper {
  background: #eeeeee;
  border-radius: 10px;
  line-height: 48px;
  height: 48px;
  text-indent: 10px;
  font-size: 16px;
}
.warning {
  font-size: 20px;
  color: orange;
}
.success {
  font-size: 20px;
  color: green;
}
.danger {
  font-size: 20px;
  color: red;
}
.pay-wrapper {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.pay-item {
  padding: 6px;
  text-align: center;
  .pay-item-title {
    font-size: 16px;
    font-weight: bold;
  }
  .pay-item-content {
    color: #885e35;
    .content-tag {
      font-size: 14px;
    }
    .content-num {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .pay-item-note {
    font-size: 12px;
    color: #7c7c7c;
  }
}
.pay-item-default {
  border: 1px solid #cacaca;
}
.pay-item-selected {
  border: 1px solid #ffb74d;
  background: #fff6ed;
}
.weui-btn_primary {
  background-color: orange;
}
</style>

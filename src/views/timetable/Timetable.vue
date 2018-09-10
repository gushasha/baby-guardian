<template>
  <div class="wrapper">
    <div>
      <table class="table"  cellspacing="4">
        <thead>
        <tr>
          <th>&emsp;</th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
          <th>周日</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="n of 9" :key="n">
          <td class="td-first">
            {{ n }}<br>
            <popover placement="right">
              <div slot="content" class="popover-demo-content">
                {{ (n * 1) + 8 }}:00 - {{ (n * 1) + 8 }}:50
              </div>
              <span class="iconfont">&#xe6e5;</span>
            </popover>
          </td>
          <td class="td-text">
            <span v-if="n % 2 === 0">贴画DIY</span>
          </td>
          <td class="td-text">
            <span v-if="n % 5 === 0">捉蝴蝶</span>
          </td>
          <td class="td-text">微积分</td>
          <td class="td-text">
            <span v-if="(n - 1) % 5 === 0">面向对象分析与设计</span>
          </td>
          <td class="td-text">国学《弟子规》</td>
          <td class="td-text">
            <span v-if="n % 4 === 0">平衡走路</span>
          </td>
          <td class="td-text"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <header-back></header-back>
  </div>
</template>

<script>
  import HeaderBack from 'views/bar/HeaderBack'
  import { Popover } from 'vux'
  export default {
    components: {
      HeaderBack,
      Popover
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    background: rgba(66, 185, 131, 1);
  }
  .table {
    color: #ffffff;
    width: 100%;
    td {
      font-size: 14px;
      border-radius: 8px;
      padding-left: 4px;
    }
    th {
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  .td-first {
    font-size: 20px;
    font-weight: bold;
    width: 10px;
    text-align: center;
  }
  .td-text {
    width: 20px;
    color: #7c7c7c;
    background: #ffffff;
    text-align: center;
  }
  .popover-demo-content {
    padding: 5px 10px;
  }
</style>

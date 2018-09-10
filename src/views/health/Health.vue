<template>
  <div>
    <!-- 顶部返回按钮 -->
    <header-back></header-back>
    <!-- 内容 -->
    <div v-if="temperatureList.length" class="content-wrapper">
      <div class="single-wrapper vux-1px-b">
        <b-b-t-circle :value="latestTemperature.value"></b-b-t-circle>
        <div>
          <p class="desc">最新体温</p>
          <p class="note">测量时间 {{ latestTemperature.time }}</p>
        </div>
      </div>
      <div class="list-wrapper " >
        <b-b-t-chart :temperatureList="temperatureList"></b-b-t-chart>
        <div class="desc">今日体温一览</div>
        <div class="note">平均温度: {{ temAverage }}<span class="iconfont" style="font-size: 12px"> &#xe61e;</span></div>
      </div>
    </div>
    <no-data v-else>
      <div slot="ext">今日未测量体温...</div>
    </no-data>
  </div>
</template>

<script>
  import HeaderBack from 'views/bar/HeaderBack'
  import NoData from 'components/page/NoData'
  import { _axios } from 'common/myAxios'
  import { formatUnixToText } from 'common/date'
  import BBTCircle from './components/BBTCircle'
  import BBTChart from './components/BBTChart'

  export default {
    name: 'Health',
    components: {
      NoData,
      HeaderBack,
      formatUnixToText,
      BBTCircle,
      BBTChart
    },
    data () {
      return {
        latestTemperature: {},
        temperatureList: [],
        temAverage: ''
      }
    },
    filters: {
      formatTime (timestamp) {
        return formatUnixToText(timestamp)
      }
    },
    methods: {
      getRecipeInfo () {
        _axios.get('/api/wGuardian/health/getBBTByDate').then(res => {
          if (res.temperature_list.length) {
            let total = 0
            let count = 0
            for (let item of res.temperature_list) {
              total += item.value
              count += 1
              let newItem = {
                time: formatUnixToText(item.time, 'h:m'),
                value: item.value
              }
              this.temperatureList.push(newItem)
            }
            this.temAverage = total / count
            this.latestTemperature = this.temperatureList[this.temperatureList.length - 1]
          }
        })
      }
    },
    mounted () {
      this.getRecipeInfo()
    }
  }
</script>

<style lang="less" scoped>
  .content-wrapper {
    width: 100%;
    text-align:center;
  }
  .single-wrapper {
    padding: 10px 0 10px 0;
    background: #ffffff;
  }
  .list-wrapper {
    background: #ffffff;
    margin: 20px auto 0 auto;
    padding: 10px 0 10px 0;
  }
  .desc {
    font-size: 16px;
    color: #7c7c7c;
  }
  .note {
    font-size: 12px;
    color: #7c7c7c;
  }
</style>

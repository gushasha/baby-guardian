<template>
  <div>
    <date-time-picker @change="dateChanged"></date-time-picker>
    <my-better-scroll
      class="better-scroll-wrapper"
      v-if="attendanceList.length"
      ref="scroll"
      :data="attendanceList"
      :pullup="true"
      @scrollToEnd="loadMore"
    >
      <div>
        <attendance-panel-list :attendanceList="attendanceList"></attendance-panel-list>
        <load-more :show-loading="showLoading"  :tip="loadingTip"></load-more>
      </div>
    </my-better-scroll>
    <no-data v-else></no-data>
  </div>
</template>

<script>
  import { LoadMore } from 'vux'
  import MyBetterScroll from 'components/scroll/BetterScroll'
  import NoData from 'components/page/NoData'
  import { _axios } from 'common/myAxios'
  import DateTimePicker from 'components/date/DateTimePicker'
  import AttendancePanelList from './PanelList'

  export default {
    name: 'AttendanceBody',
    components: {
      LoadMore,
      MyBetterScroll,
      NoData,
      DateTimePicker,
      AttendancePanelList
    },
    data () {
      return {
        currentPage: 1,
        pageCount: 1,
        loadingTip: '加载中',
        attendanceList: [],
        date: ''
      }
    },
    computed: {
      showLoading () {
        return this.loadingTip === '加载中'
      }
    },
    watch: {
      date () {
        this.currentPage = 1
        this.pageCount = 1
        this.loadingTip = '加载中'
        this.attendanceList = []
        this.loadMore()
      }
    },
    methods: {
      dateChanged (val) {
        this.date = val
      },
      loadMore () {
        if (this.currentPage > this.pageCount) {
          this.loadingTip = '到底了'
          return
        }
        let requestData = {
          current_page: this.currentPage,
          date: this.date
        }
        _axios.get('/api/wGuardian/attendance/getHistory', {params: requestData}).then(res => {
          this.attendanceList = this.attendanceList.concat(res.data)
          this.pageCount = res.page_count
          this.currentPage += 1
          if (this.currentPage > this.pageCount) {
            this.loadingTip = '到底了'
          }
        })
      }
    },
    mounted () {
      this.loadMore()
    }
  }
</script>
<style lang="less" scoped>
  .better-scroll-wrapper {
    position: fixed;
    top:44px;
    left: 0;
    bottom:0;
    right:0;
    overflow: hidden;
  }
</style>

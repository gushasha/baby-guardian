<template>
  <div>
    <date-time-picker @change="dateChanged"></date-time-picker>
    <my-better-scroll
      class="better-scroll-wrapper"
      v-if="noticeList.length"
      ref="scroll"
      :data="noticeList"
      :pullup="true"
      @scrollToEnd="loadMore"
    >
      <div>
        <notice-panel-list :noticeList="noticeList"></notice-panel-list>
        <load-more :show-loading="showLoading"  :tip="loadingTip"></load-more>
      </div>
    </my-better-scroll>
    <no-data v-else></no-data>
  </div>
</template>

<script>
  import NoticePanelList from './PanelList'
  import { LoadMore } from 'vux'
  import MyBetterScroll from 'components/scroll/BetterScroll'
  import NoData from 'components/page/NoData'
  import { _axios } from 'common/myAxios'
  import DateTimePicker from 'components/date/DateTimePicker'

  export default {
    name: 'NoticeBody',
    components: {
      LoadMore,
      MyBetterScroll,
      NoData,
      DateTimePicker,
      NoticePanelList
    },
    data () {
      return {
        currentPage: 1,
        pageCount: 1,
        loadingTip: '加载中',
        noticeList: [],
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
        this.noticeList = []
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
        _axios.get('/api/wGuardian/notice/getHistory', {params: requestData}).then(res => {
          this.noticeList = this.noticeList.concat(res.data)
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
  .icon-menu-style {
    color: darkorange;
  }
  .notice-img-wrapper {
    width: 30%;
  }
  .img-wrapper {
    width: 50%;
    margin: 0 auto;
  }
  .notice-desc {
    font-size: 13px;
    color: #666666;
    margin-left: 10px;
  }
</style>

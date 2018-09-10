<template>
  <div class="home-body-wrapper">
    <home-child
      v-if="Object.keys(childInfo).length"
      @change="getIndexInfo"
      :childInfo="childInfo"
      :childCount="childCount"
    ></home-child>
    <home-icons></home-icons>
    <home-attendance v-if="attendanceList.length > 0" :attendanceList="attendanceList" class="home-attendance-wrapper"></home-attendance>
    <home-notice v-if="noticeList.length > 0" :noticeList="noticeList" class="home-attendance-wrapper"></home-notice>
    <bar-footer></bar-footer>
  </div>
</template>

<script>
import HomeChild from './components/Child'
import BarFooter from 'views/bar/Footer.vue'
import HomeIcons from './components/Icons'
import HomeAttendance from './components/Attendance'
import HomeNotice from './components/Notice'
import { _axios } from 'common/myAxios'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      childInfo: {},
      attendanceList: [],
      noticeList: [],
      childCount: 0
    }
  },
  computed: {
    ...mapState(['child'])
  },
  components: {
    HomeChild,
    BarFooter,
    HomeIcons,
    HomeAttendance,
    HomeNotice
  },
  methods: {
    getIndexInfo () {
      let requestData = {
        child_id: this.child.id
      }
      _axios.get('/api/wGuardian/home/index', {params: requestData}).then(res => {
        this.childInfo = res.child_info
        this.attendanceList = res.attendance_list
        this.noticeList = res.notice_list
        this.childCount = res.child_count
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getIndexInfo()
    })
  }
}
</script>
<style lang="less" scoped>
@import '~styles/veribles.less';

.home-body-wrapper {
  margin-bottom: @mainMenuFooterHeight;
}
.home-attendance-wrapper {
  margin: 10px auto;
}
</style>

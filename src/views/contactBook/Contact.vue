<template>
  <div class="contact-body-wrapper">
    <search
      v-model="filterKey"
      position="absolute"
      auto-scroll-to-top>
    </search>
    <div class="table-wrapper">
      <x-table :cell-bordered="false">
        <thead class="theader">
        <tr>
          <th>姓名</th>
          <th>打电话</th>
          <th>发短信</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) of filteredTableData" :key="index">
          <td>{{ item.name }}</td>
          <td ><i @click="phoneCall(item.mobile)" class="iconfont icon-contact-mobile">&#xe6bd;</i></td>
          <td ><i @click="phoneSms(item.mobile)" class="iconfont icon-contact-sms">&#xe643;</i></td>
        </tr>
        </tbody>
      </x-table>
    </div>
    <bar-footer></bar-footer>
  </div>
</template>
<script>
import { XTable, Search } from 'vux'
import BarFooter from 'views/bar/Footer.vue'
import SimpleTable from 'components/table/SimpleTable.vue'
import { _axios } from 'common/myAxios'
export default {
  name: 'ContactBook',
  components: {
    BarFooter,
    SimpleTable,
    XTable,
    Search
  },
  data () {
    return {
      teacherList: [],
      sortKey: null,
      filterKey: '',
      sortOrders: {}
    }
  },
  computed: {
    filteredTableData: function () {
      let sortKey = this.sortKey
      let filterKey = this.filterKey && this.filterKey.toLowerCase()
      let order = this.sortOrders[sortKey] || 1
      let data = this.teacherList
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  methods: {
    getContactInfo () {
      _axios.get('/api/wGuardian/contact/teacher').then(res => {
        this.teacherList = res.contact_list
      })
    },
    phoneCall (mobile) {
      window.location.href = 'tel://' + mobile
    },
    phoneSms (mobile) {
      window.location.href = 'sms://' + mobile
    }
  },
  mounted () {
    this.getContactInfo()
  }
}
</script>
<style lang="less" scoped>
@import '~styles/veribles.less';

.contact-body-wrapper {
  margin-bottom: @mainMenuFooterHeight;
  background: #ffffff;
  font-size: 16px;
}
.table-wrapper {
  margin-top: 10px;
}
.table-wrapper th {
  background: #eeeeee;
  color: #7c7c7c;
}
.table-wrapper td {
}
.icon-contact-mobile {
  font-size: 30px;
  color: #c93763;
}
.icon-contact-sms {
  font-size: 30px;
  color: #23d066;
}
</style>

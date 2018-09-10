import Vue from 'vue'
import Router from 'vue-router'
import Bind from 'views/Bind'
import Home from 'views/home/Home'
import Contact from 'views/contactBook/Contact'
import Attendance from 'views/attendance/Attendance'
import Notice from 'views/notice/Notice'
import Homework from 'views/homework/Homework'
import HomeworkDetail from 'views/homework/HomeworkDetail'
import AdviceCreate from 'views/advice/AdviceCreate'
import School from 'views/school/School'
import Recipe from 'views/recipe/Recipe'
import Health from 'views/health/Health'
import RecommendCreate from 'views/recommend/RecommendCreate'
import Pay from 'views/pay/Pay'
import PayServer from 'views/pay/PayServer'
import PayLive from 'views/pay/PayLive'
import Message from 'views/message/message'
import MessageSend from 'views/message/MessageSend'
import MessageReceive from 'views/message/MessageReceive'
import MessageCreate from 'views/message/MessageCreate'
import BusLocation from 'views/bus/BusLocation'
import LiveList from 'views/live/LiveList'
import AlbumList from 'views/album/AlbumList'
import ChildEdit from 'views/child/ChildEdit'
import ChildSelect from 'views/child/ChildSelect'
import Mine from 'views/mine/Mine'
import UserEdit from 'views/mine/UserEdit'
import Timetable from 'views/timetable/Timetable'

Vue.use(Router)
Vue.use(require('vue-wechat-title'))

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/bind',
      name: 'Bind',
      component: Bind,
      meta: { title: '手机号绑定' }
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { title: '首页' },
      requiresAuth: true
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { title: '通讯录' },
      requiresAuth: true
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: { title: '用户中心' },
      requiresAuth: true
    }, {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance,
      meta: { title: '考勤记录' },
      requiresAuth: true
    }, {
      path: '/notice',
      name: 'Notice',
      component: Notice,
      meta: { title: '通知列表' },
      requiresAuth: true
    }, {
      path: '/homework',
      name: 'Homework',
      component: Homework,
      meta: { title: '作业记录' },
      requiresAuth: true
    }, {
      path: '/homework/detail/:id',
      name: 'HomeworkDetail',
      component: HomeworkDetail,
      meta: { title: '作业详情' },
      requiresAuth: true
    }, {
      path: '/advice/create',
      name: 'AdviceCreate',
      component: AdviceCreate,
      meta: { title: '提交意见反馈' },
      requiresAuth: true
    }, {
      path: '/recommend/create',
      name: 'RecommendCreate',
      component: RecommendCreate,
      meta: { title: '推荐报名' },
      requiresAuth: true
    }, {
      path: '/school',
      name: 'School',
      component: School,
      meta: { title: '学校介绍' },
      requiresAuth: true
    }, {
      path: '/recipe',
      name: 'Recipe',
      component: Recipe,
      meta: { title: '宝贝食谱' },
      requiresAuth: true
    }, {
      path: '/health',
      name: 'Health',
      component: Health,
      meta: { title: '宝贝健康' },
      requiresAuth: true
    }, {
      path: '/pay',
      name: 'Pay',
      component: Pay,
      meta: { title: '缴费' },
      requiresAuth: true,
      children: [
        {
          path: 'server',
          component: PayServer,
          meta: { title: '服务费' }
        }, {
          path: 'live',
          component: PayLive,
          meta: { title: '视频直播费' }
        }
      ]
    }, {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: { title: '信箱' },
      requiresAuth: true,
      children: [
        {
          path: 'send',
          component: MessageSend,
          name: 'MessageSend',
          meta: { title: '我发送的留言' }
        }, {
          path: 'receive',
          component: MessageReceive,
          name: 'MessageReceive',
          meta: { title: '收到的留言' }
        }
      ]
    }, {
      path: '/message/create',
      name: 'MessageCreate',
      component: MessageCreate,
      meta: { title: '发送留言' },
      requiresAuth: true
    }, {
      path: '/bus/location',
      name: 'BusLocation',
      component: BusLocation,
      meta: { title: '校车定位' },
      requiresAuth: true
    }, {
      path: '/live',
      name: 'LiveList',
      component: LiveList,
      meta: { title: '视频直播' },
      requiresAuth: true
    }, {
      path: '/album',
      name: 'AlbumList',
      component: AlbumList,
      meta: { title: '相册' },
      requiresAuth: true
    }, {
      path: '/user/edit',
      name: 'UserEdit',
      component: UserEdit,
      meta: { title: '个人资料' },
      requiresAuth: true
    }, {
      path: '/child/edit',
      name: 'ChildEdit',
      component: ChildEdit,
      meta: { title: '宝贝资料' },
      requiresAuth: true
    }, {
      path: '/child/select',
      name: 'ChildSelect',
      component: ChildSelect,
      meta: { title: '选择宝贝' },
      requiresAuth: true
    }, {
      path: '/timetable',
      name: 'Timetable',
      component: Timetable,
      meta: { title: '课程表' },
      requiresAuth: true
    }
  ]
})

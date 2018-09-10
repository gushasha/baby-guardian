<template>
  <div>
    <router-link
      :to="'/homework/detail/' + item.id"
      tag="div"
      class="my-panel"
      v-for="(item, index) of homeworkList"
      :key="index"
    >
      <div class="my-panel_body">
        <div>
          <user-title
            :img="item.teacher_avatar"
            :title="item.teacher_name + ' － 老师'"
            :desc="item.created_at | formatTime"
          >
            <div slot="ext" class="item-ext-info">
              {{ item.course_text }}
            </div>
          </user-title>
          <image-awesome-flex
            v-if="item.image_list && item.image_list.length"
            :imgList="item.image_list"
            :group="'homework-detail-' + index">
          </image-awesome-flex>
          <div v-html="item.desc"></div>
        </div>
      </div>
      <div class="my-panel-footer link-footer">
        <div v-if="item.i_finished" class="footer-opt-button" style="background: #23d066"><span >已完成</span></div>
        <div v-else class="footer-opt-button" style="background: #FF8C00;"><span >未交作业</span></div>
        <span class="iconfont item-ext-info link">{{ homeworkFinishToast(item) }} &#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import UserTitle from 'components/page/UserTitle'
  import { formatUnixToText } from 'common/date'
  import ImageAwesomeFlex from 'components/page/ImageAwesomeFlex'
  export default {
    name: 'HomeworkList',
    components: {
      ImageAwesomeFlex,
      UserTitle
    },
    props: ['homeworkList'],
    methods: {
      homeworkFinishToast (item) {
        return item.finish_count > 0 ? '已有' + item.finish_count + '人完成作业，去看看' : '没有人交作业'
      }
    },
    filters: {
      formatTime (timestamp) {
        return formatUnixToText(timestamp)
      },
      formatHomeworkType (type) {
        const typeMap = {
          'class': '班级通知',
          'school': '学校通知'
        }
        return typeMap[type]
      }
    }
  }
</script>

<style lang="less" scoped>
  .item-ext-info {
    font-size: 12px;
    color: #7c7c7c;
    margin: 5px;
    text-align: right;
  }
  .item-ext-info span {
    margin-left: 5px;
    margin-right: 5px;
  }
  .link-footer {
    display: flex;
    justify-content: space-between;
  }
  .footer-opt-button {
    display: block;
    color: #ffffff;
    border-radius: 4px;
    height: 18px;
    padding: 2px;
    line-height: 18px;
    font-size: 12px;
  }
  .link {
    color: #586C94;
  }
</style>

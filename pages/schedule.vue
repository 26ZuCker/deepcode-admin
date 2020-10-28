<!--
日程安排
-->
<template>
  <v-container>
    <!-- 日历顶部用户交互栏：调整周次，显示课程，日程，打卡始末时间 -->
    <cal-header @onTypeChange="typeChange"></cal-header>

    <!-- 日历主体 -->
    <calendar :showTypes="showTypes"></calendar>

    <!-- 底部交互按钮 -->
    <open-fab-btn> </open-fab-btn>
  </v-container>
</template>

<script>
import auth from '@/middleware/auth/auth.js'

export default {
  middleware: auth(-1),
  inheritAttrs: false,
  name: 'schedule',
  data () {
    return {
      showTypes: []
    }
  },
  components: {
    Calendar: () => import('@/components/schedule/Calendar.vue'),
    CalHeader: () => import('@/components/schedule/CalHeader.vue'),
    OpenFabBtn: () => import('@/components/OpenFabBtn.vue')
  },
  methods: {
    typeChange (showTypes) {
      this.showTypes = showTypes
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
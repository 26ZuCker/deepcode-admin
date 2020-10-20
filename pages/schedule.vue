<!--
日程安排
-->
<template>
  <v-container>
    <!-- 日历顶部用户交互栏：调整周次，显示课程，日程，打卡始末时间 -->
    <cal-header @onTypeChange="typeChange"></cal-header>
    <!-- 日历主体 -->
    <calendar :showTypes="showTypes"></calendar>
  </v-container>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'schedule',
  data () {
    return {
      showTypes: []
    }
  },
  components: {
    Calendar: () => import('@/components/schedule/Calendar.vue'),
    CalHeader: () => import('@/components/schedule/CalHeader.vue')
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
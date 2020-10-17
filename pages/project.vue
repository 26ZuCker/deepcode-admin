<template>
  <v-container>
    <!-- 单个用户可以切换多个任务 -->
    <pro-header></pro-header>

    <!-- 当前任务其他负责人的自定义模块进度 -->
    <pro-slider> </pro-slider>

    <!-- 当前任务当前负责人即登录用户自定义模块进度 -->
    <pro-timeline></pro-timeline>
  </v-container>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'project',
  components: {
    ProSlider: () => import('@/components/project/ProSlider'),
    ProTimeline: () => import('@/components/project/ProTimeline'),
    ProHeader: () => import('@/components/project/ProHeader'),
  },
  data: () => ({
  }),
  props: {},
  methods: {
    prevMission () {
      console.log('prev')
    },
    nextMission () {
      console.log('next')
    }
  },
  computed: {},
  watch: {},
}
</script>

<style lang="scss" scoped>
</style>

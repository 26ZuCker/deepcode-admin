<template>
  <v-container>
    <!-- 单个用户可以切换多个任务 -->
    <pro-header></pro-header>

    <!-- 当前任务其他负责人的自定义模块进度 -->
    <pro-slider> </pro-slider>

    <!-- 当前任务当前负责人即登录用户自定义模块进度 -->
    <pro-timeline></pro-timeline>

    <float-btn></float-btn>
  </v-container>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'project',
  components: {
    ProSlider: () => import('@/components/project/ProSlider.vue'),
    ProTimeline: () => import('@/components/project/ProTimeline.vue'),
    ProHeader: () => import('@/components/project/ProHeader.vue'),
    FloatBtn: () => import('@/components/FloatBtn.vue')
  },
  data: () => ({}),
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

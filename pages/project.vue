<template>
  <v-container>
    <!-- 单个用户可以切换多个任务 -->
    <mi-header></mi-header>

    <!-- 当前任务其他负责人的自定义模块进度 -->
    <mi-stepper>
      <mi-ste-card></mi-ste-card>
    </mi-stepper>

    <!-- 当前任务当前负责人即登录用户自定义模块进度 -->
    <mi-timeline :items="items"></mi-timeline>
  </v-container>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'project',
  components: {
    MiStepper: () => import('@/components/project/MiStepper'),
    MiTimeline: () => import('@/components/project/MiTimeline'),
    MiHeader: () => import('@/components/project/MiHeader'),
    MiSteCard: () => import('@/components/project/MiSteCard'),
  },
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ],
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

<style lang='scss' scoped>
</style>
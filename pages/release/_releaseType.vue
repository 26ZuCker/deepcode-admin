<template>
  <v-scale-transition>
    <!-- 从mission页面进入的发布任务页面 -->
    <form-card :releaseType="releaseType">
      <!-- 用于发布项目 -->
      <add-pro v-if="releaseType === 'project'"></add-pro>
      <!-- 用于添加日程 -->
      <add-sch v-else-if="releaseType === 'schedule'"></add-sch>
    </form-card>
  </v-scale-transition>
</template>

<script>
export default {
  name: 'release',
  components: {
    AddPro: () => import('@/components/release/AddPro.vue'),
    AddSch: () => import('@/components/release/AddSch.vue'),
    FormCard: () => import('@/components/release/FormCard.vue')
  },
  data () {
    return {
      releaseType: null,
    }
  },
  created () {
    const {
      releaseType
    } = this.$route.params
    this.releaseType = releaseType
    console.log(this.releaseType)
  }
}
</script>

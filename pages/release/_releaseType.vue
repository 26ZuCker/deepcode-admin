<template>
<!-- 从mission页面进入的发布任务页面 -->
<form-card>
  <!-- 用于发布项目 -->
  <add-pro v-if="releaseType === 'pro'"></add-pro>
  <!-- 用于添加日程 -->
  <add-sch v-else-if="releaseType === 'sch'"></add-sch>
</form-card>
</template>

<script>
export default {
  name: 'release',
  components: {
    AddPro: () => import('@/components/release/AddPro.vue'),
    AddSch: () => import('@/components/release/AddSch.vue'),
    FormCard: () => import('@/components/common/FormCard.vue')
  },
  data() {
    return {
      releaseType: '',
    }
  },
  created() {
    const {
      releaseType
    } = this.$route.params
    this.releaseType = releaseType
    console.log(this.releaseType)
  }
}
</script>

<template>
  <v-container>
    <user-card></user-card>
  </v-container>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'userId',
  components: {
    UserCard: () => import('@/components/user/UserCard.vue'),
    OffsetCard: () => import('@/components/user/OffsetCard.vue')
  },
  data: () => ({
  }),
}
</script>

<style lang='scss' scoped>
</style>
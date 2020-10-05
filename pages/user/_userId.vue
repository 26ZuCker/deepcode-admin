<template>
  <v-container fluid>
    <user-card></user-card>
  </v-container>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'user-userId',
  components: {
    UserCard: () => import('@/components/user/UserCard.vue')
  },
}
</script>

<style lang='scss' scoped>
</style>
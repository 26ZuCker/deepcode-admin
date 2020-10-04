<template>
  <div class="justify-center align-center">
    <!-- 轮播图 -->
    <off-carousel></off-carousel>
    <v-container>
      <four-btn></four-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'office',
  components: {
    OffCarousel: () => import('@/components/office/OffCarousel.vue'),
    FourBtn: () => import('@/components/office/FourBtn.vue'),
    BottomBtn: () => import('@/components/office/BottomBtn.vue')
  },
}
</script>

<style lang='scss' scoped>
</style>
<template>
  <div class="justify-center align-center">
    <!-- 轮播相册 -->
    <off-album :items="items"></off-album>

    <v-container class="pt-0">
      <!-- 我们拥有什么 -->
      <intro-card class="intr-card-offset"></intro-card>

      <!-- 我们做过什么 -->
      <reward-car class="reward-car-offset"></reward-car>
    </v-container>

    <!-- 关于我们 -->
    <group-intr></group-intr>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'office',
  components: {
    OffAlbum: () => import('@/components/office/OffAlbum.vue'),
    IntroCard: () => import('@/components/office/IntroCard.vue'),
    RewardCar: () => import('@/components/office/RewardCar.vue'),
    GroupIntr: () => import('@/components/office/GroupIntr.vue'),
  },
  data: () => ({
    items: [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', }
    ],
  })
}
</script>

<style lang='scss' scoped>
.intr-card-offset {
  position: relative;
  top: -50px;
}
.reward-car-offset {
  position: relative;
  top: -30px;
}
</style>
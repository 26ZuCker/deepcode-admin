<template>
  <v-container>
    <!-- 顶部信息 -->
    <top-card></top-card>
    <msg-header></msg-header>
    <!-- 公告栏 -->
    <bulletin-board></bulletin-board>
    <!-- 排行榜 -->
    <rank-table :headersData="headersData" :rankData="rankData"></rank-table>
    <!-- 相册 -->
    <index-album :items="items"></index-album>
  </v-container>
</template>

<script>
import { headersData, rankData } from '@/apis/rank.js'

export default {
  name: 'board',
  inheritAttrs: false,
  components: {
    RankTable: () => import('@/components/board/RankTable.vue'),
    TestTable: () => import('@/components/board/TestTable.vue'),
    Notice: () => import('@/components/common/Notice.vue'),
    IndexAlbum: () => import('@/components/board/IndexAlbum.vue'),
    TimeCircle: () => import('@/components/board/TimeCircle.vue'),
    BulletinBoard: () => import('@/components/board/BulletinBoard.vue'),
    TopCard: () => import('@/components/board/TopCard.vue'),
    MsgHeader: () => import('@/components/board/MsgHeader.vue')
  },
  data: () => ({
    knowledge: 25,
    headersData: [],
    value: 60,
    rankData: [],
    items: [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', },
    ],
  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
  created () {
    this.headersData = Object.freeze(headersData)
    this.rankData = Object.freeze(rankData)
  }
}
</script>

<style lang='scss' scoped>
</style>
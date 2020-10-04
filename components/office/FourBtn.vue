<template>
  <v-card class="office-offset">
    <v-row>
      <!-- 左侧文字 -->
      <v-col :cols="isLgScreen($vuetify) ? 2 : 'auto'">
        <strong class="text-justify">我们</strong>
        <p class="text-justify">做过</p>
        <p class="text-justify">什么</p>
      </v-col>
      <!-- 右侧主体即四个卡片按钮选择 -->
      <v-col :cols="isLgScreen($vuetify) ? 10 : 'auto'">
        <achievement-card :teamAchievement="teamAchievement"></achievement-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inheritAttrs: false,
  name: 'FourBtn',
  components: {
    AchievementCard: () => import('./AchievementCard.vue')
  },
  data: () => ({
    teamAchievement: [
      { id: 1, title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { id: 2, title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { id: 3, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { id: 4, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { id: 5, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
  props: {},
  methods: {},
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
    })
  }
}
</script>

<style lang='scss' scoped>
.office-offset {
  position: relative;
  top: -100px;
}
</style>
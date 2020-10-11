<template>
  <v-slide-group v-model="model" show-arrows>
    <v-slide-item v-for="n in 5" :key="n">
      <!-- 每张奖项卡片悬停展示获奖日期 -->
      <v-card class="ma-5">
        <v-card-title>hh</v-card-title>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          :max-width="isLgScreen($vuetify) ? 300 : 210"
          max-height="100%"
        ></v-img>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {
    RewardItem: () => import('./RewardItem'),
  },
  data: () => ({
    model: null
  }),
  props: {},
  methods: {},
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  watch: {},

}
</script>

<style lang='scss' scoped>
</style>
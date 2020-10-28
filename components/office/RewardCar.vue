<template>
  <v-slide-group v-model="model" show-arrows center-active>
    <v-slide-item v-for="n in 5" :key="n">
      <v-hover class="border-grey">
        <template v-slot:default="{ hover }">
          <!-- 每张奖项卡片悬停展示获奖日期 -->
          <v-card class="ma-5 elevation-0">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              :max-width="isLgScreen($vuetify) ? 300 : 210"
              max-height="100%"
            ></v-img>

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                2020-10-19 挑战杯
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import {
  mapGetters
} from 'vuex'
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
@import url('@/static/scss/border-grey.scss');
</style>

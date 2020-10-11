<template>
  <v-card
    elevation="14"
    :class="introContainerClass"
    max-width="1000"
    color="blue-grey darken-1"
  >
    <div>
      <div class="white--text text-center ma-2 text-h4">DeepCode</div>
      <v-divider class="white"></v-divider>

      <v-card-subtitle>
        <span class="border-w pr-3">{{ introductionL }}</span>
        <span class="pl-3">{{ introductionR }}</span>
      </v-card-subtitle>
    </div>
    <!-- logo标题悬停展示按钮加入我们 -->
    <div>
      <v-avatar size="120" color="blue-grey darken-2" class="ma-2"
        >DEEPCODE</v-avatar
      >
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inheritAttrs: false,
  name: 'IntroCard',
  components: {},
  data: () => ({
    title: 'Halcyon Days',
    introductionL: 'Ellie Goulding',
    introductionR: 'Ellie Goulding',
  }),
  props: {},
  methods: {},
  computed: {
    introContainerClass () {
      return {
        'pa-0': true,
        'ma-auto': true,
        'lgS': this.isLgScreen(this.$vuetify),
        'smallS': !this.isLgScreen(this.$vuetify),
      }
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  watch: {},
}
</script>

<style lang='scss' scoped>
.smallS {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lgS {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.border-w {
  border-right: white solid 1px;
}
</style>
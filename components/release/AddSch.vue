<template>
  <div class>
    <date-picker></date-picker>
    <!-- 是否置顶 -->
    <v-switch v-model="setTop" inset label="是否置顶"></v-switch>
    <v-divider></v-divider>

    <v-card-actions :class="releaseBottomBtnContainer">
      <v-btn icon>
        <v-icon size="40">mdi-head-plus-outline</v-icon>
      </v-btn>
      <v-btn
        color="blue-grey darken-3"
        class="ml-0 my-2"
        depressed
        :block="!isLgScreen($vuetify)"
      >
        发布
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {
    DatePicker: () => import('./DatePicker.vue')
  },
  data: () => ({
    setTop: false
  }),
  props: {},
  methods: {},
  computed: {
    releaseBottomBtnContainer () {
      const bool = this.isLgScreen(this.$vuetify)
      return {
        space: bool,
        normal: !bool,
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
.space {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.normal {
  display: flex;
  flex-direction: column;
}
</style>

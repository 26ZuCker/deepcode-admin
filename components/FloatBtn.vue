<template>
  <!-- 非编辑页面只显示一个返回顶部的浮动按钮且如果已经到顶则消失 -->
  <v-speed-dial
    v-if="showFloatBtn"
    bottom
    right
    open-on-hover
    fixed
    @click="$vuetify.goTo(target, options)"
  >
    <template v-slot:activator>
      <v-btn color="blue darken-2" dark fab>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </template>
  </v-speed-dial>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'FloatBtn',
  data: () => ({
    isFabActive: false,
    /* posLeft: null,
    posRight: null */
  }),
  /* watch: {
    '$route.name': {
      handler (n, o) {
        const bool = n === 'schedule'
        this.posLeft = bool
        this.posRight = !bool
      },
      immediate: true
    }
  }, */
  //使用computed代替watch
  computed: {
    posLeft () {
      return this.$route.name === 'schedule'
    },
    posRight () {
      return this.$route.name !== 'schedule'
    },
    target () {
      return
    },
    options () {
      return
    },
    showFloatBtn () {
      //三个元素采用数组而非hash
      const unShowRoute = ['login', 'schedule', 'project']
      return !unShowRoute.includes(this.$route.name)
    }
  },
}
</script>

<style lang='scss' scoped>
</style>

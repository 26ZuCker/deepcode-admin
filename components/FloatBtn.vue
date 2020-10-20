<!-- 后期尝试是否能改为函数式组件 -->
<template>
  <v-speed-dial
    v-if="$route.name === 'schedule' || $route.name === 'project'"
    :left="posLeft"
    :right="posRight"
    v-model="isFabActive"
    fixed
    bottom
    direction="top"
    open-on-hover
    transition="slide-y-reverse-transition"
  >
    <!-- 处于schedule页面的可行性功能：增加自定义日程，编辑自定义日程，搜索课程和日程 -->
    <template v-slot:activator>
      <v-btn v-model="isFabActive" color="blue darken-2" dark fab>
        <v-icon v-if="isFabActive">mdi-close</v-icon>
        <v-icon v-else>mdi-function</v-icon>
      </v-btn>
    </template>

    <v-btn fab dark small color="red">
      <v-icon>mdi-calendar-remove</v-icon>
    </v-btn>
    <!-- 日程的修改直接点击event视图以更改 -->
    <v-btn fab dark small color="indigo" v-if="$route.name !== 'schedule'">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn fab dark small color="green">
      <v-icon>mdi-calendar-plus</v-icon>
    </v-btn>
  </v-speed-dial>
  <!-- 非编辑页面只显示一个返回顶部的浮动按钮且如果已经到顶则消失 -->
  <v-speed-dial
    v-else-if="showFloatBtn"
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
    posLeft: null,
    posRight: null
  }),
  watch: {
    '$route.name': {
      handler (n, o) {
        const bool = n === 'schedule'
        this.posLeft = bool
        this.posRight = !bool
      },
      immediate: true
    }
  },
  computed: {
    target () {
      return
    },
    options () {
      return
    },
    showFloatBtn () {
      return this.$route.name !== 'login' && this.$route.name !== 'recruit'
    }
  },
}
</script>

<style lang='scss' scoped>
</style>

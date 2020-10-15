<!-- 后期尝试是否能改为函数式组件 -->
<template>
  <v-speed-dial
    v-model="isFabActive"
    fixed
    bottom
    right
    direction="top"
    open-on-hover
    transition="slide-y-reverse-transition"
    v-if="$route.name === 'schedule' || $route.name === 'project'"
  >
    <!-- 处于schedule页面的可行性功能：增加自定义日程，编辑自定义日程，搜索课程和日程 -->
    <template v-slot:activator>
      <v-btn v-model="isFabActive" color="blue darken-2" dark fab>
        <v-icon v-if="isFabActive">mdi-close</v-icon>
        <v-icon v-else>mdi-function</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="green">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn fab dark small color="indigo">
      <v-icon>mdi-card-plus-outline</v-icon>
    </v-btn>
    <v-btn fab dark small color="red">
      <v-icon>mdi-calendar-search</v-icon>
    </v-btn>
  </v-speed-dial>
  <!-- 非编辑页面只显示一个返回顶部的浮动按钮且如果已经到顶则消失 -->
  <v-speed-dial
    v-else
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
    isFabActive: false
  }),
  methods: {

  },
  computed: {
    target () {
      return
    },
    options () {
      return
    }
  },
}
</script>

<style lang='scss' scoped>
</style>
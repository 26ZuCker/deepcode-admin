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
    transition="slide-x-reverse-transition"
  >
    <!-- 处于schedule页面的可行性功能：增加自定义日程，编辑自定义日程，搜索课程和日程 -->
    <template v-slot:activator>
      <v-btn v-model="isFabActive" color="blue darken-2" dark fab>
        <v-icon v-if="isFabActive">mdi-close</v-icon>
        <v-icon v-else>mdi-function</v-icon>
      </v-btn>
    </template>

    <!-- 删除项目，日程 -->
    <v-btn fab dark small color="red">
      <v-icon>mdi-calendar-remove</v-icon>
    </v-btn>

    <!-- 日程的修改直接点击event视图以更改 -->
    <v-btn fab dark small color="indigo" v-if="$route.name !== 'schedule'">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-btn fab dark small color="green" @click="toAdd">
      <v-icon>mdi-calendar-plus</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'OpenFabBtn',
  components: {},
  data: () => ({
    isFabActive: false,
    isShowDialog: false
  }),
  computed: {
    posLeft () {
      return this.$route.name === 'schedule'
    },
    posRight () {
      return this.$route.name !== 'schedule'
    },
  },
  methods: {
    showDialog () {
      if (this.$route.name !== 'schedule') { return }
      else {
        this.isShowDialog = true
      }
    },
    toAdd () {
      const releaseType = this.$route.name === 'schedule' ? 'schedule' : 'project'
      this.$router.push(`/release/releaseType=${releaseType}`)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
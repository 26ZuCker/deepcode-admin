<template>
<!-- 具备发布任务权限者发布任务，发布者删除当前任务 -->
<v-card>
  <v-card-text class="pro-header-title">
    <span class="text-h4">管理系统</span>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-card-text>
  <v-container>
    <div>
      <v-icon>mdi-progress-clock</v-icon>
      剩余<span>23</span>天
    </div>
    <div>
      <v-icon>mdi-progress-wrench</v-icon>
      剩余<span>3</span>部分
    </div>
  </v-container>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-avatar size="30">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
    <span>发布于2020-10-16</span>
  </v-card-actions>
  <v-btn color="primary" fab dark absolute bottom left class="mb-3 offset-left">
    <v-icon>mdi-progress-check</v-icon>
  </v-btn>
</v-card>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'ProHeader',
  components: {},
  data: () => ({

  }),
  props: {},
  methods: {
    prevMission() {
      console.log('prev')
    },
    nextMission() {
      console.log('next')
    }
  },
}
</script>

<style lang="scss" scoped>
.pro-header-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<template>
<!-- 具备发布任务权限者发布任务，发布者删除当前任务 -->
<v-card>
  <v-card-text class="pro-header-title blue-grey darken-1">
    <span class="text-h4 white--text">管理系统</span>
    <v-menu transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon color="white">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list shaped>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>历史记录</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-card-text>
  <v-container class="blue-grey lighten-2">
    <div>
      <v-icon>mdi-progress-clock</v-icon>
      剩余<span>23</span>天
    </div>
    <div>
      <v-icon>mdi-progress-wrench</v-icon>
      剩余<span>3</span>部分
    </div>
  </v-container>
  <v-card-actions class="blue-grey lighten-2">
    <v-spacer></v-spacer>
    <v-avatar size="40" class="mr-2">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
    <span>发布于2020-10-16</span>
  </v-card-actions>
  <v-btn color="primary" fab text dark absolute bottom left class="mb-3 offset-left">
    <v-icon size="67">mdi-progress-check</v-icon>
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

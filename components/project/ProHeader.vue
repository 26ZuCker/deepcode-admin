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
          <v-card-title
            >在做项目
            <v-spacer></v-spacer>
            <span class="font-weight-medium green--text">2</span>
          </v-card-title>
          <!-- 在做项目 -->
          <v-list-item
            link
            @click="changeProject"
            v-for="project in projects"
            :key="project.project_id"
          >
            <!-- 左侧头标签 -->
            <v-list-item-avatar>
              <v-avatar><img :src="project.publisher_avatar" /></v-avatar>
            </v-list-item-avatar>
            <!-- 主体内容 -->
            <v-list-item-content>
              <v-list-item-title>{{ project.name }}</v-list-item-title>
              <v-list-item-subtitle
                >截止于{{
                  project.estimated_completed_date
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <!-- 右侧尾标签 -->
            <v-list-item-action class="green--text font-weight-bold">{{
              project.situation
            }}</v-list-item-action>
          </v-list-item>
          <!-- 历史项目 -->
          <v-card-title>
            历史项目<v-spacer></v-spacer>
            <span class="font-weight-medium green--text">14</span>
            <v-btn icon>
              <v-icon
                @click="isShowHisProDialog = !isShowHisProDialog"
                class="ml-2"
                >mdi-chevron-triple-right</v-icon
              >
            </v-btn>
          </v-card-title>
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
    <v-btn
      color="primary"
      fab
      text
      dark
      absolute
      bottom
      left
      class="mb-3 offset-left"
    >
      <v-icon size="67">mdi-progress-check</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  inheritAttrs: false,
  name: 'ProHeader',
  components: {},
  data: () => ({
    isShowHisProDialog: false,
    projects: [
      { project_id: '1', publisher_avatar: 'https://cdn.vuetifyjs.com/images/john.jpg', name: '项目一', estimated_completed_date: '2020-10-22', situation: '5/11' },
      { project_id: '2', publisher_avatar: 'https://cdn.vuetifyjs.com/images/john.jpg', name: '项目二', estimated_completed_date: '2020-10-23', situation: '4/10' },
    ]
  }),
  props: {},
  methods: {
    prevMission () {
      console.log('prev')
    },
    nextMission () {
      console.log('next')
    },
    changeProject () {

    }
  },
  computed: {
    ...mapState({

    })
  }
}
</script>

<style lang="scss" scoped>
.pro-header-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<template>
  <div class="user-card-container">
    <!-- 背景栏 -->
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
    </v-img>
    <!-- 用户个人信息容器 -->
    <div class="ava-container">
      <!-- 头像栏 -->
      <v-avatar
        class="v-sheet--offset"
        color="grey"
        elevation="12"
        :size="isLgScreen($vuetify) ? '20%' : '30%'"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-avatar>
      <!-- 用户个人基本信息栏 -->
      <v-sheet height="100%" elevation="0" class="ml-5">
        <v-card-title>
          小岚
          <v-icon color="pink" class="ma-3">mdi-gender-female</v-icon>
          <span class="green--text ma-3">在线</span>
        </v-card-title>
        <v-card-subtitle>
          <span class="border-w pr-3">加入888天</span>
          <span class="pl-3">打卡999时</span>
        </v-card-subtitle>
      </v-sheet>
      <v-spacer></v-spacer>
      <v-progress-circular
        size="120"
        color="primary"
        v-if="isLgScreen($vuetify)"
        >今日打卡30h</v-progress-circular
      >
      <v-progress-circular
        size="120"
        color="primary"
        class="ml-13"
        v-if="isLgScreen($vuetify)"
        >已完成项目数</v-progress-circular
      >
    </div>
    <!-- 今日打卡时长和项目剩余进度环 -->
    <div v-if="!isLgScreen($vuetify)" class="d-flex justify-space-around">
      <v-progress-circular size="120" color="primary"
        >今日打卡30h</v-progress-circular
      >
      <v-progress-circular size="120" color="primary"
        >已完成项目数</v-progress-circular
      >
    </div>
    <!-- 底部标签和成就栏 -->
    <v-chip-group multiple active-class="primary--text">
      <v-chip v-for="tag in tags" :key="tag">
        {{ tag }}
      </v-chip>
    </v-chip-group>
    <v-chip-group multiple active-class="primary--text">
      <v-chip v-for="tag in tags" :key="tag">
        {{ tag }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserCard',
  inheritAttrs: false,
  components: {
    UserTabs: () => import('./UserTabs.vue'),
  },
  data: () => ({
    selection: [''],
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
    })
  },
  //后续在middleware内鉴权进入该route是否传递了userId否则重定向到login
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    /* console.log(params)
    console.log(query) */
  },
  created () {
    /* console.log(this.$route.params)
    console.log(this.$route.query) */
  }
}
</script>

<style lang='scss' scoped>
.v-sheet--offset {
  top: -60px;
  left: 20px;
  position: relative;
}
.user-card-container {
  width: 100%;
}
.ava-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.border-w {
  border-right: black solid 1px;
}
</style>
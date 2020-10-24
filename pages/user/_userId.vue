<template>
  <v-container fill-height class="user-container pa-0">
    <!-- 信息卡片 -->
    <user-card></user-card>

    <!-- 导航栏 -->
    <user-tabs @onChangeTabs="changeTabs"></user-tabs>

    <keep-alive>
      <!-- 通知列表 -->
      <not-list v-if="currentTabs === 'NotList'"></not-list>

      <!-- LeetCode刷题榜 -->
      <leet-cal v-if="currentTabs === 'LeetCal'"></leet-cal>

      <!-- 项目列表 -->
      <pro-list v-if="currentTabs === 'ProList'"></pro-list>
    </keep-alive>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-userId',
  inheritAttrs: false,
  components: {
    UserCard: () => import('@/components/user/UserCard.vue'),
    UserTabs: () => import('@/components/user/UserTabs.vue'),
    ProList: () => import('@/components/user/ProList.vue'),
    NotList: () => import('@/components/user/NotList.vue'),
  },
  data: () => ({
    selection: [''],
    currentTabs: 0,
    headersData: [],
    rankData: [],
  }),
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
    })
  },
  //先校验vuex内是否已登录：未登录则重定向至login，登录才校验是否传入userId：传入则采用才userId，否则采用vuex内的userId
  //后续在middleware内鉴权进入该route是否传递了userId否则重定向到login
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    /* console.log(params)
    console.log(query) */
  },

  created () {
    /* console.log(this.$route.params)
    console.log(this.$route.query) */

  },
  methods: {
    changeTabs (tab) {
      this.currentTabs = tab
    }
  },
}
</script>

<style lang='scss' scoped>
.user-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
}
.user-avatar-container {
  position: relative;
}
.user-avatar-offset-top {
  position: relative;
  top: 80px;
}
.v-sheet--offset {
  top: -60px;
  position: relative;
}
.user-tabs {
  width: 100%;
}
</style>
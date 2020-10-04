<template>
  <v-app dark>
    <!-- 顶部栏 -->
    <top-bar @onShowLeftBar="showLeftBar"></top-bar>
    <!-- 占位右侧显示实时时间 -->
    <v-sheet
      class="overflow-y-auto default-layout-topbar-time"
      max-height="200"
      v-if="$route.name !== 'user-userId'"
    >
      <v-container style="height: 48px" class="text-right">
        {{ currentTime }}
      </v-container>
    </v-sheet>
    <!-- 左侧边栏 -->
    <v-navigation-drawer
      dark
      dense
      fixed
      rounded="rounded-br-xl"
      clipped-left
      v-model="drawer"
      app
      v-if="!isLgScreen($vuetify)"
    >
      <left-bar></left-bar>
      <template v-slot:append>
        <div class="pa-3">
          <v-btn
            block
            @click="judgeLogin"
            :color="isLogin ? 'red' : 'green '"
            >{{ isLogin ? '退出' : '登录' }}</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
    <!-- 主体建议先不包裹 -->
    <nuxt />
    <!-- 底部浮动按钮 -->

    <!-- 底部栏 -->
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { formatYMDHM } from '@/utils/dayjs.js'
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      drawer: false,
    }
  },
  methods: {
    //登录则退出即清空登录状态，否则导航至登录页
    judgeLogin () {
      if (this.isLogin) {
        //执行退出登录所需要的所有操作
      } else {
        this.$router.push({ path: '/login' })
      }
    },
    showLeftBar () {
      this.drawer = !this.drawer
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/isLogin', isLgScreen: 'showCom/isLgScreen',
    })
  },
  mounted () {
    const timer = setInterval(() => {
      //某些定时器操作  
      this.currentTime = formatYMDHM()
    }, 20000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {
      clearInterval(timer);
    })
  },
  created () {
    this.currentTime = formatYMDHM()
  }
}
</script>

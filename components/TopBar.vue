<!-- 
  默认layout内的顶部栏，由于信息条数的显示需要实时更新所以无法改为函数式组件
  建议采用observer监听可视区下拉程度以实现改变isShowFullTopBar即收缩而不采用collapse-scroll
  需要处理四种状态：
  伸展
  大小屏
  父子route
  登录与否
-->
<template>
  <v-app-bar
    dark
    dense
    :collapse="!isShowFullTopBar"
    fixed
    rounded="rounded-br-xl"
    clipped-left
  >
    <!-- 左侧 -->
    <v-app-bar-nav-icon @click.stop="showBar">
      <!-- 如果大屏幕则直接把头像显示在左侧边栏顶即可 -->
      <v-avatar v-if="isLogin">
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-avatar>
    </v-app-bar-nav-icon>

    <!-- <v-btn icon>
        <v-icon>mdi-table-of-contents</v-icon>
    </v-btn>-->

    <!-- 根据是否是非首页进行回退按钮的选择 -->
    <v-btn icon v-if="$route.name !== 'board'" @click="routerBack">
      <v-icon>mdi-arrow-left-thick</v-icon>
    </v-btn>
    <v-toolbar-title>{{ currentRouteTitle($route.name) }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- 页面切换，注意后期需要修改显示的logo -->
    <template v-if="isLgScreen($vuetify)">
      <v-tooltip bottom v-for="i in routerItems" :key="i.id">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="$router.push(i.url)" v-bind="attrs" v-on="on">
            <v-icon>{{ i.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ i.title }}</span>
      </v-tooltip>
    </template>
    <!-- 通知，大屏点击显示弹出menu，小屏则底部弹出drawer -->
    <v-badge red color="error" content="6" overlap offset-y="20" v-if="isLogin">
      <v-btn icon>
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
    </v-badge>
    <!-- 伸展 -->
    <v-btn icon @click="set_isShowFullTopBar" v-if="isShowFullTopBar">
      <v-icon>mdi-arrow-expand-left</v-icon>
    </v-btn>
    <!-- 登录 -->
    <v-btn
      color="green"
      v-if="isShowLoginBtn"
      @click="$router.push('/login')"
      rounded
      :small="!isShowFullTopBar"
      >登录</v-btn
    >
  </v-app-bar>
  <!-- 底部需要占位 -->
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'TopBar',
  data: () => ({

  }),
  computed: {
    //隐藏情况：已登录或子路由且伸缩为缩
    isShowLoginBtn () {
      if (this.isLogin) {
        return false
      } else if (this.$route.name !== 'board' && !this.isShowFullTopBar) {
        return false
      } else {
        return true
      }
    },
    ...mapState({
      isShowFullTopBar: (state) => state.showCom.isShowFullTopBar,
      routerItems: (state) => state.showCom.routerItems
    }),
    ...mapGetters({
      currentRouteTitle: 'showCom/currentRouteTitle',
      isLgScreen: 'showCom/isLgScreen',
      isLogin: 'user/isLogin',
    }),
  },
  methods: {
    //点击顶部栏最左侧按钮
    showBar () {
      //第一次先展开
      if (!this.isShowFullTopBar) {
        if (this.isLgScreen) {
          this.set_isShowFullTopBar()
        }
      }
      //展开后再点且在移动端才展示左侧边栏，注意由于左侧边栏覆盖顶部栏所以该按钮只需要调整为true即可
      else {
        this.$emit('onShowLeftBar')
      }
    },
    //无法直接在html内使用$router.back且注意不能直接返回error页面
    routerBack () {
      this.$router.back()
    },
    ...mapMutations({
      set_isShowLeftBar: 'showCom/set_isShowLeftBar',
      set_isShowLeftBar_true: 'showCom/set_isShowLeftBar_true',
      set_isShowFullTopBar: 'showCom/set_isShowFullTopBar',
    })
  },
}
</script>

<style lang='scss' scoped>
</style>
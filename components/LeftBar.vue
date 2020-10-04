<!-- 
左侧边栏，后期考虑是否可改为函数式组件
一旦左侧边栏显示则盖过顶部栏
注意必须改为fixed而非absolute因为只需要占满可视区的完整高度即可，后者则高度自定与整个html文档即页面的高度挂钩
-->
<template >
  <div>
    <v-img
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      max-height="120"
    >
      <v-avatar size="70">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>

      <div class="subheading">Jonathan Lee</div>
    </v-img>
    <v-list>
      <v-list-item v-for="i in routerItems" :key="i.title" link>
        <v-list-item-icon>
          <v-icon>{{ i.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content @click="$router.push(i.url)">
          <v-list-item-title>{{ i.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  inheritAttrs: false,
  data: () => ({
  }),
  methods: {
    ...mapMutations({
      delete_token: 'user/delete_token',
      delete_userInfo: 'user/delete_userInfo',
      set_isShowLeftBar: 'showCom/set_isShowLeftBar'
    })
  },
  computed: {
    itselfShow () {
      return this.isShowLeftBar
    },
    ...mapState({
      routerItems: (state) => state.showCom.routerItems,
    }),
  },
}
</script>

<style lang='scss' scoped>
.left-bar-bottom-btn {
  display: flex;
  justify-content: center;
}
</style>
<template>
  <v-container class="flex justify-center" fill-height>
    <v-card dark color="blue-grey darken-1" elevation="14">
      <!-- 顶部loading条，点击提交后的等待 -->
      <template v-slot:progress>
        <v-progress-linear
          absolute
          color="green lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <!-- 封面 -->
      <back-img></back-img>

      <!-- 表单输入框 -->
      <v-container>
        <login-form></login-form>
      </v-container>

      <v-divider></v-divider>

      <!-- 底部按钮 -->
      <v-card-actions :class="loginBottomBtnContainer">
        <v-btn
          @click="isShowRegister = !isShowRegister"
          :block="!isLgScreen($vuetify)"
          class="my-2"
        >
          <v-icon left>mdi-update</v-icon>
          加入我们
        </v-btn>

        <v-btn
          :disabled="autoUpdate"
          :loading="isUpdating"
          class="my-2 ml-0"
          color="blue-grey darken-3"
          :block="!isLgScreen($vuetify)"
          @click="isUpdating = true"
        >
          <v-icon left>mdi-update</v-icon>
          登录
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  components: {
    BackImg: () => import('@/components/login/BackImg.vue'),
    LoginForm: () => import('@/components/login/LoginForm.vue'),
  },
  data () {
    return {
      account: '',
      password: '',
      autoUpdate: true,
      friends: ['Sandra Adams', 'Britta Holt'],
      isUpdating: false,
      officeName: 'DEEP CODE',
      userName: '小岚',
      people: [
        { header: 'Group 1' },
        { name: 'Sandra Adams', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { name: 'Ali Connors', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { name: 'Trevor Hansen', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { name: 'Tucker Smith', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { divider: true },
        { header: 'Group 2' },
        { name: 'Britta Holt', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        { name: 'Jane Smith ', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
        { name: 'John Smith', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { name: 'Sandra Williams', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      ],
      title: '欢迎你的加入',
      isShowRegister: false
    }
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },
  computed: {
    loginBottomBtnContainer () {
      return {
        space: this.isLgScreen(this.$vuetify),
        normal: !this.isLgScreen(this.$vuetify),
      }
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  methods: {
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
  },
  mounted () {
    //this.$vuetify.theme.isDark = true
  },
  beforeDestroy () {
    this.$vuetify.theme.isDark = false
  }
}
</script>

<style lang='scss' scoped>
.justify {
  display: flex;
  justify-content: center;
}
.space {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.normal {
  display: flex;
  flex-direction: column;
}
</style>
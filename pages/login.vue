<template>
<v-container class="flex justify-center" fill-height>
  <v-card dark color="blue-grey darken-1" elevation="14">
    <!-- 顶部loading条，点击提交后的等待 -->
    <template v-slot:progress>
      <v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
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
      <v-btn @click="isShowRegister = !isShowRegister" :block="!isLgScreen($vuetify)" class="my-2">
        <v-icon left>mdi-update</v-icon>
        加入我们
      </v-btn>

      <v-btn :disabled="autoUpdate" :loading="isUpdating" class="my-2 ml-0" color="blue-grey darken-3" :block="!isLgScreen($vuetify)" @click="isUpdating = true">
        <v-icon left>mdi-update</v-icon>
        {{ submitText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'login',
  components: {
    BackImg: () => import('@/components/login/BackImg.vue'),
    LoginForm: () => import('@/components/login/LoginForm.vue'),
  },
  data() {
    return {
      account: '',
      password: '',
      autoUpdate: true,
      isUpdating: false,
      officeName: 'DEEP CODE',
      userName: '小岚',
      title: '欢迎你的加入',
      isShowRegister: false
    }
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },
  computed: {
    loginBottomBtnContainer() {
      return {
        space: this.isLgScreen(this.$vuetify),
        normal: !this.isLgScreen(this.$vuetify),
      }
    },
    submitText() {
      //假如教务账密都输入，再根据是否存在该账户显示注册还是登录文字
      return '登录'
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
  },
  mounted() {
    //this.$vuetify.theme.isDark = true
  },
  beforeDestroy() {
    this.$vuetify.theme.isDark = false
  }
}
</script>

<style lang="scss" scoped>
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

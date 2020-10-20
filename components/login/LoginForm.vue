<template>
  <v-row align="center" justify="center">
    <v-fab-transition v-for="(item, key) in current_login_form_data" :key="key">
      <!-- 登录表单中重复则不渲染但此处优先级在vue3中会改变，且此处判断条件不能直接写 -->
      <v-col :cols="lgCols">
        <v-text-field
          v-model="item.value"
          filled
          color="blue-grey lighten-2"
          :label="item.text"
        ></v-text-field>
      </v-col>
    </v-fab-transition>
    <!-- 注册撤回 -->
    <template v-if="isShowRegister">
      <v-col cols="5">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="notShowRegister">
              <v-icon>mdi-backburger</v-icon>
            </v-btn>
          </template>
          <span>登录</span>
        </v-tooltip>
      </v-col>
      <v-col cols="5">
        <v-divider></v-divider>
      </v-col>
    </template>
    <!-- 注册额外增加部分 -->
    <template v-if="isShowRegister">
      <v-fab-transition
        v-for="(item, key) in current_register_form_data"
        :key="key"
      >
        <!-- 登录表单中重复则不渲染但此处优先级在vue3中会改变，且此处判断条件不能直接写 -->
        <v-col :cols="lgCols" v-if="!isIntersection(key)">
          <v-text-field
            v-model="item.value"
            filled
            color="blue-grey lighten-2"
            :label="item.text"
          ></v-text-field>
        </v-col>
      </v-fab-transition>
    </template>
  </v-row>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  inheritAttrs: false,
  name: 'LoginForm',
  components: {},
  data: () => ({
    isUpdating: '',
    current_login_form_data: null,
    current_register_form_data: null,
    current_recruit_form_data: null,
  }),
  props: {
    isShowRegister: {
      type: Boolean,
      default: false
    },
    isLeet: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    notShowRegister () {
      this.$emit('onNotShowRegister')
    }
  },
  computed: {
    lgCols () {
      return this.isLgScreen(this.$vuetify) ? 6 : 12
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
      login_form_data: 'login/login_form_data',
      register_form_data: 'login/register_form_data',
      recruit_form_data: 'login/recruit_form_data',
    }),
    //找出登录表单和注册表单中的交集
    intersection () {
      const res = []
      //遍历小，然后在大中找小
      for (const key in this.current_login_form_data) {
        if (this.current_register_form_data[key]) {
          res.push(key)
        }
      }
      return res
    },
    //判断当前遍历的注册表单是否已在登录表单内即不再渲染
    isIntersection () {
      return function (key) {
        return this.intersection.includes(key)
      }
    }
  },
  watch: {},
  //后续建议改为预加载但不应该为懒加载
  created () {
    this.current_login_form_data = this.login_form_data
    this.current_register_form_data = this.register_form_data
    this.current_recruit_form_data = this.current_recruit_form_data
  }
}
</script>

<style lang='scss' scoped>
</style>

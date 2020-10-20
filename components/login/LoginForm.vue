<template>
  <v-row align="center" justify="center">
    <v-col :cols="lgCols">
      <v-text-field
        v-model="account"
        filled
        color="blue-grey lighten-2"
        label="教务系统账号"
      ></v-text-field>
    </v-col>
    <v-col :cols="lgCols">
      <v-text-field
        v-model="password"
        filled
        color="blue-grey lighten-2"
        label="教务系统密码"
      ></v-text-field>
    </v-col>
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
          <span>老油条登录</span>
        </v-tooltip>
      </v-col>
      <v-col cols="5">
        <v-divider></v-divider>
      </v-col>
    </template>
    <!-- 注册额外增加部分 -->
    <template v-if="isShowRegister">
      <v-col :cols="lgCols">
        <v-text-field
          v-model="password1"
          filled
          color="blue-grey lighten-2"
          label="教务系统密码"
        ></v-text-field>
      </v-col>
      <v-col :cols="lgCols">
        <v-text-field
          v-model="password2"
          filled
          color="blue-grey lighten-2"
          label="教务系统密码"
        ></v-text-field>
      </v-col>
      <v-col :cols="lgCols">
        <v-text-field
          v-model="password3"
          filled
          color="blue-grey lighten-2"
          label="教务系统密码"
        ></v-text-field>
      </v-col>
      <v-col :cols="lgCols" v-if="isLeet">
        <v-text-field
          v-model="password4"
          filled
          color="blue-grey lighten-2"
          label="教务系统密码"
        ></v-text-field>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import {
  mapGetters,
  mapState
} from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({
    isUpdating: '',
    account: '',
    password: '',
    password1: '',
    password2: '',
    password3: '',
    password4: '',
    switch1: false
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
    ...mapState({
      new_login_data: (state) => state.form.new_login_data,
      new_recruit_data: (state) => state.form.new_recruit_data,
    }),
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>

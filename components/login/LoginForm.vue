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

    },
    isLeet: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
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

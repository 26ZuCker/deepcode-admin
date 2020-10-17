<template>
<v-row align="center" justify="center">
  <v-col :cols="isLgScreen($vuetify) ? 6 : 12">
    <v-text-field v-model="account" :disabled="isUpdating" filled color="blue-grey lighten-2" label="教务系统账号"></v-text-field>
  </v-col>

  <v-col :cols="isLgScreen($vuetify) ? 6 : 12">
    <v-text-field v-model="password" :disabled="isUpdating" filled :counter="isShowRegister" color="blue-grey lighten-2" label="教务系统密码"></v-text-field>
  </v-col>
  <!-- 注册额外增加部分 -->
  <v-col :cols="isLgScreen($vuetify) ? 6 : 12" v-if="isShowRegister"></v-col>
</v-row>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({
    isUpdating: '',
    account: '',
    password: '',
  }),
  props: {},
  methods: {},
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>

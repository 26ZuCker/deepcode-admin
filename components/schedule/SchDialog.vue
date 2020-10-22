<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    :transition="transitionList[3]"
  >
    <!-- 点击的按钮 -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template>
    <!-- 显示的主体 -->
    <v-card elevation="0">
      <!-- 顶部确认栏 -->
      <v-toolbar dark elevation="0">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>添加你的日程 </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark @click="dialog = false" icon>
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- 主体：标题，时间选择 -->
      <v-text-field
        outlined
        readonly
        label="标题"
        :value="title"
        class="ma-2"
      ></v-text-field>
      <date-picker :hasTime="true"></date-picker>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {
    DatePicker: () => import('@/components/release/DatePicker.vue')
  },
  data: () => ({
    dialog: false,
    title: ''
  }),
  computed: {
    ...mapGetters({
      transitionList: 'showCom/transitionList'
    })
  }
}
</script>

<style lang='scss' scoped>
</style>
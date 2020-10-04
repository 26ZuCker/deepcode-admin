<template>
  <div>
    <!-- 由于左侧选择展示形式不会过多所以暂时采用多选框的形式并采用min-width样式即可 -->
    <!-- 如何自适应限制最大宽度？ -->
    <v-sheet tile height="54" class="d-flex align-content-space-around">
      <v-btn-toggle
        v-model="currentTypes"
        multiple
        dense
        shaped
        mandatory
        active-class="blue white--text"
      >
        <v-btn v-for="i in showTypes" :key="`${i}-item`">
          {{ i }}
        </v-btn>
      </v-btn-toggle>
      <v-spacer></v-spacer>

      <!-- pc端采用表单拓展框的形式选择 -->
      <v-menu :rounded="rounded" offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            tile
            outlined
            @click="bottomDrawer = !bottomDrawer"
            class="ml-1"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>mdi-calendar-week</v-icon> 第{{ currentWeek }}周
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="item in weekNum" :key="item" link>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>

    <!-- 移动端采用底部侧边栏的形式选择，平均height为46 -->
    <v-navigation-drawer
      v-model="bottomDrawer"
      bottom
      temporary
      fixed
      height="230"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="i in weekNum" :key="`week-${i}`">
            <v-list-item-title>{{ i }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- pc端则为拓展菜单 -->
  </div>
</template>

<script>
import { formatYMDHM } from '@/utils/dayjs'

export default {
  inheritAttrs: false,
  name: 'CalHeader',
  components: {},
  data: () => ({
    showTypes: ['课程', '日程', '打卡'],
    currentTypes: [0],
    bottomDrawer: false,
    group: null,
    currentMonth: 0,
    currentDate: 0,
    currentWeek: 1,
    calType: []
  }),
  props: {

  },
  methods: {

  },
  computed: {
    //根据总周次生成连续数组注意是[0,length+1]
    weekNum () {
      return Array.from({ length: 23 }, (v, k) => k + 1);
    },
  },
  watch: {},
  //假如放在mounted内则会出现只显示边框而没有数据占位的情况
  created () {
    [, this.currentMonth, this.currentDate] = formatYMDHM().split('/')
  },
  group () {
    this.drawer = false
  },
}
</script>

<style lang='scss' scoped>
</style>
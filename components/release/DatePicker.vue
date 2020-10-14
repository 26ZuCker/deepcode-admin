<template>
<v-sheet class="date-picker-container" color="blue-grey darken-1">
  <!-- 标题，date和手动选择时间 -->
  <v-sheet :class="pickerTitleContainer" color="blue-grey darken-1">
    <!-- 标题 -->
    <div class="text-h3 white--text">{{ pickerTitle }}</div>
    <!-- date -->
    <div class="text-h4 white--text">{{ selectDate }}</div>
    <!-- 手动选择时间 -->
    <template v-if="pickerType === 'sch'">
      <v-select solo dense v-model="selectTime" :items="hours" append-outer-icon="mdi-plus-thick" prepend-icon="mdi-window-minimize" menu-props="auto" hide-details single-line></v-select>
      <span class="font-weight-black">:</span>
      <v-select solo dense v-model="selectTime" :items="seconds" append-outer-icon="mdi-plus-thick" prepend-icon="mdi-window-minimize" menu-props="auto" hide-details single-line></v-select>
    </template>
  </v-sheet>
  <!-- pc端右侧月历 -->
  <v-date-picker v-model="selectDate" dark :show-current="currentDate" no-title></v-date-picker>
  <!-- 移动端点击底部抽屉显示月历 -->
</v-sheet>
</template>

<script>
import {
  mapGetters
} from 'vuex'

import {
  formatYMDHM
} from '@/utils/dayjs.js'

export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({
    selectDate: '',
    selectTime: ''
  }),
  props: {
    pickerType: {
      type: String,
      validator: function (value) {
        //有三种情况：没传入，传入可匹配字符串，传入非可匹配字符串
        return ['sch', 'pro'].includes(value)
      },
      default: 'pro'
    },
    pickerTitle: {
      type: String,
      default: '结束日期'
    }
  },
  methods: {},
  computed: {
    pickerTitleContainer() {
      return {}
    },
    datePickerContainer() {
      return {}
    },
    currentDate() {
      return formatYMDHM().split('/').slice(0, 3).join('-')
    },
    hours() {
      const res = []
      for (let i = 0; i <= 24; i++) {
        res.push(i)
      }
      return res
    },
    seconds() {
      const res = []
      for (let i = 0; i <= 60; i++) {
        res.push(i)
      }
      return res
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  mounted() {
    this.selectDate = this.currentDate
  }
}
</script>

<style lang="scss" scoped>
.date-picker-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>

<template>
  <v-sheet class="date-picker-container">
    <v-date-picker v-model="selectDates" no-title scrollable :range="isRange">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(selectDates)">
        OK
      </v-btn>
    </v-date-picker>
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
    selectTime: '',
    menu: false,
    selectDates: ['2020-10-18', '2020-10-19']
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
    },
    isRange: { type: Boolean, default: false }
  },
  methods: {},
  computed: {
    pickerTitleContainer () {
      return {}
    },
    dateRangeText () {
      return this.selectDates.join(' ~ ')
    },
    datePickerContainer () {
      return {}
    },
    currentDate () {
      return formatYMDHM().split('/').slice(0, 3).join('-')
    },
    hours () {
      const res = []
      for (let i = 0; i <= 24; i++) {
        res.push(i)
      }
      return res
    },
    seconds () {
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
  mounted () {
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

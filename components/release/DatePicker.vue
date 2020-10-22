<template>
  <v-sheet class="date-picker-container">
    <!-- 左侧日期选择 -->
    <v-date-picker v-model="pickerData" no-title scrollable :range="isRange">
    </v-date-picker>
    <!-- 右侧具体输入框 -->
    <div v-if="hasTime" :class="timeFormContainer">
      <v-text-field
        outlined
        readonly
        label="开始日期"
        :value="begin_date"
        class="ma-2"
      ></v-text-field>
      <v-text-field
        outlined
        readonly
        label="结束日期"
        :value="end_date"
        class="ma-2"
      ></v-text-field>
      <template v-if="hasTime">
        <!-- 时 -->
        <v-select
          v-model="begin_time_hour"
          :items="hours"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
        <!-- 分 -->
        <v-select
          v-model="begin_time_minute"
          :items="minutes"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
        <v-select
          v-model="end_time_hour"
          :items="hours"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
        <v-select
          v-model="end_time_minute"
          :items="minutes"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
      </template>
    </div>
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
    selectDates: ['2020-10-18', '2020-10-19'],
    begin_date: '',
    begin_time_hour: '',
    begin_time_minute: '',
    end_date: '',
    end_time_hour: '',
    end_time_minute: '',
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
    isRange: { type: Boolean, default: false },
    hasTime: { type: Boolean, default: false }
  },
  methods: {},
  computed: {
    timeFormContainer () {
      const bool = this.isLgScreen(this.$vuetify)
      return {
        smallS: !bool, lgS: bool
      }
    },
    pickerData () {
      return this.isRange ? this.selectDates : this.selectDate
    },
    hours () {
      return Array(23).fill().map((_, i) => i + 1);
    },
    minutes () {
      return Array(59).fill().map((_, i) => i + 1);
    },
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
.smallS {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lgS {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>

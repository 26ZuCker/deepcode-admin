<template>
<v-sheet class="date-picker-container">
  <v-menu ref="menu" offset-y v-model="menu" :close-on-content-click="false" :return-value.sync="selectDates" transition="slide-y-transition" min-width="290px">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field readonly v-bind="attrs" v-on="on" v-model="dateRangeText" prepend-icon="mdi-calendar">
        <template v-slot:prepend>始末日期</template>
        <template v-slot:label> 始末日期 </template>
      </v-text-field>
    </template>
    <v-date-picker v-model="selectDates" no-title scrollable range>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(selectDates)">
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
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
    }
  },
  methods: {},
  computed: {
    pickerTitleContainer() {
      return {}
    },
    dateRangeText() {
      return this.selectDates.join(' ~ ')
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

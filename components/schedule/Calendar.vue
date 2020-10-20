<!--
把整个日历拆解为多个视图，与mode区分，如day视图即顶部表示日的一栏
-->
<template>
  <v-sheet min-width="200" class="mb-6">
    <v-calendar
      ref="calendar"
      v-model="focus"
      color="primary"
      :events="events"
      :event-color="getEventColor"
      type="week"
      :interval-height="intervalHeight"
      interval-width="50"
      first-interval="6"
      interval-count="17"
      @click:event="showEvent"
      @click:more="viewDay"
      @click:date="viewDay"
      @change="updateRange"
      event-overlap-mode="stack"
    >
      <!-- 事件块：只显示事件名，背景色透明 -->
      <template v-slot:event="{ event }">
        <p @click="conso(event)">{{ event.index }}-{{ event.name }}</p>
      </template>
      <!-- 实时时间线 -->
      <!-- <template #day-body="{ date, week }">
          <div
            class="v-current-time"
            :class="{ first: date === week[0].date }"
            :style="{ top: nowY }"
          ></div>
        </template>-->

      <!-- 点击事件块展示卡片 -->
    </v-calendar>
  </v-sheet>
</template>
<script>
import { formatYMDHM } from '@/utils/dayjs.js';

export default {
  name: 'Calendar',
  data: () => ({
    focus: '',
    type: 'month',
    //左侧边栏显示周次weekLeft或时间条timeLeft，具体周次和月次应该由外部prop传入
    leftBarMode: 'timeLeft',
    //左上按钮显示月份
    currentMonth: '',
    //左上按钮显示周次
    currentDate: '',
    currentWeek: 1,
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue lighten-3', 'indigo lighten-3', 'deep-purple lighten-3', 'cyan lighten-3', 'green lighten-3', 'orange lighten-3', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  props: {
    showTypes: {
      type: Array, default: function () {
        return []
      }
    }
  },
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    conso (myEvent) {
      console.log(myEvent)
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
          index: i
        })
      }

      this.events = events
      console.log(events)
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    changeLeft () {
      this.focus = null
      /* this.currentMonth =
        this.leftBarMode = (this.leftBarMode === 'timeLeft') ? 'weekLeft' : 'timeLeft' */
    }
  },
  computed: {
    cal () {
      return this.ready ? this.$refs.calendar : null
    },
    nowY () {
      return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px'
    },
    intervalHeight () {
      if (process.client) {
        return window.innerHeight * (30 / 736)
      }
    }
  },
  watch: {
    '$refs.calendar.title': {
      handler (n, o) {
        //只有当前左侧边栏显示的是时间才更换
        (this.leftBarMode === 'timeline') && (this.currentMonth = n)
      }, immediate: true
    }
  },
  mounted () {
    [, this.currentMonth, this.currentDate] = formatYMDHM().split('/')
  }
}
</script>
<style lang="scss">
.v-current-time {
  height: 2px;
  background-color: #ea4335;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: '';
    position: absolute;
    background-color: #ea4335;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
</style>
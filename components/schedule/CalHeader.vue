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
        active-class="black white--text"
      >
        <v-btn v-for="value in showTypes" :key="value">
          {{ value }}
        </v-btn>
      </v-btn-toggle>
      <v-spacer></v-spacer>

      <!-- pc端采用表单拓展框的形式选择，两个按钮分别控制当前周次和选择看的用户 -->

      <v-menu offset-y max-height="300" rounded="b-xl">
        <template v-slot:activator="{ attrs, on }">
          <v-btn shaped outlined class="ml-1" v-bind="attrs" v-on="on">
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

    <v-sheet class="cal-header-member mb-3">
      <v-menu transition="slide-y-transition" bottom offset-y rounded="b-xl">
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            v-on="on"
            v-bind="attrs"
            text
            rounded
            width="180"
            class="d-flex justify-space-around white--text black"
          >
            <v-avatar left size="30">
              <v-img :src="current_member_list[0].avatar"></v-img>
            </v-avatar>
            {{ current_member_list[0].name }}
          </v-btn>
        </template>
        <v-list max-height="300" class="overflow-y-auto">
          <v-list-item-title
            class="d-flex justify-center align-center pr-2 font-weight-bold"
            >{{ current_member_list.length }} 人</v-list-item-title
          >
          <v-list-item
            v-for="item in current_member_list"
            :key="item.name"
            link
          >
            <v-chip>
              <v-avatar left>
                <v-img :src="item.avatar"></v-img>
              </v-avatar>
              {{ item.name }}
            </v-chip>
          </v-list-item>
        </v-list>
      </v-menu>

      <div>本周仅剩13节课</div>
    </v-sheet>

    <!-- 移动端采用底部侧边栏的形式选择，平均height为46 -->
    <v-navigation-drawer
      v-model="bottomDrawer"
      bottom
      temporary
      fixed
      height="230"
      v-if="!isLgScreen($vuetify)"
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
  </div>
</template>

<script>
import {
  mapGetters,
  mapState
} from 'vuex'
import {
  formatYMDHM
} from '@/utils/dayjs'
const showTypesMap = {
  课程: 'course', 日程: 'schedule', 打卡: 'clock'
}
export default {
  inheritAttrs: false,
  name: 'CalHeader',
  components: {},
  data: () => ({
    showTypes: ['课程', '日程', '打卡'],
    currentTypes: [0, 1],
    bottomDrawer: false,
    group: null,
    currentMonth: 0,
    currentDate: 0,
    currentWeek: 1,
    calType: [],
    current_member_list: []
  }),
  props: {

  },
  computed: {
    //根据总周次生成连续数组注意是[0,length+1]
    weekNum () {
      return Array.from({
        length: 23
      }, (v, k) => k + 1);
    },
    ...mapState({
      memberList: (state) => state.user.memberList
    }),
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  watch: {
    currentTypes: {
      handler (n) {
        const res = []
        for (const i of n) {
          res.push(showTypesMap[this.showTypes[i]])
        }
        this.$emit('onTypeChange', res)
      }, immediate: true
    }
  },
  //假如放在mounted内则会出现只显示边框而没有数据占位的情况
  created () {
    //获取当前月份和日期
    [, this.currentMonth, this.currentDate] = formatYMDHM().split('/')
    //取出不含组名的成员列表并冻结
    for (const item of this.memberList) {
      if (item.name) {
        this.current_member_list.push(Object.freeze(item))
      } else {
        continue
      }
    }
  },
  group () {
    this.drawer = false
  },
}
</script>

<style lang="scss" scoped>
.cal-header-member {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>

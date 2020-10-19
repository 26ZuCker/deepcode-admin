<template>
<div class="user-card-container">
  <!-- 背景栏 -->
  <v-img max-height="300" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
  </v-img>
  <!-- 用户个人信息容器 -->
  <div class="ava-container">
    <!-- 头像栏 -->
    <v-avatar class="v-sheet--offset" color="grey" elevation="12" :size="isLgScreen($vuetify) ? '20%' : '30%'">
      <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
    </v-avatar>
    <!-- 用户个人基本信息栏 -->
    <v-sheet height="100%" elevation="0" class="ml-5">
      <v-card-title class="justify-center">
        小岚
        <v-icon color="pink" class="ma-3">mdi-gender-female</v-icon>
        <span class="green--text ma-3">在线</span>
      </v-card-title>
      <v-card-subtitle>
        <span class="border-w pr-3">加入
          <template class="">888</template>
          天</span>
        <span class="pl-3">打卡 <template>999</template> 时</span>
      </v-card-subtitle>
    </v-sheet>
  </div>

  <!-- 详细个人信息展开栏-->
  <v-expansion-panels focusable inset class="elevation-0">
    <v-expansion-panel class="elevation-0">
      <v-expansion-panel-header class="elevation-0">
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4"> Trip name </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0"> Enter a name for the trip </span>
                <span v-else key="1"> trip </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="elevation-0">
        详细信息
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-card :class="reactContainer" elevation="10">
    <!-- 本周打卡时长-->
    <v-row align="center" style="width: 100%">
      <v-col cols="8" class="d-flex justify-center">
        <v-progress-circular size="120" color="primary">
          今日打卡30h</v-progress-circular>
      </v-col>
      <v-col cols="4" class="d-flex justify-end">超过50%成员</v-col>

      <!-- 本月打卡时间月历 -->
      <v-col cols="8">
        <v-date-picker landscape no-title readonly v-model="date" :events="arrayEvents">
        </v-date-picker>
      </v-col>
      <v-col cols="4" class="d-flex justify-end">超过50%成员</v-col>
    </v-row>
  </v-card>

  <!-- 成就及标签展开栏 -->
  <v-expansion-panels focusable inset accordion>
    <v-expansion-panel>
      <!-- 头部默认只展示三个标签 -->
      <v-expansion-panel-header class="elevation-0">
        <template v-slot:default="{ open }"><span class="text-h6">标签栏</span>
          <v-chip class="mx-2">
            {{ tags[0] }}
          </v-chip>
          <v-fade-transition leave-absolute>
            <v-chip v-if="open" class="mx-2">
              {{ tags[1] }}
            </v-chip>
            <v-chip v-else class="text--secondary">5 more</v-chip>
          </v-fade-transition>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pa-0">
        <v-chip v-for="tag in tags" :key="tag" class="ma-3">
          {{ tag }}
        </v-chip>
        <v-btn icon>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'UserCard',
  inheritAttrs: false,
  components: {
    UserTabs: () => import('./UserTabs.vue'),
  },
  data: () => ({
    selection: [''],
    date: new Date().toISOString().substr(0, 10),
    arrayEvents: null,
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
  computed: {
    reactContainer() {
      const bool = this.isLgScreen(this.$vuetify)
      return {
        SM: !bool,
        LG: bool
      }
    },
    headersTags() {
      return this.tags.slice(0, 2)
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
    })
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },
}
</script>

<style lang="scss" scoped>
.v-sheet--offset {
  top: -60px;
  left: 20px;
  position: relative;
}

.user-card-container {
  width: 100%;
}

.SM {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.LG {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.user-cal-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.ava-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.border-w {
  border-right: black solid 1px;
}

.my-center {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.my-column {
  display: flex;
  flex-direction: column;
}
</style>

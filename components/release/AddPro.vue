<template>
  <v-container>
    <!-- ddl设置 -->
    <date-picker type="pro"></date-picker>

    <v-divider></v-divider>

    <!-- 统计模块数和参与人数 -->
    <div class="partSummary ma-2">
      <div>
        <span>模块</span>
        <span class="font-weight-black">3</span>
        <span class="pl-2 ml-2 border-left">人数</span>
        <span class="font-weight-black">5</span>
      </div>
      <v-btn icon><v-icon>mdi-head-sync-outline</v-icon></v-btn>
    </div>

    <!-- 增删改项目的部分 -->
    <pro-part></pro-part>

    <v-divider></v-divider>

    <!-- 底部交互按钮 -->
    <v-card-actions :class="releaseBottomBtnContainer">
      <v-btn icon>
        <v-icon size="40">mdi-head-plus-outline</v-icon>
      </v-btn>
      <v-btn
        color="blue-grey darken-3 white--text"
        class="ml-0 my-2"
        depressed
        :block="!isLgScreen($vuetify)"
      >
        发布
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import {
  proPart
} from '@/apis/project.js'
export default {
  inheritAttrs: false,
  name: '',
  components: {
    DatePicker: () => import('./DatePicker.vue'),
    ProPart: () => import('./ProPart.vue')
  },
  data: () => ({
    //由于需要频繁增删
    partList: null,
    selectedMember: '',
  }),
  methods: {
    //浅拷贝
    addPart () {
      this.partList.set(this.partList.size + 1, {
        ...proPart
      })
    },
    delPart (index) {
      this.partList.delete(index)
    },
    remove (item) {
      const index = this.selectedMembers.indexOf(item.name)
      if (index >= 0) this.selectedMembers.splice(index, 1)
    },
  },
  computed: {
    partListSize () {
      return this.partList && this.partList.size || 0
    },
    addProPartMain () {
      return {

      }
    },
    releaseBottomBtnContainer () {
      const bool = this.isLgScreen(this.$vuetify)
      return {
        space: bool,
        normal: !bool,
      }
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    }),
    ...mapState({
      member: (state) => state.user.member
    })
  },
  mounted () {
    this.partList = new Map()
    this.addPart()
    console.log()
  }
}
</script>

<style lang="scss" scoped>
.add-pro-part-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.space {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.normal {
  display: flex;
  flex-direction: column;
}
.partSummary {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.border-left {
  border-left: 0.5px solid black;
}
</style>

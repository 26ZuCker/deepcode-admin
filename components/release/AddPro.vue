<template>
  <div class>
    <!-- ddl设置 -->
    <date-picker type="pro"></date-picker>

    <!-- 增删改项目的部分 -->
    <pro-part></pro-part>

    <v-divider></v-divider>

    <!--  -->
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
  </div>
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
</style>

<template>
<v-row justify="center" align-content="center">
  <v-col cols="10" :class="addProPartMain">
    <!-- 由于需要对v-for渲染的数组进行动态增删所以必须添加非索引的key -->
    <v-autocomplete v-for="n in partListSize" :key="n" class="ma-2" v-model="selectedMember" :items="member" auto-select-first chips clearable dense rounded solo solo-inverted color="blue-grey lighten-2" label="选择参与者" item-text="name" item-value="name">
      <template v-slot:selection="data">
        <v-chip v-bind="data.attrs" class="white--text" :input-value="data.selected" @click="data.select" dark>
          <v-avatar left>
            <v-img :src="data.item.avatar"></v-img>
          </v-avatar>
          {{ data.item.name }}
        </v-chip>
      </template>
      <template v-slot:item="data">
        <template v-if="typeof data.item !== 'object'">
          <v-list-item-content v-text="data.item"></v-list-item-content>
        </template>
        <template v-else>
          <v-list-item-avatar>
            <img :src="data.item.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="data.item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
  </v-col>
  <v-col cols="2" class="d-flex align-center">
    <v-btn icon @click="delPart">
      <v-icon size="40">mdi-close-circle-outline</v-icon>
    </v-btn>
  </v-col>
</v-row>
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
    addPart() {
      this.partList.set(this.partList.size + 1, {
        ...proPart
      })
    },
    delPart(index) {
      this.partList.delete(index)
    },
    remove(item) {
      const index = this.selectedMembers.indexOf(item.name)
      if (index >= 0) this.selectedMembers.splice(index, 1)
    },
  },
  computed: {
    partListSize() {
      return this.partList && this.partList.size || 0
    },
    addProPartMain() {
      return {

      }
    },
    releaseBottomBtnContainer() {
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
  mounted() {
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

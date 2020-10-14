<template>
<v-sheet width="100%" color="blue-grey darken-2" :class="groupContainer">
  <!-- 文字描述 -->
  <v-card elevation="0" color="blue-grey darken-2" class="ma-3" :width="isLgScreen($vuetify) ? '30%' : '100%'">
    <div class="white--text text-center ma-2 text-h4">我们如何管理</div>

    <div class="white--text text-center">没有管理不成方圆</div>
    <div class="white--text text-center">过于细化导致不妥</div>
    <div class="blue--text darken-3 font-weight-black text-center" @click="$router.push('/recruit')">
      加入我们<v-icon color="blue darken-2" size="40" style="top: -2px">mdi-chevron-right</v-icon>
    </div>
  </v-card>
  <!-- 组分类：前端，后端，算法，策划 -->

  <v-row justify="center" style="width=70%">
    <v-col v-for="i in groupTypes" :key="i.name" cols="5">
      <v-card max-width="300" max-height="500">
        <v-card-title :class="groupCardContainer">
          <v-icon size="30" color="blue darken-1">{{ i.icon }}</v-icon>
          <div class="ma-1 text-h5 blue-grey--text text--darken-1">
            {{ i.name }}
          </div>
        </v-card-title>
        <v-card-text :class="groupCardText">{{ i.des }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-sheet>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({
    groupTypes: [{
        name: '前端',
        des: '页面设计',
        icon: 'mdi-material-design'
      },
      {
        name: '后端',
        des: '数据管理',
        icon: 'mdi-server-security'
      },
      {
        name: '算法',
        des: '数据生成',
        icon: 'mdi-head-lightbulb-outline'
      },
      {
        name: '深度学习',
        des: '图像识别',
        icon: 'mdi-image-auto-adjust'
      }
    ]
  }),
  props: {},
  methods: {},
  computed: {
    groupContainer() {
      return {
        'lgS': this.isLgScreen(this.$vuetify),
        'smallS': !this.isLgScreen(this.$vuetify),
      }
    },
    groupCardContainer() {
      return {
        'group-title-container': !this.isLgScreen(this.$vuetify),
      }
    },
    groupCardText() {
      return {
        'text-center': !this.isLgScreen(this.$vuetify),
      }
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  watch: {},

}
</script>

<style lang="scss" scoped>
.group-title-container {
  display: flex;
  flex-direction: column;
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

.aaa {
  text-align: center;
  justify-items: center;
}
</style>

<template>
<!-- 从mission页面进入的发布任务页面 -->

<v-container class="align-center blue-grey lighten-2">
  <v-card elevation="14" class="rounded-xl blue-grey darken-1" max-height="1200">
    <v-toolbar flat color="blue-grey darken-1" dark>
      <v-toolbar-title>为你的小组成员发布任务</v-toolbar-title>
    </v-toolbar>

    <!-- 任务标题 -->
    <v-text-field filled label="标题" :value="title" class="ma-2 blue-grey"></v-text-field>
    <!-- 任务描述 -->
    <v-textarea filled label="描述" :value="text" class="ma-2 blue-grey"></v-textarea>

    <!-- 用于发布项目 -->
    <add-pro v-if="releaseType === 'pro'"></add-pro>
    <!-- 用于添加日程 -->
    <add-sch v-if="releaseType === 'sch'"></add-sch>

    <v-divider></v-divider>

    <v-card-actions :class="releaseBottomBtnContainer">
      <v-btn icon>
        <v-icon size="40">mdi-plus-circle-multiple-outline</v-icon>
      </v-btn>
      <v-btn color="blue-grey darken-3" class="ml-0 my-2" depressed :block="!isLgScreen($vuetify)" @click="release">
        发布
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'release',
  components: {
    AddPro: () => import('@/components/release/AddPro.vue'),
    AddSch: () => import('@/components/release/AddSch.vue'),
  },
  data() {
    return {
      releaseType: '',
      title: '',
      text: '',

    }
  },
  methods: {
    release() {
      console.log('release')
    },

  },
  computed: {
    releaseBottomBtnContainer() {
      return {
        space: this.isLgScreen(this.$vuetify),
        normal: !this.isLgScreen(this.$vuetify),
      }
    },
    addPartBtn() {
      return {
        'pa-0': !this.isLgScreen(this.$vuetify),
        'add--part-btn-container': !this.isLgScreen(this.$vuetify)
      }
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  created() {
    const {
      releaseType
    } = this.$route.params
    this.releaseType = releaseType
    console.log(this.releaseType)
  }
}
</script>

<style lang="scss" scoped>
.align-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.release-bottom-btn {
  display: flex;
  justify-content: space-between;
}

.add--part-btn-container {
  display: flex;
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

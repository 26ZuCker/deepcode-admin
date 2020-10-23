<template>
  <!-- 从mission页面进入的发布任务页面 -->

  <v-container class="align-center blue-grey lighten-2">
    <v-card elevation="0" class="rounded-xl" max-height="1200">
      <v-toolbar flat dark>
        <v-toolbar-title>{{
          releaseType === 'project'
            ? '为你的小组成员发布任务'
            : '定制你的日程安排'
        }}</v-toolbar-title>
      </v-toolbar>

      <!-- 任务标题 -->
      <v-text-field
        outlined
        label="标题"
        :value="title"
        class="ma-2"
      ></v-text-field>
      <!-- 任务描述 -->
      <v-textarea outlined label="描述" :value="text" class="ma-2"></v-textarea>

      <slot></slot>
    </v-card>
    <v-sheet color=" blue-grey lighten-2" height="40px"></v-sheet>
  </v-container>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: 'release',
  components: {
    AddPro: () => import('@/components/release/AddPro.vue'),
    AddSch: () => import('@/components/release/AddSch.vue'),
  },
  data () {
    return {
      title: '',
      text: '',
    }
  },
  props: {
    releaseType: { type: String, default: 'project' }
  },
  methods: {
    release () {
      console.log('release')
    },
    ...mapMutations({
      update_form_data: 'form/update_form_data'
    })
  },
  computed: {

    addPartBtn () {
      const bool = this.isLgScreen(this.$vuetify)
      return {
        'pa-0': !bool,
        'add--part-btn-container': !bool
      }
    },
    ...mapState({
      form_data: (state) => state.form.form_data
    }),
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
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
</style>

<template>
<!-- 考虑采用tabs或是按钮组哪个效果好点 -->
<v-btn-toggle v-model="currentTabs" mandatory tile class="user-tabs elevation-1" active-class=" white--text black">
  <v-btn width="34%"> LeetCode </v-btn>
  <v-btn width="33%"> 通知 </v-btn>
  <v-btn width="33%"> 项目 </v-btn>
</v-btn-toggle>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'user-tabs',
  components: {},
  data: () => ({
    currentTabs: 0,
    tabsMap: [{
        index: 1,
        tab: 'LeetCal'
      },
      {
        index: 0,
        tab: 'NotList'
      },
      {
        index: 2,
        tab: 'ProList'
      },
    ]
  }),
  props: {},
  methods: {},
  computed: {},
  watch: {
    currentTabs: {
      handler(n, o) {
        this.$emit('onChangeTabs', this.tabsMap[n]['tab'])
      },
      immediate: true
    }
  },
}
</script>

<style lang='scss' scoped>
</style>

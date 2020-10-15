<template>
<!-- 根据传入的信息展示通知或项目的列表，但需要防止复用 -->
<v-expansion-panels v-once>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Item
      <template v-slot:actions>
        <v-icon color="primary"> $expand </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </v-expansion-panel-content>
  </v-expansion-panel>

  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate>
      Item
      <template v-slot:actions>
        <v-icon color="teal"> mdi-check </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </v-expansion-panel-content>
  </v-expansion-panel>

  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate>
      Item
      <template v-slot:actions>
        <v-icon color="error"> mdi-alert-circle </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({

  }),
  props: {
    tarList: {
      type: Array,
      default: function () {
        return []
      }
    },
    listType: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['ProList', 'NotList'].includes(value)
      }
    }
  },
  methods: {
    toRoute() {

    }
  },
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>

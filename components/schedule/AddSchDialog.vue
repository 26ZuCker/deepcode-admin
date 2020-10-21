<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        fab
        dark
        small
        color="green"
        @click="showDialog"
      >
        <v-icon>mdi-calendar-plus</v-icon>
      </v-btn>
    </template>

    <form-card releaseType="schedule" v-once>
      <!-- 用于添加日程 -->
      <add-sch></add-sch>
    </form-card>
  </v-dialog>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({

  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>
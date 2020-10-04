<template>
  <v-card-title class="justify-around">
    任务一
    <v-spacer></v-spacer>

    <v-btn text small outlined color="primary" @click="prevMission">
      <v-icon color="grey darken-2">mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn text small outlined color="primary" @click="nextMission">
      <v-icon color="grey darken-2">mdi-chevron-right</v-icon>
    </v-btn>
  </v-card-title>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'MiHeader',
  components: {},
  data: () => ({

  }),
  props: {},
  methods: {
    prevMission () {
      console.log('prev')
    },
    nextMission () {
      console.log('next')
    }
  },
}
</script>

<style lang='scss' scoped>
</style>
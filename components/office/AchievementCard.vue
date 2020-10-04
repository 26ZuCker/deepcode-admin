<template>
  <v-row dense>
    <v-col v-for="card in teamAchievement" :key="card.id" :cols="card.flex">
      <v-card>
        <v-img
          :src="card.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="card.title"></v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'AchievementCard',
  components: {},
  data: () => ({

  }),
  props: {
    teamAchievement: { type: Array, default: [] }
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>
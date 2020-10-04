<template>
  <v-timeline align-top>
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color">
        <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
        <v-card-text class="white text--primary">
          <v-sheet max-height="200" class="overflow-y-auto">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </v-sheet>
          <v-btn :color="item.color" class="mx-0" outlined> Button </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'MiTimeline',
  components: {},
  data: () => ({

  }),
  props: {
    items: { type: Array, default: [] }
  },
}
</script>

<style lang='scss' scoped>
</style>
<template>
  <v-card :color="item.color">
    <v-card-title class="title">{{ item.title }}</v-card-title>

    <v-card-text class="white text--primary py-0">
      <v-sheet max-height="200" class="overflow-y-auto">
        {{ item.des }}
      </v-sheet>

      <v-btn :color="item.color" icon>
        <v-icon size="40">mdi-progress-check</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  part_template
} from '@/apis/project/project.js'

export default {
  inheritAttrs: false,
  name: '',
  components: {},
  props: {
    item: {
      type: Object,
      default: part_template
    }
  },
  methods: {},

  watch: {},
}
</script>

<style lang='scss' scoped>
</style>

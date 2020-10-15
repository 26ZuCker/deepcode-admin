<template>
<v-dialog v-model="isShowOpenDialog" persistent>
  <v-card shaped>
    <v-btn color="blue darken-1" text @click="isShowOpenDialog = false">了解</v-btn>
    <v-card-title>
      <span class="headline">{{ dialogTitle }}</span>
    </v-card-title>
    <v-card-text>
      {{ dialogContent }}
    </v-card-text>
    <v-row>
      <v-btn color="blue darken-1" text @click="isShowOpenDialog = false">了解</v-btn>
    </v-row>
    <v-row>
      <v-btn color="blue darken-1" text @click="isShowOpenDialog = false">不了解</v-btn>
    </v-row>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'Dialog',
  components: {},
  data: () => ({
    isShowOpenDialog: true
  }),
  props: {
    dialogTitle: {
      type: String,
      required: true
    },
    dialogContent: {
      type: String,
      required: true
    }
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>

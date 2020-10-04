<template>
  <v-dialog v-model="isShowOpenDialog" persistent>
    <v-card shaped>
      <v-btn color="blue darken-1" text @click="isShowOpenDialog = false"
        >了解</v-btn
      >
      <v-card-title>
        <span class="headline">欢迎参观本工作室</span>
      </v-card-title>
      <v-card-text>
        很好 很好 很好 很好 很好 很好 很好 很好 很好 很好 很好 很好 很好 很好
        很好 很好 很好 很好 很好 很好 很好 很好
      </v-card-text>
      <v-row>
        <v-btn color="blue darken-1" text @click="isShowOpenDialog = false"
          >了解</v-btn
        >
      </v-row>
      <v-row>
        <v-btn color="blue darken-1" text @click="isShowOpenDialog = false"
          >不了解</v-btn
        >
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
    title: { type: String, required: true },
    content: { type: String, required: true }
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>
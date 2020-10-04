<template>
  <v-progress-circular
    :rotate="-90"
    :size="100"
    :width="10"
    :value="value"
    color="primary"
  >
    今日打卡
    {{ value }}
  </v-progress-circular>
</template>

<script>
export default {
  inheritAttrs: false,
  components: {},
  name: 'TimeCircle',
  data: () => ({
  }),
  props: {
    value: { type: Number, default: 0 }
  },
  methods: {},
  computed: {},
  watch: {},
  middleware () { },
  validate () { },
}
</script>

<style lang='scss' scoped>
</style>
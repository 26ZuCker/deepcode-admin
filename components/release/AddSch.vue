<template>
<div class>
  <date-picker></date-picker>
  <!-- 是否置顶 -->
  <v-switch v-model="setTop" inset label="是否置顶"></v-switch>
</div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {
    DatePicker: () => import('./DatePicker.vue')
  },
  data: () => ({
    setTop: false
  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>

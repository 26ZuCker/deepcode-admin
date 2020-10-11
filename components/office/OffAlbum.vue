<template>
  <v-carousel
    class="elevation-1"
    cycle
    show-arrows-on-hover
    vertical
    hide-delimiter-background
    vertical-delimiters="mdi-circle"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'OffAlbum',
  components: {},
  data: () => ({

  }),
  props: {
    items: { type: Array, default: [] }
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>
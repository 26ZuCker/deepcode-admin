<template>
  <v-carousel
    class="elevation-1"
    cycle
    show-arrows-on-hover
    vertical
    vertical-delimiters="mdi-minus"
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
  name: 'OffCarousel',
  components: {},
  data: () => ({
    items: [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', },
    ],
  }),
  props: {

  },
  methods: {},
  computed: {
  },
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>
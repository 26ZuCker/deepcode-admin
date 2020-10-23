<template>
  <v-hover v-slot:default="{ hover }">
    <v-card color="grey lighten-4" height="100%" elevation="0">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
        max-width="100"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 card-reveal white--text"
            style="height: 100%"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text>
        <v-btn absolute color="orange" class="white--text" fab large right top>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">
          For the perfect meal
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({

  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
.card-reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
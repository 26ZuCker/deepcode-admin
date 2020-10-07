<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
      <v-img
        :aspect-ratio="16 / 9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out red lighten-4 v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            <v-btn color="red darken-3" v-if="hover"> 加入我们吧 </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn absolute color="orange" class="white--text" fab large right top>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">
          For the perfect meal
        </div>
        <h3 class="display-1 font-weight-light orange--text mb-2">
          QW cooking utensils
        </h3>
        <div class="font-weight-light title mb-2">
          Our Vintage kitchen utensils delight any chef.<br />
          Made of bamboo by hand
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({
    overlay: false,
  }),
  props: {},
  methods: {},
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
    })
  },
  watch: {},
}
</script>

<style lang='scss' scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
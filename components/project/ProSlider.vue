<template>
<v-sheet max-width="800" class="step-container">
  <v-slide-group show-arrows center-active>
    <v-slide-item v-for="n in 10" :key="n" v-slot:default="{ active, toggle }">
      <v-btn class="mx-2" :input-value="active" small active-class=" white--text black" depressed rounded @click="toggle">
        Options {{ n }}
      </v-btn>
    </v-slide-item>
  </v-slide-group>
  <pro-sli-card></pro-sli-card>
</v-sheet>
</template>

<script>
export default {
  name: 'ProSlider',
  data() {
    return {
      module: null
    }
  },
  components: {
    ProSliCard: () => import('./ProSliCard.vue')
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.step-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

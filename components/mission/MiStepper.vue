<template>
  <div>
    <v-stepper v-model="e1" non-linear alt-labels>
      <v-stepper-header class="overflow-x-auto">
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>

          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>
      </v-stepper-header>

      <!-- 当前大部分的负责人的完成程度 -->
      <v-stepper-items>
        <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
          <slot></slot>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
export default {
  name: 'MiStepper',
  data () {
    return {
      e1: 1,
      steps: 12,
      es6: 1
    }
  },
  components: {
    MiSteCard: () => import('./MiSteCard.vue')
  },
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
  },

  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
  },
}
</script>

<style lang='scss' scoped>
</style>
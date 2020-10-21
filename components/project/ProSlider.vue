<template>
  <v-container max-width="800" class="step-container mt-7">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header> 其他成员模块 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-slide-group show-arrows center-active class="my-2">
            <v-slide-item
              v-for="n in 10"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class=" white--text black"
                depressed
                rounded
                @click="toggle"
              >
                <v-avatar size="30">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                小岚
              </v-btn>
            </v-slide-item>
          </v-slide-group>
          <pro-other-card></pro-other-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: 'ProSlider',
  data () {
    return {
      module: null
    }
  },
  components: {
    ProOtherCard: () => import('./ProOtherCard.vue')
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

<style lang="scss" scoped>
.step-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

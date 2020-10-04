<template>
  <v-row align="center">
    <v-col cols="2">
      <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
        <v-item
          v-for="n in length"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <div>
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>
    </v-col>

    <v-col cols="10">
      <v-window v-model="window" class="elevation-1" vertical light>
        <v-window-item v-for="n in length" :key="n">
          <v-card flat max-height="500" class="overflow-y-auto">
            <v-card-text>
              <v-row class="mb-4" align="center">
                <v-avatar color="grey" class="mr-4">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-avatar>
                <strong class="title">Title {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="isCheckAnnounce = !isCheckAnnounce"
                  :color="isCheckAnnounce ? 'blue ' : 'grey lighten-1'"
                >
                  <v-icon>mdi-check</v-icon>
                </v-btn>
              </v-row>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              ></v-img>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BulletinBoard',
  components: {},
  data: () => ({
    length: 3,
    window: 0,
    isCheckAnnounce: false
  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>
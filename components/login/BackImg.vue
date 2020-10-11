<template>
  <v-img
    max-height="250"
    src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
  >
    <v-row>
      <v-col class="text-right" cols="12">
        <v-menu bottom left transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="isUpdating = true">
              <v-list-item-action>
                <v-icon>mdi-settings</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Update</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-row class="pa-4" align="center" justify="center">
        <v-col class="text-center">
          <h3 class="headline">{{ officeName }}</h3>
          <template v-if="true">
            <v-avatar size="70">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <h4>{{ userName }}</h4>
          </template>
        </v-col>
      </v-row>
    </v-row>
  </v-img>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({
    isUpdating: false,
    officeName: 'DEEP CODE',
    userName: '小岚',
  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>
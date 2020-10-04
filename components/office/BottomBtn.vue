<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        ></v-img>

        <v-card-text>
          <h2 class="title primary--text">Magento Forests</h2>
          Travel to the best outdoor experience on planet Earth. A vacation you
          will never forget!
        </v-card-text>

        <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
          <span class="primary--text subtitle-2">64 Reviews</span>
        </v-card-title>

        <v-fade-transition>
          <v-overlay
            v-if="hover && isLgScreen($vuetify)"
            absolute
            color="red lighten-4"
          >
            <v-btn color="red lighten-1">加入我们吧</v-btn>
          </v-overlay>
        </v-fade-transition>
        <!-- 移动端直接显示按钮 -->
        <v-btn color="red lighten-1" v-if="!isLgScreen($vuetify)"
          >加入我们吧</v-btn
        >
      </v-card>
    </template>
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
</style>
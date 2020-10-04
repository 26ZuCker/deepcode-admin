<template>
  <div>
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
    </v-img>
    <v-card>
      <v-avatar class="profile" color="grey" size="150">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      小蓝
    </v-card>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'OffsetCard',

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
.profile {
  position: relative;
  top: -100px;
}
</style>
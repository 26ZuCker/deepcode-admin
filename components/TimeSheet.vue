<template functional>
  <v-sheet
    class="overflow-y-auto default-layout-topbar-time"
    max-height="200"
    v-if="$options.$route.name !== 'user-userId'"
  >
    <v-container style="height: 48px" class="text-right">
      {{ props.currentTime }}
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    currentTime: { type: String, required: true }
  },
}
</script>

<style lang='scss' scoped>
</style>
<template functional>
  <v-snackbar right>
    {{ props.msg }}
  </v-snackbar>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  data: () => ({

  }),
  props: {
    msg: { type: String, default: '' }
  }
}
</script>

<style lang='scss' scoped>
</style>
<template>
<div class v-once>
  <template v-if="$route.name !== 'recruit'">
    <!-- 教务账号 -->
    <!-- 教务密码 -->
    <slot></slot>
  </template>
</div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
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
</style>

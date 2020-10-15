<template>
<div>
  <!-- 进入招新页面先显示对话框 -->
  <dialog></dialog>
</div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {
    Dialog: () => import('@/components/common/Dialog.vue')
  },
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

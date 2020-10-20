<template>
  <!-- 默认传入login因为login是基本组件由其扩展为register和 -->
  <div class></div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {

  },
  data: () => ({
    formType: null
  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
  created () {
    //可传入
    const { formType } = this.$route.query
    this.formType = formType || 'login'
  }
}
</script>

<style lang='scss' scoped>
</style>
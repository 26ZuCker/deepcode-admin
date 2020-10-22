<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <sch-dialog></sch-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inheritAttrs: false,
  name: '',
  components: {
    SchDialog: () => import('@/components/schedule/SchDialog.vue')
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapGetters({
      transitionList: 'showCom/transitionList'
    })
  }
}
</script>

<style lang='scss' scoped>
</style>
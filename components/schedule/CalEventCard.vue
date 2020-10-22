<template>
  <!-- 点击弹出事项框，查看细节，删除，编辑按钮，根据断点直接跳转到编辑页或只显示编辑表单 -->
  <v-menu
    v-model="selectedOpen"
    :close-on-content-click="false"
    :activator="selectedElement"
    offset-x
  >
    <v-card color="grey lighten-4" min-width="200px" flat>
      <v-toolbar :color="selectedEvent.color" dark>
        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <span v-html="selectedEvent.details"></span>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="secondary" @click="selectedOpen = false"
          >Cancel</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'CalEventCard',
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
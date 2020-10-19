<template>
  <v-timeline align-top :dense="!isLgScreen($vuetify)">
    <v-timeline-item
      v-for="(item, i) in partList"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <part-card :item="item"></part-card>
    </v-timeline-item>
    <v-timeline-item large fill-dot light color="white">
      <template v-slot:icon>
        <v-btn fab color="primary" @click="addPart">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  inheritAttrs: false,
  name: 'ProTimeline',
  components: {},
  data: () => ({
    partList: [{
      color: 'red lighten-2',
      icon: 'mdi-star',
      des: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an
          salutandi sententiae.`,
      title: 'Lorem Ipsum Dolor'
    },
    {
      color: 'purple darken-1',
      icon: 'mdi-book-variant',
      des: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an
          salutandi sententiae.`,
      title: 'Lorem Ipsum Dolor'
    },
    {
      color: 'green lighten-1',
      icon: 'mdi-airballoon',
      des: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an
          salutandi sententiae.`,
      title: 'Lorem Ipsum Dolor'
    },
    {
      color: 'indigo',
      icon: 'mdi-buffer',
      des: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an
          salutandi sententiae.`,
      title: 'Lorem Ipsum Dolor'
    },
    ],

  }),
  props: {

  },
  methods: {
    addPart () {
      this.partList.push(this.part_template)
    }
  },
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
      part_template: 'project/part_template'
    })
  }
}
</script>

<style lang="scss" scoped>
.pro-fab-btn {
  position: relative;
  left: 20px;
}
</style>

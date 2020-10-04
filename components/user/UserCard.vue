<template>
  <v-card class="mx-auto rounded-xl" max-height="500" max-width="600">
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
    </v-img>
    <v-avatar
      class="v-sheet--offset py-0"
      color="grey"
      elevation="12"
      :size="isLgScreen($vuetify) ? '20%' : '30%'"
    >
      <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
    </v-avatar>
    <v-card-text>
      <v-chip-group
        class="my-0"
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>
        <v-chip>7:30PM</v-chip>
        <v-chip>8:00PM</v-chip>
        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserCard',
  inheritAttrs: false,
  data: () => ({
    selection: [''],
    messages: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/john.png',
        name: 'John Leider',
        title: 'Welcome to Vuetify.js!',
        excerpt: 'Thank you for joining our community...',
      },
      {
        color: 'red',
        icon: 'mdi-pencil',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter',
      },
      {
        color: 'teal',
        icon: 'mdi-pencil',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today',
      },
    ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen',
    })
  },
  //后续在middleware内鉴权进入该route是否传递了userId否则重定向到login
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    /* console.log(params)
    console.log(query) */
  },
  created () {
    /* console.log(this.$route.params)
    console.log(this.$route.query) */
  }
}
</script>

<style lang='scss' scoped>
.user-avatar-container {
  position: relative;
}
.user-avatar-offset-top {
  position: relative;
  top: 80px;
}
.v-sheet--offset {
  top: -60px;
  position: relative;
}
</style>
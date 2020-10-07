<template>
  <v-container class="flex justify-center" fill-height>
    <v-card dark color="blue-grey darken-1 elevation-14">
      <template v-slot:progress>
        <v-progress-linear
          absolute
          color="green lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
      <!-- 封面 -->
      <v-img
        max-height="250"
        src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
      >
        <v-row>
          <v-col class="text-right" cols="12">
            <v-menu bottom left transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="isUpdating = true">
                  <v-list-item-action>
                    <v-icon>mdi-settings</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Update</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-row class="pa-4" align="center" justify="center">
            <v-col class="text-center">
              <h3 class="headline">{{ name }}</h3>
              <v-avatar size="70">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-col>
          </v-row>
        </v-row>
      </v-img>

      <v-container>
        <v-row align="center" justify="center">
          <v-col :cols="isLgScreen($vuetify) ? 6 : 12">
            <v-text-field
              v-model="account"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="教务系统账号"
            ></v-text-field>
          </v-col>

          <v-col :cols="isLgScreen($vuetify) ? 6 : 12">
            <v-text-field
              v-model="password"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="教务系统密码"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions class="flex justify-space-around">
        <v-row>
          <v-col :cols="isLgScreen($vuetify) ? 2 : 12">
            <v-btn @click="showRegister = !showRegister">
              <v-icon left>mdi-update</v-icon>
              加入我们
            </v-btn>
          </v-col>
          <!-- 需要形成块级元素单独占据一行 -->
          <v-col
            :offset="isLgScreen($vuetify) ? 8 : 0"
            :cols="isLgScreen($vuetify) ? 2 : 12"
          >
            <v-btn
              :disabled="autoUpdate"
              :loading="isUpdating"
              color="blue-grey darken-3"
              depressed
              :block="!isLgScreen($vuetify)"
              @click="isUpdating = true"
            >
              <v-icon left>mdi-update</v-icon>
              登录
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  data () {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }

    return {
      account: '',
      password: '',
      autoUpdate: true,
      friends: ['Sandra Adams', 'Britta Holt'],
      isUpdating: false,
      name: 'DEEP CODE',
      people: [
        { header: 'Group 1' },
        { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
      ],
      title: '欢迎你的加入',
      showRegister: false
    }
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },
  computed: {
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  },
  methods: {
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
  },
  mounted () {
    //this.$vuetify.theme.isDark = true
    console.log(this.$vuetify)
  },
  beforeDestroy () {
    this.$vuetify.theme.isDark = false
  }
}
</script>

<style lang='scss' scoped>
</style>
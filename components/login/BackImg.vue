<template>
  <v-img
    max-height="250"
    src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
  >
    <v-row>
      <!-- 右上角按钮 -->
      <v-col class="text-right" cols="12">
        <v-menu bottom left transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <!-- 点击显示内容登录信息 -->
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>永盛哥</v-list-item-title>
                  <v-list-item-subtitle>我们的HR</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text>加入我们</v-btn>
              <v-btn text>建议</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
      <!-- 主模块 -->
      <v-row class="pa-4" align="center" justify="center">
        <v-col class="text-center">
          <h3 class="headline">{{ officeName }}</h3>
          <template v-if="true">
            <v-avatar size="70">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <h4>{{ userName }}</h4>
          </template>
        </v-col>
      </v-row>
    </v-row>
  </v-img>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  components: {},
  data: () => ({
    isUpdating: false,
    officeName: 'DEEP CODE',
    userName: '小岚',
  }),
  props: {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
</style>

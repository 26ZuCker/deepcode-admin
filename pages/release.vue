<template>
  <!-- 从mission页面进入的发布任务页面 -->
  <v-container>
    <v-card>
      <v-toolbar flat color="blue-grey" dark>
        <v-toolbar-title>为你的小组成员发布任务</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <!-- 任务标题 -->
        <v-text-field filled label="Title" :value="title"></v-text-field>
        <!-- 任务描述 -->
        <v-textarea filled label="Text" :value="text"></v-textarea>
        <!-- 任务分类 -->

        <v-divider class="my-2"></v-divider>
        <!-- 指定成员，后续需要进行跨组选择 -->
        <v-item-group multiple>
          <v-subheader>选择成员</v-subheader>
          <v-item v-for="n in 8" :key="n" v-slot:default="{ active, toggle }">
            <v-chip
              active-class="primary"
              :input-value="active"
              @click="toggle"
            >
              Tag {{ n }}
            </v-chip>
          </v-item>
        </v-item-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" depressed @click="release"> 发布 </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'release',
  data: () => ({
    title: '',
    text: ''
  }),
  methods: {
    release () {
      console.log('release')
    }
  }
}
</script>
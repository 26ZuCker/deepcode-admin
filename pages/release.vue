<template>
  <!-- 从mission页面进入的发布任务页面 -->
  <v-container class="align-center">
    <v-card color="blue-grey darken-1" elevation="14" class="rounded-xl">
      <v-toolbar flat color="blue-grey" dark>
        <v-toolbar-title>为你的小组成员发布任务</v-toolbar-title>
      </v-toolbar>

      <!-- 任务标题 -->
      <v-text-field
        filled
        label="标题"
        :value="title"
        class="ma-2"
      ></v-text-field>
      <!-- 任务描述 -->
      <v-textarea filled label="描述" :value="text" class="ma-2"></v-textarea>

      <!-- 指定成员，可进行跨组选择 -->
      <v-autocomplete
        class="ma-2"
        v-model="friends"
        :items="people"
        filled
        chips
        color="blue-grey lighten-2"
        label="选择参与者"
        item-text="name"
        item-value="name"
        multiple
      >
        <template v-slot:selection="data">
          <v-chip
            v-bind="data.attrs"
            :input-value="data.selected"
            close
            @click="data.select"
            @click:close="remove(data.item)"
          >
            <v-avatar left>
              <v-img :src="data.item.avatar"></v-img>
            </v-avatar>
            {{ data.item.name }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template v-if="typeof data.item !== 'object'">
            <v-list-item-content v-text="data.item"></v-list-item-content>
          </template>
          <template v-else>
            <v-list-item-avatar>
              <img :src="data.item.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.name"></v-list-item-title>
              <v-list-item-subtitle
                v-html="data.item.group"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>

      <v-divider></v-divider>

      <v-card-actions :class="releaseBottomBtnContainer">
        <v-btn
          @click="addPart"
          fab
          small
          elevation="0"
          class="my-2"
          color="blue-grey darken-3"
        >
          <v-icon dark size="35"> mdi-plus </v-icon>
        </v-btn>
        <v-btn
          color="blue-grey darken-3"
          class="ml-0 my-2"
          depressed
          :block="!isLgScreen($vuetify)"
          @click="release"
        >
          发布
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'release',
  data () {
    return {
      title: '',
      text: '',
      friends: [],
      people: [
        { header: '开发组' },
        { name: 'Sandra Adams', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { name: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { name: 'Trevor Hansen', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { name: 'Tucker Smith', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { divider: true },

        { header: '算法组' },
        { name: 'Britta Holt', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        { name: 'Jane Smith ', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
        { name: 'John Smith', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { name: 'Sandra Williams', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { divider: true },

        { header: '非工作室成员' },
        { name: 'zeng', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { name: 'Sandra', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      ],
    }
  }
  ,
  methods: {
    release () {
      console.log('release')
    },
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
    addPart () { }
  },
  computed: {
    releaseBottomBtnContainer () {
      return {
        space: this.isLgScreen(this.$vuetify),
        normal: !this.isLgScreen(this.$vuetify),
      }
    },
    addPartBtn () {
      return {
        'pa-0': !this.isLgScreen(this.$vuetify),
        'add--part-btn-container': !this.isLgScreen(this.$vuetify)
      }
    },
    ...mapGetters({
      isLgScreen: 'showCom/isLgScreen'
    })
  }
}
</script>
<style lang="scss" scoped>
.align-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.release-bottom-btn {
  display: flex;
  justify-content: space-between;
}
.add--part-btn-container {
  display: flex;
  justify-content: center;
}
.space {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.normal {
  display: flex;
  flex-direction: column;
}
</style>
<template>
  <v-card>
    <v-progress-linear
      value="40"
      color="orange"
      height="20"
      stream
      buffer-value="40"
      class="subtitle-2 ma-0"
      >今日在线40小时</v-progress-linear
    >
    <div class="d-flex justify-center">
      <v-tooltip bottom v-for="i in cardItems" :key="i.id">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            class="ma-2"
            :color="i.color"
            text-color="white"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar left>
              <v-icon>{{ i.icon }}</v-icon>
            </v-avatar>
            {{ i.value }}
          </v-chip>
        </template>
        <span>{{ i.title }}</span>
      </v-tooltip>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'TopCard',
  data: () => ({
    cardItems: [
      { id: 1, title: '在线人数', value: 53, icon: 'mdi-account-circle', color: 'indigo' },
      { id: 2, title: '剩余任务', value: 3, icon: 'mdi-newspaper', color: 'indigo' },
      { id: 3, title: '本周刷题', value: 195, icon: 'mdi-head-question-outline', color: 'indigo' },
    ]
  })
}
</script>

<style lang='scss' scoped>
</style>
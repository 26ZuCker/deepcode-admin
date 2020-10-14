<!-- 
  无法改为函数式组件因为无法调用item
  设置mobile-breakpoint为0且容器最小宽度保证一直完整显示
  需要通过编辑行来增加适当的icon以表示上周垫底和榜一，较昨天排名变化 
  暂时去除底部分页栏footer
  考虑如何增加每行的高度
  需要防止某行名称过长导致放不下
  插槽由上至下摆放顺序：top顶部标题 -> header类别栏 -> body.prepend类别栏下标题
-->
<template>
  <v-card light elevation="0" width="100%" class="ma-3">
    <!-- 第一行为类别栏 -->
    <v-card-title class="rank-table-title">
      <span>LeetCode榜单</span>
      <span>18周</span>
    </v-card-title>
    <v-data-table
      :headers="headersData"
      :items="rankData"
      hide-default-footer
      mobile-breakpoint="0"
      class="elevation-1"
    >
      <!-- 整一行的配置 -->
      <!-- <template v-slot:body="{ item }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
          </tr>
        </tbody>
      </template>-->
      <!-- 具体一行的某项 -->
      <template v-slot:item.nickname="{ item }">
        <div class="text-truncate rank-table-nick">
          <v-avatar size="40" class="mr-2">
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>
          {{ item.nickname }}
          <v-icon v-if="achievementBadge(item.achievement)" class="ml-2">{{
            achievementBadge(item.achievement)
          }}</v-icon>
        </div>
      </template>
      <!-- 表格footer右下角放评定规则 -->
      <template v-slot:footer>
        <p class="text-right">评定细则</p>
        <p class="text-right">以下评判标准优先级自顶向下</p>
        <p class="text-right">1.自动累计其次</p>
        <p class="text-right">2.按照</p>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { achievementBadgeMap } from '@/apis/user.js';
import { headersData, rankData } from '@/apis/rank.js'
import registerVue from '../../pages/register.vue';
export default {
  inheritAttrs: false,
  name: 'LeetCal',
  data: () => ({
    headersData: [],
    rankData: []
  }),
  computed: {
    isShowRankData () {
      return function (key) {
        return key !== 'id'
      }
    },
    achievementBadge () {
      return function (achievement) {
        return achievement.length && (achievementBadgeMap[achievement[0]])
      }
    }
  },
  created () {
    this.headersData = Object.freeze(headersData)
    this.rankData = Object.freeze(rankData)
  }

}
</script>

<style lang='scss' scoped>
.rank-table-nick {
  font-size: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
}
.rank-table-title {
  display: flex;
  justify-content: space-between;
}
</style>
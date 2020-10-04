<template>
  <v-app>
    <v-container class="fill-height">
      <v-icon color="red" size="50">mdi-alert-circle</v-icon>
      <div v-if="error.statusCode === 404" class="text-h1">
        {{ pageNotFound }}
      </div>
      <div v-else>
        {{ otherError }}
      </div>
      <div>{{ leftTime }}后返回首页</div>
    </v-container>
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </v-app>
</template>

<script>
export default {
  props: {
    error: { type: Object, default: null, },
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      //自动重定向回首页
      leftTime: 5000
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  created () {
    const timer = setInterval(() => {
      (this.leftTime > 0) && (this.leftTime -= 1000) || (this.$router.push('/'))
    }, this.leftTime / 1000)
    this.$once('hook:beforeDestroy', () => {
      clearInterval(timer);
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>

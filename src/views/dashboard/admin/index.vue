<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <el-button @click="logout">退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

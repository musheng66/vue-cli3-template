<template>
  <div class="dashboard-container">
    <div class="home">
      <h1>欢迎：{{ userName }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: { },
  data () {
    return { }
  },
  computed: {
    userName: {
      get () {
        return this.$store.state.user.name
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 20px;
  }
</style>

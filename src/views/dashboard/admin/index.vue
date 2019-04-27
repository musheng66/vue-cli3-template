<template>
  <div class="home">
    <h1>欢迎：{{userName}}</h1>
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
  computed: {
    userName: {
      get () {
        return this.$store.state.user.name
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 20px;
  }
</style>

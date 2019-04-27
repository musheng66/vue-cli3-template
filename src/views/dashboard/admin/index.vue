<template>
  <div class="home ms-page">
    <img alt="Vue logo" src="@/assets/logo.png">
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
      this.$store.dispatch('user/logout').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

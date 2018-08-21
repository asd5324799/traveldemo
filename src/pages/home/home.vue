<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="list"></home-swiper>
  </div>
</template>
<script>
  import HomeHeader from '../../components/header/header.vue'
  import HomeSwiper from '../../components/swiper/swiper.vue'

  export default {
    data() {
      return {
        list: []
      }
    },
    components: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>
<style lang="stylus">

</style>

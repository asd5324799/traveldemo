<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="list"></home-swiper>
    <home-icons :list="list"></home-icons>
  </div>
</template>
<script>
  import HomeHeader from '../../components/header/header.vue'
  import HomeSwiper from '../../components/swiper/swiper.vue'
  import HomeIcons from '../../components/icons/icons.vue'

  export default {
    data() {
      return {
        list: []
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons
    }
  }
</script>
<style lang="stylus">

</style>

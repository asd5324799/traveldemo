<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="list"></home-swiper>
    <home-icons :list="list"></home-icons>
    <home-recommend :list="list"></home-recommend>
    <home-weekend :list="list"></home-weekend>
  </div>
</template>
<script>
  import HomeHeader from 'components/header/header.vue'
  import HomeSwiper from 'components/swiper/swiper.vue'
  import HomeIcons from 'components/icons/icons.vue'
  import HomeRecommend from 'components/recommend/recommend.vue'
  import HomeWeekend from 'components/weekend/weekend.vue'

  export default {
    data() {
      return {
        list: []
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>
<style lang="stylus">

</style>

<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="list"></home-swiper>
    <home-icons :list="list"></home-icons>
    <home-recommend :list="list"></home-recommend>
  </div>
</template>
<script>
  import HomeHeader from 'components/header/header.vue'
  import HomeSwiper from 'components/swiper/swiper.vue'
  import HomeIcons from 'components/icons/icons.vue'
  import HomeRecommend from 'components/recommend/recommend.vue'

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
      HomeRecommend
    }
  }
</script>
<style lang="stylus">

</style>

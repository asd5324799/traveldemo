<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
  import HomeHeader from './components/header.vue'
  import HomeSwiper from './components/swiper.vue'
  import HomeIcons from './components/icons.vue'
  import HomeRecommend from './components/recommend.vue'
  import HomeWeekend from './components/weekend.vue'
  import '../../axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend 
    },
    methods: {
      getHomeInfo() {
        this.$axios.get('/api/index', {
          params: {
            city: this.city
          }
        })
          .then(this.getInfoSucc);
      },
      getInfoSucc(data) {
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
    mounted() {
      this.lastCity = this.city;
      this.getHomeInfo();
    },
    computed: {
      ...mapState(['city'])
    },
    activated() {
      if(this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    },
  }
</script>
<style lang="stylus">

</style>

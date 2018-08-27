<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
  </div>
</template>
<script>
  import CityHeader from './components/header.vue'
  import CitySearch from './components/search.vue'
  import '../../axios'

  export default {
    name: 'city',
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods: {
      getCityInfo() {
        this.$axios.get('/api/city')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res) {
        this.cities = res.cities;
        this.hotCities = res.hotCities;
      }  
    },
    mounted() {
      this.getCityInfo();
    },
    components: {
      CityHeader,
      CitySearch
    }
  }
</script>
<style lang="stylus" scoped>

</style>

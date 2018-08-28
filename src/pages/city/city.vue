<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
  import CityHeader from './components/header.vue'
  import CitySearch from './components/search.vue'
  import CityList from './components/list.vue'
  import CityAlphabet from './components/alphabet'
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
      },
      handleLetterChange(letter) {
        this.letter = letter
      }
    },
    mounted() {
      this.getCityInfo();
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  }
</script>
<style lang="stylus" scoped>

</style>

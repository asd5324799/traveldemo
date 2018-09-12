<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/banner.vue";
import DetailHeader from './components/header.vue';
import DetailList from './components/list';
import axios from "axios";
export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      axios.get("/api/detail", {
        // params: {
        //   id: this.$router.params.id
        // }
      }).then(this.handleGetDataSucc);
    },
    handleGetDataSucc(data) {
      this.sightName = data.sightName;
      this.bannerImg = data.bannerImg;
      this.gallaryImgs = data.gallaryImgs;
      this.list = data.categoryList;
    }
  },
  mounted() {
    this.getDetailInfo();
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>
<style lang="stylus" scoped>
.content
  height 50rem
</style>


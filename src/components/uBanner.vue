<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/banner/banner1.jpg"></div>
      <div class="swiper-slide"><img src="../assets/banner/banner2.jpg"></div>
      <div class="swiper-slide"><img src="../assets/banner/banner3.jpg"></div>
      <div class="swiper-slide"><img src="../assets/banner/banner4.jpg"></div>
      <div class="swiper-slide"><img src="../assets/banner/banner5.jpg"></div>
      <div class="swiper-slide"><img src="../assets/banner/banner6.jpg"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
      <!--<div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>-->
  </div>
</template>

<script>
import Swiper from '../../static/swiper.min.js';

export default {
  name: 'uBanner',
  data () {
    return {};
  },
  mounted () {
    this.lunbo();
  },
  methods:{
    // banner插件==================================
    lunbo () {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 2000
      });
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../css/common';
  @import '../css/swiper.min';

  .swiper-container{
    top: remf(85);
  }

  .swiper-pagination{
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      background: #000;
      opacity: .2;
    }
  }

</style>

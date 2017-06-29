<template>
  <div class="home">
    <!--header-->
    <div class="header">
      <div class="title">
        <h1>雨后花园</h1>
      </div>

      <u-search :seach-style="styles"  @searchButton="search"></u-search>
    </div>

    <!--banner-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="b in banners" :key="b.id">
          <router-link :to="'/detail/' + b.id">
            <img :src="b.img">
          </router-link>
        </div>
      </div>
      <!-- Add Pagination -->
      <!--<div class="swiper-pagination"></div>-->
      <!-- Add Arrows -->
      <!--<div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>-->
    </div>

    <!--hotList-->
    <div class="hot">
      <h2>热点电影</h2>
      <ul class="hotLi">
        <li v-for="h in hotLists" :key="h.id">
          <router-link :to="'/detail/' + h.id">
            <a>
              <div class="imgBox">
                <img :src="h.img"/>
              </div>
              <div class="textBox">
                <p class="name">{{h.name}}</p>
              </div>
            </a>
          </router-link>
        </li>
      </ul>
    </div>

    <!--nav-->
    <u-nav></u-nav>
  </div>
</template>

<script>
import Swiper from '../../static/swiper.min.js';
import uSearch from '@/components/uSearch';
import uNav from '@/components/uNav';
import urls from '../../src/url';

export default {
  name: 'home',
  data () {
    return {
       styles: {
        width: '8.5rem',
        float: 'right'
      },
      banners: [],
      hotLists: []
    };
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
        autoplay: 4000
      });
    },

    search: function (data) {
      this.$emit('search', data);
      // console.log('value:' + data);
    }
  },
  created: function () {
    this.$http.get(urls.domain + urls.hot).then((res) => {
      if(res && res.body.code===0){
        this.banners = res.body.data.hot;
        this.hotLists = res.body.data.list;
      }
    })
  },
  components: {
    uSearch,
    uNav
  }
};

</script>

<style scoped lang="scss">
  @import '../css/common';
  @import '../css/swiper.min';

  .header{
    width: 100%;
    height: remf(85);
    background-color: #00C8BE;
    color: #fff;
    box-sizing: border-box;
    padding: remf(17);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 8;

    .title{
      float: left;
      padding-left: remf(48);
      background: url(../assets/logo.png) 0 0 no-repeat;
      background-size: remf(45);

      h1{
        font-size: remf(30);
        line-height: remf(48);
      }
    }
  }

  // -------------banner-----------
  .swiper-container{
    top: remf(85);
    overflow: hidden;
    height: remf(320)
  }

  // -------------hotList-----------
  .hot{
    padding: remf(110) 0 remf(85) 0.5rem;
    width: 100%;
    box-sizing: border-box;

    h2{
      font-size: 0.7rem;
      color: #00C8BE;
    }

    .hotLi{
      width: 100%;
      overflow: hidden;
      margin: 0.6rem 0;

      li{
        width: 33.3333%;
        float: left;
        box-sizing: border-box;
        padding-right: 0.5rem;
        margin-bottom: 0.5rem;

        a{
          display: block;
          -webkit-box-shadow: 0 0 0.3rem 0 rgba(155,143,143,0.6);
          height: 8rem;

          .imgBox{
            width: 100%;
            height: 6rem;
            overflow: hidden;

            img{
              width: 100%;
            }
          }

          .textBox{
            height: 2rem;
            width: 100%;
            position: relative;

            .name{
              text-align: center;
              font-size: remf(24);
              color: #666;
              padding: 0.2rem 0;
              position: absolute;
              width: 100%;

              @include middle;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="home">
    <!--header-->
    <u-header></u-header>

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
              <p class="name">{{h.name}}</p>
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
import uHeader from '@/components/uHeader';
import uNav from '@/components/uNav';

export default {
  name: 'home',
  data () {
    return {
      banners: [
        {
          id: 1,
          img: 'http://img4.imgtn.bdimg.com/it/u=3504717282,1849537370&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          img: 'http://img3.imgtn.bdimg.com/it/u=2707275081,243921012&fm=26&gp=0.jpg'
        },
        {
          id: 3,
          img: 'http://img4.imgtn.bdimg.com/it/u=3504717282,1849537370&fm=26&gp=0.jpg'
        },
        {
          id: 4,
          img: 'http://img4.imgtn.bdimg.com/it/u=3504717282,1849537370&fm=26&gp=0.jpg'
        },
        {
          id: 5,
          img: 'http://img3.imgtn.bdimg.com/it/u=2707275081,243921012&fm=26&gp=0.jpg'
        },
         {
          id: 6,
          img: 'http://img4.imgtn.bdimg.com/it/u=3504717282,1849537370&fm=26&gp=0.jpg'
        }
      ],
      hotLists: [
        {
          id: 1,
          img: 'http://img0.imgtn.bdimg.com/it/u=3421089525,1529372161&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大,2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 2,
          img: 'http://img3.imgtn.bdimg.com/it/u=879104673,4142663248&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。',
          time: '2017-06-12',
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 3,
          img: 'http://img0.imgtn.bdimg.com/it/u=660723082,4039959648&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 4,
          img: 'http://img5.imgtn.bdimg.com/it/u=1449072989,2663936934&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 5,
          img: 'http://img0.imgtn.bdimg.com/it/u=3632502893,4019191577&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 6,
          img: 'http://img0.imgtn.bdimg.com/it/u=2491626565,1426951637&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 7,
          img: 'http://img3.imgtn.bdimg.com/it/u=879104673,4142663248&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 8,
          img: 'http://img4.imgtn.bdimg.com/it/u=1211024949,2328269137&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 9,
          img: 'http://img1.imgtn.bdimg.com/it/u=2470159435,85544574&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        }
      ]
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
        autoplay: 2000
      });
    }
  },
  components: {
    uHeader,
    uNav
  }
};

</script>

<style scoped lang="scss">
  @import '../css/common';
  @import '../css/swiper.min';

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

          .imgBox{
            width: 100%;
            height: 6rem;
            overflow: hidden;

            img{
              width: 100%;
            }
          }

          .name{
            text-align: center;
            font-size: remf(24);
            color: #666;
            padding: 0.2rem 0;
          }
        }
      }
    }
  }
</style>

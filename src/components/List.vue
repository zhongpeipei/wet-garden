<template>
  <div class="listBox">
    <div class="header">
      <u-search :seach-style="styles"></u-search>
      <u-sort></u-sort>
    </div>

    <ul class="list">
      <li v-for="d in datas" :key="d.id">
        <router-link :to="'/detail/' + d.id">
          <a>
              <div class="imgBox">
                <img :src="d.img"/>
              </div>
              <div class="detial">
                <p class="name">{{d.name}}</p>
                <p class="summary">{{d.summary}}</p>
                <div class="info">
                  <span class="time"><i></i>{{d.time}}</span>
                  <span class="score"><i></i>{{d.score}}</span>
                  <span class="area"><i></i>{{d.area}}</span>
                </div>
              </div>
          </a>
        </router-link>
      </li>
    </ul>

    <!--nav-->
    <u-nav></u-nav>
  </div>
</template>

<script>
import uSearch from '@/components/uSearch';
import uSort from '@/components/uSort';
import uNav from '@/components/uNav';
import service from '@/service';

export default {
  name: 'List',
  data () {
    return {
      styles: {
        width: '100%'
      },
      datas: [
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
          img: 'http://img4.imgtn.bdimg.com/it/u=3504717282,1849537370&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。',
          time: '2017-06-12',
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 3,
          img: 'http://img3.imgtn.bdimg.com/it/u=2707275081,243921012&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 4,
          img: 'http://img2.imgtn.bdimg.com/it/u=610865047,2963548789&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 5,
          img: 'http://img1.imgtn.bdimg.com/it/u=2470159435,85544574&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 6,
          img: 'http://img4.imgtn.bdimg.com/it/u=1211024949,2328269137&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 7,
          img: 'http://img4.imgtn.bdimg.com/it/u=3504717282,1849537370&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 8,
          img: 'http://img3.imgtn.bdimg.com/it/u=2707275081,243921012&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 9,
          img: 'http://img2.imgtn.bdimg.com/it/u=610865047,2963548789&fm=26&gp=0.jpg',
          name: '春娇救志明',
          summary: '2009年，春娇志明后巷邂逅，演绎烟火世界中的极致浪漫。 2017年，饮食男女分分合合，志明仍未长大',
          time: '2017-06-12',
          views: 68090,
          score: '8.2',
          area: '中国大陆'
        },
        {
          id: 10,
          img: 'http://img3.imgtn.bdimg.com/it/u=879104673,4142663248&fm=26&gp=0.jpg',
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
    getList: function(){
      service.get('')
    }
  },
  components: {
    uSearch,
    uSort,
    uNav
  }
};
</script>

<style scoped lang="scss">
  @import '../css/common';

  @mixin  icons {
    background: url('../assets/icon-sprit.png') no-repeat;
    background-size: 7rem;
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: bottom;
  }

  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    background: #fff;
    padding: 0.1rem 0.35rem;
    box-sizing: border-box;
  }

  .list{
    width: 100%;
    margin: remf(110) 0 remf(85) 0;
    box-sizing: border-box;

    li{
      width: 100%;

      a{
        display: block;
        width: 100%;
        height: remf(205);
        padding: remf(14);
        box-sizing: border-box;
        position: relative;

        .imgBox{
          position: absolute;
          width: remf(170);
          height: remf(170);
          overflow: hidden;
          @include middle;

          img{
              width: 100%;
              position: absolute;
              @include middleCenter;
          }
        }

        .detial{
          width: 100%;
          box-sizing: border-box;
          padding-left: remf(184);;

          .name{
            font-size: remf(28);
            color: #00C8BE;
          }

          .summary{
            color: #666;
            font-size: remf(22);
            height: 2.17rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            margin: 0.2rem 0 0.3rem 0;
          }

          .info{
            font-size: remf(18);
            border-bottom: 1px solid #eee;
            padding-bottom: 0.3rem;

            span{
              margin-right: 0.8rem;
            }

            i{
              @include icons;
            }

            .time{
              i{
                background-position: -4rem 0.15rem;
              }
            }
            .score{
              i{
                background-position: -2.4rem 0.15rem;
              }
            }
            .area{
              i{
                background-position: -4.8rem 0.15rem;
              }
            }
          }
        }
      }
    }
  }
</style>

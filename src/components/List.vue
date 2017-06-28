<template>
  <div class="listBox">
    <div class="header">
      <u-search :seach-style="styles"  @searchButton="search"></u-search>
      <u-sort @tabChange="sort"></u-sort>
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
import urls from '../../src/url';

export default {
  name: 'List',
  data: function () {
    return {
      styles: {
        width: '100%'
      },
      datas: []
    };
  },
  methods: {
    search: function (data) {
      console.log('value:' + data);
      // this.$http.get({value: data}, urls.domain + urls.list).then((res) => {
      //   if(res && res.body.code===0){
      //     this.datas = res.body.data.list;
      //   }
      // })
    },
    sort: function (item) {
      console.log(item.id);
      // this.$http.get({sort: item.id}, urls.domain + urls.list).then((res) => {
      //   if(res && res.body.code===0){
      //     this.datas = res.body.data.list;
      //   }
      // })
    }
  },
  created: function () {
    // this.$http.get(urls.domain + urls.list).then((res) => {
    //   if(res && res.body.code===0){
    //     this.datas = res.body.data.list;
    //   }
    // })
     console.log('value:' + this.$route.params.value);
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
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin: 0.3rem 0 0.45rem 0;
          }

          .info{
            font-size: remf(18);
            border-bottom: 1px solid #eee;
            padding-bottom: 0.3rem;
            overflow: hidden;

            span{
              float: left;
              margin-right: 0.4rem;
            }

            i{
              @include icons;
            }

            .time{
              i{
                background-position: -3.9rem 0.15rem;
              }
            }
            .score{
              i{
                background-position: -2.3rem 0.15rem;
              }
            }
            .area{
                width: 3.2rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

              i{
                background-position: -4.7rem 0.15rem;
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="detail">
    <h2>{{details.name}}</h2>

    <div class="content">
      <div class="imgBox">
        <img :src="details.img"/>
      </div>
      <div class="info">
        <p>导演：{{details.director}}</p>
        <p>编剧：{{details.screenwriter}}</p>
        <p>主演：{{details.actor}}</p>
        <p>类型：{{details.type}}</p>
        <p>地区：{{details.area}}</p>
        <p>语言：{{details.language}}</p>
        <p>片长：{{details.duration}}</p>
        <p>评分：{{details.score}}分</p>
        <p>上映日期：{{details.time}}</p>
      </div>
    </div>

    <div class="content-block">
      <p class="title">{{details.name}}的剧情简介</p>
      <p class="summary">{{details.summary}}</p>
      <p class="title">{{details.name}}的下载链接</p>
      <p class="downLink">{{details.downLink}}</p>
      <p class="title">热评</p>
    </div>

    <ul class="hot-comment">
      <li v-for="c in comments" :key="c.id">
        <div>
          <i v-if="c.pic" :style="{backgroundImage:'url(' + c.pic + ')'}"></i>
          <i v-else class="pic-default"></i>
          <span class="name">{{c.name}}</span>
          <span class="time">{{c.time}}</span>
        </div>
        <p>{{c.comment}}</p>
      </li>
    </ul>

    <!--nav-->
    <u-nav></u-nav>
  </div>
</template>

<script>
import uNav from '@/components/uNav';

export default {
  name: 'detail',
  data () {
    return {
      details: {
        id: 1,
        img: 'http://img0.imgtn.bdimg.com/it/u=3421089525,1529372161&fm=26&gp=0.jpg',
        name: '失恋399年',
        summary: '电影《失恋399年》是一部爱情喜剧穿越题材的电影，影片讲述了不务正业的李肖翰在大学毕业前夕收到了来自女友张思雅的分手通知。失恋中的李肖翰却因一股神奇的力量与女友一同穿越到了明代和清代。回到前两世的张思雅将李肖翰忘得一干二净，但李肖翰却拥有今世的记忆，一心求复合的他在女友张思雅的两世里想法设法去弥补对女友的愧疚，争取挽回爱情，同时也在寻找回到今生的办法。',
        time: '2017-06-09',
        score: '8.2',
        area: '中国大陆',
        director: '吴吞',
        screenwriter: '孙冬冬',
        actor: '郑文蓉',
        type: ' 剧情 / 喜剧 / 爱情剧情 / 喜剧 / 爱情',
        language: '中文普通话',
        duration: '93分钟',
        downLink: ''
      },
      comments: [
        {
          id: 1,
          pic: 'http://img0.imgtn.bdimg.com/it/u=3421089525,1529372161&fm=26&gp=0.jpg',
          name: '棉花糖Three',
          time: '2017-06-16',
          comment: '这造型太可怕了，辣眼睛，不能直视'
        },
        {
          id: 2,
          pic: '',
          name: '棉花糖Four',
          time: '2017-06-17',
          comment: '辣眼睛，不能直视'
        },
        {
          id: 3,
          pic: 'http://img0.imgtn.bdimg.com/it/u=3421089525,1529372161&fm=26&gp=0.jpg',
          name: '棉花糖',
          time: '2017-06-17',
          comment: '这造型太可怕了……'
        }
      ]
    };
  },
  components: {
    uNav
  }
};

</script>

<style scoped lang="scss">
  @import '../css/common';

  .detail{
    color: #999;

    h2{
      height: 2rem;
      line-height: 2rem;
      font-size: 1rem;
      color: #00C8BE;
      -webkit-box-shadow: 0 0 0.3rem 0 rgba(155,143,143,0.6);
      margin-bottom: 0.5rem;
      padding: 0 0.35rem;
    }

    .content{
      padding: 0 0.35rem;
      box-sizing: border-box;
      height: 8.5rem;

      .imgBox{
        float: left;
        width: 40%;
        height: 100%;
        overflow: hidden;
        -webkit-box-shadow: 0 0 0.3rem 0 rgba(155,143,143,0.6);

        img{
          width: 100%;
        }
      }

      .info{
        float: left;
        width: 60%;
        height: 100%;
        padding-left: 0.5rem;
        box-sizing: border-box;

        p{
          font-size: 0.6rem;
          height: 0.95rem;
          white-space: nowrap;
          text-overflow:ellipsis;
          overflow:hidden;
        }
      }
    }

    .content-block{
      padding: 0 0.35rem;
      margin-top: 0.8rem;

      .title{
        height: 1.4rem;
        line-height: 1.4rem;
        border-bottom: 1px dashed #00C8BE;
        border-top: 1px solid #00C8BE;
        background-color: #F7F7F7;
        padding-left: 0.4rem;
        margin: 0.5rem 0;
        font-size: 0.7rem;
        color: #00C8BE;
      }

      .summary{
        line-height: 0.9rem;
      }

      .downLink{
        padding: 0.4rem 0.4rem 1rem 0.4rem;
      }
    }

    .hot-comment{
      padding: 0 0.35rem 3rem 0.35rem;

      li{
        border-bottom: 1px dashed #00C8BE;

        div{
          padding: 0.4rem;
          height: 1rem;
          line-height: 1rem;

          .pic-default{
            background: url(../assets/icon-sprit.png) no-repeat;
            background-size: 10rem;
            background-position: -9.1rem -1.19rem;
          }

          i{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            background-size: 1rem;
          }

          span{
            vertical-align: top;
            margin-left: 0.5rem;
          }

          .name{
            color: #00C8BE;
          }
        }

        p{
          padding: 0  0.4rem 0.4rem 0.4rem;
        }
      }
    }
  }

</style>

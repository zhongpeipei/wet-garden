<template>
  <div class="detail">
    <h2>{{details.name}}</h2>

    <div class="content">
      <div class="imgBox">
        <img :src="img"/>
      </div>
      <div class="info">
        <p v-if="infos && infos.director">导演：{{infos.director}}</p>
        <p v-if="infos && infos.screenwriter">编剧：{{infos.screenwriter}}</p>
        <p v-if="infos && infos.actor">主演：{{infos.actor}}</p>
        <p v-if="infos && infos.categorys">类型：<span class="type" v-for="t in infos.categorys">{{t}}</span></p>
        <p v-if="infos && infos.area">地区：{{infos.area}}</p>
        <p v-if="infos && infos.language">语言：{{infos.language}}</p>
        <p v-if="infos && infos.duration">片长：{{infos.duration}}</p>
        <p v-if="details && details.score">评分：{{details.score.average}}分</p>
        <p v-if="infos && infos.time">上映日期：{{infos.time}}</p>
      </div>
    </div>

    <div class="content-block">
      <p class="title">{{details.name}}的剧情简介</p>
      <p class="summary">{{details.summary}}</p>
      <p class="title">{{details.name}}的下载链接</p>
      <div class="downLink">
        <ul class="baidu">
          <li v-for="(b, $index) in downLoads.baidu" :key="$index">
            百度云盘 <span v-if="downLoads.baidu.length > 1">{{$index + 1}}</span>：<a :href="b.link">{{b.link}}</a> 密码：{{b.password}}
          </li>
        </ul>
        <ul class="thunder">
          <li v-for="(x, $index) in downLoads.thunder" :key="$index">
            迅雷下载 <span v-if="downLoads.thunder.length > 1">{{$index + 1}}</span>：<a :href="x">点击此处，复制下载地址，粘贴到迅雷中下载</a>
          </li>
        </ul>
        <ul class="magnet">
          <li v-for="(x, $index) in downLoads.magnet" :key="$index">
            磁力链接 <span v-if="downLoads.magnet.length > 1">{{$index + 1}}</span>：<a :href="x">点击此处，复制下载地址，粘贴到迅雷中下载</a>
          </li>
        </ul>
        <ul class="http">
          <li v-for="(x, $index) in downLoads.http" :key="$index">
            种子下载 <span v-if="downLoads.http.length > 1">{{$index + 1}}</span>：<a :href="x">点击此处下载</a>
          </li>
        </ul>
      </div>
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
import urls from '../../src/url';

export default {
  name: 'detail',
  data () {
    return {
      details: {},
      img: '',
      infos: {},
      downLoads: {},
      comments:[]
    }
  },
  created: function () {
    this.$http.get(urls.domain + urls.detail + '/' + this.$route.params.id).then((res) => {
      if(res && res.body.code===0){
        this.details = res.body.data;
        this.infos = res.body.data.about;
        this.img = res.body.data.imgs[0].url
      }
    })

    this.$http.get(urls.domain + urls.downLoad + '/' + this.$route.params.id).then((res) => {
      if(res && res.body.code===0){
        this.downLoads = res.body.data;
      }
    })

    this.$http.get(urls.domain + urls.comment + '/' + this.$route.params.id).then((res) => {
      if(res && res.body.code===0){
        this.comments = res.body.data;
      }
    })

    // console.log('id:' + this.$route.params.id);
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

        .type{
          margin-right: 0.2rem;
        }
      }
    }

    .content-block{
      padding: 0 0.35rem;
      margin-top: 0.8rem;
      font-size: 0.6rem;

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

        li{
          font-size: 0.4rem;
          margin-bottom: 0.15rem;
        }

        a{
          text-decoration: underline;
          color: #00C8BE;
        }
      }
    }

    .hot-comment{
      padding: 0 0.35rem 3rem 0.35rem;
      font-size: 0.6rem;

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

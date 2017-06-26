<template>
  <div class="detail">
    <h2>{{details.name}}</h2>

    <div class="content">
      <div class="imgBox">
        <img :src="details.imgs[0].url"/>
      </div>
      <div class="info">
        <p>导演：{{details.about.director}}</p>
        <p>编剧：{{details.about.screenwriter}}</p>
        <p>主演：{{details.about.actor}}</p>
        <p>类型：<span class="type" v-for="t in details.about.categorys">{{t}}</span></p>
        <p>地区：{{details.about.area}}</p>
        <p>语言：{{details.about.language}}</p>
        <p>片长：{{details.about.duration}}</p>
        <p>评分：{{details.score.average}}分</p>
        <p>上映日期：{{details.about.time}}</p>
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
      // details: {},
      // downLoads: {},
      // comments:[]
      details: {
        "id": 23,
        "area": "美国",
        "imgs": [
            {
                "url": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2404017038.jpg",
                "type": 1
            },
            {
                "url": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2404017038.jpg",
                "type": 1
            }
        ],
        "name": "最后的话",
        "alias": "The Last Word",
        "summary": "It centers on a retired businesswoman (MacLaine) who tries to control everything around her, including her own obituary (which she sets out to write herself). Seyfried plays a young journalist who tries to find out the out the truth about the woman, resulting in a life-altering friendship.",
        "score": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
        },
        "release_time": "2017-06-20",
        "about": {
            "categorys": ["喜剧", "动作", "剧情", "喜剧", "动作", "剧情"],
            "area": "美国",
            "language": "英语",
            "director": "马克·佩灵顿",
            "screenwriter": "Stuart Ross Fink",
            "actor": "阿曼达·塞弗里德",
            "time": "2017-03-03(美国)",
            "duration": "108分钟"
        },
        "online": false
      },
      comments:  [
        {
            "comment": "跟我的小美人儿一起看的 @stella_zhou",
            "name": "JoshuaWilliams",
            "time": "2017-03-25",
            "pic": ""
        },
        {
            "comment": "祖孙三代天伦之乐版本的当下末路狂花。充满政治不正确与绝对正确。推荐给当下的女性盆友们。",
            "name": "泥巴",
            "time": "2017-06-12",
            "pic": ""
        },
        {
            "comment": "",
            "name": "夜舞",
            "time": "2017-06-21",
            "pic": ""
        },
        {
            "comment": "类似《实习生》与《穿普拉达的女王》老少组合的关系，喜剧冲突很多，面对的现实问题能帮你想明白很多复杂的事情，从而指导你怎么活。只是这种形式难免陷入俗套",
            "name": "金利是个省油灯",
            "time": "2017-06-21",
            "pic": ""
        },
        {
            "comment": "还不错很励志的电影。关掉播放器，还是回到自己平庸没有灵魂的工作和生活，放飞自我和追求梦想留到以后吧。",
            "name": "zoe",
            "time": "2017-06-22",
            "pic": ""
        },
        {
            "comment": "阿曼达怎么还是不温不火 从外形到演技都比石头姐强",
            "name": "night in heart",
            "time": "2017-06-02",
            "pic": ""
        },
        {
            "comment": "老与少的碰撞，再活一次的激情。绝症又落于俗套了。我爱阿曼达。",
            "name": "流连书影",
            "time": "2017-05-21",
            "pic": ""
        },
        {
            "comment": "阿曼达外形和演技都不错，还行能看。",
            "name": "轻舞飞扬",
            "time": "2017-06-10",
            "pic": ""
        }
      ],
      downLoads: {
        "magnet": ["magnet:?xt=urn:btih:96910bf72e4f8de797bd97941b1c4d182805824b", "magnet:?xt=urn:btih:96910bf72e4f8de797bd97941b1c4d182805824b"],
        "thunder": ["thunder://QUFodHRwOi8vZGwxMjIuODBzLmltOjkyMC8xNzA2L+atjOWjsOS4jee7nS/mrYzlo7DkuI3nu50ubXA0Wlo="],
        "baidu": [
          {
            "link": "http://pan.baidu.com/s/1kUCWhaZ",
            "password": "zg4k"
          },
          {
            "link": "http://pan.baidu.com/s/1kUCWhaZ",
            "password": "zg4k"
          }
        ],
        "http": ["http://xz.66vod.net:889/2017/%E6%AD%8C%E5%A3%B0%E4%B8%8D%E7%BB%9D.720p.BD%E4%B8%AD%E8%8B%B1%E5%8F%8C%E5%AD%97[66%E5%BD%B1%E8%A7%86www.66ys.tv].mp4.torrent"]
      }
    }
  },
  created: function () {
    // this.$http.get(urls.domain + urls.detail + '/' + this.$route.params.id).then((res) => {
    //   if(res && res.body.code===0){
    //     this.details = res.body.data;
    //   }
    // })

    // this.$http.get(urls.domain + urls.downLoad + '/' + this.$route.params.id).then((res) => {
    //   if(res && res.body.code===0){
    //     this.downLoads = res.body.data;
    //   }
    // })

    // this.$http.get(urls.domain + urls.comment + '/' + this.$route.params.id).then((res) => {
    //   if(res && res.body.code===0){
    //     this.comments = res.body.data;
    //   }
    // })

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

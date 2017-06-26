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
import urls from '../../src/url';

export default {
  name: 'home',
  data () {
    return {
      // banners: [],
      // hotLists: []
      banners: [
        {
        "id": 23,
        "area": "美国",
        "img": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2404017038.jpg",
        "name": "最后的话",
        "alias": "The Last Word",
        "summary": "It centers on a retired businesswoman (MacLaine) who tries to control everything around her, including her own obituary (which she sets out to write herself). Seyfried plays a young journalist who tries to find out the out the truth about the woman, resulting in a life-altering friendship.",
        "score": 7,
        "time": "2017-06-20",
        "online": false
        },
        {
          "id": 22,
          "area": "捷克/英国/美国",
          "img": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2428974206.jpg",
          "name": "动物园长的夫人",
          "alias": "The Zookeeper's Wife",
          "summary": "据最新消息，《北方风云》、《鲸骑士》女导演妮基·卡罗将执导拍摄一部讲述二战时期纳粹屠杀犹太人题材的影片《动物园长的夫人》，该片改编自戴安娜·阿克曼同名小说，已确定由“劳模姐”杰西卡·查斯坦、丹尼尔·布鲁赫（《无耻混蛋》） 、约翰·海尔登贝格主演，《雪花与秘扇》编剧安吉拉·沃克曼负责脚本，另外焦点影业和环球影业则分别获得了该片北美以与欧洲的发行版权。 原著小说《动物园长的夫人》的故事发生在二战时期的华沙，在德军斯图卡轰炸机的肆虐下变成了一片废墟，城里的动物园也一起遭了殃，动物死了一大半。动物园园长简和他的夫人安东尼娜开始将犹太人偷偷带进空荡荡的兽栏。动物牢笼变身为诺亚方舟，躲藏在兽栏内的人以动物为代号，而动物却起了人的名字。每当夜幕降临，“游客们”便走出黑暗，一同用餐、交谈；遇到少有风平浪静的光景，还能来场钢琴音乐会。简活跃在波兰的秘密抵抗组织中，他将弹药埋在大象的围栏里，将炸药藏在水獭、獾、小土狼、猞猁代替吧这些动物身上……",
          "score": 6.7,
          "time": "2017-06-22",
          "online": false
        },
        {
          "id": 21,
          "area": "美国",
          "img": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2436030518.jpg",
          "name": "金刚：骷髅岛",
          "alias": "Kong: Skull Island",
          "summary": "上世纪70年代，一支集结了科考队员、探险家、战地摄影记者、军人的探险队，冒险前往南太平洋上的神秘岛屿——骷髅岛。他们的到来惊扰了岛上之神——史上最大金刚。经过一番惨烈的激战之后，探险队员散落在了岛屿各处。此时，队员们才意识到这次探险并不是一次单纯的科考任务，而是去探索怪兽存在的证明。\n在这片与世隔绝、危险密布的丛林，无数怪异的史前生物暗藏其中，时刻威胁着他们的生命。队员们还遇到了神秘的原始部落，金刚的身世和其守护岛屿的原因也被逐渐揭开，原来，恐怖阴森的骷髅岛上还蛰伏着更凶狠残暴的怪兽……",
          "score": 6.7,
          "time": "2017-06-22",
          "online": false
        },
        {
          "id": 20,
          "area": "美国",
          "img": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2430385341.jpg",
          "name": "歌声不绝",
          "alias": "Song to Song",
          "summary": "影片讲述一段性爱沉迷与背叛的故事，具体就是在德克萨斯州奥斯汀市的音乐节上，相互交叉的三角恋情。",
          "score": 5.7,
          "time": "2017-06-22",
          "online": false
        },
        {
          "id": 16,
          "area": "美国",
          "img": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2185488696.jpg",
          "name": "驱魔警探",
          "alias": "Deliver Us From Evil",
          "summary": "霓虹闪烁的大都会，夜幕低垂，细雨绵绵。正驱车巡逻的警察萨奇（艾瑞克·巴纳 Eric Bana 饰）和巴特勒（乔尔·麦克哈尔 Joel McHale 饰）接到报警中心传来的指示，前往某栋公寓查探情况，最终逮捕了涉嫌殴打妻子的前海军陆战队成员吉米（克里斯·科伊 Chris Coy 饰）。之后二人再度前往动物园查案，因为此前有一个癫狂的母亲将孩子扔进狮子园。萨奇在那里不仅险些丧命，还遭遇一个神秘诡异的油漆工。第三起案件，萨奇在某公寓地下室发现一具死亡多时的尸体。出乎意料的是，三起案件竟然有着微妙的关联。\n对他来说，这个世界和城市充满了神经失常的疯子，可是却根本没有想到，现代化的社会里竟然也有邪魔的存在……©豆瓣",
          "score": 5.6,
          "time": "2017-06-18",
          "online": false
        },
        {
          "id": 15,
          "area": "韩国",
          "img": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2458607265.jpg",
          "name": "牛蝇",
          "alias": "쇠파리",
          "summary": "独立电影《牛蝇》改编自韩国历史上的重大金融传销诈骗真实案例“曹喜八案”，曹喜八在2004年~2008年在韩国全国建立了10多家金字塔式的传销组织，以租赁医疗器械为由，向投资人保障高达30%~40%的收益，五年期间骗取了无数投资人，影片中传销组织与司法机构沆瀣一气，为了被骗的父亲和姐姐，姜海旭（金镇宇饰）不得不孤军奋战。来自泡饭影视",
          "score": 5.3,
          "time": "2017-06-18",
          "online": false
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
  created: function () {
    // this.$http.get(urls.domain + urls.hot).then((res) => {
    //   if(res && res.body.code===0){
    //     this.banners = res.body.data.hot;
    //     this.hotLists = res.body.data.list;
    //   }
    // })
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

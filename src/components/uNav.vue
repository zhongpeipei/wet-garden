<template>
  <ul class="nav">
    <li v-for="(item, index) in items" :key="index"
      @click="tabChange(item)">
      <router-link :to="item.router">
        <i :style="{backgroundPosition: item.default}"></i>
        <p :class="[item.select ? 'active' : 'notActive']">{{item.text}}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'uNav',
  data () {
    let datas = [
      {router:'/', icon: '0 -1.05rem', activeI: '0 0', text: '首页', select: false},
      {router:'/list/all', icon: '-1.05rem -1.05rem', activeI: '-1.05rem 0', text: '排序', select: false}
    ];
    datas.map((x) => {
      x.default = x.icon;
    });
    datas[0].default = datas[0].activeI;
    datas[0].select = true;
    return {
      items: datas
    };
  },
  methods: {
    tabChange: function (item) {
      for (let i = 0; i < this.items.length; i++) {
        let x = this.items[i];
        x.select = false;
        x.default = x.icon;
      }
      item.select = true;
      item.default = item.activeI;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../css/common';

.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  display: -webkit-flex;
  // background: #00C8BE;
  background: #fff;
  -webkit-box-shadow: 0 0 remf(16) 0 rgba(155,143,143,0.6);

  li {
    height: remf(85);
    flex-grow: 1;
    padding-top: 0.15rem;
    box-sizing: border-box;
    text-align: center;

    i{
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background: url('../assets/icon-sprit.png') no-repeat;
      background-size: 9rem;
    }

    p {
      font-size: remf(20);
    }

    .active {
    color: #00C8BE;
    }

    .notActive {
      color: #999;
    }
  }
}
</style>

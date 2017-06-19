<template>
  <ul class="sort">
    <li v-for="(item, index) in items" :key="index"
      @click="tabChange(item)">
      <i :style="{backgroundPosition: item.default}"></i>
      <span :class="[item.select ? 'active' : 'notActive']">{{item.text}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'uSort',
  data () {
    let datas = [
      {icon: '-1.5rem -0.75rem', activeI: '-1.5rem 0.07rem', text: '默认', select: false},
      {icon: '-2.2rem -0.75rem', activeI: '-2.2rem 0.07rem', text: '评分', select: false},
      {icon: '-3.0rem -0.75rem', activeI: '-3.0rem 0.07rem', text: '人气', select: false},
      {icon: '-3.7rem -0.75rem', activeI: '-3.7rem 0.07rem', text: '时间', select: false}
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

.sort {
  width: 100%;
  display: -webkit-flex;
  background: #fff;
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;

  li {
    height: 100%;
    line-height: remf(40);
    flex-grow: 1;
    text-align: center;
    -webkit-box-shadow: 0 0 remf(16) 0 rgba(155,143,143,0.6);
    border-radius: remf(10);

    i{
      display: inline-block;
      width: 0.65rem;
      height: 0.65rem;
      background: url('../assets/icon-sprit.png') no-repeat;
      background-size: 6.5rem;
      vertical-align: -0.1rem;;
    }

    span {
      font-size: remf(20);
    }
  }
  .active {
   color: #00C8BE;
  }

  .notActive {
    color: #999;
  }
}
</style>

<template>
  <div class="search" :style="seachStyle">
    <input placeholder="请输入电影名称或关键字" type="text" v-model="searchValue"/>
    <router-link to="/detail">
      <i class="button" @click="search()"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'uSearch',
  props:['seachStyle'],
  data () {
    return {
      searchValue: ''
    };
  },
  methods: {
    search: function () {
      this.searchValue;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../css/common';

  .search{
    padding-top: remf(5);
    position: relative;

    input{
      border: 1px solid #ccc;
      -webkit-box-shadow: 0 0 0.3rem 0 rgba(155,143,143,0.6);
      border-radius: remf(10);
      width: 100%;
      height: remf(40);
      padding-left: remf(10);
      font-size: remf(14);
      color: #999;
      box-sizing: border-box;
    }

    .button{
      position: absolute;
      top: remf(12);
      right: remf(5);
      content: '';
      width: remf(28);
      height: remf(28);
      background: url(../assets/search.png) no-repeat;
      background-size: remf(28);
    }
  }
</style>

<template>
  <div class="search" :style="seachStyle">
    <input placeholder="请输入电影名称或关键字" type="text" v-model="searchValue"/>
    <i class="close" @click="clear"></i>
    <router-link :to="'/list/' + searchValue">
      <i class="button" @click="searchButton"></i>
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
    clear: function (){
      this.searchValue = '';
    },
    searchButton: function () {
      this.$emit('searchButton', this.searchValue);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../css/common';

  .search{
    margin-top: 0.15rem;
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

    .close{
      top: 0.16rem;
      right: remf(38);
    }

    .button{
      position: absolute;
      top: 0.15rem;;
      right: remf(5);
      content: '';
      width: remf(28);
      height: remf(28);
      background: url(../assets/search.png) no-repeat;
      background-size: remf(28);
    }
  }
</style>

<template>
  <div class="header">
    <div class="title">
      <h1>雨后花园</h1>
    </div>

    <u-search :seach-style="styles"></u-search>
  </div>
</template>

<script>
import uSearch from '@/components/uSearch';

export default {
  name: 'uHeader',
  data () {
    return {
      styles: {
        width: '8.5rem',
        float: 'right'
      }
    };
  },
  components: {
    uSearch
  }
};
</script>

<style scoped lang="scss">
@import '../css/common';

  .header{
    width: 100%;
    height: remf(85);
    background-color: #00C8BE;
    color: #fff;
    box-sizing: border-box;
    padding: remf(17);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 8;

    .title{
      float: left;
      padding-left: remf(48);
      background: url(../assets/logo.png) 0 0 no-repeat;
      background-size: remf(45);

      h1{
        font-size: remf(30);
        line-height: remf(48);
      }
    }
  }
</style>

<template>
  <div id="app" :style="screenHeight">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    let _height = window.screen.height + 'px';
    return {
      screenHeight: {
        height: _height
      }
    };
  }
};
</script>

<style lang="scss">
@import 'css/reset';

#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: scroll;
}
</style>

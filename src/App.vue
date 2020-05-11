<template>
  <div id="app">
    <!--router-view 不能缺少否则以为是路由组件不跳转-->
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>

import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  name: "App",
  components: {
    FooterGuide
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
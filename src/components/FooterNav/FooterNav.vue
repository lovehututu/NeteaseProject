<template>
  <div class="footer">
    <div class="footItem" :class="{active:$route.path==='/index'}" @click="goPage('/index')">
      <i class="icon iconfont icon-shouye"></i>
      <span>首页</span>
    </div>
    <div class="footItem" :class="{active:$route.path=='/category/categorydetail/0'}" @click="goPage('/category')">
      <i class="icon iconfont icon-classifi"></i>
      <span>分类</span>
    </div>
    <div class="footItem" :class="{active:$route.path==='/things'}" @click="goPage('/things')">
      <i class="icon iconfont icon-shiwu"></i>
      <span>识物 </span>
    </div>
    <div class="footItem" :class="{active:$route.path==='/shopcar'}" @click="goPage('/shopcar')">
      <i class="icon iconfont icon-che"></i>
      <span>购物车 </span>
    </div>
    <div class="footItem" :class="{active:$route.path==='/personal'}" @click="goPage('/personal')">
      <i class="icon iconfont icon-ren"></i>
      <span>个人 </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
      }
    },
    methods: {
      goPage(page){
        this.$router.push(page)
      }
    },
  }
</script>

 <style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.footer
  top-border-1px($red)
  position fixed
  bottom 0
  z-index 888
  width 100%
  display flex
  text-align center
  background #fff
  .footItem
    width 25%
    display flex
    flex-direction column
    font-size rem(24)
    justify-content space-around
    i 
      font-size rem(40)
      margin-top rem(16)
    span
      margin rem(16)
    &.active
      color red
</style>

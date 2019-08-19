<template>
  <div class="shopcar">
    <header>
      <span>购物车</span>
      <a href="">领券</a>
    </header>
    <SelfShop></SelfShop>
    <div class="empty">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <p>去添加点儿什么吧</p>
      <button>登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SelfShop from '../../components/SelfShop/SelfShop'
  export default {
    components:{
      SelfShop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.shopcar
  width 100% 
  height 100%
  background-color #eee
  header 
    width 100%
    padding 0 rem(60) 0 rem(50)
    box-sizing border-box
    background #fff
    vercen(88)
    span 
      font-size rem(32) 
      float left
    a 
      font-size rem(26)
      color $red   
      float right
  .empty
    box-sizing border-box
    text-align center
    padding rem(400) rem(100) rem(0)
    button 
      display block
      width 100% 
      height rem(80)
      border-radius rem(8)
      font-size rem(32)
      color #fff
      background $red
    p 
      font-size rem(28)
      margin rem(0) 0 rem(50)
      color #333
</style>

<template>
  <div class="searchbox">
    <div class="searchcontent">
      <header class="title">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入商品名称"/>
        <button class="close" @click="$router.back()">取消</button>
      </header>
      <p class="hot">热门搜索</p>
      <nav class="hotlist">
        <span class="active">爆款 行李箱</span>
        <span>香氛牙膏 谈吐芳香</span>
        <span>二合一</span>
        <span>轻弹云朵拖鞋9.9元</span>
        <span>韩国造  睡眠喷雾</span>
        <span>热卖 扫拖二合一</span>
       </nav>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
  .searchbox 
    width 100% 
    height 100% 
    background-color #eee
    .searchcontent
      position fixed
      top 0
      background #fff
      width 100% 
      box-sizing border-box
      padding 0 rem(30)
      .title 
        position relative
        bottom-border-1px(#333)
        vercen(88)
        display flex
        align-items center
        input 
          font-size rem(30)
          margin-right rem(20)
          border-radius rem(8)
          width rem(600)
          height rem(60)
          pabox(0,30,0,50)
          background-color #eee
        .close
          font-size rem(30)
          width rem(75)
        .icon-sousuo
          position absolute
          top rem(3)
          left rem(15)
          font-size rem(30)
      .hot 
        font-size rem(35)
        color #333
        margin rem(30) 0
      .hotlist
        font-size rem(26)
        padding-bottom rem(30)
        span 
          padding rem(8) rem(15)
          border rem(2) solid #333
          border-radius rem(5)
          display inline-block
          margin rem(15) rem(18)
          &.active 
            border rem(2) solid $red
            color $red

</style>
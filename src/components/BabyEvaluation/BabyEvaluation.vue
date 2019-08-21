<template>
  <div class="babyEvaluation">
    <div class="product">
      <a href="https://m.you.163.com/item/detail?id=1487016&_stat_subject=21815" class="productimg">
        <img src="https://yanxuan.nosdn.127.net/9dffba8282d44f8287a5f01afa20e8de.jpg?imageView&quality=95&thumbnail=328y328" alt="">
      </a>
      <div class="productinfo">
        <span class="infotitle">
          小方盖系列 水性可撕指甲油
        </span>
        <div class="priceandcar">
          <span>$14.9</span>
          <i class="icon iconfont icon-gouwuche"></i>
        </div>
        <a href="https://m.you.163.com/item/detail?id=1487016&_stat_subject=21815" class="productsmallimg">
          <img src="https://yanxuan-item.nosdn.127.net/a3088753dca4a75fb2e6235f41b27ea3.png?imageView&quality=95&thumbnail=172y172" alt="">
        </a>
      </div>
    </div>
    <div class="evaluate">
      <img src="https://yanxuan.nosdn.127.net/86868f50e20b2041352e07fadc86f101.jpg?imageView&quality=95&thumbnail=112y112" alt="" class="avatar">
      <div class="content">
        <div class="top">
          <span class="nickname">苏*****</span>
          <span class="date">2019-07-11</span>
        </div>
        <div class="text">
          买过好几次啦，很温柔的颜色，关键是真的很好撕不会伤指甲。先用亮色甲油打底，然后连涂3层，再加上一层亮甲油，其实还挺持久的～
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.babyEvaluation
  margin-bottom rem(300)
  width 100% 
  box-sizing border-box
  padding rem(28) rem(35)
  .product
    // clear()
    overflow hidden
    .productimg
      width rem(320)
      height rem(320)
      display block
      float left
      img 
        width 100% 
        height 100%
    .productinfo
      float right
      font-size rem(32)
      .infotitle
        display inline-block
        width rem(300)
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        text-emphasis none
        line-height rem(50)
        font-weight 700
      .priceandcar
        span
          color $red
          font-weight 700
          margin-right rem(20)
      .productsmallimg
        display block
        margin-top rem(60)
  .evaluate
    margin-top rem(50)
    background #eee
    border-radius rem(10) 
    width 100% 
    height rem(230)
    .avatar
      float left
      margin rem(30) rem(15)
    .content
      width rem(500)
      float left 
      font-size rem(24)
      .top 
        margin-top rem(50)
        line-height rem(50)
        bottom-border-1px(#000)
      .text 
        width rem(500)
        height rem(70)
        margin-top rem(20)
        line-height rem(35)
        color #333
        overflow hidden
        text-overflow ellipsis
</style>

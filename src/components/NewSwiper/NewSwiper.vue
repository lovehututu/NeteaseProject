<template>
  <div class="newswiper">
    <p class="title">私人定制</p>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="shoplist">
              <li class="shopitem">
                <div class="shopitemimg">
                  <img src="http://yanxuan.nosdn.127.net/225c391499919578f94975cec9df4134.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <span>圈子顶立体神<i>￥299.99</i></span>
                
              </li>
              <li class="shopitem">
                <div class="shopitemimg">
                  <img src="http://yanxuan.nosdn.127.net/225c391499919578f94975cec9df4134.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <span>圈子顶立体神<i>￥299.99</i></span>
                
              </li>
              <li class="shopitem">
                <div class="shopitemimg">
                  <img src="http://yanxuan.nosdn.127.net/225c391499919578f94975cec9df4134.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <span>圈子顶立体神<i>￥299.99</i></span>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="shoplist">
              <li class="shopitem">
                <div class="shopitemimg">
                  <img src="https://yanxuan.nosdn.127.net/d7918c253f72ab2096a9fdffae134e8c.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <span>圈子顶立体神<i>￥299.99</i></span>
                
              </li>
              <li class="shopitem">
                <div class="shopitemimg">
                  <img src="http://yanxuan.nosdn.127.net/225c391499919578f94975cec9df4134.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <span>圈子顶立体神<i>￥299.99</i></span>
                
              </li>
              <li class="shopitem">
                <div class="shopitemimg">
                  <img src="http://yanxuan.nosdn.127.net/225c391499919578f94975cec9df4134.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <span>圈子顶立体神<i>￥299.99</i></span>
              </li>
            </ul>
          </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.newswiper
  box-sizing border-box
  padding rem(30)
  .title 
    font-size rem(38)
    margin-bottom rem(30)
  .swiper-container
    width 100%
    .swiper-wrapper
      .swiper-slide
        height rem(360)
        width 100%
        .shoplist
          display flex
          justify-content space-around
          .shopitem
            width 33%
            height rem(300)
            display flex
            flex-direction column
            align-items center
            .shopitemimg 
              background #eee
              width 80%
              height rem(200)
              text-align center
              margin-bottom rem(10)
              img 
                width 80%
                height 80%
                margin-top 10%
            span 
              font-size rem(28)
              padding 0 rem(36)
              box-sizing border-box
              line-height rem(40)
              float left
              i 
                font-size rem(24)
                font-style normal
                margin-left rem(10)
                color $red
    .swiper-pagination
      /deep/.swiper-pagination-bullet
        width: rem(20);
        height: rem(20);
        border-radius: 50%;
        background: $red;
        opacity: 0.2;
      /deep/.swiper-pagination-bullet.swiper-pagination-bullet-active
        opacity: 1;
        background: $red;
</style>

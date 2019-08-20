<template>
  <div class="categorybox">
    <div class="categoryimg">
      <img src="https://yanxuan.nosdn.127.net/37449fc9cea8f248ab9d06cbb048fe99.jpg?imageView&thumbnail=750x0&quality=75" alt="">
    </div>
    <div class="categorydetail">
      <ul class="categorylist">
        <li class="categoryitem">
          <img src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span>顺滑静音锻炼全身肌肉</span>
          <span>￥2799</span>
        </li>
        <li class="categoryitem">
          <img src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span>顺滑静音锻炼全身肌肉</span>
          <span>￥2799</span>
        </li>
        <li class="categoryitem">
          <img src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span>顺滑静音，智能APP ，锻炼全身肌肉</span>
          <span>￥2799</span>
        </li>
        <li class="categoryitem">
          <img src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span>顺滑静音，智能APP ，锻炼全身肌肉</span>
          <span>￥2799</span>
        </li>
        <li class="categoryitem">
          <img src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span>顺滑静音，智能APP ，锻炼全身肌肉</span>
          <span>￥2799</span>
        </li>
        <li class="categoryitem more">
          查看更多 >
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll = new BScroll(".categorydetail",{
            scrollX:true,
            click:true
          })
        }else{
          this.scroll.refresh()
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.categorybox
  width 100% 
  height 100%
  .categoryimg
    width 100%
    height rem(370)
    img 
      width 100%
      height 100%
  .categorydetail
    width 100%
    height rem(390)
    pabox(0,0,30,0)
    .categorylist
      position relative
      float left 
      display flex
      width auto
      padding rem(30) rem(250) rem(30) rem(30)
      box-sizing border-box
      .categoryitem
        margin 0 rem(15)
        display flex
        flex-direction column
        img 
          width rem(200)
          height rem(200)
          background #eee
          margin  0 0 rem(15) 0 
        span 
          font-size rem(24)
          line-height rem(35)
          &:nth-child(3)
            color $red
            font-weight 400
        &.more
          position absolute
          right rem(25) 
          top rem(30)
          width rem(200)
          height rem(200)
          background #eee
          margin  0 0 rem(15) 0   
          font-size rem(30)
          text-align center
          line-height rem(200)


</style>

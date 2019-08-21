<template>
  <div>
    <Header>
      <div slot="title" class="slottitle">
        <span class="find">发现</span>
        <span>甄选家</span>
      </div>
    </Header>
    <div class="navbar">
      <Scorll></Scorll>
    </div>

    <div class="swiper-container2">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/84862d10e593a9281ce0fb1ee3960b4a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/975f983b0314af8da367b781efa5afeb.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/cd3c09eb6f66ddf64647907ff17cfe45.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/cd3c09eb6f66ddf64647907ff17cfe45.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/cd3c09eb6f66ddf64647907ff17cfe45.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/cd3c09eb6f66ddf64647907ff17cfe45.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/a4ee2a554b5b553e2165ef9a66766986.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e5c1181a28981ca0b6087d2fb3e7d9d8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/4bc2018b2cf0e449520a14ae0f2d15e6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/4bc2018b2cf0e449520a14ae0f2d15e6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/4bc2018b2cf0e449520a14ae0f2d15e6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/4bc2018b2cf0e449520a14ae0f2d15e6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
      </div>
    </div>
    <BabyEvaluation></BabyEvaluation>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header'
import Scorll from '../../components/Scorll/Scorll'
import BabyEvaluation from '../../components/BabyEvaluation/BabyEvaluation'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.css'
  export default {
    components:{
      Header,
      Scorll,
      BabyEvaluation
    },
    data() {
      return {
      }
    },
    mounted() {
      var thumbsSwiper = new Swiper('.swiper-container',{
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesVisibility: true,/*避免出现bug*/
      })
       new Swiper('.swiper-container2',{
        autoplay:true,
        delay: 1000,
        effect : 'fade',
        spaceBetween: 10,
        thumbs: {
          swiper: thumbsSwiper,
        }
      })
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll = new BScroll(".navbar",{
            scrollX:true,
            click:true,
            bounce: {
              top: false,
              bottom: false,
              left: false,
              right: false
            }
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
.slottitle
  display inline-block
  width rem(320)
  span 
    padding 0 rem(50)
    font-size rem(30)
  .find
    color $red
    font-size rem(40)
    font-weight 700
.navbar
  width 100% 
  height rem(70)
.swiper-container
  width 100%
  .swiper-wrapper
    width 100%
    .swiper-slide
      width 33% !important
      img
        width 100%
</style>

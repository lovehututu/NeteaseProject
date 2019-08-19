<template>
<div class="indexContent">
  <div id="header">
    <header>
      <a href="">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </a>
      <div class="search" @click="$router.push('/search')">
        搜索商品
        <i class="icon iconfont icon-sousuo"></i>
      </div>
      <button @click="$router.push('/personal')">登录</button>
    </header>
    <div class="nav">
      <ul class="catecoryList">
        <li class="catecoryItem active">推荐</li>
        <li class="catecoryItem">居家生活</li>
        <li class="catecoryItem">服饰鞋包</li>
        <li class="catecoryItem">美食酒水</li>
        <li class="catecoryItem">推荐</li>
        <li class="catecoryItem">居家生活</li>
        <li class="catecoryItem">服饰鞋包</li>
        <li class="catecoryItem">美食酒水</li>
      </ul>
      <div class="more" @click="more" >
        <i class="icon iconfont icon-xiala" :class="{showrotate}"></i>
      </div>
      <div class="moredetail" v-show="showdetail">
        <div class="title">
          全部频道
        </div>
        <ul class="detail">
          <li class="detailitem">
            <span class="active">推荐</span>
          </li>
          <li class="detailitem">
            <span>居家生活</span>
          </li>
          <li class="detailitem">
            <span>推荐</span>
          </li>
          <li class="detailitem">
            <span>推荐啊</span>
          </li>
          <li class="detailitem">
            <span>推荐</span>
          </li>
          <li class="detailitem">
            <span>推荐</span>
          </li>
        </ul>
  </div>
    </div>
  </div>

  <div class="mark" v-show="showdetail">

  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f8ae8b2c307589d2e0daedd0a16bf487.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt="1"/>
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt="2"/>
        </div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>


  <SelfShop></SelfShop>


  <div class="shopListContent">
    <ul class="shopList">
      <li class="shopItem">
        <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
        <span>新品</span>
      </li>
      <li class="shopItem">
        <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
        <span>新品</span>
      </li>
      <li class="shopItem">
        <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
        <span>新品</span>
      </li>
      <li class="shopItem">
        <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
        <span>新品</span>
      </li>
      <li class="shopItem">
        <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
        <span>新品</span>
      </li>
      <li class="shopItem">
        <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
        <span>新品</span>
      </li>
      <li class="shopItem">
        <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
        <span>新品</span>
      </li>
    </ul>
  </div>
  <div class="line"></div>
  <div class="newPerson">
    <div class="giftTitle">
      <span>新人专享</span>
    </div>
    <div class="giftContent">
      <a class="giftMoney">
        <p>新人专享礼包</p>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </a>
      <div class="giftRight">
        <a class="giftSale">
          <p>福利社</p>
          <img src="https://yanxuan-item.nosdn.127.net/ed0e056dc567ea8aa66c9396c9e607e6.png?imageView&thumbnail=200x200&quality=75" alt="">
          <div class="price">
            <span>￥44.2</span><br/>
            <span>￥59</span>
          </div>
        </a>
        <a class="giftGroup">
          <p>新人拼团</p>
          <img src="https://yanxuan-item.nosdn.127.net/ed0e056dc567ea8aa66c9396c9e607e6.png?imageView&thumbnail=200x200&quality=75" alt=""/>
          <div class="price">
            <span>￥44.2</span><br/>
            <span>￥59</span>
          </div>
        </a>   
      </div> 
    </div>
  </div> 
  <div class="line"></div>
  <NewSwiper></NewSwiper>
  <CategoryItem></CategoryItem>
</div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.css'
import NewSwiper from '../../components/NewSwiper/NewSwiper'
import SelfShop from '../../components/SelfShop/SelfShop'
import CategoryItem from '../../components/CategoryItem/CategoryItem'
  export default {
    data() {
      return {
        showdetail:false,
        showrotate:false
      }
    },
    components:{
      SelfShop,
      NewSwiper,
      CategoryItem
    },
    methods: {
      more(){
        this.showdetail = ! this.showdetail
        this.showrotate = ! this.showrotate
      }
    },
    mounted() {
      new Swiper ('.swiper-container', {
        loop: true, // 无缝选项
        // autoplay :true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      });           

      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll = new BScroll(".nav",{
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
.indexContent
  overflow hidden
  padding rem(170) 0 rem(112) 0
  #header 
    position fixed
    z-index 998
    top 0
    left 0
    width 100%
    background #fff
    header 
      display flex
      width 100%
      padding rem(20) 0
      justify-content space-around
      position relative
      a 
        display block
        margin rem(8) rem(18)
        width rem(140)
        height rem(40)
        font-size rem(80)
        color red
        img
          display block
          width 100%
          height 100%
      .search  
        position relative
        font-size rem(32)
        width rem(442)
        background-color #eee
        border-radius rem(14)
        height rem(56)
        line-height rem(56)
        text-align center
        i 
          position absolute
          top 0
          left rem(100)
          width rem(74)
          height rem(40)
          font-size rem(34)
      button
        width rem(74)
        height rem(40)
        font-size rem(28)
        border 1px solid $red
        border-radius rem(6)
        background transparent
        outline 0
        color $red
        margin rem(8) rem(22) 0 rem(14)
    .nav
      position relative
      overflow:hidden
      width 100%
      .catecoryList
        float left
        display flex
        padding-right 20%
        background #fff
        flex-shrink 0
        flex-wrap nowrap
        .catecoryItem
          position relative
          margin rem(20) rem(26)
          font-size rem(30)
          justify-content space-around
          white-space nowrap
          text-align center
          &.active
            color $red
            &::after
              position absolute
              bottom rem(-15)
              left 50% - rem(20)
              content ''
              width rem(40)
              height rem(6)
              background $red
      .more
        float right
        position absolute
        width 20%
        background #fff
        right 0
        height rem(72)
        z-index 999
        text-align  center
        line-height rem(72)
        i
          font-size rem(40)
          float left 
          margin-left 50% - rem(20)
          transition .5s
        .showrotate
          transform rotate(180deg)
  .moredetail
    position fixed
    top rem(96)
    left 0
    width 100% 
    z-index 998
    background #fff
    box-sizing border-box
    padding 0 rem(15)
    .title
      vercen(80)
      font-size rem(30)
    .detail
      display flex
      flex-wrap wrap
      .detailitem
        width 25%
        flex-wrap wrap
        margin rem(20) 0
        padding 0 rem(20)
        box-sizing border-box
        span 
          font-size rem(28)
          border rem(1) solid #333
          border-radius rem(10)
          box-sizing border-box
          display block
          text-align center
          width rem(150)
          vercen(60)
          font-size rem(26)
          color #333
          &.active
            border rem(2) solid $red
            color $red
  .mark
    position fixed
    top 0
    z-index 888
    width 100%
    height 100%
    background #333
    opacity 0.5
  .swiper-container 
    width: 100%; 
    .swiper-wrapper
      width 100%
      .swiper-slide
        width 100%
        img 
          width 100%
    .swiper-pagination
      /deep/.swiper-pagination-bullet
        width: rem(80);
        height: rem(5);
        border-radius: rem(10);
        background: $red;
        opacity: 0.2;
      /deep/.swiper-pagination-bullet.swiper-pagination-bullet-active
        opacity: 1;
        background: $red;
  .shopListContent
    width 100%
    .shopList
      display flex
      flex-wrap wrap
      .shopItem
        width 20%
        display flex
        flex-direction column
        align-items center
        img 
          margin rem(20) 0
          width rem(110)
          height rem(110)
        span
          font-size rem(32)
  .line
    width 100%
    margin-top rem(20)
    height rem(20)
    background #eee     
  .newPerson
    width 100%
    overflow hidden
    .giftTitle
      font-size rem(32)
      color #333
      line-height rem(80)
      text-align center
      position relative
      &::after
        content ''
        width rem(80)
        height rem(4)
        background #333
        position absolute
        top rem(40)
        left rem(200)
      &::before
        content ''
        width rem(80)
        height rem(4)
        background #333
        position absolute
        top rem(40) 
        left rem(460)
    .giftContent
      width 100%
      box-sizing border-box
      padding 0 rem(50) 
      clear()
      .giftMoney
        float left
        width 50%
        height rem(430)
        background #F9E9CF
        text-align center
        p 
          margin rem(50) 0 rem(60) rem(-80)
          font-size rem(32)
        img 
          width rem(260)
          height rem(260)
      .giftRight
        float right
        width 46%
        height rem(430)
        .giftSale
          overflow hidden
          background #eee
          height rem(210)
          display block
          position relative
          p 
            margin rem(20) 0 rem(20) rem(20) 
            font-size rem(32)
          img 
            width rem(200)
            height rem(200)
            position relative
            top rem(-50)
            right rem(-100)
          .price
            position absolute
            right rem(40)
            top rem(20)
            width rem(70)
            height rem(70)
            background yellow 
            border-radius 50%
            text-align center
            font-size rem(22)
            line-height rem(34)
        .giftGroup
          background #333
          height rem(200)
          margin-top rem(20)
          display block
          overflow hidden
          position relative
          img 
            width rem(200)
            height rem(200)
            position relative
            top rem(-50)
            right rem(-100)
          p 
            margin rem(20) 0 rem(20) rem(20) 
            font-size rem(32)
          .price
            position absolute
            right rem(40)
            top rem(20)
            width rem(70)
            height rem(70)
            background yellow 
            border-radius 50%
            text-align center
            font-size rem(22)
            line-height rem(34)

</style>

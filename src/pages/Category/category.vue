<template>
  <div class="categoryBox">
    <header>
      <div class="search"  @click="$router.push('/search')">
        搜索商品
        <i class="icon iconfont icon-sousuo"></i>
      </div>
    </header>
    <div class="categoryContainer">
      <div class="categorys">
        <ul class="categoryList">
          <li class="categoryItem" :class="{active:false}" v-for="(item,index) in categorys" :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="categoryInfo">
        <ul class="categoryInfoList">
          <img class="listImg" src="https://yanxuan.nosdn.127.net/7a193132795203fe3f9e18bd3404aa7c.jpg?imageView&thumbnail=0x196" alt="">
          <li class="categoryInfoItems">
            <span class="categoryTitle">
                个护电器
            </span> 
            <ul class="categoryInfoItem">
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/924d81010d19d3eb8dfbc7ca9cb7b1a3.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
            </ul>
            <span class="categoryTitle">
                个护电器
            </span> 
            <ul class="categoryInfoItem">
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/924d81010d19d3eb8dfbc7ca9cb7b1a3.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
            </ul>
            <ul class="categoryInfoItem">
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/924d81010d19d3eb8dfbc7ca9cb7b1a3.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
            </ul>
            <ul class="categoryInfoItem">
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/924d81010d19d3eb8dfbc7ca9cb7b1a3.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
             <li class="categoryContent">
                <img src="https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>口腔护理</span>
              </li> 
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        // categorys:[],
      }
    },
    computed:{
      ...mapState({categorys:(state)=>state.cate.categorys})
    },
    mounted() {
      this.$store.dispatch('getCategorys')
      new BScroll(".categoryInfo",{
          scrollY:true
      })
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll = new BScroll(".categorys",{
            click:true
          })
        }else{
          this.scroll.refresh()
        }
      })
    },
    // watch: {
    //   categorys(){
    //     this.categorys = this.$store.state.cate.categorys.data
    //   }
    // },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.categoryBox
  height 100%
  header 
    bottom-border-1px(#333)
    width 100%
    padding rem(20) 0
    position fixed
    top 0 
    left 0
    z-index 999
    background #fff
    .search  
      position relative
      font-size rem(32)
      width 90%
      margin-left 5%
      background-color #eee
      border-radius rem(14)
      height rem(56)
      line-height rem(56)
      text-align center
      i 
        position absolute
        top 0
        left rem(200)
        width rem(74)
        height rem(40)
        font-size rem(34)
  .categoryContainer
    width 100%
    height 100%
    overflow hidden
    padding rem(96) 0 rem(112) 0
    // clear()
    .categorys
      float left
      height 100%
      width rem(180)
      .categoryList
        box-sizing border-box
        padding rem(20) rem(0) rem(200)
        font-size rem(32)
        .categoryItem
          margin rem(50) 0
          padding rem(8) 0 rem(8) rem(25)
          &.active 
            color $red
            border-left rem(8) solid $red
    .categoryInfo
      float right
      width rem(550)
      box-sizing border-box
      padding 0 rem(50) rem(112) 0
      height 100%
      overflow hidden
      .categoryInfoList
        padding rem(50) 0 rem(0) 0
        .listImg
          width 100% 
          height rem(200)
          margin-bottom rem(20)
        .categoryInfoItems
          padding 0 rem(0) rem(200) 0
          .categoryTitle
            width 100%
            display block
            bottom-border-1px(#333)
            font-size rem(30)
            font-weight 700
            line-height rem(60)
          .categoryInfoItem
            width 100% 
            display flex
            flex-wrap wrap
            align-items center
            .categoryContent
              width 33.33%
              font-size rem(26)
              padding rem(20) rem(15)
              box-sizing border-box
              text-align center
              img 
                width rem(144)
                height rem(144)


</style>

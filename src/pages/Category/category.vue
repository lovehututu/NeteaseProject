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
          <li class="categoryItem" :class="{active:currentindex===index}" v-for="(item,index) in categorys.categoryL1List" :key="index" @click="todetail(index)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="categoryInfo">
        <img :src="categorys.currentCategory?categorys.currentCategory.bannerList[0].picUrl:''" alt="" class="bannerimg">
        <router-view :categorys=categorys :index=currentindex></router-view>
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
        currentindex:0
      }
    },
    methods: {
      todetail(index){
        this.currentindex = index
        this.$router.replace('/category/categorydetail/'+index)
      }
    },
    computed:{
      ...mapState({categorys:(state)=>state.cate.categorys}),
    },
    mounted() {
      this.$store.dispatch('getCategorys',()=>{
        this.$nextTick(()=>{
          new BScroll(".categorys",{
              scrollY:true,
              click:true
          })
          new BScroll(".categoryInfo",{
              scrollY:true,
              click:true
          })
        })
      })

      // new BScroll(".categoryInfo",{
      //     scrollY:true
      // })
      // this.$nextTick(()=>{
      //   if(!this.scroll){
      //     this.scroll = new BScroll(".categorys",{
      //       click:true
      //     })
      //   }else{
      //     this.scroll.refresh()
      //   }
      // })
    },
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
    box-sizing border-box
    width 100%
    height 100%
    overflow hidden
    padding rem(96) 0 rem(112) 0
    .categorys
      float left
      height 100%
      width rem(180)
      .categoryList
        box-sizing border-box
        padding rem(20) rem(0) rem(200)
        font-size rem(32)
        .categoryItem
          text-align center
          margin rem(50) 0
          padding rem(8) 0
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
      .bannerimg
        margin-top rem(50)
        width 100%
        height rem(200)
</style>

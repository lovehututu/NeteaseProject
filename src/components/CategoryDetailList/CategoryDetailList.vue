<template>
  <div>
    <ul class="categoryInfoItem">
      <li class="categoryContent" v-for="(item,index) in categoryGroup" :key='index'>
        <img :src="item.wapBannerUrl" alt="">
        <span>{{item.name}}</span>
      </li> 
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      categoryGroup:Array,
      index:Number
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
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

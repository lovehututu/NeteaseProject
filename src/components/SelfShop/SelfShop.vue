<template>
  <div>
    <ul class="selfShop">
      <li class="selfShopItem">
        <i class="icon iconfont icon-wangyi"></i>
        <span>网易自营品牌</span>
      </li>
      <li class="selfShopItem">
        <i class="icon iconfont icon-zhiliangcopy"></i>
        <span>网易自营品牌</span>
      </li>
      <li class="selfShopItem">
        <i class="icon iconfont icon-tuihuo"></i>
        <span>网易自营品牌</span>
      </li>
    </ul> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.selfShop
    width 100%
    display flex
    text-align center
    padding 0 rem(20)
    box-sizing border-box
    .selfShopItem
      width 33%
      line-height rem(32)
      i 
        color $red
        margin-right rem(10)
        font-size rem(32)
      span 
        line-height rem(32)
        font-size rem(24)
</style>

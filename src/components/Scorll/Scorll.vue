<template>
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
</template>

<script type="text/ecmascript-6">

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
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
</style>

<template>
  <div>
    <header>
        <span>网易严选</span>
        <i class="iconfont icon-ren" @click="$router.push('/index')"></i>
        <i class="iconfont icon-che" @click="$router.push('/shopcar')"></i>
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
  header 
    width 100%
    height rem(88)
    padding 0 rem(30) 0 rem(30)
    box-sizing border-box
    background #fff
    font-size rem(32)
    text-align center
    line-height rem(88)
    i 
      font-size rem(50)
      &.icon-ren
        float left
      &.icon-sousuo
        float right
        margin-right rem(30)
      &.icon-che
        float right
    span 
      margin-right rem(-60)
      font-size rem(40)
      font-weight 400
</style>

<template>
  <div>
    <div class="list" v-for="(item,index) in categorys.categoryGroupList" :key="index">
      <h2 class="catecotytitle">{{item.name}}</h2>
      <CategoryDetailList :categoryGroup=item.categoryList :index='index'></CategoryDetailList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CategoryDetailList from '../../components/CategoryDetailList/CategoryDetailList'
  export default {
    props:{
      categorys:Array,
      index:Number
    },
    components:{
      CategoryDetailList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.catecotytitle
  font-size rem(30)
  padding-top rem(10)
  width 100%
  line-height rem(80)
  bottom-border-1px(#333)
  font-weight 700
  letter-spacing rem(3)
</style>

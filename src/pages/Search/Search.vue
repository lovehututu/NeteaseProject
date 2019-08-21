<template>
  <div class="searchbox">
    <div class="searchcontent">
      <header class="title">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" :placeholder="keywordPrefixGuide.defaultKeyword?keywordPrefixGuide.defaultKeyword.keyword:''" v-model="searchwords" />
        <button class="close" @click="$router.back()">取消</button>
      </header>
      <p class="hot" v-if="!searchwords">热门搜索</p>
      <nav class="hotlist" v-if="!searchwords">
        <a :class="{active:item.highlight}" v-for="(item,index) in keywordPrefixGuide.hotKeywordVOList" :key="index" :href="item.schemeUrl">{{item.keyword}}</a>
      </nav>
      <ul class="hotlistguide" v-for="(item,index) in keywordPrefix.data" :key="index">
        <li class="hotlistguideitem">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
import { clearTimeout } from 'timers';
  export default {
    data() {
      return {
        searchwords:''
      }
    },
    mounted() {
      this.$store.dispatch('getsearchkeywordsguide')
    },
    computed: {
      ...mapState({keywordPrefix:(state)=>state.search.keywordPrefix,
      keywordPrefixGuide:(state)=>state.search.keywordPrefixGuide,
      }),
    },
    methods: {
      // search(){ 
      //   this.$store.dispatch('getsearchkeywords',this.searchwords?this.searchwords:this.placeholder)
      // }
    },
    watch: {
      searchwords(){
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.$store.dispatch('getsearchkeywords',this.searchwords?this.searchwords:this.placeholder)
        }, 2000);
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
  .searchbox 
    width 100% 
    height 100% 
    background-color #eee
    .searchcontent
      position fixed
      top 0
      background #fff
      width 100% 
      box-sizing border-box
      padding 0 rem(30)
      .title 
        position relative
        bottom-border-1px(#333)
        vercen(88)
        display flex
        align-items center
        input 
          font-size rem(30)
          margin-right rem(20)
          border-radius rem(8)
          width rem(600)
          height rem(60)
          pabox(0,30,0,50)
          background-color #eee
        .close
          font-size rem(30)
          width rem(75)
        .icon-sousuo
          position absolute
          top rem(3)
          left rem(15)
          font-size rem(30)
      .hot 
        font-size rem(35)
        color #333
        margin rem(30) 0
      .hotlist
        font-size rem(26)
        padding-bottom rem(30)
        a 
          padding rem(8) rem(15)
          border rem(2) solid #333
          border-radius rem(5)
          display inline-block
          margin rem(15) rem(18)
          &.active 
            border rem(2) solid $red
            color $red
      .hotlistguide
        width 100% 
        .hotlistguideitem
          height rem(100)
          line-height rem(100)
          bottom-border-1px(#333)
          font-size rem(30)
</style>
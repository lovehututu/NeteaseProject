<template>
  <div :class="{bgc}" class="personal">
    <Header></Header>
    <div class="loginShow" v-if="login">
      <div class="loginWay">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        <div class="way iphone" @click="toLoginWay(true)">
          <i class="iconfont icon-shouji"></i>
          手机号快捷登录
        </div>
        <div class="way email"  @click="toLoginWay(false)">
          <i class="iconfont icon-youxiang"></i>
          邮箱账号登录
        </div>
      </div>
      <div class="otherWay">
        <span>
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </span>
        <span class="middle">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </span>
        <span>
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </span>
      </div>
    </div>
    <div class="loginIpone" v-if="loginIphone">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <div class="userInfo">
        <form action="" method="post">
          <input type="text" placeholder="请输入手机号" class="iphone">
          <input type="password" placeholder="短信验证码" class="msg">
          <div class="loginPwd">
            <span class="question">遇到问题?</span>
            <span class="code">使用短信验证码登录</span>
          </div>
          <button class="login">登录</button>
          <label class="choose">
            <input type="checkbox"/>
            <span></span>
            我同意《服务条款》和《网易隐私政策》
          </label>
          <p class="otherLogin" @click="otherLogin">其他登录方式  ></p>
        </form>
      </div>
    </div>
    <div class="loginEmail" v-if="loginEmail">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <div class="userInfo">
        <form action="" method="post">
          <input type="text" placeholder="邮箱账号" class="iphone">
          <input type="password" placeholder="密码" class="msg">
          <div class="loginPwd">
            <span class="question">注册账号</span>
            <span class="code">忘记密码</span>
          </div>
          <button class="login">登录</button>
          <p class="otherLogin" @click="otherLogin">其他登录方式  ></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header'
  export default {
    data() {
      return {
        isShowFooter:false,
        login:true, //登录方式页
        loginIphone : false, //手机登录
        loginEmail:false,  //邮箱登录
        bgc:true  //背景色 
      }
    },
    components:{
      Header
    },
    methods: {
      toLoginWay(bool){
        this.login = !this.login
        this.bgc = false
        if(bool){
          this.loginIphone = true,
          this.loginEmail = false
        }else{
          this.loginEmail = true,
          this.loginIphone = false
        }
      },
      otherLogin (){
        this.login = true
        this.loginEmail = false,
        this.loginIphone = false
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
.personal
  width 100% 
  height 100%
  &.bgc
    background #eee
  .loginWay
    width 100% 
    margin-bottom rem(380)
    img 
      display block
      margin rem(160) 50% rem(240) rem(240)
      width rem(260)
      height rem(90)
    .way
      width rem(650)
      height rem(80)
      font-size rem(32)
      border-radius rem(5)
      position relative
      top 0
      left 5%
      line-height rem(80)
      text-align  center
      &.iphone
        background $red
        color #ffffff
        margin-bottom rem(30)
      &.email
        border rem(2) solid $red
        color $red     
      i 
        font-size rem(38)   
  .otherWay
    font-size rem(34)
    color #333
    box-sizing border-box
    padding 0 rem(100)
    display flex
    justify-content space-around
    span 
      display flex
      height rem(40)
      line-height rem(40)
      vertical-align middle
      i 
        font-size rem(44)
        margin 0 rem(10)
        display inline-block
      &.middle
        border-right rem(2) solid #333
        border-left rem(2) solid #333
        padding 0 rem(40) 0 rem(32)
      span
        display inline-block
        height 100%
        font-size rem(32)
  .loginIpone
    img
      width rem(200)
      height rem(60)
      margin rem(100) 0 rem(120) rem(260)
    .userInfo
      box-sizing border-box
      padding 0 rem(50)
      .iphone
        width 100%
        height rem(80)
        border-bottom rem(2) solid #ccc
        font-size rem(30)
      .msg
        width 100%
        height rem(80)
        border-bottom rem(2) solid #ccc
        font-size rem(30)
      .loginPwd
        width 100% 
        height rem(120)
        line-height rem(120)
        font-size rem(30)
        position relative
        clear()
        .question
          float left
        .code
          float right
        &::before
          content '获取验证码'
          position absolute
          height rem(50)
          line-height rem(50)
          top rem(-70)
          right rem(10)
          border rem(2) solid $red
          border-radius rem(10)
          padding rem(0) rem(8)
      .login
        width 100%
        height rem(90)
        background $red
        color #fff
        text-align center
        border-radius rem(6)
        font-size rem(32)
      .choose 
        font-size rem(30)
        line-height rem(26)
        input
          width rem(30)
          height rem(30)
          vertical-align center
      .otherLogin
        text-align center
        font-size rem(34) 
        margin rem(80) 0 0 0
  .loginEmail
    img
      width rem(200)
      height rem(60)
      margin rem(100) 0 rem(120) rem(260)
    .userInfo
      box-sizing border-box
      padding 0 rem(50)
      .iphone
        width 100%
        height rem(80)
        border-bottom rem(2) solid #ccc
        font-size rem(30)
      .msg
        width 100%
        height rem(80)
        border-bottom rem(2) solid #ccc
        font-size rem(30)
      .loginPwd
        width 100% 
        height rem(120)
        line-height rem(120)
        font-size rem(30)
        clear()
        .question
          float left
        .code
          float right
      .login
        width 100%
        height rem(90)
        background $red
        color #fff
        text-align center
        border-radius rem(6)
        font-size rem(32)
      .otherLogin
        text-align center
        font-size rem(34) 
        margin rem(80) 0 0 0
</style>

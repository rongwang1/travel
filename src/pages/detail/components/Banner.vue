<template>
<div>
<div class='banner' @click="handleBannerClick">
    <img  class='banner-img' :src="bannerImg" alt="展示区">
    <div class='banner-info'>
       <div class='banner-title'>{{this.sightName}}</div>
       <div class='banner-num'>{{this.gallaryImgs.length}}<span class='iconfont  banner-icon'>&#xe75d;</span></div>
    </div>
</div>
<fade-animation>
    <common-gallary :imgs='gallaryImgs' v-if="showGallary" @close='handleGallaryClose'></common-gallary>
</fade-animation>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name:'Banner',
  data () {
    return {
      showGallary:false
    }
  },
  props:{
     sightName:String,
     bannerImg:String,
     gallaryImgs:Array
  },
  components:{
      CommonGallary,
      FadeAnimation
  }, 
  methods:{
    handleBannerClick(){
      this.showGallary=true
    },
    handleGallaryClose(){
      this.showGallary=false
    }
  }

}
</script>
<style  lang='stylus' scoped>
 .banner
    position relative
    overflow hidden
    height 0 
    padding-bottom 60%
    .banner-img
        height 5rem
        width 100%
    .banner-info
       display flex
       position absolute
       left 0
       right 0
       bottom 0
       line-height .6rem
       color #ffffff
       background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0, .8))
       .banner-title
          flex 1
          font-size .28rem
          padding 0 .2rem
        .banner-num
          height .32rem
          line-height .32rem
          margin-top .14rem
          padding 0 .4rem
          border-radius .2rem
          background rgba(0,0,0, .8)
          font-size .26rem
        .banner-icon
          font-size .32rem
          line-height .32rem
          padding-left .1rem
</style>
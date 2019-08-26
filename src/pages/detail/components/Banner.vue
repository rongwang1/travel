<template>
<div>
<div class='banner' @click="handleBannerClick">
    <img  class='banner-img' src="https://img1.qunarzz.com/vs_ceph_vs_tts/ea67be28-0c70-4cfb-9ed3-e7aefb6e1644.jpg_r_1280x840x90_874911fd.jpg" alt="展示区">
    <div class='banner-info'>
       <div class='banner-title'>龙脊漓江世外桃源象鼻山</div>
       <div class='banner-num'>12<span class='iconfont  banner-icon'>&#xe75d;</span></div>
    </div>
</div>
<common-gallary :imgs='imgs' v-show="showGallary" @close='handleGallaryClose'></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name:'Banner',
  data () {
    return {
      showGallary:false,
      imgs:[
          'https://img1.qunarzz.com/vs_ceph_vs_tts/ea67be28-0c70-4cfb-9ed3-e7aefb6e1644.jpg_r_1280x840x90_874911fd.jpg',
          'https://img1.qunarzz.com/vs_ceph_vs_tts/45ea36a7-9344-4e5a-bd78-0309adf58d5d.jpg_r_1280x840x90_19be3eb3.jpg'
      ]
    }
  },
  components:{
      CommonGallary
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
<template>
<div class="wrapper">
 <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList"  :key="item.id"><img  class="swiper-img" :src="item.imgUrl" alt="#"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default{
     name:'HomeSwiper',
     data (){
         return{
             swiperOption:{
                 pagination:'.swiper-pagination',
                 loop:true
             },
             swiperList:[
                 {id:'01',imgUrl:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/23112/33/6431/99212/5c540d7fEf8000223/fddb6b047c02ba3d.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
                 {id:'02',imgUrl:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/45822/37/1258/360866/5cefb71fE95298b80/052ef4b9d125778a.jpg!cr_1125x549_0_72!q70.jpg.dpg'}
             ]
         }
     }
     
}
</script>
<style  lang="stylus" scoped>
//      ">>>"的意思是穿透：当引用了第三方组件，若需要在组件中局部修改第三方组件的样式
//      但又不想去除scoped属性而造成组件之间的样式污染。此时只能通过特殊的方式来穿透scoped
.wrapper>>>.swiper-pagination-bullet
   background-color #fff
.wrapper
    // 设置该处的样式的作用是防止网速过慢导致加载页面抖动
   overflow hidden
   width 100%
   height 0
   padding-bottom  48.8%
  .swiper-img
      width 100%

</style>
<template>
<div class="wrapper">
 <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list"  :key="item.id"><img  class="swiper-img" :src="item.imgUrl" alt="#"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default{
     name:'HomeSwiper',
     props:{
        list:Array
     },
     data (){
         return{
             swiperOption:{
                 pagination:'.swiper-pagination',
                 loop:true
             }
        }
     },
     computed:{
             showSwiper(){
                return this.list.length
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
   padding-bottom 32%
  .swiper-img
      width 100%

</style>
<template>
    <div class="container" @click="handleGallaryClick">
       <div class='wrapper'>
            <swiper  :options="swiperOptions">
            <swiper-slide v-for="(item,index)  in  imgs"  :key="index">
                <img class="gallary-img" :src="item" alt="#">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name:'CommonGallary',
    props:{
       imgs:{
           type:Array,
           default(){
               return []
           }
       }
    },
    data (){
        return {
            swiperOptions: {
                  pagination:'.swiper-pagination',
                  paginationType:'fraction',
                  observeParents:true,  //修改swiper的父元素时自动初始化swiper
                  observer:true       //修改swiper自己或者子元素时，自动初始化swiper
            }
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
    }
}
</script>  
<style lang="stylus" scoped>
.container  >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0 
    right 0
    bottom 0 
    top 0 
    background-color #000  
    .wrapper
       width 100%
       height 0
       padding-bottom 80%
       .gallary-img
          
          width 100%
       .swiper-pagination
          color #ffffff
          bottom -1rem
</style>
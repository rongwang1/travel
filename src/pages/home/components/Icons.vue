<template>
    <div  class='icons'>
         <swiper :options="swiperOption">
           <swiper-slide v-for='(page,index) of pages' :key='index'>
               <div class='icon' v-for='item of page' :key='item.id' >
                   <div class='icon-img'>
                   <img  class='icon-img-content' :src="item.imgUrl" alt="图标">
                  </div>
                <p class='icon-desc'>{{item.desc}}</p>
                </div> 
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default{
   name:'HomeIcons',
   props:{
        list:Array
   },
   data () {
       return{
<<<<<<< HEAD
           swiperOption :{
              swiperOption:false
=======
           swiperOption:{
               swiperOption:false
>>>>>>> city-router
           }
       }
   },
      //计算属性，计算该条数据应该在哪一个页面上
   computed:{
       pages () {
           const pages=[];
           this.list.forEach((item,index)=> {
               const page=Math.floor(index/8)
               if(!pages[page]){
                    pages[page]=[]
               }
                pages[page].push(item) 
           })
           return  pages
       }
   } 
}  
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons
    margin-top .1rem
    height 0
    overflow hidden
    padding-bottom 50%
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      box-sizing border-box
      .icon-img
           text-align center
           position absolute
           top 0
           left 0 
           right 0
           bottom .44rem
           padding .1rem
           .icon-img-content
               display block
               margin 0 auto
               height 100%            
      .icon-desc
           text-align center
           position absolute
           bottom 0
           left 0
           right 0
           height .44rem
           line-height  .44rem
           color $darkTextColor
           ellipsis()   //文字压缩  调用mixins.styl 文件中的样式

</style>
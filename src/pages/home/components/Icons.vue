<template>
    <div  class='icons'>
         <swiper>
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
   data(){
       return{
           iconList:[
               {id:'01',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',desc:'景点门票服务项目'},
               {id:'02',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',desc:'酒店'},
               {id:'03',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',desc:'机票'},
               {id:'04',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',desc:'度假'},  
               {id:'05',imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',desc:'北京世园会'}, 
               {id:'06',imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png',desc:'度假'},
               {id:'07',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',desc:'水上乐园'}, 
               {id:'08',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',desc:'北京度假'}, 
               {id:'09',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',desc:'奥林匹克塔'}, 
               {id:'10',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',desc:'古北冰镇'}, 
           ]
       }
   },
      //计算属性，计算该条数据应该在哪一个页面上
   computed:{
       pages () {
           const pages=[];
           this.iconList.forEach((item,index)=> {
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
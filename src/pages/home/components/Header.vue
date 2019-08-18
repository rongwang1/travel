<template>
<div class='header'>
    <div class='header-left'>
        <div class='iconfont  back-icon'>&#xe710;</div>
    </div>
    <div class='header-input'>
        <span class='iconfont'>&#xe60b;</span>    
        输入城市/景点/游玩主题</div>
    <div class='header-right'>
        {{this.city}} <span class='iconfont arrow-icon'>&#xe672;</span>  
    </div>
</div>
</template>
<script>
export default {
    name:'HomeHeader',
    props:{
        city:String 
    }
}
</script>
<style  lang='stylus'  scoped>   /* scoped实现了样式的模块化，只对当前的组件起效，防止样式污染 */
@import '~styles/varibles.styl'
.header
   line-height .86rem
   height 0.86rem
   background-color:$bgColor
   display:flex
   color:#fff
   font-size:16px
   .header-left
       width .64rem
       float:left
       .back-icon
           text-align center
           font-size .6rem
   .header-input
        flex:1
        background-color #fff
        height .64rem
        line-height .64rem
        padding-left .2rem
        margin-top .12rem
        margin-left .2rem
        border-radius .1rem
        color #cccccc
   .header-right
       width:1.24rem
       float:right
       text-align center
       font-size .3rem
       .arrow-icon
           font-size .4rem
           margin-left -.05rem
           text-align center
            
</style>
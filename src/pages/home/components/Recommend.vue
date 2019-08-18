<template>
<div>
<div class='title'>热销推荐</div>
<ul>
    <li class="item border-bottom"  v-for="item of recommendList" :key="item.id">
        <img  class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class='item-button'>查看详情</button>
        </div>
    </li>
</ul>
</div>  
</template>
<script>
export default {
    name:'HomeRecommend',
    data (){
       return {
           recommendList:[{
               id:'001',
               imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/4215243616425303cff934857fa13897.jpg',
               title:'从你的世界路过从你的世界路过从你的世界路过从你的世界路过',
               desc:'圆梦稻城亚丁圆梦稻城亚丁圆梦稻城亚丁圆梦稻城亚丁圆梦稻城亚丁'
           },{
               id:'002',
               imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/53b10c55117cd5b006449df8b97c9e76.jpg',
               title:'再忙也要看世界，马来西亚浪漫之旅',
               desc:'再忙也要看世界，马来西亚浪漫之旅再忙也要看世界，马来西亚浪漫之旅' 
           },{
               id:'003',
               imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/2cb12a625b4f5cb4d6d9a1f4cd307d65.jpg',
               title:'穿越高山草甸，在青海湖旁发个呆',
               desc:'穿越高山草甸，在青海湖旁发个呆穿越高山草甸，在青海湖旁发个呆' 
           }
           ]
       }
    }
}
</script>
<style lang="stylus"  scoped>
@import '~styles/mixins.styl'
.title
   margin-top .2rem
   line-height .8rem
   background-color #eee
   text-indent .2rem
.item
    display flex
    overflow hidden
    height 1.9rem
    .item-img 
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0   //item-title或者item-desc过长变为省略号
        .item-title
            line-height .54rem
            font-size .3rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()
        .item-button
            line-height 0.44rem
            margin-top .16rem
            float right
            margin-right .4rem
            padding 0 .1rem
            border-radius .06rem
            background-color #17c0c8
            color #ffffff
    

</style>
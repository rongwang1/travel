<template>
  <div>
      <div class='title'>周末去哪儿</div>
          <ul>
              <li class='item border-bottom'  v-for='item of recommendList'  :key='item.id' >
                <div class='item-wrap-img'>
                    <img  class='item-img' :src="item.imgUrl" alt="">
               </div>
               <div class='item-info'>
                    <p class='item-title '>{{item.title}}</p>
                    <p class='item-desc'>{{item.desc}}</p>
               </div> 
              </li>
          </ul> 
  </div>
</template>
<script>
 export default{
  name:'HomeWeekend',
  data () {
    return { recommendList:[
       {
         id: '001',
         imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg',
         title:'暑假泰舒心',
         desc:'网红新选，浪翻全球'
       },{
         id: '002',
         imgUrl:'//h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg',
         title:'夏日逐雪',
         desc:'尽在新雪季，夏日逐雪'
       },{
         id: '003',
         imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg',
         title:'快乐暑假',
         desc:'云南游玩，快乐暑假'
       }
    ]}
   } 
  }
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
  .title
    line-height .8rem
    background-color #eee
    margin-top .2rem
    text-indent .2rem
  .item-wrap-img
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
        width 100%
  .item-info
    padding .1rem
    .item-title
        line-height .54rem
        font-size .3rem
        ellipsis()
    .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()  

</style>

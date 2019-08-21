<template>
<div class='list' ref='wrapper'>
  <div >
      <div class='area'>
          <div class='title  border-topbottom'>当前城市</div>
          <div class='button-list'>
              <div class='button-wrapper'>
                  <div class='button'>深圳市</div>
              </div> 
          </div>
      </div>
      <div class='area'>
          <div class='title border-topbottom'>热门城市</div>
            <div class='button-list'>
              <div class='button-wrapper' v-for="item of hotCities" :key="item.id">
                  <div class='button'>{{item.name}}</div>
              </div>
          </div>
      </div>
      <div class='area ' v-for="item of cities" :key="item.title">
        <div class='title border-topbottom'>{{item.title}}</div>
        <div class='other-area  border-bottom' v-for="city of item.lists" :key="city.index">
           <div class='item  border-bottom'>{{city}}</div>         
        </div>
      </div> 
  </div>>     
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    mounted () {
      this.scroll=new Bscroll(this.$refs.wrapper)
    },
    props:{
      hotCities:Array,
      cities:Array
    }
}
</script>
<style lang="stylus" scoped>
   .border-topbottom
     &:after
       border-color #ccc
     &:before
       border-color #ccc
    .border-bottom
     &:before
       border-color #ccc
    .list 
        position absolute
        overflow hidden
        top 1.58rem
        left 0 
        right 0 
        bottom 0 
        .title
            line-height .72rem
            height .72rem
            padding-left .2rem
            background-color #eeeeee
            color #666666
        .button-list
            overflow hidden
            padding .1rem  .6rem .1rem .1rem
            .button-wrapper
                float left 
                width 33.33% 
                .button
                    margin .1rem
                    padding .2rem 0
                    text-align center
                    border .02rem solid #cccccc
                    border-radius .1rem  
        .other-area
            .item
                line-height .82rem
                padding-left .2rem         
</style>
<template>
<div class='list' ref='wrapper'>
  <div >
      <div class='area'>
          <div class='title  border-topbottom'>当前城市</div>
          <div class='button-list'>
              <div class='button-wrapper'>
                  <div class='button'>{{this.$store.state.city}}</div>
              </div> 
          </div>
      </div>
      <div class='area'>
          <div class='title border-topbottom'>热门城市</div>
            <div class='button-list'>
              <div class='button-wrapper' v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
                  <div class='button'>{{item.name}}</div>
              </div>
          </div>
      </div>
      <div class='area ' v-for="(item,key) of cities" :key="key" :ref="key">
        <div class='title border-topbottom'>{{key}}</div>
        <div class='other-area  border-bottom' v-for="city of item" :key="city.id"  @click="handleCityClick(city.name)">
           <div class='item  border-bottom'>{{city.name}}</div>         
        </div>
      </div> 
  </div>>     
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
      hotCities:Array,
      cities:Object,
      letter:String
    },
    methods:{
      handleCityClick( city){
           this.$store.commit('changeCity',city)   //可以直接使用commit方法直接调用mutations，可以不用dispathd调用actions
           this.$router.push('./')    //编程式导航，路由跳转到首页
      }
    },
    watch:{
			  letter () {
				if (this.letter) {
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
				}
			}
    },
    mounted () {
      this.scroll=new Bscroll(this.$refs.wrapper)
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
<template>
<div>
   <div class='city-search'>
      <input  v-model="keyword" class='search-input' type="text" placeholder="请输入城市名或拼音">
  </div>
  <div class="search-content"   ref="search"  v-show="keyword">
    <ul>
      <li class="search-item   border-bottom" v-for="item of list" :key="item.id"  @click="handleCityClick(item.name)">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasNodata">未匹配相关数据</li>
  </ul>
  </div>
</div>
</template>
<script>
   import Bscroll from 'better-scroll'
   export default{
       name:'CitySearch',
       props:{
           cities:Object
       },
       data (){
           return {
               keyword:'',
               timer:null,
               list:[]
           }
       },
       computed:{
           hasNodata(){
               return !this.list.length
           }
       },
       methods:{
            handleCityClick(city){
                this.$store.commit('changeCity',city)
                this.$router.push('./')
            }
       },
       watch:{
           keyword (){
              if(this.timer){
                  clearTimeout(this.timer)
              }
              this.timer=setTimeout(() => {
                  const result=[]
                  for(let i in this.cities){
                      this.cities[i].forEach((value)=>{
                          if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                              result.push(value)
                          }
                      })
                  }
                  this.list=result
              }, 100);
           }
       },
       mounted(){
           this.scroll=new Bscroll(this.$refs.search)
       }
   }
</script>
<style lang="stylus"  scoped>
    @import '~styles/varibles.styl'
    .city-search
        height .72rem
        background-color $bgColor
        padding 0 .1rem
        .search-input
            box-sizing border-box 
            width 100%
            height .62rem
            padding 0 .1rem
            line-height  .62rem
            border-radius .1rem
            text-align center
            color #666666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0 
        right 0 
        bottom 0 
        .search-item
           line-height .62rem
           padding-left .2rem
           background-color #fff
           color #666

</style>
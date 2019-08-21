<template>
  <ul class='list'>
      <li class='item'  v-for="item of cities" :key="item.title">{{item.title}}</li>
  </ul>

</template>
<script>
    export default {
        name:'CityAlphabet',
        props:{
          cities:Array
        }
    }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
 .list 
    display flex
    flex-direction column
    justify-content center   //flex布局垂直方向上居中
    position absolute
    top 1.58rem
    right 0 
    bottom 0 
    width .4rem
    .item 
      text-align center
      height .4rem
      color $bgColor

    




</style>
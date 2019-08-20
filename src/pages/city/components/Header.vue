<template> 
    <div  class='header'>
        城市选择  
        <router-link  to='/'>
            <div class='iconfont  header-back'>&#xe710;</div>
        </router-link>
    </div>
</template>
<script>
export default{
    name:'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        height  $headerHeight
        line-height  $headerHeight
        background-color $bgColor
        font-size .32rem
        color #ffffff
        text-align center
        .header-back
          position absolute
          top 0
          left 0
          width .64rem
          font-size .6rem
          color #ffffff
         
</style>
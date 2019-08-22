<template>
  <ul class='list'>
      <li class='item' 
       v-for="item of cities" 
       :key="item.title" 
       :ref="item.title"
       @click="handleLetterClick"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
      >{{item.title}}</li>
  </ul>
</template>
<script>
    export default {
        name:'CityAlphabet',
        props:{
          cities:Array
        },
        data(){
             return{
               touchStatus:false,
               startY:0,
               timer:null     //函数节流
             }
        },
        updated (){
           this.startY=this.$refs['A'][0].offsetTop
        },
        computed:{
          //这边因为json文件的格式原因我暂时拉不出数据555555~,所以手动写死了数据(之后想到办法后改进)
           letters(){
            const A=['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','X','Y','Z']
            const letters=[]
            for (let i=0; i<A.length; i++){
              letters.push(A[i])
            }
            return letters
           }    
        },
        methods:{
          handleLetterClick(e){ 
            this.$emit('change',e.target.innerText)
          },
          handleTouchStart () {
             this.touchStatus=true
          },
          handleTouchMove (e) {
              if(this.touchStatus) {
                if(this.timer) {
                  clearTimeout(this.timer)
                }
                this.timer= setTimeout(() => {
                  const touchY=e.touches[0].clientY-79
                  const index=Math.floor((touchY-this.startY)/20)
                  if(index >= 0 && index<this.letters.length) {
                      this.$emit('change',this.letters[index])
                  }
                }, 16)
              }
          },
          handleTouchEnd () {
             this.touchStatus=false
          } 
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
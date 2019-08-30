import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      //异步组件加载(按需加载)，当app.js文件过大时采用拆分这种方法，
      //但是当文件比较小的时候则没有必要
      component: ()=>import ('@/pages/home/Home')
    },
    {
       path:'/city',
       name:'City',
       component:()=>import('@/pages/city/City')
    },{
      path:'/detail/:id',
      name:'Detail',
      component:()=>import('@/pages/detail/Detail')
    }
  ],

//  页面切换(路由切换)时，新页面始终展示X轴为0，Y轴为0
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

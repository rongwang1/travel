import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
       path:'/city',
       name:'City',
       component:City
    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ],

//  页面切换(路由切换)时，新页面始终展示X轴为0，Y轴为0
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

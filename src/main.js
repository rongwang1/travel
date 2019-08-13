// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//npm install fastclick --save 安装fastclick 是为了解决移动端点击300毫秒延迟的问题
import fastClick from 'fastclick'
//样式重置css文件
import './assets/styles/reset.css'
//由于不同的手机有不同的像素密度，css中的1px不等于设备中的1px,所以在项目中我们引入border.css解决这个问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//路由就是根据网址的不同，返回不同的内容给客户
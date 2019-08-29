<template>
  <div id="app">
  <!-- 显示的是当前路由地址所对应的内容 -->
  <keep-alive  exclude="Detail">    <!--  页面缓存,exclude表示排除Detail这个 组件不使用缓存-->
    <router-view/>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
</style>

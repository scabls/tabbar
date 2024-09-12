<template>
  <TabBar>
    <TabBarItem icon="home">首页</TabBarItem>
    <TabBarItem icon="category">分类</TabBarItem>
    <TabBarItem icon="cart">购物车</TabBarItem>
    <TabBarItem icon="user">我的</TabBarItem>
  </TabBar>
</template>

<script setup>
import TabBar from './components/TabBar.vue'
import TabBarItem from './components/TabBarItem.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

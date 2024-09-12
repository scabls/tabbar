<template>
  <TabBar>
    <TabBarItem icon="home" :id="0" @click="handeleClick(0)">首页</TabBarItem>
    <TabBarItem icon="category" :id="1" @click="handeleClick(1)">分类</TabBarItem>
    <TabBarItem icon="cart" :id="2" @click="handeleClick(2)">购物车</TabBarItem>
    <TabBarItem icon="user" :id="3" @click="handeleClick(3)">我的</TabBarItem>
  </TabBar>
</template>

<script setup>
import TabBar from './components/TabBar.vue'
import TabBarItem from './components/TabBarItem.vue'
import { ref, provide } from 'vue'
const active = ref(0)
provide('active', active)
const handeleClick = index => (active.value = index)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

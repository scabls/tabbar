<template>
  <!-- 动态组件, 由is属性决定渲染哪个组件 -->
  <component :is="views[active]"></component>
  <!-- <TabBar :modelValue="active" @update:model-value="handleUpdate"> -->
  <TabBar v-model="active">
    <TabBarItem icon="home">首页</TabBarItem>
    <TabBarItem icon="category">分类</TabBarItem>
    <TabBarItem icon="cart">购物车</TabBarItem>
    <TabBarItem icon="user">我的</TabBarItem>
  </TabBar>
</template>

<script setup>
import TabBar from './components/TabBar.vue'
import TabBarItem from './components/TabBarItem.vue'
import { ref, shallowRef } from 'vue'
const active = ref(0)
import HomeView from './views/HomeView.vue'
import CateView from './views/CateView.vue'
import CartView from './views/CartView.vue'
import UserView from './views/UserView.vue'
const views = shallowRef([HomeView, CateView, CartView, UserView])
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

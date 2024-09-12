<template>
  <TabBar>
    <TabBarItem>首页</TabBarItem>
    <TabBarItem>搜索</TabBarItem>
    <TabBarItem>联系人</TabBarItem>
    <TabBarItem>设置</TabBarItem>
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

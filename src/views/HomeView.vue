<template>
  <div>
    <h1>首页</h1>
    <div>当前计数为: {{ count }}</div>
    <button @click="count++">点击+1</button>
  </div>
</template>
<script setup>
// 加入keep-alive后, onMounted和onUnmounted生命周期函数不会执行, 取而代之的是
// onActivated: 激活
// onDeactivated: 失活
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
onMounted(() => console.log('挂载'))
onUnmounted(() => console.log('卸载'))
onActivated(() => console.log('激活'))
onDeactivated(() => console.log('失活'))
const count = ref(0)
</script>
<style scoped></style>

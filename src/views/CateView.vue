<template>分类页</template>
<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
onMounted(() => console.log('挂载'))
onUnmounted(() => console.log('卸载'))
onActivated(() => console.log('激活'))
onDeactivated(() => console.log('失活'))
</script>
<style scoped></style>

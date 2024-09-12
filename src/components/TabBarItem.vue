<template>
  <div class="tab-bar-item" :class="activeStyle" @click="handleClick">
    <i :class="iconStyle"></i>
    <!-- <i :class="iconStyle(icon)"></i> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, inject, getCurrentInstance } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})
const iconStyle = computed(() => `iconfont icon-${props.icon}`)
// const iconStyle = computed(() => {
//   return icon => `iconfont icon-${icon}`
// })

// 注入来自tabbat的provide
const parent = inject('TabBar')
// 获取当前tabItem实例
const instance = getCurrentInstance()
// 将instance添加到parent的children数组中
parent.registerChild(instance)
// 计算当前实例的索引
// 使用计算属性, 可以在组件调整时动态更新索引
const index = computed(() => parent.children.indexOf(instance))
console.log(index.value)
// 计算class属性
const activeStyle = computed(() => (index.value == parent.props.modelValue ? 'current' : ''))
// 点击时修改modelValue
const handleClick = () => parent.setCurrent(index.value)
</script>

<style scoped>
@import 'http://at.alicdn.com/t/c/font_3660333_clz5n3z0jtw.css';
.tab-bar-item {
  flex: 25%;
  /* 实现居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 另一种方式实现居中 */
  /* display: grid;
  text-align: center;
  align-content: center; */
  color: #666;
  font-size: 12px;
}
.tab-bar-item i {
  font-size: 18px;
}
.tab-bar-item.current {
  color: red;
}
</style>

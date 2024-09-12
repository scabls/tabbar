<template>
  <div class="tab-bar-item" :class="activeStyle" @click="handleClick">
    <i :class="iconStyle"></i>
    <!-- <i :class="iconStyle(icon)"></i> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import useParent from '../hooks/useParent'
const { parent, index } = useParent('TabBar')
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})
const iconStyle = computed(() => `iconfont icon-${props.icon}`)
// 计算class属性
const activeStyle = computed(() => (index.value == parent.model.value ? 'current' : ''))
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

<template>
  <div class="tab-bar-item">
    <i :class="iconStyle"></i>
    <!-- <i :class="iconStyle(icon)"></i> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
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
  color: #fff;
  font-size: 12px;
}
.tab-bar-item i {
  font-size: 18px;
}
</style>

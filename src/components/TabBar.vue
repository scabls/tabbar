<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script setup>
import useChildren from '../hooks/useChildren'
const { linkChildren } = useChildren('TabBar')
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['update:model-value'])
const setCurrent = index => emit('update:model-value', index)
// 将props和setCurrent传给子组件
linkChildren({
  props,
  setCurrent,
})
</script>

<style scoped>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  /* background-color: lightblue; */
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3);
}
</style>

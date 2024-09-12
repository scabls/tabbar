<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from 'vue'
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['update:model-value'])
provide('modelValue', props.modelValue)
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

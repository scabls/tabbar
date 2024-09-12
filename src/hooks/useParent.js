import { inject, getCurrentInstance, onUnmounted, computed, ref } from 'vue'

export default function useParent(key) {
  const parent = inject(key, null)
  if (parent) {
    const instance = getCurrentInstance()
    const { link, unlink, internalChildren } = parent
    link(instance)
    onUnmounted(() => unlink(instance))
    const index = computed(() => internalChildren.indexOf(instance))
    return {
      parent,
      index,
    }
  }
  return {
    parent: null,
    index: ref(-1),
  }
}

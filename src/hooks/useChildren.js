import { isVNode, reactive, provide, getCurrentInstance } from 'vue'
function flattenVNodes(children) {
  const result = []
  const traverse = children2 => {
    if (Array.isArray(children2)) {
      children2.forEach(child => {
        var _a
        if (isVNode(child)) {
          result.push(child)
          if ((_a = child.component) == null ? void 0 : _a.subTree) {
            result.push(child.component.subTree)
            traverse(child.component.subTree.children)
          }
          if (child.children) {
            traverse(child.children)
          }
        }
      })
    }
  }
  traverse(children)
  return result
}
var findVNodeIndex = (vnodes, vnode) => {
  const index = vnodes.indexOf(vnode)
  if (index === -1) {
    return vnodes.findIndex(
      item =>
        vnode.key !== void 0 &&
        vnode.key !== null &&
        item.type === vnode.type &&
        item.key === vnode.key
    )
  }
  return index
}
function sortChildren(parent, publicChildren, internalChildren) {
  const vnodes = flattenVNodes(parent.subTree.children)
  internalChildren.sort((a, b) => findVNodeIndex(vnodes, a.vnode) - findVNodeIndex(vnodes, b.vnode))
  const orderedPublicChildren = internalChildren.map(item => item.proxy)
  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a)
    const indexB = orderedPublicChildren.indexOf(b)
    return indexA - indexB
  })
}
export default function useChildren(key) {
  const publicChildren = reactive([])
  const internalChildren = reactive([])
  const parent = getCurrentInstance()
  const linkChildren = value => {
    const link = child => {
      if (child.proxy) {
        internalChildren.push(child)
        publicChildren.push(child.proxy)
        sortChildren(parent, publicChildren, internalChildren)
      }
    }
    const unlink = child => {
      const index = internalChildren.indexOf(child)
      publicChildren.splice(index, 1)
      internalChildren.splice(index, 1)
    }
    provide(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren,
        },
        value
      )
    )
  }
  return {
    children: publicChildren,
    linkChildren,
  }
}

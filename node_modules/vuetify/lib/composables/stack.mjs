import { useToggleScope } from "./toggleScope.mjs";
import { computed, onScopeDispose, reactive, readonly, ref, toRaw, watchEffect } from 'vue';
import { getCurrentInstance } from "../util/index.mjs"; // Types

const stack = reactive([]);
export function useStack(isActive, zIndex) {
  const vm = getCurrentInstance('useStack');

  const _zIndex = ref(+zIndex.value);

  useToggleScope(isActive, () => {
    var _stack;

    const lastZIndex = (_stack = stack[stack.length - 1]) == null ? void 0 : _stack[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
    stack.push([vm, _zIndex.value]);
    onScopeDispose(() => {
      const idx = stack.findIndex(v => v[0] === vm);
      stack.splice(idx, 1);
    });
  });
  const isTop = ref(true);
  watchEffect(() => {
    var _stack2;

    const _isTop = toRaw((_stack2 = stack[stack.length - 1]) == null ? void 0 : _stack2[0]) === vm;

    setTimeout(() => isTop.value = _isTop);
  });
  return {
    isTop: readonly(isTop),
    stackStyles: computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}
//# sourceMappingURL=stack.mjs.map
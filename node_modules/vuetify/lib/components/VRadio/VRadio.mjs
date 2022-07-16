import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
// Components
import { VSelectionControl } from "../VSelectionControl/index.mjs"; // Composables

import { IconValue } from "../../composables/icons.mjs"; // Utilities

import { defineComponent, useRender } from "../../util/index.mjs";
export const VRadio = defineComponent({
  name: 'VRadio',
  props: {
    falseIcon: {
      type: IconValue,
      default: '$radioOff'
    },
    trueIcon: {
      type: IconValue,
      default: '$radioOn'
    }
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(VSelectionControl, {
      "class": "v-radio",
      "trueIcon": props.trueIcon,
      "falseIcon": props.falseIcon,
      "type": "radio"
    }, slots));
    return {};
  }

});
//# sourceMappingURL=VRadio.mjs.map
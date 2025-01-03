import {
  require_react
} from "./chunk-4X3XUJ2M.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react.useRef)({
    value,
    previous: value
  });
  return (0, import_react.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

export {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b
};
//# sourceMappingURL=chunk-HLZZWYDQ.js.map

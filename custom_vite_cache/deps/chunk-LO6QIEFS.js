import {
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "./chunk-5XYVU5KU.js";
import {
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a
} from "./chunk-77PYJDQ6.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f
} from "./chunk-VWSXYM2I.js";
import {
  require_react_dom
} from "./chunk-MZQMFKLV.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends
} from "./chunk-6MEHM4D7.js";
import {
  require_react
} from "./chunk-4X3XUJ2M.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME = "DismissableLayer";
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = (0, import_react2.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = (0, import_react2.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react2.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react2.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react2.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch) return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer) return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react2.useEffect)(() => {
    if (!node1) return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react2.useEffect)(() => {
    return () => {
      if (!node1) return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react2.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
Object.assign($5cb92bef7577960e$export$177fb62ff3ec1f22, {
  displayName: $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME
});
var $5cb92bef7577960e$var$BRANCH_NAME = "DismissableLayerBranch";
var $5cb92bef7577960e$export$4d5eb2109db14228 = (0, import_react2.forwardRef)((props, forwardedRef) => {
  const context = (0, import_react2.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const ref = (0, import_react2.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react2.useEffect)(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [
    context.branches
  ]);
  return (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, props, {
    ref: composedRefs
  }));
});
Object.assign($5cb92bef7577960e$export$4d5eb2109db14228, {
  displayName: $5cb92bef7577960e$var$BRANCH_NAME
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react2.useRef)(false);
  const handleClickRef = (0, import_react2.useRef)(() => {
  });
  (0, import_react2.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) target.addEventListener(name, handler, {
    once: true
  });
  if (discrete) $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else target.dispatchEvent(event);
}
var $5cb92bef7577960e$export$be92b6f5f03c0fe9 = $5cb92bef7577960e$export$177fb62ff3ec1f22;
var $5cb92bef7577960e$export$aecb2ddcb55c95be = $5cb92bef7577960e$export$4d5eb2109db14228;

// node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var $f1701beae083dbae$var$PORTAL_NAME = "Portal";
var $f1701beae083dbae$export$602eac185826482c = (0, import_react3.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? import_react_dom.default.createPortal((0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
Object.assign($f1701beae083dbae$export$602eac185826482c, {
  displayName: $f1701beae083dbae$var$PORTAL_NAME
});

export {
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $5cb92bef7577960e$export$be92b6f5f03c0fe9,
  $5cb92bef7577960e$export$aecb2ddcb55c95be,
  $f1701beae083dbae$export$602eac185826482c
};
//# sourceMappingURL=chunk-LO6QIEFS.js.map

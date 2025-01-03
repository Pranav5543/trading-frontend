import {
  $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,
  $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
} from "./chunk-R73MATDQ.js";
import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b
} from "./chunk-HLZZWYDQ.js";
import {
  $db6c3485150b8e66$export$1ab7ae714698c4b8
} from "./chunk-M5O6VNMB.js";
import {
  $f631663db3294ace$export$b39126d51d94e6f3
} from "./chunk-ZADVOPGH.js";
import "./chunk-4PVHEAOZ.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "./chunk-6IWIIXZS.js";
import "./chunk-ANKYSCKQ.js";
import {
  $71cd76cc60e0454e$export$6f32135080cb4c3
} from "./chunk-ZB35M57J.js";
import {
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "./chunk-5XYVU5KU.js";
import {
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "./chunk-77PYJDQ6.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "./chunk-VWSXYM2I.js";
import "./chunk-MZQMFKLV.js";
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

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $ce77a8961b41be9e$var$RADIO_NAME = "Radio";
var [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($ce77a8961b41be9e$var$RADIO_NAME);
var [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
var $ce77a8961b41be9e$export$d7b12c4107be0d61 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, ...radioProps } = props;
  const [button, setButton] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  return (0, import_react.createElement)($ce77a8961b41be9e$var$RadioProvider, {
    scope: __scopeRadio,
    checked,
    disabled
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "radio",
    "aria-checked": checked,
    "data-state": $ce77a8961b41be9e$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, radioProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      if (!checked) onCheck === null || onCheck === void 0 || onCheck();
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
      }
    })
  })), isFormControl && (0, import_react.createElement)($ce77a8961b41be9e$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
Object.assign($ce77a8961b41be9e$export$d7b12c4107be0d61, {
  displayName: $ce77a8961b41be9e$var$RADIO_NAME
});
var $ce77a8961b41be9e$var$INDICATOR_NAME = "RadioIndicator";
var $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, forceMount, ...indicatorProps } = props;
  const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
  return (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.checked
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $ce77a8961b41be9e$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef
  })));
});
Object.assign($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, {
  displayName: $ce77a8961b41be9e$var$INDICATOR_NAME
});
var $ce77a8961b41be9e$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return (0, import_react.createElement)("input", _extends({
    type: "radio",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $ce77a8961b41be9e$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $f99a8c78507165f7$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
var $f99a8c78507165f7$var$RADIO_GROUP_NAME = "RadioGroup";
var [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4,
  $ce77a8961b41be9e$export$67d2296460f1b002
]);
var $f99a8c78507165f7$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
var [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
var $f99a8c78507165f7$export$a98f0dcb43a68a25 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return (0, import_react.createElement)($f99a8c78507165f7$var$RadioGroupProvider, {
    scope: __scopeRadioGroup,
    name,
    required,
    disabled,
    value,
    onValueChange: setValue
  }, (0, import_react.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation,
    dir: direction,
    loop
  }), (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "radiogroup",
    "aria-required": required,
    "aria-orientation": orientation,
    "data-disabled": disabled ? "" : void 0,
    dir: direction
  }, groupProps, {
    ref: forwardedRef
  }))));
});
Object.assign($f99a8c78507165f7$export$a98f0dcb43a68a25, {
  displayName: $f99a8c78507165f7$var$RADIO_GROUP_NAME
});
var $f99a8c78507165f7$var$ITEM_NAME = "RadioGroupItem";
var $f99a8c78507165f7$export$9f866c100ef519e4 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, disabled, ...itemProps } = props;
  const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const checked = context.value === itemProps.value;
  const isArrowKeyPressedRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    const handleKeyDown = (event) => {
      if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
    };
    const handleKeyUp = () => isArrowKeyPressedRef.current = false;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (0, import_react.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !isDisabled,
    active: checked
  }), (0, import_react.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61, _extends({
    disabled: isDisabled,
    required: context.required,
    checked
  }, radioScope, itemProps, {
    name: context.name,
    ref: composedRefs,
    onCheck: () => context.onValueChange(itemProps.value),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10((event) => {
      if (event.key === "Enter") event.preventDefault();
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, () => {
      var _ref$current;
      if (isArrowKeyPressedRef.current) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
    })
  })));
});
Object.assign($f99a8c78507165f7$export$9f866c100ef519e4, {
  displayName: $f99a8c78507165f7$var$ITEM_NAME
});
var $f99a8c78507165f7$var$INDICATOR_NAME = "RadioGroupIndicator";
var $f99a8c78507165f7$export$5fb54c671a65c88 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, ...indicatorProps } = props;
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  return (0, import_react.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, _extends({}, radioScope, indicatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($f99a8c78507165f7$export$5fb54c671a65c88, {
  displayName: $f99a8c78507165f7$var$INDICATOR_NAME
});
var $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
var $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;
var $f99a8c78507165f7$export$adb584737d712b70 = $f99a8c78507165f7$export$5fb54c671a65c88;
export {
  $f99a8c78507165f7$export$adb584737d712b70 as Indicator,
  $f99a8c78507165f7$export$6d08773d2e66f8f2 as Item,
  $f99a8c78507165f7$export$a98f0dcb43a68a25 as RadioGroup,
  $f99a8c78507165f7$export$5fb54c671a65c88 as RadioGroupIndicator,
  $f99a8c78507165f7$export$9f866c100ef519e4 as RadioGroupItem,
  $f99a8c78507165f7$export$be92b6f5f03c0fe9 as Root,
  $f99a8c78507165f7$export$c547093f11b76da2 as createRadioGroupScope
};
//# sourceMappingURL=@radix-ui_react-radio-group.js.map

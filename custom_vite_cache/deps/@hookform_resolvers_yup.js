import {
  i,
  n
} from "./chunk-Z5WD3FIB.js";
import {
  appendErrors
} from "./chunk-HYEAH7B5.js";
import "./chunk-4X3XUJ2M.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@hookform/resolvers/yup/dist/yup.mjs
function o(o2, n2, a) {
  return void 0 === n2 && (n2 = {}), void 0 === a && (a = {}), function(s, i2, c) {
    try {
      return Promise.resolve(function(t, r) {
        try {
          var u = (n2.context && true && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(o2["sync" === a.mode ? "validateSync" : "validate"](s, Object.assign({ abortEarly: false }, n2, { context: i2 }))).then(function(t2) {
            return c.shouldUseNativeValidation && i({}, c), { values: a.raw ? s : t2, errors: {} };
          }));
        } catch (e) {
          return r(e);
        }
        return u && u.then ? u.then(void 0, r) : u;
      }(0, function(e) {
        if (!e.inner) throw e;
        return { values: {}, errors: n((o3 = e, n3 = !c.shouldUseNativeValidation && "all" === c.criteriaMode, (o3.inner || []).reduce(function(e2, t) {
          if (e2[t.path] || (e2[t.path] = { message: t.message, type: t.type }), n3) {
            var o4 = e2[t.path].types, a2 = o4 && o4[t.type];
            e2[t.path] = appendErrors(t.path, n3, e2, t.type, a2 ? [].concat(a2, t.message) : t.message);
          }
          return e2;
        }, {})), c) };
        var o3, n3;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
export {
  o as yupResolver
};
//# sourceMappingURL=@hookform_resolvers_yup.js.map

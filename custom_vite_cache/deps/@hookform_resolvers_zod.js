import {
  i,
  n
} from "./chunk-Z5WD3FIB.js";
import {
  appendErrors
} from "./chunk-HYEAH7B5.js";
import "./chunk-4X3XUJ2M.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@hookform/resolvers/zod/dist/zod.mjs
var n2 = function(e, o) {
  for (var n3 = {}; e.length; ) {
    var t2 = e[0], s = t2.code, i2 = t2.message, a = t2.path.join(".");
    if (!n3[a]) if ("unionErrors" in t2) {
      var u = t2.unionErrors[0].errors[0];
      n3[a] = { message: u.message, type: u.code };
    } else n3[a] = { message: i2, type: s };
    if ("unionErrors" in t2 && t2.unionErrors.forEach(function(r) {
      return r.errors.forEach(function(r2) {
        return e.push(r2);
      });
    }), o) {
      var c = n3[a].types, f = c && c[t2.code];
      n3[a] = appendErrors(a, o, n3, s, f ? [].concat(f, t2.message) : t2.message);
    }
    e.shift();
  }
  return n3;
};
var t = function(r, t2, s) {
  return void 0 === s && (s = {}), function(i2, a, u) {
    try {
      return Promise.resolve(function(o, n3) {
        try {
          var a2 = Promise.resolve(r["sync" === s.mode ? "parse" : "parseAsync"](i2, t2)).then(function(r2) {
            return u.shouldUseNativeValidation && i({}, u), { errors: {}, values: s.raw ? i2 : r2 };
          });
        } catch (r2) {
          return n3(r2);
        }
        return a2 && a2.then ? a2.then(void 0, n3) : a2;
      }(0, function(r2) {
        if (function(r3) {
          return null != r3.errors;
        }(r2)) return { values: {}, errors: n(n2(r2.errors, !u.shouldUseNativeValidation && "all" === u.criteriaMode), u) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
};
export {
  t as zodResolver
};
//# sourceMappingURL=@hookform_resolvers_zod.js.map

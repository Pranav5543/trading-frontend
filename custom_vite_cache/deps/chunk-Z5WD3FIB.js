import {
  get,
  set
} from "./chunk-HYEAH7B5.js";

// node_modules/@hookform/resolvers/dist/resolvers.mjs
var t = function(e, t2, i2) {
  if (e && "reportValidity" in e) {
    var n2 = get(i2, t2);
    e.setCustomValidity(n2 && n2.message || ""), e.reportValidity();
  }
};
var i = function(r, e) {
  var i2 = function(i3) {
    var n3 = e.fields[i3];
    n3 && n3.ref && "reportValidity" in n3.ref ? t(n3.ref, i3, r) : n3.refs && n3.refs.forEach(function(e2) {
      return t(e2, i3, r);
    });
  };
  for (var n2 in e.fields) i2(n2);
};
var n = function(t2, n2) {
  n2.shouldUseNativeValidation && i(t2, n2);
  var f = {};
  for (var a in t2) {
    var s = get(n2.fields, a), u = Object.assign(t2[a] || {}, { ref: s && s.ref });
    if (o(n2.names || Object.keys(t2), a)) {
      var c = Object.assign({}, get(f, a));
      set(c, "root", u), set(f, a, c);
    } else set(f, a, u);
  }
  return f;
};
var o = function(r, e) {
  return r.some(function(r2) {
    return r2.startsWith(e + ".");
  });
};

export {
  i,
  n
};
//# sourceMappingURL=chunk-Z5WD3FIB.js.map

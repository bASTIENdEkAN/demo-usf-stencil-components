function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see app.js.LICENSE.txt */
!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(i, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/", n(n.s = 5);
}([function (e, t, n) {
  var i;
  !function (t, n) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, r) {
    "use strict";

    var o = [],
        a = Object.getPrototypeOf,
        s = o.slice,
        l = o.flat ? function (e) {
      return o.flat.call(e);
    } : function (e) {
      return o.concat.apply([], e);
    },
        u = o.push,
        c = o.indexOf,
        d = {},
        h = d.toString,
        p = d.hasOwnProperty,
        f = p.toString,
        g = f.call(Object),
        m = {},
        v = function v(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        y = function y(e) {
      return null != e && e === e.window;
    },
        b = n.document,
        w = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function C(e, t, n) {
      var i,
          r,
          o = (n = n || b).createElement("script");
      if (o.text = e, t) for (i in w) {
        (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
      }
      n.head.appendChild(o).parentNode.removeChild(o);
    }

    function x(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? d[h.call(e)] || "object" : _typeof(e);
    }

    var _ = function _(e, t) {
      return new _.fn.init(e, t);
    };

    function T(e) {
      var t = !!e && "length" in e && e.length,
          n = x(e);
      return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    _.fn = _.prototype = {
      jquery: "3.5.1",
      constructor: _,
      length: 0,
      toArray: function toArray() {
        return s.call(this);
      },
      get: function get(e) {
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = _.merge(this.constructor(), e);

        return t.prevObject = this, t;
      },
      each: function each(e) {
        return _.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(_.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      even: function even() {
        return this.pushStack(_.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function odd() {
        return this.pushStack(_.grep(this, function (e, t) {
          return t % 2;
        }));
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: o.sort,
      splice: o.splice
    }, _.extend = _.fn.extend = function () {
      var e,
          t,
          n,
          i,
          r,
          o,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;

      for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || v(a) || (a = {}), s === l && (a = this, s--); s < l; s++) {
        if (null != (e = arguments[s])) for (t in e) {
          i = e[t], "__proto__" !== t && a !== i && (u && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}, r = !1, a[t] = _.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        }
      }

      return a;
    }, _.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== h.call(e)) && (!(t = a(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && f.call(n) === g);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t, n) {
        C(e, {
          nonce: t && t.nonce
        }, n);
      },
      each: function each(e, t) {
        var n,
            i = 0;
        if (T(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {
          ;
        } else for (i in e) {
          if (!1 === t.call(e[i], i, e[i])) break;
        }
        return e;
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (T(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : c.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
          e[r++] = t[i];
        }

        return e.length = r, e;
      },
      grep: function grep(e, t, n) {
        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) {
          !t(e[r], r) !== a && i.push(e[r]);
        }

        return i;
      },
      map: function map(e, t, n) {
        var i,
            r,
            o = 0,
            a = [];
        if (T(e)) for (i = e.length; o < i; o++) {
          null != (r = t(e[o], o, n)) && a.push(r);
        } else for (o in e) {
          null != (r = t(e[o], o, n)) && a.push(r);
        }
        return l(a);
      },
      guid: 1,
      support: m
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = o[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      d["[object " + t + "]"] = t.toLowerCase();
    });

    var k = function (e) {
      var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          g,
          m,
          v,
          y,
          b,
          w = "sizzle" + 1 * new Date(),
          C = e.document,
          x = 0,
          _ = 0,
          T = le(),
          k = le(),
          S = le(),
          A = le(),
          E = function E(e, t) {
        return e === t && (d = !0), 0;
      },
          D = {}.hasOwnProperty,
          L = [],
          I = L.pop,
          N = L.push,
          M = L.push,
          q = L.slice,
          P = function P(e, t) {
        for (var n = 0, i = e.length; n < i; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          j = "[\\x20\\t\\r\\n\\f]",
          O = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          R = "\\[" + j + "*(" + O + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + j + "*\\]",
          H = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
          F = new RegExp(j + "+", "g"),
          z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
          U = new RegExp("^" + j + "*," + j + "*"),
          B = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
          W = new RegExp(j + "|>"),
          G = new RegExp(H),
          Y = new RegExp("^" + O + "$"),
          K = {
        ID: new RegExp("^#(" + O + ")"),
        CLASS: new RegExp("^\\.(" + O + ")"),
        TAG: new RegExp("^(" + O + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + H),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + $ + ")$", "i"),
        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
      },
          V = /HTML$/i,
          X = /^(?:input|select|textarea|button)$/i,
          Q = /^h\d$/i,
          Z = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
          ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          re = function re(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          oe = function oe() {
        h();
      },
          ae = we(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        M.apply(L = q.call(C.childNodes), C.childNodes), L[C.childNodes.length].nodeType;
      } catch (e) {
        M = {
          apply: L.length ? function (e, t) {
            N.apply(e, q.call(t));
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function se(e, t, i, r) {
        var o,
            s,
            u,
            c,
            d,
            f,
            v,
            y = t && t.ownerDocument,
            C = t ? t.nodeType : 9;
        if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return i;

        if (!r && (h(t), t = t || p, g)) {
          if (11 !== C && (d = J.exec(e))) if (o = d[1]) {
            if (9 === C) {
              if (!(u = t.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i;
          } else {
            if (d[2]) return M.apply(i, t.getElementsByTagName(e)), i;
            if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return M.apply(i, t.getElementsByClassName(o)), i;
          }

          if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
            if (v = e, y = t, 1 === C && (W.test(e) || B.test(e))) {
              for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = w)), s = (f = a(e)).length; s--;) {
                f[s] = (c ? "#" + c : ":scope") + " " + be(f[s]);
              }

              v = f.join(",");
            }

            try {
              return M.apply(i, y.querySelectorAll(v)), i;
            } catch (t) {
              A(e, !0);
            } finally {
              c === w && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace(z, "$1"), t, i, r);
      }

      function le() {
        var e = [];
        return function t(n, r) {
          return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
        };
      }

      function ue(e) {
        return e[w] = !0, e;
      }

      function ce(e) {
        var t = p.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function de(e, t) {
        for (var n = e.split("|"), r = n.length; r--;) {
          i.attrHandle[n[r]] = t;
        }
      }

      function he(e, t) {
        var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function pe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function fe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function ge(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function me(e) {
        return ue(function (t) {
          return t = +t, ue(function (n, i) {
            for (var r, o = e([], n.length, t), a = o.length; a--;) {
              n[r = o[a]] && (n[r] = !(i[r] = n[r]));
            }
          });
        });
      }

      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in n = se.support = {}, o = se.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
        return !V.test(t || n && n.nodeName || "HTML");
      }, h = se.setDocument = function (e) {
        var t,
            r,
            a = e ? e.ownerDocument || e : C;
        return a != p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, g = !o(p), C != p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ce(function (e) {
          return f.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
        }), n.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ce(function (e) {
          return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Z.test(p.getElementsByClassName), n.getById = ce(function (e) {
          return f.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length;
        }), n.getById ? (i.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, i.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (i.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, i.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n,
                i,
                r,
                o = t.getElementById(e);

            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

              for (r = t.getElementsByName(e), i = 0; o = r[i++];) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              }
            }

            return [];
          }
        }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              i = [],
              r = 0,
              o = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; n = o[r++];) {
              1 === n.nodeType && i.push(n);
            }

            return i;
          }

          return o;
        }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, v = [], m = [], (n.qsa = Z.test(p.querySelectorAll)) && (ce(function (e) {
          var t;
          f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]");
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = p.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
        })), (n.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ce(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", H);
        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(f.compareDocumentPosition), b = t || Z.test(f.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, E = t ? function (e, t) {
          if (e === t) return d = !0, 0;
          var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == p || e.ownerDocument == C && b(C, e) ? -1 : t == p || t.ownerDocument == C && b(C, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & i ? -1 : 1);
        } : function (e, t) {
          if (e === t) return d = !0, 0;
          var n,
              i = 0,
              r = e.parentNode,
              o = t.parentNode,
              a = [e],
              s = [t];
          if (!r || !o) return e == p ? -1 : t == p ? 1 : r ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
          if (r === o) return he(e, t);

          for (n = e; n = n.parentNode;) {
            a.unshift(n);
          }

          for (n = t; n = n.parentNode;) {
            s.unshift(n);
          }

          for (; a[i] === s[i];) {
            i++;
          }

          return i ? he(a[i], s[i]) : a[i] == C ? -1 : s[i] == C ? 1 : 0;
        }, p) : p;
      }, se.matches = function (e, t) {
        return se(e, null, null, t);
      }, se.matchesSelector = function (e, t) {
        if (h(e), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
          var i = y.call(e, t);
          if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
        } catch (e) {
          A(t, !0);
        }
        return se(t, p, null, [e]).length > 0;
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) != p && h(e), b(e, t);
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) != p && h(e);
        var r = i.attrHandle[t.toLowerCase()],
            o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
      }, se.escape = function (e) {
        return (e + "").replace(ie, re);
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, se.uniqueSort = function (e) {
        var t,
            i = [],
            r = 0,
            o = 0;

        if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(E), d) {
          for (; t = e[o++];) {
            t === e[o] && (r = i.push(o));
          }

          for (; r--;) {
            e.splice(i[r], 1);
          }
        }

        return c = null, e;
      }, r = se.getText = function (e) {
        var t,
            n = "",
            i = 0,
            o = e.nodeType;

        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += r(e);
            }
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; t = e[i++];) {
          n += r(t);
        }

        return n;
      }, (i = se.selectors = {
        cacheLength: 50,
        createPseudo: ue,
        match: K,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = T[e + " "];
            return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, n) {
            return function (i) {
              var r = se.attr(i, e);
              return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
            return 1 === i && 0 === r ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var u,
                  c,
                  d,
                  h,
                  p,
                  f,
                  g = o !== a ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  y = !l && !s,
                  b = !1;

              if (m) {
                if (o) {
                  for (; g;) {
                    for (h = t; h = h[g];) {
                      if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                    }

                    f = g = "only" === e && !f && "nextSibling";
                  }

                  return !0;
                }

                if (f = [a ? m.firstChild : m.lastChild], a && y) {
                  for (b = (p = (u = (c = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (b = p = 0) || f.pop();) {
                    if (1 === h.nodeType && ++b && h === t) {
                      c[e] = [x, p, b];
                      break;
                    }
                  }
                } else if (y && (b = p = (u = (c = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b) for (; (h = ++p && h && h[g] || (b = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [x, b]), h !== t));) {
                  ;
                }

                return (b -= r) === i || b % i == 0 && b / i >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var n,
                r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
              for (var i, o = r(e, t), a = o.length; a--;) {
                e[i = P(e, o[a])] = !(n[i] = o[a]);
              }
            }) : function (e) {
              return r(e, 0, n);
            }) : r;
          }
        },
        pseudos: {
          not: ue(function (e) {
            var t = [],
                n = [],
                i = s(e.replace(z, "$1"));
            return i[w] ? ue(function (e, t, n, r) {
              for (var o, a = i(e, null, r, []), s = e.length; s--;) {
                (o = a[s]) && (e[s] = !(t[s] = o));
              }
            }) : function (e, r, o) {
              return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
            };
          }),
          has: ue(function (e) {
            return function (t) {
              return se(e, t).length > 0;
            };
          }),
          contains: ue(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || r(t)).indexOf(e) > -1;
            };
          }),
          lang: ue(function (e) {
            return Y.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;

              do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === f;
          },
          focus: function focus(e) {
            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !i.pseudos.empty(e);
          },
          header: function header(e) {
            return Q.test(e.nodeName);
          },
          input: function input(e) {
            return X.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) {
              e.push(i);
            }

            return e;
          }),
          gt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) {
              e.push(i);
            }

            return e;
          })
        }
      }).pseudos.nth = i.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        i.pseudos[t] = pe(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        i.pseudos[t] = fe(t);
      }

      function ye() {}

      function be(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) {
          i += e[t].value;
        }

        return i;
      }

      function we(e, t, n) {
        var i = t.dir,
            r = t.next,
            o = r || i,
            a = n && "parentNode" === o,
            s = _++;
        return t.first ? function (t, n, r) {
          for (; t = t[i];) {
            if (1 === t.nodeType || a) return e(t, n, r);
          }

          return !1;
        } : function (t, n, l) {
          var u,
              c,
              d,
              h = [x, s];

          if (l) {
            for (; t = t[i];) {
              if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
            }
          } else for (; t = t[i];) {
            if (1 === t.nodeType || a) if (c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
              if ((u = c[o]) && u[0] === x && u[1] === s) return h[2] = u[2];
              if (c[o] = h, h[2] = e(t, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function Ce(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var r = e.length; r--;) {
            if (!e[r](t, n, i)) return !1;
          }

          return !0;
        } : e[0];
      }

      function xe(e, t, n, i, r) {
        for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) {
          (o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
        }

        return a;
      }

      function _e(e, t, n, i, r, o) {
        return i && !i[w] && (i = _e(i)), r && !r[w] && (r = _e(r, o)), ue(function (o, a, s, l) {
          var u,
              c,
              d,
              h = [],
              p = [],
              f = a.length,
              g = o || function (e, t, n) {
            for (var i = 0, r = t.length; i < r; i++) {
              se(e, t[i], n);
            }

            return n;
          }(t || "*", s.nodeType ? [s] : s, []),
              m = !e || !o && t ? g : xe(g, h, e, s, l),
              v = n ? r || (o ? e : f || i) ? [] : a : m;

          if (n && n(m, v, s, l), i) for (u = xe(v, p), i(u, [], s, l), c = u.length; c--;) {
            (d = u[c]) && (v[p[c]] = !(m[p[c]] = d));
          }

          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], c = v.length; c--;) {
                  (d = v[c]) && u.push(m[c] = d);
                }

                r(null, v = [], u, l);
              }

              for (c = v.length; c--;) {
                (d = v[c]) && (u = r ? P(o, d) : h[c]) > -1 && (o[u] = !(a[u] = d));
              }
            }
          } else v = xe(v === a ? v.splice(f, v.length) : v), r ? r(null, a, v, l) : M.apply(a, v);
        });
      }

      function Te(e) {
        for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = we(function (e) {
          return e === t;
        }, s, !0), d = we(function (e) {
          return P(t, e) > -1;
        }, s, !0), h = [function (e, n, i) {
          var r = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
          return t = null, r;
        }]; l < o; l++) {
          if (n = i.relative[e[l].type]) h = [we(Ce(h), n)];else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (r = ++l; r < o && !i.relative[e[r].type]; r++) {
                ;
              }

              return _e(l > 1 && Ce(h), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(z, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te(e = e.slice(r)), r < o && be(e));
            }

            h.push(n);
          }
        }

        return Ce(h);
      }

      return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye(), a = se.tokenize = function (e, t) {
        var n,
            r,
            o,
            a,
            s,
            l,
            u,
            c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);

        for (s = e, l = [], u = i.preFilter; s;) {
          for (a in n && !(r = U.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), o.push({
            value: n,
            type: r[0].replace(z, " ")
          }), s = s.slice(n.length)), i.filter) {
            !(r = K[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
              value: n,
              type: a,
              matches: r
            }), s = s.slice(n.length));
          }

          if (!n) break;
        }

        return t ? s.length : s ? se.error(e) : k(e, l).slice(0);
      }, s = se.compile = function (e, t) {
        var n,
            r = [],
            o = [],
            s = S[e + " "];

        if (!s) {
          for (t || (t = a(e)), n = t.length; n--;) {
            (s = Te(t[n]))[w] ? r.push(s) : o.push(s);
          }

          (s = S(e, function (e, t) {
            var n = t.length > 0,
                r = e.length > 0,
                o = function o(_o, a, s, l, c) {
              var d,
                  f,
                  m,
                  v = 0,
                  y = "0",
                  b = _o && [],
                  w = [],
                  C = u,
                  _ = _o || r && i.find.TAG("*", c),
                  T = x += null == C ? 1 : Math.random() || .1,
                  k = _.length;

              for (c && (u = a == p || a || c); y !== k && null != (d = _[y]); y++) {
                if (r && d) {
                  for (f = 0, a || d.ownerDocument == p || (h(d), s = !g); m = e[f++];) {
                    if (m(d, a || p, s)) {
                      l.push(d);
                      break;
                    }
                  }

                  c && (x = T);
                }

                n && ((d = !m && d) && v--, _o && b.push(d));
              }

              if (v += y, n && y !== v) {
                for (f = 0; m = t[f++];) {
                  m(b, w, a, s);
                }

                if (_o) {
                  if (v > 0) for (; y--;) {
                    b[y] || w[y] || (w[y] = I.call(l));
                  }
                  w = xe(w);
                }

                M.apply(l, w), c && !_o && w.length > 0 && v + t.length > 1 && se.uniqueSort(l);
              }

              return c && (x = T, u = C), b;
            };

            return n ? ue(o) : o;
          }(o, r))).selector = e;
        }

        return s;
      }, l = se.select = function (e, t, n, r) {
        var o,
            l,
            u,
            c,
            d,
            h = "function" == typeof e && e,
            p = !r && a(e = h.selector || e);

        if (n = n || [], 1 === p.length) {
          if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
            if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
            h && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (o = K.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);) {
            if ((d = i.find[c]) && (r = d(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
              if (l.splice(o, 1), !(e = r.length && be(l))) return M.apply(n, r), n;
              break;
            }
          }
        }

        return (h || s(e, p))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
      }, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
      }), ce(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || de("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ce(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || de("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ce(function (e) {
        return null == e.getAttribute("disabled");
      }) || de($, function (e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }), se;
    }(n);

    _.find = k, _.expr = k.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = k.uniqueSort, _.text = k.getText, _.isXMLDoc = k.isXML, _.contains = k.contains, _.escapeSelector = k.escape;

    var S = function S(e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (r && _(e).is(n)) break;
          i.push(e);
        }
      }

      return i;
    },
        A = function A(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        E = _.expr.match.needsContext;

    function D(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, t, n) {
      return v(t) ? _.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      }) : t.nodeType ? _.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? _.grep(e, function (e) {
        return c.call(t, e) > -1 !== n;
      }) : _.filter(t, e, n);
    }

    _.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, _.fn.extend({
      find: function find(e) {
        var t,
            n,
            i = this.length,
            r = this;
        if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
          for (t = 0; t < i; t++) {
            if (_.contains(r[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < i; t++) {
          _.find(e, r[t], n);
        }

        return i > 1 ? _.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(I(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(I(this, e || [], !0));
      },
      is: function is(e) {
        return !!I(this, "string" == typeof e && E.test(e) ? _(e) : e || [], !1).length;
      }
    });
    var N,
        M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (e, t, n) {
      var i, r;
      if (!e) return this;

      if (n = n || N, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : M.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (i[1]) {
          if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), L.test(i[1]) && _.isPlainObject(t)) for (i in t) {
            v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          }
          return this;
        }

        return (r = b.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
    }).prototype = _.fn, N = _(b);
    var q = /^(?:parents|prev(?:Until|All))/,
        P = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function $(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    _.fn.extend({
      has: function has(e) {
        var t = _(e, this),
            n = t.length;

        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (_.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            i = 0,
            r = this.length,
            o = [],
            a = "string" != typeof e && _(e);

        if (!E.test(e)) for (; i < r; i++) {
          for (n = this[i]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
          }
        }
        return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? c.call(_(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), _.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return S(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return S(e, "parentNode", n);
      },
      next: function next(e) {
        return $(e, "nextSibling");
      },
      prev: function prev(e) {
        return $(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return S(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return S(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return S(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return S(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return A((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return A(e.firstChild);
      },
      contents: function contents(e) {
        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
      }
    }, function (e, t) {
      _.fn[e] = function (n, i) {
        var r = _.map(this, t, n);

        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), this.length > 1 && (P[e] || _.uniqueSort(r), q.test(e) && r.reverse()), this.pushStack(r);
      };
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function O(e) {
      return e;
    }

    function R(e) {
      throw e;
    }

    function H(e, t, n, i) {
      var r;

      try {
        e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    _.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return _.each(e.match(j) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : _.extend({}, e);

      var t,
          n,
          i,
          r,
          o = [],
          a = [],
          s = -1,
          l = function l() {
        for (r = r || e.once, i = t = !0; a.length; s = -1) {
          for (n = a.shift(); ++s < o.length;) {
            !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
          }
        }

        e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
      },
          u = {
        add: function add() {
          return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
            _.each(n, function (n, i) {
              v(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== x(i) && t(i);
            });
          }(arguments), n && !t && l()), this;
        },
        remove: function remove() {
          return _.each(arguments, function (e, t) {
            for (var n; (n = _.inArray(t, o, n)) > -1;) {
              o.splice(n, 1), n <= s && s--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? _.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function empty() {
          return o && (o = []), this;
        },
        disable: function disable() {
          return r = a = [], o = n = "", this;
        },
        disabled: function disabled() {
          return !o;
        },
        lock: function lock() {
          return r = a = [], n || t || (o = n = ""), this;
        },
        locked: function locked() {
          return !!r;
        },
        fireWith: function fireWith(e, n) {
          return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this;
        },
        fire: function fire() {
          return u.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!i;
        }
      };

      return u;
    }, _.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
            i = "pending",
            r = {
          state: function state() {
            return i;
          },
          always: function always() {
            return o.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return r.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return _.Deferred(function (n) {
              _.each(t, function (t, i) {
                var r = v(e[i[4]]) && e[i[4]];
                o[i[1]](function () {
                  var e = r && r.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, i, r) {
            var o = 0;

            function a(e, t, i, r) {
              return function () {
                var s = this,
                    l = arguments,
                    u = function u() {
                  var n, u;

                  if (!(e < o)) {
                    if ((n = i.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    u = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, v(u) ? r ? u.call(n, a(o, t, O, r), a(o, t, R, r)) : (o++, u.call(n, a(o, t, O, r), a(o, t, R, r), a(o, t, O, t.notifyWith))) : (i !== O && (s = void 0, l = [n]), (r || t.resolveWith)(s, l));
                  }
                },
                    c = r ? u : function () {
                  try {
                    u();
                  } catch (n) {
                    _.Deferred.exceptionHook && _.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (i !== R && (s = void 0, l = [n]), t.rejectWith(s, l));
                  }
                };

                e ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), n.setTimeout(c));
              };
            }

            return _.Deferred(function (n) {
              t[0][3].add(a(0, n, v(r) ? r : O, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : O)), t[2][3].add(a(0, n, v(i) ? i : R));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? _.extend(e, r) : r;
          }
        },
            o = {};
        return _.each(t, function (e, n) {
          var a = n[2],
              s = n[5];
          r[n[1]] = a.add, s && a.add(function () {
            i = s;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[n[0] + "With"] = a.fireWith;
        }), r.promise(o), e && e.call(o, o), o;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            i = Array(n),
            r = s.call(arguments),
            o = _.Deferred(),
            a = function a(e) {
          return function (n) {
            i[e] = this, r[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(i, r);
          };
        };

        if (t <= 1 && (H(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();

        for (; n--;) {
          H(r[n], a(n), o.reject);
        }

        return o.promise();
      }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, _.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };

    var z = _.Deferred();

    function U() {
      b.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), _.ready();
    }

    _.fn.ready = function (e) {
      return z.then(e)["catch"](function (e) {
        _.readyException(e);
      }), this;
    }, _.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || z.resolveWith(b, [_]));
      }
    }), _.ready.then = z.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(_.ready) : (b.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));

    var B = function B(e, t, n, i, r, o, a) {
      var s = 0,
          l = e.length,
          u = null == n;
      if ("object" === x(n)) for (s in r = !0, n) {
        B(e, t, s, n[s], !0, o, a);
      } else if (void 0 !== i && (r = !0, v(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function t(e, _t2, n) {
        return u.call(_(e), n);
      })), t)) for (; s < l; s++) {
        t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      }
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
        W = /^-ms-/,
        G = /-([a-z])/g;

    function Y(e, t) {
      return t.toUpperCase();
    }

    function K(e) {
      return e.replace(W, "ms-").replace(G, Y);
    }

    var V = function V(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function X() {
      this.expando = _.expando + X.uid++;
    }

    X.uid = 1, X.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var i,
            r = this.cache(e);
        if ("string" == typeof t) r[K(t)] = n;else for (i in t) {
          r[K(i)] = t[i];
        }
        return r;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            i = e[this.expando];

        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(j) || []).length;

            for (; n--;) {
              delete i[t[n]];
            }
          }

          (void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !_.isEmptyObject(t);
      }
    };
    var Q = new X(),
        Z = new X(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}

        Z.set(e, t, n);
      } else n = void 0;
      return n;
    }

    _.extend({
      hasData: function hasData(e) {
        return Z.hasData(e) || Q.hasData(e);
      },
      data: function data(e, t, n) {
        return Z.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        Z.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return Q.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        Q.remove(e, t);
      }
    }), _.fn.extend({
      data: function data(e, t) {
        var n,
            i,
            r,
            o = this[0],
            a = o && o.attributes;

        if (void 0 === e) {
          if (this.length && (r = Z.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
            for (n = a.length; n--;) {
              a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = K(i.slice(5)), te(o, i, r[i]));
            }

            Q.set(o, "hasDataAttrs", !0);
          }

          return r;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Z.set(this, e);
        }) : B(this, function (t) {
          var n;
          if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
          this.each(function () {
            Z.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Z.remove(this, e);
        });
      }
    }), _.extend({
      queue: function queue(e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, _.makeArray(n)) : i.push(n)), i || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = _.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = _._queueHooks(e, t);

        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
          _.dequeue(e, t);
        }, o)), !i && o && o.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return Q.get(e, n) || Q.access(e, n, {
          empty: _.Callbacks("once memory").add(function () {
            Q.remove(e, [t + "queue", n]);
          })
        });
      }
    }), _.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = _.queue(this, e, t);

          _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          _.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            i = 1,
            r = _.Deferred(),
            o = this,
            a = this.length,
            s = function s() {
          --i || r.resolveWith(o, [o]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
          (n = Q.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
        }

        return s(), r.promise(t);
      }
    });

    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        oe = b.documentElement,
        ae = function ae(e) {
      return _.contains(e.ownerDocument, e);
    },
        se = {
      composed: !0
    };

    oe.getRootNode && (ae = function ae(e) {
      return _.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
    });

    var le = function le(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === _.css(e, "display");
    };

    function ue(e, t, n, i) {
      var r,
          o,
          a = 20,
          s = i ? function () {
        return i.cur();
      } : function () {
        return _.css(e, t, "");
      },
          l = s(),
          u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (_.cssNumber[t] || "px" !== u && +l) && ie.exec(_.css(e, t));

      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; a--;) {
          _.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
        }

        c *= 2, _.style(e, t, c + u), n = n || [];
      }

      return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r;
    }

    var ce = {};

    function de(e) {
      var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = ce[i];
      return r || (t = n.body.appendChild(n.createElement(i)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ce[i] = r, r);
    }

    function he(e, t) {
      for (var n, i, r = [], o = 0, a = e.length; o < a; o++) {
        (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Q.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && le(i) && (r[o] = de(i))) : "none" !== n && (r[o] = "none", Q.set(i, "display", n)));
      }

      for (o = 0; o < a; o++) {
        null != r[o] && (e[o].style.display = r[o]);
      }

      return e;
    }

    _.fn.extend({
      show: function show() {
        return he(this, !0);
      },
      hide: function hide() {
        return he(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          le(this) ? _(this).show() : _(this).hide();
        });
      }
    });

    var pe,
        fe,
        ge = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
    pe = b.createDocumentFragment().appendChild(b.createElement("div")), (fe = b.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), pe.appendChild(fe), m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", m.option = !!pe.lastChild;
    var ye = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? _.merge([e], n) : n;
    }

    function we(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
    }

    ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Ce = /<|&#?\w+;/;

    function xe(e, t, n, i, r) {
      for (var o, a, s, l, u, c, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++) {
        if ((o = e[p]) || 0 === o) if ("object" === x(o)) _.merge(h, o.nodeType ? [o] : o);else if (Ce.test(o)) {
          for (a = a || d.appendChild(t.createElement("div")), s = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[s] || ye._default, a.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], c = l[0]; c--;) {
            a = a.lastChild;
          }

          _.merge(h, a.childNodes), (a = d.firstChild).textContent = "";
        } else h.push(t.createTextNode(o));
      }

      for (d.textContent = "", p = 0; o = h[p++];) {
        if (i && _.inArray(o, i) > -1) r && r.push(o);else if (u = ae(o), a = be(d.appendChild(o), "script"), u && we(a), n) for (c = 0; o = a[c++];) {
          ve.test(o.type || "") && n.push(o);
        }
      }

      return d;
    }

    var _e = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ke = /^([^.]*)(?:\.(.+)|)/;

    function Se() {
      return !0;
    }

    function Ae() {
      return !1;
    }

    function Ee(e, t) {
      return e === function () {
        try {
          return b.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function De(e, t, n, i, r, o) {
      var a, s;

      if ("object" == _typeof(t)) {
        for (s in "string" != typeof n && (i = i || n, n = void 0), t) {
          De(e, s, n, i, t[s], o);
        }

        return e;
      }

      if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ae;else if (!r) return e;
      return 1 === o && (a = r, (r = function r(e) {
        return _().off(e), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = _.guid++)), e.each(function () {
        _.event.add(this, t, r, i, n);
      });
    }

    function Le(e, t, n) {
      n ? (Q.set(e, t, !1), _.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var i,
              r,
              o = Q.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (o.length) (_.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = s.call(arguments), Q.set(this, t, o), i = n(this, t), this[t](), o !== (r = Q.get(this, t)) || i ? Q.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value;
          } else o.length && (Q.set(this, t, {
            value: _.event.trigger(_.extend(o[0], _.Event.prototype), o.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === Q.get(e, t) && _.event.add(e, t, Se);
    }

    _.event = {
      global: {},
      add: function add(e, t, n, i, r) {
        var o,
            a,
            s,
            l,
            u,
            c,
            d,
            h,
            p,
            f,
            g,
            m = Q.get(e);
        if (V(e)) for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(oe, r), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function (t) {
          return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0;
        }), u = (t = (t || "").match(j) || [""]).length; u--;) {
          p = g = (s = ke.exec(t[u]) || [])[1], f = (s[2] || "").split(".").sort(), p && (d = _.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = _.event.special[p] || {}, c = _.extend({
            type: p,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: r,
            needsContext: r && _.expr.match.needsContext.test(r),
            namespace: f.join(".")
          }, o), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), _.event.global[p] = !0);
        }
      },
      remove: function remove(e, t, n, i, r) {
        var o,
            a,
            s,
            l,
            u,
            c,
            d,
            h,
            p,
            f,
            g,
            m = Q.hasData(e) && Q.get(e);

        if (m && (l = m.events)) {
          for (u = (t = (t || "").match(j) || [""]).length; u--;) {
            if (p = g = (s = ke.exec(t[u]) || [])[1], f = (s[2] || "").split(".").sort(), p) {
              for (d = _.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) {
                c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
              }

              a && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || _.removeEvent(e, p, m.handle), delete l[p]);
            } else for (p in l) {
              _.event.remove(e, p + t[u], n, i, !0);
            }
          }

          _.isEmptyObject(l) && Q.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            i,
            r,
            o,
            a,
            s = new Array(arguments.length),
            l = _.event.fix(e),
            u = (Q.get(this, "events") || Object.create(null))[l.type] || [],
            c = _.event.special[l.type] || {};

        for (s[0] = l, t = 1; t < arguments.length; t++) {
          s[t] = arguments[t];
        }

        if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
          for (a = _.event.handlers.call(this, l, u), t = 0; (r = a[t++]) && !l.isPropagationStopped();) {
            for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) {
              l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
            }
          }

          return c.postDispatch && c.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            i,
            r,
            o,
            a,
            s = [],
            l = t.delegateCount,
            u = e.target;
        if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) {
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], a = {}, n = 0; n < l; n++) {
              void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? _(r, this).index(u) > -1 : _.find(r, this, null, [u]).length), a[r] && o.push(i);
            }

            o.length && s.push({
              elem: u,
              handlers: o
            });
          }
        }
        return u = this, l < t.length && s.push({
          elem: u,
          handlers: t.slice(l)
        }), s;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(_.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: v(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[_.expando] ? e : new _.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click", Se), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return ge.test(t.type) && t.click && D(t, "input") && Q.get(t, "click") || D(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, _.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, _.Event = function (e, t) {
      if (!(this instanceof _.Event)) return new _.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0;
    }, _.Event.prototype = {
      constructor: _.Event,
      isDefaultPrevented: Ae,
      isPropagationStopped: Ae,
      isImmediatePropagationStopped: Ae,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, _.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, _.event.addProp), _.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      _.event.special[e] = {
        setup: function setup() {
          return Le(this, e, Ee), !1;
        },
        trigger: function trigger() {
          return Le(this, e), !0;
        },
        delegateType: t
      };
    }), _.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      _.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n,
              i = this,
              r = e.relatedTarget,
              o = e.handleObj;
          return r && (r === i || _.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), _.fn.extend({
      on: function on(e, t, n, i) {
        return De(this, e, t, n, i);
      },
      one: function one(e, t, n, i) {
        return De(this, e, t, n, i, 1);
      },
      off: function off(e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

        if ("object" == _typeof(e)) {
          for (r in e) {
            this.off(r, t, e[r]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each(function () {
          _.event.remove(this, e, n, t);
        });
      }
    });
    var Ie = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
      return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e;
    }

    function Pe(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function $e(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function je(e, t) {
      var n, i, r, o, a, s;

      if (1 === t.nodeType) {
        if (Q.hasData(e) && (s = Q.get(e).events)) for (r in Q.remove(t, "handle events"), s) {
          for (n = 0, i = s[r].length; n < i; n++) {
            _.event.add(t, r, s[r][n]);
          }
        }
        Z.hasData(e) && (o = Z.access(e), a = _.extend({}, o), Z.set(t, a));
      }
    }

    function Oe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function Re(e, t, n, i) {
      t = l(t);
      var r,
          o,
          a,
          s,
          u,
          c,
          d = 0,
          h = e.length,
          p = h - 1,
          f = t[0],
          g = v(f);
      if (g || h > 1 && "string" == typeof f && !m.checkClone && Ne.test(f)) return e.each(function (r) {
        var o = e.eq(r);
        g && (t[0] = f.call(this, r, o.html())), Re(o, t, n, i);
      });

      if (h && (o = (r = xe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
        for (s = (a = _.map(be(r, "script"), Pe)).length; d < h; d++) {
          u = r, d !== p && (u = _.clone(u, !0, !0), s && _.merge(a, be(u, "script"))), n.call(e[d], u, d);
        }

        if (s) for (c = a[a.length - 1].ownerDocument, _.map(a, $e), d = 0; d < s; d++) {
          u = a[d], ve.test(u.type || "") && !Q.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && !u.noModule && _._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }, c) : C(u.textContent.replace(Me, ""), u, c));
        }
      }

      return e;
    }

    function He(e, t, n) {
      for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
        n || 1 !== i.nodeType || _.cleanData(be(i)), i.parentNode && (n && ae(i) && we(be(i, "script")), i.parentNode.removeChild(i));
      }

      return e;
    }

    _.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e;
      },
      clone: function clone(e, t, n) {
        var i,
            r,
            o,
            a,
            s = e.cloneNode(!0),
            l = ae(e);
        if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (a = be(s), i = 0, r = (o = be(e)).length; i < r; i++) {
          Oe(o[i], a[i]);
        }
        if (t) if (n) for (o = o || be(e), a = a || be(s), i = 0, r = o.length; i < r; i++) {
          je(o[i], a[i]);
        } else je(e, s);
        return (a = be(s, "script")).length > 0 && we(a, !l && be(e, "script")), s;
      },
      cleanData: function cleanData(e) {
        for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++) {
          if (V(n)) {
            if (t = n[Q.expando]) {
              if (t.events) for (i in t.events) {
                r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
              }
              n[Q.expando] = void 0;
            }

            n[Z.expando] && (n[Z.expando] = void 0);
          }
        }
      }
    }), _.fn.extend({
      detach: function detach(e) {
        return He(this, e, !0);
      },
      remove: function remove(e) {
        return He(this, e);
      },
      text: function text(e) {
        return B(this, function (e) {
          return void 0 === e ? _.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return Re(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return Re(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (_.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return _.clone(this, e, t);
        });
      },
      html: function html(e) {
        return B(this, function (e) {
          var t = this[0] || {},
              n = 0,
              i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Ie.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = _.htmlPrefilter(e);

            try {
              for (; n < i; n++) {
                1 === (t = this[n] || {}).nodeType && (_.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return Re(this, arguments, function (t) {
          var n = this.parentNode;
          _.inArray(this, e) < 0 && (_.cleanData(be(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), _.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      _.fn[e] = function (e) {
        for (var n, i = [], r = _(e), o = r.length - 1, a = 0; a <= o; a++) {
          n = a === o ? this : this.clone(!0), _(r[a])[t](n), u.apply(i, n.get());
        }

        return this.pushStack(i);
      };
    });

    var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        ze = function ze(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        Ue = function Ue(e, t, n) {
      var i,
          r,
          o = {};

      for (r in t) {
        o[r] = e.style[r], e.style[r] = t[r];
      }

      for (r in i = n.call(e), t) {
        e.style[r] = o[r];
      }

      return i;
    },
        Be = new RegExp(re.join("|"), "i");

    function We(e, t, n) {
      var i,
          r,
          o,
          a,
          s = e.style;
      return (n = n || ze(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = _.style(e, t)), !m.pixelBoxStyles() && Fe.test(a) && Be.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }

    function Ge(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (c) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(u).appendChild(c);
          var e = n.getComputedStyle(c);
          i = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), oe.removeChild(u), c = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var i,
          r,
          o,
          a,
          s,
          l,
          u = b.createElement("div"),
          c = b.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(m, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), r;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), a;
        },
        pixelPosition: function pixelPosition() {
          return e(), i;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), o;
        },
        reliableTrDimensions: function reliableTrDimensions() {
          var e, t, i, r;
          return null == s && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", oe.appendChild(e).appendChild(t).appendChild(i), r = n.getComputedStyle(t), s = parseInt(r.height) > 3, oe.removeChild(e)), s;
        }
      }));
    }();
    var Ye = ["Webkit", "Moz", "ms"],
        Ke = b.createElement("div").style,
        Ve = {};

    function Xe(e) {
      var t = _.cssProps[e] || Ve[e];
      return t || (e in Ke ? e : Ve[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) {
          if ((e = Ye[n] + t) in Ke) return e;
        }
      }(e) || e);
    }

    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        et = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function tt(e, t, n) {
      var i = ie.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function nt(e, t, n, i, r, o) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          l = 0;
      if (n === (i ? "border" : "content")) return 0;

      for (; a < 4; a += 2) {
        "margin" === n && (l += _.css(e, n + re[a], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + re[a], !0, r)), "margin" !== n && (l -= _.css(e, "border" + re[a] + "Width", !0, r))) : (l += _.css(e, "padding" + re[a], !0, r), "padding" !== n ? l += _.css(e, "border" + re[a] + "Width", !0, r) : s += _.css(e, "border" + re[a] + "Width", !0, r));
      }

      return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l;
    }

    function it(e, t, n) {
      var i = ze(e),
          r = (!m.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
          o = r,
          a = We(e, t, i),
          s = "offset" + t[0].toUpperCase() + t.slice(1);

      if (Fe.test(a)) {
        if (!n) return a;
        a = "auto";
      }

      return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && D(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === _.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === _.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + nt(e, t, n || (r ? "border" : "content"), o, i, a) + "px";
    }

    function rt(e, t, n, i, r) {
      return new rt.prototype.init(e, t, n, i, r);
    }

    _.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = We(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
              o,
              a,
              s = K(t),
              l = Ze.test(t),
              u = e.style;
          if (l || (t = Xe(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
          "string" === (o = _typeof(n)) && (r = ie.exec(n)) && r[1] && (n = ue(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (_.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
        }
      },
      css: function css(e, t, n, i) {
        var r,
            o,
            a,
            s = K(t);
        return Ze.test(t) || (t = Xe(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = We(e, t, i)), "normal" === r && t in et && (r = et[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
      }
    }), _.each(["height", "width"], function (e, t) {
      _.cssHooks[t] = {
        get: function get(e, n, i) {
          if (n) return !Qe.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : Ue(e, Je, function () {
            return it(e, t, i);
          });
        },
        set: function set(e, n, i) {
          var r,
              o = ze(e),
              a = !m.scrollboxSize() && "absolute" === o.position,
              s = (a || i) && "border-box" === _.css(e, "boxSizing", !1, o),
              l = i ? nt(e, t, i, s, o) : 0;

          return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - .5)), l && (r = ie.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), tt(0, n, l);
        }
      };
    }), _.cssHooks.marginLeft = Ge(m.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), _.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      _.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
            r[e + re[i] + t] = o[i] || o[i - 2] || o[0];
          }

          return r;
        }
      }, "margin" !== e && (_.cssHooks[e + t].set = tt);
    }), _.fn.extend({
      css: function css(e, t) {
        return B(this, function (e, t, n) {
          var i,
              r,
              o = {},
              a = 0;

          if (Array.isArray(t)) {
            for (i = ze(e), r = t.length; a < r; a++) {
              o[t[a]] = _.css(e, t[a], !1, i);
            }

            return o;
          }

          return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), _.Tween = rt, rt.prototype = {
      constructor: rt,
      init: function init(e, t, n, i, r, o) {
        this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = rt.propHooks[this.prop];
        return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = rt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this;
      }
    }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, _.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, _.fx = rt.prototype.init, _.fx.step = {};
    var ot,
        at,
        st = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ut() {
      at && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, _.fx.interval), _.fx.tick());
    }

    function ct() {
      return n.setTimeout(function () {
        ot = void 0;
      }), ot = Date.now();
    }

    function dt(e, t) {
      var n,
          i = 0,
          r = {
        height: e
      };

      for (t = t ? 1 : 0; i < 4; i += 2 - t) {
        r["margin" + (n = re[i])] = r["padding" + n] = e;
      }

      return t && (r.opacity = r.width = e), r;
    }

    function ht(e, t, n) {
      for (var i, r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = r.length; o < a; o++) {
        if (i = r[o].call(n, t, e)) return i;
      }
    }

    function pt(e, t, n) {
      var i,
          r,
          o = 0,
          a = pt.prefilters.length,
          s = _.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (r) return !1;

        for (var t = ot || ct(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) {
          u.tweens[o].run(i);
        }

        return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
      },
          u = s.promise({
        elem: e,
        props: _.extend({}, t),
        opts: _.extend(!0, {
          specialEasing: {},
          easing: _.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ot || ct(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var i = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);

          return u.tweens.push(i), i;
        },
        stop: function stop(t) {
          var n = 0,
              i = t ? u.tweens.length : 0;
          if (r) return this;

          for (r = !0; n < i; n++) {
            u.tweens[n].run(1);
          }

          return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
        }
      }),
          c = u.props;

      for (!function (e, t) {
        var n, i, r, o, a;

        for (n in e) {
          if (r = t[i = K(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = _.cssHooks[i]) && ("expand" in a)) for (n in o = a.expand(o), delete e[i], o) {
            (n in e) || (e[n] = o[n], t[n] = r);
          } else t[i] = r;
        }
      }(c, u.opts.specialEasing); o < a; o++) {
        if (i = pt.prefilters[o].call(u, e, c, u.opts)) return v(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
      }

      return _.map(c, ht, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u;
    }

    _.Animation = _.extend(pt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        v(e) ? (t = e, e = ["*"]) : e = e.match(j);

        for (var n, i = 0, r = e.length; i < r; i++) {
          n = e[i], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var i,
            r,
            o,
            a,
            s,
            l,
            u,
            c,
            d = "width" in t || "height" in t,
            h = this,
            p = {},
            f = e.style,
            g = e.nodeType && le(e),
            m = Q.get(e, "fxshow");

        for (i in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s();
        }), a.unqueued++, h.always(function () {
          h.always(function () {
            a.unqueued--, _.queue(e, "fx").length || a.empty.fire();
          });
        })), t) {
          if (r = t[i], st.test(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
              if ("show" !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }

            p[i] = m && m[i] || _.style(e, i);
          }
        }

        if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(p)) for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = m && m.display) && (u = Q.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (he([e], !0), u = e.style.display || u, c = _.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (h.done(function () {
          f.display = u;
        }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function () {
          f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        })), l = !1, p) {
          l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
            display: u
          }), o && (m.hidden = !g), g && he([e], !0), h.done(function () {
            for (i in g || he([e]), Q.remove(e, "fxshow"), p) {
              _.style(e, i, p[i]);
            }
          })), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
      }
    }), _.speed = function (e, t, n) {
      var i = e && "object" == _typeof(e) ? _.extend({}, e) : {
        complete: n || !n && t || v(e) && e,
        duration: e,
        easing: n && t || t && !v(t) && t
      };
      return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        v(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
      }, i;
    }, _.fn.extend({
      fadeTo: function fadeTo(e, t, n, i) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i);
      },
      animate: function animate(e, t, n, i) {
        var r = _.isEmptyObject(e),
            o = _.speed(t, n, i),
            a = function a() {
          var t = pt(this, _.extend({}, e), o);
          (r || Q.get(this, "finish")) && t.stop(!0);
        };

        return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function stop(e, t, n) {
        var i = function i(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              r = null != e && e + "queueHooks",
              o = _.timers,
              a = Q.get(this);
          if (r) a[r] && a[r].stop && i(a[r]);else for (r in a) {
            a[r] && a[r].stop && lt.test(r) && i(a[r]);
          }

          for (r = o.length; r--;) {
            o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
          }

          !t && n || _.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = Q.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = _.timers,
              a = i ? i.length : 0;

          for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          }

          for (t = 0; t < a; t++) {
            i[t] && i[t].finish && i[t].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), _.each(["toggle", "show", "hide"], function (e, t) {
      var n = _.fn[t];

      _.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r);
      };
    }), _.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      _.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i);
      };
    }), _.timers = [], _.fx.tick = function () {
      var e,
          t = 0,
          n = _.timers;

      for (ot = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || _.fx.stop(), ot = void 0;
    }, _.fx.timer = function (e) {
      _.timers.push(e), _.fx.start();
    }, _.fx.interval = 13, _.fx.start = function () {
      at || (at = !0, ut());
    }, _.fx.stop = function () {
      at = null;
    }, _.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, _.fn.delay = function (e, t) {
      return e = _.fx && _.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, i) {
        var r = n.setTimeout(t, e);

        i.stop = function () {
          n.clearTimeout(r);
        };
      });
    }, function () {
      var e = b.createElement("input"),
          t = b.createElement("select").appendChild(b.createElement("option"));
      e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value;
    }();
    var ft,
        gt = _.expr.attrHandle;
    _.fn.extend({
      attr: function attr(e, t) {
        return B(this, _.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          _.removeAttr(this, e);
        });
      }
    }), _.extend({
      attr: function attr(e, t, n) {
        var i,
            r,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!m.radioValue && "radio" === t && D(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            i = 0,
            r = t && t.match(j);
        if (r && 1 === e.nodeType) for (; n = r[i++];) {
          e.removeAttribute(n);
        }
      }
    }), ft = {
      set: function set(e, t, n) {
        return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = gt[t] || _.find.attr;

      gt[t] = function (e, t, i) {
        var r,
            o,
            a = t.toLowerCase();
        return i || (o = gt[a], gt[a] = r, r = null != n(e, t, i) ? a : null, gt[a] = o), r;
      };
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
      return (e.match(j) || []).join(" ");
    }

    function bt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function wt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || [];
    }

    _.fn.extend({
      prop: function prop(e, t) {
        return B(this, _.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[_.propFix[e] || e];
        });
      }
    }), _.extend({
      prop: function prop(e, t, n) {
        var i,
            r,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = _.find.attr(e, "tabindex");

            return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), m.optSelected || (_.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      _.propFix[this.toLowerCase()] = this;
    }), _.fn.extend({
      addClass: function addClass(e) {
        var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
        if (v(e)) return this.each(function (t) {
          _(this).addClass(e.call(this, t, bt(this)));
        });
        if ((t = wt(e)).length) for (; n = this[l++];) {
          if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
            for (a = 0; o = t[a++];) {
              i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            }

            r !== (s = yt(i)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
        if (v(e)) return this.each(function (t) {
          _(this).removeClass(e.call(this, t, bt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = wt(e)).length) for (; n = this[l++];) {
          if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
            for (a = 0; o = t[a++];) {
              for (; i.indexOf(" " + o + " ") > -1;) {
                i = i.replace(" " + o + " ", " ");
              }
            }

            r !== (s = yt(i)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            i = "string" === n || Array.isArray(e);

        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
          _(this).toggleClass(e.call(this, n, bt(this), t), t);
        }) : this.each(function () {
          var t, r, o, a;
          if (i) for (r = 0, o = _(this), a = wt(e); t = a[r++];) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = bt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            i = 0;

        for (t = " " + e + " "; n = this[i++];) {
          if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var Ct = /\r/g;
    _.fn.extend({
      val: function val(e) {
        var t,
            n,
            i,
            r = this[0];
        return arguments.length ? (i = v(e), this.each(function (n) {
          var r;
          1 === this.nodeType && (null == (r = i ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function (e) {
            return null == e ? "" : e + "";
          })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
        })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0;
      }
    }), _.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = _.find.attr(e, "value");

            return null != t ? t : yt(_.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                i,
                r = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                l = a ? o + 1 : r.length;

            for (i = o < 0 ? l : a ? o : 0; i < l; i++) {
              if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                if (t = _(n).val(), a) return t;
                s.push(t);
              }
            }

            return s;
          },
          set: function set(e, t) {
            for (var n, i, r = e.options, o = _.makeArray(t), a = r.length; a--;) {
              ((i = r[a]).selected = _.inArray(_.valHooks.option.get(i), o) > -1) && (n = !0);
            }

            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }), _.each(["radio", "checkbox"], function () {
      _.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1;
        }
      }, m.checkOn || (_.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), m.focusin = "onfocusin" in n;

    var xt = /^(?:focusinfocus|focusoutblur)$/,
        _t = function _t(e) {
      e.stopPropagation();
    };

    _.extend(_.event, {
      trigger: function trigger(e, t, i, r) {
        var o,
            a,
            s,
            l,
            u,
            c,
            d,
            h,
            f = [i || b],
            g = p.call(e, "type") ? e.type : e,
            m = p.call(e, "namespace") ? e.namespace.split(".") : [];

        if (a = h = s = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(g + _.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[_.expando] ? e : new _.Event(g, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : _.makeArray(t, [e]), d = _.event.special[g] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
          if (!r && !d.noBubble && !y(i)) {
            for (l = d.delegateType || g, xt.test(l + g) || (a = a.parentNode); a; a = a.parentNode) {
              f.push(a), s = a;
            }

            s === (i.ownerDocument || b) && f.push(s.defaultView || s.parentWindow || n);
          }

          for (o = 0; (a = f[o++]) && !e.isPropagationStopped();) {
            h = a, e.type = o > 1 ? l : d.bindType || g, (c = (Q.get(a, "events") || Object.create(null))[e.type] && Q.get(a, "handle")) && c.apply(a, t), (c = u && a[u]) && c.apply && V(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
          }

          return e.type = g, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !V(i) || u && v(i[g]) && !y(i) && ((s = i[u]) && (i[u] = null), _.event.triggered = g, e.isPropagationStopped() && h.addEventListener(g, _t), i[g](), e.isPropagationStopped() && h.removeEventListener(g, _t), _.event.triggered = void 0, s && (i[u] = s)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var i = _.extend(new _.Event(), n, {
          type: e,
          isSimulated: !0
        });

        _.event.trigger(i, null, t);
      }
    }), _.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          _.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return _.event.trigger(e, t, n, !0);
      }
    }), m.focusin || _.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function n(e) {
        _.event.simulate(t, e.target, _.event.fix(e));
      };

      _.event.special[t] = {
        setup: function setup() {
          var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t);
          r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1);
        },
        teardown: function teardown() {
          var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t) - 1;
          r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0), Q.remove(i, t));
        }
      };
    });
    var Tt = n.location,
        kt = {
      guid: Date.now()
    },
        St = /\?/;

    _.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), t;
    };

    var At = /\[\]$/,
        Et = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function It(e, t, n, i) {
      var r;
      if (Array.isArray(t)) _.each(t, function (t, r) {
        n || At.test(e) ? i(e, r) : It(e + "[" + ("object" == _typeof(r) && null != r ? t : "") + "]", r, n, i);
      });else if (n || "object" !== x(t)) i(e, t);else for (r in t) {
        It(e + "[" + r + "]", t[r], n, i);
      }
    }

    _.param = function (e, t) {
      var n,
          i = [],
          r = function r(e, t) {
        var n = v(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
        r(this.name, this.value);
      });else for (n in e) {
        It(n, e[n], t, r);
      }
      return i.join("&");
    }, _.fn.extend({
      serialize: function serialize() {
        return _.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = _.prop(this, "elements");

          return e ? _.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !_(this).is(":disabled") && Lt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ge.test(e));
        }).map(function (e, t) {
          var n = _(this).val();

          return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(Et, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(Et, "\r\n")
          };
        }).get();
      }
    });
    var Nt = /%20/g,
        Mt = /#.*$/,
        qt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Ot = {},
        Rt = {},
        Ht = "*/".concat("*"),
        Ft = b.createElement("a");

    function zt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i,
            r = 0,
            o = t.toLowerCase().match(j) || [];
        if (v(n)) for (; i = o[r++];) {
          "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        }
      };
    }

    function Ut(e, t, n, i) {
      var r = {},
          o = e === Rt;

      function a(s) {
        var l;
        return r[s] = !0, _.each(e[s] || [], function (e, s) {
          var u = s(t, n, i);
          return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1);
        }), l;
      }

      return a(t.dataTypes[0]) || !r["*"] && a("*");
    }

    function Bt(e, t) {
      var n,
          i,
          r = _.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      }

      return i && _.extend(!0, e, i), e;
    }

    Ft.href = Tt.href, _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ht,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": _.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Bt(Bt(e, _.ajaxSettings), t) : Bt(_.ajaxSettings, e);
      },
      ajaxPrefilter: zt(Ot),
      ajaxTransport: zt(Rt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};

        var i,
            r,
            o,
            a,
            s,
            l,
            u,
            c,
            d,
            h,
            p = _.ajaxSetup({}, t),
            f = p.context || p,
            g = p.context && (f.nodeType || f.jquery) ? _(f) : _.event,
            m = _.Deferred(),
            v = _.Callbacks("once memory"),
            y = p.statusCode || {},
            w = {},
            C = {},
            x = "canceled",
            T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (u) {
              if (!a) for (a = {}; t = Pt.exec(o);) {
                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = a[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return u ? o : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == u && (p.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (u) T.always(e[T.status]);else for (t in e) {
              y[t] = [y[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || x;
            return i && i.abort(t), k(0, t), this;
          }
        };

        if (m.promise(T), p.url = ((e || p.url || Tt.href) + "").replace(jt, Tt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
          l = b.createElement("a");

          try {
            l.href = p.url, l.href = l.href, p.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host;
          } catch (e) {
            p.crossDomain = !0;
          }
        }

        if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Ut(Ot, p, t, T), u) return T;

        for (d in (c = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !$t.test(p.type), r = p.url.replace(Mt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (St.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(qt, "$1"), h = (St.test(r) ? "&" : "?") + "_=" + kt.guid++ + h), p.url = r + h), p.ifModified && (_.lastModified[r] && T.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && T.setRequestHeader("If-None-Match", _.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
          T.setRequestHeader(d, p.headers[d]);
        }

        if (p.beforeSend && (!1 === p.beforeSend.call(f, T, p) || u)) return T.abort();

        if (x = "abort", v.add(p.complete), T.done(p.success), T.fail(p.error), i = Ut(Rt, p, t, T)) {
          if (T.readyState = 1, c && g.trigger("ajaxSend", [T, p]), u) return T;
          p.async && p.timeout > 0 && (s = n.setTimeout(function () {
            T.abort("timeout");
          }, p.timeout));

          try {
            u = !1, i.send(w, k);
          } catch (e) {
            if (u) throw e;
            k(-1, e);
          }
        } else k(-1, "No Transport");

        function k(e, t, a, l) {
          var d,
              h,
              b,
              w,
              C,
              x = t;
          u || (u = !0, s && n.clearTimeout(s), i = void 0, o = l || "", T.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (w = function (e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (i) for (r in s) {
              if (s[r] && s[r].test(i)) {
                l.unshift(r);
                break;
              }
            }
            if (l[0] in n) o = l[0];else {
              for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                  o = r;
                  break;
                }

                a || (a = r);
              }

              o = o || a;
            }
            if (o) return o !== l[0] && l.unshift(o), n[o];
          }(p, T, a)), !d && _.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function () {}), w = function (e, t, n, i) {
            var r,
                o,
                a,
                s,
                l,
                u = {},
                c = e.dataTypes.slice();
            if (c[1]) for (a in e.converters) {
              u[a.toLowerCase()] = e.converters[a];
            }

            for (o = c.shift(); o;) {
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                if (!(a = u[l + " " + o] || u["* " + o])) for (r in u) {
                  if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                    !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                    break;
                  }
                }
                if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + o
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(p, w, T, d), d ? (p.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (_.lastModified[r] = C), (C = T.getResponseHeader("etag")) && (_.etag[r] = C)), 204 === e || "HEAD" === p.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, h = w.data, d = !(b = w.error))) : (b = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || x) + "", d ? m.resolveWith(f, [h, x, T]) : m.rejectWith(f, [T, x, b]), T.statusCode(y), y = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? h : b]), v.fireWith(f, [T, x]), c && (g.trigger("ajaxComplete", [T, p]), --_.active || _.event.trigger("ajaxStop")));
        }

        return T;
      },
      getJSON: function getJSON(e, t, n) {
        return _.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return _.get(e, void 0, t, "script");
      }
    }), _.each(["get", "post"], function (e, t) {
      _[t] = function (e, n, i, r) {
        return v(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({
          url: e,
          type: t,
          dataType: r,
          data: n,
          success: i
        }, _.isPlainObject(e) && e));
      };
    }), _.ajaxPrefilter(function (e) {
      var t;

      for (t in e.headers) {
        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }
    }), _._evalUrl = function (e, t, n) {
      return _.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          _.globalEval(e, t, n);
        }
      });
    }, _.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (v(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return v(e) ? this.each(function (t) {
          _(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = _(this),
              n = t.contents();

          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = v(e);
        return this.each(function (n) {
          _(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          _(this).replaceWith(this.childNodes);
        }), this;
      }
    }), _.expr.pseudos.hidden = function (e) {
      return !_.expr.pseudos.visible(e);
    }, _.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, _.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };

    var Wt = {
      0: 200,
      1223: 204
    },
        Gt = _.ajaxSettings.xhr();

    m.cors = !!Gt && "withCredentials" in Gt, m.ajax = Gt = !!Gt, _.ajaxTransport(function (e) {
      var _t3, i;

      if (m.cors || Gt && !e.crossDomain) return {
        send: function send(r, o) {
          var a,
              s = e.xhr();
          if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
            s[a] = e.xhrFields[a];
          }

          for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
            s.setRequestHeader(a, r[a]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()));
            };
          }, s.onload = _t3(), i = s.onerror = s.ontimeout = _t3("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
            4 === s.readyState && n.setTimeout(function () {
              _t3 && i();
            });
          }, _t3 = _t3("abort");

          try {
            s.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), _.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), _.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return _.globalEval(e), e;
        }
      }
    }), _.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), _.ajaxTransport("script", function (e) {
      var t, _n;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(i, r) {
          t = _("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && r("error" === e.type ? 404 : 200, e.type);
          }), b.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    });
    var Yt,
        Kt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Kt.pop() || _.expando + "_" + kt.guid++;
        return this[e] = !0, e;
      }
    }), _.ajaxPrefilter("json jsonp", function (e, t, i) {
      var r,
          o,
          a,
          s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
        return a || _.error(r + " was not called"), a[0];
      }, e.dataTypes[0] = "json", o = n[r], n[r] = function () {
        a = arguments;
      }, i.always(function () {
        void 0 === o ? _(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), a && v(o) && o(a[0]), a = o = void 0;
      }), "script";
    }), m.createHTMLDocument = ((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), _.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), o = !n && [], (r = L.exec(e)) ? [t.createElement(r[1])] : (r = xe([e], t, o), o && o.length && _(o).remove(), _.merge([], r.childNodes)));
      var i, r, o;
    }, _.fn.load = function (e, t, n) {
      var i,
          r,
          o,
          a = this,
          s = e.indexOf(" ");
      return s > -1 && (i = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (r = "POST"), a.length > 0 && _.ajax({
        url: e,
        type: r || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments, a.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e);
      }).always(n && function (e, t) {
        a.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      }), this;
    }, _.expr.pseudos.animated = function (e) {
      return _.grep(_.timers, function (t) {
        return e === t.elem;
      }).length;
    }, _.offset = {
      setOffset: function setOffset(e, t, n) {
        var i,
            r,
            o,
            a,
            s,
            l,
            u = _.css(e, "position"),
            c = _(e),
            d = {};

        "static" === u && (e.style.position = "relative"), s = c.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), v(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), c.css(d));
      }
    }, _.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          _.offset.setOffset(this, e, t);
        });
        var t,
            n,
            i = this[0];
        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              i = this[0],
              r = {
            top: 0,
            left: 0
          };
          if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - r.top - _.css(i, "marginTop", !0),
            left: t.left - r.left - _.css(i, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === _.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || oe;
        });
      }
    }), _.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;

      _.fn[e] = function (i) {
        return B(this, function (e, i, r) {
          var o;
          if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
          o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
        }, e, i, arguments.length);
      };
    }), _.each(["top", "left"], function (e, t) {
      _.cssHooks[t] = Ge(m.pixelPosition, function (e, n) {
        if (n) return n = We(e, t), Fe.test(n) ? _(e).position()[t] + "px" : n;
      });
    }), _.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      _.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, i) {
        _.fn[i] = function (r, o) {
          var a = arguments.length && (n || "boolean" != typeof r),
              s = n || (!0 === r || !0 === o ? "margin" : "border");
          return B(this, function (t, n, r) {
            var o;
            return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, n, s) : _.style(t, n, r, s);
          }, t, a ? r : void 0, a);
        };
      });
    }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      _.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), _.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      _.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    _.proxy = function (e, t) {
      var n, i, r;
      if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = s.call(arguments, 2), (r = function r() {
        return e.apply(t || this, i.concat(s.call(arguments)));
      }).guid = e.guid = e.guid || _.guid++, r;
    }, _.holdReady = function (e) {
      e ? _.readyWait++ : _.ready(!0);
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = D, _.isFunction = v, _.isWindow = y, _.camelCase = K, _.type = x, _.now = Date.now, _.isNumeric = function (e) {
      var t = _.type(e);

      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, _.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }, void 0 === (i = function () {
      return _;
    }.apply(t, [])) || (e.exports = i);
    var Qt = n.jQuery,
        Zt = n.$;
    return _.noConflict = function (e) {
      return n.$ === _ && (n.$ = Zt), e && n.jQuery === _ && (n.jQuery = Qt), _;
    }, void 0 === r && (n.jQuery = n.$ = _), _;
  });
}, function (e, t, n) {
  var i, r, o;
  r = [n(0)], void 0 === (o = "function" == typeof (i = function i(e) {
    var t = function () {
      if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
      return function () {
        var e, n, i;
        t && t.requirejs || (t ? n = t : t = {}, function (t) {
          var r,
              _o2,
              a,
              s,
              l = {},
              u = {},
              c = {},
              d = {},
              h = Object.prototype.hasOwnProperty,
              p = [].slice,
              f = /\.js$/;

          function g(e, t) {
            return h.call(e, t);
          }

          function m(e, t) {
            var n,
                i,
                r,
                o,
                a,
                s,
                l,
                u,
                d,
                h,
                p,
                g = t && t.split("/"),
                m = c.map,
                v = m && m["*"] || {};

            if (e) {
              for (a = (e = e.split("/")).length - 1, c.nodeIdCompat && f.test(e[a]) && (e[a] = e[a].replace(f, "")), "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)), d = 0; d < e.length; d++) {
                if ("." === (p = e[d])) e.splice(d, 1), d -= 1;else if (".." === p) {
                  if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                  d > 0 && (e.splice(d - 1, 2), d -= 2);
                }
              }

              e = e.join("/");
            }

            if ((g || v) && m) {
              for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                if (i = n.slice(0, d).join("/"), g) for (h = g.length; h > 0; h -= 1) {
                  if ((r = m[g.slice(0, h).join("/")]) && (r = r[i])) {
                    o = r, s = d;
                    break;
                  }
                }
                if (o) break;
                !l && v && v[i] && (l = v[i], u = d);
              }

              !o && l && (o = l, s = u), o && (n.splice(0, s, o), e = n.join("/"));
            }

            return e;
          }

          function v(e, t) {
            return function () {
              var n = p.call(arguments, 0);
              return "string" != typeof n[0] && 1 === n.length && n.push(null), _o2.apply(void 0, n.concat([e, t]));
            };
          }

          function y(e) {
            return function (t) {
              l[e] = t;
            };
          }

          function b(e) {
            if (g(u, e)) {
              var t = u[e];
              delete u[e], d[e] = !0, r.apply(void 0, t);
            }

            if (!g(l, e) && !g(d, e)) throw new Error("No " + e);
            return l[e];
          }

          function w(e) {
            var t,
                n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
          }

          function C(e) {
            return e ? w(e) : [];
          }

          function x(e) {
            return function () {
              return c && c.config && c.config[e] || {};
            };
          }

          a = function a(e, t) {
            var n,
                i,
                r = w(e),
                o = r[0],
                a = t[1];
            return e = r[1], o && (n = b(o = m(o, a))), o ? e = n && n.normalize ? n.normalize(e, (i = a, function (e) {
              return m(e, i);
            })) : m(e, a) : (o = (r = w(e = m(e, a)))[0], e = r[1], o && (n = b(o))), {
              f: o ? o + "!" + e : e,
              n: e,
              pr: o,
              p: n
            };
          }, s = {
            require: function require(e) {
              return v(e);
            },
            exports: function exports(e) {
              var t = l[e];
              return void 0 !== t ? t : l[e] = {};
            },
            module: function module(e) {
              return {
                id: e,
                uri: "",
                exports: l[e],
                config: x(e)
              };
            }
          }, r = function r(e, t, n, i) {
            var r,
                o,
                c,
                h,
                p,
                f,
                m,
                w = [],
                x = _typeof(n);

            if (f = C(i = i || e), "undefined" === x || "function" === x) {
              for (t = !t.length && n.length ? ["require", "exports", "module"] : t, p = 0; p < t.length; p += 1) {
                if ("require" === (o = (h = a(t[p], f)).f)) w[p] = s.require(e);else if ("exports" === o) w[p] = s.exports(e), m = !0;else if ("module" === o) r = w[p] = s.module(e);else if (g(l, o) || g(u, o) || g(d, o)) w[p] = b(o);else {
                  if (!h.p) throw new Error(e + " missing " + o);
                  h.p.load(h.n, v(i, !0), y(o), {}), w[p] = l[o];
                }
              }

              c = n ? n.apply(l[e], w) : void 0, e && (r && void 0 !== r.exports && r.exports !== l[e] ? l[e] = r.exports : void 0 === c && m || (l[e] = c));
            } else e && (l[e] = n);
          }, e = n = _o2 = function o(e, t, n, i, l) {
            if ("string" == typeof e) return s[e] ? s[e](t) : b(a(e, C(t)).f);

            if (!e.splice) {
              if ((c = e).deps && _o2(c.deps, c.callback), !t) return;
              t.splice ? (e = t, t = n, n = null) : e = void 0;
            }

            return t = t || function () {}, "function" == typeof n && (n = i, i = l), i ? r(void 0, e, t, n) : setTimeout(function () {
              r(void 0, e, t, n);
            }, 4), _o2;
          }, _o2.config = function (e) {
            return _o2(e);
          }, e._defined = l, (i = function i(e, t, n) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (n = t, t = []), g(l, e) || g(u, e) || (u[e] = [e, t, n]);
          }).amd = {
            jQuery: !0
          };
        }(), t.requirejs = e, t.require = n, t.define = i);
      }(), t.define("almond", function () {}), t.define("jquery", [], function () {
        var t = e || $;
        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t;
      }), t.define("select2/utils", ["jquery"], function (e) {
        var t = {};

        function n(e) {
          var t = e.prototype,
              n = [];

          for (var i in t) {
            "function" == typeof t[i] && "constructor" !== i && n.push(i);
          }

          return n;
        }

        t.Extend = function (e, t) {
          var n = {}.hasOwnProperty;

          function i() {
            this.constructor = e;
          }

          for (var r in t) {
            n.call(t, r) && (e[r] = t[r]);
          }

          return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
        }, t.Decorate = function (e, t) {
          var i = n(t),
              r = n(e);

          function o() {
            var n = Array.prototype.unshift,
                i = t.prototype.constructor.length,
                r = e.prototype.constructor;
            i > 0 && (n.call(arguments, e.prototype.constructor), r = t.prototype.constructor), r.apply(this, arguments);
          }

          t.displayName = e.displayName, o.prototype = new function () {
            this.constructor = o;
          }();

          for (var a = 0; a < r.length; a++) {
            var s = r[a];
            o.prototype[s] = e.prototype[s];
          }

          for (var l = function l(e) {
            var n = function n() {};

            (e in o.prototype) && (n = o.prototype[e]);
            var i = t.prototype[e];
            return function () {
              var e = Array.prototype.unshift;
              return e.call(arguments, n), i.apply(this, arguments);
            };
          }, u = 0; u < i.length; u++) {
            var c = i[u];
            o.prototype[c] = l(c);
          }

          return o;
        };

        var i = function i() {
          this.listeners = {};
        };

        i.prototype.on = function (e, t) {
          this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
        }, i.prototype.trigger = function (e) {
          var t = Array.prototype.slice,
              n = t.call(arguments, 1);
          this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
        }, i.prototype.invoke = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) {
            e[n].apply(this, t);
          }
        }, t.Observable = i, t.generateChars = function (e) {
          for (var t = "", n = 0; n < e; n++) {
            t += Math.floor(36 * Math.random()).toString(36);
          }

          return t;
        }, t.bind = function (e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }, t._convertData = function (e) {
          for (var t in e) {
            var n = t.split("-"),
                i = e;

            if (1 !== n.length) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o];
              }

              delete e[t];
            }
          }

          return e;
        }, t.hasScroll = function (t, n) {
          var i = e(n),
              r = n.style.overflowX,
              o = n.style.overflowY;
          return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth);
        }, t.escapeMarkup = function (e) {
          var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
          };
          return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
            return t[e];
          });
        }, t.appendMany = function (t, n) {
          if ("1.7" === e.fn.jquery.substr(0, 3)) {
            var i = e();
            e.map(n, function (e) {
              i = i.add(e);
            }), n = i;
          }

          t.append(n);
        }, t.__cache = {};
        var r = 0;
        return t.GetUniqueElementId = function (e) {
          var t = e.getAttribute("data-select2-id");
          return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r), t = r.toString())), t;
        }, t.StoreData = function (e, n, i) {
          var r = t.GetUniqueElementId(e);
          t.__cache[r] || (t.__cache[r] = {}), t.__cache[r][n] = i;
        }, t.GetData = function (n, i) {
          var r = t.GetUniqueElementId(n);
          return i ? t.__cache[r] && null != t.__cache[r][i] ? t.__cache[r][i] : e(n).data(i) : t.__cache[r];
        }, t.RemoveData = function (e) {
          var n = t.GetUniqueElementId(e);
          null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id");
        }, t;
      }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
        function n(e, t, i) {
          this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this);
        }

        return t.Extend(n, t.Observable), n.prototype.render = function () {
          var t = e('<ul class="select2-results__options" role="listbox"></ul>');
          return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t;
        }, n.prototype.clear = function () {
          this.$results.empty();
        }, n.prototype.displayMessage = function (t) {
          var n = this.options.get("escapeMarkup");
          this.clear(), this.hideLoading();
          var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
              r = this.options.get("translations").get(t.message);
          i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i);
        }, n.prototype.hideMessages = function () {
          this.$results.find(".select2-results__message").remove();
        }, n.prototype.append = function (e) {
          this.hideLoading();
          var t = [];

          if (null != e.results && 0 !== e.results.length) {
            e.results = this.sort(e.results);

            for (var n = 0; n < e.results.length; n++) {
              var i = e.results[n],
                  r = this.option(i);
              t.push(r);
            }

            this.$results.append(t);
          } else 0 === this.$results.children().length && this.trigger("results:message", {
            message: "noResults"
          });
        }, n.prototype.position = function (e, t) {
          t.find(".select2-results").append(e);
        }, n.prototype.sort = function (e) {
          return this.options.get("sorter")(e);
        }, n.prototype.highlightFirstItem = function () {
          var e = this.$results.find(".select2-results__option[aria-selected]"),
              t = e.filter("[aria-selected=true]");
          t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
        }, n.prototype.setClasses = function () {
          var n = this;
          this.data.current(function (i) {
            var r = e.map(i, function (e) {
              return e.id.toString();
            });
            n.$results.find(".select2-results__option[aria-selected]").each(function () {
              var n = e(this),
                  i = t.GetData(this, "data"),
                  o = "" + i.id;
              null != i.element && i.element.selected || null == i.element && e.inArray(o, r) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false");
            });
          });
        }, n.prototype.showLoading = function (e) {
          this.hideLoading();
          var t = {
            disabled: !0,
            loading: !0,
            text: this.options.get("translations").get("searching")(e)
          },
              n = this.option(t);
          n.className += " loading-results", this.$results.prepend(n);
        }, n.prototype.hideLoading = function () {
          this.$results.find(".loading-results").remove();
        }, n.prototype.option = function (n) {
          var i = document.createElement("li");
          i.className = "select2-results__option";
          var r = {
            role: "option",
            "aria-selected": "false"
          },
              o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;

          for (var a in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == n.id && delete r["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (r.role = "group", r["aria-label"] = n.text, delete r["aria-selected"]), r) {
            var s = r[a];
            i.setAttribute(a, s);
          }

          if (n.children) {
            var l = e(i),
                u = document.createElement("strong");
            u.className = "select2-results__group", e(u), this.template(n, u);

            for (var c = [], d = 0; d < n.children.length; d++) {
              var h = n.children[d],
                  p = this.option(h);
              c.push(p);
            }

            var f = e("<ul></ul>", {
              "class": "select2-results__options select2-results__options--nested"
            });
            f.append(c), l.append(u), l.append(f);
          } else this.template(n, i);

          return t.StoreData(i, "data", n), i;
        }, n.prototype.bind = function (n, i) {
          var r = this,
              o = n.id + "-results";
          this.$results.attr("id", o), n.on("results:all", function (e) {
            r.clear(), r.append(e.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem());
          }), n.on("results:append", function (e) {
            r.append(e.data), n.isOpen() && r.setClasses();
          }), n.on("query", function (e) {
            r.hideMessages(), r.showLoading(e);
          }), n.on("select", function () {
            n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem());
          }), n.on("unselect", function () {
            n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem());
          }), n.on("open", function () {
            r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible();
          }), n.on("close", function () {
            r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant");
          }), n.on("results:toggle", function () {
            var e = r.getHighlightedResults();
            0 !== e.length && e.trigger("mouseup");
          }), n.on("results:select", function () {
            var e = r.getHighlightedResults();

            if (0 !== e.length) {
              var n = t.GetData(e[0], "data");
              "true" == e.attr("aria-selected") ? r.trigger("close", {}) : r.trigger("select", {
                data: n
              });
            }
          }), n.on("results:previous", function () {
            var e = r.getHighlightedResults(),
                t = r.$results.find("[aria-selected]"),
                n = t.index(e);

            if (!(n <= 0)) {
              var i = n - 1;
              0 === e.length && (i = 0);
              var o = t.eq(i);
              o.trigger("mouseenter");
              var a = r.$results.offset().top,
                  s = o.offset().top,
                  l = r.$results.scrollTop() + (s - a);
              0 === i ? r.$results.scrollTop(0) : s - a < 0 && r.$results.scrollTop(l);
            }
          }), n.on("results:next", function () {
            var e = r.getHighlightedResults(),
                t = r.$results.find("[aria-selected]"),
                n = t.index(e) + 1;

            if (!(n >= t.length)) {
              var i = t.eq(n);
              i.trigger("mouseenter");
              var o = r.$results.offset().top + r.$results.outerHeight(!1),
                  a = i.offset().top + i.outerHeight(!1),
                  s = r.$results.scrollTop() + a - o;
              0 === n ? r.$results.scrollTop(0) : a > o && r.$results.scrollTop(s);
            }
          }), n.on("results:focus", function (e) {
            e.element.addClass("select2-results__option--highlighted");
          }), n.on("results:message", function (e) {
            r.displayMessage(e);
          }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
            var t = r.$results.scrollTop(),
                n = r.$results.get(0).scrollHeight - t + e.deltaY,
                i = e.deltaY > 0 && t - e.deltaY <= 0,
                o = e.deltaY < 0 && n <= r.$results.height();
            i ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation());
          }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (n) {
            var i = e(this),
                o = t.GetData(this, "data");
            "true" !== i.attr("aria-selected") ? r.trigger("select", {
              originalEvent: n,
              data: o
            }) : r.options.get("multiple") ? r.trigger("unselect", {
              originalEvent: n,
              data: o
            }) : r.trigger("close", {});
          }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (n) {
            var i = t.GetData(this, "data");
            r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", {
              data: i,
              element: e(this)
            });
          });
        }, n.prototype.getHighlightedResults = function () {
          return this.$results.find(".select2-results__option--highlighted");
        }, n.prototype.destroy = function () {
          this.$results.remove();
        }, n.prototype.ensureHighlightVisible = function () {
          var e = this.getHighlightedResults();

          if (0 !== e.length) {
            var t = this.$results.find("[aria-selected]").index(e),
                n = this.$results.offset().top,
                i = e.offset().top,
                r = this.$results.scrollTop() + (i - n),
                o = i - n;
            r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r);
          }
        }, n.prototype.template = function (t, n) {
          var i = this.options.get("templateResult"),
              r = this.options.get("escapeMarkup"),
              o = i(t, n);
          null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o);
        }, n;
      }), t.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
      }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
        function i(e, t) {
          this.$element = e, this.options = t, i.__super__.constructor.call(this);
        }

        return t.Extend(i, t.Observable), i.prototype.render = function () {
          var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
          return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n, n;
        }, i.prototype.bind = function (e, t) {
          var i = this,
              r = e.id + "-results";
          this.container = e, this.$selection.on("focus", function (e) {
            i.trigger("focus", e);
          }), this.$selection.on("blur", function (e) {
            i._handleBlur(e);
          }), this.$selection.on("keydown", function (e) {
            i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault();
          }), e.on("results:focus", function (e) {
            i.$selection.attr("aria-activedescendant", e.data._resultId);
          }), e.on("selection:update", function (e) {
            i.update(e.data);
          }), e.on("open", function () {
            i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e);
          }), e.on("close", function () {
            i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(e);
          }), e.on("enable", function () {
            i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false");
          }), e.on("disable", function () {
            i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true");
          });
        }, i.prototype._handleBlur = function (t) {
          var n = this;
          window.setTimeout(function () {
            document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t);
          }, 1);
        }, i.prototype._attachCloseHandler = function (n) {
          e(document.body).on("mousedown.select2." + n.id, function (n) {
            var i = e(n.target).closest(".select2");
            e(".select2.select2-container--open").each(function () {
              this != i[0] && t.GetData(this, "element").select2("close");
            });
          });
        }, i.prototype._detachCloseHandler = function (t) {
          e(document.body).off("mousedown.select2." + t.id);
        }, i.prototype.position = function (e, t) {
          t.find(".selection").append(e);
        }, i.prototype.destroy = function () {
          this._detachCloseHandler(this.container);
        }, i.prototype.update = function (e) {
          throw new Error("The `update` method must be defined in child classes.");
        }, i.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, i.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, i;
      }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
        function r() {
          r.__super__.constructor.apply(this, arguments);
        }

        return n.Extend(r, t), r.prototype.render = function () {
          var e = r.__super__.render.call(this);

          return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
        }, r.prototype.bind = function (e, t) {
          var n = this;

          r.__super__.bind.apply(this, arguments);

          var i = e.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
            1 === e.which && n.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), e.on("focus", function (t) {
            e.isOpen() || n.$selection.trigger("focus");
          });
        }, r.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, r.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, r.prototype.selectionContainer = function () {
          return e("<span></span>");
        }, r.prototype.update = function (e) {
          if (0 !== e.length) {
            var t = e[0],
                n = this.$selection.find(".select2-selection__rendered"),
                i = this.display(t, n);
            n.empty().append(i);
            var r = t.title || t.text;
            r ? n.attr("title", r) : n.removeAttr("title");
          } else this.clear();
        }, r;
      }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
        function i(e, t) {
          i.__super__.constructor.apply(this, arguments);
        }

        return n.Extend(i, t), i.prototype.render = function () {
          var e = i.__super__.render.call(this);

          return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
        }, i.prototype.bind = function (t, r) {
          var o = this;
          i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
            o.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
            if (!o.isDisabled()) {
              var i = e(this).parent(),
                  r = n.GetData(i[0], "data");
              o.trigger("unselect", {
                originalEvent: t,
                data: r
              });
            }
          });
        }, i.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, i.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, i.prototype.selectionContainer = function () {
          return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
        }, i.prototype.update = function (e) {
          if (this.clear(), 0 !== e.length) {
            for (var t = [], i = 0; i < e.length; i++) {
              var r = e[i],
                  o = this.selectionContainer(),
                  a = this.display(r, o);
              o.append(a);
              var s = r.title || r.text;
              s && o.attr("title", s), n.StoreData(o[0], "data", r), t.push(o);
            }

            var l = this.$selection.find(".select2-selection__rendered");
            n.appendMany(l, t);
          }
        }, i;
      }), t.define("select2/selection/placeholder", ["../utils"], function (e) {
        function t(e, t, n) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
        }

        return t.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, t.prototype.createPlaceholder = function (e, t) {
          var n = this.selectionContainer();
          return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
        }, t.prototype.update = function (e, t) {
          var n = 1 == t.length && t[0].id != this.placeholder.id;
          if (t.length > 1 || n) return e.call(this, t);
          this.clear();
          var i = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append(i);
        }, t;
      }), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, n) {
        function i() {}

        return i.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
            i._handleClear(e);
          }), t.on("keypress", function (e) {
            i._handleKeyboardClear(e, t);
          });
        }, i.prototype._handleClear = function (e, t) {
          if (!this.isDisabled()) {
            var i = this.$selection.find(".select2-selection__clear");

            if (0 !== i.length) {
              t.stopPropagation();
              var r = n.GetData(i[0], "data"),
                  o = this.$element.val();
              this.$element.val(this.placeholder.id);
              var a = {
                data: r
              };
              if (this.trigger("clear", a), a.prevented) this.$element.val(o);else {
                for (var s = 0; s < r.length; s++) {
                  if (a = {
                    data: r[s]
                  }, this.trigger("unselect", a), a.prevented) return void this.$element.val(o);
                }

                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
              }
            }
          }
        }, i.prototype._handleKeyboardClear = function (e, n, i) {
          i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n);
        }, i.prototype.update = function (t, i) {
          if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
            var r = this.options.get("translations").get("removeAllItems"),
                o = e('<span class="select2-selection__clear" title="' + r() + '">&times;</span>');
            n.StoreData(o[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(o);
          }
        }, i;
      }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
        function i(e, t, n) {
          e.call(this, t, n);
        }

        return i.prototype.render = function (t) {
          var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
          this.$searchContainer = n, this.$search = n.find("input");
          var i = t.call(this);
          return this._transferTabIndex(), i;
        }, i.prototype.bind = function (e, i, r) {
          var o = this,
              a = i.id + "-results";
          e.call(this, i, r), i.on("open", function () {
            o.$search.attr("aria-controls", a), o.$search.trigger("focus");
          }), i.on("close", function () {
            o.$search.val(""), o.$search.removeAttr("aria-controls"), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus");
          }), i.on("enable", function () {
            o.$search.prop("disabled", !1), o._transferTabIndex();
          }), i.on("disable", function () {
            o.$search.prop("disabled", !0);
          }), i.on("focus", function (e) {
            o.$search.trigger("focus");
          }), i.on("results:focus", function (e) {
            e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant");
          }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
            o.trigger("focus", e);
          }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
            o._handleBlur(e);
          }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
            if (e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === o.$search.val()) {
              var i = o.$searchContainer.prev(".select2-selection__choice");

              if (i.length > 0) {
                var r = t.GetData(i[0], "data");
                o.searchRemoveChoice(r), e.preventDefault();
              }
            }
          }), this.$selection.on("click", ".select2-search--inline", function (e) {
            o.$search.val() && e.stopPropagation();
          });
          var s = document.documentMode,
              l = s && s <= 11;
          this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
            l ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search");
          }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
            if (l && "input" === e.type) o.$selection.off("input.search input.searchcheck");else {
              var t = e.which;
              t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e);
            }
          });
        }, i.prototype._transferTabIndex = function (e) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
        }, i.prototype.createPlaceholder = function (e, t) {
          this.$search.attr("placeholder", t.text);
        }, i.prototype.update = function (e, t) {
          var n = this.$search[0] == document.activeElement;
          this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus");
        }, i.prototype.handleSearch = function () {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var e = this.$search.val();
            this.trigger("query", {
              term: e
            });
          }

          this._keyUpPrevented = !1;
        }, i.prototype.searchRemoveChoice = function (e, t) {
          this.trigger("unselect", {
            data: t
          }), this.$search.val(t.text), this.handleSearch();
        }, i.prototype.resizeSearch = function () {
          this.$search.css("width", "25px");
          var e = "";
          e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e);
        }, i;
      }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
        function t() {}

        return t.prototype.bind = function (t, n, i) {
          var r = this,
              o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
              a = ["opening", "closing", "selecting", "unselecting", "clearing"];
          t.call(this, n, i), n.on("*", function (t, n) {
            if (-1 !== e.inArray(t, o)) {
              n = n || {};
              var i = e.Event("select2:" + t, {
                params: n
              });
              r.$element.trigger(i), -1 !== e.inArray(t, a) && (n.prevented = i.isDefaultPrevented());
            }
          });
        }, t;
      }), t.define("select2/translation", ["jquery", "require"], function (e, t) {
        function n(e) {
          this.dict = e || {};
        }

        return n.prototype.all = function () {
          return this.dict;
        }, n.prototype.get = function (e) {
          return this.dict[e];
        }, n.prototype.extend = function (t) {
          this.dict = e.extend({}, t.all(), this.dict);
        }, n._cache = {}, n.loadPath = function (e) {
          if (!(e in n._cache)) {
            var i = t(e);
            n._cache[e] = i;
          }

          return new n(n._cache[e]);
        }, n;
      }), t.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          "Ａ": "A",
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ầ": "A",
          "Ấ": "A",
          "Ẫ": "A",
          "Ẩ": "A",
          "Ã": "A",
          "Ā": "A",
          "Ă": "A",
          "Ằ": "A",
          "Ắ": "A",
          "Ẵ": "A",
          "Ẳ": "A",
          "Ȧ": "A",
          "Ǡ": "A",
          "Ä": "A",
          "Ǟ": "A",
          "Ả": "A",
          "Å": "A",
          "Ǻ": "A",
          "Ǎ": "A",
          "Ȁ": "A",
          "Ȃ": "A",
          "Ạ": "A",
          "Ậ": "A",
          "Ặ": "A",
          "Ḁ": "A",
          "Ą": "A",
          "Ⱥ": "A",
          "Ɐ": "A",
          "Ꜳ": "AA",
          "Æ": "AE",
          "Ǽ": "AE",
          "Ǣ": "AE",
          "Ꜵ": "AO",
          "Ꜷ": "AU",
          "Ꜹ": "AV",
          "Ꜻ": "AV",
          "Ꜽ": "AY",
          "Ⓑ": "B",
          "Ｂ": "B",
          "Ḃ": "B",
          "Ḅ": "B",
          "Ḇ": "B",
          "Ƀ": "B",
          "Ƃ": "B",
          "Ɓ": "B",
          "Ⓒ": "C",
          "Ｃ": "C",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "Ç": "C",
          "Ḉ": "C",
          "Ƈ": "C",
          "Ȼ": "C",
          "Ꜿ": "C",
          "Ⓓ": "D",
          "Ｄ": "D",
          "Ḋ": "D",
          "Ď": "D",
          "Ḍ": "D",
          "Ḑ": "D",
          "Ḓ": "D",
          "Ḏ": "D",
          "Đ": "D",
          "Ƌ": "D",
          "Ɗ": "D",
          "Ɖ": "D",
          "Ꝺ": "D",
          "Ǳ": "DZ",
          "Ǆ": "DZ",
          "ǲ": "Dz",
          "ǅ": "Dz",
          "Ⓔ": "E",
          "Ｅ": "E",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ề": "E",
          "Ế": "E",
          "Ễ": "E",
          "Ể": "E",
          "Ẽ": "E",
          "Ē": "E",
          "Ḕ": "E",
          "Ḗ": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ë": "E",
          "Ẻ": "E",
          "Ě": "E",
          "Ȅ": "E",
          "Ȇ": "E",
          "Ẹ": "E",
          "Ệ": "E",
          "Ȩ": "E",
          "Ḝ": "E",
          "Ę": "E",
          "Ḙ": "E",
          "Ḛ": "E",
          "Ɛ": "E",
          "Ǝ": "E",
          "Ⓕ": "F",
          "Ｆ": "F",
          "Ḟ": "F",
          "Ƒ": "F",
          "Ꝼ": "F",
          "Ⓖ": "G",
          "Ｇ": "G",
          "Ǵ": "G",
          "Ĝ": "G",
          "Ḡ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ǧ": "G",
          "Ģ": "G",
          "Ǥ": "G",
          "Ɠ": "G",
          "Ꞡ": "G",
          "Ᵹ": "G",
          "Ꝿ": "G",
          "Ⓗ": "H",
          "Ｈ": "H",
          "Ĥ": "H",
          "Ḣ": "H",
          "Ḧ": "H",
          "Ȟ": "H",
          "Ḥ": "H",
          "Ḩ": "H",
          "Ḫ": "H",
          "Ħ": "H",
          "Ⱨ": "H",
          "Ⱶ": "H",
          "Ɥ": "H",
          "Ⓘ": "I",
          "Ｉ": "I",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "İ": "I",
          "Ï": "I",
          "Ḯ": "I",
          "Ỉ": "I",
          "Ǐ": "I",
          "Ȉ": "I",
          "Ȋ": "I",
          "Ị": "I",
          "Į": "I",
          "Ḭ": "I",
          "Ɨ": "I",
          "Ⓙ": "J",
          "Ｊ": "J",
          "Ĵ": "J",
          "Ɉ": "J",
          "Ⓚ": "K",
          "Ｋ": "K",
          "Ḱ": "K",
          "Ǩ": "K",
          "Ḳ": "K",
          "Ķ": "K",
          "Ḵ": "K",
          "Ƙ": "K",
          "Ⱪ": "K",
          "Ꝁ": "K",
          "Ꝃ": "K",
          "Ꝅ": "K",
          "Ꞣ": "K",
          "Ⓛ": "L",
          "Ｌ": "L",
          "Ŀ": "L",
          "Ĺ": "L",
          "Ľ": "L",
          "Ḷ": "L",
          "Ḹ": "L",
          "Ļ": "L",
          "Ḽ": "L",
          "Ḻ": "L",
          "Ł": "L",
          "Ƚ": "L",
          "Ɫ": "L",
          "Ⱡ": "L",
          "Ꝉ": "L",
          "Ꝇ": "L",
          "Ꞁ": "L",
          "Ǉ": "LJ",
          "ǈ": "Lj",
          "Ⓜ": "M",
          "Ｍ": "M",
          "Ḿ": "M",
          "Ṁ": "M",
          "Ṃ": "M",
          "Ɱ": "M",
          "Ɯ": "M",
          "Ⓝ": "N",
          "Ｎ": "N",
          "Ǹ": "N",
          "Ń": "N",
          "Ñ": "N",
          "Ṅ": "N",
          "Ň": "N",
          "Ṇ": "N",
          "Ņ": "N",
          "Ṋ": "N",
          "Ṉ": "N",
          "Ƞ": "N",
          "Ɲ": "N",
          "Ꞑ": "N",
          "Ꞥ": "N",
          "Ǌ": "NJ",
          "ǋ": "Nj",
          "Ⓞ": "O",
          "Ｏ": "O",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Ồ": "O",
          "Ố": "O",
          "Ỗ": "O",
          "Ổ": "O",
          "Õ": "O",
          "Ṍ": "O",
          "Ȭ": "O",
          "Ṏ": "O",
          "Ō": "O",
          "Ṑ": "O",
          "Ṓ": "O",
          "Ŏ": "O",
          "Ȯ": "O",
          "Ȱ": "O",
          "Ö": "O",
          "Ȫ": "O",
          "Ỏ": "O",
          "Ő": "O",
          "Ǒ": "O",
          "Ȍ": "O",
          "Ȏ": "O",
          "Ơ": "O",
          "Ờ": "O",
          "Ớ": "O",
          "Ỡ": "O",
          "Ở": "O",
          "Ợ": "O",
          "Ọ": "O",
          "Ộ": "O",
          "Ǫ": "O",
          "Ǭ": "O",
          "Ø": "O",
          "Ǿ": "O",
          "Ɔ": "O",
          "Ɵ": "O",
          "Ꝋ": "O",
          "Ꝍ": "O",
          "Œ": "OE",
          "Ƣ": "OI",
          "Ꝏ": "OO",
          "Ȣ": "OU",
          "Ⓟ": "P",
          "Ｐ": "P",
          "Ṕ": "P",
          "Ṗ": "P",
          "Ƥ": "P",
          "Ᵽ": "P",
          "Ꝑ": "P",
          "Ꝓ": "P",
          "Ꝕ": "P",
          "Ⓠ": "Q",
          "Ｑ": "Q",
          "Ꝗ": "Q",
          "Ꝙ": "Q",
          "Ɋ": "Q",
          "Ⓡ": "R",
          "Ｒ": "R",
          "Ŕ": "R",
          "Ṙ": "R",
          "Ř": "R",
          "Ȑ": "R",
          "Ȓ": "R",
          "Ṛ": "R",
          "Ṝ": "R",
          "Ŗ": "R",
          "Ṟ": "R",
          "Ɍ": "R",
          "Ɽ": "R",
          "Ꝛ": "R",
          "Ꞧ": "R",
          "Ꞃ": "R",
          "Ⓢ": "S",
          "Ｓ": "S",
          "ẞ": "S",
          "Ś": "S",
          "Ṥ": "S",
          "Ŝ": "S",
          "Ṡ": "S",
          "Š": "S",
          "Ṧ": "S",
          "Ṣ": "S",
          "Ṩ": "S",
          "Ș": "S",
          "Ş": "S",
          "Ȿ": "S",
          "Ꞩ": "S",
          "Ꞅ": "S",
          "Ⓣ": "T",
          "Ｔ": "T",
          "Ṫ": "T",
          "Ť": "T",
          "Ṭ": "T",
          "Ț": "T",
          "Ţ": "T",
          "Ṱ": "T",
          "Ṯ": "T",
          "Ŧ": "T",
          "Ƭ": "T",
          "Ʈ": "T",
          "Ⱦ": "T",
          "Ꞇ": "T",
          "Ꜩ": "TZ",
          "Ⓤ": "U",
          "Ｕ": "U",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ũ": "U",
          "Ṹ": "U",
          "Ū": "U",
          "Ṻ": "U",
          "Ŭ": "U",
          "Ü": "U",
          "Ǜ": "U",
          "Ǘ": "U",
          "Ǖ": "U",
          "Ǚ": "U",
          "Ủ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ǔ": "U",
          "Ȕ": "U",
          "Ȗ": "U",
          "Ư": "U",
          "Ừ": "U",
          "Ứ": "U",
          "Ữ": "U",
          "Ử": "U",
          "Ự": "U",
          "Ụ": "U",
          "Ṳ": "U",
          "Ų": "U",
          "Ṷ": "U",
          "Ṵ": "U",
          "Ʉ": "U",
          "Ⓥ": "V",
          "Ｖ": "V",
          "Ṽ": "V",
          "Ṿ": "V",
          "Ʋ": "V",
          "Ꝟ": "V",
          "Ʌ": "V",
          "Ꝡ": "VY",
          "Ⓦ": "W",
          "Ｗ": "W",
          "Ẁ": "W",
          "Ẃ": "W",
          "Ŵ": "W",
          "Ẇ": "W",
          "Ẅ": "W",
          "Ẉ": "W",
          "Ⱳ": "W",
          "Ⓧ": "X",
          "Ｘ": "X",
          "Ẋ": "X",
          "Ẍ": "X",
          "Ⓨ": "Y",
          "Ｙ": "Y",
          "Ỳ": "Y",
          "Ý": "Y",
          "Ŷ": "Y",
          "Ỹ": "Y",
          "Ȳ": "Y",
          "Ẏ": "Y",
          "Ÿ": "Y",
          "Ỷ": "Y",
          "Ỵ": "Y",
          "Ƴ": "Y",
          "Ɏ": "Y",
          "Ỿ": "Y",
          "Ⓩ": "Z",
          "Ｚ": "Z",
          "Ź": "Z",
          "Ẑ": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "Ẓ": "Z",
          "Ẕ": "Z",
          "Ƶ": "Z",
          "Ȥ": "Z",
          "Ɀ": "Z",
          "Ⱬ": "Z",
          "Ꝣ": "Z",
          "ⓐ": "a",
          "ａ": "a",
          "ẚ": "a",
          "à": "a",
          "á": "a",
          "â": "a",
          "ầ": "a",
          "ấ": "a",
          "ẫ": "a",
          "ẩ": "a",
          "ã": "a",
          "ā": "a",
          "ă": "a",
          "ằ": "a",
          "ắ": "a",
          "ẵ": "a",
          "ẳ": "a",
          "ȧ": "a",
          "ǡ": "a",
          "ä": "a",
          "ǟ": "a",
          "ả": "a",
          "å": "a",
          "ǻ": "a",
          "ǎ": "a",
          "ȁ": "a",
          "ȃ": "a",
          "ạ": "a",
          "ậ": "a",
          "ặ": "a",
          "ḁ": "a",
          "ą": "a",
          "ⱥ": "a",
          "ɐ": "a",
          "ꜳ": "aa",
          "æ": "ae",
          "ǽ": "ae",
          "ǣ": "ae",
          "ꜵ": "ao",
          "ꜷ": "au",
          "ꜹ": "av",
          "ꜻ": "av",
          "ꜽ": "ay",
          "ⓑ": "b",
          "ｂ": "b",
          "ḃ": "b",
          "ḅ": "b",
          "ḇ": "b",
          "ƀ": "b",
          "ƃ": "b",
          "ɓ": "b",
          "ⓒ": "c",
          "ｃ": "c",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "ç": "c",
          "ḉ": "c",
          "ƈ": "c",
          "ȼ": "c",
          "ꜿ": "c",
          "ↄ": "c",
          "ⓓ": "d",
          "ｄ": "d",
          "ḋ": "d",
          "ď": "d",
          "ḍ": "d",
          "ḑ": "d",
          "ḓ": "d",
          "ḏ": "d",
          "đ": "d",
          "ƌ": "d",
          "ɖ": "d",
          "ɗ": "d",
          "ꝺ": "d",
          "ǳ": "dz",
          "ǆ": "dz",
          "ⓔ": "e",
          "ｅ": "e",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ề": "e",
          "ế": "e",
          "ễ": "e",
          "ể": "e",
          "ẽ": "e",
          "ē": "e",
          "ḕ": "e",
          "ḗ": "e",
          "ĕ": "e",
          "ė": "e",
          "ë": "e",
          "ẻ": "e",
          "ě": "e",
          "ȅ": "e",
          "ȇ": "e",
          "ẹ": "e",
          "ệ": "e",
          "ȩ": "e",
          "ḝ": "e",
          "ę": "e",
          "ḙ": "e",
          "ḛ": "e",
          "ɇ": "e",
          "ɛ": "e",
          "ǝ": "e",
          "ⓕ": "f",
          "ｆ": "f",
          "ḟ": "f",
          "ƒ": "f",
          "ꝼ": "f",
          "ⓖ": "g",
          "ｇ": "g",
          "ǵ": "g",
          "ĝ": "g",
          "ḡ": "g",
          "ğ": "g",
          "ġ": "g",
          "ǧ": "g",
          "ģ": "g",
          "ǥ": "g",
          "ɠ": "g",
          "ꞡ": "g",
          "ᵹ": "g",
          "ꝿ": "g",
          "ⓗ": "h",
          "ｈ": "h",
          "ĥ": "h",
          "ḣ": "h",
          "ḧ": "h",
          "ȟ": "h",
          "ḥ": "h",
          "ḩ": "h",
          "ḫ": "h",
          "ẖ": "h",
          "ħ": "h",
          "ⱨ": "h",
          "ⱶ": "h",
          "ɥ": "h",
          "ƕ": "hv",
          "ⓘ": "i",
          "ｉ": "i",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "ï": "i",
          "ḯ": "i",
          "ỉ": "i",
          "ǐ": "i",
          "ȉ": "i",
          "ȋ": "i",
          "ị": "i",
          "į": "i",
          "ḭ": "i",
          "ɨ": "i",
          "ı": "i",
          "ⓙ": "j",
          "ｊ": "j",
          "ĵ": "j",
          "ǰ": "j",
          "ɉ": "j",
          "ⓚ": "k",
          "ｋ": "k",
          "ḱ": "k",
          "ǩ": "k",
          "ḳ": "k",
          "ķ": "k",
          "ḵ": "k",
          "ƙ": "k",
          "ⱪ": "k",
          "ꝁ": "k",
          "ꝃ": "k",
          "ꝅ": "k",
          "ꞣ": "k",
          "ⓛ": "l",
          "ｌ": "l",
          "ŀ": "l",
          "ĺ": "l",
          "ľ": "l",
          "ḷ": "l",
          "ḹ": "l",
          "ļ": "l",
          "ḽ": "l",
          "ḻ": "l",
          "ſ": "l",
          "ł": "l",
          "ƚ": "l",
          "ɫ": "l",
          "ⱡ": "l",
          "ꝉ": "l",
          "ꞁ": "l",
          "ꝇ": "l",
          "ǉ": "lj",
          "ⓜ": "m",
          "ｍ": "m",
          "ḿ": "m",
          "ṁ": "m",
          "ṃ": "m",
          "ɱ": "m",
          "ɯ": "m",
          "ⓝ": "n",
          "ｎ": "n",
          "ǹ": "n",
          "ń": "n",
          "ñ": "n",
          "ṅ": "n",
          "ň": "n",
          "ṇ": "n",
          "ņ": "n",
          "ṋ": "n",
          "ṉ": "n",
          "ƞ": "n",
          "ɲ": "n",
          "ŉ": "n",
          "ꞑ": "n",
          "ꞥ": "n",
          "ǌ": "nj",
          "ⓞ": "o",
          "ｏ": "o",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "ồ": "o",
          "ố": "o",
          "ỗ": "o",
          "ổ": "o",
          "õ": "o",
          "ṍ": "o",
          "ȭ": "o",
          "ṏ": "o",
          "ō": "o",
          "ṑ": "o",
          "ṓ": "o",
          "ŏ": "o",
          "ȯ": "o",
          "ȱ": "o",
          "ö": "o",
          "ȫ": "o",
          "ỏ": "o",
          "ő": "o",
          "ǒ": "o",
          "ȍ": "o",
          "ȏ": "o",
          "ơ": "o",
          "ờ": "o",
          "ớ": "o",
          "ỡ": "o",
          "ở": "o",
          "ợ": "o",
          "ọ": "o",
          "ộ": "o",
          "ǫ": "o",
          "ǭ": "o",
          "ø": "o",
          "ǿ": "o",
          "ɔ": "o",
          "ꝋ": "o",
          "ꝍ": "o",
          "ɵ": "o",
          "œ": "oe",
          "ƣ": "oi",
          "ȣ": "ou",
          "ꝏ": "oo",
          "ⓟ": "p",
          "ｐ": "p",
          "ṕ": "p",
          "ṗ": "p",
          "ƥ": "p",
          "ᵽ": "p",
          "ꝑ": "p",
          "ꝓ": "p",
          "ꝕ": "p",
          "ⓠ": "q",
          "ｑ": "q",
          "ɋ": "q",
          "ꝗ": "q",
          "ꝙ": "q",
          "ⓡ": "r",
          "ｒ": "r",
          "ŕ": "r",
          "ṙ": "r",
          "ř": "r",
          "ȑ": "r",
          "ȓ": "r",
          "ṛ": "r",
          "ṝ": "r",
          "ŗ": "r",
          "ṟ": "r",
          "ɍ": "r",
          "ɽ": "r",
          "ꝛ": "r",
          "ꞧ": "r",
          "ꞃ": "r",
          "ⓢ": "s",
          "ｓ": "s",
          "ß": "s",
          "ś": "s",
          "ṥ": "s",
          "ŝ": "s",
          "ṡ": "s",
          "š": "s",
          "ṧ": "s",
          "ṣ": "s",
          "ṩ": "s",
          "ș": "s",
          "ş": "s",
          "ȿ": "s",
          "ꞩ": "s",
          "ꞅ": "s",
          "ẛ": "s",
          "ⓣ": "t",
          "ｔ": "t",
          "ṫ": "t",
          "ẗ": "t",
          "ť": "t",
          "ṭ": "t",
          "ț": "t",
          "ţ": "t",
          "ṱ": "t",
          "ṯ": "t",
          "ŧ": "t",
          "ƭ": "t",
          "ʈ": "t",
          "ⱦ": "t",
          "ꞇ": "t",
          "ꜩ": "tz",
          "ⓤ": "u",
          "ｕ": "u",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ũ": "u",
          "ṹ": "u",
          "ū": "u",
          "ṻ": "u",
          "ŭ": "u",
          "ü": "u",
          "ǜ": "u",
          "ǘ": "u",
          "ǖ": "u",
          "ǚ": "u",
          "ủ": "u",
          "ů": "u",
          "ű": "u",
          "ǔ": "u",
          "ȕ": "u",
          "ȗ": "u",
          "ư": "u",
          "ừ": "u",
          "ứ": "u",
          "ữ": "u",
          "ử": "u",
          "ự": "u",
          "ụ": "u",
          "ṳ": "u",
          "ų": "u",
          "ṷ": "u",
          "ṵ": "u",
          "ʉ": "u",
          "ⓥ": "v",
          "ｖ": "v",
          "ṽ": "v",
          "ṿ": "v",
          "ʋ": "v",
          "ꝟ": "v",
          "ʌ": "v",
          "ꝡ": "vy",
          "ⓦ": "w",
          "ｗ": "w",
          "ẁ": "w",
          "ẃ": "w",
          "ŵ": "w",
          "ẇ": "w",
          "ẅ": "w",
          "ẘ": "w",
          "ẉ": "w",
          "ⱳ": "w",
          "ⓧ": "x",
          "ｘ": "x",
          "ẋ": "x",
          "ẍ": "x",
          "ⓨ": "y",
          "ｙ": "y",
          "ỳ": "y",
          "ý": "y",
          "ŷ": "y",
          "ỹ": "y",
          "ȳ": "y",
          "ẏ": "y",
          "ÿ": "y",
          "ỷ": "y",
          "ẙ": "y",
          "ỵ": "y",
          "ƴ": "y",
          "ɏ": "y",
          "ỿ": "y",
          "ⓩ": "z",
          "ｚ": "z",
          "ź": "z",
          "ẑ": "z",
          "ż": "z",
          "ž": "z",
          "ẓ": "z",
          "ẕ": "z",
          "ƶ": "z",
          "ȥ": "z",
          "ɀ": "z",
          "ⱬ": "z",
          "ꝣ": "z",
          "Ά": "Α",
          "Έ": "Ε",
          "Ή": "Η",
          "Ί": "Ι",
          "Ϊ": "Ι",
          "Ό": "Ο",
          "Ύ": "Υ",
          "Ϋ": "Υ",
          "Ώ": "Ω",
          "ά": "α",
          "έ": "ε",
          "ή": "η",
          "ί": "ι",
          "ϊ": "ι",
          "ΐ": "ι",
          "ό": "ο",
          "ύ": "υ",
          "ϋ": "υ",
          "ΰ": "υ",
          "ώ": "ω",
          "ς": "σ",
          "’": "'"
        };
      }), t.define("select2/data/base", ["../utils"], function (e) {
        function t(e, n) {
          t.__super__.constructor.call(this);
        }

        return e.Extend(t, e.Observable), t.prototype.current = function (e) {
          throw new Error("The `current` method must be defined in child classes.");
        }, t.prototype.query = function (e, t) {
          throw new Error("The `query` method must be defined in child classes.");
        }, t.prototype.bind = function (e, t) {}, t.prototype.destroy = function () {}, t.prototype.generateResultId = function (t, n) {
          var i = t.id + "-result-";
          return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i;
        }, t;
      }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
        function i(e, t) {
          this.$element = e, this.options = t, i.__super__.constructor.call(this);
        }

        return t.Extend(i, e), i.prototype.current = function (e) {
          var t = [],
              i = this;
          this.$element.find(":selected").each(function () {
            var e = n(this),
                r = i.item(e);
            t.push(r);
          }), e(t);
        }, i.prototype.select = function (e) {
          var t = this;
          if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
          if (this.$element.prop("multiple")) this.current(function (i) {
            var r = [];
            (e = [e]).push.apply(e, i);

            for (var o = 0; o < e.length; o++) {
              var a = e[o].id;
              -1 === n.inArray(a, r) && r.push(a);
            }

            t.$element.val(r), t.$element.trigger("input").trigger("change");
          });else {
            var i = e.id;
            this.$element.val(i), this.$element.trigger("input").trigger("change");
          }
        }, i.prototype.unselect = function (e) {
          var t = this;

          if (this.$element.prop("multiple")) {
            if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
            this.current(function (i) {
              for (var r = [], o = 0; o < i.length; o++) {
                var a = i[o].id;
                a !== e.id && -1 === n.inArray(a, r) && r.push(a);
              }

              t.$element.val(r), t.$element.trigger("input").trigger("change");
            });
          }
        }, i.prototype.bind = function (e, t) {
          var n = this;
          this.container = e, e.on("select", function (e) {
            n.select(e.data);
          }), e.on("unselect", function (e) {
            n.unselect(e.data);
          });
        }, i.prototype.destroy = function () {
          this.$element.find("*").each(function () {
            t.RemoveData(this);
          });
        }, i.prototype.query = function (e, t) {
          var i = [],
              r = this;
          this.$element.children().each(function () {
            var t = n(this);

            if (t.is("option") || t.is("optgroup")) {
              var o = r.item(t),
                  a = r.matches(e, o);
              null !== a && i.push(a);
            }
          }), t({
            results: i
          });
        }, i.prototype.addOptions = function (e) {
          t.appendMany(this.$element, e);
        }, i.prototype.option = function (e) {
          var i;
          e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);

          var r = n(i),
              o = this._normalizeItem(e);

          return o.element = i, t.StoreData(i, "data", o), r;
        }, i.prototype.item = function (e) {
          var i = {};
          if (null != (i = t.GetData(e[0], "data"))) return i;
          if (e.is("option")) i = {
            id: e.val(),
            text: e.text(),
            disabled: e.prop("disabled"),
            selected: e.prop("selected"),
            title: e.prop("title")
          };else if (e.is("optgroup")) {
            i = {
              text: e.prop("label"),
              children: [],
              title: e.prop("title")
            };

            for (var r = e.children("option"), o = [], a = 0; a < r.length; a++) {
              var s = n(r[a]),
                  l = this.item(s);
              o.push(l);
            }

            i.children = o;
          }
          return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i;
        }, i.prototype._normalizeItem = function (e) {
          return e !== Object(e) && (e = {
            id: e,
            text: e
          }), null != (e = n.extend({}, {
            text: ""
          }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
            selected: !1,
            disabled: !1
          }, e);
        }, i.prototype.matches = function (e, t) {
          return this.options.get("matcher")(e, t);
        }, i;
      }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
        function i(e, t) {
          this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t);
        }

        return t.Extend(i, e), i.prototype.bind = function (e, t) {
          i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, i.prototype.select = function (e) {
          var t = this.$element.find("option").filter(function (t, n) {
            return n.value == e.id.toString();
          });
          0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e);
        }, i.prototype.convertToOptions = function (e) {
          var i = this,
              r = this.$element.find("option"),
              o = r.map(function () {
            return i.item(n(this)).id;
          }).get(),
              a = [];

          function s(e) {
            return function () {
              return n(this).val() == e.id;
            };
          }

          for (var l = 0; l < e.length; l++) {
            var u = this._normalizeItem(e[l]);

            if (n.inArray(u.id, o) >= 0) {
              var c = r.filter(s(u)),
                  d = this.item(c),
                  h = n.extend(!0, {}, u, d),
                  p = this.option(h);
              c.replaceWith(p);
            } else {
              var f = this.option(u);

              if (u.children) {
                var g = this.convertToOptions(u.children);
                t.appendMany(f, g);
              }

              a.push(f);
            }
          }

          return a;
        }, i;
      }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
        function i(e, t) {
          this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t);
        }

        return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
          var t = {
            data: function data(e) {
              return n.extend({}, e, {
                q: e.term
              });
            },
            transport: function transport(e, t, i) {
              var r = n.ajax(e);
              return r.then(t), r.fail(i), r;
            }
          };
          return n.extend({}, t, e, !0);
        }, i.prototype.processResults = function (e) {
          return e;
        }, i.prototype.query = function (e, t) {
          var i = this;
          null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
          var r = n.extend({
            type: "GET"
          }, this.ajaxOptions);

          function o() {
            var o = r.transport(r, function (r) {
              var o = i.processResults(r, e);
              i.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o);
            }, function () {
              (!("status" in o) || 0 !== o.status && "0" !== o.status) && i.trigger("results:message", {
                message: "errorLoading"
              });
            });
            i._request = o;
          }

          "function" == typeof r.url && (r.url = r.url.call(this.$element, e)), "function" == typeof r.data && (r.data = r.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o();
        }, i;
      }), t.define("select2/data/tags", ["jquery"], function (e) {
        function t(t, n, i) {
          var r = i.get("tags"),
              o = i.get("createTag");
          void 0 !== o && (this.createTag = o);
          var a = i.get("insertTag");
          if (void 0 !== a && (this.insertTag = a), t.call(this, n, i), e.isArray(r)) for (var s = 0; s < r.length; s++) {
            var l = r[s],
                u = this._normalizeItem(l),
                c = this.option(u);

            this.$element.append(c);
          }
        }

        return t.prototype.query = function (e, t, n) {
          var i = this;
          this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, function e(r, o) {
            for (var a = r.results, s = 0; s < a.length; s++) {
              var l = a[s],
                  u = null != l.children && !e({
                results: l.children
              }, !0);
              if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || u) return !o && (r.data = a, void n(r));
            }

            if (o) return !0;
            var c = i.createTag(t);

            if (null != c) {
              var d = i.option(c);
              d.attr("data-select2-tag", !0), i.addOptions([d]), i.insertTag(a, c);
            }

            r.results = a, n(r);
          }) : e.call(this, t, n);
        }, t.prototype.createTag = function (t, n) {
          var i = e.trim(n.term);
          return "" === i ? null : {
            id: i,
            text: i
          };
        }, t.prototype.insertTag = function (e, t, n) {
          t.unshift(n);
        }, t.prototype._removeOldTags = function (t) {
          this.$element.find("option[data-select2-tag]").each(function () {
            this.selected || e(this).remove();
          });
        }, t;
      }), t.define("select2/data/tokenizer", ["jquery"], function (e) {
        function t(e, t, n) {
          var i = n.get("tokenizer");
          void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
        }

        return t.prototype.bind = function (e, t, n) {
          e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
        }, t.prototype.query = function (t, n, i) {
          var r = this;
          n.term = n.term || "";
          var o = this.tokenizer(n, this.options, function (t) {
            var n = r._normalizeItem(t);

            if (!r.$element.find("option").filter(function () {
              return e(this).val() === n.id;
            }).length) {
              var i = r.option(n);
              i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i]);
            }

            !function (e) {
              r.trigger("select", {
                data: e
              });
            }(n);
          });
          o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.trigger("focus")), n.term = o.term), t.call(this, n, i);
        }, t.prototype.tokenizer = function (t, n, i, r) {
          for (var o = i.get("tokenSeparators") || [], a = n.term, s = 0, l = this.createTag || function (e) {
            return {
              id: e.term,
              text: e.term
            };
          }; s < a.length;) {
            var u = a[s];

            if (-1 !== e.inArray(u, o)) {
              var c = a.substr(0, s),
                  d = l(e.extend({}, n, {
                term: c
              }));
              null != d ? (r(d), a = a.substr(s + 1) || "", s = 0) : s++;
            } else s++;
          }

          return {
            term: a
          };
        }, t;
      }), t.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
            message: "inputTooShort",
            args: {
              minimum: this.minimumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), t.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
            message: "inputTooLong",
            args: {
              maximum: this.maximumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), t.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function () {
            i._checkIfMaximumSelected();
          });
        }, e.prototype.query = function (e, t, n) {
          var i = this;

          this._checkIfMaximumSelected(function () {
            e.call(i, t, n);
          });
        }, e.prototype._checkIfMaximumSelected = function (e, t) {
          var n = this;
          this.current(function (e) {
            var i = null != e ? e.length : 0;
            n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", {
              message: "maximumSelected",
              args: {
                maximum: n.maximumSelectionLength
              }
            }) : t && t();
          });
        }, e;
      }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }

        return t.Extend(n, t.Observable), n.prototype.render = function () {
          var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
          return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t;
        }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
          this.$dropdown.remove();
        }, n;
      }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
        function n() {}

        return n.prototype.render = function (t) {
          var n = t.call(this),
              i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n;
        }, n.prototype.bind = function (t, n, i) {
          var r = this,
              o = n.id + "-results";
          t.call(this, n, i), this.$search.on("keydown", function (e) {
            r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented();
          }), this.$search.on("input", function (t) {
            e(this).off("keyup");
          }), this.$search.on("keyup input", function (e) {
            r.handleSearch(e);
          }), n.on("open", function () {
            r.$search.attr("tabindex", 0), r.$search.attr("aria-controls", o), r.$search.trigger("focus"), window.setTimeout(function () {
              r.$search.trigger("focus");
            }, 0);
          }), n.on("close", function () {
            r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur");
          }), n.on("focus", function () {
            n.isOpen() || r.$search.trigger("focus");
          }), n.on("results:all", function (e) {
            null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"));
          }), n.on("results:focus", function (e) {
            e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant");
          });
        }, n.prototype.handleSearch = function (e) {
          if (!this._keyUpPrevented) {
            var t = this.$search.val();
            this.trigger("query", {
              term: t
            });
          }

          this._keyUpPrevented = !1;
        }, n.prototype.showSearch = function (e, t) {
          return !0;
        }, n;
      }), t.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, i) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i);
        }

        return e.prototype.append = function (e, t) {
          t.results = this.removePlaceholder(t.results), e.call(this, t);
        }, e.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, e.prototype.removePlaceholder = function (e, t) {
          for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
            var r = t[i];
            this.placeholder.id === r.id && n.splice(i, 1);
          }

          return n;
        }, e;
      }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
        function t(e, t, n, i) {
          this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
        }

        return t.prototype.append = function (e, t) {
          this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
        }, t.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("query", function (e) {
            i.lastParams = e, i.loading = !0;
          }), t.on("query:append", function (e) {
            i.lastParams = e, i.loading = !0;
          }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        }, t.prototype.loadMoreIfNeeded = function () {
          var t = e.contains(document.documentElement, this.$loadingMore[0]);
          !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore();
        }, t.prototype.loadMore = function () {
          this.loading = !0;
          var t = e.extend({}, {
            page: 1
          }, this.lastParams);
          t.page++, this.trigger("query:append", t);
        }, t.prototype.showLoadingMore = function (e, t) {
          return t.pagination && t.pagination.more;
        }, t.prototype.createLoadingMore = function () {
          var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
              n = this.options.get("translations").get("loadingMore");
          return t.html(n(this.lastParams)), t;
        }, t;
      }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
        function n(t, n, i) {
          this.$dropdownParent = e(i.get("dropdownParent") || document.body), t.call(this, n, i);
        }

        return n.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("open", function () {
            i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t);
          }), t.on("close", function () {
            i._hideDropdown(), i._detachPositioningHandler(t);
          }), this.$dropdownContainer.on("mousedown", function (e) {
            e.stopPropagation();
          });
        }, n.prototype.destroy = function (e) {
          e.call(this), this.$dropdownContainer.remove();
        }, n.prototype.position = function (e, t, n) {
          t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
            position: "absolute",
            top: -999999
          }), this.$container = n;
        }, n.prototype.render = function (t) {
          var n = e("<span></span>"),
              i = t.call(this);
          return n.append(i), this.$dropdownContainer = n, n;
        }, n.prototype._hideDropdown = function (e) {
          this.$dropdownContainer.detach();
        }, n.prototype._bindContainerResultHandlers = function (e, t) {
          if (!this._containerResultsHandlersBound) {
            var n = this;
            t.on("results:all", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:append", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:message", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("select", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("unselect", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), this._containerResultsHandlersBound = !0;
          }
        }, n.prototype._attachPositioningHandler = function (n, i) {
          var r = this,
              o = "scroll.select2." + i.id,
              a = "resize.select2." + i.id,
              s = "orientationchange.select2." + i.id,
              l = this.$container.parents().filter(t.hasScroll);
          l.each(function () {
            t.StoreData(this, "select2-scroll-position", {
              x: e(this).scrollLeft(),
              y: e(this).scrollTop()
            });
          }), l.on(o, function (n) {
            var i = t.GetData(this, "select2-scroll-position");
            e(this).scrollTop(i.y);
          }), e(window).on(o + " " + a + " " + s, function (e) {
            r._positionDropdown(), r._resizeDropdown();
          });
        }, n.prototype._detachPositioningHandler = function (n, i) {
          var r = "scroll.select2." + i.id,
              o = "resize.select2." + i.id,
              a = "orientationchange.select2." + i.id;
          this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + o + " " + a);
        }, n.prototype._positionDropdown = function () {
          var t = e(window),
              n = this.$dropdown.hasClass("select2-dropdown--above"),
              i = this.$dropdown.hasClass("select2-dropdown--below"),
              r = null,
              o = this.$container.offset();
          o.bottom = o.top + this.$container.outerHeight(!1);
          var a = {
            height: this.$container.outerHeight(!1)
          };
          a.top = o.top, a.bottom = o.top + a.height;
          var s = this.$dropdown.outerHeight(!1),
              l = t.scrollTop(),
              u = t.scrollTop() + t.height(),
              c = l < o.top - s,
              d = u > o.bottom + s,
              h = {
            left: o.left,
            top: a.bottom
          },
              p = this.$dropdownParent;
          "static" === p.css("position") && (p = p.offsetParent());
          var f = {
            top: 0,
            left: 0
          };
          (e.contains(document.body, p[0]) || p[0].isConnected) && (f = p.offset()), h.top -= f.top, h.left -= f.left, n || i || (r = "below"), d || !c || n ? !c && d && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (h.top = a.top - f.top - s), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(h);
        }, n.prototype._resizeDropdown = function () {
          var e = {
            width: this.$container.outerWidth(!1) + "px"
          };
          this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
        }, n.prototype._showDropdown = function (e) {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
        }, n;
      }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, i) {
          this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i);
        }

        return e.prototype.showSearch = function (e, t) {
          return !(function e(t) {
            for (var n = 0, i = 0; i < t.length; i++) {
              var r = t[i];
              r.children ? n += e(r.children) : n++;
            }

            return n;
          }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
        }, e;
      }), t.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
        function t() {}

        return t.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("close", function (e) {
            i._handleSelectOnClose(e);
          });
        }, t.prototype._handleSelectOnClose = function (t, n) {
          if (n && null != n.originalSelect2Event) {
            var i = n.originalSelect2Event;
            if ("select" === i._type || "unselect" === i._type) return;
          }

          var r = this.getHighlightedResults();

          if (!(r.length < 1)) {
            var o = e.GetData(r[0], "data");
            null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
              data: o
            });
          }
        }, t;
      }), t.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function (e) {
            i._selectTriggered(e);
          }), t.on("unselect", function (e) {
            i._selectTriggered(e);
          });
        }, e.prototype._selectTriggered = function (e, t) {
          var n = t.originalEvent;
          n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
            originalEvent: n,
            originalSelect2Event: t
          });
        }, e;
      }), t.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function errorLoading() {
            return "The results could not be loaded.";
          },
          inputTooLong: function inputTooLong(e) {
            var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
            return 1 != t && (n += "s"), n;
          },
          inputTooShort: function inputTooShort(e) {
            return "Please enter " + (e.minimum - e.input.length) + " or more characters";
          },
          loadingMore: function loadingMore() {
            return "Loading more results…";
          },
          maximumSelected: function maximumSelected(e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function noResults() {
            return "No results found";
          },
          searching: function searching() {
            return "Searching…";
          },
          removeAllItems: function removeAllItems() {
            return "Remove all items";
          }
        };
      }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, r, o, a, s, l, u, c, d, h, p, f, g, m, v, y, b, w, C, x, _, T, k, S, A, E) {
        function D() {
          this.reset();
        }

        return D.prototype.apply = function (c) {
          if (null == (c = e.extend(!0, {}, this.defaults, c)).dataAdapter) {
            if (null != c.ajax ? c.dataAdapter = f : null != c.data ? c.dataAdapter = p : c.dataAdapter = h, c.minimumInputLength > 0 && (c.dataAdapter = u.Decorate(c.dataAdapter, v)), c.maximumInputLength > 0 && (c.dataAdapter = u.Decorate(c.dataAdapter, y)), c.maximumSelectionLength > 0 && (c.dataAdapter = u.Decorate(c.dataAdapter, b)), c.tags && (c.dataAdapter = u.Decorate(c.dataAdapter, g)), null == c.tokenSeparators && null == c.tokenizer || (c.dataAdapter = u.Decorate(c.dataAdapter, m)), null != c.query) {
              var d = t(c.amdBase + "compat/query");
              c.dataAdapter = u.Decorate(c.dataAdapter, d);
            }

            if (null != c.initSelection) {
              var E = t(c.amdBase + "compat/initSelection");
              c.dataAdapter = u.Decorate(c.dataAdapter, E);
            }
          }

          if (null == c.resultsAdapter && (c.resultsAdapter = n, null != c.ajax && (c.resultsAdapter = u.Decorate(c.resultsAdapter, _)), null != c.placeholder && (c.resultsAdapter = u.Decorate(c.resultsAdapter, x)), c.selectOnClose && (c.resultsAdapter = u.Decorate(c.resultsAdapter, S))), null == c.dropdownAdapter) {
            if (c.multiple) c.dropdownAdapter = w;else {
              var D = u.Decorate(w, C);
              c.dropdownAdapter = D;
            }

            if (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = u.Decorate(c.dropdownAdapter, k)), c.closeOnSelect && (c.dropdownAdapter = u.Decorate(c.dropdownAdapter, A)), null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass) {
              var L = t(c.amdBase + "compat/dropdownCss");
              c.dropdownAdapter = u.Decorate(c.dropdownAdapter, L);
            }

            c.dropdownAdapter = u.Decorate(c.dropdownAdapter, T);
          }

          if (null == c.selectionAdapter) {
            if (c.multiple ? c.selectionAdapter = r : c.selectionAdapter = i, null != c.placeholder && (c.selectionAdapter = u.Decorate(c.selectionAdapter, o)), c.allowClear && (c.selectionAdapter = u.Decorate(c.selectionAdapter, a)), c.multiple && (c.selectionAdapter = u.Decorate(c.selectionAdapter, s)), null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass) {
              var I = t(c.amdBase + "compat/containerCss");
              c.selectionAdapter = u.Decorate(c.selectionAdapter, I);
            }

            c.selectionAdapter = u.Decorate(c.selectionAdapter, l);
          }

          c.language = this._resolveLanguage(c.language), c.language.push("en");

          for (var N = [], M = 0; M < c.language.length; M++) {
            var q = c.language[M];
            -1 === N.indexOf(q) && N.push(q);
          }

          return c.language = N, c.translations = this._processTranslations(c.language, c.debug), c;
        }, D.prototype.reset = function () {
          function t(e) {
            return e.replace(/[^\u0000-\u007E]/g, function (e) {
              return d[e] || e;
            });
          }

          this.defaults = {
            amdBase: "./",
            amdLanguageBase: "./i18n/",
            closeOnSelect: !0,
            debug: !1,
            dropdownAutoWidth: !1,
            escapeMarkup: u.escapeMarkup,
            language: {},
            matcher: function n(i, r) {
              if ("" === e.trim(i.term)) return r;

              if (r.children && r.children.length > 0) {
                for (var o = e.extend(!0, {}, r), a = r.children.length - 1; a >= 0; a--) {
                  null == n(i, r.children[a]) && o.children.splice(a, 1);
                }

                return o.children.length > 0 ? o : n(i, o);
              }

              var s = t(r.text).toUpperCase(),
                  l = t(i.term).toUpperCase();
              return s.indexOf(l) > -1 ? r : null;
            },
            minimumInputLength: 0,
            maximumInputLength: 0,
            maximumSelectionLength: 0,
            minimumResultsForSearch: 0,
            selectOnClose: !1,
            scrollAfterSelect: !1,
            sorter: function sorter(e) {
              return e;
            },
            templateResult: function templateResult(e) {
              return e.text;
            },
            templateSelection: function templateSelection(e) {
              return e.text;
            },
            theme: "default",
            width: "resolve"
          };
        }, D.prototype.applyFromElement = function (e, t) {
          var n = e.language,
              i = this.defaults.language,
              r = t.prop("lang"),
              o = t.closest("[lang]").prop("lang"),
              a = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
          return e.language = a, e;
        }, D.prototype._resolveLanguage = function (t) {
          if (!t) return [];
          if (e.isEmptyObject(t)) return [];
          if (e.isPlainObject(t)) return [t];
          var n;
          n = e.isArray(t) ? t : [t];

          for (var i = [], r = 0; r < n.length; r++) {
            if (i.push(n[r]), "string" == typeof n[r] && n[r].indexOf("-") > 0) {
              var o = n[r].split("-")[0];
              i.push(o);
            }
          }

          return i;
        }, D.prototype._processTranslations = function (t, n) {
          for (var i = new c(), r = 0; r < t.length; r++) {
            var o = new c(),
                a = t[r];
            if ("string" == typeof a) try {
              o = c.loadPath(a);
            } catch (e) {
              try {
                a = this.defaults.amdLanguageBase + a, o = c.loadPath(a);
              } catch (e) {
                n && window.console && console.warn && console.warn('Select2: The language file for "' + a + '" could not be automatically loaded. A fallback will be used instead.');
              }
            } else o = e.isPlainObject(a) ? new c(a) : a;
            i.extend(o);
          }

          return i;
        }, D.prototype.set = function (t, n) {
          var i = {};
          i[e.camelCase(t)] = n;

          var r = u._convertData(i);

          e.extend(!0, this.defaults, r);
        }, new D();
      }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
        function r(t, r) {
          if (this.options = t, null != r && this.fromElement(r), null != r && (this.options = n.applyFromElement(this.options, r)), this.options = n.apply(this.options), r && r.is("input")) {
            var o = e(this.get("amdBase") + "compat/inputData");
            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o);
          }
        }

        return r.prototype.fromElement = function (e) {
          var n = ["select2"];
          null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
          var r = {};

          function o(e, t) {
            return t.toUpperCase();
          }

          for (var a = 0; a < e[0].attributes.length; a++) {
            var s = e[0].attributes[a].name;

            if ("data-" == s.substr(0, "data-".length)) {
              var l = s.substring("data-".length),
                  u = i.GetData(e[0], l);
              r[l.replace(/-([a-z])/g, o)] = u;
            }
          }

          t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (r = t.extend(!0, {}, e[0].dataset, r));
          var c = t.extend(!0, {}, i.GetData(e[0]), r);

          for (var d in c = i._convertData(c)) {
            t.inArray(d, n) > -1 || (t.isPlainObject(this.options[d]) ? t.extend(this.options[d], c[d]) : this.options[d] = c[d]);
          }

          return this;
        }, r.prototype.get = function (e) {
          return this.options[e];
        }, r.prototype.set = function (e, t) {
          this.options[e] = t;
        }, r;
      }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
        var r = function r(e, i) {
          null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), r.__super__.constructor.call(this);
          var o = e.attr("tabindex") || 0;
          n.StoreData(e[0], "old-tabindex", o), e.attr("tabindex", "-1");
          var a = this.options.get("dataAdapter");
          this.dataAdapter = new a(e, this.options);
          var s = this.render();

          this._placeContainer(s);

          var l = this.options.get("selectionAdapter");
          this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
          var u = this.options.get("dropdownAdapter");
          this.dropdown = new u(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
          var c = this.options.get("resultsAdapter");
          this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
          var d = this;
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
            d.trigger("selection:update", {
              data: e
            });
          }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this);
        };

        return n.Extend(r, n.Observable), r.prototype._generateId = function (e) {
          return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
        }, r.prototype._placeContainer = function (e) {
          e.insertAfter(this.$element);

          var t = this._resolveWidth(this.$element, this.options.get("width"));

          null != t && e.css("width", t);
        }, r.prototype._resolveWidth = function (e, t) {
          var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

          if ("resolve" == t) {
            var i = this._resolveWidth(e, "style");

            return null != i ? i : this._resolveWidth(e, "element");
          }

          if ("element" == t) {
            var r = e.outerWidth(!1);
            return r <= 0 ? "auto" : r + "px";
          }

          if ("style" == t) {
            var o = e.attr("style");
            if ("string" != typeof o) return null;

            for (var a = o.split(";"), s = 0, l = a.length; s < l; s += 1) {
              var u = a[s].replace(/\s/g, "").match(n);
              if (null !== u && u.length >= 1) return u[1];
            }

            return null;
          }

          return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t;
        }, r.prototype._bindAdapters = function () {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, r.prototype._registerDomEvents = function () {
          var e = this;
          this.$element.on("change.select2", function () {
            e.dataAdapter.current(function (t) {
              e.trigger("selection:update", {
                data: t
              });
            });
          }), this.$element.on("focus.select2", function (t) {
            e.trigger("focus", t);
          }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
          var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          null != t ? (this._observer = new t(function (t) {
            e._syncA(), e._syncS(null, t);
          }), this._observer.observe(this.$element[0], {
            attributes: !0,
            childList: !0,
            subtree: !1
          })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1));
        }, r.prototype._registerDataEvents = function () {
          var e = this;
          this.dataAdapter.on("*", function (t, n) {
            e.trigger(t, n);
          });
        }, r.prototype._registerSelectionEvents = function () {
          var t = this,
              n = ["toggle", "focus"];
          this.selection.on("toggle", function () {
            t.toggleDropdown();
          }), this.selection.on("focus", function (e) {
            t.focus(e);
          }), this.selection.on("*", function (i, r) {
            -1 === e.inArray(i, n) && t.trigger(i, r);
          });
        }, r.prototype._registerDropdownEvents = function () {
          var e = this;
          this.dropdown.on("*", function (t, n) {
            e.trigger(t, n);
          });
        }, r.prototype._registerResultsEvents = function () {
          var e = this;
          this.results.on("*", function (t, n) {
            e.trigger(t, n);
          });
        }, r.prototype._registerEvents = function () {
          var e = this;
          this.on("open", function () {
            e.$container.addClass("select2-container--open");
          }), this.on("close", function () {
            e.$container.removeClass("select2-container--open");
          }), this.on("enable", function () {
            e.$container.removeClass("select2-container--disabled");
          }), this.on("disable", function () {
            e.$container.addClass("select2-container--disabled");
          }), this.on("blur", function () {
            e.$container.removeClass("select2-container--focus");
          }), this.on("query", function (t) {
            e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (n) {
              e.trigger("results:all", {
                data: n,
                query: t
              });
            });
          }), this.on("query:append", function (t) {
            this.dataAdapter.query(t, function (n) {
              e.trigger("results:append", {
                data: n,
                query: t
              });
            });
          }), this.on("keypress", function (t) {
            var n = t.which;
            e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault());
          });
        }, r.prototype._syncAttributes = function () {
          this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
        }, r.prototype._isChangeMutation = function (t, n) {
          var i = !1,
              r = this;

          if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
            if (n) {
              if (n.addedNodes && n.addedNodes.length > 0) for (var o = 0; o < n.addedNodes.length; o++) {
                n.addedNodes[o].selected && (i = !0);
              } else n.removedNodes && n.removedNodes.length > 0 ? i = !0 : e.isArray(n) && e.each(n, function (e, t) {
                if (r._isChangeMutation(e, t)) return i = !0, !1;
              });
            } else i = !0;
            return i;
          }
        }, r.prototype._syncSubtree = function (e, t) {
          var n = this._isChangeMutation(e, t),
              i = this;

          n && this.dataAdapter.current(function (e) {
            i.trigger("selection:update", {
              data: e
            });
          });
        }, r.prototype.trigger = function (e, t) {
          var n = r.__super__.trigger,
              i = {
            open: "opening",
            close: "closing",
            select: "selecting",
            unselect: "unselecting",
            clear: "clearing"
          };

          if (void 0 === t && (t = {}), e in i) {
            var o = i[e],
                a = {
              prevented: !1,
              name: e,
              args: t
            };
            if (n.call(this, o, a), a.prevented) return void (t.prevented = !0);
          }

          n.call(this, e, t);
        }, r.prototype.toggleDropdown = function () {
          this.isDisabled() || (this.isOpen() ? this.close() : this.open());
        }, r.prototype.open = function () {
          this.isOpen() || this.isDisabled() || this.trigger("query", {});
        }, r.prototype.close = function (e) {
          this.isOpen() && this.trigger("close", {
            originalEvent: e
          });
        }, r.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, r.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, r.prototype.isOpen = function () {
          return this.$container.hasClass("select2-container--open");
        }, r.prototype.hasFocus = function () {
          return this.$container.hasClass("select2-container--focus");
        }, r.prototype.focus = function (e) {
          this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
        }, r.prototype.enable = function (e) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
          var t = !e[0];
          this.$element.prop("disabled", t);
        }, r.prototype.data = function () {
          this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var e = [];
          return this.dataAdapter.current(function (t) {
            e = t;
          }), e;
        }, r.prototype.val = function (t) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
          var n = t[0];
          e.isArray(n) && (n = e.map(n, function (e) {
            return e.toString();
          })), this.$element.val(n).trigger("input").trigger("change");
        }, r.prototype.destroy = function () {
          this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
        }, r.prototype.render = function () {
          var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
          return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t;
        }, r;
      }), t.define("jquery-mousewheel", ["jquery"], function (e) {
        return e;
      }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, n, i, r) {
        if (null == e.fn.select2) {
          var o = ["open", "close", "destroy"];

          e.fn.select2 = function (t) {
            if ("object" == _typeof(t = t || {})) return this.each(function () {
              var i = e.extend(!0, {}, t);
              new n(e(this), i);
            }), this;

            if ("string" == typeof t) {
              var i,
                  a = Array.prototype.slice.call(arguments, 1);
              return this.each(function () {
                var e = r.GetData(this, "select2");
                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, a);
              }), e.inArray(t, o) > -1 ? this : i;
            }

            throw new Error("Invalid arguments for Select2: " + t);
          };
        }

        return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n;
      }), {
        define: t.define,
        require: t.require
      };
    }(),
        n = t.require("jquery.select2");

    return e.fn.select2.amd = t, n;
  }) ? i.apply(t, r) : i) || (e.exports = o);
}, function (e, t, n) {
  "use strict";

  var i = "bfred-it:object-fit-images",
      r = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
      o = "undefined" == typeof Image ? {
    style: {
      "object-position": 1
    }
  } : new Image(),
      a = ("object-fit" in o.style),
      s = ("object-position" in o.style),
      l = ("background-size" in o.style),
      u = "string" == typeof o.currentSrc,
      c = o.getAttribute,
      d = o.setAttribute,
      h = !1;

  function p(e, t, n) {
    var i = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (n || 0) + "'%3E%3C/svg%3E";
    c.call(e, "src") !== i && d.call(e, "src", i);
  }

  function f(e, t) {
    e.naturalWidth ? t(e) : setTimeout(f, 100, e, t);
  }

  function g(e) {
    var t = function (e) {
      for (var t, n = getComputedStyle(e).fontFamily, i = {}; null !== (t = r.exec(n));) {
        i[t[1]] = t[2];
      }

      return i;
    }(e),
        n = e[i];

    if (t["object-fit"] = t["object-fit"] || "fill", !n.img) {
      if ("fill" === t["object-fit"]) return;
      if (!n.skipTest && a && !t["object-position"]) return;
    }

    if (!n.img) {
      n.img = new Image(e.width, e.height), n.img.srcset = c.call(e, "data-ofi-srcset") || e.srcset, n.img.src = c.call(e, "data-ofi-src") || e.src, d.call(e, "data-ofi-src", e.src), e.srcset && d.call(e, "data-ofi-srcset", e.srcset), p(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = "");

      try {
        !function (e) {
          var t = {
            get: function get(t) {
              return e[i].img[t || "src"];
            },
            set: function set(t, n) {
              return e[i].img[n || "src"] = t, d.call(e, "data-ofi-" + n, t), g(e), t;
            }
          };
          Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
            get: function get() {
              return t.get("currentSrc");
            }
          }), Object.defineProperty(e, "srcset", {
            get: function get() {
              return t.get("srcset");
            },
            set: function set(e) {
              return t.set(e, "srcset");
            }
          });
        }(e);
      } catch (e) {
        window.console && console.warn("https://bit.ly/ofi-old-browser");
      }
    }

    !function (e) {
      if (e.srcset && !u && window.picturefill) {
        var t = window.picturefill._;
        e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
          reselect: !0
        }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
          reselect: !0
        })), e.currentSrc = e[t.ns].curSrc || e.src;
      }
    }(n.img), e.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = t["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(t["object-fit"]) ? f(n.img, function () {
      n.img.naturalWidth > e.width || n.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto";
    }) : e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), f(n.img, function (t) {
      p(e, t.naturalWidth, t.naturalHeight);
    });
  }

  function m(e, t) {
    var n = !h && !e;
    if (t = t || {}, e = e || "img", s && !t.skipTest || !l) return !1;
    "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);

    for (var r = 0; r < e.length; r++) {
      e[r][i] = e[r][i] || {
        skipTest: t.skipTest
      }, g(e[r]);
    }

    n && (document.body.addEventListener("load", function (e) {
      "IMG" === e.target.tagName && m(e.target, {
        skipTest: t.skipTest
      });
    }, !0), h = !0, e = "img"), t.watchMQ && window.addEventListener("resize", m.bind(null, e, {
      skipTest: t.skipTest
    }));
  }

  m.supportsObjectFit = a, m.supportsObjectPosition = s, function () {
    function e(e, t) {
      return e[i] && e[i].img && ("src" === t || "srcset" === t) ? e[i].img : e;
    }

    s || (HTMLImageElement.prototype.getAttribute = function (t) {
      return c.call(e(this, t), t);
    }, HTMLImageElement.prototype.setAttribute = function (t, n) {
      return d.call(e(this, t), t, String(n));
    });
  }(), e.exports = m;
}, function (e, t, n) {
  e.exports = n(13);
}, function (e, t, n) {
  var i,
      r = {
    domainThreshold: 2,
    secondLevelThreshold: 2,
    topLevelThreshold: 2,
    defaultDomains: ["msn.com", "bellsouth.net", "telus.net", "comcast.net", "optusnet.com.au", "earthlink.net", "qq.com", "sky.com", "icloud.com", "mac.com", "sympatico.ca", "googlemail.com", "att.net", "xtra.co.nz", "web.de", "cox.net", "gmail.com", "ymail.com", "aim.com", "rogers.com", "verizon.net", "rocketmail.com", "google.com", "optonline.net", "sbcglobal.net", "aol.com", "me.com", "btinternet.com", "charter.net", "shaw.ca"],
    defaultSecondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],
    defaultTopLevelDomains: ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de", "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu", "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu"],
    run: function run(e) {
      e.domains = e.domains || r.defaultDomains, e.secondLevelDomains = e.secondLevelDomains || r.defaultSecondLevelDomains, e.topLevelDomains = e.topLevelDomains || r.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || r.sift3Distance;

      var t = function t(e) {
        return e;
      },
          n = e.suggested || t,
          i = e.empty || t,
          o = r.suggest(r.encodeEmail(e.email), e.domains, e.secondLevelDomains, e.topLevelDomains, e.distanceFunction);

      return o ? n(o) : i();
    },
    suggest: function suggest(e, t, n, i, r) {
      e = e.toLowerCase();
      var o = this.splitEmail(e);
      if (n && i && -1 !== n.indexOf(o.secondLevelDomain) && -1 !== i.indexOf(o.topLevelDomain)) return !1;
      if (l = this.findClosestDomain(o.domain, t, r, this.domainThreshold)) return l != o.domain && {
        address: o.address,
        domain: l,
        full: o.address + "@" + l
      };
      var a = this.findClosestDomain(o.secondLevelDomain, n, r, this.secondLevelThreshold),
          s = this.findClosestDomain(o.topLevelDomain, i, r, this.topLevelThreshold);

      if (o.domain) {
        var l = o.domain,
            u = !1;
        if (a && a != o.secondLevelDomain && (l = l.replace(o.secondLevelDomain, a), u = !0), s && s != o.topLevelDomain && (l = l.replace(o.topLevelDomain, s), u = !0), 1 == u) return {
          address: o.address,
          domain: l,
          full: o.address + "@" + l
        };
      }

      return !1;
    },
    findClosestDomain: function findClosestDomain(e, t, n, i) {
      var r;
      i = i || this.topLevelThreshold;
      var o = 99,
          a = null;
      if (!e || !t) return !1;
      n || (n = this.sift3Distance);

      for (var s = 0; s < t.length; s++) {
        if (e === t[s]) return e;
        (r = n(e, t[s])) < o && (o = r, a = t[s]);
      }

      return o <= i && null !== a && a;
    },
    sift3Distance: function sift3Distance(e, t) {
      if (null == e || 0 === e.length) return null == t || 0 === t.length ? 0 : t.length;
      if (null == t || 0 === t.length) return e.length;

      for (var n = 0, i = 0, r = 0, o = 0; n + i < e.length && n + r < t.length;) {
        if (e.charAt(n + i) == t.charAt(n + r)) o++;else {
          i = 0, r = 0;

          for (var a = 0; a < 5; a++) {
            if (n + a < e.length && e.charAt(n + a) == t.charAt(n)) {
              i = a;
              break;
            }

            if (n + a < t.length && e.charAt(n) == t.charAt(n + a)) {
              r = a;
              break;
            }
          }
        }
        n++;
      }

      return (e.length + t.length) / 2 - o;
    },
    splitEmail: function splitEmail(e) {
      var t = e.trim().split("@");
      if (t.length < 2) return !1;

      for (var n = 0; n < t.length; n++) {
        if ("" === t[n]) return !1;
      }

      var i = t.pop(),
          r = i.split("."),
          o = "",
          a = "";
      if (0 == r.length) return !1;
      if (1 == r.length) a = r[0];else {
        o = r[0];

        for (n = 1; n < r.length; n++) {
          a += r[n] + ".";
        }

        a = a.substring(0, a.length - 1);
      }
      return {
        topLevelDomain: a,
        secondLevelDomain: o,
        domain: i,
        address: t.join("@")
      };
    },
    encodeEmail: function encodeEmail(e) {
      var t = encodeURI(e);
      return t = t.replace("%20", " ").replace("%25", "%").replace("%5E", "^").replace("%60", "`").replace("%7B", "{").replace("%7C", "|").replace("%7D", "}");
    }
  };
  e.exports && (e.exports = r), void 0 === (i = function () {
    return r;
  }.apply(t, [])) || (e.exports = i), "undefined" != typeof window && window.jQuery && (jQuery.fn.mailcheck = function (e) {
    var t = this;

    if (e.suggested) {
      var n = e.suggested;

      e.suggested = function (e) {
        n(t, e);
      };
    }

    if (e.empty) {
      var i = e.empty;

      e.empty = function () {
        i.call(null, t);
      };
    }

    e.email = this.val(), r.run(e);
  });
}, function (e, t, n) {
  n(6), e.exports = n(23);
}, function (e, t, n) {
  n(7), n(8), n(9), n(10), n(11), n(12), n(14), n(15), n(20), n(21);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  n(0);
  var i = n(2);
  n.n(i)()();
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i);
  r()('a[href^="#"]').click(function () {
    var e = r()(this),
        t = r()(this).attr("href");

    if (null != e.attr("data-anime")) {
      var n = e.attr("data-anime");
      r()("html, body").animate({
        scrollTop: r()(t).offset().top
      }, parseInt(n));
    } else r()("html, body").animate({
      scrollTop: r()(t).offset().top
    }, 500);

    return !1;
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i);
  r()(".select-lang select").on("change", function () {
    var e = r()(this).val();
    return e && (window.location = e), !1;
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i);
  r()(".accordion").each(function () {
    var e = r()(this),
        t = e.find(".accordion-head"),
        n = e.find(".accordion-content");
    n.css({
      height: "0px"
    }), t.on("click", function () {
      var t = n.find(".container").outerHeight();
      r()(".accordion-content").css({
        height: "0px"
      }), e.hasClass("is-active") ? (e.removeClass("is-active"), n.css({
        height: "0px"
      })) : (r()(".accordion").removeClass("is-active"), e.addClass("is-active"), n.css({
        height: t + "px"
      }));
    });
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i);
  n(1);

  function o(e, t) {
    return "" === r.a.trim(e.term) ? t : void 0 === t.text ? null : t.text.indexOf(e.term.substr(0, 1).toUpperCase() + e.term.substr(1)) > -1 ? r.a.extend({}, t, !0) : null;
  }

  r()(".select2").each(function () {
    var e = r()(this),
        t = e.data("placeholder");
    e.select2({
      allowClear: !1,
      minimumResultsForSearch: -1,
      placeholder: t
    });
  }), r()(".select2.with-search").each(function () {
    var e,
        t,
        n,
        i = r()(this),
        a = i.attr("placeholder");
    i.select2((n = function n(e, t) {
      return "" === r.a.trim(e.term) ? t : t.text.toUpperCase().indexOf(e.term.toUpperCase()) > -1 ? r.a.extend({}, t, !0) : null;
    }, (t = "matcher") in (e = {
      allowClear: !1,
      placeholder: a,
      matcher: o
    }) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e));
  }), r()(".select2").on("select2:select", function (e) {
    r()(this).removeClass("error").addClass("valid");
  }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && r()(".select2").each(function () {
    var e = r()(this),
        t = e.data("placeholder");
    console.log(t), console.log(e.find("option[disabled][selected]")), e.find("option[disabled][selected]").append(t), e.parents(".select2-container").addClass("select"), e.removeClass("select2"), r()(".select").removeClass("select2-container"), e.data("select2") && e.select2("destroy");
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i),
      o = n(3),
      a = n.n(o),
      s = {};

  if (s = "fr" == r()("html").attr("lang") ? {
    af: "Afghanistan (‫افغانستان‬‎)",
    al: "Albanie (Shqipëri)",
    dz: "Algérie (‫الجزائر‬‎)",
    as: "Samoa américaines (American Samoa)",
    ad: "Andorre (Andorra)",
    ao: "Angola",
    ai: "Anguilla",
    ag: "Antigua-et-Barbuda (Antigua and Barbuda)",
    ar: "Argentine (Argentina)",
    am: "Arménie (Հայաստան)",
    aw: "Aruba",
    au: "Australie (Australia)",
    at: "Autriche (Österreich)",
    az: "Azerbaïdjan (Azərbaycan)",
    bs: "Bahamas",
    bh: "Bahreïn (‫البحرين‬‎)",
    bd: "Bangladesh (বাংলাদেশ)",
    bb: "Barbade (Barbados)",
    by: "Biélorussie (Беларусь)",
    be: "Belgique (België)",
    bz: "Belize",
    bj: "Bénin",
    bm: "Bermudes (Bermuda)",
    bt: "Bhoutan (འབྲུག)",
    bo: "Bolivie (Bolivia)",
    ba: "Bosnie-Herzégovine (Босна и Херцеговина)",
    bw: "Botswana",
    br: "Brésil (Brasil)",
    io: "Territoire britannique de l’océan Indien (British Indian Ocean Territory)",
    vg: "Îles Vierges britanniques (British Virgin Islands)",
    bn: "Brunei",
    bg: "Bulgarie (България)",
    bf: "Burkina Faso",
    bi: "Burundi (Uburundi)",
    kh: "Cambodge (កម្ពុជា)",
    cm: "Cameroun",
    ca: "Canada",
    cv: "Cap-Vert (Kabu Verdi)",
    bq: "Bonaire, Saint-Eustache et Saba (Caribbean Netherlands)",
    ky: "Îles Caïmans (Cay Islands)",
    cf: "République centrafricaine",
    td: "Tchad",
    cl: "Chili (Chile)",
    cn: "Chine (中国)",
    co: "Colombie (Colombia)",
    km: "Comores (‫جزر القمر‬‎)",
    cd: "République démocratique du Congo (Jamhuri ya Kidemokrasia ya Kongo)",
    cg: "République du Congo / (Congo) (Congo-Brazzaville)",
    ck: "Îles Cook (Cook Islands)",
    cr: "Costa Rica",
    ci: "Côte d’Ivoire",
    hr: "Croatie (Hrvatska)",
    cu: "Cuba",
    cw: "Curaçao",
    cy: "Chypre (Κύπρος)",
    cz: "République tchèque (Česká republika)",
    dk: "Danemark (Danmark)",
    dj: "Djibouti",
    dm: "Dominique (Dominica)",
    "do": "République dominicaine (República Dominicana)",
    ec: "Équateur (Ecuador)",
    eg: "Égypte (‫مصر‬‎)",
    sv: "Salvador (El Salvador)",
    gq: "Guinée équatoriale (Guinea Ecuatorial)",
    er: "Érythrée (Eritrea)",
    ee: "Estonie (Eesti)",
    et: "Éthiopie (Ethiopia)",
    fk: "Îles Malouines (Islas Malvinas)",
    fo: "Îles Féroé (Føroyar)",
    fj: "Fidji (Fiji)",
    fi: "Finlande (Suomi)",
    fr: "France",
    gf: "Guyane (Guyane française)",
    pf: "Polynésie française",
    ga: "Gabon",
    gm: "Gambie (Gambia)",
    ge: "Géorgie (საქართველო)",
    de: "Allemagne (Deutschland)",
    gh: "Ghana (Gaana)",
    gi: "Gibraltar",
    gr: "Grèce (Ελλάδα)",
    gl: "Groenland (Kalaallit Nunaat)",
    gd: "Grenade (Grenada)",
    gp: "Guadeloupe",
    gu: "Guam",
    gt: "Guatemala",
    gn: "Guinée",
    gw: "Guinée-Bissau (República da Guiné-Bissau)",
    gy: "Guyana",
    ht: "Haïti (Haiti)",
    hn: "Honduras",
    hk: "Hong Kong (香港)",
    hu: "Hongrie (Magyarország)",
    is: "Islande (Ísland)",
    "in": "Inde (भारत)",
    id: "Indonésie (Indonesia)",
    ir: "Iran (‫ایران‬‎)",
    iq: "Irak (‫العراق‬‎)",
    ie: "Irlande (Ireland)",
    il: "Israël (‫ישראל‬‎)",
    it: "Italie (Italia)",
    jm: "Jamaïque (Jamaica)",
    jp: "Japon (日本)",
    jo: "Jordanie (‫الأردن‬‎)",
    kz: "Kazakhstan (Казахстан)",
    ke: "Kenya",
    ki: "Kiribati",
    kw: "Koweït (‫الكويت‬‎)",
    kg: "Kirghizistan (Кыргызстан)",
    la: "Laos (ລາວ)",
    lv: "Lettonie (Latvija)",
    lb: "Liban (‫لبنان‬‎)",
    ls: "Lesotho",
    lr: "Liberia",
    ly: "Libye (‫ليبيا‬‎)",
    li: "Liechtenstein",
    lt: "Lituanie (Lietuva)",
    lu: "Luxembourg",
    mo: "Macao (澳門)",
    mk: "Macédoine (Македонија)",
    mg: "Madagascar (Madagasikara)",
    mw: "Malawi",
    my: "Malaisie (Malaysia)",
    mv: "Maldives",
    ml: "Mali",
    mt: "Malte (Malta)",
    mh: "Marshall (Marshall Islands)",
    mq: "Martinique",
    mr: "Mauritanie (‫موريتانيا‬‎)",
    mu: "Maurice (Moris)",
    mx: "Mexique (México)",
    fm: "Micronésie (Micronesia)",
    md: "Moldavie (Republica Moldova)",
    mc: "Monaco",
    mn: "Mongolie (Монгол)",
    me: "Monténégro (Crna Gora)",
    ms: "Montserrat",
    ma: "Maroc (‫المغرب‬‎)",
    mz: "Mozambique (Moçambique)",
    mm: "Birmanie (မြန်မာ)",
    na: "Namibie (Namibië)",
    nr: "Nauru",
    np: "Népal (नेपाल)",
    nl: "Pays-Bas (Nederland)",
    nc: "Nouvelle-Calédonie",
    nz: "Nouvelle-Zélande (New Zealand)",
    ni: "Nicaragua",
    ne: "Niger (Nijar)",
    ng: "Nigeria",
    nu: "Niue",
    nf: "Île Norfolk (Norfolk Island)",
    kp: "Corée du Nord (조선 민주주의 인민 공화국)",
    mp: "Îles Mariannes du Nord (Northern Mariana Islands)",
    no: "Norvège (Norge)",
    om: "Oman (‫عُمان‬‎)",
    pk: "Pakistan (‫پاکستان‬‎)",
    pw: "Palaos (Palau)",
    ps: "Autorité palestinienne (‫فلسطين‬‎)",
    pa: "Panama (Panamá)",
    pg: "Papouasie-Nouvelle-Guinée (Papua New Guinea)",
    py: "Paraguay",
    pe: "Pérou (Perú)",
    ph: "Philippines",
    pl: "Pologne (Polska)",
    pt: "Portugal",
    pr: "Porto Rico (Puerto Rico)",
    qa: "Qatar (‫قطر‬‎)",
    re: "La Réunion",
    ro: "Roumanie (România)",
    ru: "Russie (Россия)",
    rw: "Rwanda",
    bl: "Saint-Barthélemy",
    sh: "Sainte-Hélène, Ascension et Tristan da Cunha (Saint Helena)",
    kn: "Saint-Christophe-et-Niévès (Saint Kitts and Nevis)",
    lc: "Sainte-Lucie (Saint Lucia)",
    mf: "Saint-Martin (Antilles françaises) (partie française))",
    pm: "Saint-Pierre-et-Miquelon",
    vc: "Saint-Vincent-et-les-Grenadines (Saint Vincent and the Grenadines)",
    ws: "Samoa",
    sm: "Saint-Marin (San Marino)",
    st: "Sao Tomé-et-Principe (São Tomé e Príncipe)",
    sa: "Arabie saoudite (‫المملكة العربية السعودية‬‎)",
    sn: "Sénégal",
    rs: "Serbie (Србија)",
    sc: "Seychelles",
    sl: "Sierra Leone",
    sg: "Singapour (Singapore)",
    sx: "Saint-Martin (Sint Maarten)",
    sk: "Slovaquie (Slovensko)",
    si: "Slovénie (Slovenija)",
    sb: "Salomon (Solomon Islands)",
    so: "Somalie (Soomaaliya)",
    za: "Afrique du Sud (South Africa)",
    kr: "Corée du Sud (대한민국)",
    ss: "Soudan du Sud (‫جنوب السودان‬‎)",
    es: "Espagne (España)",
    lk: "Sri Lanka (ශ්‍රී ලංකාව)",
    sd: "Soudan (‫السودان‬‎)",
    sr: "Suriname",
    sz: "Swaziland",
    se: "Suède (Sverige)",
    ch: "Suisse (Schweiz)",
    sy: "Syrie (‫سوريا‬‎)",
    tw: "Taïwan / (République de Chine (Taïwan)) (台灣)",
    tj: "Tadjikistan (Tajikistan)",
    tz: "Tanzanie (Tanzania)",
    th: "Thaïlande (ไทย)",
    tl: "Timor oriental (Timor-Leste)",
    tg: "Togo",
    tk: "Tokelau",
    to: "Tonga",
    tt: "Trinité-et-Tobago (Trinidad and Tobago)",
    tn: "Tunisie (‫تونس‬‎)",
    tr: "Turquie (Türkiye)",
    tm: "Turkménistan (Turkmenistan)",
    tc: "Îles Turques-et-Caïques (Turks and Caicos Islands)",
    tv: "Tuvalu",
    vi: "Îles Vierges des États-Unis (U.S. Virgin Islands)",
    ug: "Ouganda (Uganda)",
    ua: "Ukraine (Україна)",
    ae: "Émirats arabes unis (‫الإمارات العربية المتحدة‬‎)",
    gb: "Royaume-Uni (United Kingdom)",
    us: "États-Unis (United States)",
    uy: "Uruguay",
    uz: "Ouzbékistan (Oʻzbekiston)",
    vu: "Vanuatu",
    va: "État de la Cité du Vatican (Città del Vaticano)",
    ve: "Venezuela",
    vn: "Viêt Nam (Việt Nam)",
    wf: "Wallis-et-Futuna (Wallis and Futuna)",
    ye: "Yémen (‫اليمن‬‎)",
    zm: "Zambie (Zambia)",
    zw: "Zimbabwe"
  } : {
    be: "België"
  }, r()("#intl-tel-input").length >= 1) {
    var l = document.querySelector("#intl-tel-input"),
        u = ["be", "nl", "lu"];
    "nl_nl" == l.dataset.lang && (u = ["nl", "be", "lu"]);
    var c = a()(l, {
      preferredCountries: u,
      separateDialCode: !0,
      localizedCountries: s,
      hiddenInput: "full_number",
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.0/js/utils.js",
      customPlaceholder: function customPlaceholder(e, t) {
        return e;
      }
    }),
        d = r()("#intl-tel-input"),
        h = d.attr("data-init-value"),
        p = d.attr("data-init-country");
    h && d.val(h), p && c.setCountry(p);
    c.getSelectedCountryData();
    r()("form").on("submit", function () {
      var e = c.getSelectedCountryData();
      r()("#intl-tel-input-country-code").val("" + e.dialCode), r()("#intl-tel-input-full-number-less").val("" + c.getNumber().replace("+", ""));
    });
  }
}, function (e, t, n) {
  var i;
  i = function i(e) {
    "use strict";

    return function () {
      for (var t = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]], n = 0; n < t.length; n++) {
        var i = t[n];
        t[n] = {
          name: i[0],
          iso2: i[1],
          dialCode: i[2],
          priority: i[3] || 0,
          areaCodes: i[4] || null
        };
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      var o = {
        getInstance: function getInstance(e) {
          var t = e.getAttribute("data-intl-tel-input-id");
          return window.intlTelInputGlobals.instances[t];
        },
        instances: {}
      };
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (window.intlTelInputGlobals = o);
      var a = 0,
          s = {
        allowDropdown: !0,
        autoHideDialCode: !0,
        autoPlaceholder: "polite",
        customContainer: "",
        customPlaceholder: null,
        dropdownContainer: null,
        excludeCountries: [],
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: "",
        initialCountry: "",
        localizedCountries: null,
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: !1,
        utilsScript: ""
      },
          l = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.addEventListener("load", function () {
        window.intlTelInputGlobals.windowLoaded = !0;
      });

      var u = function u(e, t) {
        for (var n = Object.keys(e), i = 0; i < n.length; i++) {
          t(n[i], e[n[i]]);
        }
      },
          c = function c(e) {
        u(window.intlTelInputGlobals.instances, function (t) {
          window.intlTelInputGlobals.instances[t][e]();
        });
      },
          d = function () {
        function n(e, t) {
          var i = this;
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, n), this.id = a++, this.telInput = e, this.activeItem = null, this.highlightedItem = null;
          var r = t || {};
          this.options = {}, u(s, function (e, t) {
            i.options[e] = r.hasOwnProperty(e) ? r[e] : t;
          }), this.hadInitialPlaceholder = Boolean(e.getAttribute("placeholder"));
        }

        var i, o, d;
        return i = n, (o = [{
          key: "_init",
          value: function value() {
            var e = this;

            if (this.options.nationalMode && (this.options.autoHideDialCode = !1), this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && (document.body.classList.add("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = document.body)), "undefined" != typeof Promise) {
              var t = new Promise(function (t, n) {
                e.resolveAutoCountryPromise = t, e.rejectAutoCountryPromise = n;
              }),
                  n = new Promise(function (t, n) {
                e.resolveUtilsScriptPromise = t, e.rejectUtilsScriptPromise = n;
              });
              this.promise = Promise.all([t, n]);
            } else this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function () {}, this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function () {};

            this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
          }
        }, {
          key: "_processCountryData",
          value: function value() {
            this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries(), this.options.localizedCountries && this._translateCountriesByLocale(), (this.options.onlyCountries.length || this.options.localizedCountries) && this.countries.sort(this._countryNameSort);
          }
        }, {
          key: "_addCountryCode",
          value: function value(t, n, i) {
            n.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = n.length), this.countryCodes.hasOwnProperty(n) || (this.countryCodes[n] = []);

            for (var r = 0; r < this.countryCodes[n].length; r++) {
              if (this.countryCodes[n][r] === t) return;
            }

            var o = i !== e ? i : this.countryCodes[n].length;
            this.countryCodes[n][o] = t;
          }
        }, {
          key: "_processAllCountries",
          value: function value() {
            if (this.options.onlyCountries.length) {
              var e = this.options.onlyCountries.map(function (e) {
                return e.toLowerCase();
              });
              this.countries = t.filter(function (t) {
                return e.indexOf(t.iso2) > -1;
              });
            } else if (this.options.excludeCountries.length) {
              var n = this.options.excludeCountries.map(function (e) {
                return e.toLowerCase();
              });
              this.countries = t.filter(function (e) {
                return -1 === n.indexOf(e.iso2);
              });
            } else this.countries = t;
          }
        }, {
          key: "_translateCountriesByLocale",
          value: function value() {
            for (var e = 0; e < this.countries.length; e++) {
              var t = this.countries[e].iso2.toLowerCase();
              this.options.localizedCountries.hasOwnProperty(t) && (this.countries[e].name = this.options.localizedCountries[t]);
            }
          }
        }, {
          key: "_countryNameSort",
          value: function value(e, t) {
            return e.name.localeCompare(t.name);
          }
        }, {
          key: "_processCountryCodes",
          value: function value() {
            this.countryCodeMaxLen = 0, this.dialCodes = {}, this.countryCodes = {};

            for (var e = 0; e < this.countries.length; e++) {
              var t = this.countries[e];
              this.dialCodes[t.dialCode] || (this.dialCodes[t.dialCode] = !0), this._addCountryCode(t.iso2, t.dialCode, t.priority);
            }

            for (var n = 0; n < this.countries.length; n++) {
              var i = this.countries[n];
              if (i.areaCodes) for (var r = this.countryCodes[i.dialCode][0], o = 0; o < i.areaCodes.length; o++) {
                for (var a = i.areaCodes[o], s = 1; s < a.length; s++) {
                  var l = i.dialCode + a.substr(0, s);
                  this._addCountryCode(r, l), this._addCountryCode(i.iso2, l);
                }

                this._addCountryCode(i.iso2, i.dialCode + a);
              }
            }
          }
        }, {
          key: "_processPreferredCountries",
          value: function value() {
            this.preferredCountries = [];

            for (var e = 0; e < this.options.preferredCountries.length; e++) {
              var t = this.options.preferredCountries[e].toLowerCase(),
                  n = this._getCountryData(t, !1, !0);

              n && this.preferredCountries.push(n);
            }
          }
        }, {
          key: "_createEl",
          value: function value(e, t, n) {
            var i = document.createElement(e);
            return t && u(t, function (e, t) {
              return i.setAttribute(e, t);
            }), n && n.appendChild(i), i;
          }
        }, {
          key: "_generateMarkup",
          value: function value() {
            this.telInput.hasAttribute("autocomplete") || this.telInput.form && this.telInput.form.hasAttribute("autocomplete") || this.telInput.setAttribute("autocomplete", "off");
            var e = "iti";
            this.options.allowDropdown && (e += " iti--allow-dropdown"), this.options.separateDialCode && (e += " iti--separate-dial-code"), this.options.customContainer && (e += " ", e += this.options.customContainer);

            var t = this._createEl("div", {
              "class": e
            });

            if (this.telInput.parentNode.insertBefore(t, this.telInput), this.flagsContainer = this._createEl("div", {
              "class": "iti__flag-container"
            }, t), t.appendChild(this.telInput), this.selectedFlag = this._createEl("div", {
              "class": "iti__selected-flag",
              role: "combobox",
              "aria-owns": "iti-".concat(this.id, "__country-listbox"),
              "aria-expanded": "false"
            }, this.flagsContainer), this.selectedFlagInner = this._createEl("div", {
              "class": "iti__flag"
            }, this.selectedFlag), this.options.separateDialCode && (this.selectedDialCode = this._createEl("div", {
              "class": "iti__selected-dial-code"
            }, this.selectedFlag)), this.options.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.dropdownArrow = this._createEl("div", {
              "class": "iti__arrow"
            }, this.selectedFlag), this.countryList = this._createEl("ul", {
              "class": "iti__country-list iti__hide",
              id: "iti-".concat(this.id, "__country-listbox"),
              role: "listbox"
            }), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), this._createEl("li", {
              "class": "iti__divider",
              role: "separator",
              "aria-disabled": "true"
            }, this.countryList)), this._appendListItems(this.countries, "iti__standard"), this.options.dropdownContainer ? (this.dropdown = this._createEl("div", {
              "class": "iti iti--container"
            }), this.dropdown.appendChild(this.countryList)) : this.flagsContainer.appendChild(this.countryList)), this.options.hiddenInput) {
              var n = this.options.hiddenInput,
                  i = this.telInput.getAttribute("name");

              if (i) {
                var r = i.lastIndexOf("[");
                -1 !== r && (n = "".concat(i.substr(0, r), "[").concat(n, "]"));
              }

              this.hiddenInput = this._createEl("input", {
                type: "hidden",
                name: n
              }), t.appendChild(this.hiddenInput);
            }
          }
        }, {
          key: "_appendListItems",
          value: function value(e, t, n) {
            for (var i = "", r = 0; r < e.length; r++) {
              var o = e[r],
                  a = n ? "-preferred" : "";
              i += "<li class='iti__country ".concat(t, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(o.iso2).concat(a, "' role='option' data-dial-code='").concat(o.dialCode, "' data-country-code='").concat(o.iso2, "'>"), i += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(o.iso2, "'></div></div>"), i += "<span class='iti__country-name'>".concat(o.name, "</span>"), i += "<span class='iti__dial-code'>+".concat(o.dialCode, "</span>"), i += "</li>";
            }

            this.countryList.insertAdjacentHTML("beforeend", i);
          }
        }, {
          key: "_setInitialState",
          value: function value() {
            var e = this.telInput.value,
                t = this._getDialCode(e),
                n = this._isRegionlessNanp(e),
                i = this.options,
                r = i.initialCountry,
                o = i.nationalMode,
                a = i.autoHideDialCode,
                s = i.separateDialCode;

            t && !n ? this._updateFlagFromNumber(e) : "auto" !== r && (r ? this._setFlag(r.toLowerCase()) : t && n ? this._setFlag("us") : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, e || this._setFlag(this.defaultCountry)), e || o || a || s || (this.telInput.value = "+".concat(this.selectedCountryData.dialCode))), e && this._updateValFromNumber(e);
          }
        }, {
          key: "_initListeners",
          value: function value() {
            this._initKeyListeners(), this.options.autoHideDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener();
          }
        }, {
          key: "_initHiddenInputListener",
          value: function value() {
            var e = this;
            this._handleHiddenInputSubmit = function () {
              e.hiddenInput.value = e.getNumber();
            }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
          }
        }, {
          key: "_getClosestLabel",
          value: function value() {
            for (var e = this.telInput; e && "LABEL" !== e.tagName;) {
              e = e.parentNode;
            }

            return e;
          }
        }, {
          key: "_initDropdownListeners",
          value: function value() {
            var e = this;

            this._handleLabelClick = function (t) {
              e.countryList.classList.contains("iti__hide") ? e.telInput.focus() : t.preventDefault();
            };

            var t = this._getClosestLabel();

            t && t.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function () {
              !e.countryList.classList.contains("iti__hide") || e.telInput.disabled || e.telInput.readOnly || e._showDropdown();
            }, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function (t) {
              e.countryList.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(t.key) && (t.preventDefault(), t.stopPropagation(), e._showDropdown()), "Tab" === t.key && e._closeDropdown();
            }, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
          }
        }, {
          key: "_initRequests",
          value: function value() {
            var e = this;
            this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.windowLoaded ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", function () {
              window.intlTelInputGlobals.loadUtils(e.options.utilsScript);
            }) : this.resolveUtilsScriptPromise(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
          }
        }, {
          key: "_loadAutoCountry",
          value: function value() {
            window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function (e) {
              window.intlTelInputGlobals.autoCountry = e.toLowerCase(), setTimeout(function () {
                return c("handleAutoCountry");
              });
            }, function () {
              return c("rejectAutoCountryPromise");
            }));
          }
        }, {
          key: "_initKeyListeners",
          value: function value() {
            var e = this;
            this._handleKeyupEvent = function () {
              e._updateFlagFromNumber(e.telInput.value) && e._triggerCountryChange();
            }, this.telInput.addEventListener("keyup", this._handleKeyupEvent), this._handleClipboardEvent = function () {
              setTimeout(e._handleKeyupEvent);
            }, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent);
          }
        }, {
          key: "_cap",
          value: function value(e) {
            var t = this.telInput.getAttribute("maxlength");
            return t && e.length > t ? e.substr(0, t) : e;
          }
        }, {
          key: "_initBlurListeners",
          value: function value() {
            var e = this;
            this._handleSubmitOrBlurEvent = function () {
              e._removeEmptyDialCode();
            }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
          }
        }, {
          key: "_removeEmptyDialCode",
          value: function value() {
            if ("+" === this.telInput.value.charAt(0)) {
              var e = this._getNumeric(this.telInput.value);

              e && this.selectedCountryData.dialCode !== e || (this.telInput.value = "");
            }
          }
        }, {
          key: "_getNumeric",
          value: function value(e) {
            return e.replace(/\D/g, "");
          }
        }, {
          key: "_trigger",
          value: function value(e) {
            var t = document.createEvent("Event");
            t.initEvent(e, !0, !0), this.telInput.dispatchEvent(t);
          }
        }, {
          key: "_showDropdown",
          value: function value() {
            this.countryList.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0)), this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
          }
        }, {
          key: "_toggleClass",
          value: function value(e, t, n) {
            n && !e.classList.contains(t) ? e.classList.add(t) : !n && e.classList.contains(t) && e.classList.remove(t);
          }
        }, {
          key: "_setDropdownPosition",
          value: function value() {
            var e = this;

            if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.isMobile) {
              var t = this.telInput.getBoundingClientRect(),
                  n = window.pageYOffset || document.documentElement.scrollTop,
                  i = t.top + n,
                  r = this.countryList.offsetHeight,
                  o = i + this.telInput.offsetHeight + r < n + window.innerHeight,
                  a = i - r > n;

              if (this._toggleClass(this.countryList, "iti__country-list--dropup", !o && a), this.options.dropdownContainer) {
                var s = !o && a ? 0 : this.telInput.offsetHeight;
                this.dropdown.style.top = "".concat(i + s, "px"), this.dropdown.style.left = "".concat(t.left + document.body.scrollLeft, "px"), this._handleWindowScroll = function () {
                  return e._closeDropdown();
                }, window.addEventListener("scroll", this._handleWindowScroll);
              }
            }
          }
        }, {
          key: "_getClosestListItem",
          value: function value(e) {
            for (var t = e; t && t !== this.countryList && !t.classList.contains("iti__country");) {
              t = t.parentNode;
            }

            return t === this.countryList ? null : t;
          }
        }, {
          key: "_bindDropdownListeners",
          value: function value() {
            var e = this;
            this._handleMouseoverCountryList = function (t) {
              var n = e._getClosestListItem(t.target);

              n && e._highlightListItem(n, !1);
            }, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function (t) {
              var n = e._getClosestListItem(t.target);

              n && e._selectListItem(n);
            }, this.countryList.addEventListener("click", this._handleClickCountryList);
            var t = !0;
            this._handleClickOffToClose = function () {
              t || e._closeDropdown(), t = !1;
            }, document.documentElement.addEventListener("click", this._handleClickOffToClose);
            var n = "",
                i = null;
            this._handleKeydownOnDropdown = function (t) {
              t.preventDefault(), "ArrowUp" === t.key || "Up" === t.key || "ArrowDown" === t.key || "Down" === t.key ? e._handleUpDownKey(t.key) : "Enter" === t.key ? e._handleEnterKey() : "Escape" === t.key ? e._closeDropdown() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(t.key) && (i && clearTimeout(i), n += t.key.toLowerCase(), e._searchForCountry(n), i = setTimeout(function () {
                n = "";
              }, 1e3));
            }, document.addEventListener("keydown", this._handleKeydownOnDropdown);
          }
        }, {
          key: "_handleUpDownKey",
          value: function value(e) {
            var t = "ArrowUp" === e || "Up" === e ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
            t && (t.classList.contains("iti__divider") && (t = "ArrowUp" === e || "Up" === e ? t.previousElementSibling : t.nextElementSibling), this._highlightListItem(t, !0));
          }
        }, {
          key: "_handleEnterKey",
          value: function value() {
            this.highlightedItem && this._selectListItem(this.highlightedItem);
          }
        }, {
          key: "_searchForCountry",
          value: function value(e) {
            for (var t = 0; t < this.countries.length; t++) {
              if (this._startsWith(this.countries[t].name, e)) {
                var n = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[t].iso2));
                this._highlightListItem(n, !1), this._scrollTo(n, !0);
                break;
              }
            }
          }
        }, {
          key: "_startsWith",
          value: function value(e, t) {
            return e.substr(0, t.length).toLowerCase() === t;
          }
        }, {
          key: "_updateValFromNumber",
          value: function value(e) {
            var t = e;

            if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
              var n = !this.options.separateDialCode && (this.options.nationalMode || "+" !== t.charAt(0)),
                  i = intlTelInputUtils.numberFormat,
                  r = i.NATIONAL,
                  o = i.INTERNATIONAL,
                  a = n ? r : o;
              t = intlTelInputUtils.formatNumber(t, this.selectedCountryData.iso2, a);
            }

            t = this._beforeSetNumber(t), this.telInput.value = t;
          }
        }, {
          key: "_updateFlagFromNumber",
          value: function value(e) {
            var t = e,
                n = this.selectedCountryData.dialCode,
                i = "1" === n;
            t && this.options.nationalMode && i && "+" !== t.charAt(0) && ("1" !== t.charAt(0) && (t = "1".concat(t)), t = "+".concat(t)), this.options.separateDialCode && n && "+" !== t.charAt(0) && (t = "+".concat(n).concat(t));

            var r = this._getDialCode(t, !0),
                o = this._getNumeric(t),
                a = null;

            if (r) {
              var s = this.countryCodes[this._getNumeric(r)],
                  l = -1 !== s.indexOf(this.selectedCountryData.iso2) && o.length <= r.length - 1;

              if (!("1" === n && this._isRegionlessNanp(o) || l)) for (var u = 0; u < s.length; u++) {
                if (s[u]) {
                  a = s[u];
                  break;
                }
              }
            } else "+" === t.charAt(0) && o.length ? a = "" : t && "+" !== t || (a = this.defaultCountry);

            return null !== a && this._setFlag(a);
          }
        }, {
          key: "_isRegionlessNanp",
          value: function value(e) {
            var t = this._getNumeric(e);

            if ("1" === t.charAt(0)) {
              var n = t.substr(1, 3);
              return -1 !== l.indexOf(n);
            }

            return !1;
          }
        }, {
          key: "_highlightListItem",
          value: function value(e, t) {
            var n = this.highlightedItem;
            n && n.classList.remove("iti__highlight"), this.highlightedItem = e, this.highlightedItem.classList.add("iti__highlight"), t && this.highlightedItem.focus();
          }
        }, {
          key: "_getCountryData",
          value: function value(e, n, i) {
            for (var r = n ? t : this.countries, o = 0; o < r.length; o++) {
              if (r[o].iso2 === e) return r[o];
            }

            if (i) return null;
            throw new Error("No country data for '".concat(e, "'"));
          }
        }, {
          key: "_setFlag",
          value: function value(e) {
            var t = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            this.selectedCountryData = e ? this._getCountryData(e, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(e));
            var n = e ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";

            if (this.selectedFlag.setAttribute("title", n), this.options.separateDialCode) {
              var i = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
              this.selectedDialCode.innerHTML = i;

              var r = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();

              this.telInput.style.paddingLeft = "".concat(r + 6, "px");
            }

            if (this._updatePlaceholder(), this.options.allowDropdown) {
              var o = this.activeItem;

              if (o && (o.classList.remove("iti__active"), o.setAttribute("aria-selected", "false")), e) {
                var a = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(e, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(e));
                a.setAttribute("aria-selected", "true"), a.classList.add("iti__active"), this.activeItem = a, this.selectedFlag.setAttribute("aria-activedescendant", a.getAttribute("id"));
              }
            }

            return t.iso2 !== e;
          }
        }, {
          key: "_getHiddenSelectedFlagWidth",
          value: function value() {
            var e = this.telInput.parentNode.cloneNode();
            e.style.visibility = "hidden", document.body.appendChild(e);
            var t = this.flagsContainer.cloneNode();
            e.appendChild(t);
            var n = this.selectedFlag.cloneNode(!0);
            t.appendChild(n);
            var i = n.offsetWidth;
            return e.parentNode.removeChild(e), i;
          }
        }, {
          key: "_updatePlaceholder",
          value: function value() {
            var e = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && "polite" === this.options.autoPlaceholder;

            if (window.intlTelInputUtils && e) {
              var t = intlTelInputUtils.numberType[this.options.placeholderNumberType],
                  n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, t) : "";
              n = this._beforeSetNumber(n), "function" == typeof this.options.customPlaceholder && (n = this.options.customPlaceholder(n, this.selectedCountryData)), this.telInput.setAttribute("placeholder", n);
            }
          }
        }, {
          key: "_selectListItem",
          value: function value(e) {
            var t = this._setFlag(e.getAttribute("data-country-code"));

            this._closeDropdown(), this._updateDialCode(e.getAttribute("data-dial-code"), !0), this.telInput.focus();
            var n = this.telInput.value.length;
            this.telInput.setSelectionRange(n, n), t && this._triggerCountryChange();
          }
        }, {
          key: "_closeDropdown",
          value: function value() {
            this.countryList.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), document.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.isMobile || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
          }
        }, {
          key: "_scrollTo",
          value: function value(e, t) {
            var n = this.countryList,
                i = window.pageYOffset || document.documentElement.scrollTop,
                r = n.offsetHeight,
                o = n.getBoundingClientRect().top + i,
                a = o + r,
                s = e.offsetHeight,
                l = e.getBoundingClientRect().top + i,
                u = l + s,
                c = l - o + n.scrollTop,
                d = r / 2 - s / 2;
            if (l < o) t && (c -= d), n.scrollTop = c;else if (u > a) {
              t && (c += d);
              var h = r - s;
              n.scrollTop = c - h;
            }
          }
        }, {
          key: "_updateDialCode",
          value: function value(e, t) {
            var n,
                i = this.telInput.value,
                r = "+".concat(e);

            if ("+" === i.charAt(0)) {
              var o = this._getDialCode(i);

              n = o ? i.replace(o, r) : r;
            } else {
              if (this.options.nationalMode || this.options.separateDialCode) return;
              if (i) n = r + i;else {
                if (!t && this.options.autoHideDialCode) return;
                n = r;
              }
            }

            this.telInput.value = n;
          }
        }, {
          key: "_getDialCode",
          value: function value(e, t) {
            var n = "";
            if ("+" === e.charAt(0)) for (var i = "", r = 0; r < e.length; r++) {
              var o = e.charAt(r);

              if (!isNaN(parseInt(o, 10))) {
                if (i += o, t) this.countryCodes[i] && (n = e.substr(0, r + 1));else if (this.dialCodes[i]) {
                  n = e.substr(0, r + 1);
                  break;
                }
                if (i.length === this.countryCodeMaxLen) break;
              }
            }
            return n;
          }
        }, {
          key: "_getFullNumber",
          value: function value() {
            var e = this.telInput.value.trim(),
                t = this.selectedCountryData.dialCode,
                n = this._getNumeric(e);

            return (this.options.separateDialCode && "+" !== e.charAt(0) && t && n ? "+".concat(t) : "") + e;
          }
        }, {
          key: "_beforeSetNumber",
          value: function value(e) {
            var t = e;

            if (this.options.separateDialCode) {
              var n = this._getDialCode(t);

              if (n) {
                var i = " " === t[(n = "+".concat(this.selectedCountryData.dialCode)).length] || "-" === t[n.length] ? n.length + 1 : n.length;
                t = t.substr(i);
              }
            }

            return this._cap(t);
          }
        }, {
          key: "_triggerCountryChange",
          value: function value() {
            this._trigger("countrychange");
          }
        }, {
          key: "handleAutoCountry",
          value: function value() {
            "auto" === this.options.initialCountry && (this.defaultCountry = window.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
          }
        }, {
          key: "handleUtils",
          value: function value() {
            window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this._updatePlaceholder()), this.resolveUtilsScriptPromise();
          }
        }, {
          key: "destroy",
          value: function value() {
            var e = this.telInput.form;

            if (this.options.allowDropdown) {
              this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);

              var t = this._getClosestLabel();

              t && t.removeEventListener("click", this._handleLabelClick);
            }

            this.hiddenInput && e && e.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoHideDialCode && (e && e.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("keyup", this._handleKeyupEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
            var n = this.telInput.parentNode;
            n.parentNode.insertBefore(this.telInput, n), n.parentNode.removeChild(n), delete window.intlTelInputGlobals.instances[this.id];
          }
        }, {
          key: "getExtension",
          value: function value() {
            return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : "";
          }
        }, {
          key: "getNumber",
          value: function value(e) {
            if (window.intlTelInputUtils) {
              var t = this.selectedCountryData.iso2;
              return intlTelInputUtils.formatNumber(this._getFullNumber(), t, e);
            }

            return "";
          }
        }, {
          key: "getNumberType",
          value: function value() {
            return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99;
          }
        }, {
          key: "getSelectedCountryData",
          value: function value() {
            return this.selectedCountryData;
          }
        }, {
          key: "getValidationError",
          value: function value() {
            if (window.intlTelInputUtils) {
              var e = this.selectedCountryData.iso2;
              return intlTelInputUtils.getValidationError(this._getFullNumber(), e);
            }

            return -99;
          }
        }, {
          key: "isValidNumber",
          value: function value() {
            var e = this._getFullNumber().trim(),
                t = this.options.nationalMode ? this.selectedCountryData.iso2 : "";

            return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(e, t) : null;
          }
        }, {
          key: "setCountry",
          value: function value(e) {
            var t = e.toLowerCase();
            this.selectedFlagInner.classList.contains("iti__".concat(t)) || (this._setFlag(t), this._updateDialCode(this.selectedCountryData.dialCode, !1), this._triggerCountryChange());
          }
        }, {
          key: "setNumber",
          value: function value(e) {
            var t = this._updateFlagFromNumber(e);

            this._updateValFromNumber(e), t && this._triggerCountryChange();
          }
        }, {
          key: "setPlaceholderNumberType",
          value: function value(e) {
            this.options.placeholderNumberType = e, this._updatePlaceholder();
          }
        }]) && r(i.prototype, o), d && r(i, d), n;
      }();

      o.getCountryData = function () {
        return t;
      };

      var h = function h(e, t, n) {
        var i = document.createElement("script");
        i.onload = function () {
          c("handleUtils"), t && t();
        }, i.onerror = function () {
          c("rejectUtilsScriptPromise"), n && n();
        }, i.className = "iti-load-utils", i.async = !0, i.src = e, document.body.appendChild(i);
      };

      return o.loadUtils = function (e) {
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
          if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function (t, n) {
            return h(e, t, n);
          });
          h(e);
        }

        return null;
      }, o.defaults = s, o.version = "17.0.3", function (e, t) {
        var n = new d(e, t);
        return n._init(), e.setAttribute("data-intl-tel-input-id", n.id), window.intlTelInputGlobals.instances[n.id] = n, n;
      };
    }();
  }, e.exports ? e.exports = i() : window.intlTelInput = i();
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(4),
      r = n.n(i);

  if (document.querySelector("#email")) {
    var o = document.querySelector("#email"),
        a = document.querySelector("#suggestionEmail"),
        s = document.querySelector("#suggestionEmail").getAttribute("data-sentence-pt1"),
        l = document.querySelector("#suggestionEmail").getAttribute("data-sentence-pt2"),
        u = ["gmail.com", "hotmail.com", "outlook.com"],
        c = ["gmail", "hotmail", "outlook"],
        d = ["com", "be", "nl", "fr"],
        h = function h() {
      r.a.run({
        email: o.value,
        domains: u,
        topLevelDomains: d,
        secondLevelDomains: c,
        suggested: function suggested(e) {
          window.mailcheck.push(o.value), a.innerHTML = s + " <b><i>" + e.full + "</b></i> " + l;
        },
        empty: function empty() {
          a.innerHTML = "";
        }
      });
    };

    o.addEventListener("keyup", h), o.addEventListener("keydown", h);
  }
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i);
  n(16);
  r()(".form-validation").each(function () {
    var e = r()(this),
        t = [],
        n = [];
    e.find("[data-required]").each(function () {
      var e = r()(this);

      if (void 0 !== e.data("required")) {
        var i = e.attr("name"),
            o = e.data("error-msg");
        n[i] = "required", t[i] = o;
      }
    });
    var i = e.hasClass("submit-only-when-all-fields-valid"),
        o = e.validate({
      rules: n,
      messages: t,
      errorPlacement: function errorPlacement(e, t) {
        var n = r()(t).data("error-location");
        n ? r()(n).append(e) : e.insertAfter(t);
      },
      errorClass: "error",
      validClass: "valid",
      highlight: function highlight(e, t, n) {
        r()(e).addClass(t).removeClass(n), r()(e).parents(".field").addClass(t), i && (0 == o.numberOfInvalids() ? r()('button[type="submit"]').attr("disabled", !1) : r()('button[type="submit"]').attr("disabled", !0));
      },
      unhighlight: function unhighlight(e, t, n) {
        r()(e).removeClass(t).addClass(n), r()(e).parents(".field").removeClass(t).addClass(n), i && (0 == o.numberOfInvalids() ? r()('button[type="submit"]').attr("disabled", !1) : r()('button[type="submit"]').attr("disabled", !0));
      },
      onfocusout: function onfocusout(e, t) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      },
      success: function success() {
        var e = r()(".is-birthday-master input:last-child").attr("name");
        r()('input[name="' + e + '"]').val(r()("#day").val() + "/" + r()("#month").val() + "/" + r()("#year").val());
      }
    });
    i && r()(".input").keyup(function () {
      var e = r()(this);
      e.val().length >= 1 && o.element(e);
    });
  }), n(22), n(17), n(18), n(19);
}, function (e, t, n) {
  var i, r, o;
  r = [n(0)], void 0 === (o = "function" == typeof (i = function i(e) {
    e.extend(e.fn, {
      validate: function validate(t) {
        if (this.length) {
          var n = e.data(this[0], "validator");
          return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
            n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
          }), this.on("submit.validate", function (t) {
            function i() {
              var i, r;
              return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r);
            }

            return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1);
          })), n);
        }

        t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function valid() {
        var t, n, i;
        return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
          (t = n.element(this) && t) || (i = i.concat(n.errorList));
        }), n.errorList = i), t;
      },
      rules: function rules(t, n) {
        var i,
            r,
            o,
            a,
            s,
            l,
            u = this[0],
            c = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");

        if (null != u && (!u.form && c && (u.form = this.closest("form")[0], u.name = this.attr("name")), null != u.form)) {
          if (t) switch (r = (i = e.data(u.form, "validator").settings).rules, o = e.validator.staticRules(u), t) {
            case "add":
              e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[u.name] = o, n.messages && (i.messages[u.name] = e.extend(i.messages[u.name], n.messages));
              break;

            case "remove":
              return n ? (l = {}, e.each(n.split(/\s/), function (e, t) {
                l[t] = o[t], delete o[t];
              }), l) : (delete r[u.name], o);
          }
          return (a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u)).required && (s = a.required, delete a.required, a = e.extend({
            required: s
          }, a)), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, {
            remote: s
          })), a;
        }
      }
    });

    var t,
        n = function n(e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };

    e.extend(e.expr.pseudos || e.expr[":"], {
      blank: function blank(t) {
        return !n("" + e(t).val());
      },
      filled: function filled(t) {
        var i = e(t).val();
        return null !== i && !!n("" + i);
      },
      unchecked: function unchecked(t) {
        return !e(t).prop("checked");
      }
    }), e.validator = function (t, n) {
      this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
    }, e.validator.format = function (t, n) {
      return 1 === arguments.length ? function () {
        var n = e.makeArray(arguments);
        return n.unshift(t), e.validator.format.apply(this, n);
      } : (void 0 === n || (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
        t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
          return n;
        });
      })), t);
    }, e.extend(e.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: e([]),
        errorLabelContainer: e([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function onfocusin(e) {
          this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
        },
        onfocusout: function onfocusout(e) {
          this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
        },
        onkeyup: function onkeyup(t, n) {
          9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
        },
        onclick: function onclick(e) {
          e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
        },
        highlight: function highlight(t, n, i) {
          "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
        },
        unhighlight: function unhighlight(t, n, i) {
          "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
        }
      },
      setDefaults: function setDefaults(t) {
        e.extend(e.validator.defaults, t);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: e.validator.format("Please enter no more than {0} characters."),
        minlength: e.validator.format("Please enter at least {0} characters."),
        rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
        range: e.validator.format("Please enter a value between {0} and {1}."),
        max: e.validator.format("Please enter a value less than or equal to {0}."),
        min: e.validator.format("Please enter a value greater than or equal to {0}."),
        step: e.validator.format("Please enter a multiple of {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function init() {
          this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var t,
              n = this.currentForm,
              i = this.groups = {};

          function r(t) {
            var i = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");

            if (!this.form && i && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")), n === this.form) {
              var r = e.data(this.form, "validator"),
                  o = "on" + t.type.replace(/^validate/, ""),
                  a = r.settings;
              a[o] && !e(this).is(a.ignore) && a[o].call(r, this, t);
            }
          }

          e.each(this.settings.groups, function (t, n) {
            "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
              i[n] = t;
            });
          }), t = this.settings.rules, e.each(t, function (n, i) {
            t[n] = e.validator.normalizeRule(i);
          }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", r).on("click.validate", "select, option, [type='radio'], [type='checkbox']", r), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        },
        form: function form() {
          return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
        },
        checkForm: function checkForm() {
          this.prepareForm();

          for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
            this.check(t[e]);
          }

          return this.valid();
        },
        element: function element(t) {
          var n,
              i,
              r = this.clean(t),
              o = this.validationTargetFor(r),
              a = this,
              s = !0;
          return void 0 === o ? delete this.invalid[r.name] : (this.prepareElement(o), this.currentElements = e(o), (i = this.groups[o.name]) && e.each(this.groups, function (e, t) {
            t === i && e !== o.name && (r = a.validationTargetFor(a.clean(a.findByName(e)))) && r.name in a.invalid && (a.currentElements.push(r), s = a.check(r) && s);
          }), n = !1 !== this.check(o), s = s && n, this.invalid[o.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), s;
        },
        showErrors: function showErrors(t) {
          if (t) {
            var n = this;
            e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
              return {
                message: e,
                element: n.findByName(t)[0]
              };
            }), this.successList = e.grep(this.successList, function (e) {
              return !(e.name in t);
            });
          }

          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
        },
        resetForm: function resetForm() {
          e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
          var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
          this.resetElements(t);
        },
        resetElements: function resetElements(e) {
          var t;
          if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
            this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
          } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        },
        numberOfInvalids: function numberOfInvalids() {
          return this.objectLength(this.invalid);
        },
        objectLength: function objectLength(e) {
          var t,
              n = 0;

          for (t in e) {
            void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
          }

          return n;
        },
        hideErrors: function hideErrors() {
          this.hideThese(this.toHide);
        },
        hideThese: function hideThese(e) {
          e.not(this.containers).text(""), this.addWrapper(e).hide();
        },
        valid: function valid() {
          return 0 === this.size();
        },
        size: function size() {
          return this.errorList.length;
        },
        focusInvalid: function focusInvalid() {
          if (this.settings.focusInvalid) try {
            e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
          } catch (e) {}
        },
        findLastActive: function findLastActive() {
          var t = this.lastActive;
          return t && 1 === e.grep(this.errorList, function (e) {
            return e.element.name === t.name;
          }).length && t;
        },
        elements: function elements() {
          var t = this,
              n = {};
          return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
            var i = this.name || e(this).attr("name"),
                r = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
            return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), r && (this.form = e(this).closest("form")[0], this.name = i), !(this.form !== t.currentForm || i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0));
          });
        },
        clean: function clean(t) {
          return e(t)[0];
        },
        errors: function errors() {
          var t = this.settings.errorClass.split(" ").join(".");
          return e(this.settings.errorElement + "." + t, this.errorContext);
        },
        resetInternals: function resetInternals() {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
        },
        reset: function reset() {
          this.resetInternals(), this.currentElements = e([]);
        },
        prepareForm: function prepareForm() {
          this.reset(), this.toHide = this.errors().add(this.containers);
        },
        prepareElement: function prepareElement(e) {
          this.reset(), this.toHide = this.errorsFor(e);
        },
        elementValue: function elementValue(t) {
          var n,
              i,
              r = e(t),
              o = t.type,
              a = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
          return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = a ? r.text() : r.val(), "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 || (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n);
        },
        check: function check(t) {
          t = this.validationTargetFor(this.clean(t));
          var n,
              i,
              r,
              o,
              a = e(t).rules(),
              s = e.map(a, function (e, t) {
            return t;
          }).length,
              l = !1,
              u = this.elementValue(t);

          for (i in "function" == typeof a.normalizer ? o = a.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o && (u = o.call(t, u), delete a.normalizer), a) {
            r = {
              method: i,
              parameters: a[i]
            };

            try {
              if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, u, t, r.parameters)) && 1 === s) {
                l = !0;
                continue;
              }

              if (l = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
              if (!n) return this.formatAndAdd(t, r), !1;
            } catch (e) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
            }
          }

          if (!l) return this.objectLength(a) && this.successList.push(t), !0;
        },
        customDataMessage: function customDataMessage(t, n) {
          return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
        },
        customMessage: function customMessage(e, t) {
          var n = this.settings.messages[e];
          return n && (n.constructor === String ? n : n[t]);
        },
        findDefined: function findDefined() {
          for (var e = 0; e < arguments.length; e++) {
            if (void 0 !== arguments[e]) return arguments[e];
          }
        },
        defaultMessage: function defaultMessage(t, n) {
          "string" == typeof n && (n = {
            method: n
          });
          var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
              r = /\$?\{(\d+)\}/g;
          return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i;
        },
        formatAndAdd: function formatAndAdd(e, t) {
          var n = this.defaultMessage(e, t);
          this.errorList.push({
            message: n,
            element: e,
            method: t.method
          }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
        },
        addWrapper: function addWrapper(e) {
          return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
        },
        defaultShowErrors: function defaultShowErrors() {
          var e, t, n;

          for (e = 0; this.errorList[e]; e++) {
            n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
          }

          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
            this.showLabel(this.successList[e]);
          }
          if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
            this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          }
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
        },
        validElements: function validElements() {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function invalidElements() {
          return e(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function showLabel(t, n) {
          var i,
              r,
              o,
              a,
              s = this.errorsFor(t),
              l = this.idOrName(t),
              u = e(t).attr("aria-describedby");
          s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(n)) : (i = s = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), s.is("label") ? s.attr("for", l) : 0 === s.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = s.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (u += " " + o) : u = o, e(t).attr("aria-describedby", u), (r = this.groups[t.name]) && (a = this, e.each(a.groups, function (t, n) {
            n === r && e("[name='" + a.escapeCssMeta(t) + "']", a.currentForm).attr("aria-describedby", s.attr("id"));
          })))), !n && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s);
        },
        errorsFor: function errorsFor(t) {
          var n = this.escapeCssMeta(this.idOrName(t)),
              i = e(t).attr("aria-describedby"),
              r = "label[for='" + n + "'], label[for='" + n + "'] *";
          return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
        },
        escapeCssMeta: function escapeCssMeta(e) {
          return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function idOrName(e) {
          return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
        },
        validationTargetFor: function validationTargetFor(t) {
          return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
        },
        checkable: function checkable(e) {
          return /radio|checkbox/i.test(e.type);
        },
        findByName: function findByName(t) {
          return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
        },
        getLength: function getLength(t, n) {
          switch (n.nodeName.toLowerCase()) {
            case "select":
              return e("option:selected", n).length;

            case "input":
              if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;
          }

          return t.length;
        },
        depend: function depend(e, t) {
          return !this.dependTypes[_typeof(e)] || this.dependTypes[_typeof(e)](e, t);
        },
        dependTypes: {
          "boolean": function boolean(e) {
            return e;
          },
          string: function string(t, n) {
            return !!e(t, n.form).length;
          },
          "function": function _function(e, t) {
            return e(t);
          }
        },
        optional: function optional(t) {
          var n = this.elementValue(t);
          return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
        },
        startRequest: function startRequest(t) {
          this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
        },
        stopRequest: function stopRequest(t, n) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
        },
        previousValue: function previousValue(t, n) {
          return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(t, {
              method: n
            })
          });
        },
        destroy: function destroy() {
          this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function addClassRules(t, n) {
        t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
      },
      classRules: function classRules(t) {
        var n = {},
            i = e(t).attr("class");
        return i && e.each(i.split(" "), function () {
          this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
        }), n;
      },
      normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
        /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
      },
      attributeRules: function attributeRules(t) {
        var n,
            i,
            r = {},
            o = e(t),
            a = t.getAttribute("type");

        for (n in e.validator.methods) {
          "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, a, n, i);
        }

        return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
      },
      dataRules: function dataRules(t) {
        var n,
            i,
            r = {},
            o = e(t),
            a = t.getAttribute("type");

        for (n in e.validator.methods) {
          "" === (i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(r, a, n, i);
        }

        return r;
      },
      staticRules: function staticRules(t) {
        var n = {},
            i = e.data(t.form, "validator");
        return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
      },
      normalizeRules: function normalizeRules(t, n) {
        return e.each(t, function (i, r) {
          if (!1 !== r) {
            if (r.param || r.depends) {
              var o = !0;

              switch (_typeof(r.depends)) {
                case "string":
                  o = !!e(r.depends, n.form).length;
                  break;

                case "function":
                  o = r.depends.call(n, n);
              }

              o ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
            }
          } else delete t[i];
        }), e.each(t, function (i, r) {
          t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
        }), e.each(["minlength", "maxlength"], function () {
          t[this] && (t[this] = Number(t[this]));
        }), e.each(["rangelength", "range"], function () {
          var n;
          t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]));
        }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
      },
      normalizeRule: function normalizeRule(t) {
        if ("string" == typeof t) {
          var n = {};
          e.each(t.split(/\s/), function () {
            n[this] = !0;
          }), t = n;
        }

        return t;
      },
      addMethod: function addMethod(t, n, i) {
        e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
      },
      methods: {
        required: function required(t, n, i) {
          if (!this.depend(i, n)) return "dependency-mismatch";

          if ("select" === n.nodeName.toLowerCase()) {
            var r = e(n).val();
            return r && r.length > 0;
          }

          return this.checkable(n) ? this.getLength(t, n) > 0 : null != t && t.length > 0;
        },
        email: function email(e, t) {
          return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
        },
        url: function url(e, t) {
          return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e);
        },
        date: (t = !1, function (e, n) {
          return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(n) || !/Invalid|NaN/.test(new Date(e).toString());
        }),
        dateISO: function dateISO(e, t) {
          return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
        },
        number: function number(e, t) {
          return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
        },
        digits: function digits(e, t) {
          return this.optional(t) || /^\d+$/.test(e);
        },
        minlength: function minlength(t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(t, n);
          return this.optional(n) || r >= i;
        },
        maxlength: function maxlength(t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(t, n);
          return this.optional(n) || r <= i;
        },
        rangelength: function rangelength(t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(t, n);
          return this.optional(n) || r >= i[0] && r <= i[1];
        },
        min: function min(e, t, n) {
          return this.optional(t) || e >= n;
        },
        max: function max(e, t, n) {
          return this.optional(t) || e <= n;
        },
        range: function range(e, t, n) {
          return this.optional(t) || e >= n[0] && e <= n[1];
        },
        step: function step(t, n, i) {
          var r,
              o = e(n).attr("type"),
              a = "Step attribute on input type " + o + " is not supported.",
              s = new RegExp("\\b" + o + "\\b"),
              l = function l(e) {
            var t = ("" + e).match(/(?:\.(\d+))?$/);
            return t && t[1] ? t[1].length : 0;
          },
              u = function u(e) {
            return Math.round(e * Math.pow(10, r));
          },
              c = !0;

          if (o && !s.test(["text", "number", "range"].join())) throw new Error(a);
          return r = l(i), (l(t) > r || u(t) % u(i) != 0) && (c = !1), this.optional(n) || c;
        },
        equalTo: function equalTo(t, n, i) {
          var r = e(i);
          return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
            e(n).valid();
          }), t === r.val();
        },
        remote: function remote(t, n, i, r) {
          if (this.optional(n)) return "dependency-mismatch";
          r = "string" == typeof r && r || "remote";
          var o,
              a,
              s,
              l = this.previousValue(n, r);
          return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
            url: i
          } || i, s = e.param(e.extend({
            data: t
          }, i.data)), l.old === s ? l.valid : (l.old = s, o = this, this.startRequest(n), (a = {})[n.name] = t, e.ajax(e.extend(!0, {
            mode: "abort",
            port: "validate" + n.name,
            dataType: "json",
            data: a,
            context: o.currentForm,
            success: function success(e) {
              var i,
                  a,
                  s,
                  u = !0 === e || "true" === e;
              o.settings.messages[n.name][r] = l.originalMessage, u ? (s = o.formSubmitted, o.resetInternals(), o.toHide = o.errorsFor(n), o.formSubmitted = s, o.successList.push(n), o.invalid[n.name] = !1, o.showErrors()) : (i = {}, a = e || o.defaultMessage(n, {
                method: r,
                parameters: t
              }), i[n.name] = l.message = a, o.invalid[n.name] = !0, o.showErrors(i)), l.valid = u, o.stopRequest(n, u);
            }
          }, i)), "pending");
        }
      }
    });
    var i,
        r = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, n) {
      var i = e.port;
      "abort" === e.mode && (r[i] && r[i].abort(), r[i] = n);
    }) : (i = e.ajax, e.ajax = function (t) {
      var n = ("mode" in t ? t : e.ajaxSettings).mode,
          o = ("port" in t ? t : e.ajaxSettings).port;
      return "abort" === n ? (r[o] && r[o].abort(), r[o] = i.apply(this, arguments), r[o]) : i.apply(this, arguments);
    }), e;
  }) ? i.apply(t, r) : i) || (e.exports = o);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i),
      o = 0,
      a = new RegExp("^[0-9 ]+$"),
      s = r()('input[data-required="phone"]');
  r.a.validator.messages.phonenumber = s.data("error-msg"), r.a.validator.addMethod("phonenumber", function (e, t) {
    var n = s,
        i = e.replace(/ /g, "");
    return i.length <= 10 && (o = n.val().length), !!a.test(e) && i.length >= 8 && (s.val(n.val().slice(0, o)), !0);
  }, s.data("error-msg")), s.bind("keyup", "keydown", function (e) {
    var t = r()(this),
        n = t.val(),
        i = n.replace(/ /g, "");
    return i.length <= 10 && (o = t.val().length), !!a.test(n) && i.length >= 8 && (s.val(t.val().slice(0, o)), !0);
  }), s.each(function () {
    r()(this).rules("add", {
      phonenumber: !0
    });
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i),
      o = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      a = r()('input[data-required="email"]');
  r.a.validator.methods.email = function (e, t, n) {
    return !!(o.test(e) && e.length >= 5);
  }, r.a.validator.messages.email = a.data("error-msg"), a.each(function () {
    a.rules("add", {
      email: !0
    });
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i);
  window.mailcheck = [" "];
  r.a.validator.addMethod("excludemailcheck", function (e, t) {
    if (1 == function (e) {
      for (var t = !1, n = 0; n < window.mailcheck.length; n++) {
        if (e == window.mailcheck[n]) return t = !1, !1;
        t = !0;
      }

      return 1 == t;
    }(e)) return !0;
  });
  var o = r()('input[data-required="email"]');
  r.a.validator.messages.email = o.data("error-msg"), r.a.validator.messages.excludemailcheck = o.data("error-msg-exclude"), o.each(function () {
    var e = r()(this);
    e.attr("data-required-excludemailcheck");
    e.rules("add", {
      excludemailcheck: !0,
      messages: {
        email: o.data("error-msg"),
        excludemailcheck: o.data("error-msg")
      }
    });
  });
}, function (e, t) {
  var n = document.querySelectorAll(".change-filled input, .change-filled textarea"),
      i = function i(e, t) {
    var n = function (e, t) {
      for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;) {
          ;
        }

        return n > -1;
      }); e && e !== document; e = e.parentNode) {
        if (e.matches(t)) return e;
      }

      return null;
    }(e, ".field");

    e.value.length > 0 ? n.classList.add("is-filled") : "intl-tel-input" != e.id && n.classList.remove("is-filled"), 1 == t && n.classList.add("is-filled");
  };

  n.forEach(function (e) {
    e.onchange = function () {
      i(e);
    }, e.addEventListener("input", function (t) {
      i(e, !0);
    }), e.addEventListener("focus", function (t) {
      i(e, !0);
    }), e.addEventListener("focusout", function (t) {
      i(e);
    }), setTimeout(function () {
      i(e);
    }, 200);
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i),
      o = (n(1), function (e) {
    var t = e.val();
    null != t && (t.length > 0 ? e.parents(".field").addClass("is-filled") : e.parents(".field").removeClass("is-filled"));
  });
  r()(".select select, .select2").each(function () {
    o(r()(this));
  }), r()(".select select").on("change", function () {
    o(r()(this));
  }), r()(".select2").on("select2:select", function () {
    o(r()(this));
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0),
      r = n.n(i);

  function o(e, t) {
    if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
  }

  function a(e) {
    o(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || "object" == _typeof(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), new Date(NaN));
  }

  function s(e) {
    o(1, arguments);
    var t = a(e);
    return !isNaN(t);
  }

  var l = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };

  function u(e) {
    return function (t) {
      var n = t || {},
          i = n.width ? String(n.width) : e.defaultWidth;
      return e.formats[i] || e.formats[e.defaultWidth];
    };
  }

  var c = {
    date: u({
      formats: {
        full: "EEEE, MMMM do, y",
        "long": "MMMM do, y",
        medium: "MMM d, y",
        "short": "MM/dd/yyyy"
      },
      defaultWidth: "full"
    }),
    time: u({
      formats: {
        full: "h:mm:ss a zzzz",
        "long": "h:mm:ss a z",
        medium: "h:mm:ss a",
        "short": "h:mm a"
      },
      defaultWidth: "full"
    }),
    dateTime: u({
      formats: {
        full: "{{date}} 'at' {{time}}",
        "long": "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        "short": "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  },
      d = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };

  function h(e) {
    return function (t, n) {
      var i,
          r = n || {};

      if ("formatting" === (r.context ? String(r.context) : "standalone") && e.formattingValues) {
        var o = e.defaultFormattingWidth || e.defaultWidth,
            a = r.width ? String(r.width) : o;
        i = e.formattingValues[a] || e.formattingValues[o];
      } else {
        var s = e.defaultWidth,
            l = r.width ? String(r.width) : e.defaultWidth;
        i = e.values[l] || e.values[s];
      }

      return i[e.argumentCallback ? e.argumentCallback(t) : t];
    };
  }

  function p(e) {
    return function (t, n) {
      var i = String(t),
          r = n || {},
          o = r.width,
          a = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth],
          s = i.match(a);
      if (!s) return null;
      var l,
          u = s[0],
          c = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth];
      return l = "[object Array]" === Object.prototype.toString.call(c) ? function (e, t) {
        for (var n = 0; n < e.length; n++) {
          if (t(e[n])) return n;
        }
      }(c, function (e) {
        return e.test(u);
      }) : function (e, t) {
        for (var n in e) {
          if (e.hasOwnProperty(n) && t(e[n])) return n;
        }
      }(c, function (e) {
        return e.test(u);
      }), l = e.valueCallback ? e.valueCallback(l) : l, {
        value: l = r.valueCallback ? r.valueCallback(l) : l,
        rest: i.slice(u.length)
      };
    };
  }

  var f,
      g = {
    code: "en-US",
    formatDistance: function formatDistance(e, t, n) {
      var i;
      return n = n || {}, i = "string" == typeof l[e] ? l[e] : 1 === t ? l[e].one : l[e].other.replace("{{count}}", t), n.addSuffix ? n.comparison > 0 ? "in " + i : i + " ago" : i;
    },
    formatLong: c,
    formatRelative: function formatRelative(e, t, n, i) {
      return d[e];
    },
    localize: {
      ordinalNumber: function ordinalNumber(e, t) {
        var n = Number(e),
            i = n % 100;
        if (i > 20 || i < 10) switch (i % 10) {
          case 1:
            return n + "st";

          case 2:
            return n + "nd";

          case 3:
            return n + "rd";
        }
        return n + "th";
      },
      era: h({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"]
        },
        defaultWidth: "wide"
      }),
      quarter: h({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
        },
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(e) {
          return Number(e) - 1;
        }
      }),
      month: h({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        defaultWidth: "wide"
      }),
      day: h({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          "short": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        defaultWidth: "wide"
      }),
      dayPeriod: h({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
          }
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
          }
        },
        defaultFormattingWidth: "wide"
      })
    },
    match: {
      ordinalNumber: (f = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: function valueCallback(e) {
          return parseInt(e, 10);
        }
      }, function (e, t) {
        var n = String(e),
            i = t || {},
            r = n.match(f.matchPattern);
        if (!r) return null;
        var o = r[0],
            a = n.match(f.parsePattern);
        if (!a) return null;
        var s = f.valueCallback ? f.valueCallback(a[0]) : a[0];
        return {
          value: s = i.valueCallback ? i.valueCallback(s) : s,
          rest: n.slice(o.length)
        };
      }),
      era: p({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/^b/i, /^(a|c)/i]
        },
        defaultParseWidth: "any"
      }),
      quarter: p({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: "any",
        valueCallback: function valueCallback(e) {
          return e + 1;
        }
      }),
      month: p({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
          any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: "any"
      }),
      day: p({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          "short": /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
        },
        defaultParseWidth: "any"
      }),
      dayPeriod: p({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
          }
        },
        defaultParseWidth: "any"
      })
    },
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };

  function m(e) {
    if (null === e || !0 === e || !1 === e) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
  }

  function v(e, t) {
    o(2, arguments);
    var n = a(e).getTime(),
        i = m(t);
    return new Date(n + i);
  }

  function y(e, t) {
    o(2, arguments);
    var n = m(t);
    return v(e, -n);
  }

  function b(e, t) {
    for (var n = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < t;) {
      i = "0" + i;
    }

    return n + i;
  }

  var w = {
    y: function y(e, t) {
      var n = e.getUTCFullYear(),
          i = n > 0 ? n : 1 - n;
      return b("yy" === t ? i % 100 : i, t.length);
    },
    M: function M(e, t) {
      var n = e.getUTCMonth();
      return "M" === t ? String(n + 1) : b(n + 1, 2);
    },
    d: function d(e, t) {
      return b(e.getUTCDate(), t.length);
    },
    a: function a(e, t) {
      var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";

      switch (t) {
        case "a":
        case "aa":
        case "aaa":
          return n.toUpperCase();

        case "aaaaa":
          return n[0];

        case "aaaa":
        default:
          return "am" === n ? "a.m." : "p.m.";
      }
    },
    h: function h(e, t) {
      return b(e.getUTCHours() % 12 || 12, t.length);
    },
    H: function H(e, t) {
      return b(e.getUTCHours(), t.length);
    },
    m: function m(e, t) {
      return b(e.getUTCMinutes(), t.length);
    },
    s: function s(e, t) {
      return b(e.getUTCSeconds(), t.length);
    },
    S: function S(e, t) {
      var n = t.length,
          i = e.getUTCMilliseconds();
      return b(Math.floor(i * Math.pow(10, n - 3)), t.length);
    }
  };

  function C(e) {
    o(1, arguments);
    var t = 1,
        n = a(e),
        i = n.getUTCDay(),
        r = (i < t ? 7 : 0) + i - t;
    return n.setUTCDate(n.getUTCDate() - r), n.setUTCHours(0, 0, 0, 0), n;
  }

  function x(e) {
    o(1, arguments);
    var t = a(e),
        n = t.getUTCFullYear(),
        i = new Date(0);
    i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
    var r = C(i),
        s = new Date(0);
    s.setUTCFullYear(n, 0, 4), s.setUTCHours(0, 0, 0, 0);
    var l = C(s);
    return t.getTime() >= r.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
  }

  function _(e) {
    o(1, arguments);
    var t = x(e),
        n = new Date(0);
    n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
    var i = C(n);
    return i;
  }

  function T(e, t) {
    o(1, arguments);
    var n = t || {},
        i = n.locale,
        r = i && i.options && i.options.weekStartsOn,
        s = null == r ? 0 : m(r),
        l = null == n.weekStartsOn ? s : m(n.weekStartsOn);
    if (!(l >= 0 && l <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var u = a(e),
        c = u.getUTCDay(),
        d = (c < l ? 7 : 0) + c - l;
    return u.setUTCDate(u.getUTCDate() - d), u.setUTCHours(0, 0, 0, 0), u;
  }

  function k(e, t) {
    o(1, arguments);
    var n = a(e, t),
        i = n.getUTCFullYear(),
        r = t || {},
        s = r.locale,
        l = s && s.options && s.options.firstWeekContainsDate,
        u = null == l ? 1 : m(l),
        c = null == r.firstWeekContainsDate ? u : m(r.firstWeekContainsDate);
    if (!(c >= 1 && c <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var d = new Date(0);
    d.setUTCFullYear(i + 1, 0, c), d.setUTCHours(0, 0, 0, 0);
    var h = T(d, t),
        p = new Date(0);
    p.setUTCFullYear(i, 0, c), p.setUTCHours(0, 0, 0, 0);
    var f = T(p, t);
    return n.getTime() >= h.getTime() ? i + 1 : n.getTime() >= f.getTime() ? i : i - 1;
  }

  function S(e, t) {
    o(1, arguments);
    var n = t || {},
        i = n.locale,
        r = i && i.options && i.options.firstWeekContainsDate,
        a = null == r ? 1 : m(r),
        s = null == n.firstWeekContainsDate ? a : m(n.firstWeekContainsDate),
        l = k(e, t),
        u = new Date(0);
    u.setUTCFullYear(l, 0, s), u.setUTCHours(0, 0, 0, 0);
    var c = T(u, t);
    return c;
  }

  var A = "midnight",
      E = "noon",
      D = "morning",
      L = "afternoon",
      I = "evening",
      N = "night";

  function M(e, t) {
    var n = e > 0 ? "-" : "+",
        i = Math.abs(e),
        r = Math.floor(i / 60),
        o = i % 60;
    if (0 === o) return n + String(r);
    var a = t || "";
    return n + String(r) + a + b(o, 2);
  }

  function q(e, t) {
    return e % 60 == 0 ? (e > 0 ? "-" : "+") + b(Math.abs(e) / 60, 2) : P(e, t);
  }

  function P(e, t) {
    var n = t || "",
        i = e > 0 ? "-" : "+",
        r = Math.abs(e);
    return i + b(Math.floor(r / 60), 2) + n + b(r % 60, 2);
  }

  var $ = {
    G: function G(e, t, n) {
      var i = e.getUTCFullYear() > 0 ? 1 : 0;

      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(i, {
            width: "abbreviated"
          });

        case "GGGGG":
          return n.era(i, {
            width: "narrow"
          });

        case "GGGG":
        default:
          return n.era(i, {
            width: "wide"
          });
      }
    },
    y: function y(e, t, n) {
      if ("yo" === t) {
        var i = e.getUTCFullYear(),
            r = i > 0 ? i : 1 - i;
        return n.ordinalNumber(r, {
          unit: "year"
        });
      }

      return w.y(e, t);
    },
    Y: function Y(e, t, n, i) {
      var r = k(e, i),
          o = r > 0 ? r : 1 - r;
      return "YY" === t ? b(o % 100, 2) : "Yo" === t ? n.ordinalNumber(o, {
        unit: "year"
      }) : b(o, t.length);
    },
    R: function R(e, t) {
      return b(x(e), t.length);
    },
    u: function u(e, t) {
      return b(e.getUTCFullYear(), t.length);
    },
    Q: function Q(e, t, n) {
      var i = Math.ceil((e.getUTCMonth() + 1) / 3);

      switch (t) {
        case "Q":
          return String(i);

        case "QQ":
          return b(i, 2);

        case "Qo":
          return n.ordinalNumber(i, {
            unit: "quarter"
          });

        case "QQQ":
          return n.quarter(i, {
            width: "abbreviated",
            context: "formatting"
          });

        case "QQQQQ":
          return n.quarter(i, {
            width: "narrow",
            context: "formatting"
          });

        case "QQQQ":
        default:
          return n.quarter(i, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    q: function q(e, t, n) {
      var i = Math.ceil((e.getUTCMonth() + 1) / 3);

      switch (t) {
        case "q":
          return String(i);

        case "qq":
          return b(i, 2);

        case "qo":
          return n.ordinalNumber(i, {
            unit: "quarter"
          });

        case "qqq":
          return n.quarter(i, {
            width: "abbreviated",
            context: "standalone"
          });

        case "qqqqq":
          return n.quarter(i, {
            width: "narrow",
            context: "standalone"
          });

        case "qqqq":
        default:
          return n.quarter(i, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    M: function M(e, t, n) {
      var i = e.getUTCMonth();

      switch (t) {
        case "M":
        case "MM":
          return w.M(e, t);

        case "Mo":
          return n.ordinalNumber(i + 1, {
            unit: "month"
          });

        case "MMM":
          return n.month(i, {
            width: "abbreviated",
            context: "formatting"
          });

        case "MMMMM":
          return n.month(i, {
            width: "narrow",
            context: "formatting"
          });

        case "MMMM":
        default:
          return n.month(i, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    L: function L(e, t, n) {
      var i = e.getUTCMonth();

      switch (t) {
        case "L":
          return String(i + 1);

        case "LL":
          return b(i + 1, 2);

        case "Lo":
          return n.ordinalNumber(i + 1, {
            unit: "month"
          });

        case "LLL":
          return n.month(i, {
            width: "abbreviated",
            context: "standalone"
          });

        case "LLLLL":
          return n.month(i, {
            width: "narrow",
            context: "standalone"
          });

        case "LLLL":
        default:
          return n.month(i, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    w: function w(e, t, n, i) {
      var r = function (e, t) {
        o(1, arguments);
        var n = a(e),
            i = T(n, t).getTime() - S(n, t).getTime();
        return Math.round(i / 6048e5) + 1;
      }(e, i);

      return "wo" === t ? n.ordinalNumber(r, {
        unit: "week"
      }) : b(r, t.length);
    },
    I: function I(e, t, n) {
      var i = function (e) {
        o(1, arguments);

        var t = a(e),
            n = C(t).getTime() - _(t).getTime();

        return Math.round(n / 6048e5) + 1;
      }(e);

      return "Io" === t ? n.ordinalNumber(i, {
        unit: "week"
      }) : b(i, t.length);
    },
    d: function d(e, t, n) {
      return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
        unit: "date"
      }) : w.d(e, t);
    },
    D: function D(e, t, n) {
      var i = function (e) {
        o(1, arguments);
        var t = a(e),
            n = t.getTime();
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        var i = t.getTime(),
            r = n - i;
        return Math.floor(r / 864e5) + 1;
      }(e);

      return "Do" === t ? n.ordinalNumber(i, {
        unit: "dayOfYear"
      }) : b(i, t.length);
    },
    E: function E(e, t, n) {
      var i = e.getUTCDay();

      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(i, {
            width: "abbreviated",
            context: "formatting"
          });

        case "EEEEE":
          return n.day(i, {
            width: "narrow",
            context: "formatting"
          });

        case "EEEEEE":
          return n.day(i, {
            width: "short",
            context: "formatting"
          });

        case "EEEE":
        default:
          return n.day(i, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    e: function e(_e2, t, n, i) {
      var r = _e2.getUTCDay(),
          o = (r - i.weekStartsOn + 8) % 7 || 7;

      switch (t) {
        case "e":
          return String(o);

        case "ee":
          return b(o, 2);

        case "eo":
          return n.ordinalNumber(o, {
            unit: "day"
          });

        case "eee":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "eeeee":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });

        case "eeeeee":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });

        case "eeee":
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function c(e, t, n, i) {
      var r = e.getUTCDay(),
          o = (r - i.weekStartsOn + 8) % 7 || 7;

      switch (t) {
        case "c":
          return String(o);

        case "cc":
          return b(o, t.length);

        case "co":
          return n.ordinalNumber(o, {
            unit: "day"
          });

        case "ccc":
          return n.day(r, {
            width: "abbreviated",
            context: "standalone"
          });

        case "ccccc":
          return n.day(r, {
            width: "narrow",
            context: "standalone"
          });

        case "cccccc":
          return n.day(r, {
            width: "short",
            context: "standalone"
          });

        case "cccc":
        default:
          return n.day(r, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function i(e, t, n) {
      var i = e.getUTCDay(),
          r = 0 === i ? 7 : i;

      switch (t) {
        case "i":
          return String(r);

        case "ii":
          return b(r, t.length);

        case "io":
          return n.ordinalNumber(r, {
            unit: "day"
          });

        case "iii":
          return n.day(i, {
            width: "abbreviated",
            context: "formatting"
          });

        case "iiiii":
          return n.day(i, {
            width: "narrow",
            context: "formatting"
          });

        case "iiiiii":
          return n.day(i, {
            width: "short",
            context: "formatting"
          });

        case "iiii":
        default:
          return n.day(i, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    a: function a(e, t, n) {
      var i = e.getUTCHours() / 12 >= 1 ? "pm" : "am";

      switch (t) {
        case "a":
        case "aa":
        case "aaa":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          });

        case "aaaaa":
          return n.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });

        case "aaaa":
        default:
          return n.dayPeriod(i, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    b: function b(e, t, n) {
      var i,
          r = e.getUTCHours();

      switch (i = 12 === r ? E : 0 === r ? A : r / 12 >= 1 ? "pm" : "am", t) {
        case "b":
        case "bb":
        case "bbb":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          });

        case "bbbbb":
          return n.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });

        case "bbbb":
        default:
          return n.dayPeriod(i, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    B: function B(e, t, n) {
      var i,
          r = e.getUTCHours();

      switch (i = r >= 17 ? I : r >= 12 ? L : r >= 4 ? D : N, t) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          });

        case "BBBBB":
          return n.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });

        case "BBBB":
        default:
          return n.dayPeriod(i, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    h: function h(e, t, n) {
      if ("ho" === t) {
        var i = e.getUTCHours() % 12;
        return 0 === i && (i = 12), n.ordinalNumber(i, {
          unit: "hour"
        });
      }

      return w.h(e, t);
    },
    H: function H(e, t, n) {
      return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
        unit: "hour"
      }) : w.H(e, t);
    },
    K: function K(e, t, n) {
      var i = e.getUTCHours() % 12;
      return "Ko" === t ? n.ordinalNumber(i, {
        unit: "hour"
      }) : b(i, t.length);
    },
    k: function k(e, t, n) {
      var i = e.getUTCHours();
      return 0 === i && (i = 24), "ko" === t ? n.ordinalNumber(i, {
        unit: "hour"
      }) : b(i, t.length);
    },
    m: function m(e, t, n) {
      return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
        unit: "minute"
      }) : w.m(e, t);
    },
    s: function s(e, t, n) {
      return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
        unit: "second"
      }) : w.s(e, t);
    },
    S: function S(e, t) {
      return w.S(e, t);
    },
    X: function X(e, t, n, i) {
      var r = (i._originalDate || e).getTimezoneOffset();
      if (0 === r) return "Z";

      switch (t) {
        case "X":
          return q(r);

        case "XXXX":
        case "XX":
          return P(r);

        case "XXXXX":
        case "XXX":
        default:
          return P(r, ":");
      }
    },
    x: function x(e, t, n, i) {
      var r = (i._originalDate || e).getTimezoneOffset();

      switch (t) {
        case "x":
          return q(r);

        case "xxxx":
        case "xx":
          return P(r);

        case "xxxxx":
        case "xxx":
        default:
          return P(r, ":");
      }
    },
    O: function O(e, t, n, i) {
      var r = (i._originalDate || e).getTimezoneOffset();

      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + M(r, ":");

        case "OOOO":
        default:
          return "GMT" + P(r, ":");
      }
    },
    z: function z(e, t, n, i) {
      var r = (i._originalDate || e).getTimezoneOffset();

      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + M(r, ":");

        case "zzzz":
        default:
          return "GMT" + P(r, ":");
      }
    },
    t: function t(e, _t4, n, i) {
      var r = i._originalDate || e;
      return b(Math.floor(r.getTime() / 1e3), _t4.length);
    },
    T: function T(e, t, n, i) {
      return b((i._originalDate || e).getTime(), t.length);
    }
  };

  function j(e, t) {
    switch (e) {
      case "P":
        return t.date({
          width: "short"
        });

      case "PP":
        return t.date({
          width: "medium"
        });

      case "PPP":
        return t.date({
          width: "long"
        });

      case "PPPP":
      default:
        return t.date({
          width: "full"
        });
    }
  }

  function O(e, t) {
    switch (e) {
      case "p":
        return t.time({
          width: "short"
        });

      case "pp":
        return t.time({
          width: "medium"
        });

      case "ppp":
        return t.time({
          width: "long"
        });

      case "pppp":
      default:
        return t.time({
          width: "full"
        });
    }
  }

  var R = {
    p: O,
    P: function P(e, t) {
      var n,
          i = e.match(/(P+)(p+)?/),
          r = i[1],
          o = i[2];
      if (!o) return j(e, t);

      switch (r) {
        case "P":
          n = t.dateTime({
            width: "short"
          });
          break;

        case "PP":
          n = t.dateTime({
            width: "medium"
          });
          break;

        case "PPP":
          n = t.dateTime({
            width: "long"
          });
          break;

        case "PPPP":
        default:
          n = t.dateTime({
            width: "full"
          });
      }

      return n.replace("{{date}}", j(r, t)).replace("{{time}}", O(o, t));
    }
  };

  function H(e) {
    return e.getTime() % 6e4;
  }

  function F(e) {
    var t = new Date(e.getTime()),
        n = Math.ceil(t.getTimezoneOffset());
    return t.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + H(t)) % 6e4 : H(t));
  }

  var z = ["D", "DD"],
      U = ["YY", "YYYY"];

  function B(e) {
    return -1 !== z.indexOf(e);
  }

  function W(e) {
    return -1 !== U.indexOf(e);
  }

  function G(e) {
    if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");
    if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");
    if ("D" === e) throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");
    if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr");
  }

  var Y = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      K = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      V = /^'([^]*?)'?$/,
      X = /''/g,
      Q = /[a-zA-Z]/;

  function Z(e, t, n) {
    o(2, arguments);
    var i = String(t),
        r = n || {},
        l = r.locale || g,
        u = l.options && l.options.firstWeekContainsDate,
        c = null == u ? 1 : m(u),
        d = null == r.firstWeekContainsDate ? c : m(r.firstWeekContainsDate);
    if (!(d >= 1 && d <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var h = l.options && l.options.weekStartsOn,
        p = null == h ? 0 : m(h),
        f = null == r.weekStartsOn ? p : m(r.weekStartsOn);
    if (!(f >= 0 && f <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!l.localize) throw new RangeError("locale must contain localize property");
    if (!l.formatLong) throw new RangeError("locale must contain formatLong property");
    var v = a(e);
    if (!s(v)) throw new RangeError("Invalid time value");
    var b = F(v),
        w = y(v, b),
        C = {
      firstWeekContainsDate: d,
      weekStartsOn: f,
      locale: l,
      _originalDate: v
    },
        x = i.match(K).map(function (e) {
      var t = e[0];
      return "p" === t || "P" === t ? (0, R[t])(e, l.formatLong, C) : e;
    }).join("").match(Y).map(function (e) {
      if ("''" === e) return "'";
      var t = e[0];
      if ("'" === t) return J(e);
      var n = $[t];
      if (n) return !r.useAdditionalWeekYearTokens && W(e) && G(e), !r.useAdditionalDayOfYearTokens && B(e) && G(e), n(w, e, l.localize, C);
      if (t.match(Q)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
      return e;
    }).join("");
    return x;
  }

  function J(e) {
    return e.match(V)[1].replace(X, "'");
  }

  var ee = new Date(),
      te = (Z(ee, "M"), Z(ee, "yyyy")),
      ne = r()("#year"),
      ie = r()("#month"),
      re = r()("#day"),
      oe = r()("#day, #month, #year"),
      ae = r()(".is-birthday-master"),
      se = ae.data("min-age"),
      le = ae.data("max-age");
  ae.on("click", function () {
    r()(this).find("#day").focus();
  }), re.on("click", function (e) {
    e.stopPropagation(), r()(this).focus();
  }), ie.on("click", function (e) {
    e.stopPropagation(), r()(this).focus();
  }), ne.on("click", function (e) {
    e.stopPropagation(), r()(this).focus();
  }), r.a.validator.addMethod("birthdaykiller", function (e, t) {
    if (ae[0].hasAttribute("data-required")) {
      if (e > 0 && e <= 32 && 2 == e.length) return "" != ie.val() && "" != ne.val() && ie.val() > 0 && ie.val() <= 12 && ne.val() > te - le && ne.val() <= te - se;
    } else {
      if (e > 0 && e <= 32 && 2 == e.length) return "" != ie.val() && "" != ne.val() && ie.val() > 0 && ie.val() <= 12 && ne.val() > te - le && ne.val() <= te - se;
      if ("" == e && "" == ie.val() && "" == ne.val()) return !0;
    }

    return !1;
  }, re.data("error-msg")), re.bind("keyup", "keydown", function (e) {
    var t = r()(this);
    t.val().length;
    if (t.val().length >= 2) return ie.focus(), t.val(t.val().slice(0, 2)), !1;
  }), ie.bind("keyup", "keydown", function (e) {
    var t = r()(this);
    t.val().length;
    if (t.val().length >= 2) return ne.focus(), t.val(t.val().slice(0, 2)), r()(".input.is-birthday-master").find(".slash.is-second").css("margin-left", "-0.1333333333em"), !1;
    r()(".input.is-birthday-master").find(".slash.is-second").css("margin-left", "0.3333333333em");
  }), ne.bind("keyup", "keydown", function (e) {
    var t = r()(this);
    t.val().length;
    if (t.val().length >= 4) return re.focus(), t.val(t.val().slice(0, 4)), !1;
  }), oe.keypress(function (e) {
    var t = new RegExp("^[0-9]+$"),
        n = String.fromCharCode(e.charCode ? e.charCode : e.which);
    return !!t.test(n) || (e.preventDefault(), !1);
  }), oe.on("cut copy paste", function (e) {
    e.preventDefault();
  }), r()("input").on("blur", function () {
    setTimeout(function () {
      re.hasClass("error") ? ae.addClass("error") : ae.removeClass("error");
    }, 10);
  }), re.rules("add", {
    birthdaykiller: !0
  });
}, function (e, t) {}]);

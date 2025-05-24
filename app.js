"use strict";
(() => {
  function e() {
    $(".register input, select").val(""),
      $(".test-drive-form input, select").val(""),
      $("#flexCheckDefault1, #chkExchange, #chkWhatsApp").prop("checked", !1);
  }
  var t = Object.create,
    r = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    n = Object.prototype.hasOwnProperty,
    a = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    l = (e, t, s, a) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let l of o(t))
          n.call(e, l) ||
            l === s ||
            r(e, l, {
              get: () => t[l],
              enumerable: !(a = i(t, l)) || a.enumerable,
            });
      return e;
    },
    c = (e, i, o) => (
      (o = null != e ? t(s(e)) : {}),
      l(
        !i && e && e.__esModule
          ? o
          : r(o, "default", { value: e, enumerable: !0 }),
        e
      )
    ),
    u = a((e, t) => {
      !(function (r, i) {
        "object" == typeof e && "object" == typeof t
          ? (t.exports = i())
          : "function" == typeof define && define.amd
          ? define([], i)
          : "object" == typeof e
          ? (e.AOS = i())
          : (r.AOS = i());
      })(e, function () {
        return (function (e) {
          function t(i) {
            if (r[i]) return r[i].exports;
            var o = (r[i] = { exports: {}, id: i, loaded: !1 });
            return (
              e[i].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
            );
          }
          var r = {};
          return (t.m = e), (t.c = r), (t.p = "dist/"), t(0);
        })([
          function (e, t, r) {
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r)
                      Object.prototype.hasOwnProperty.call(r, i) &&
                        (e[i] = r[i]);
                  }
                  return e;
                },
              s = r(1),
              n = (i(s), r(6)),
              a = i(n),
              l = r(7),
              c = i(l),
              u = r(8),
              d = i(u),
              m = r(9),
              p = i(m),
              f = r(10),
              h = i(f),
              v = r(11),
              g = i(v),
              y = r(14),
              b = i(y),
              _ = [],
              x = !1,
              w = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              k = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if ((e && (x = !0), x))
                  return (
                    (_ = (0, g.default)(_, w)), (0, h.default)(_, w.once), _
                  );
              },
              T = function () {
                (_ = (0, b.default)()), k();
              },
              S = function () {
                _.forEach(function (e, t) {
                  e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay");
                });
              },
              L = function (e) {
                (w = o(w, e)), (_ = (0, b.default)());
                var t,
                  r = document.all && !window.atob;
                return !0 === (t = w.disable) ||
                  ("mobile" === t && p.default.mobile()) ||
                  ("phone" === t && p.default.phone()) ||
                  ("tablet" === t && p.default.tablet()) ||
                  ("function" == typeof t && !0 === t()) ||
                  r
                  ? S()
                  : (w.disableMutationObserver ||
                      d.default.isSupported() ||
                      (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                      (w.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", w.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", w.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", w.delay),
                    "DOMContentLoaded" === w.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? k(!0)
                      : "load" === w.startEvent
                      ? window.addEventListener(w.startEvent, function () {
                          k(!0);
                        })
                      : document.addEventListener(w.startEvent, function () {
                          k(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, c.default)(k, w.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, c.default)(k, w.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, a.default)(function () {
                        (0, h.default)(_, w.once);
                      }, w.throttleDelay)
                    ),
                    w.disableMutationObserver ||
                      d.default.ready("[data-aos]", T),
                    _);
              };
            e.exports = { init: L, refresh: k, refreshHard: T };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              function r(e) {
                var t = void 0 === e ? "undefined" : o(e);
                return !!e && ("object" == t || "function" == t);
              }
              function i(e) {
                if ("number" == typeof e) return e;
                if (
                  (void 0 === (t = e) ? "undefined" : o(t)) == "symbol" ||
                  ((i = t) &&
                    (void 0 === i ? "undefined" : o(i)) == "object" &&
                    v.call(t) == a)
                )
                  return n;
                if (r(e)) {
                  var t,
                    i,
                    s = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = r(s) ? s + "" : s;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var p = u.test(e);
                return p || d.test(e)
                  ? m(e.slice(2), p ? 2 : 8)
                  : c.test(e)
                  ? n
                  : +e;
              }
              var o =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                s = "Expected a function",
                n = NaN,
                a = "[object Symbol]",
                l = /^\s+|\s+$/g,
                c = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                m = parseInt,
                p =
                  (void 0 === t ? "undefined" : o(t)) == "object" &&
                  t &&
                  t.Object === Object &&
                  t,
                f =
                  ("undefined" == typeof self ? "undefined" : o(self)) ==
                    "object" &&
                  self &&
                  self.Object === Object &&
                  self,
                h = p || f || Function("return this")(),
                v = Object.prototype.toString,
                g = Math.max,
                y = Math.min,
                b = function () {
                  return h.Date.now();
                };
              e.exports = function e(t, o, n) {
                var a = !0,
                  l = !0;
                if ("function" != typeof t) throw TypeError(s);
                return (
                  r(n) &&
                    ((a = "leading" in n ? !!n.leading : a),
                    (l = "trailing" in n ? !!n.trailing : l)),
                  (function e(t, o, n) {
                    function a(e) {
                      var r = m,
                        i = p;
                      return (m = p = void 0), (x = e), (h = t.apply(i, r));
                    }
                    function l(e) {
                      var t = e - _,
                        r = e - x;
                      return void 0 === _ || t >= o || t < 0 || (k && r >= f);
                    }
                    function c() {
                      var e,
                        t,
                        r,
                        i,
                        s = b();
                      return l(s)
                        ? u(s)
                        : void (v = setTimeout(
                            c,
                            ((t = (e = s) - _),
                            (r = e - x),
                            (i = o - t),
                            k ? y(i, f - r) : i)
                          ));
                    }
                    function u(e) {
                      return (
                        (v = void 0), T && m ? a(e) : ((m = p = void 0), h)
                      );
                    }
                    function d() {
                      var e,
                        t = b(),
                        r = l(t);
                      if (((m = arguments), (p = this), (_ = t), r)) {
                        if (void 0 === v)
                          return (
                            (x = e = _), (v = setTimeout(c, o)), w ? a(e) : h
                          );
                        if (k) return (v = setTimeout(c, o)), a(_);
                      }
                      return void 0 === v && (v = setTimeout(c, o)), h;
                    }
                    var m,
                      p,
                      f,
                      h,
                      v,
                      _,
                      x = 0,
                      w = !1,
                      k = !1,
                      T = !0;
                    if ("function" != typeof t) throw TypeError(s);
                    return (
                      (o = i(o) || 0),
                      r(n) &&
                        ((w = !!n.leading),
                        (f = (k = "maxWait" in n)
                          ? g(i(n.maxWait) || 0, o)
                          : f),
                        (T = "trailing" in n ? !!n.trailing : T)),
                      (d.cancel = function e() {
                        void 0 !== v && clearTimeout(v),
                          (x = 0),
                          (m = _ = p = v = void 0);
                      }),
                      (d.flush = function e() {
                        return void 0 === v ? h : u(b());
                      }),
                      d
                    );
                  })(t, o, { leading: a, maxWait: o, trailing: l })
                );
              };
            }.call(
              t,
              (function () {
                return this;
              })()
            ));
          },
          function (e, t) {
            (function (t) {
              function r(e) {
                var t = void 0 === e ? "undefined" : o(e);
                return !!e && ("object" == t || "function" == t);
              }
              function i(e) {
                if ("number" == typeof e) return e;
                if (
                  (void 0 === (t = e) ? "undefined" : o(t)) == "symbol" ||
                  ((i = t) &&
                    (void 0 === i ? "undefined" : o(i)) == "object" &&
                    h.call(t) == n)
                )
                  return s;
                if (r(e)) {
                  var t,
                    i,
                    m = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = r(m) ? m + "" : m;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(a, "");
                var p = c.test(e);
                return p || u.test(e)
                  ? d(e.slice(2), p ? 2 : 8)
                  : l.test(e)
                  ? s
                  : +e;
              }
              var o =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                s = NaN,
                n = "[object Symbol]",
                a = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                d = parseInt,
                m =
                  (void 0 === t ? "undefined" : o(t)) == "object" &&
                  t &&
                  t.Object === Object &&
                  t,
                p =
                  ("undefined" == typeof self ? "undefined" : o(self)) ==
                    "object" &&
                  self &&
                  self.Object === Object &&
                  self,
                f = m || p || Function("return this")(),
                h = Object.prototype.toString,
                v = Math.max,
                g = Math.min,
                y = function () {
                  return f.Date.now();
                };
              e.exports = function e(t, o, s) {
                function n(e) {
                  var r = d,
                    i = m;
                  return (d = m = void 0), (_ = e), (f = t.apply(i, r));
                }
                function a(e) {
                  var t = e - b,
                    r = e - _;
                  return void 0 === b || t >= o || t < 0 || (w && r >= p);
                }
                function l() {
                  var e,
                    t,
                    r,
                    i,
                    s = y();
                  return a(s)
                    ? c(s)
                    : void (h = setTimeout(
                        l,
                        ((t = (e = s) - b),
                        (r = e - _),
                        (i = o - t),
                        w ? g(i, p - r) : i)
                      ));
                }
                function c(e) {
                  return (h = void 0), k && d ? n(e) : ((d = m = void 0), f);
                }
                function u() {
                  var e,
                    t = y(),
                    r = a(t);
                  if (((d = arguments), (m = this), (b = t), r)) {
                    if (void 0 === h)
                      return (_ = e = b), (h = setTimeout(l, o)), x ? n(e) : f;
                    if (w) return (h = setTimeout(l, o)), n(b);
                  }
                  return void 0 === h && (h = setTimeout(l, o)), f;
                }
                var d,
                  m,
                  p,
                  f,
                  h,
                  b,
                  _ = 0,
                  x = !1,
                  w = !1,
                  k = !0;
                if ("function" != typeof t)
                  throw TypeError("Expected a function");
                return (
                  (o = i(o) || 0),
                  r(s) &&
                    ((x = !!s.leading),
                    (p = (w = "maxWait" in s) ? v(i(s.maxWait) || 0, o) : p),
                    (k = "trailing" in s ? !!s.trailing : k)),
                  (u.cancel = function e() {
                    void 0 !== h && clearTimeout(h),
                      (_ = 0),
                      (d = b = m = h = void 0);
                  }),
                  (u.flush = function e() {
                    return void 0 === h ? f : c(y());
                  }),
                  u
                );
              };
            }.call(
              t,
              (function () {
                return this;
              })()
            ));
          },
          function (e, t) {
            function r() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function i(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    r = Array.prototype.slice.call(e.removedNodes);
                  if (
                    (function e(t) {
                      var r = void 0,
                        i = void 0,
                        o = void 0;
                      for (r = 0; r < t.length; r += 1)
                        if (
                          ((i = t[r]).dataset && i.dataset.aos) ||
                          (o = i.children && e(i.children))
                        )
                          return !0;
                      return !1;
                    })(t.concat(r))
                  )
                    return o();
                });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function () {};
            t.default = {
              isSupported: function e() {
                return !!r();
              },
              ready: function e(t, s) {
                var n = window.document,
                  a = new (r())(i);
                (o = s),
                  a.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              },
            };
          },
          function (e, t) {
            function r() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, r, i) {
                  return r && e(t.prototype, r), i && e(t, i), t;
                };
              })(),
              o =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              s =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              n =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              a =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              l = (function () {
                function e() {
                  !(function e(t, r) {
                    if (!(t instanceof r))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  i(e, [
                    {
                      key: "phone",
                      value: function () {
                        var e = r();
                        return !(!o.test(e) && !s.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var e = r();
                        return !(!n.test(e) && !a.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new l();
          },
          function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function (e, t, r) {
                var i = e.node.getAttribute("data-aos-once");
                t > e.position
                  ? e.node.classList.add("aos-animate")
                  : void 0 === i ||
                    ("false" !== i && (r || "true" === i)) ||
                    e.node.classList.remove("aos-animate");
              },
              i = function (e, t) {
                var i = window.pageYOffset,
                  o = window.innerHeight;
                e.forEach(function (e, s) {
                  r(e, o + i, t);
                });
              };
            t.default = i;
          },
          function (e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i,
              o = (i = r(12)) && i.__esModule ? i : { default: i },
              s = function (e, t) {
                return (
                  e.forEach(function (e, r) {
                    e.node.classList.add("aos-init"),
                      (e.position = (0, o.default)(e.node, t.offset));
                  }),
                  e
                );
              };
            t.default = s;
          },
          function (e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i,
              o = (i = r(13)) && i.__esModule ? i : { default: i },
              s = function (e, t) {
                var r = 0,
                  i = 0,
                  s = window.innerHeight,
                  n = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute(
                      "data-aos-anchor-placement"
                    ),
                  };
                switch (
                  (n.offset && !isNaN(n.offset) && (i = parseInt(n.offset)),
                  n.anchor &&
                    document.querySelectorAll(n.anchor) &&
                    (e = document.querySelectorAll(n.anchor)[0]),
                  (r = (0, o.default)(e).top),
                  n.anchorPlacement)
                ) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    r += e.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    r += e.offsetHeight;
                    break;
                  case "top-center":
                    r += s / 2;
                    break;
                  case "bottom-center":
                    r += s / 2 + e.offsetHeight;
                    break;
                  case "center-center":
                    r += s / 2 + e.offsetHeight / 2;
                    break;
                  case "top-top":
                    r += s;
                    break;
                  case "bottom-top":
                    r += e.offsetHeight + s;
                    break;
                  case "center-top":
                    r += e.offsetHeight / 2 + s;
                }
                return (
                  n.anchorPlacement || n.offset || isNaN(t) || (i = t), r + i
                );
              };
            t.default = s;
          },
          function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function (e) {
              for (
                var t = 0, r = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (r += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: r, left: t };
            };
            t.default = r;
          },
          function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            };
            t.default = r;
          },
        ]);
      });
    }),
    d = a((e, t) => {
      !(function (e, r) {
        "function" == typeof define && define.amd
          ? define([], r)
          : "object" == typeof t && t.exports
          ? (t.exports = r())
          : (e.Rellax = r());
      })("undefined" != typeof window ? window : global, function () {
        var e = function (t, r) {
          var i = Object.create(e.prototype),
            o = 0,
            s = 0,
            n = 0,
            a = 0,
            l = [],
            c = !0,
            u =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              function (e) {
                return setTimeout(e, 1e3 / 60);
              },
            d = null,
            m = !1;
          try {
            var p = Object.defineProperty({}, "passive", {
              get: function () {
                m = !0;
              },
            });
            window.addEventListener("testPassive", null, p),
              window.removeEventListener("testPassive", null, p);
          } catch (f) {}
          var h =
              window.cancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              clearTimeout,
            v =
              window.transformProp ||
              (function () {
                var e = document.createElement("div");
                if (null === e.style.transform) {
                  var t = ["Webkit", "Moz", "ms"];
                  for (var r in t)
                    if (void 0 !== e.style[t[r] + "Transform"])
                      return t[r] + "Transform";
                }
                return "transform";
              })();
          (i.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [576, 768, 1201],
            center: !1,
            wrapper: null,
            relativeToWrapper: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function () {},
          }),
            r &&
              Object.keys(r).forEach(function (e) {
                i.options[e] = r[e];
              }),
            r &&
              r.breakpoints &&
              (function e() {
                if (
                  3 === i.options.breakpoints.length &&
                  Array.isArray(i.options.breakpoints)
                ) {
                  var t,
                    r = !0,
                    o = !0;
                  if (
                    (i.options.breakpoints.forEach(function (e) {
                      "number" != typeof e && (o = !1),
                        null !== t && e < t && (r = !1),
                        (t = e);
                    }),
                    r && o)
                  )
                    return;
                }
                (i.options.breakpoints = [576, 768, 1201]),
                  console.warn(
                    "Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted"
                  );
              })(),
            t || (t = ".rellax");
          var g = "string" == typeof t ? document.querySelectorAll(t) : [t];
          if (g.length > 0) i.elems = g;
          else {
            console.warn(
              "Rellax: The elements you're trying to select don't exist."
            );
            return;
          }
          if (i.options.wrapper && !i.options.wrapper.nodeType) {
            var y = document.querySelector(i.options.wrapper);
            if (y) i.options.wrapper = y;
            else {
              console.warn(
                "Rellax: The wrapper you're trying to use doesn't exist."
              );
              return;
            }
          }
          var b,
            _ = function (e) {
              var t = i.options.breakpoints;
              return e < t[0]
                ? "xs"
                : e >= t[0] && e < t[1]
                ? "sm"
                : e >= t[1] && e < t[2]
                ? "md"
                : "lg";
            },
            x = function () {
              for (var e = 0; e < i.elems.length; e++) {
                var t = k(i.elems[e]);
                l.push(t);
              }
            },
            w = function () {
              for (var e = 0; e < l.length; e++)
                i.elems[e].style.cssText = l[e].style;
              (l = []),
                (s = window.innerHeight),
                (b = _((a = window.innerWidth))),
                T(),
                x(),
                E(),
                c && (window.addEventListener("resize", w), (c = !1), A());
            },
            k = function (e) {
              var t,
                r = e.getAttribute("data-rellax-percentage"),
                o = e.getAttribute("data-rellax-speed"),
                n = e.getAttribute("data-rellax-xs-speed"),
                l = e.getAttribute("data-rellax-mobile-speed"),
                c = e.getAttribute("data-rellax-tablet-speed"),
                u = e.getAttribute("data-rellax-desktop-speed"),
                d = e.getAttribute("data-rellax-vertical-speed"),
                m = e.getAttribute("data-rellax-horizontal-speed"),
                p = e.getAttribute("data-rellax-vertical-scroll-axis"),
                f = e.getAttribute("data-rellax-horizontal-scroll-axis"),
                h = e.getAttribute("data-rellax-zindex") || 0,
                v = e.getAttribute("data-rellax-min"),
                g = e.getAttribute("data-rellax-max"),
                y = e.getAttribute("data-rellax-min-x"),
                _ = e.getAttribute("data-rellax-max-x"),
                x = e.getAttribute("data-rellax-min-y"),
                w = e.getAttribute("data-rellax-max-y"),
                k = !0;
              n || l || c || u
                ? (t = { xs: n, sm: l, md: c, lg: u })
                : (k = !1);
              var T = i.options.wrapper
                ? i.options.wrapper.scrollTop
                : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop;
              i.options.relativeToWrapper &&
                (T =
                  (window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop) - i.options.wrapper.offsetTop);
              var L = i.options.vertical && (r || i.options.center) ? T : 0,
                A =
                  i.options.horizontal && (r || i.options.center)
                    ? i.options.wrapper
                      ? i.options.wrapper.scrollLeft
                      : window.pageXOffset ||
                        document.documentElement.scrollLeft ||
                        document.body.scrollLeft
                    : 0,
                E = L + e.getBoundingClientRect().top,
                C = e.clientHeight || e.offsetHeight || e.scrollHeight,
                q = A + e.getBoundingClientRect().left,
                M = e.clientWidth || e.offsetWidth || e.scrollWidth,
                N = r || (L - E + s) / (C + s),
                P = r || (A - q + a) / (M + a);
              i.options.center && ((P = 0.5), (N = 0.5));
              var z = k && null !== t[b] ? Number(t[b]) : o || i.options.speed,
                O = d || i.options.verticalSpeed,
                I = m || i.options.horizontalSpeed,
                R = p || i.options.verticalScrollAxis,
                D = f || i.options.horizontalScrollAxis,
                H = S(P, N, z, O, I),
                B = e.style.cssText,
                j = "",
                Z = /transform\s*:/i.exec(B);
              if (Z) {
                var W = Z.index,
                  F = B.slice(W),
                  U = F.indexOf(";");
                j = U
                  ? " " + F.slice(11, U).replace(/\s/g, "")
                  : " " + F.slice(11).replace(/\s/g, "");
              }
              return {
                baseX: H.x,
                baseY: H.y,
                top: E,
                left: q,
                height: C,
                width: M,
                speed: z,
                verticalSpeed: O,
                horizontalSpeed: I,
                verticalScrollAxis: R,
                horizontalScrollAxis: D,
                style: B,
                transform: j,
                zindex: h,
                min: v,
                max: g,
                minX: y,
                maxX: _,
                minY: x,
                maxY: w,
              };
            },
            T = function () {
              var e = o,
                t = n;
              return (
                (o = i.options.wrapper
                  ? i.options.wrapper.scrollTop
                  : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                    ).scrollTop || window.pageYOffset),
                (n = i.options.wrapper
                  ? i.options.wrapper.scrollLeft
                  : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                    ).scrollLeft || window.pageXOffset),
                i.options.relativeToWrapper &&
                  (o =
                    ((
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                    ).scrollTop || window.pageYOffset) -
                    i.options.wrapper.offsetTop),
                !!(
                  (e != o && i.options.vertical) ||
                  (t != n && i.options.horizontal)
                )
              );
            },
            S = function (e, t, r, o, s) {
              var n = {},
                a = (s || r) * (100 * (1 - e)),
                l = (o || r) * (100 * (1 - t));
              return (
                (n.x = i.options.round
                  ? Math.round(a)
                  : Math.round(100 * a) / 100),
                (n.y = i.options.round
                  ? Math.round(l)
                  : Math.round(100 * l) / 100),
                n
              );
            },
            L = function () {
              window.removeEventListener("resize", L),
                window.removeEventListener("orientationchange", L),
                (i.options.wrapper
                  ? i.options.wrapper
                  : window
                ).removeEventListener("scroll", L),
                (i.options.wrapper
                  ? i.options.wrapper
                  : document
                ).removeEventListener("touchmove", L),
                (d = u(A));
            },
            A = function () {
              T() && !1 === c
                ? (E(), (d = u(A)))
                : ((d = null),
                  window.addEventListener("resize", L),
                  window.addEventListener("orientationchange", L),
                  (i.options.wrapper
                    ? i.options.wrapper
                    : window
                  ).addEventListener("scroll", L, !!m && { passive: !0 }),
                  (i.options.wrapper
                    ? i.options.wrapper
                    : document
                  ).addEventListener("touchmove", L, !!m && { passive: !0 }));
            },
            E = function () {
              for (var e, t = 0; t < i.elems.length; t++) {
                var r = l[t].verticalScrollAxis.toLowerCase(),
                  c = l[t].horizontalScrollAxis.toLowerCase(),
                  u = -1 != r.indexOf("x") ? o : 0,
                  d = -1 != r.indexOf("y") ? o : 0,
                  m = -1 != c.indexOf("x") ? n : 0,
                  p = -1 != c.indexOf("y") ? n : 0,
                  f = (d + p - l[t].top + s) / (l[t].height + s),
                  h =
                    (e = S(
                      (u + m - l[t].left + a) / (l[t].width + a),
                      f,
                      l[t].speed,
                      l[t].verticalSpeed,
                      l[t].horizontalSpeed
                    )).y - l[t].baseY,
                  g = e.x - l[t].baseX;
                null !== l[t].min &&
                  (i.options.vertical &&
                    !i.options.horizontal &&
                    (h = h <= l[t].min ? l[t].min : h),
                  i.options.horizontal &&
                    !i.options.vertical &&
                    (g = g <= l[t].min ? l[t].min : g)),
                  null != l[t].minY && (h = h <= l[t].minY ? l[t].minY : h),
                  null != l[t].minX && (g = g <= l[t].minX ? l[t].minX : g),
                  null !== l[t].max &&
                    (i.options.vertical &&
                      !i.options.horizontal &&
                      (h = h >= l[t].max ? l[t].max : h),
                    i.options.horizontal &&
                      !i.options.vertical &&
                      (g = g >= l[t].max ? l[t].max : g)),
                  null != l[t].maxY && (h = h >= l[t].maxY ? l[t].maxY : h),
                  null != l[t].maxX && (g = g >= l[t].maxX ? l[t].maxX : g);
                var y = l[t].zindex,
                  b =
                    "translate3d(" +
                    (i.options.horizontal ? g : "0") +
                    "px," +
                    (i.options.vertical ? h : "0") +
                    "px," +
                    y +
                    "px) " +
                    l[t].transform;
                i.elems[t].style[v] = b;
              }
              i.options.callback(e);
            };
          return (
            (i.destroy = function () {
              for (var e = 0; e < i.elems.length; e++)
                i.elems[e].style.cssText = l[e].style;
              c || (window.removeEventListener("resize", w), (c = !0)),
                h(d),
                (d = null);
            }),
            w(),
            (i.refresh = w),
            i
          );
        };
        return e;
      });
    }),
    m = a((e, t) => {
      t.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && "object" == typeof t && "object" == typeof r) {
          if (t.constructor !== r.constructor) return !1;
          if (Array.isArray(t)) {
            if ((i = t.length) != r.length) return !1;
            for (o = i; 0 != o--; ) if (!e(t[o], r[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if ((i = (s = Object.keys(t)).length) !== Object.keys(r).length)
            return !1;
          for (o = i; 0 != o--; )
            if (!Object.prototype.hasOwnProperty.call(r, s[o])) return !1;
          for (o = i; 0 != o--; ) {
            var i,
              o,
              s,
              n = s[o];
            if (!e(t[n], r[n])) return !1;
          }
          return !0;
        }
        return t != t && r != r;
      };
    });
  function p() {
    var e,
      t = " -webkit- -moz- -o- -ms- ".split(" ");
    return (
      !!(
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      ) ||
      ((e = ["(", t.join("touch-enabled),("), "heartz", ")"].join("")),
      window.matchMedia(e).matches)
    );
  }
  p()
    ? document.querySelector("html").classList.add("is-touch")
    : document.querySelector("html").classList.add("is-not-touch");
  var f = c(u()),
    h = { root: null, rootMargin: "0px", threshold: 1 };
  function v(e) {
    e.forEach((e) => {
      e.isIntersecting
        ? e.target.classList.add("is-inview")
        : e.target.classList.remove("is-inview");
    });
  }
  var g,
    y = new IntersectionObserver(v, h);
  document.querySelectorAll(".label, .timeline-wrapper").forEach((e) => {
    y.observe(e);
  });
  var b,
    _,
    x,
    w = c(d());
  document.querySelector("[data-rellax-speed]:not([data-rellax-horizontal]") &&
    new w.default("[data-rellax-speed]:not([data-rellax-horizontal]", {
      speed: 8,
      center: !0,
      breakpoints: [576, 768, 992],
    }),
    document.querySelector("figure.rellax img") &&
      new w.default("figure.rellax img", {
        speed: -4,
        center: !0,
        breakpoints: [576, 768, 992],
      }),
    document.querySelector("[data-rellax-horizontal]") &&
      new w.default("[data-rellax-horizontal]", {
        speed: 8,
        horizontal: !0,
        vertical: !1,
        center: !0,
        wrapper: ".scroller-frame",
        breakpoints: [576, 768, 992],
      }),
    document.querySelectorAll(".dd-scroll-disable").forEach(function (e) {
      e.addEventListener("click", function () {
        console.log("disable scroll"),
          document.querySelector("html").classList.add("dd-scroll-disable");
      });
    }),
    document.querySelectorAll(".dd-scroll-enable").forEach(function (e) {
      e.addEventListener("click", function () {
        document.querySelector("html").classList.remove("dd-scroll-disable");
      });
    }),
    document.querySelectorAll(".dd-scroll-toggle").forEach(function (e) {
      e.addEventListener("click", function () {
        document.querySelector("html").classList.toggle("dd-scroll-disable");
      });
    });
  var k = document.querySelectorAll(".dd-toggler"),
    T = document.querySelectorAll(".dd-close"),
    S = document.querySelectorAll(".dd-open");
  T.forEach(function (e) {
    e.addEventListener("click", function () {
      q();
    });
  }),
    S.forEach(function (e) {
      let t = e.getAttribute("data-toggler-selector")
        ? e.getAttribute("data-toggler-selector")
        : e.getAttribute("href");
      if (document.querySelector(t)) {
        let r = document.querySelector(t);
        e.addEventListener("click", function () {
          q(),
            r.classList.remove("dd-toggle-init"),
            r.classList.remove("is-hidden");
          let e = r.querySelector("iframe[data-src]");
          e && e.setAttribute("src", e.dataset.src);
        });
      }
    }),
    k.forEach(function (t) {
      t.classList.add("dd-toggle-init");
      let r = t.getAttribute("data-toggler-selector")
        ? t.getAttribute("data-toggler-selector")
        : t.getAttribute("href");
      if (document.querySelector(r)) {
        let i = document.querySelector(r);
        i.classList.add("dd-toggle-init"),
          t.addEventListener("click", function () {
            e(),
              t.classList.remove("dd-toggle-init"),
              t.classList.toggle("is-active"),
              i.classList.remove("dd-toggle-init"),
              i.classList.toggle("is-hidden");
            let r = i.querySelector("iframe[data-src]");
            r &&
              (i.classList.contains("is-hidden")
                ? r.setAttribute("src", "")
                : r.setAttribute("src", r.dataset.src));
          });
      }
    });
  var L = document.querySelector("html"),
    A = document.querySelector("body"),
    E = document.createElement("div");
  E.classList.add("disable-overlay"), A.appendChild(E);
  var C,
    q = () => {
      e(),
        $(".register .error").hide(),
        $(".test-drive-form .error").hide(),
        document.querySelector(".slideout:not(.is-hidden)") &&
          (document.querySelector(".slideout:not(.is-hidden").scrollTo(0, 0),
          document
            .querySelector(".slideout:not(.is-hidden)")
            .classList.add("is-hidden")),
        document.querySelector(".register:not(.is-hidden)") &&
          (document.querySelector(".register:not(.is-hidden").scrollTo(0, 0),
          document
            .querySelector(".register:not(.is-hidden)")
            .classList.add("is-hidden")),
        document.querySelector(".test-drive-form:not(.is-hidden)") &&
          (document
            .querySelector(".test-drive-form:not(.is-hidden")
            .scrollTo(0, 0),
          document
            .querySelector(".test-drive-form:not(.is-hidden)")
            .classList.add("is-hidden")),
        document.querySelector(".mobile-nav:not(.is-hidden)") &&
          (document
            .querySelector(".nav-toggle.is-active")
            .classList.remove("is-active"),
          document.querySelector(".mobile-nav:not(.is-hidden").scrollTo(0, 0),
          document
            .querySelector(".mobile-nav:not(.is-hidden)")
            .classList.add("is-hidden"));
      let t = document.querySelector(".slideout.is-hidden iframe[data-src]");
      t && t.setAttribute("src", "");
    };
  function M(e, t, r) {
    return t > e.length - 1 ? e : e.substring(0, t) + r + e.substring(t + 1);
  }
  function N() {
    let e = document.querySelectorAll(".type-reveal"),
      t = /^\s+|\s+$/g;
    e.forEach((e) => {
      let r = e.innerHTML.replace(t, "");
      (e.dataset.origText = r),
        e.classList.add("is-active"),
        (e.innerHTML = "");
      let i = document.createElement("span");
      i.classList.add("ghost"), (i.innerHTML = r);
      let o = document.createElement("span");
      o.classList.add("live"),
        (o.innerHTML = ""),
        e.appendChild(o),
        e.appendChild(i);
    });
  }
  function P(e) {
    if (!e.classList.contains("is-complete")) {
      let t = 250 * (Array.from(e.parentNode.children).indexOf(e) + 1);
      console.log(t), (e.dataset.delay = t);
      let r = 0,
        i = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
        o = e.querySelector("span.live"),
        s = e.querySelector("span.ghost").innerHTML;
      setTimeout(function () {
        let t = setInterval(function () {
          r < s.length - 1 && (o.innerHTML += " ");
          let n = i.shuffle(),
            a = 0,
            l = setInterval(function () {
              let i = o.innerHTML;
              (i = M(i, r, n[a])),
                (o.innerHTML = i),
                ++a > 12 &&
                  (clearInterval(l),
                  (i = M(i, r, s.charAt(r))),
                  (o.innerHTML = i),
                  ++r > s.length &&
                    (clearInterval(t),
                    e.classList.remove("is-active"),
                    e.classList.add("is-complete")));
            }, 10);
        }, 50);
      }, t);
    }
  }
  E.addEventListener("click", function () {
    q(), L.classList.remove("dd-scroll-disable");
  }),
    document.querySelectorAll("li.button-group").forEach((e) => {
      "mouseenter mouseleave touchend".split(" ").forEach(function (t) {
        e.addEventListener(t, function () {
          this.classList.toggle("is-active");
        });
      }),
        e.addEventListener("mouseleave", function () {
          this.classList.remove("is-active");
        });
    }),
    L.classList.add("dd-toggle-ready"),
    (Array.prototype.shuffle = function () {
      let e = this.length,
        t;
      for (; e; )
        (t = (Math.random() * e--) >>> 0),
          ([this[e], this[t]] = [this[t], this[e]]);
      return this;
    }),
    (String.prototype.replaceAt = function (e, t) {
      return this.substring(0, e) + t + this.substring(e + t.length);
    }),
    N();
  var z = { root: null, rootMargin: "0px", threshold: 0.8 };
  function O(e) {
    e.forEach((e) => {
      e.isIntersecting && P(e.target);
    });
  }
  var I,
    R = new IntersectionObserver(O, z);
  document.querySelectorAll(".type-reveal").forEach((e) => {
    R.observe(e);
  });
  var D,
    H,
    B = (e) => {
      let t;
      return (...r) => {
        t && cancelAnimationFrame(t),
          (t = requestAnimationFrame(() => {
            e(...r);
          }));
      };
    },
    j = document.querySelector("section.scroller"),
    Z = document.querySelectorAll("section.scroller .scroller-frame"),
    W = "is-active";
  if (j) {
    let F = (e, t, r) => {
      r && r.classList.remove(W), t.classList.add(W);
      let i = e.currentStyle || window.getComputedStyle(e),
        o = t.offsetLeft - parseInt(i.paddingLeft);
      e.scrollTo(o, 0);
    };
    Z.forEach((e) => {
      let t = e.classList.contains("thumbs"),
        r = e.querySelectorAll(".slide");
      t &&
        ((s = document.createElement("ul")),
        e.parentNode.parentNode.appendChild(s),
        s.classList.add("thumb-wrapper"),
        s.classList.add("body-push"),
        r.forEach((t) => {
          let r = t.querySelector("img").cloneNode(!1),
            i = document.createElement("li");
          i.appendChild(r),
            s.appendChild(i),
            s.querySelector("li:first-child").classList.add("is-active"),
            r.parentNode.addEventListener("click", function () {
              let r = e.querySelector(".slide.is-active");
              F(e, t, r);
            });
        })),
        (D = document.createElement("button")).classList.add("scroller-back"),
        (D.innerHTML = "Back"),
        (H = document.createElement("button")).classList.add("scroller-next"),
        (H.innerHTML = "Next");
      let i = document.createElement("span");
      i.classList.add("scroller-counter");
      let o = e.childElementCount;
      var s,
        n = 1;
      if (
        ((i.innerHTML = n + "/" + o),
        e.parentNode.insertBefore(D, e),
        e.parentNode.insertBefore(H, e),
        e.parentNode.insertBefore(i, e),
        [H, D].forEach((e) => {
          e.addEventListener("mouseover", function () {
            this.parentNode.parentNode.classList.add("is-hovered");
          }),
            e.addEventListener("mouseout", function () {
              this.parentNode.parentNode.classList.remove("is-hovered");
            });
        }),
        H.addEventListener("click", function () {
          let t = e.querySelector(".slide.is-active"),
            r = t.nextElementSibling;
          r && (F(e, r, t), n++, (i.innerHTML = n + "/" + o));
        }),
        D.addEventListener("click", function () {
          let t = e.querySelector(".slide.is-active"),
            r = t.previousElementSibling;
          r && (F(e, r, t), n--, (i.innerHTML = n + "/" + o));
        }),
        t)
      ) {
        var a = {
          root: e.parentNode,
          RootMargin: "0px 45% 0px 45%",
          threshold: 0.8,
        };
        let l = (e) => {
            e.forEach((e) => {
              var t = e.target.querySelector("img").getAttribute("src"),
                r = s.querySelectorAll(".is-active");
              (e.target.dataset.intersecting = e.intersectionRatio),
                e.isIntersecting
                  ? (r.forEach((e) => {
                      e.classList.remove("is-active");
                    }),
                    e.target.classList.add("is-inview"),
                    s
                      .querySelector(`[src="${t}"]`)
                      .parentNode.classList.add("is-active"))
                  : ((e.target.dataset.intersecting = 0),
                    e.target.classList.remove("is-inview"),
                    s
                      .querySelector(`[src="${t}"]`)
                      .parentNode.classList.remove("is-active"));
            });
          },
          c = new IntersectionObserver(l, a);
        r.forEach((e) => {
          c.observe(e);
        });
      }
      let u = () => {
        let t = e.querySelector(".slide.is-active");
        F(e, t);
      };
      window.addEventListener("resize", B(u));
    });
  }
  var U,
    G = document.querySelectorAll(".tabs .tabs-wrapper"),
    Y = "is-active";
  G &&
    G.forEach(function (e, t) {
      var r;
      let i = !!e.classList.contains("grid-text"),
        o = document.createElement("ul");
      o.classList.add("tab-menu"), e.parentNode.insertBefore(o, e);
      let s = e.querySelectorAll(".tab:not(.pre-tab)");
      function n() {
        if (e.dataset.autoplay) {
          let t = e.dataset.autoplay;
          console.log("autoplay " + t),
            clearInterval(r),
            (r = setInterval(() => {
              let t = e.querySelector(".tab.is-active"),
                r = e.querySelector(".tab:first-child"),
                i = t.nextElementSibling,
                s = o.querySelector("li.is-active"),
                n = o.querySelector("li:first-child"),
                a = s.nextElementSibling,
                sourceEle = $(".html-video source");
              i
                ? (t.classList.remove(Y),
                  i.classList.add(Y),
                  s.classList.remove(Y),
                  a.classList.add(Y),
                  $(".html-video source").each(function (index, element) {
                    $(sourceEle[index]).attr("src") == ""
                      ? ($(sourceEle[index]).attr(
                          "src",
                          $(sourceEle[index]).attr("data-src")
                        ),
                        $(sourceEle[index]).closest("video")[0].load(),
                        $(sourceEle[index]).closest("video")[0].play())
                      : "";
                  }))
                : (t.classList.remove(Y),
                  r.classList.add(Y),
                  s.classList.remove(Y),
                  n.classList.add(Y));
            }, t));
        }
      }
      i &&
        o.addEventListener("mouseleave", function () {
          let t = o.querySelector(".is-active"),
            r = e.querySelector(".is-active");
          t.classList.remove("is-active"),
            r.classList.remove("is-active"),
            e.querySelector(".tab.pre-tab").classList.add("is-active");
        }),
        s.forEach(function (r, s) {
          r.id = "tab-" + t + "_" + s;
          let a = r.dataset.label ? r.dataset.label : "",
            l = r.querySelector("p") ? r.querySelector("p") : "",
            c = document.createElement("li");
          c.dataset.tabNum = "tab-" + t + "_" + s;
          var u = "click";
          if (i) {
            console.log("grid is true");
            let d = document.createElement("span"),
              m = document.createElement("p");
            (d.innerHTML = a),
              (m.innerHTML = l.innerHTML),
              c.appendChild(d),
              c.appendChild(m),
              (u = "mouseenter touchend");
          } else (c.innerHTML = a), (r.dataset.original = c.innerHTML);
          o.appendChild(c),
            r.classList.contains(Y) && 0 == s && c.classList.add(Y),
            u.split(" ").forEach(function (t) {
              c.addEventListener(t, function () {
                let t = e.parentNode.querySelector(".tab.is-active"),
                  r = e.parentNode.querySelector("[data-tab-num].is-active");
                t && t.classList.remove(Y), r && r.classList.remove(Y);
                let i = this.dataset.tabNum;
                this.classList.add(Y),
                  e.querySelector("#" + i).classList.add(Y),
                  n();
              });
            });
        }),
        n();
    }),
    document.querySelectorAll("section.video video").forEach((e) => {
      let t = e.parentNode;
      e.addEventListener("playing", () => {
        t.classList.add("is-playing"), e.setAttribute("controls", !0);
      }),
        e.addEventListener("pause", () => {
          t.classList.remove("is-playing"), e.removeAttribute("controls");
        }),
        document.querySelector("html").classList.contains("is-not-touch")
          ? (e.classList.add("is-not-touch"),
            e.addEventListener("click", () => {
              t.classList.contains("is-playing") || e.play();
            }))
          : (e.setAttribute("controls", !0), e.classList.add("is-touch"));
    });
  var K,
    X = { rootMargin: "0px 0px -50% 0px", threshold: 0.1 },
    J = (e) => {
      e.forEach((e) => {
        var t = e.target.getAttribute("id"),
          r = document.querySelectorAll(".main-nav .is-active");
        (e.target.dataset.intersecting = e.intersectionRatio),
          e.isIntersecting
            ? (r.forEach((e) => {
                e.classList.remove("is-active");
              }),
              e.target.classList.add("is-inview"),
              document.querySelector(`.main-nav ul.main [href*="#${t}"]`) &&
                document
                  .querySelector(`.main-nav ul.main [href*="#${t}"]`)
                  .classList.add("is-active"))
            : ((e.target.dataset.intersecting = 0),
              e.target.classList.remove("is-inview"),
              document.querySelector(`.main-nav ul.main [href*="#${t}"]`) &&
                document
                  .querySelector(`.main-nav ul.main [href*="#${t}"]`)
                  .classList.remove("is-active"));
      });
    },
    V = new IntersectionObserver(J, X);
  document.querySelectorAll(".separator").forEach((e) => {
    V.observe(e);
  });
  
  Cookies.set("utm_s", ee),
    Cookies.set("url_r", et),
    $(document).ready(function () {
      function e(e) {
        var t = Cookies.get("utm_s");
        if (t)
          for (var r = t.substr(1).split("&"), i = 0; i < r.length; i++) {
            var o = r[i].split("=");
            if (o[0] == e) return decodeURIComponent(o[1]);
          }
        return "";
      }
      function t(e) {
        let t = `; ${document.cookie}`,
          r = t.split(`; ${e}=`);
        if (2 === r.length) return r.pop().split(";").shift();
      }
      e();
      var r,
        i = [
          "AHMEDABAD",
          "AMEERPET",
          "BADSHAHPUR",
          "BANGALORE",
          "CHANDIGARH",
          "CHENNAI",
          "CHORYASI",
          "DELHI",
          "ERNAKULAM",
          "FARIDABAD",
          "GHAZIABAD",
          "GURGAON",
          "HYDERABAD",
          "JAIPUR",
          "KALYAN",
          "KANCHIPURAM",
          "KOCHI",
          "KOLKATA",
          "MOHALI",
          "MUMBAI",
          "NAGPUR",
          "NARSINGHPUR",
          "NASHIK",
          "NAVI MUMBAI",
          "NEW DELHI",
          "NOIDA",
          "PUNE",
          "SALCETE",
          "SURAT",
          "THANE",
          "TRIVANDRUM",
          "UDHNA",
          "VASAI",
          "DEHRADUN",
          "COIMBATORE",
          "AURANGABAD",
          "BHUBANESWAR",
          "KOLHAPUR",
          "MYSORE",
          "MANGALORE",
          "VADODARA",
          "PATNA",
          "RAJKOT",
          "CALICUT",
          "RAIPUR (CHATTISGARH)",
          "LUDHIANA",
          "UDAIPUR (RJ)",
          "JAMMU",
          "GUWAHATI",
          "LUCKNOW",
          "AGRA",
          "INDORE",
        ];
      function o() {
        $($("#btnSUBSCRIBE1")).removeAttr("disabled"),
          $($("#btnTESTDRIVE")).removeAttr("disabled"),
          "" !== $("#ddlcity1").val() &&
            !$(".register").hasClass("is-hidden") &&
            (i.indexOf($("#ddlcity1").val()) > -1
              ? (location.href = "/xuv400/thank-you")
              : (location.href = "/xuv400/thank-you-regret-page")),
          "" !== $("#ddlcity1-t").val() &&
            !$(".test-drive-form").hasClass("is-hidden") &&
            (i.indexOf($("#ddlcity1-t").val()) > -1
              ? (location.href = "/xuv400/thank-you")
              : (location.href = "/xuv400/thank-you-regret-page"));
      }
      function s() {
        oErrorModal.showErrorModal();
      }
      function n(e, t, r, i, o, s) {
        $.ajax({
          type: e,
          async: o,
          url: t,
          contentType: "application/json",
          dataType: "json",
          data: r,
        })
          .done(function (e) {
            i(e);
          })
          .fail(function (e, r, i) {
            s ? s() : console.log("error in api call " + t);
          });
      }
      
        $("#btnSUBSCRIBE1").click(function () {
          if (
            ($(".register .error").hide(),
            $(this).attr("disabled", "disabled"),
            "" == $(".register #txtFullName1").val())
          )
            return (
              $(".register #txtFullName1").focus(),
              $(".register #fullname-error1").text(
                "Please enter your full name"
              ),
              $(this).removeAttr("disabled"),
              $(".register #fullname-error1").show(),
              !1
            );
          if ($(".register #txtFullName1").val().length > 40)
            return (
              $(".register #txtFullName1").focus(),
              $(".register #fullname-error1").text(
                "Please limit your name to 40 characters"
              ),
              $(this).removeAttr("disabled"),
              $(".register #fullname-error1").show(),
              !1
            );
          var r = /^[a-zA-Z](?!.*\.{2})[a-zA-Z .'-]*$/;
          if (!r.test($(".register #txtFullName1").val()))
            return (
              $(".register #txtFullName1").focus(),
              $(".register #fullname-error1").text(
                "Only include letters, spaces or full stops"
              ),
              $(this).removeAttr("disabled"),
              $(".register #fullname-error1").show(),
              !1
            );
          if (
            ($(".register #fullname-error1").text(""),
            "" == $(".register #txtMobileNumber1").val())
          )
            return (
              $(".register #txtMobileNumber1").focus(),
              $(".register #mobilenumber-error1").text(
                "Please enter your mobile number"
              ),
              $(this).removeAttr("disabled"),
              $(".register #mobilenumber-error1").show(),
              !1
            );
          if (10 != $(".register #txtMobileNumber1").val().length)
            return (
              $(".register #txtMobileNumber1").focus(),
              $(".register #mobilenumber-error1").text(
                "Please enter correct mobile number"
              ),
              $(this).removeAttr("disabled"),
              $(".register #mobilenumber-error1").show(),
              !1
            );
          var r = /^[0]?[6789]\d{9}$/;
          if (!r.test($(".register #txtMobileNumber1").val()))
            return (
              $(".register #txtMobileNumber1").focus(),
              $(".register #mobilenumber-error1").text(
                "Please enter correct mobile number"
              ),
              $(this).removeAttr("disabled"),
              $(".register #mobilenumber-error1").show(),
              !1
            );
          if (
            ($(".register #mobilenumber-error1").text(""),
            "" == $(".register #txtEmail1").val())
          )
            return (
              $(".register #txtEmail1").focus(),
              $(".register #email-error1").text("Required"),
              $(this).removeAttr("disabled"),
              $(".register #email-error1").show(),
              !1
            );
          if ("" != $(".register #txtEmail1").val()) {
            if (
              !$(".register #txtEmail1")
                .val()
                .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
            )
              return (
                $(".register #txtEmail1").focus(),
                $(".register #email-error1").text(
                  "Please enter a valid email address"
                ),
                $(this).removeAttr("disabled"),
                $(".register #email-error1").show(),
                !1
              );
            $("#email-error1").text("");
          }
          if ("" == $(".register #ddlstate1").val())
            return (
              $(".register #ddlstate1").focus(),
              $(".register #state-error1").text("Please select State"),
              $(this).removeAttr("disabled"),
              $(".register #state-error1").show(),
              !1
            );
          if (
            ($(".register #state-error1").text(""), "" == $("#ddlcity1").val())
          )
            return (
              $(".register #ddlcity1").focus(),
              $(".register #city-error1").text("Please select City"),
              $(this).removeAttr("disabled"),
              $(".register #city-error1").show(),
              !1
            );
          if (
            ($(".register #city-error1").text(""),
            !$(".register #flexCheckDefault1").prop("checked"))
          )
            return (
              $(".register #flexCheckDefault1").focus(),
              $(".register #agree_terms-error").text(
                "Please agree to terms and conditions"
              ),
              $(this).removeAttr("disabled"),
              $(".register #agree_terms-error").show(),
              !1
            );
          $(".register #agree_terms-error").text("");
          var i = "",
            a = {};
          (a.fullName = $(".register #txtFullName1").val()),
            (a.email = $(".register #txtEmail1").val()),
            (a.mobile = $(".register #txtMobileNumber1").val()),
            (a.state = $(".register #ddlstate1").val()),
            (a.city = $(".register #ddlcity1").val()),
            (a.lastName = $(".register #txtLastlName1").val()),
            (a.startTime = ""),
            (a.endTime = ""),
            (i = !0 == $(".register #flexCheckDefault1").prop("checked")),
            !0 == $(".register #chkWhatsApp").prop("checked")
              ? ((a.isWhatsAppSubscribe = 1), (a.isWhatsAppConsent = !0))
              : ((a.isWhatsAppSubscribe = 0), (a.isWhatsAppConsent = !1)),
            (a.utmSource = e("utm_source")),
            (a.utmMedium = e("utm_medium")),
            (a.utmKeyword = e("utm_keyword")),
            (a.utmCampaign = e("utm_campaign")),
            (a.utmContent = e("utm_content")),
            (a.utmTerm = e("utm_term")),
            (a.utmAdGroup = e("utm_adgroup")),
            (a.urlReferrer = Cookies.get("url_r")),
            (a.fbclid = Cookies.get("fbclid")),
            (a.gclid = Cookies.get("gclid")),
            (a.dclid = Cookies.get("dclid")),
            console.log(a),
            $('input[name="__RequestVerificationToken"]').val();
          var l = "General Enquiry";
          "Buying" == $(".register #interested").val() &&
            (l = "Purchase Interest");
          let c = new URLSearchParams(window.location.search);
          var u = c.get("utm_source");
          (void 0 == u || "" == u || null == u) &&
            (void 0 == (u = t("url_r")) || "" == u || null == u) &&
            (u = "");
          var d = "";
          (void 0 == (d = c.get("utm_medium")) || "" == d || null == d) &&
            (d = "");
          var m = "";
          (void 0 == (m = c.get("utm_campaign")) || "" == m || null == m) &&
            (m = "");
          var p = "";
          (void 0 == (p = c.get("utm_keyword")) || "" == p || null == p) &&
            (p = "");
          var f = "";
          (void 0 == (f = c.get("utm_content")) || "" == f || null == f) &&
            (f = "");
          var h = "";
          (void 0 == (h = c.get("utm_adgroup")) || "" == h || null == h) &&
            (h = "");
          var v = "";
          (void 0 == (v = c.get("utm_term")) || "" == v || null == v) &&
            (v = "");
          var g = "";
          (void 0 == (g = t("url_r")) || "" == g || null == g) && (g = "");
          var y = "";
          (void 0 == (y = t("fbclid")) || "" == y || null == y) && (y = "");
          var b = "";
          (void 0 == (b = t("gclid")) || "" == b || null == b) && (b = "");
          var _,
            x = "";
          (void 0 == (x = t("dclid")) || "" == x || null == x) && (x = ""),
            $(".register #flexCheckDefault1").is(":checked") && (i = !0),
            n(
              "POST",
              "/on/demandware.store/Sites-mea-Site/default/Leads-Enquiry",
              JSON.stringify({
                fullName: $(".register #txtFullName1").val().trim(),
                email: $(".register #txtEmail1").val(),
                mobile: $(".register #txtMobileNumber1").val(),
                state: $(".register #ddlstate1").val(),
                city: $(".register #ddlcity1").val(),
                leadType: l,
                modelCode: "X400",
                isExchangeChecked: $(".register #chkExchange").is(":checked"),
                isWhatsAppConsent: i,
                isTncChecked: $(".register #flexCheckDefault1").is(":checked"),
                utmSource: u,
                utmMedium: d,
                utmKeyword: p,
                utmCampaign: m,
                utmContent: f,
                utmTerm: v,
                utmAdGroup: h,
                urlReferrer: g,
                fbclid: y,
                gclid: b,
                dclid: x,
              }),
              o,
              !0,
              s
            );
        }),
        $("#btnTESTDRIVE").click(function () {
          if (
            ($(".test-drive-form .error").hide(),
            $(this).attr("disabled", "disabled"),
            "" == $(".test-drive-form #txtFullName1").val())
          )
            return (
              $(".test-drive-form #txtFullName1").focus(),
              $(".test-drive-form #fullname-error1").text(
                "Please enter your full name"
              ),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #fullname-error1").show(),
              !1
            );
          if ($(".test-drive-form #txtFullName1").val().length > 40)
            return (
              $(".test-drive-form #txtFullName1").focus(),
              $(".test-drive-form #fullname-error1").text(
                "Please limit your name to 40 characters"
              ),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #fullname-error1").show(),
              !1
            );
          var r = /^[a-zA-Z](?!.*\.{2})[a-zA-Z .'-]*$/;
          if (!r.test($(".test-drive-form #txtFullName1").val()))
            return (
              $(".test-drive-form #txtFullName1").focus(),
              $(".test-drive-form #fullname-error1").text(
                "Only include letters, spaces or full stops"
              ),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #fullname-error1").show(),
              !1
            );
          if (
            ($(".test-drive-form #fullname-error1").text(""),
            "" == $(".test-drive-form #txtMobileNumber1").val())
          )
            return (
              $(".test-drive-form #txtMobileNumber1").focus(),
              $(".test-drive-form #mobilenumber-error1").text(
                "Please enter your mobile number"
              ),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #mobilenumber-error1").show(),
              !1
            );
          if (10 != $(".test-drive-form #txtMobileNumber1").val().length)
            return (
              $(".test-drive-form #txtMobileNumber1").focus(),
              $(".test-drive-form #mobilenumber-error1").text(
                "Please enter correct mobile number"
              ),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #mobilenumber-error1").show(),
              !1
            );
          var r = /^[0]?[6789]\d{9}$/;
          if (!r.test($(".test-drive-form #txtMobileNumber1").val()))
            return (
              $(".test-drive-form #txtMobileNumber1").focus(),
              $(".test-drive-form #mobilenumber-error1").text(
                "Please enter correct mobile number"
              ),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #mobilenumber-error1").show(),
              !1
            );
          if (
            ($(".test-drive-form #mobilenumber-error1").text(""),
            "" == $(".test-drive-form #txtEmail1").val())
          )
            return (
              $(".test-drive-form #txtEmail1").focus(),
              $(".test-drive-form #email-error1").text("Required"),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #email-error1").show(),
              !1
            );
          if ("" != $(".test-drive-form #txtEmail1").val()) {
            if (
              !$(".test-drive-form #txtEmail1")
                .val()
                .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
            )
              return (
                $(".test-drive-form #txtEmail1").focus(),
                $(".test-drive-form #email-error1").text(
                  "Please enter a valid email address"
                ),
                $(this).removeAttr("disabled"),
                $(".test-drive-form #email-error1").show(),
                !1
              );
            $("#email-error1").text("");
          }
          if ("" == $(".test-drive-form #ddlstate1-t").val())
            return (
              $(".test-drive-form #ddlstate1-t").focus(),
              $(".test-drive-form #state-error1").text("Please select State"),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #state-error1").show(),
              !1
            );
          if (
            ($(".test-drive-form #state-error1").text(""),
            "" == $("#ddlcity1-t").val())
          )
            return (
              $(".test-drive-form #ddlcity1-t").focus(),
              $(".test-drive-form #city-error1").text("Please select City"),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #city-error1").show(),
              !1
            );
          if (
            ($(".test-drive-form #city-error1").text(""),
            !$(".test-drive-form #flexCheckDefault1").prop("checked"))
          )
            return (
              $(".test-drive-form #flexCheckDefault1").focus(),
              $(".test-drive-form #agree_terms-error").text(
                "Please agree to terms and conditions"
              ),
              $(this).removeAttr("disabled"),
              $(".test-drive-form #agree_terms-error").show(),
              !1
            );
          $(".test-drive-form #agree_terms-error").text("");
          var i = "",
            a = {};
          (a.fullName = $(".test-drive-form #txtFullName1").val()),
            (a.email = $(".test-drive-form #txtEmail1").val()),
            (a.mobile = $(".test-drive-form #txtMobileNumber1").val()),
            (a.state = $(".test-drive-form #ddlstate1-t").val()),
            (a.city = $(".test-drive-form #ddlcity1-t").val()),
            (a.lastName = $(".test-drive-form #txtLastlName1").val()),
            (a.startTime = ""),
            (a.endTime = ""),
            (i =
              !0 == $(".test-drive-form #flexCheckDefault1").prop("checked")),
            !0 == $(".test-drive-form #chkWhatsApp").prop("checked")
              ? ((a.isWhatsAppSubscribe = 1), (a.isWhatsAppConsent = !0))
              : ((a.isWhatsAppSubscribe = 0), (a.isWhatsAppConsent = !1)),
            (a.utmSource = e("utm_source")),
            (a.utmMedium = e("utm_medium")),
            (a.utmKeyword = e("utm_keyword")),
            (a.utmCampaign = e("utm_campaign")),
            (a.utmContent = e("utm_content")),
            (a.utmTerm = e("utm_term")),
            (a.utmAdGroup = e("utm_adgroup")),
            (a.urlReferrer = Cookies.get("url_r")),
            (a.fbclid = Cookies.get("fbclid")),
            (a.gclid = Cookies.get("gclid")),
            (a.dclid = Cookies.get("dclid")),
            console.log(a),
            $('input[name="__RequestVerificationToken"]').val();
          var l = "Stay Informed";
          "Buying" == $(".test-drive-form #interested").val() &&
            (l = "Purchase Interest"),
            $(".test-drive-form.TestDrive").length &&
              $(".test-drive-form.TestDrive:visible") &&
              (l = "Test Drive Raw Lead");
          let c = new URLSearchParams(window.location.search);
          var u = c.get("utm_source");
          (void 0 == u || "" == u || null == u) &&
            (void 0 == (u = t("url_r")) || "" == u || null == u) &&
            (u = "");
          var d = "";
          (void 0 == (d = c.get("utm_medium")) || "" == d || null == d) &&
            (d = "");
          var m = "";
          (void 0 == (m = c.get("utm_campaign")) || "" == m || null == m) &&
            (m = "");
          var p = "";
          (void 0 == (p = c.get("utm_keyword")) || "" == p || null == p) &&
            (p = "");
          var f = "";
          (void 0 == (f = c.get("utm_content")) || "" == f || null == f) &&
            (f = "");
          var h = "";
          (void 0 == (h = c.get("utm_adgroup")) || "" == h || null == h) &&
            (h = "");
          var v = "";
          (void 0 == (v = c.get("utm_term")) || "" == v || null == v) &&
            (v = "");
          var g = "";
          (void 0 == (g = t("url_r")) || "" == g || null == g) && (g = "");
          var y = "";
          (void 0 == (y = t("fbclid")) || "" == y || null == y) && (y = "");
          var b = "";
          (void 0 == (b = t("gclid")) || "" == b || null == b) && (b = "");
          var _ = "";
          (void 0 == (_ = t("dclid")) || "" == _ || null == _) && (_ = "");
          var x,
            w = "";
          $(".test-drive-form #flexCheckDefault1").is(":checked") && (w = !0),
            n(
              "POST",
              "/on/demandware.store/Sites-amc-Site/default/Leads-Enquiry",
              JSON.stringify({
                fullName: $(".test-drive-form #txtFullName1").val().trim(),
                email: $(".test-drive-form #txtEmail1").val(),
                mobile: $(".test-drive-form #txtMobileNumber1").val(),
                state: $(".test-drive-form #ddlstate1-t").val(),
                city: $(".test-drive-form #ddlcity1-t").val(),
                leadType: "Test Drive Raw Lead",
                modelCode: "X400",
                isExchangeChecked: $(".test-drive-form #chkExchange").is(
                  ":checked"
                ),
                isWhatsAppConsent: w,
                isTncChecked: $(".test-drive-form #flexCheckDefault1").is(
                  ":checked"
                ),
                utmSource: u,
                utmMedium: d,
                utmKeyword: p,
                utmCampaign: m,
                utmContent: f,
                utmTerm: v,
                utmAdGroup: h,
                urlReferrer: g,
                fbclid: y,
                gclid: b,
                dclid: _,
              }),
              o,
              !0,
              s
            );
        });
    }),
    er(),
    (document.getElementById("ddlstate1").onchange = function () {
      er(document.getElementById("ddlstate1").value, "ddlcity1");
    }),
    (document.getElementById("ddlstate1-t").onchange = function () {
      er(document.getElementById("ddlstate1-t").value, "ddlcity1-t");
    }),
    document.getElementById("countdown") &&
      eo("2023-01-15T09:00:00.000+05:30", "countdown"),
    document.querySelectorAll("section.variants .signpost").forEach((e) => {
      let t = e.querySelector(".imgWrapper");
      e.querySelectorAll("span.swatch").forEach((e) => {
        e.addEventListener("click", function () {
          console.log("clicked");
          let r = e.dataset.colour;
          t.querySelector(".is-active").classList.remove("is-active"),
            t.querySelector("." + r).classList.add("is-active");
        });
      });
      var r = e.querySelectorAll("img");
      window.onload = function () {
        setTimeout(function () {
          for (var e = 0; e < r.length; e++)
            r[e].getAttribute("loading") && r[e].removeAttribute("loading");
        }, 1e3);
      };
    });
  var es = c(m());
  function en(e, t, r, i, o, s) {
    if (o - i <= r) return;
    let n = (i + o) >> 1;
    ea(e, t, n, i, o, s % 2),
      en(e, t, r, i, n - 1, s + 1),
      en(e, t, r, n + 1, o, s + 1);
  }
  function ea(e, t, r, i, o, s) {
    for (; o > i; ) {
      if (o - i > 600) {
        let n = o - i + 1,
          a = r - i + 1,
          l = Math.log(n),
          c = 0.5 * Math.exp((2 * l) / 3),
          u = 0.5 * Math.sqrt((l * c * (n - c)) / n) * (a - n / 2 < 0 ? -1 : 1),
          d = Math.max(i, Math.floor(r - (a * c) / n + u)),
          m = Math.min(o, Math.floor(r + ((n - a) * c) / n + u));
        ea(e, t, r, d, m, s);
      }
      let p = t[2 * r + s],
        f = i,
        h = o;
      for (el(e, t, i, r), t[2 * o + s] > p && el(e, t, i, o); f < h; ) {
        for (el(e, t, f, h), f++, h--; t[2 * f + s] < p; ) f++;
        for (; t[2 * h + s] > p; ) h--;
      }
      t[2 * i + s] === p ? el(e, t, i, h) : el(e, t, ++h, o),
        h <= r && (i = h + 1),
        r <= h && (o = h - 1);
    }
  }
  function el(e, t, r, i) {
    ec(e, r, i), ec(t, 2 * r, 2 * i), ec(t, 2 * r + 1, 2 * i + 1);
  }
  function ec(e, t, r) {
    let i = e[t];
    (e[t] = e[r]), (e[r] = i);
  }
  function eu(e, t, r, i, o, s, n) {
    let a = [0, e.length - 1, 0],
      l = [],
      c,
      u;
    for (; a.length; ) {
      let d = a.pop(),
        m = a.pop(),
        p = a.pop();
      if (m - p <= n) {
        for (let f = p; f <= m; f++)
          (c = t[2 * f]),
            (u = t[2 * f + 1]),
            c >= r && c <= o && u >= i && u <= s && l.push(e[f]);
        continue;
      }
      let h = Math.floor((p + m) / 2);
      (c = t[2 * h]),
        (u = t[2 * h + 1]),
        c >= r && c <= o && u >= i && u <= s && l.push(e[h]);
      let v = (d + 1) % 2;
      (0 === d ? r <= c : i <= u) && (a.push(p), a.push(h - 1), a.push(v)),
        (0 === d ? o >= c : s >= u) && (a.push(h + 1), a.push(m), a.push(v));
    }
    return l;
  }
  function ed(e, t, r, i, o, s) {
    let n = [0, e.length - 1, 0],
      a = [],
      l = o * o;
    for (; n.length; ) {
      let c = n.pop(),
        u = n.pop(),
        d = n.pop();
      if (u - d <= s) {
        for (let m = d; m <= u; m++)
          em(t[2 * m], t[2 * m + 1], r, i) <= l && a.push(e[m]);
        continue;
      }
      let p = Math.floor((d + u) / 2),
        f = t[2 * p],
        h = t[2 * p + 1];
      em(f, h, r, i) <= l && a.push(e[p]);
      let v = (c + 1) % 2;
      (0 === c ? r - o <= f : i - o <= h) &&
        (n.push(d), n.push(p - 1), n.push(v)),
        (0 === c ? r + o >= f : i + o >= h) &&
          (n.push(p + 1), n.push(u), n.push(v));
    }
    return a;
  }
  function em(e, t, r, i) {
    let o = e - r,
      s = t - i;
    return o * o + s * s;
  }
  var ep,
    ef,
    eh = (e) => e[0],
    ev = (e) => e[1],
    eg = class {
      constructor(e, t = eh, r = ev, i = 64, o = Float64Array) {
        (this.nodeSize = i), (this.points = e);
        let s = e.length < 65536 ? Uint16Array : Uint32Array,
          n = (this.ids = new s(e.length)),
          a = (this.coords = new o(2 * e.length));
        for (let l = 0; l < e.length; l++)
          (n[l] = l), (a[2 * l] = t(e[l])), (a[2 * l + 1] = r(e[l]));
        en(n, a, i, 0, n.length - 1, 0);
      }
      range(e, t, r, i) {
        return eu(this.ids, this.coords, e, t, r, i, this.nodeSize);
      }
      within(e, t, r) {
        return ed(this.ids, this.coords, e, t, r, this.nodeSize);
      }
    },
    e$ = {
      minZoom: 0,
      maxZoom: 16,
      minPoints: 2,
      radius: 40,
      extent: 512,
      nodeSize: 64,
      log: !1,
      generateId: !1,
      reduce: null,
      map: (e) => e,
    },
    ey =
      Math.fround || ((ef = new Float32Array(1)), (e) => ((ef[0] = +e), ef[0])),
    eb = class {
      constructor(e) {
        (this.options = eE(Object.create(e$), e)),
          (this.trees = Array(this.options.maxZoom + 1));
      }
      load(e) {
        let { log: t, minZoom: r, maxZoom: i, nodeSize: o } = this.options;
        t && console.time("total time");
        let s = `prepare ${e.length} points`;
        t && console.time(s), (this.points = e);
        let n = [];
        for (let a = 0; a < e.length; a++) e[a].geometry && n.push(ex(e[a], a));
        (this.trees[i + 1] = new eg(n, e0, eC, o, Float32Array)),
          t && console.timeEnd(s);
        for (let l = i; l >= r; l--) {
          let c = +Date.now();
          (n = this._cluster(n, l)),
            (this.trees[l] = new eg(n, e0, eC, o, Float32Array)),
            t &&
              console.log(
                "z%d: %d clusters in %dms",
                l,
                n.length,
                +Date.now() - c
              );
        }
        return t && console.timeEnd("total time"), this;
      }
      getClusters(e, t) {
        let r = ((((e[0] + 180) % 360) + 360) % 360) - 180,
          i = Math.max(-90, Math.min(90, e[1])),
          o = 180 === e[2] ? 180 : ((((e[2] + 180) % 360) + 360) % 360) - 180,
          s = Math.max(-90, Math.min(90, e[3]));
        if (e[2] - e[0] >= 360) (r = -180), (o = 180);
        else if (r > o) {
          let n = this.getClusters([r, i, 180, s], t),
            a = this.getClusters([-180, i, o, s], t);
          return n.concat(a);
        }
        let l = this.trees[this._limitZoom(t)],
          c = l.range(eT(r), eS(s), eT(o), eS(i)),
          u = [];
        for (let d of c) {
          let m = l.points[d];
          u.push(m.numPoints ? ew(m) : this.points[m.index]);
        }
        return u;
      }
      getChildren(e) {
        let t = this._getOriginId(e),
          r = this._getOriginZoom(e),
          i = "No cluster with the specified id.",
          o = this.trees[r];
        if (!o) throw Error(i);
        let s = o.points[t];
        if (!s) throw Error(i);
        let n =
            this.options.radius / (this.options.extent * Math.pow(2, r - 1)),
          a = o.within(s.x, s.y, n),
          l = [];
        for (let c of a) {
          let u = o.points[c];
          u.parentId === e &&
            l.push(u.numPoints ? ew(u) : this.points[u.index]);
        }
        if (0 === l.length) throw Error(i);
        return l;
      }
      getLeaves(e, t, r) {
        (t = t || 10), (r = r || 0);
        let i = [];
        return this._appendLeaves(i, e, t, r, 0), i;
      }
      getTile(e, t, r) {
        let i = this.trees[this._limitZoom(e)],
          o = Math.pow(2, e),
          { extent: s, radius: n } = this.options,
          a = n / s,
          l = (r - a) / o,
          c = (r + 1 + a) / o,
          u = { features: [] };
        return (
          this._addTileFeatures(
            i.range((t - a) / o, l, (t + 1 + a) / o, c),
            i.points,
            t,
            r,
            o,
            u
          ),
          0 === t &&
            this._addTileFeatures(
              i.range(1 - a / o, l, 1, c),
              i.points,
              o,
              r,
              o,
              u
            ),
          t === o - 1 &&
            this._addTileFeatures(
              i.range(0, l, a / o, c),
              i.points,
              -1,
              r,
              o,
              u
            ),
          u.features.length ? u : null
        );
      }
      getClusterExpansionZoom(e) {
        let t = this._getOriginZoom(e) - 1;
        for (; t <= this.options.maxZoom; ) {
          let r = this.getChildren(e);
          if ((t++, 1 !== r.length)) break;
          e = r[0].properties.cluster_id;
        }
        return t;
      }
      _appendLeaves(e, t, r, i, o) {
        let s = this.getChildren(t);
        for (let n of s) {
          let a = n.properties;
          if (
            (a && a.cluster
              ? o + a.point_count <= i
                ? (o += a.point_count)
                : (o = this._appendLeaves(e, a.cluster_id, r, i, o))
              : o < i
              ? o++
              : e.push(n),
            e.length === r)
          )
            break;
        }
        return o;
      }
      _addTileFeatures(e, t, r, i, o, s) {
        for (let n of e) {
          let a = t[n],
            l = a.numPoints,
            c,
            u,
            d;
          if (l) (c = ek(a)), (u = a.x), (d = a.y);
          else {
            let m = this.points[a.index];
            (c = m.properties),
              (u = eT(m.geometry.coordinates[0])),
              (d = eS(m.geometry.coordinates[1]));
          }
          let p = {
              type: 1,
              geometry: [
                [
                  Math.round(this.options.extent * (u * o - r)),
                  Math.round(this.options.extent * (d * o - i)),
                ],
              ],
              tags: c,
            },
            f;
          l
            ? (f = a.id)
            : this.options.generateId
            ? (f = a.index)
            : this.points[a.index].id && (f = this.points[a.index].id),
            void 0 !== f && (p.id = f),
            s.features.push(p);
        }
      }
      _limitZoom(e) {
        return Math.max(
          this.options.minZoom,
          Math.min(Math.floor(+e), this.options.maxZoom + 1)
        );
      }
      _cluster(e, t) {
        let r = [],
          { radius: i, extent: o, reduce: s, minPoints: n } = this.options,
          a = i / (o * Math.pow(2, t));
        for (let l = 0; l < e.length; l++) {
          let c = e[l];
          if (c.zoom <= t) continue;
          c.zoom = t;
          let u = this.trees[t + 1],
            d = u.within(c.x, c.y, a),
            m = c.numPoints || 1,
            p = m;
          for (let f of d) {
            let h = u.points[f];
            h.zoom > t && (p += h.numPoints || 1);
          }
          if (p > m && p >= n) {
            let v = c.x * m,
              g = c.y * m,
              y = s && m > 1 ? this._map(c, !0) : null,
              b = (l << 5) + (t + 1) + this.points.length;
            for (let _ of d) {
              let x = u.points[_];
              if (x.zoom <= t) continue;
              x.zoom = t;
              let w = x.numPoints || 1;
              (v += x.x * w),
                (g += x.y * w),
                (x.parentId = b),
                s && (y || (y = this._map(c, !0)), s(y, this._map(x)));
            }
            (c.parentId = b), r.push(e_(v / p, g / p, b, p, y));
          } else if ((r.push(c), p > 1))
            for (let k of d) {
              let T = u.points[k];
              T.zoom <= t || ((T.zoom = t), r.push(T));
            }
        }
        return r;
      }
      _getOriginId(e) {
        return (e - this.points.length) >> 5;
      }
      _getOriginZoom(e) {
        return (e - this.points.length) % 32;
      }
      _map(e, t) {
        if (e.numPoints) return t ? eE({}, e.properties) : e.properties;
        let r = this.points[e.index].properties,
          i = this.options.map(r);
        return t && i === r ? eE({}, i) : i;
      }
    };
  function e_(e, t, r, i, o) {
    return {
      x: ey(e),
      y: ey(t),
      zoom: 1 / 0,
      id: r,
      parentId: -1,
      numPoints: i,
      properties: o,
    };
  }
  function ex(e, t) {
    let [r, i] = e.geometry.coordinates;
    return { x: ey(eT(r)), y: ey(eS(i)), zoom: 1 / 0, index: t, parentId: -1 };
  }
  function ew(e) {
    return {
      type: "Feature",
      id: e.id,
      properties: ek(e),
      geometry: { type: "Point", coordinates: [eL(e.x), eA(e.y)] },
    };
  }
  function ek(e) {
    let t = e.numPoints,
      r =
        t >= 1e4
          ? `${Math.round(t / 1e3)}k`
          : t >= 1e3
          ? `${Math.round(t / 100) / 10}k`
          : t;
    return eE(eE({}, e.properties), {
      cluster: !0,
      cluster_id: e.id,
      point_count: t,
      point_count_abbreviated: r,
    });
  }
  function eT(e) {
    return e / 360 + 0.5;
  }
  function eS(e) {
    let t = Math.sin((e * Math.PI) / 180),
      r = 0.5 - (0.25 * Math.log((1 + t) / (1 - t))) / Math.PI;
    return r < 0 ? 0 : r > 1 ? 1 : r;
  }
  function eL(e) {
    return (e - 0.5) * 360;
  }
  function eA(e) {
    return (
      (360 * Math.atan(Math.exp(((180 - 360 * e) * Math.PI) / 180))) / Math.PI -
      90
    );
  }
  function eE(e, t) {
    for (let r in t) e[r] = t[r];
    return e;
  }
  function e0(e) {
    return e.x;
  }
  function eC(e) {
    return e.y;
  }
  function eq(e, t) {
    var r = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        0 > t.indexOf(i) &&
        (r[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
      for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
        0 > t.indexOf(i[o]) &&
          Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
          (r[i[o]] = e[i[o]]);
    return r;
  }
  var e8 = class {
      constructor({ markers: e, position: t }) {
        (this.markers = e),
          t &&
            (t instanceof google.maps.LatLng
              ? (this._position = t)
              : (this._position = new google.maps.LatLng(t)));
      }
      get bounds() {
        if (!(0 === this.markers.length && !this._position))
          return this.markers.reduce(
            (e, t) => e.extend(t.getPosition()),
            new google.maps.LatLngBounds(this._position, this._position)
          );
      }
      get position() {
        return this._position || this.bounds.getCenter();
      }
      get count() {
        return this.markers.filter((e) => e.getVisible()).length;
      }
      push(e) {
        this.markers.push(e);
      }
      delete() {
        this.marker && (this.marker.setMap(null), delete this.marker),
          (this.markers.length = 0);
      }
    },
    eM = (e, t, r, i) => {
      let o = eN(e.getBounds(), t, i);
      return r.filter((e) => o.contains(e.getPosition()));
    },
    eN = (e, t, r) => {
      let { northEast: i, southWest: o } = ez(e, t),
        s = e3({ northEast: i, southWest: o }, r);
      return eO(s, t);
    },
    eP = (e, t) => {
      let r = ((t.lat - e.lat) * Math.PI) / 180,
        i = ((t.lng - e.lng) * Math.PI) / 180,
        o =
          Math.sin(r / 2) * Math.sin(r / 2) +
          Math.cos((e.lat * Math.PI) / 180) *
            Math.cos((t.lat * Math.PI) / 180) *
            Math.sin(i / 2) *
            Math.sin(i / 2);
      return 6371 * (2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o)));
    },
    ez = (e, t) => ({
      northEast: t.fromLatLngToDivPixel(e.getNorthEast()),
      southWest: t.fromLatLngToDivPixel(e.getSouthWest()),
    }),
    e3 = ({ northEast: e, southWest: t }, r) => (
      (e.x += r),
      (e.y -= r),
      (t.x -= r),
      (t.y += r),
      { northEast: e, southWest: t }
    ),
    eO = ({ northEast: e, southWest: t }, r) => {
      let i = new google.maps.LatLngBounds();
      return (
        i.extend(r.fromDivPixelToLatLng(e)),
        i.extend(r.fromDivPixelToLatLng(t)),
        i
      );
    },
    eI = class {
      constructor({ maxZoom: e = 16 }) {
        this.maxZoom = e;
      }
      noop({ markers: e }) {
        return e4(e);
      }
    },
    e1 = class extends eI {
      constructor(e) {
        var t,
          { viewportPadding: r = 60 } = e;
        super(eq(e, ["viewportPadding"])),
          (this.viewportPadding = 60),
          (this.viewportPadding = r);
      }
      calculate({ markers: e, map: t, mapCanvasProjection: r }) {
        return t.getZoom() >= this.maxZoom
          ? {
              clusters: this.noop({
                markers: e,
                map: t,
                mapCanvasProjection: r,
              }),
              changed: !1,
            }
          : {
              clusters: this.cluster({
                markers: eM(t, r, e, this.viewportPadding),
                map: t,
                mapCanvasProjection: r,
              }),
            };
      }
    },
    e4 = (e) =>
      e.map((e) => new e8({ position: e.getPosition(), markers: [e] })),
    eR = class extends e1 {
      constructor(e) {
        var t,
          { maxDistance: r = 4e4, gridSize: i = 40 } = e;
        super(eq(e, ["maxDistance", "gridSize"])),
          (this.clusters = []),
          (this.maxDistance = r),
          (this.gridSize = i),
          (this.state = { zoom: null });
      }
      calculate({ markers: e, map: t, mapCanvasProjection: r }) {
        let i = { zoom: t.getZoom() },
          o = !1;
        return (
          (this.state.zoom > this.maxZoom && i.zoom > this.maxZoom) ||
            (o = !(0, es.default)(this.state, i)),
          (this.state = i),
          t.getZoom() >= this.maxZoom
            ? {
                clusters: this.noop({
                  markers: e,
                  map: t,
                  mapCanvasProjection: r,
                }),
                changed: o,
              }
            : {
                clusters: this.cluster({
                  markers: eM(t, r, e, this.viewportPadding),
                  map: t,
                  mapCanvasProjection: r,
                }),
              }
        );
      }
      cluster({ markers: e, map: t, mapCanvasProjection: r }) {
        return (
          (this.clusters = []),
          e.forEach((e) => {
            this.addToClosestCluster(e, t, r);
          }),
          this.clusters
        );
      }
      addToClosestCluster(e, t, r) {
        let i = this.maxDistance,
          o = null;
        for (let s = 0; s < this.clusters.length; s++) {
          let n = this.clusters[s],
            a = eP(n.bounds.getCenter().toJSON(), e.getPosition().toJSON());
          a < i && ((i = a), (o = n));
        }
        if (o && eN(o.bounds, r, this.gridSize).contains(e.getPosition()))
          o.push(e);
        else {
          let l = new e8({ markers: [e] });
          this.clusters.push(l);
        }
      }
    },
    e2 = class extends eI {
      constructor(e) {
        var { maxZoom: t, radius: r = 60 } = e,
          i = eq(e, ["maxZoom", "radius"]);
        super({ maxZoom: t }),
          (this.superCluster = new eb(
            Object.assign({ maxZoom: this.maxZoom, radius: r }, i)
          )),
          (this.state = { zoom: null });
      }
      calculate(e) {
        let t = !1;
        if (!(0, es.default)(e.markers, this.markers)) {
          (t = !0), (this.markers = [...e.markers]);
          let r = this.markers.map((e) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [e.getPosition().lng(), e.getPosition().lat()],
            },
            properties: { marker: e },
          }));
          this.superCluster.load(r);
        }
        let i = { zoom: e.map.getZoom() };
        return (
          t ||
            (this.state.zoom > this.maxZoom && i.zoom > this.maxZoom) ||
            (t = t || !(0, es.default)(this.state, i)),
          (this.state = i),
          t && (this.clusters = this.cluster(e)),
          { clusters: this.clusters, changed: t }
        );
      }
      cluster({ map: e }) {
        return this.superCluster
          .getClusters([-180, -90, 180, 90], Math.round(e.getZoom()))
          .map(this.transformCluster.bind(this));
      }
      transformCluster({
        geometry: {
          coordinates: [e, t],
        },
        properties: r,
      }) {
        if (r.cluster)
          return new e8({
            markers: this.superCluster
              .getLeaves(r.cluster_id, 1 / 0)
              .map((e) => e.properties.marker),
            position: new google.maps.LatLng({ lat: t, lng: e }),
          });
        {
          let i = r.marker;
          return new e8({ markers: [i], position: i.getPosition() });
        }
      }
    },
    eD = class {
      constructor(e, t) {
        this.markers = { sum: e.length };
        let r = t.map((e) => e.count),
          i = r.reduce((e, t) => e + t, 0);
        this.clusters = {
          count: t.length,
          markers: {
            mean: i / t.length,
            sum: i,
            min: Math.min(...r),
            max: Math.max(...r),
          },
        };
      }
    },
    e6 = class {
      render({ count: e, position: t }, r) {
        let i =
            e > Math.max(10, r.clusters.markers.mean) ? "#ff0000" : "#0000ff",
          o = window.btoa(`
  <svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);
        return new google.maps.Marker({
          position: t,
          icon: {
            url: `data:image/svg+xml;base64,${o}`,
            scaledSize: new google.maps.Size(45, 45),
          },
          label: {
            text: String(e),
            color: "rgba(255,255,255,0.9)",
            fontSize: "12px",
          },
          title: `Cluster of ${e} markers`,
          zIndex: Number(google.maps.Marker.MAX_ZINDEX) + e,
        });
      }
    };
  function eH(e, t) {
    for (let r in t.prototype) e.prototype[r] = t.prototype[r];
  }
  var eB,
    e5 = class {
      constructor() {
        eH(e5, google.maps.OverlayView);
      }
    };
  !(function (e) {
    (e.CLUSTERING_BEGIN = "clusteringbegin"),
      (e.CLUSTERING_END = "clusteringend"),
      (e.CLUSTER_CLICK = "click");
  })(eB || (eB = {}));
  var e7 = (e, t, r) => {
      r.fitBounds(t.bounds);
    },
    ej = class extends e5 {
      constructor({
        map: e,
        markers: t = [],
        algorithm: r = new e2({}),
        renderer: i = new e6(),
        onClusterClick: o = e7,
      }) {
        super(),
          (this.markers = [...t]),
          (this.clusters = []),
          (this.algorithm = r),
          (this.renderer = i),
          (this.onClusterClick = o),
          e && this.setMap(e);
      }
      addMarker(e, t) {
        this.markers.includes(e) || (this.markers.push(e), t || this.render());
      }
      addMarkers(e, t) {
        e.forEach((e) => {
          this.addMarker(e, !0);
        }),
          t || this.render();
      }
      removeMarker(e, t) {
        let r = this.markers.indexOf(e);
        return (
          -1 !== r &&
          (e.setMap(null), this.markers.splice(r, 1), t || this.render(), !0)
        );
      }
      removeMarkers(e, t) {
        let r = !1;
        return (
          e.forEach((e) => {
            r = this.removeMarker(e, !0) || r;
          }),
          r && !t && this.render(),
          r
        );
      }
      clearMarkers(e) {
        (this.markers.length = 0), e || this.render();
      }
      render() {
        let e = this.getMap();
        if (e instanceof google.maps.Map && this.getProjection()) {
          google.maps.event.trigger(this, eB.CLUSTERING_BEGIN, this);
          let { clusters: t, changed: r } = this.algorithm.calculate({
            markers: this.markers,
            map: e,
            mapCanvasProjection: this.getProjection(),
          });
          (r || null == r) &&
            (this.reset(), (this.clusters = t), this.renderClusters()),
            google.maps.event.trigger(this, eB.CLUSTERING_END, this);
        }
      }
      onAdd() {
        (this.idleListener = this.getMap().addListener(
          "idle",
          this.render.bind(this)
        )),
          this.render();
      }
      onRemove() {
        google.maps.event.removeListener(this.idleListener), this.reset();
      }
      reset() {
        this.markers.forEach((e) => e.setMap(null)),
          this.clusters.forEach((e) => e.delete()),
          (this.clusters = []);
      }
      renderClusters() {
        let e = new eD(this.markers, this.clusters),
          t = this.getMap();
        this.clusters.forEach((r) => {
          1 === r.markers.length
            ? (r.marker = r.markers[0])
            : ((r.marker = this.renderer.render(r, e)),
              this.onClusterClick &&
                r.marker.addListener("click", (e) => {
                  google.maps.event.trigger(this, eB.CLUSTER_CLICK, r),
                    this.onClusterClick(e, r, t);
                })),
            r.marker.setMap(t);
        });
      }
    };
 
  function tg() {
    var e;
    ty(
      (e =
        jQuery(".keyhigh-bullet .kb-cta.is-active").next(".kb-cta").length > 0
          ? jQuery(".keyhigh-bullet .kb-cta.is-active").next(".kb-cta")
          : jQuery(".keyhigh-bullet .kb-cta:first-child")),
      !0
    );
  }
  function t$(e) {
    jQuery(".kb-cta").removeClass("is-active"),
      e.addClass("is-active"),
      jQuery(".keyhigh-slide:visible").hide(),
      jQuery("." + e.data("ref")).fadeIn(200);
  }
  function ty(e, t) {
    clearTimeout(tc),
      (tf = th[e.data("interval")]),
      (tp.currentTime = Number(tf[0])),
      (tu = Number(tf[1]) - Number(tf[0]));
    var r = tp.play();
    void 0 !== r &&
      r.then(
        function (t) {
          t$(e),
            (tc = setTimeout(function () {
              tp.pause();
            }, 1e3 * tu));
        },
        function (e) {
          console.log("Error ", e);
        }
      );
  }
  jQuery(document).ready(function () {
    jQuery("section.video-slider").length > 0 &&
      ((tp = jQuery(".keyhigh-video > .video")[0]),
      jQuery(".keyhigh-video > .video").length > 0 &&
        (tv(),
        tg(),
        (tl = setInterval(function () {
          tg();
        }, tm)),
        (tp.currentTime = Number(th[0][0])),
        jQuery(document).on("click", ".kb-cta", function () {
          jQuery(this).hasClass("is-active") ||
            (ty(jQuery(this), !1), clearInterval(tl));
        })));
  }),
    f.default.init(),
    window.addEventListener("load", function () {
      this.document.querySelector("html").classList.add("is-loaded");
    });
})(); /*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

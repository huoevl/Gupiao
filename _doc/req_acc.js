(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
    0: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        }
        )),
        n.d(t, "b", (function() {
            return h
        }
        ));
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5);
        function o(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function c(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? o(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var l = "https://pc2.jiucaigongshe.com"
          , d = "";
        d = "https://app.jiuyangongshe.com/jystock-app",
        l = "https://www.jiuyangongshe.com";
        t.c = {
            url: l,
            baseURL: d,
            timeout: 15e3,
            headers: c(c({}, {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                platform: 3
            }), {}, {
                "Accept-Language": "en-US, zh; q=0.9, en; q=0.8",
                "X-Requested-With": "XMLHttpRequest"
            })
        };
        var m = {
            "Content-Type": "application/json",
            platform: 3
        }
          , h = d
    },
    1: function(e, t, n) {
        "use strict";
        var r = n(141)
          , o = n(142)
          , c = (n(318),
        n(10),
        n(23),
        n(42),
        n(315),
        n(56),
        n(167),
        n(98),
        n(31),
        n(354),
        n(208))
          , l = n.n(c)
          , d = (n(391),
        n(94))
          , m = n.n(d)
          , h = n(0)
          , f = (n(29),
        n(209))
          , v = (n(164),
        n(57))
          , _ = n.n(v)
          , y = n(169)
          , w = [];
        l.a.polyfill(),
        m.a.interceptors.request.use((function(e) {
            return Object(f.a)(e)
        }
        ));
        var k = function() {
            function e() {
                Object(r.a)(this, e)
            }
            return Object(o.a)(e, [{
                key: "get",
                value: function(data) {
                    return data.method = "get",
                    this._sendRequest(data)
                }
            }, {
                key: "post",
                value: function(data) {
                    return data.method = "post",
                    this._sendRequest(data)
                }
            }, {
                key: "put",
                value: function(data) {
                    return data.method = "put",
                    this._sendRequest(data)
                }
            }, {
                key: "delete",
                value: function(data) {
                    return data.method = "delete",
                    this._sendRequest(data)
                }
            }, {
                key: "_sendRequest",
                value: function(data) {
                    var e = this
                      , t = Object.assign({}, h.c);
                    t.headers = data.headers ? data.headers : t.headers,
                    t.baseURL = h.b ? h.b : t.baseURL;
                    var time = (new Date).getTime()
                      , n = "Uu0KfOB8iUP69d3c:".concat(time);
                    if (data.params && data.params && data.params.start > 1) {
                        var r = data.url
                          , o = w.findIndex((function(e) {
                            return e.key == r
                        }
                        ));
                        o > -1 && (t.headers["Page-Time"] = w[o].pageTime)
                    }
                    return t.headers.timestamp = time,
                    t.headers.token = _()(n),
                    t.method = data.method,
                    t.url = data.url,
                    t.body = data.params,
                    data.responseType && (t.responseType = data.responseType),
                    m.a.defaults.withCredentials = !0,
                    t.url,
                    m()(t).then((function(t) {
                        return e.onSuccess(t)
                    }
                    )).catch((function(n) {
                        return e.onFailure(n, t)
                    }
                    ))
                }
            }, {
                key: "onSuccess",
                value: function(e) {
                    if ("/api/v1/tool/announcement/search/export" === e.config.url)
                        return Promise.resolve(e);
                    var t = e.data;
                    if (t.data && t.data.sessionToken && y.a.setSession(t.data.sessionToken),
                    t && t.data && 1 === t.data.pageNo) {
                        var n = {
                            key: e.config.url,
                            pageTime: t.serverTime
                        }
                          , r = w.findIndex((function(t) {
                            return t.key == e.config.url
                        }
                        ));
                        r > -1 ? w[r].pageTime = t.serverTime : w.push(n)
                    }
                    return "1" == t.errCode && "/api/v1/user/info" != e.config.url && "/api/v2/user/medal/list" != e.config.url && "/api/v1/article/forward-out" != e.config.url && ($nuxt.$store.commit("setShowLogin", !0),
                    $nuxt.$store.commit("setUserData", null),
                    $nuxt.$cookies.remove("admin")),
                    Promise.resolve(t)
                }
            }, {
                key: "onFailure",
                value: function(e, t) {
                    if (!e.errCode)
                        return console.log(">>>>>>>>>.", e),
                        Promise.reject(e)
                }
            }]),
            e
        }();
        t.a = new k
    },
    1e3: function(e, t, n) {
        e.exports = n.p + "img/[感谢分享].d12c12b.png"
    },
    1001: function(e, t, n) {
        e.exports = n.p + "img/[韭菜].c208b01.png"
    },
    1002: function(e, t, n) {
        e.exports = n.p + "img/[投降].3821178.png"
    },
    1003: function(e, t, n) {
        e.exports = n.p + "img/[吃面].f9addaf.png"
    },
    1004: function(e, t, n) {
        e.exports = n.p + "img/[吐血].086ad85.png"
    },
    1005: function(e, t, n) {
        e.exports = n.p + "img/[加鸡腿].129ffae.png"
    },
    1006: function(e, t, n) {
        e.exports = n.p + "img/[大牛市].786d982.png"
    },
    1007: function(e, t, n) {
        e.exports = n.p + "img/[吃瓜].b4373ae.png"
    },
    1008: function(e, t, n) {
        e.exports = n.p + "img/[恭喜发财].e6eef21.png"
    },
    1009: function(e, t, n) {
        e.exports = n.p + "img/[奉旨割肉].4a0d8f9.png"
    },
    1010: function(e, t, n) {
        e.exports = n.p + "img/[牛市旗手].8781569.png"
    },
    1011: function(e, t, n) {
        e.exports = n.p + "img/[站岗小能手].199ad6d.png"
    },
    1012: function(e, t, n) {
        e.exports = n.p + "img/[梭哈].da3538e.png"
    },
    1013: function(e, t, n) {
        e.exports = n.p + "img/[暴风雨].88057d3.png"
    },
    1014: function(e, t, n) {
        e.exports = n.p + "img/[打赏].8de9f04.png"
    },
    1015: function(e, t, n) {
        e.exports = n.p + "img/[搬砖].65c960c.png"
    },
    1016: function(e, t, n) {
        e.exports = n.p + "img/[踩雷了].3edcb0e.png"
    },
    1017: function(e, t, n) {
        e.exports = n.p + "img/[不讲武德].7664430.png"
    },
    1018: function(e, t, n) {
        e.exports = n.p + "img/[上火].328418e.png"
    },
    1019: function(e, t, n) {
        e.exports = n.p + "img/[删除软件].b9aba7c.png"
    },
    1020: function(e, t, n) {
        e.exports = n.p + "img/[砸盘].725f9fa.png"
    },
    1021: function(e, t, n) {
        e.exports = n.p + "img/[已销户].229d992.png"
    },
    1022: function(e, t, n) {
        e.exports = n.p + "img/[握手].518de7f.png"
    },
    1023: function(e, t, n) {
        e.exports = n.p + "img/[胜利].b4e95e7.png"
    },
    1024: function(e, t, n) {
        e.exports = n.p + "img/[踩].cdda49d.png"
    },
    1025: function(e, t, n) {
        e.exports = n.p + "img/[保佑].9d180aa.png"
    },
    1026: function(e, t, n) {
        e.exports = n.p + "img/[接飞刀].e553917.png"
    },
    1027: function(e, t, n) {
        e.exports = n.p + "img/[剁手].3944ec0.png"
    },
    1028: function(e, t, n) {
        e.exports = n.p + "img/[500万].8705204.png"
    },
    1029: function(e, t, n) {
        e.exports = n.p + "img/[打板].1c4f11f.png"
    },
    1030: function(e, t, n) {
        e.exports = n.p + "img/[亏损].a16e1fe.png"
    },
    1031: function(e, t, n) {
        e.exports = n.p + "img/[一万点].1f44528.png"
    },
    1032: function(e, t, n) {
        e.exports = n.p + "img/close.27b13cf.png"
    },
    1033: function(e, t, n) {
        e.exports = n.p + "img/big.b384de3.png"
    },
    1034: function(e, t, n) {
        e.exports = n.p + "img/small.c7cf545.png"
    },
    1035: function(e, t, n) {
        e.exports = n.p + "img/rotate.f34269b.png"
    },
    1036: function(e, t, n) {
        "use strict";
        n(586)
    },
    1037: function(e, t, n) {
        "use strict";
        n(587)
    },
    169: function(e, t, n) {
        "use strict";
        t.a = {
            session: "",
            setSession: function(e) {
                this.session = e
            },
            removeSession: function() {
                this.session = ""
            }
        }
    },
    170: function(e, t, n) {
        "use strict";
        n(23),
        n(56),
        n(31),
        n(88),
        n(55),
        n(42);
        var r = n(2)
          , o = n.n(r);
        t.a = {
            methods: {
                isToday: function(e) {
                    return this._dateDay(e) < 1
                },
                isOverSixHours: function(e) {
                    var t = (new Date).getTime()
                      , n = new Date("string" == typeof e ? e.replace(/-/g, "/") : e).getTime();
                    return !isNaN(n) && t - n >= 216e5
                },
                timeAgo: function(e) {
                    var t = ((new Date).getTime() - new Date(e.replace(/-/g, "/")).getTime()) / 1e3;
                    return parseInt(t) < 64 ? "刚刚" : this.formatDate(new Date, 10, "yyyy-MM-dd") == this.formatDate(e, 10, "yyyy-MM-dd") ? "今天" + e.substr(11, 5) : this.formatDate(e, 19, "yyyy/MM/dd HH:mm")
                },
                formatDate: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "yyyy-MM-dd HH:mm"
                      , r = ""
                      , c = o()(e)
                      , l = c.get("year");
                    r = n.replace(/yyyy/g, l);
                    var d = c.get("month") + 1;
                    r = r.replace(/MM/g, this.formatNum(d));
                    var m = c.get("date");
                    r = r.replace(/dd/g, this.formatNum(m));
                    var h = c.get("hour");
                    r = r.replace(/HH/g, this.formatNum(h));
                    var f = c.get("minute");
                    r = r.replace(/mm/g, this.formatNum(f));
                    var v = c.get("second");
                    return (r = r.replace(/ss/g, this.formatNum(v))).substr(0, t)
                },
                formatNum: function(e) {
                    return e.toString().replace(/^(\d)$/, "0$1")
                },
                getTime: function(e) {
                    if (e) {
                        var t = parseInt(e)
                          , n = parseInt(t / 60);
                        n = n > 9 ? n : "0".concat(n);
                        var s = t % 60;
                        return s = s > 9 ? s : "0".concat(s),
                        "".concat(n, ":").concat(s)
                    }
                    return "00:00"
                },
                dateMinutes: function(s) {
                    var e;
                    return e = Math.floor(s / 60),
                    s = parseInt(s % 60),
                    (e = 1 == (e += "").length ? "0" + e : e) + ":" + (s = 1 == (s += "").length ? "0" + s : s)
                },
                _date: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , o = new Date(e)
                      , c = o.getFullYear()
                      , l = o.getMonth() + 1;
                    l = l >= 10 ? l : "0".concat(l);
                    var d = o.getDate();
                    d = d >= 10 ? d : "0".concat(d);
                    var m = o.getHours();
                    m = m >= 10 ? m : "0".concat(m);
                    var h = o.getMinutes();
                    h = h >= 10 ? h : "0".concat(h);
                    var s = o.getSeconds();
                    return s = s >= 10 ? s : "0".concat(s),
                    (d = n ? "".concat(c, "-").concat(l, "-").concat(d, " ").concat(m, ":").concat(h, ":").concat(s) : "".concat(c, "年").concat(l, "月").concat(d, "日 ").concat(m, ":").concat(h, ":").concat(s)).substr(r, t)
                },
                _dateMinutes: function(s) {
                    var e;
                    return e = Math.floor(s / 60),
                    s %= 60,
                    (e = 1 == (e += "").length ? "0" + e : e) + ":" + (s = 1 == (s += "").length ? "0" + s : s)
                },
                _dateDay: function(e, t) {
                    var n = new Date(e.replace(/-/g, "/"))
                      , r = (new Date).getTime() - n.getTime();
                    return parseInt(r / 864e5)
                },
                _runTime: function(e) {
                    return Date.parse(new Date(e)) - Date.parse(new Date) > 0
                },
                dateToSeen: function(e) {
                    var t = new String(e).split(" ")
                      , n = t[0].split("-")
                      , r = t[1].split(":")
                      , o = new Date
                      , c = function() {
                        return n[1] + "-" + n[2] + " " + r[0] + ":" + r[1]
                    };
                    if (o.getFullYear() != n[0])
                        return n[0] + "-" + c();
                    if (o.getMonth() + 1 != n[1])
                        return c();
                    if (o.getDate() == n[2])
                        return "今天 " + r[0] + ":" + r[1];
                    switch (o.getDate() - parseInt(n[2])) {
                    case 1:
                        return "昨天 " + r[0] + ":" + r[1];
                    case 2:
                        return "前天 " + r[0] + ":" + r[1];
                    default:
                        return c()
                    }
                }
            }
        }
    },
    209: function(e, t, n) {
        "use strict";
        n(11),
        n(54);
        var r = n(590)
          , o = n.n(r);
        t.a = function(e) {
            var t = e.method.toLowerCase()
              , n = e.body
              , time = Date.parse(new Date) / 1e3;
            if (e.t = time,
            "get" === t)
                return e.params = e.body,
                e;
            var r = e.headers["Content-Type"];
            return !r || -1 !== r.indexOf("x-www-form-urlencoded") ? e.data = o.a.stringify(n) : -1 !== r.indexOf("mutipart/form-data") ? e.data = function(body) {
                var e = new FormData;
                for (var t in Object.keys(body),
                body) {
                    var n = body[t];
                    return void 0 !== n.isFile && n.name ? e.append(t, n, n.name) : e.append(t, n),
                    e
                }
            }(n) : e.data = n,
            e
        }
    },
    213: function(e, t, n) {
        "use strict";
        n(52),
        n(10),
        n(128),
        n(129),
        n(96),
        n(14),
        n(31),
        n(98),
        n(54),
        n(125),
        n(71),
        n(12),
        n(131),
        n(132),
        n(80);
        var r = n(4);
        function o(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return c(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0, d = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return l = e.done,
                    e
                },
                e: function(e) {
                    d = !0,
                    o = e
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (d)
                            throw o
                    }
                }
            }
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        var l = window.requestIdleCallback || function(e) {
            var t = Date.now();
            return setTimeout((function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }
            ), 1)
        }
          , d = window.cancelIdleCallback || function(e) {
            clearTimeout(e)
        }
          , m = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
            e.forEach((function(e) {
                var t = e.intersectionRatio
                  , link = e.target;
                t <= 0 || !link.__prefetch || link.__prefetch()
            }
            ))
        }
        ));
        t.a = {
            name: "NuxtLink",
            extends: r.default.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                d(this.handleId),
                this.__observed && (m.unobserve(this.$el),
                delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    m && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this),
                    m.observe(this.$el),
                    this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                        return e.components.default
                    }
                    )).filter((function(e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }
                    ))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        m.unobserve(this.$el);
                        var e, t = o(this.getPrefetchComponents());
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                var n = e.value
                                  , r = n();
                                r instanceof Promise && r.catch((function() {}
                                )),
                                n.__prefetched = !0
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }
            }
        }
    },
    214: function(e, t, n) {
        "use strict";
        n.r(t);
        n(146),
        n(572);
        var r = {
            props: {
                money: {
                    type: [String, Number]
                },
                link: {
                    type: [String]
                },
                payType: {
                    type: String,
                    default: "wechat"
                }
            },
            data: function() {
                return {}
            },
            mounted: function() {
                this.link && this.qrcode()
            },
            computed: {
                payName: function() {
                    switch (this.payType) {
                    case "wechat":
                        return "微信";
                    case "alipay":
                        return "支付宝"
                    }
                    return "微信"
                }
            },
            methods: {
                qrcode: function() {
                    new QRCode("qrcode_pay",{
                        width: 160,
                        height: 160,
                        colorDark: "#000",
                        colorLight: "#fff",
                        text: this.link
                    })
                }
            }
        }
          , o = (n(966),
        n(967),
        n(6))
          , component = Object(o.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "hx-container",
                on: {
                    touchmove: function(e) {
                        e.preventDefault()
                    }
                }
            }, [n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "fs18 title"
            }, [n("span", [e._v(e._s(e.payName) + "扫码支付")]), e._v(" "), n("i", {
                staticClass: "el-icon-close ml-auto t-r",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            })]), e._v(" "), n("div", {
                staticClass: "box"
            }, [n("div", {
                staticClass: "price"
            }, [e._v("支付金额" + e._s((1 * e.money).toFixed(2)) + "元")]), e._v(" "), n("div", {
                attrs: {
                    id: "qrcode_pay"
                }
            }), e._v(" "), n("div", {
                staticClass: "fs13"
            }, [e._v("打开手机" + e._s(e.payName) + "“扫一扫”")])])])])
        }
        ), [], !1, null, "93e30376", null);
        t.default = component.exports
    },
    216: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = {
            name: "EmptyPage",
            props: {
                top: {
                    type: String,
                    default: "50%"
                },
                position: {
                    type: String,
                    default: "fixed"
                },
                descripte: {
                    type: String,
                    default: "暂无数据"
                }
            },
            data: function() {
                return {}
            },
            components: {},
            methods: {}
        }
          , o = (n(946),
        n(6))
          , component = Object(o.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "nomain",
                style: {
                    top: e.top,
                    position: e.position
                }
            }, [n("img", {
                staticClass: "no_icon",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_default%402x.png?x-oss-process=image/resize,p_50",
                    alt: ""
                }
            }), e._v(" "), n("div", {
                staticClass: "mt15"
            }, [e._v(e._s(e.descripte))])])
        }
        ), [], !1, null, "b7a0d0fa", null);
        t.default = component.exports
    },
    221: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0)
          , o = {
            mixins: [n(40).a],
            props: {
                isActive: {
                    type: [Boolean],
                    default: !1
                }
            },
            data: function() {
                return {
                    BASE_URL: r.c.url,
                    active: ""
                }
            },
            created: function() {
                if (this.isActive)
                    switch (this.$route.path) {
                    case "/mine/article":
                        this.active = "article";
                        break;
                    case "/mine/action":
                        this.active = "action";
                        break;
                    case "/mine/draft":
                        this.active = "draft";
                        break;
                    case "/about/jc":
                        this.active = "about";
                        break;
                    default:
                        this.active = ""
                    }
            },
            methods: {
                getData: function() {
                    this.$emit("fetchdata")
                },
                eventMineJump: function(e) {
                    this.$cookies.remove("minActive"),
                    this.active = "",
                    this.$router.push(e)
                },
                handlerRouterChange: function(e, t) {
                    this.active = e,
                    this.$cookies.set("minActive", e),
                    this.$router.push(t)
                }
            }
        }
          , c = (n(977),
        n(6))
          , component = Object(c.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return e.user ? r("el-aside", {
                staticClass: "noneSelect"
            }, [r("div", {
                staticClass: "me-aside mb10 me-shadow"
            }, [r("div", {
                staticClass: "top-user straight-line"
            }, [r("div", {
                staticClass: "img50 mr14"
            }, [r("img", {
                attrs: {
                    src: e.user.avatar ? e.user.avatar : e.defaultAvatar
                }
            })]), e._v(" "), r("div", {
                staticClass: "name-box",
                on: {
                    click: function(t) {
                        e.eventMineJump("/mine/info"),
                        e.setEvent("Event_Mine_ProfileSetting")
                    }
                }
            }, [r("div", {
                staticClass: "hsh-flex-upDown"
            }, [r("span", {
                staticClass: "fs17-bold showEllipis"
            }, [e._v(e._s(e.user.nickname))]), e._v(" "), e.user.medal_count && e.user.medal_count > 0 ? r("img", {
                staticStyle: {
                    width: "12px",
                    "margin-left": "5px"
                },
                attrs: {
                    src: n(600),
                    alt: ""
                }
            }) : e._e(), e._v(" "), r("span", {
                staticClass: "style-tag",
                staticStyle: {
                    "font-size": "9px",
                    "white-space": "nowrap"
                }
            }, [e._v(e._s(e.user.style_str))])]), e._v(" "), r("div", {
                staticClass: "hsh-flex-upDown"
            }, [r("div", {
                staticClass: "fs13-ash hidFont"
            }, [e._v(e._s(e.user.profile))]), e._v(" "), r("div", {
                staticClass: "name-next"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_next%402x.png",
                    alt: ""
                }
            })])])])]), e._v(" "), r("ul", {
                staticClass: "user-data"
            }, [r("li", {
                on: {
                    click: function(t) {
                        e.eventMineJump("/mine/care?type=follow"),
                        e.setEvent("Event_Mine_Follow")
                    }
                }
            }, [r("div", {
                staticClass: "fs19-bold"
            }, [e._v("\n          " + e._s(e.user.follow_count ? e.user.follow_count : 0) + "\n        ")]), e._v(" "), r("div", {
                staticClass: "fs12-bold-grey"
            }, [e._v("关注")])]), e._v(" "), r("li", {
                on: {
                    click: function(t) {
                        e.eventMineJump("/mine/care?type=fans"),
                        e.setEvent("Event_Mine_Fans")
                    }
                }
            }, [r("div", {
                staticClass: "fs19-bold"
            }, [e._v("\n          " + e._s(e.user.fans_count ? e.user.fans_count : 0) + "\n        ")]), e._v(" "), r("div", {
                staticClass: "fs12-bold-grey"
            }, [e._v("粉丝")])]), e._v(" "), r("li", [r("div", {
                staticClass: "fs19-bold"
            }, [e._v("\n          " + e._s(e.user.like_count ? e.user.like_count : 0) + "\n        ")]), e._v(" "), r("div", {
                staticClass: "fs12-bold-grey"
            }, [e._v("获赞")])]), e._v(" "), r("li", [r("div", {
                staticClass: "fs19-bold"
            }, [e._v("\n          " + e._s(e.user.posts ? e.user.posts : 0) + "\n        ")]), e._v(" "), r("div", {
                staticClass: "fs12-bold-grey"
            }, [e._v("发文")])])])]), e._v(" "), r("div", {
                staticClass: "me-aside mb10"
            }, [r("div", {
                staticClass: "link-entrance"
            }, [r("div", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        e.eventMineJump("/mine/reward"),
                        e.setEvent("Event_Mine_WorkIntegral")
                    }
                }
            }, [r("div", {
                staticClass: "link-icon integral"
            }), e._v(" "), r("div", {
                staticClass: "fs11"
            }, [e._v("工分")])]), e._v(" "), r("div", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        e.eventMineJump("/mine/energy"),
                        e.setEvent("Event_Mine_NutritionalScore")
                    }
                }
            }, [r("div", {
                staticClass: "link-icon energy"
            }), e._v(" "), r("div", {
                staticClass: "fs11"
            }, [e._v("养分")])]), e._v(" "), r("div", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        e.eventMineJump("/mine/wellat"),
                        e.setEvent("Event_Mine_Wallet")
                    }
                }
            }, [r("div", {
                staticClass: "link-icon wallet"
            }), e._v(" "), r("div", {
                staticClass: "fs11"
            }, [e._v("钱包")])]), e._v(" "), r("div", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        e.eventMineJump("/mine/power"),
                        e.setEvent("Event_Mine_Permission")
                    }
                }
            }, [r("div", {
                staticClass: "link-icon limit"
            }), e._v(" "), r("div", {
                staticClass: "fs11"
            }, [e._v("权限")])])])]), e._v(" "), r("div", {
                staticClass: "me-aside mb10"
            }, [r("ul", {
                staticClass: "text-link"
            }, [r("li", {
                staticClass: "straight-line",
                class: {
                    active: "article" == e.active
                },
                on: {
                    click: function(t) {
                        e.handlerRouterChange("article", "/mine/article"),
                        e.setEvent("Event_Mine_MyPost")
                    }
                }
            }, [r("span", {
                staticClass: "fs15"
            }, [e._v("我发表的帖子")])]), e._v(" "), r("li", {
                staticClass: "straight-line",
                class: {
                    active: "action" == e.active
                },
                on: {
                    click: function(t) {
                        e.handlerRouterChange("action", "/mine/action"),
                        e.setEvent("Event_Mine_MyCollectionAndTrends")
                    }
                }
            }, [r("span", {
                staticClass: "fs15"
            }, [e._v("我的收藏和动态")])]), e._v(" "), r("li", {
                staticClass: "straight-line",
                class: {
                    active: "order" == e.active
                },
                on: {
                    click: function(t) {
                        e.handlerRouterChange("order", "/product/order"),
                        e.setEvent("Event_Mine_Order")
                    }
                }
            }, [r("span", {
                staticClass: "fs15"
            }, [e._v("我的订单")])]), e._v(" "), r("li", {
                staticClass: "straight-line",
                class: {
                    active: "black" == e.active
                },
                on: {
                    click: function(t) {
                        e.handlerRouterChange("black", "/mine/black"),
                        e.setEvent("Event_Mine_Blacklist")
                    }
                }
            }, [r("span", {
                staticClass: "fs15"
            }, [e._v("黑名单")])]), e._v(" "), r("li", {
                staticClass: "straight-line",
                class: {
                    active: "draft" == e.active
                },
                on: {
                    click: function(t) {
                        e.handlerRouterChange("draft", "/mine/draft"),
                        e.setEvent("Event_Mine_DraftBox")
                    }
                }
            }, [r("span", {
                staticClass: "fs15"
            }, [e._v("草稿箱")])]), e._v(" "), r("li", {
                staticClass: "straight-line"
            }, [r("span", {
                staticClass: "fs15",
                on: {
                    click: function(t) {
                        e.toArticleDetail("jianyifankui"),
                        e.setEvent("Event_Mine_Feedback")
                    }
                }
            }, [e._v("建议反馈")])]), e._v(" "), r("li", {
                class: {
                    active: "about" == e.active
                },
                on: {
                    click: function(t) {
                        e.handlerRouterChange("about", "/about/jc"),
                        e.setEvent("Event_Mine_AboutUs")
                    }
                }
            }, [r("span", {
                staticClass: "fs15"
            }, [e._v("关于我们")])])])]), e._v(" "), r("div", {
                staticClass: "mt16"
            }, [r("div", {
                staticClass: "parent"
            }, [r("a", {
                staticClass: "fs11-bold click mr18 lf",
                attrs: {
                    href: e.BASE_URL + "/protocol/community",
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.setEvent("Event_App_CommunityRules")
                    }
                }
            }, [e._v("社区规则")]), e._v(" "), r("a", {
                staticClass: "fs11-bold click mr18 lf",
                attrs: {
                    href: e.BASE_URL + "/protocol/service",
                    target: "_blank"
                }
            }, [e._v("服务协议")]), e._v(" "), r("a", {
                staticClass: "fs11-bold click mr18 lf",
                attrs: {
                    href: e.BASE_URL + "/protocol/privacy",
                    target: "_blank"
                }
            }, [e._v("隐私政策")])]), e._v(" "), r("a", {
                staticClass: "click mt5 fs11-bold",
                attrs: {
                    href: "https://beian.miit.gov.cn/#/Integrated/index",
                    target: "_blank"
                }
            }, [e._v("沪ICP备20009443号")]), e._v(" "), r("div", {
                staticClass: "mt5 fs11-bold"
            }, [e._v("© 2020 上海韭研信息科技有限公司")]), e._v(" "), r("div", {
                staticClass: "parent mt5"
            }, [r("div", {
                staticClass: "fs11-bold click mr18 lf",
                on: {
                    click: function(t) {
                        return e.handlerRouterChange("about", "/about/jc")
                    }
                }
            }, [e._v("\n        关于韭研公社\n      ")]), e._v(" "), r("div", {
                staticClass: "fs11-bold click mr18 lf",
                on: {
                    click: function(t) {
                        return e.toArticleDetail("jianyifankui")
                    }
                }
            }, [e._v("\n        问题反馈\n      ")]), e._v(" "), r("div", {
                staticClass: "fs11-bold click mr18 lf"
            }, [e._v("有问题请联系"), r("span", {
                on: {
                    click: function(t) {
                        return e.$router.push("/notices/private?u=1")
                    }
                }
            }, [e._v("@韭菜团子")])])]), e._v(" "), r("div", {
                staticClass: "mt5 fs11-bold lh20"
            }, [e._v("\n      公社愿景：韭研公社，原韭菜公社，投资干货最多的共享社群，汇聚全网最深度的基本面研究，消弭个人滞后机构的逻辑鸿沟。\n    ")]), e._v(" "), r("div", {
                staticClass: "mt5 fs11-bold lh20"
            }, [e._v("\n      风险提示：韭研公社里任何网友的发言，都有其特定立场，均不构成投资建议，请投资者独立审慎决策。\n    ")])])]) : e._e()
        }
        ), [], !1, null, "61d55cc3", null);
        t.default = component.exports
    },
    222: function(e, t, n) {
        "use strict";
        n(315),
        n(23),
        n(56);
        var r = {
            checkpassword: function(e) {
                var t = 0
                  , n = 0
                  , r = 0;
                if (0 == e.length)
                    throw "密码不能为空";
                if (e.length < 8 || e.length > 12)
                    throw "密码至少8个字符,最多12个字符";
                for (var i = 0; i < e.length; i++) {
                    var o = e.substr(i, 1).charCodeAt();
                    o >= 48 && o <= 57 && (t += 1),
                    (o >= 65 && o <= 90 || o >= 97 && o <= 122) && (n += 1),
                    (o >= 33 && o <= 47 || o >= 58 && o <= 64 || o >= 91 && o <= 96 || o >= 123 && o <= 126) && (r += 1)
                }
                if (0 == t && 0 == n && 0 == r || 0 == t && 0 == n || 0 == n && 0 == r || 0 == t && 0 == r)
                    throw "使用字母、数字、字符至少两者结合"
            },
            phone: function(e) {
                if (!e.trim())
                    throw "手机号不能为空";
                if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(e))
                    throw "请输入正确手机号码";
                if (!/^1[3456789][0-9]{1,9}$/.test(e))
                    throw "手机号为11位数字字符"
            },
            contact: function(e) {
                if (!e.trim())
                    throw "联系电话不能为空";
                if (!/^((0\d{2,3}-\d{7,8})|([0-9]{7,8}))$/.test(e) && !/^((\+?86)|(\(\+86\)))?([1][3,4,5,7,8,9][0-9]{9})$/.test(e))
                    throw "联系电话格式有误"
            },
            checkPositiveDecimal: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                if (!e && 0 != e)
                    throw t + "不能为空";
                if (1 * e <= 0 && !n)
                    throw "".concat(t, "必须大于0");
                var r = /^\d+(\.\d+)?$/;
                if (!r.test(e))
                    throw "".concat(t, "数字格式错误");
                var o = /^[1-9]\d{0,9}\.\d{1,2}$/
                  , c = /^[0]\.\d{1,2}$/
                  , l = /^[1-9]\d{0,9}$/;
                if (1 * (e += "") > 0) {
                    if (0 == e.indexOf("0") && 1 != e.indexOf("."))
                        throw "".concat(t, "数字格式错误");
                    if (!(o.test(e) || l.test(e) || c.test(e)))
                        throw "".concat(t, "最多输入两位有效数字")
                }
            },
            checkPositiveInt: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                if (this.number(e, t),
                e <= 0 && !n)
                    throw "".concat(t, "必须大于0");
                if ("".concat(e).indexOf(".") > -1)
                    throw "".concat(t, "必须是整数");
                if (parseInt(e) < e)
                    throw "".concat(t, "必须是整数");
                if (0 == (e += "").indexOf("0") && !n)
                    throw "".concat(t, "数字格式错误")
            },
            number: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if ((!e || "" == e) && 0 != e)
                    throw t + "不能为空";
                e = (e + "").trim().replace("-", "");
                var n = /^[0-9]+\.[0-9]+$/
                  , r = /^[0-9]+$/;
                if (!n.test(e) && !r.test(e))
                    throw t + "必须是数字";
                if (e > 999999999)
                    throw t + "必须不大于999999999"
            },
            check: function(data, e, t) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
                if (!data && !data && "number" != typeof data)
                    throw e + "不能为空";
                switch (t) {
                case "string":
                    if (data.length > n)
                        throw e + "过长";
                    break;
                case "text":
                    break;
                case "int":
                    r.number(data, e)
                }
            }
        };
        t.a = r
    },
    223: function(e, t, n) {
        "use strict";
        n.r(t);
        n(146),
        n(55);
        var r = n(0)
          , o = {
            mixins: [n(40).a],
            props: {
                params: {
                    type: Object,
                    default: function() {}
                },
                date: {
                    type: [String, Number]
                },
                number: {
                    type: [String, Number]
                },
                type: {
                    type: String,
                    default: "action"
                },
                shareUrl: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    baseURL: r.c.url,
                    shareDialogVisible: !0
                }
            },
            components: {},
            created: function() {
                this.shareDialogVisible = !0
            },
            mounted: function() {
                this.setqrcode()
            },
            methods: {
                setqrcode: function() {
                    var e = "";
                    if ("action" == this.type && (e = "".concat(this.baseURL, "/h5/image").concat(this.date ? "/" + this.date : "")),
                    "word-cloud" == this.type && (e = "".concat(this.baseURL, "/h5/word-cloud")),
                    "trade" == this.type) {
                        var t = this.params.stock_name || ""
                          , n = this.params.orderBy || "";
                        e = "".concat(this.baseURL, "/h5/plan-share?limit=").concat(this.params.limit, "&stock_name=").concat(t, "&orderBy=").concat(n),
                        this.params.plan_id && (e += "&plan_id=" + this.params.plan_id),
                        console.log("1111", e)
                    }
                    this.shareUrl && (e = this.shareUrl),
                    console.log("2222", e);
                    new QRCode("qrcodes",{
                        width: 180,
                        height: 180,
                        text: e
                    })
                },
                close: function() {
                    this.shareDialogVisible = !1,
                    this.$emit("close")
                }
            }
        }
          , c = (n(949),
        n(6))
          , component = Object(c.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "masker-dialog",
                on: {
                    touchmove: function(e) {
                        e.preventDefault()
                    },
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [n("div", {
                staticClass: "dialog-forward"
            }, [n("div", {
                staticClass: "title"
            }, [e._v("分享到微信")]), e._v(" "), n("i", {
                staticClass: "el-icon-close",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }), e._v(" "), n("img", {
                staticClass: "share-wx",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_wechat_share%402x.png?x-oss-process=image/resize,p_50",
                    alt: "",
                    srcset: ""
                }
            }), e._v(" "), n("div", {
                attrs: {
                    id: "qrcodes"
                }
            }), e._v(" "), n("div", {
                staticClass: "text"
            }, [e._v("打开手机微信“扫一扫”")]), e._v(" "), n("div", {
                staticClass: "text"
            }, [e._v("进入页面后长按图片分享")])])])
        }
        ), [], !1, null, "5305f10e", null);
        t.default = component.exports
    },
    233: function(e, t, n) {
        "use strict";
        n.r(t);
        n(146);
        var r = {
            name: "payDialog",
            props: {
                payVisible: {
                    type: [Boolean]
                },
                money: {
                    type: [String, Number]
                },
                title: {
                    type: [String],
                    default: "悬赏支付"
                }
            },
            data: function() {
                return {
                    payType: 2,
                    innerVisible: !1
                }
            },
            watch: {
                payVisible: {
                    handler: function(e, t) {
                        this.innerVisible = e
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                closeDialog: function() {
                    this.$emit("close")
                },
                submitPay: function() {
                    this.innerVisible = !1,
                    this.$emit("pay", this.payType)
                }
            }
        }
          , o = n(6)
          , component = Object(o.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("el-dialog", {
                attrs: {
                    "close-on-click-modal": !1,
                    width: "593px",
                    center: "",
                    title: e.title,
                    visible: e.innerVisible,
                    "append-to-body": "",
                    "before-close": e.closeDialog
                },
                on: {
                    "update:visible": function(t) {
                        e.innerVisible = t
                    }
                }
            }, [n("div", {
                staticClass: "rewardPayment payDialog"
            }, [n("div", {
                staticClass: "fs15-ash"
            }, [e._v("支付金额")]), e._v(" "), n("div", {
                staticClass: "money-box"
            }, [n("span", {
                staticClass: "fs20-bold"
            }, [e._v("￥")]), n("span", {
                staticClass: "fs30-bold"
            }, [e._v(e._s(e.money))])]), e._v(" "), n("div", {
                staticClass: "pay-radio "
            }, [n("el-radio-group", {
                model: {
                    value: e.payType,
                    callback: function(t) {
                        e.payType = t
                    },
                    expression: "payType"
                }
            }, [n("el-radio", {
                staticClass: "WeChat ",
                attrs: {
                    label: 2
                }
            }, [e._v("微信支付")]), e._v(" "), n("el-radio", {
                staticClass: "wallet ",
                attrs: {
                    label: 1
                }
            }, [e._v("钱包支付")]), e._v(" "), n("el-radio", {
                staticClass: "intergral ",
                attrs: {
                    label: 3
                }
            }, [e._v("工分支付")])], 1)], 1), e._v(" "), 3 == e.payType ? n("div", {
                staticClass: "mt20 fs15-ash "
            }, [e._v("公社工分总量恒定2100万个，只会通缩务必珍惜")]) : e._e(), e._v(" "), n("el-button", {
                staticClass: "mt20",
                attrs: {
                    type: "primary",
                    round: ""
                },
                on: {
                    click: e.submitPay
                }
            }, [e._v("立即支付")])], 1)])
        }
        ), [], !1, null, "6d1b126a", null);
        t.default = component.exports
    },
    29: function(e, t, n) {
        "use strict";
        var r = n(164);
        t.a = {
            methods: {
                toast: function() {
                    var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success";
                    this.$message({
                        type: e,
                        message: text,
                        duration: 1500
                    })
                },
                showWarn: function() {
                    var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warning";
                    this.toast(text, e)
                },
                showError: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error";
                    this.toast(e, t)
                },
                showConfirm: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "确定删除?"
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    r.MessageBox.confirm(e, "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then((function() {
                        t()
                    }
                    )).catch((function() {}
                    ))
                }
            }
        }
    },
    301: function(e, t, n) {
        "use strict";
        n.r(t);
        n(52);
        var r = {
            name: "jc-banner",
            data: function() {
                return {
                    bannerList: [{
                        src: "/img/img_banner_S@2x.png",
                        event: "product"
                    }, {
                        src: "/img/img_banner_1.png",
                        event: "openAccount"
                    }],
                    selectIndex: 0,
                    autoSlideInterval: null,
                    style: {
                        transition: "left 0.5s ease-in-out",
                        left: ""
                    },
                    correctTimeout: null
                }
            },
            mounted: function() {
                this.startAutoSlide()
            },
            computed: {
                count: function() {
                    return this.bannerList.length
                }
            },
            methods: {
                click: function(e) {
                    this.$emit("clickEvent", e)
                },
                mouseover: function() {
                    clearInterval(this.autoSlideInterval)
                },
                mouseout: function() {
                    this.startAutoSlide()
                },
                startAutoSlide: function() {
                    var e = this;
                    clearInterval(this.autoSlideInterval),
                    this.bannerList.length <= 1 || (this.autoSlideInterval = setInterval((function() {
                        e.selectIndex++,
                        e.move(e.selectIndex),
                        e.selectIndex >= e.count && (clearTimeout(e.correctTimeout),
                        e.correctTimeout = setTimeout((function() {
                            e.selectIndex = 0,
                            e.move(e.selectIndex, !1)
                        }
                        ), 600))
                    }
                    ), 3e3))
                },
                clickIndicator: function(e) {
                    e != this.selectIndex && (this.selectIndex = e,
                    this.move(e))
                },
                move: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.style.transition = t ? "left 0.5s ease-in-out" : "",
                    this.style.left = 100 * -e + "%"
                }
            },
            beforeDestroy: function() {
                clearTimeout(this.correctTimeout),
                clearInterval(this.autoSlideInterval)
            }
        }
          , o = (n(943),
        n(6))
          , component = Object(o.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "banner",
                on: {
                    mouseover: e.mouseover,
                    mouseout: e.mouseout
                }
            }, [n("ul", {
                style: e.style
            }, [e._l(e.bannerList, (function(t, r) {
                return n("li", {
                    key: r,
                    on: {
                        click: function(n) {
                            return e.click(t.event)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.src,
                        alt: ""
                    }
                })])
            }
            )), e._v(" "), e.bannerList.length > 1 ? n("li", {
                on: {
                    click: function(t) {
                        return e.click(e.bannerList[0].event)
                    }
                }
            }, [n("img", {
                attrs: {
                    src: e.bannerList[0].src,
                    alt: ""
                }
            })]) : e._e()], 2), e._v(" "), e.bannerList.length > 1 ? n("div", {
                staticClass: "indicators"
            }, e._l(e.bannerList, (function(t, r) {
                return n("span", {
                    key: r,
                    class: {
                        active: e.selectIndex == r
                    },
                    on: {
                        click: function(t) {
                            return e.clickIndicator(r)
                        }
                    }
                })
            }
            )), 0) : e._e()])
        }
        ), [], !1, null, "6d344fae", null);
        t.default = component.exports
    },
    302: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = [function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "hsh-flex-upDown mb14"
            }, [r("img", {
                staticClass: "voic-icon",
                attrs: {
                    src: n(626),
                    alt: ""
                }
            }), e._v(" "), r("div", {
                staticClass: "flex-column hsh-flex-both",
                staticStyle: {
                    height: "50px"
                }
            }, [r("div", {
                staticClass: "fs16 bold color-fff"
            }, [e._v("\n          最新帖子语音播报\n        ")]), e._v(" "), r("div", {
                staticClass: "fs14 color-fff"
            }, [e._v("\n          限时免费\n        ")])])])
        }
        ]
          , o = (n(11),
        n(12),
        n(15),
        n(10),
        n(16),
        n(126))
          , c = n(27)
          , l = n(5)
          , d = (n(97),
        n(55),
        n(98),
        n(14),
        n(96),
        n(52),
        n(38))
          , m = n(233)
          , h = n(40)
          , f = n(214)
          , v = n(7);
        function _(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? _(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var w = {
            name: "newest-list",
            components: {
                PayDialog: m.default,
                ewmDialog: f.default
            },
            mixins: [h.a],
            data: function() {
                var e;
                return {
                    payDialogVisible: !1,
                    ewmDialogVisible: !1,
                    payForm: {
                        pay_type: 1,
                        pay_order_id: "",
                        pc: 1
                    },
                    formData: {
                        money: "200",
                        read_limit: "",
                        title: "开通语音播报功能"
                    },
                    voiceAlert: "on",
                    voiceBroadcast: "on",
                    list: [],
                    searchData: (e = {
                        start: 1,
                        limit: 15
                    },
                    Object(l.a)(e, "start", 0),
                    Object(l.a)(e, "type", 0),
                    Object(l.a)(e, "order", 0),
                    Object(l.a)(e, "is_newest", 1),
                    e),
                    loading: !1,
                    isEmpty: !1,
                    last_server_time: null,
                    timer: null,
                    newestTimer: null,
                    isStatus: !1,
                    ewmUrl: "",
                    totalCount: 0,
                    noMore: !1
                }
            },
            computed: {},
            methods: y(y({}, Object(v.d)({
                setNewestArticleTool: "setNewestArticleTool"
            })), {}, {
                hidNewestTool: function() {
                    this.setEvent("Event_Tool_NewestClose"),
                    this.setNewestArticleTool(!1)
                },
                tirggerVoiceAlert: function() {
                    this.voiceAlert = "on" === this.voiceAlert ? "off" : "on",
                    "on" === this.voiceAlert ? this.setEvent("Event_Tool_NewestToastOpen") : this.setEvent("Event_Tool_NewestToastClose"),
                    localStorage.setItem("voiceAlert", this.voiceAlert)
                },
                tirggerVoiceBroadcast: function() {
                    this.voiceBroadcast = "on" === this.voiceBroadcast ? "off" : "on",
                    "on" === this.voiceBroadcast ? this.setEvent("Event_Tool_NewestAudioOpen") : this.setEvent("Event_Tool_NewestAudioClose"),
                    localStorage.setItem("voiceBroadcast", this.voiceBroadcast)
                },
                load: function() {
                    this.noMore || this.loading || (this.loading = !0,
                    this.searchData.start += 1,
                    this.getList())
                },
                getList: function() {
                    var e = this;
                    return Object(c.a)(regeneratorRuntime.mark((function t() {
                        var n, r, o, data;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return 0 == e.searchData.start && (e.searchData.start += 1),
                                    n = e.searchData,
                                    r = e,
                                    t.next = 5,
                                    d.p.listArticle(n).catch((function(e) {
                                        console.log(e, "err")
                                    }
                                    ));
                                case 5:
                                    o = t.sent,
                                    data = o.data,
                                    e.loading = !1,
                                    data ? (1 === r.searchData.start ? r.list = data.result : r.list = r.list.concat(data.result),
                                    r.totalCount = data.totalCount,
                                    r.totalCount <= 15 * r.searchData.start ? r.noMore = !0 : r.noMore = !1) : (r.isEmpty = !0,
                                    r.$message({
                                        message: "数据加载较慢..，建议您切换其他浏览器浏览。",
                                        duration: 3500
                                    }));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                getNewestList: function() {
                    var e = this
                      , t = this.last_server_time;
                    d.o.getArticleNewestList({
                        last_server_time: t
                    }).then((function(t) {
                        if (t.data && t.data.length > 0) {
                            var n = e.list.slice(0, 10)
                              , r = t.data.filter((function(e) {
                                return !n.some((function(t) {
                                    return t.article_id === e.article_id
                                }
                                ))
                            }
                            ));
                            r.length > 0 && e.setNewest(r)
                        }
                        e.last_server_time = t.serverTime
                    }
                    ))
                },
                setNewest: function(data) {
                    var e;
                    1 == data.length ? this.playVoiceAlert(data[0]) : this.playVoiceAlert(data, data.length),
                    data.map((function(e) {
                        return e.create_time = e.check_time,
                        e
                    }
                    )),
                    (e = this.list).unshift.apply(e, Object(o.a)(data.reverse()))
                },
                playVoiceAlert: function(data, e) {
                    var t = this
                      , n = this;
                    if ("on" === this.voiceAlert) {
                        var audio = this.$refs.audio;
                        return audio.onended = function() {
                            setTimeout((function() {
                                n.playVoiceBroadcast(data, e)
                            }
                            ), 500)
                        }
                        ,
                        window.speechSynthesis.cancel(),
                        void audio.play().catch((function(e) {}
                        ))
                    }
                    setTimeout((function() {
                        t.playVoiceBroadcast(data, e)
                    }
                    ), 1e3)
                },
                playVoiceBroadcast: function(e, t) {
                    var title = e.title;
                    if ("on" === this.voiceBroadcast) {
                        if (t && t > 1) {
                            var n = new SpeechSynthesisUtterance("最新有".concat(t, "篇帖子发布，请注意查看"));
                            return void window.speechSynthesis.speak(n)
                        }
                        var r = new SpeechSynthesisUtterance(title);
                        window.speechSynthesis.speak(r)
                    }
                },
                getNewestArticleTool: function() {
                    var e = this;
                    d.o.getNewestArticleTool().then((function(t) {
                        var n = t.data
                          , r = n.pay_order_id
                          , o = n.money;
                        e.payForm.pay_order_id = r,
                        e.payDialogVisible = !0,
                        e.formData.money = o
                    }
                    ))
                },
                loadMore: function() {
                    this.getList()
                },
                closeEvmDialog: function() {
                    this.ewmDialogVisible = !1,
                    this.timer && clearTimeout(this.timer),
                    this.timer = null
                },
                payMoney: function(e) {
                    var t = this;
                    this.payForm.pay_type = e,
                    this.isStatus || (this.isStatus = !0,
                    this._sendPostRequest("/api/v1/pay-order/pay", this.payForm).then((function(n) {
                        if (0 != n.errCode)
                            return t.isStatus = !1,
                            t.showError(n.msg);
                        t.isStatus = !1,
                        1 * e == 2 ? (t.payDialogVisible = !1,
                        t.ewmUrl = n.data.code_url,
                        t.ewmDialogVisible = !0,
                        t.checkPayStatus(t.payForm.pay_order_id)) : (t.payDialogVisible = !1,
                        t.payMoneyThen(n))
                    }
                    )).catch((function(e) {
                        t.isStatus = !1,
                        t.payDialogVisible = !1,
                        t.showError(e.message)
                    }
                    )))
                },
                checkPayStatus: function(e) {
                    var t = this
                      , n = {
                        id: e,
                        no: ""
                    };
                    this._sendPostRequest("/api/v1/pay-order/info", n).then((function(n) {
                        0 == n.errCode ? 2 == n.data.pay_status ? (clearTimeout(t.timer),
                        t.timer = null,
                        t.payMoneyThen(n)) : t.timer = setTimeout((function() {
                            t.checkPayStatus(e)
                        }
                        ), 5e3) : (t.showError(n.msg),
                        t.closeEvmDialog())
                    }
                    )).catch((function(e) {
                        t.timer && clearTimeout(t.timer),
                        t.timer = null,
                        t.showError(e.message)
                    }
                    ))
                },
                payMoneyThen: function(e) {
                    this.closeEvmDialog(),
                    this.voiceAlert = "off",
                    this.voiceBroadcast = "off",
                    this.tirggerVoiceBroadcast(),
                    this.tirggerVoiceAlert(),
                    this.setGetListInviterval()
                },
                handleVisibilityChange: function() {
                    document.hidden || this.setGetListInviterval()
                },
                setGetListInviterval: function() {
                    var e = this;
                    clearInterval(this.newestTimer),
                    this.newestTimer = null,
                    this.newestTimer || (this.newestTimer = setInterval((function() {
                        e.getNewestList()
                    }
                    ), 1e4))
                }
            }),
            beforeDestroy: function() {
                clearInterval(this.newestTimer),
                this.newestTimer = null
            },
            mounted: function() {
                document.addEventListener("visibilitychange", this.handleVisibilityChange),
                this.loading = !0,
                this.getList(),
                $nuxt.$cookies.get("admin") && (this.voiceAlert = "off" === localStorage.getItem("voiceBroadcast") ? "off" : "on",
                this.voiceBroadcast = "off" === localStorage.getItem("voiceBroadcast") ? "off" : "on",
                this.setGetListInviterval())
            }
        }
          , k = (n(968),
        n(6))
          , component = Object(k.a)(w, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "newest"
            }, [r("div", {
                staticClass: "newest-top"
            }, [r("div", {
                staticStyle: {
                    width: "0",
                    height: "0",
                    visibility: "hidden"
                }
            }, [r("audio", {
                ref: "audio",
                attrs: {
                    controls: "",
                    src: "/audio/voice.mp3",
                    id: "voice"
                }
            })]), e._v(" "), r("i", {
                staticClass: "newest-close el-icon-close color-fff",
                on: {
                    click: e.hidNewestTool
                }
            }), e._v(" "), e._m(0), e._v(" "), r("div", {
                staticClass: "hsh-flex-upDown check-box flex-between"
            }, [r("div", {
                staticClass: "hsh-flex-upDown color-fff fs-16 mr-58"
            }, [r("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "on" === e.voiceAlert,
                    expression: "voiceAlert === 'on'"
                }],
                staticClass: "check-icon mr5",
                attrs: {
                    src: n(323),
                    alt: ""
                },
                on: {
                    click: e.tirggerVoiceAlert
                }
            }), r("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "off" === e.voiceAlert,
                    expression: "voiceAlert === 'off'"
                }],
                staticClass: "check-icon mr5",
                attrs: {
                    src: n(324),
                    alt: ""
                },
                on: {
                    click: e.tirggerVoiceAlert
                }
            }), e._v("声音提醒\n      ")]), e._v(" "), r("div", {
                staticClass: "hsh-flex-upDown color-fff fs-16"
            }, [r("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "on" === e.voiceBroadcast,
                    expression: "voiceBroadcast === 'on'"
                }],
                staticClass: "check-icon mr5",
                attrs: {
                    src: n(323),
                    alt: ""
                },
                on: {
                    click: e.tirggerVoiceBroadcast
                }
            }), r("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "off" === e.voiceBroadcast,
                    expression: "voiceBroadcast === 'off'"
                }],
                staticClass: "check-icon mr5",
                attrs: {
                    src: n(324),
                    alt: ""
                },
                on: {
                    click: e.tirggerVoiceBroadcast
                }
            }), e._v("语音播报\n      ")])])]), e._v(" "), r("div", {
                directives: [{
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: e.load,
                    expression: "load"
                }],
                staticClass: "newest-list",
                attrs: {
                    "infinite-scroll-container": ".newest",
                    "infinite-scroll-distance": "10"
                }
            }, e._l(e.list, (function(t, n) {
                return r("div", {
                    key: n,
                    staticClass: "newest-item  hsh-flex-upDown"
                }, [r("div", {
                    staticClass: "newest-title hidFont",
                    on: {
                        click: function(t) {
                            return e.setEvent("Event_Tool_NewesOpenArticle")
                        }
                    }
                }, [r("a", {
                    attrs: {
                        href: "/a/" + t.article_id,
                        target: "_blank"
                    }
                }, [e._v(e._s(t.title))])]), e._v(" "), t.create_time ? r("div", {
                    staticClass: "newest-time"
                }, [e._v("\n        " + e._s(t.create_time.substr(11, 5)) + "\n      ")]) : e._e()])
            }
            )), 0), e._v(" "), r("pay-dialog", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.payDialogVisible,
                    expression: "payDialogVisible"
                }],
                attrs: {
                    money: e.formData.money,
                    title: "开通语音播报功能",
                    "pay-visible": e.payDialogVisible
                },
                on: {
                    pay: e.payMoney,
                    close: function(t) {
                        e.payDialogVisible = !1
                    }
                }
            }), e._v(" "), e.ewmDialogVisible ? r("ewm-dialog", {
                attrs: {
                    money: e.formData.money,
                    link: e.ewmUrl
                },
                on: {
                    close: e.closeEvmDialog
                }
            }) : e._e()], 1)
        }
        ), r, !1, null, "069e2e2e", null);
        t.default = component.exports;
        installComponents(component, {
            EwmDialog: n(214).default
        })
    },
    303: function(e, t, n) {
        "use strict";
        n.r(t);
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = (n(55),
        n(52),
        n(7))
          , c = n(57)
          , l = n.n(c);
        n(222);
        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function m(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var h = {
            mixins: [n(40).a],
            props: {
                isLogin: {
                    type: [Boolean],
                    default: !1
                }
            },
            data: function() {
                return {
                    visible: !0,
                    timer: null,
                    issendyzm: !0,
                    smsCount: "",
                    smsCode: "",
                    countryList: [],
                    codes: !1,
                    countryName: "+86",
                    phone: "",
                    formData: {
                        old_password: "",
                        password2: "",
                        password: ""
                    }
                }
            },
            mounted: function() {},
            created: function() {
                this.getCountry()
            },
            components: {},
            methods: m(m({}, Object(o.d)({
                setShowLogin: "setShowLogin"
            })), {}, {
                closeReset: function() {
                    this.isLogin ? this.visible = !0 : this.setShowLogin(!1),
                    this.$emit("close")
                },
                sendSMSCodes: function() {
                    var e = this
                      , t = this.formData.phone;
                    if (t) {
                        if (this.issendyzm) {
                            this.issendyzm = !1;
                            var n = this.formData.country_code
                              , form = {
                                country_code: n,
                                phone: t,
                                token: l()("25c336d0ebfbc3a28e131d5a8c45930b".concat(n).concat(t)),
                                type: "register"
                            };
                            this._sendPostRequest("/api/v1/sms/send", form).then((function(t) {
                                if (0 != t.errCode)
                                    return e.issendyzm = !0,
                                    e.smsCount = "",
                                    void e.showError(t.msg);
                                e.setStartTimer()
                            }
                            )).catch((function(t) {
                                e.setStartTimer(t.message)
                            }
                            ))
                        }
                    } else
                        this.showError("请输入手机号码")
                },
                setStartTimer: function(e) {
                    var t = this;
                    this.timer || (this.smsCount = 60,
                    this.timer = setInterval((function() {
                        t.smsCount > 0 && t.smsCount <= 60 ? t.smsCount-- : (t.issendyzm = !0,
                        e && t.showError(e),
                        clearInterval(t.timer),
                        t.timer = null)
                    }
                    ), 1e3))
                },
                getCountry: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/area/country-code").then((function(t) {
                        e.countryList = t.data
                    }
                    ))
                },
                changeCountry: function(e, code) {
                    this.formData.country_code = code,
                    this.codes = !1
                },
                submitRegister: function(e) {
                    var t = this
                      , form = this.formData;
                    try {
                        if (!form.old_password && 1 == e)
                            throw "请输入原始登录密码";
                        if (!form.password)
                            throw "密码不能为空！";
                        if (!form.password2)
                            throw "请再次输入新密码";
                        if (form.password != form.password2)
                            throw "两次密码不一致！请重新输入";
                        if (!/^(?!bai[0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,12}$/.test(form.password))
                            throw "密码使用字母、数字、字符至少两者结合，限8~12位"
                    } catch (e) {
                        return void this.showError(e)
                    }
                    var n = {};
                    n = 1 == e ? {
                        password: form.password,
                        old_password: form.old_password
                    } : {
                        password: form.password
                    },
                    this._sendPostRequest("/api/v1/user/password/change", n).then((function(e) {
                        t.toast(e.msg),
                        t.$emit("submit", e)
                    }
                    )).catch((function(e) {
                        t.showError(e.message)
                    }
                    ))
                }
            })
        }
          , f = (n(955),
        n(6))
          , component = Object(f.a)(h, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("el-dialog", {
                staticClass: "forget",
                attrs: {
                    "close-on-click-modal": !1,
                    visible: e.visible,
                    width: "452px",
                    "modal-append-to-body": !1,
                    top: "8vh"
                },
                on: {
                    "update:visible": function(t) {
                        e.visible = t
                    },
                    close: e.closeReset
                }
            }, [n("div", {
                staticClass: "title"
            }, [e._v("修改密码")]), e._v(" "), n("div", {
                staticClass: "tabs-box forget-box"
            }, [e.user.has_pwd ? n("div", {
                staticClass: "login-row straight-line"
            }, [n("div", {
                staticClass: "input-box"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.old_password,
                    expression: "formData.old_password"
                }],
                attrs: {
                    type: "password",
                    name: "passwordOld",
                    autocomplete: "new-password",
                    placeholder: "请输入原始登录密码"
                },
                domProps: {
                    value: e.formData.old_password
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "old_password", t.target.value)
                    }
                }
            })])]) : e._e(), e._v(" "), n("div", {
                staticClass: "login-row straight-line"
            }, [n("div", {
                staticClass: "input-box"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.password,
                    expression: "formData.password"
                }],
                attrs: {
                    type: "password",
                    name: "passwordnew",
                    autocomplete: "new-password",
                    placeholder: e.user.has_pwd ? "请设置 8 - 12 位的新密码" : "请设置 8 - 12 位的登录密码"
                },
                domProps: {
                    value: e.formData.password
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "password", t.target.value)
                    }
                }
            })])]), e._v(" "), n("div", {
                staticClass: "login-row straight-line"
            }, [n("div", {
                staticClass: "input-box"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.password2,
                    expression: "formData.password2"
                }],
                attrs: {
                    type: "password",
                    name: "passwordnew2",
                    autocomplete: "new-password",
                    placeholder: "请再次输入新密码"
                },
                domProps: {
                    value: e.formData.password2
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "password2", t.target.value)
                    }
                }
            })])]), e._v(" "), n("div", {
                staticClass: "fs12 tl"
            }, [e._v("使用字母、数字、字符至少两者结合，限8~12位")]), e._v(" "), n("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        e.submitRegister(e.user.has_pwd),
                        e.setEvent("Event_Mine_PasswordSetting")
                    }
                }
            }, [e._v("立即修改")])], 1)])
        }
        ), [], !1, null, "3861aa33", null);
        t.default = component.exports
    },
    304: function(e, t, n) {
        "use strict";
        n.r(t);
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = (n(55),
        n(52),
        n(7))
          , c = n(57)
          , l = n.n(c);
        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function m(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var h = {
            mixins: [n(40).a],
            props: {
                isWx: {
                    type: [Boolean, String],
                    default: !1
                }
            },
            data: function() {
                return {
                    visible: !0,
                    timer: null,
                    issendyzm: !0,
                    smsCount: "",
                    smsCode: "",
                    countryList: [],
                    codes: !1,
                    countryName: "+86",
                    phone: "13800138001",
                    formData: {
                        country_code: "+86",
                        phone: "",
                        nickname: "",
                        password: ""
                    }
                }
            },
            mounted: function() {},
            created: function() {
                this.getCountry()
            },
            components: {},
            methods: m(m({}, Object(o.d)({
                setShowLogin: "setShowLogin"
            })), {}, {
                sendSMSCodes: function() {
                    var e = this
                      , t = this.formData.phone;
                    if (t) {
                        if (this.issendyzm) {
                            this.issendyzm = !1;
                            var n = this.formData.country_code
                              , form = {
                                country_code: n,
                                phone: t,
                                token: l()("25c336d0ebfbc3a28e131d5a8c45930b".concat(n).concat(t)),
                                type: "register"
                            };
                            this._sendPostRequest("/api/v1/sms/send", form).then((function(t) {
                                if (0 != t.errCode)
                                    return e.issendyzm = !0,
                                    e.smsCount = "",
                                    void e.showError(t.msg);
                                e.setStartTimer()
                            }
                            )).catch((function(t) {
                                e.setStartTimer(t.message)
                            }
                            ))
                        }
                    } else
                        this.showError("请输入手机号码")
                },
                setStartTimer: function(e) {
                    var t = this;
                    this.timer || (this.smsCount = 60,
                    this.timer = setInterval((function() {
                        t.smsCount > 0 && t.smsCount <= 60 ? t.smsCount-- : (t.issendyzm = !0,
                        e && t.showError(e),
                        clearInterval(t.timer),
                        t.timer = null)
                    }
                    ), 1e3))
                },
                getCountry: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/area/country-code").then((function(t) {
                        e.countryList = t.data
                    }
                    )).catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                changeCountry: function(e, code) {
                    this.formData.country_code = code,
                    this.codes = !1
                },
                submitRegister: function() {
                    var e = this
                      , form = this.formData;
                    if (form.phone)
                        if (this.smsCode)
                            if (form.password) {
                                if (/^(?!bai[0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,12}$/.test(form.password)) {
                                    var t = {
                                        code: this.smsCode,
                                        country_code: form.country_code,
                                        phone: form.phone,
                                        type: "register"
                                    };
                                    form.nickname ? this.isWx ? this.wxRegister(t) : this._sendPostRequest("/api/v1/sms/valid", t).then((function(t) {
                                        e._sendPostRequest("/api/v1/user/register", form).then((function(t) {
                                            e._sendPostRequest("/api/v1/user/info").then((function(t) {
                                                e.$emit("submit", t)
                                            }
                                            ))
                                        }
                                        )).catch((function(t) {
                                            e.showError(t.message)
                                        }
                                        ))
                                    }
                                    )) : this.showError("用户名不能为空！")
                                } else
                                    this.showError("密码使用字母、数字、字符至少两者结合，限8~12位")
                            } else
                                this.showError("密码不能为空！");
                        else
                            this.showError("验证码不能为空！");
                    else
                        this.showError("请输入手机号码")
                },
                wxRegister: function(e) {
                    var t = this
                      , n = {
                        avatar: this.$route.query.avatar,
                        country_code: "",
                        nickname: this.$route.query.nickname,
                        open_id: this.$route.query.openid,
                        password: this.formData.password,
                        phone: e.phone
                    };
                    this._sendPostRequest("/api/v1/sms/valid", e).then((function(e) {
                        t._sendPostRequest("/api/v1/user/register/wx-pc", n).then((function(e) {
                            t._sendPostRequest("/api/v1/user/info").then((function(e) {
                                t.$emit("submit", e)
                            }
                            ))
                        }
                        )).catch((function(e) {
                            t.showError(e.message)
                        }
                        ))
                    }
                    ))
                }
            })
        }
          , f = (n(958),
        n(6))
          , component = Object(f.a)(h, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("el-dialog", {
                staticClass: "dialogre",
                attrs: {
                    "close-on-click-modal": !1,
                    visible: e.visible,
                    width: "452px",
                    top: "8vh"
                },
                on: {
                    "update:visible": function(t) {
                        e.visible = t
                    },
                    close: function(t) {
                        return e.setShowLogin(!1)
                    }
                }
            }, [r("div", {
                staticClass: "logo-icon"
            }, [r("img", {
                attrs: {
                    src: n(320)
                }
            })]), e._v(" "), r("div", {
                staticClass: "tabs-box"
            }, [r("div", {
                staticClass: "login-row straight-line"
            }, [r("div", {
                staticClass: "areaCode-box lf"
            }, [r("div", {
                staticClass: "code-number",
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.codes = !e.codes
                    }
                }
            }, [e._v("\n          " + e._s(e.formData.country_code) + "\n                "), r("img", {
                staticClass: "icon-dw",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_arrow_d@2x-.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), e.codes ? r("div", {
                staticClass: "areaCode four-line"
            }, [r("ul", {
                staticClass: "pz"
            }, e._l(e.countryList, (function(t, i) {
                return r("li", {
                    key: i,
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            e.changeCountry(t.name, t.code)
                        }
                    }
                }, [e._v(e._s(t.name) + " " + e._s(t.code))])
            }
            )), 0)]) : e._e()]), e._v(" "), r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.phone,
                    expression: "formData.phone"
                }],
                attrs: {
                    type: "text",
                    name: "phone",
                    autocomplete: "new-password",
                    placeholder: "请输入手机号"
                },
                domProps: {
                    value: e.formData.phone
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "phone", t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "login-row straight-line"
            }, [r("div", {
                staticClass: "code-text rf",
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.sendSMSCodes(),
                        e.setEvent("Event_SignUp_GetCode")
                    }
                }
            }, [e._v(e._s(e.issendyzm && "" == e.smsCount ? "获取验证码" : "已发送" + e.smsCount + "s"))]), e._v(" "), r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.smsCode,
                    expression: "smsCode"
                }],
                attrs: {
                    type: "text",
                    name: "smsCode",
                    autocomplete: "new-password",
                    placeholder: "请输入验证码"
                },
                domProps: {
                    value: e.smsCode
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.smsCode = t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "login-row straight-line"
            }, [r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.password,
                    expression: "formData.password"
                }],
                attrs: {
                    name: "password",
                    autocomplete: "new-password",
                    type: "password",
                    placeholder: "请设置密码"
                },
                domProps: {
                    value: e.formData.password
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "password", t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "fs12 ml10 tl"
            }, [e._v("使用字母、数字、字符至少两者结合，限8~12位")]), e._v(" "), r("div", {
                staticClass: "login-row straight-line mt30"
            }, [r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.nickname,
                    expression: "formData.nickname"
                }],
                attrs: {
                    type: "text",
                    name: "nickname",
                    autocomplete: "new-password",
                    placeholder: "请设置用户名"
                },
                domProps: {
                    value: e.formData.nickname
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "nickname", t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "fs12 ml10 tl"
            }, [e._v("知名ID如被抢注，可私信管理员申诉")]), e._v(" "), r("el-button", {
                attrs: {
                    type: "primary mt60"
                },
                on: {
                    click: function(t) {
                        e.submitRegister(),
                        e.setEvent("Event_SignUp_SignUp")
                    }
                }
            }, [e._v("立即注册")]), e._v(" "), r("div", {
                staticClass: "agreement mt60"
            }, [e._v("\n      注册或登录即代表同意\n      "), r("a", {
                staticClass: "click",
                on: {
                    click: function(t) {
                        return e.setEvent("Event_App_ServiceAgreement")
                    }
                }
            }, [e._v("韭研公社服务协议")]), e._v(" &\n      "), r("a", {
                staticClass: "click"
            }, [e._v("韭研公社隐私政策")])])], 1)])
        }
        ), [], !1, null, "97ace204", null);
        t.default = component.exports
    },
    305: function(e, t, n) {
        "use strict";
        n.r(t);
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = (n(146),
        n(55),
        n(52),
        n(7))
          , c = n(57)
          , l = n.n(c)
          , d = n(222);
        function m(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function h(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? m(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var f = {
            name: "ForgetPassword",
            mixins: [n(40).a],
            props: {
                isLogin: {
                    type: [Boolean],
                    default: !1
                },
                phone: {
                    type: [String, Number]
                }
            },
            data: function() {
                return {
                    visible: !0,
                    timer: null,
                    issendyzm: !0,
                    smsCount: "",
                    smsCode: "",
                    countryList: [],
                    codes: !1,
                    countryName: "+86",
                    formData: {
                        country_code: "+86",
                        phone: "",
                        nickname: "",
                        password: ""
                    }
                }
            },
            mounted: function() {},
            created: function() {
                this.getCountry(),
                this.phone && (this.formData.phone = this.phone)
            },
            components: {},
            methods: h(h({}, Object(o.d)({
                setShowLogin: "setShowLogin"
            })), {}, {
                closeReset: function() {
                    this.isLogin ? this.visible = !0 : this.setShowLogin(!1),
                    this.$emit("close")
                },
                sendSMSCodes: function() {
                    var e = this
                      , t = this.formData.phone;
                    if (t) {
                        if (this.issendyzm) {
                            this.issendyzm = !1;
                            var n = this.formData.country_code
                              , form = {
                                country_code: n,
                                phone: t,
                                token: l()("25c336d0ebfbc3a28e131d5a8c45930b".concat(n).concat(t)),
                                type: "reset_pwd"
                            };
                            this._sendPostRequest("/api/v1/sms/send", form).then((function(t) {
                                if (0 != t.errCode)
                                    return e.issendyzm = !0,
                                    e.smsCount = "",
                                    void e.showError(t.msg);
                                e.setStartTimer()
                            }
                            )).catch((function(t) {
                                e.setStartTimer(t.message)
                            }
                            ))
                        }
                    } else
                        this.showError("请输入手机号码")
                },
                setStartTimer: function(e) {
                    var t = this;
                    this.timer || (this.smsCount = 60,
                    this.timer = setInterval((function() {
                        t.smsCount > 0 && t.smsCount <= 60 ? t.smsCount-- : (t.issendyzm = !0,
                        e && t.showError(e),
                        clearInterval(t.timer),
                        t.timer = null)
                    }
                    ), 1e3))
                },
                getCountry: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/area/country-code").then((function(t) {
                        e.countryList = t.data
                    }
                    ))
                },
                changeCountry: function(e, code) {
                    this.formData.country_code = code,
                    this.codes = !1
                },
                submitRegister: function() {
                    var e = this
                      , form = this.formData;
                    try {
                        if (!form.phone)
                            throw "请输入手机号码";
                        if (!this.smsCode)
                            throw "验证码不能为空！";
                        if (!form.password)
                            throw "密码不能为空！";
                        if (!/^(?!bai[0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,12}$/.test(form.password))
                            throw "密码使用字母、数字、字符至少两者结合，限8~12位";
                        d.a.checkpassword(form.password)
                    } catch (e) {
                        return void this.showError(e)
                    }
                    var t = {
                        code: this.smsCode,
                        country_code: form.country_code,
                        phone: form.phone,
                        type: "reset_pwd"
                    };
                    this._sendPostRequest("/api/v1/sms/valid", t).then((function(t) {
                        e._sendPostRequest("/api/v1/user/password/reset", {
                            password: form.password,
                            phone: form.phone
                        }).then((function(t) {
                            0 == t.errCode ? (e.toast(t.msg),
                            e.$emit("submit", t)) : e.showError(t.msg)
                        }
                        )).catch((function(t) {
                            e.showError(t.message)
                        }
                        ))
                    }
                    )).catch((function(t) {
                        e.showError(t.message)
                    }
                    ))
                }
            })
        }
          , v = (n(959),
        n(6))
          , component = Object(v.a)(f, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("el-dialog", {
                staticClass: "forget",
                attrs: {
                    "append-to-body": !1,
                    "close-on-click-modal": !1,
                    visible: e.visible,
                    width: "452px",
                    top: "8vh"
                },
                on: {
                    "update:visible": function(t) {
                        e.visible = t
                    },
                    close: e.closeReset
                }
            }, [n("div", {
                staticClass: "title"
            }, [e._v("修改密码")]), e._v(" "), n("div", {
                staticClass: "tabs-box forget-box"
            }, [n("div", {
                staticClass: "login-row straight-line"
            }, [n("div", {
                staticClass: "areaCode-box lf"
            }, [n("div", {
                staticClass: "code-number",
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.codes = !e.codes
                    }
                }
            }, [e._v("\n          " + e._s(e.formData.country_code) + "\n                "), n("img", {
                staticClass: "icon-dw",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_arrow_d@2x-.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), e.codes ? n("div", {
                staticClass: "areaCode four-line"
            }, [n("ul", {
                staticClass: "pz"
            }, e._l(e.countryList, (function(t, i) {
                return n("li", {
                    key: i,
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            e.changeCountry(t.name, t.code)
                        }
                    }
                }, [e._v(e._s(t.name) + " " + e._s(t.code))])
            }
            )), 0)]) : e._e()]), e._v(" "), n("div", {
                staticClass: "input-box"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.phone,
                    expression: "formData.phone"
                }],
                attrs: {
                    type: "text",
                    placeholder: "请输入手机号"
                },
                domProps: {
                    value: e.formData.phone
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "phone", t.target.value)
                    }
                }
            })])]), e._v(" "), n("div", {
                staticClass: "login-row straight-line"
            }, [n("div", {
                staticClass: "input-box"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.password,
                    expression: "formData.password"
                }],
                attrs: {
                    name: "pass",
                    autocomplete: "new-password",
                    type: "password",
                    placeholder: "请设置密码"
                },
                domProps: {
                    value: e.formData.password
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.formData, "password", t.target.value)
                    }
                }
            })])]), e._v(" "), n("div", {
                staticClass: "fs12 tl"
            }, [e._v("使用字母、数字、字符至少两者结合，限8~12位")]), e._v(" "), n("div", {
                staticClass: "login-row straight-line mt30"
            }, [n("div", {
                staticClass: "code-text rf",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.sendSMSCodes.apply(null, arguments)
                    }
                }
            }, [e._v(e._s(e.issendyzm && "" == e.smsCount ? "获取验证码" : "已发送" + e.smsCount + "s"))]), e._v(" "), n("div", {
                staticClass: "input-box"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.smsCode,
                    expression: "smsCode"
                }],
                attrs: {
                    autocomplete: "new-password",
                    type: "text",
                    placeholder: "请输入验证码"
                },
                domProps: {
                    value: e.smsCode
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.smsCode = t.target.value)
                    }
                }
            })])]), e._v(" "), n("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.submitRegister()
                    }
                }
            }, [e._v("立即修改")])], 1)])
        }
        ), [], !1, null, "9fe82878", null);
        t.default = component.exports
    },
    306: function(e, t, n) {
        "use strict";
        var r = {};
        r.auth = n(648),
        r.auth = r.auth.default || r.auth,
        r.device = n(931),
        r.device = r.device.default || r.device,
        r.open_account = n(932),
        r.open_account = r.open_account.default || r.open_account,
        t.a = r
    },
    309: function(e, t, n) {
        "use strict";
        n.r(t);
        var r, o = n(599), c = n(4), l = c.default.extend(o.default), d = {
            target: null
        };
        l.prototype.close = function() {
            r && (r = void 0),
            this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el),
            this.visible = !1,
            this.$destroy()
        }
        ;
        t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!c.default.prototype.isServer) {
                if ("string" == typeof (e = Object.assign({}, d, e)).target && (e.target = document.querySelector(e.target)),
                e.target = e.target || document.body,
                r)
                    return r;
                var t = e.target === document.body ? document.body : e.target;
                return r = new l({
                    el: document.createElement("div"),
                    data: e
                }),
                t.appendChild(r.$el),
                r
            }
        }
    },
    310: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = {
            props: {
                width: {
                    type: [String],
                    default: "110px"
                },
                height: {
                    type: [String],
                    default: "40px"
                },
                fontSize: {
                    type: [String],
                    default: "15px"
                },
                background: {
                    type: String,
                    default: "#337DF2"
                },
                color: {
                    type: String,
                    default: "#fff"
                },
                radius: {
                    type: [String],
                    default: "3px"
                }
            },
            methods: {
                event_click: function() {
                    this.$emit("evevnClick")
                }
            }
        }
          , o = (n(947),
        n(6))
          , component = Object(o.a)(r, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                staticClass: "btn-blue",
                style: {
                    width: e.width,
                    height: e.height,
                    fontSize: e.fontSize,
                    background: e.background,
                    borderRadius: e.radius,
                    color: e.color
                },
                on: {
                    click: e.event_click
                }
            }, [e._t("preffixIcon"), e._v(" "), e._t("default")], 2)
        }
        ), [], !1, null, "92466c6c", null);
        t.default = component.exports
    },
    311: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = {
            props: {
                width: {
                    type: [String],
                    default: "110px"
                },
                height: {
                    type: [String],
                    default: "40px"
                },
                fontSize: {
                    type: [String],
                    default: "15px"
                },
                radius: {
                    type: [String],
                    default: "3px"
                }
            },
            methods: {
                event_click: function() {
                    this.$emit("evevnClick")
                }
            }
        }
          , o = (n(948),
        n(6))
          , component = Object(o.a)(r, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                staticClass: "btn-grey",
                style: {
                    width: e.width,
                    height: e.height,
                    lineHeight: e.height,
                    fontSize: e.fontSize,
                    borderRadius: e.radius
                },
                on: {
                    click: e.event_click
                }
            }, [e._t("preffixIcon"), e._v(" "), e._t("default")], 2)
        }
        ), [], !1, null, "44c84e36", null);
        t.default = component.exports
    },
    314: function(e, t, n) {
        "use strict";
        n(23),
        n(215),
        n(31),
        n(128),
        n(129),
        n(572);
        var r = n(1)
          , o = n(0)
          , c = o.c.url;
        function l(e) {
            var data = {
                url: "/open/wx/config",
                params: {
                    url: e
                },
                headers: o.a
            };
            return r.a.post(data)
        }
        t.a = {
            getIsWxClient: function() {
                return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
            },
            config: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (!this.getIsWxClient())
                    return Promise.reject();
                var t = this.getSignUrl();
                return new Promise((function(n, r) {
                    l(t).then((function(t) {
                        var o = t.data;
                        wx.ready((function() {
                            n(o)
                        }
                        )),
                        wx.error((function(e) {
                            r(e)
                        }
                        )),
                        wx.config({
                            debug: o.debug || !1,
                            appId: o.appId,
                            timestamp: o.timestamp,
                            nonceStr: o.nonceStr,
                            signature: o.signature,
                            jsApiList: e,
                            openTagList: ["wx-open-launch-app"]
                        })
                    }
                    )).catch((function(e) {
                        r(e),
                        console.log("err", e)
                    }
                    ))
                }
                ))
            },
            configUrl: function(e) {
                if (!window.firstEnterPage) {
                    var t = location.origin + e;
                    window.firstEnterPage = t
                }
            },
            getSignUrl: function() {
                var e = this.getPlatform();
                return "android" === e ? location.href : "ios" === e ? window.firstEnterPage : location.href
            },
            getPlatform: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.includes("android") ? "android" : e.includes("iphone") || e.includes("ios") ? "ios" : "other"
            },
            wxShare: function(option, e) {
                this.getIsWxClient() && (option.link = c + option.link,
                wx.ready((function() {
                    wx.updateAppMessageShareData({
                        title: option.title,
                        desc: option.desc,
                        link: option.link,
                        imgUrl: option.imgUrl || "https://cdn.jiuyangongshe.com/PC/ic_logo_108.png",
                        success: function() {
                            e()
                        },
                        fail: function(e) {
                            console.log("分享失败", e)
                        }
                    })
                }
                )),
                wx.ready((function() {
                    wx.onMenuShareTimeline({
                        title: option.title,
                        desc: option.desc,
                        link: option.link,
                        imgUrl: "https://cdn.jiuyangongshe.com/PC/ic_logo_108.png",
                        success: function() {
                            e()
                        },
                        cancel: function() {}
                    })
                }
                )),
                wx.ready((function() {
                    wx.onMenuShareQQ({
                        title: option.title,
                        desc: option.desc,
                        link: option.link,
                        imgUrl: "https://cdn.jiuyangongshe.com/PC/ic_logo_108.png",
                        success: function() {
                            e()
                        },
                        cancel: function() {}
                    })
                }
                )),
                wx.ready((function() {
                    wx.onMenuShareAppMessage({
                        title: option.title,
                        desc: option.desc,
                        link: option.link,
                        imgUrl: "https://cdn.jiuyangongshe.com/PC/ic_logo_108.png",
                        success: function() {
                            e()
                        },
                        cancel: function() {}
                    })
                }
                )))
            }
        }
    },
    320: function(e, t, n) {
        e.exports = n.p + "img/ic_logo_login@2x.14d8487.png"
    },
    323: function(e, t, n) {
        e.exports = n.p + "img/ic_on@2x.e64e85d.png"
    },
    324: function(e, t, n) {
        e.exports = n.p + "img/ic_off@2x.4fc48e8.png"
    },
    325: function(e, t, n) {
        "use strict";
        n(23),
        n(42),
        n(167),
        n(52);
        var r = .3
          , o = !0
          , c = !0
          , l = !0
          , d = {
            data: function() {
                return {
                    isIe: !1,
                    currentImg: "",
                    visible: !1,
                    background: r > 1 || r <= 0 || "number" != typeof r ? null : "rgba(0,0,0," + r + ")",
                    rotateButtonVisible: c,
                    closeButtonVisible: l
                }
            },
            mounted: function() {
                var e = /msie|trident/g.test(window.navigator.userAgent.toLocaleLowerCase());
                this.isIe = e
            },
            watch: {},
            methods: {
                close: function() {
                    this.clearImg()
                },
                greet: function(e) {
                    this.val = e
                },
                hideImage: function(e) {
                    var t = this;
                    !this.visible || !o && l || document.addEventListener("click", (function(e) {
                        "IMG" !== e.target.nodeName && "BUTTON" !== e.target.nodeName && t.clearImg()
                    }
                    ))
                },
                rotateImage: function(e) {
                    var t = this.$refs.user_image.style.transform.split(" ");
                    switch (t[0]) {
                    case "rotate(0deg)":
                        t[0] = "rotate(90deg)";
                        break;
                    case "rotate(90deg)":
                        t[0] = "rotate(180deg)";
                        break;
                    case "rotate(180deg)":
                        t[0] = "rotate(270deg)";
                        break;
                    case "rotate(270deg)":
                        t[0] = "rotate(360deg)";
                        break;
                    default:
                        t[0] = "rotate(90deg)"
                    }
                    this.$refs.user_image.style.transform = t.join(" ")
                },
                wheel: function(e) {
                    e.wheelDelta ? (e.wheelDelta > 0 && (this.$refs.user_image.style.transform = this.$refs.user_image.style.transform + " scale(1.1)"),
                    e.wheelDelta < 0 && (this.$refs.user_image.style.transform = this.$refs.user_image.style.transform + " scale(0.9)")) : e.detail && (e.detail > 0 && (this.$refs.user_image.style.transform = this.$refs.user_image.style.transform + " scale(1.1)"),
                    e.detail < 0 && (this.$refs.user_image.style.transform = this.$refs.user_image.style.transform + " scale(0.9)"))
                },
                binGer: function() {
                    this.$refs.user_image.style.transform = this.$refs.user_image.style.transform + " scale(1.1)"
                },
                smaller: function() {
                    this.$refs.user_image.style.transform = this.$refs.user_image.style.transform + " scale(0.9)"
                },
                clearImg: function() {
                    var e = this;
                    this.visible = !1,
                    document.removeEventListener("click", null),
                    setTimeout((function() {
                        e.$refs.user_image && (e.$refs.user_image.style.transform = "rotate(0deg)",
                        e.$refs.user_image.style.left = "",
                        e.$refs.user_image.style.top = "")
                    }
                    ), 100)
                }
            }
        }
          , m = (n(1036),
        n(6))
          , component = Object(m.a)(d, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return e.visible ? r("div", {
                attrs: {
                    id: "image-viewer"
                },
                on: {
                    click: e.hideImage
                }
            }, [r("div", {
                staticClass: "see-image",
                style: {
                    backgroundColor: e.background
                },
                on: {
                    mousewheel: function(t) {
                        return t.preventDefault(),
                        e.wheel.apply(null, arguments)
                    }
                }
            }, [r("img", {
                directives: [{
                    name: "drag",
                    rawName: "v-drag",
                    value: e.greet,
                    expression: "greet"
                }],
                ref: "user_image",
                staticClass: "image",
                class: {
                    IeImage: e.isIe
                },
                attrs: {
                    id: "drag",
                    src: e.currentImg
                }
            })]), e._v(" "), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.closeButtonVisible,
                    expression: "closeButtonVisible"
                }],
                staticClass: "close",
                on: {
                    click: e.close
                }
            }, [r("img", {
                attrs: {
                    src: n(1032)
                }
            })]), e._v(" "), r("div", {
                staticClass: "btnGroup"
            }, [r("div", {
                staticClass: "rotate",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.binGer.apply(null, arguments)
                    }
                }
            }, [r("img", {
                staticClass: "big",
                attrs: {
                    src: n(1033),
                    alt: "",
                    srcset: ""
                }
            })]), e._v(" "), r("div", {
                staticClass: "rotate",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.smaller.apply(null, arguments)
                    }
                }
            }, [r("img", {
                staticClass: "big",
                attrs: {
                    src: n(1034),
                    alt: "",
                    srcset: ""
                }
            })]), e._v(" "), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.rotateButtonVisible,
                    expression: "rotateButtonVisible"
                }],
                staticClass: "rotate",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.rotateImage.apply(null, arguments)
                    }
                }
            }, [r("img", {
                attrs: {
                    src: n(1035)
                }
            })])])]) : e._e()
        }
        ), [], !1, null, "4a3b644c", null);
        t.a = component.exports
    },
    327: function(e, t, n) {
        "use strict";
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = n(1)
          , c = n(0);
        function l(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        t.a = {
            getNewestArticleTool: function(e) {
                var data = {
                    url: "/api/v1/user/newest-article-tool",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getArticleNewest: function(e) {
                var data = {
                    url: "/api/v2/article/newest",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getArticleNewestList: function(e) {
                var data = {
                    url: "/api/v2/article/newest/list",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getArticleDetail: function(e) {
                var data = {
                    url: "/api/v2/article/detail?articleId=".concat(e.article_id),
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getArticleOriginal: function(e) {
                var data = {
                    url: "/api/v2/article/detail/original",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getArticlePreview: function(e) {
                var data = {
                    url: "/api/v2/article/preview",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            listCommentH: function(e) {
                var data = {
                    url: "/api/v1/article/comment/list",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getHot: function(e) {
                var data = {
                    url: "/api/v1/article/hot",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            listComment: function(e) {
                var data = {
                    url: "/api/v1/article/comment/list-pc",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            articleForward: function(e) {
                var data = {
                    url: "/api/v2/article/forward",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            collect: function(e) {
                var data = {
                    url: "/api/v1/article/collect",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            report: function(e) {
                var data = {
                    url: "/api/v1/complaint/add",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            addComment: function(e) {
                var data = {
                    url: "/api/v1/article/comment/add",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            caoGao: function(e) {
                var data = {
                    url: "/api/v1/article/comment/add",
                    params: e
                };
                return o.a.post(data)
            },
            commentReview: function(e) {
                var data = {
                    url: "/api/v1/article/comment/cms-preview",
                    params: {
                        id: e
                    },
                    headers: c.a
                };
                return o.a.post(data)
            },
            htmlTitle: function(e) {
                var data = {
                    url: "/api/v1/article/html-title",
                    params: {
                        url: e
                    },
                    headers: c.a
                };
                return o.a.post(data)
            },
            getRank: function(e) {
                var data = {
                    url: "/api/v1/article/rank-board",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            pageSetting: function(e) {
                var data = {
                    url: "/api/v1/article/plan/save-order-by",
                    params: d({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            }
        }
    },
    33: function(e, t, n) {
        "use strict";
        n.r(t);
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = (n(55),
        n(52),
        n(54),
        n(31),
        n(71),
        n(80),
        n(317),
        n(88),
        n(23),
        n(56),
        n(304))
          , c = n(305)
          , l = n(0)
          , d = n(40)
          , m = n(7)
          , h = n(38)
          , f = n(57)
          , v = n.n(f);
        function _(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? _(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var w = {
            mixins: [d.a],
            props: {},
            data: function() {
                return {
                    baseURL: l.c.url,
                    isPosting: !1,
                    showForget: !1,
                    isLogin: !0,
                    isWx: "wx" == this.$route.query.type,
                    showRegister: !this.$route.query.login && this.$route.query.openid,
                    timer: null,
                    issendyzm: !0,
                    smsCount: 60,
                    smsCode: "",
                    countryList: [],
                    codes: !1,
                    input2: "",
                    activeName: "phone",
                    value1: "",
                    countryName: "+86",
                    phone: "",
                    form: {
                        phone: "",
                        password: ""
                    },
                    smsForm: {
                        country_code: "+86",
                        phone: ""
                    }
                }
            },
            created: function() {
                this.getCountry()
            },
            mounted: function() {
                this.setEvent("Event_LogIn_PhoneVerificationCode")
            },
            components: {
                "v-register": o.default,
                ForgetPassword: c.default
            },
            methods: y(y(y({}, Object(m.b)(["getOSSToken", "getCounts", "getUserInfo"])), Object(m.d)({
                setShowLogin: "setShowLogin",
                setUserData: "setUserData"
            })), {}, {
                tabClick: function(e) {
                    this.codes = !1,
                    0 == e.index && this.setEvent("Event_LogIn_PhoneVerificationCode"),
                    1 == e.index && this.setEvent("Event_LogIn_AccountPassword")
                },
                wxLogin: function() {
                    var e = this;
                    this.setEvent("Event_LogIn_ThirdParty"),
                    this._sendPostRequest("/api/v1/user/login/wx-pc", {
                        path: this.baseURL + "/?type=wx"
                    }).then((function(e) {
                        window.open(e.data)
                    }
                    )).catch((function(t) {
                        e.showError(t.message)
                    }
                    ))
                },
                closeLoginDialog: function() {
                    this.showRegister ? this.isLogin = !1 : (this.isLogin = !1,
                    this.setShowLogin(!1))
                },
                eventRegister: function() {
                    this.showRegister = !0
                },
                sendSMSCodes: function() {
                    var e = this;
                    if (this.phone) {
                        if (this.issendyzm) {
                            this.issendyzm = !1;
                            var t = this.phone
                              , n = this.smsForm.country_code
                              , form = {
                                country_code: n,
                                phone: t,
                                token: v()("25c336d0ebfbc3a28e131d5a8c45930b".concat(n).concat(t)),
                                type: "sms_login"
                            };
                            this._sendPostRequest("/api/v1/sms/send", form).then((function(t) {
                                if (0 != t.errCode)
                                    return e.issendyzm = !0,
                                    e.smsCount = "",
                                    void e.showError(t.msg);
                                e.setStartTimer()
                            }
                            )).catch((function(t) {
                                e.issendyzm = !0,
                                e.showError(t.message)
                            }
                            ))
                        }
                    } else
                        this.showError("请输入手机号码")
                },
                setStartTimer: function(e) {
                    var t = this;
                    this.timer || (this.smsCount = 60,
                    this.timer = setInterval((function() {
                        t.smsCount > 0 && t.smsCount <= 60 ? t.smsCount-- : (t.issendyzm = !0,
                        clearInterval(t.timer),
                        t.timer = null)
                    }
                    ), 1e3))
                },
                getCountry: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/area/country-code").then((function(t) {
                        e.countryList = t.data
                    }
                    )).catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                changeCountry: function(e, code) {
                    this.smsForm.country_code = code,
                    this.codes = !1
                },
                smsLogin: function() {
                    var e = this;
                    if (this.phone)
                        if (this.smsCode) {
                            var form = this.smsForm;
                            form.phone = this.phone;
                            var t = {
                                code: this.smsCode,
                                country_code: form.country_code,
                                phone: form.phone,
                                type: "sms_login"
                            };
                            this.isPosting || (this.isPosting = !0,
                            this._sendPostRequest("/api/v1/sms/valid", t).then((function(t) {
                                e._sendPostRequest("/api/v1/user/login/sms", form).then((function(t) {
                                    if (0 != t.errCode)
                                        return e.showError(t.msg),
                                        void (e.isPosting = !1);
                                    e.afterApiLogin(t),
                                    e.isPosting = !1
                                }
                                )).catch((function(t) {
                                    e.showError(t.message),
                                    e.isPosting = !1
                                }
                                ))
                            }
                            )).catch((function(t) {
                                e.showError(t.message),
                                e.isPosting = !1
                            }
                            )))
                        } else
                            this.showError("验证码不能为空！");
                    else
                        this.showError("请输入手机号码")
                },
                pwLogin: function() {
                    var e = this
                      , form = this.form;
                    form.phone = this.phone,
                    form.phone ? form.password ? this._sendPostRequest("/api/v1/user/login", form).then((function(t) {
                        0 == t.errCode ? e.afterApiLogin(t) : e.showError(t.msg)
                    }
                    )).catch((function(t) {
                        e.showError(t.message)
                    }
                    )) : this.showError("密码不能为空！") : this.showError("请输入手机号码！")
                },
                afterApiShowLogin: function() {
                    var e = this;
                    e.showRegister = !1,
                    e.showForget = !1,
                    e.setShowLogin(!0)
                },
                afterApiLogin: function(e) {
                    var t = this;
                    e.data && e.data.sessionToken && this.$cookies.set("SESSION", e.data.sessionToken);
                    var n = this;
                    try {
                        n.getUserInfo().then((function(e) {
                            t.$cookies.set("admin", e),
                            n.toast("登录成功！");
                            var r = localStorage.getItem("homePageRedirectUrl");
                            "home" === t.$route.name && r ? h.k.investmentUrl().then((function(e) {
                                var t = e.data || location.origin
                                  , n = new URL(t).searchParams.get("token") || "";
                                if (n)
                                    try {
                                        var o = new URL(r);
                                        o.searchParams.set("token", n),
                                        r = o.toString(),
                                        window.location.replace(r)
                                    } catch (e) {}
                                else
                                    location.replace("/aiResearch")
                            }
                            )) : n.isWx ? n.$router.replace("/") : location.reload()
                        }
                        ))
                    } catch (e) {
                        this.showError(e.message)
                    }
                },
                showCountryList: function() {
                    this.codes = !this.codes
                }
            })
        }
          , k = (n(960),
        n(6))
          , component = Object(k.a)(w, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "jc-login"
            }, [r("el-dialog", {
                attrs: {
                    "close-on-click-modal": !1,
                    visible: e.isLogin,
                    width: "452px",
                    top: "8vh"
                },
                on: {
                    "update:visible": function(t) {
                        e.isLogin = t
                    },
                    close: e.closeLoginDialog
                }
            }, [r("div", {
                staticClass: "logo-icon"
            }, [r("img", {
                attrs: {
                    src: n(320)
                }
            })]), e._v(" "), r("div", {
                staticClass: "tabs-box"
            }, [r("el-tabs", {
                on: {
                    "tab-click": e.tabClick
                },
                model: {
                    value: e.activeName,
                    callback: function(t) {
                        e.activeName = t
                    },
                    expression: "activeName"
                }
            }, [r("el-tab-pane", {
                attrs: {
                    label: "手机快捷登录",
                    name: "phone"
                }
            }, [r("div", {
                staticClass: "login-row straight-line"
            }, [r("div", {
                staticClass: "areaCode-box lf"
            }, [r("div", {
                staticClass: "code-number",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.showCountryList.apply(null, arguments)
                    }
                }
            }, [e._v("\n                " + e._s(e.smsForm.country_code) + "\n                "), r("img", {
                staticClass: "icon-dw",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_arrow_d@2x-.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), e.codes ? r("div", {
                staticClass: "areaCode four-line"
            }, [r("ul", {
                staticClass: "pz"
            }, e._l(e.countryList, (function(t, i) {
                return r("li", {
                    key: i,
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            e.changeCountry(t.name, t.code)
                        }
                    }
                }, [e._v("\n                    " + e._s(t.name) + " " + e._s(t.code) + "\n                  ")])
            }
            )), 0)]) : e._e()]), e._v(" "), r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.phone,
                    expression: "phone"
                }],
                attrs: {
                    autocomplete: "new-password",
                    type: "text",
                    name: "phone",
                    placeholder: "请输入手机号"
                },
                domProps: {
                    value: e.phone
                },
                on: {
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.smsLogin.apply(null, arguments)
                    },
                    input: function(t) {
                        t.target.composing || (e.phone = t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "login-row straight-line"
            }, [r("div", {
                staticClass: "code-text rf",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.sendSMSCodes.apply(null, arguments)
                    }
                }
            }, [e._v("\n              " + e._s(e.issendyzm ? "获取验证码" : "已发送" + e.smsCount + "s") + "\n            ")]), e._v(" "), r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.smsCode,
                    expression: "smsCode"
                }],
                attrs: {
                    type: "text",
                    autocomplete: "new-password",
                    name: "sms",
                    placeholder: "请输入验证码"
                },
                domProps: {
                    value: e.smsCode
                },
                on: {
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.smsLogin.apply(null, arguments)
                    },
                    input: function(t) {
                        t.target.composing || (e.smsCode = t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "pt5 fs16-bold el-pagination click",
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.showRegister = !0,
                        e.setEvent("Event_LogIn_SignUp")
                    }
                }
            }, [e._v("\n            快速注册\n          ")]), e._v(" "), r("el-button", {
                staticClass: "el-button2",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.smsLogin()
                    }
                }
            }, [e._v("登录")])], 1), e._v(" "), r("el-tab-pane", {
                attrs: {
                    label: "账号密码登录",
                    name: "accounts"
                }
            }, [r("div", {
                staticClass: "login-row straight-line"
            }, [r("div", {
                staticClass: "areaCode-box lf"
            }, [r("div", {
                staticClass: "code-number",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.showCountryList.apply(null, arguments)
                    }
                }
            }, [e._v("\n                " + e._s(e.smsForm.country_code) + "\n                "), r("img", {
                staticClass: "icon-dw",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_arrow_d@2x-.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), e.codes ? r("div", {
                staticClass: "areaCode four-line"
            }, [r("ul", {
                staticClass: "pz"
            }, e._l(e.countryList, (function(t, i) {
                return r("li", {
                    key: i,
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            e.changeCountry(t.name, t.code)
                        }
                    }
                }, [e._v("\n                    " + e._s(t.name) + " " + e._s(t.code) + "\n                  ")])
            }
            )), 0)]) : e._e()]), e._v(" "), r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.phone,
                    expression: "phone"
                }],
                attrs: {
                    type: "text",
                    placeholder: "请输入手机号",
                    name: "phone",
                    autocomplete: "new-password"
                },
                domProps: {
                    value: e.phone
                },
                on: {
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.pwLogin.apply(null, arguments)
                    },
                    input: function(t) {
                        t.target.composing || (e.phone = t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "login-row straight-line"
            }, [r("div", {
                staticClass: "input-box"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.form.password,
                    expression: "form.password"
                }],
                attrs: {
                    name: "password",
                    autocomplete: "new-password",
                    type: "password",
                    placeholder: "请输入密码"
                },
                domProps: {
                    value: e.form.password
                },
                on: {
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.pwLogin.apply(null, arguments)
                    },
                    input: function(t) {
                        t.target.composing || e.$set(e.form, "password", t.target.value)
                    }
                }
            })])]), e._v(" "), r("div", {
                staticClass: "forgetpwd tr",
                on: {
                    click: function(t) {
                        e.showForget = !0
                    }
                }
            }, [r("a", {
                staticClass: "fs16-bold-grey click"
            }, [e._v("忘记密码")])]), e._v(" "), r("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.pwLogin()
                    }
                }
            }, [e._v("登录")])], 1)], 1)], 1), e._v(" "), r("div", {
                staticClass: "third-party"
            }, [r("div", {
                staticClass: "fs13"
            }, [e._v("第三方账号登录")]), e._v(" "), r("div", {
                staticClass: "wxIcon",
                on: {
                    click: e.wxLogin
                }
            })]), e._v(" "), r("div", {
                staticClass: "agreement"
            }, [e._v("\n      注册或登录即代表同意\n      "), r("a", {
                staticClass: "click",
                attrs: {
                    href: e.baseURL + "/protocol/service",
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.setEvent("Event_App_ServiceAgreement")
                    }
                }
            }, [e._v("韭研公社服务协议")]), e._v("&\n      "), r("a", {
                staticClass: "click",
                attrs: {
                    href: e.baseURL + "/protocol/privacy",
                    target: "_blank"
                }
            }, [e._v("韭研公社隐私政策")])])]), e._v(" "), e.showRegister ? r("v-register", {
                attrs: {
                    isWx: e.isWx
                },
                on: {
                    submit: e.afterApiShowLogin
                }
            }) : e._e(), e._v(" "), e.showForget ? r("forget-password", {
                attrs: {
                    phone: e.phone
                },
                on: {
                    submit: e.afterApiShowLogin,
                    close: function(t) {
                        e.showForget = !1
                    }
                }
            }) : e._e()], 1)
        }
        ), [], !1, null, "3f2af55d", null);
        t.default = component.exports
    },
    35: function(e, t, n) {
        "use strict";
        n.r(t);
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = n(301)
          , c = (n(57),
        n(0))
          , l = (n(38),
        n(40))
          , d = n(170)
          , m = n(7)
          , h = n(223);
        function f(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        var v = {
            mixins: [l.a, d.a],
            components: {
                EwmShareWechat: h.default,
                JcBanner: o.default
            },
            data: function() {
                return {
                    BASE_URL: c.c.url,
                    apiUrl: c.c.baseURL,
                    rankTab: (new Date).getHours() % 3,
                    announcementList: [],
                    wechatDialog: !1,
                    wordCould: "",
                    timeArticle: []
                }
            },
            computed: function(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }
                    ))
                }
                return e
            }({}, Object(m.c)(["rankData"])),
            mounted: function() {
                this.getTimeArticle(),
                this.getWordCloud(),
                this.getAnnouncementList()
            },
            methods: {
                shareWordCloud: function() {
                    this.wechatDialog = !0,
                    this.setEvent("Event_Search_ShareWordCloudImage")
                },
                getDay: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date
                      , t = new Date(e).getDay()
                      , n = "";
                    switch (t) {
                    case 0:
                        n = "星期日";
                        break;
                    case 1:
                        n = "星期一";
                        break;
                    case 2:
                        n = "星期二";
                        break;
                    case 3:
                        n = "星期三";
                        break;
                    case 4:
                        n = "星期四";
                        break;
                    case 5:
                        n = "星期五";
                        break;
                    case 6:
                        n = "星期六"
                    }
                    return n
                },
                toTimeArticle: function() {
                    this.$router.push("/timeline")
                },
                getTimeArticle: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/timeline/news", {
                        limit: 10
                    }).then((function(t) {
                        console.log(t, "article-time"),
                        e.timeArticle = t.data
                    }
                    )).catch((function(e) {}
                    ))
                },
                clickEvent: function(e, data) {
                    switch (e) {
                    case "product":
                        this.toProduct();
                        break;
                    case "article":
                        window.open("https://www.jiuyangongshe.com/a/dwp9z6qgnj");
                        break;
                    case "openAccount":
                        window.open("/open-account")
                    }
                },
                toProduct: function() {
                    !!this.$store.state.admin ? (document.documentElement.scrollTop = 0,
                    this.$router.push({
                        path: "/product"
                    })) : this.$store.commit("setShowLogin", !0)
                },
                openWordCould: function() {
                    this.$cookies.set("iframesrc", this.wordCould),
                    window.open("/jc/f")
                },
                getWordCloud: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/search/word-cloud").then((function(t) {
                        e.wordCould = t.data
                    }
                    )).catch((function(e) {}
                    ))
                },
                getAnnouncementList: function() {
                    var e = this;
                    this._sendPostRequest("/api/v2/article/announcement").then((function(t) {
                        e.announcementList = t.data
                    }
                    )).catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                toArticlePage: function(e) {
                    this.toArticleDetail(e, !1)
                },
                openDown: function() {
                    window.open(this.apiUrl + "/download-app")
                },
                eventMineJump: function(e) {
                    this.$cookies.set("minActive", "article"),
                    this.$store.state.admin ? this.$router.push(e) : this.$store.commit("setShowLogin", !0)
                },
                handlerRouterChange: function(e, t) {
                    this.$cookies.set("minActive", e),
                    this.$router.push(t)
                },
                eventJump: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.$store.state.admin || t ? window.open(e) : this.$store.commit("setShowLogin", !0)
                }
            }
        }
          , _ = (n(950),
        n(6))
          , component = Object(_.a)(v, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("el-aside", {
                staticClass: "noneSelect"
            }, [r("div", {
                staticClass: " asideStyle mb14"
            }, [r("div", {
                staticClass: "fs18-bold"
            }, [e._v("发布")]), e._v(" "), r("ul", {
                staticClass: "release-link"
            }, [r("li", {
                staticClass: "w3"
            }, [r("a", {
                staticClass: "click inlineBlock",
                on: {
                    click: function(t) {
                        e.eventJump("/article/edit?type=long"),
                        e.setEvent("Event_Publish_LongText")
                    }
                }
            }, [r("div", {
                staticClass: "release-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_article_pulish%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs14"
            }, [e._v("发长文")])])]), e._v(" "), r("li", {
                staticClass: "w3",
                on: {
                    click: function(t) {
                        e.eventJump("/article/edit?type=documents"),
                        e.setEvent("Event_Publish_File")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "release-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_document_pulish copy%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs14"
            }, [e._v("发文档")])])]), e._v(" "), r("li", {
                staticClass: "w3",
                on: {
                    click: function(t) {
                        e.eventJump("/article/edit?type=link"),
                        e.setEvent("Event_Publish_Link")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "release-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_link_pulish copy%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs14"
            }, [e._v("发链接")])])]), e._v(" "), r("li", {
                staticClass: "w3",
                on: {
                    click: function(t) {
                        e.eventJump("/article/edit?type=ask"),
                        e.setEvent("Event_Publish_OfferReward")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "release-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_xuanshang_pulish%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs14"
            }, [e._v("提问")])])]), e._v(" "), r("li", {
                staticClass: "w3",
                on: {
                    click: function(t) {
                        e.eventJump("/article/edit?type=garden"),
                        e.setEvent("Event_Publish_ShortArticle")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "release-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_houhuayuan_pulish%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs14"
            }, [e._v("发短文")])])]), e._v(" "), r("li", {
                staticClass: "w3",
                on: {
                    click: function(t) {
                        e.eventJump("/article/edit?type=live"),
                        e.setEvent("Event_Publish_LivingArea")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "release-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_live_pulish%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs14"
            }, [e._v("发生活")])])])])]), e._v(" "), r("div", {
                staticClass: "asideStyle mb14"
            }, [r("div", {
                staticClass: "fs18-bold"
            }, [e._v("我发布的帖子")]), e._v(" "), r("ul", {
                staticClass: "release-link"
            }, [r("li", {
                staticClass: "w5",
                on: {
                    click: function(t) {
                        return e.eventMineJump("/mine/article?type=0")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "post-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_quanbu%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs13"
            }, [e._v("全部")])])]), e._v(" "), r("li", {
                staticClass: "w5",
                on: {
                    click: function(t) {
                        return e.eventMineJump("/mine/article?type=1")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "post-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_yuanchuang%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs13"
            }, [e._v("原发")])])]), e._v(" "), r("li", {
                staticClass: "w5",
                on: {
                    click: function(t) {
                        return e.eventMineJump("/mine/article?type=2")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "post-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_zhuanfa%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs13"
            }, [e._v("转发")])])]), e._v(" "), r("li", {
                staticClass: "w5",
                on: {
                    click: function(t) {
                        return e.eventMineJump("/mine/article?type=3")
                    }
                }
            }, [r("a", {
                staticClass: "click inlineBlock"
            }, [r("div", {
                staticClass: "post-icon"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_houhuayuan%402x.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "fs13"
            }, [e._v("短文")])])])])]), e._v(" "), r("div", {
                staticClass: "asideStyle mb14 newAsideStyle"
            }, [r("div", {
                staticClass: "code lf"
            }, [r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/downLoad.png?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "textN"
            }, [r("div", {
                staticClass: "fs18-bold"
            }, [e._v("下载APP")]), e._v(" "), r("div", {
                staticClass: "fs13-grey mt10"
            }, [e._v("扫描二维码，了解更多内容")])])]), e._v(" "), r("div", {
                staticClass: "asideStyle mb14 newAsideStyle"
            }, [r("div", {
                staticClass: "code lf"
            }, [r("img", {
                staticClass: "word-cloud",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/care-hz.jpg?x-oss-process=image/resize,p_50"
                }
            })]), e._v(" "), r("div", {
                staticClass: "textN"
            }, [r("div", {
                staticClass: "fs18-bold"
            }, [e._v("关注公众号")]), e._v(" "), r("div", {
                staticClass: "fs13-grey mt10"
            }, [e._v("微信扫一扫，关注公众号")])])]), e._v(" "), e.announcementList && e.announcementList.length > 0 ? r("div", {
                staticClass: "asideStyle mb14"
            }, e._l(e.announcementList, (function(t, n) {
                return r("div", {
                    key: n,
                    staticClass: "announcement-item"
                }, [r("a", {
                    attrs: {
                        href: t.link,
                        target: "_blank"
                    }
                }, [e._v(e._s(t.title))])])
            }
            )), 0) : e._e(), e._v(" "), r("div", {
                staticClass: "asideStyle mb14"
            }, [r("div", {
                staticClass: "title flex-between hsh-flex-upDown"
            }, [r("div", {
                staticClass: "fs18-bold"
            }, [e._v(e._s(e.formatDate(new Date, 6, "MM月dd日")) + "热点词云图")]), e._v(" "), r("div", {
                staticClass: "f-12 color-888 click",
                on: {
                    click: e.shareWordCloud
                }
            }, [e._v("\n        转发词云图"), r("i", {
                staticClass: "el-icon-arrow-right"
            })])]), e._v(" "), r("img", {
                staticClass: "cursor",
                attrs: {
                    src: e.wordCould,
                    alt: ""
                },
                on: {
                    click: e.openWordCould
                }
            })]), e._v(" "), r("div", {
                staticClass: "product-banner mb14 click"
            }, [r("jc-banner", {
                on: {
                    clickEvent: e.clickEvent
                }
            })], 1), e._v(" "), r("div", {
                staticClass: "asideStyle mb14"
            }, [r("div", {
                staticClass: "time-top hsh-flex"
            }, [r("div", {
                staticClass: "fs18-bold mr10"
            }, [e._v("时间轴")]), e._v(" "), r("div", {
                staticClass: "f-12 mr5",
                staticStyle: {
                    "margin-top": "3px"
                }
            }, [e._v(e._s(e.formatDate(new Date, 18, "yyyy.MM.dd")))]), e._v(" "), r("div", {
                staticClass: "f-12",
                staticStyle: {
                    "margin-top": "3px"
                }
            }, [e._v("\n        " + e._s(e.getDay()) + "\n      ")]), e._v(" "), r("div", {
                staticClass: "to-time-article",
                on: {
                    click: e.toTimeArticle
                }
            }, [r("i", {
                staticClass: "el-icon-arrow-right"
            })])]), e._v(" "), r("div", {
                staticClass: "time-list"
            }, e._l(e.timeArticle, (function(time, t) {
                return r("div", {
                    key: t + "time",
                    staticClass: "day"
                }, [r("div", {
                    staticClass: "time mb10"
                }, [e._v(e._s(time.date) + e._s(e.getDay(time.date)))]), e._v(" "), r("div", {
                    staticClass: "time-article-list"
                }, e._l(time.list, (function(t, i) {
                    return r("div", {
                        key: i + "article",
                        staticClass: "time-article-item hsh-flex mb10"
                    }, [r("span", {
                        staticClass: "tag"
                    }, [e._v("事件")]), e._v(" "), r("a", {
                        attrs: {
                            target: "_blank",
                            href: "/timeline/" + t.article_id
                        }
                    }, [r("span", [e._v(e._s(t.title))])])])
                }
                )), 0)])
            }
            )), 0)]), e._v(" "), e.rankData && e.rankData.hot_search_list && e.rankData.hot_search_list.length > 0 ? r("div", {
                staticClass: "asideStyle mb14"
            }, [r("div", {
                staticClass: "fs18-bold"
            }, [e._v("公社热榜")]), e._v(" "), r("div", {
                staticClass: "tab"
            }, [r("div", {
                staticClass: "tab-top"
            }, [r("div", {
                staticClass: "tab-item",
                class: 0 == e.rankTab ? "active" : "",
                on: {
                    click: function(t) {
                        e.rankTab = 0
                    }
                }
            }, [e._v("\n          搜索关键字\n        ")]), e._v(" "), r("div", {
                staticClass: "tab-item",
                class: 1 == e.rankTab ? "active" : "",
                on: {
                    click: function(t) {
                        e.rankTab = 1
                    }
                }
            }, [e._v("\n          月度热帖\n        ")]), e._v(" "), r("div", {
                staticClass: "tab-item",
                class: 2 == e.rankTab ? "active" : "",
                on: {
                    click: function(t) {
                        e.rankTab = 2
                    }
                }
            }, [e._v("\n          工分十日榜\n        ")])]), e._v(" "), r("div", {
                staticClass: "tab-content"
            }, [e._l(e.rankData.hot_search_list, (function(t, n) {
                return [r("nuxt-link", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 == e.rankTab,
                        expression: "rankTab == 0"
                    }],
                    key: "search" + n,
                    staticClass: "item",
                    attrs: {
                        target: "_blank",
                        to: "/search/new?k=" + t.keyword
                    }
                }, [r("div", {
                    staticClass: "num"
                }, [e._v(e._s(n + 1))]), e._v(" "), r("div", {
                    staticClass: "item-content"
                }, [e._v("\n              " + e._s(t.keyword) + "\n            ")])])]
            }
            )), e._v(" "), e._l(e.rankData.hot_article_list, (function(t, n) {
                return [r("nuxt-link", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == e.rankTab,
                        expression: "rankTab == 1"
                    }],
                    key: "article" + n,
                    staticClass: "item",
                    attrs: {
                        target: "_blank",
                        to: e.isMove ? "/h5/article/" + t.article_id : "/a/" + t.article_id
                    }
                }, [r("div", {
                    staticClass: "num"
                }, [e._v(e._s(n + 1))]), e._v(" "), r("div", {
                    staticClass: "item-content"
                }, [e._v("\n              " + e._s(t.title) + "\n            ")])])]
            }
            )), e._v(" "), e._l(e.rankData.hot_user_list, (function(t, n) {
                return [r("nuxt-link", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 == e.rankTab,
                        expression: "rankTab == 2"
                    }],
                    key: "user" + n,
                    staticClass: "item",
                    attrs: {
                        target: "_blank",
                        to: "/u/" + t.user_id
                    }
                }, [r("div", {
                    staticClass: "num"
                }, [e._v(e._s(n + 1))]), e._v(" "), r("div", {
                    staticClass: "item-user"
                }, [r("div", {
                    staticClass: "user-info"
                }, [r("img", {
                    attrs: {
                        src: t.avatar + "?x-oss-process=image/resize,w_40,p_50",
                        alt: ""
                    }
                }), e._v(" "), r("span", [e._v(e._s(t.nickname))])]), e._v(" "), r("div", {
                    staticClass: "sum-integral"
                }, [r("div", {
                    staticClass: "icon integral"
                }), e._v(" "), r("span", [e._v(e._s(t.sum_integral ? t.sum_integral.toFixed(2) : 0))])])])])]
            }
            ))], 2)])]) : e._e(), e._v(" "), r("div", {
                staticClass: "mt16"
            }, [r("div", {
                staticClass: "parent"
            }, [r("a", {
                staticClass: "fs11-bold click mr18 lf",
                attrs: {
                    href: e.BASE_URL + "/protocol/community",
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.setEvent("Event_App_CommunityRules")
                    }
                }
            }, [e._v("社区规则")]), e._v(" "), r("a", {
                staticClass: "fs11-bold click mr18 lf",
                attrs: {
                    href: e.BASE_URL + "/protocol/service",
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.setEvent("Event_App_ServiceAgreement")
                    }
                }
            }, [e._v("服务协议")]), e._v(" "), r("a", {
                staticClass: "fs11-bold click mr18 lf",
                attrs: {
                    href: e.BASE_URL + "/protocol/privacy",
                    target: "_blank"
                }
            }, [e._v("隐私政策")])]), e._v(" "), r("a", {
                staticClass: "click mt5 fs11-bold",
                attrs: {
                    href: "https://beian.miit.gov.cn/#/Integrated/index",
                    target: "_blank"
                }
            }, [e._v("沪ICP备20009443号")]), e._v(" "), r("img", {
                staticClass: "ICP-icon",
                attrs: {
                    src: n(942)
                }
            }), r("a", {
                staticClass: "click mt5 fs11-bold",
                attrs: {
                    href: "https://beian.mps.gov.cn/#/query/webSearch?recordcode=31011502401211",
                    rel: "noreferrer",
                    target: "_blank"
                }
            }, [e._v("沪公网安备31011502401211")]), e._v(" "), r("div", {
                staticClass: "mt5 fs11-bold"
            }, [e._v("© 2020 上海韭研信息科技有限公司")]), e._v(" "), r("div", {
                staticClass: "parent mt5"
            }, [r("div", {
                staticClass: "fs11-bold click mr18 lf",
                on: {
                    click: function(t) {
                        return e.handlerRouterChange("about", "/about/jc")
                    }
                }
            }, [e._v("\n        关于韭研公社\n      ")]), e._v(" "), r("div", {
                staticClass: "fs11-bold click mr18 lf",
                on: {
                    click: function(t) {
                        return e.eventJump("/a/jianyifankui", !0)
                    }
                }
            }, [e._v("\n        问题反馈\n      ")]), e._v(" "), r("div", {
                staticClass: "fs11-bold click mr18 lf"
            }, [e._v("\n        有问题请联系"), r("span", {
                on: {
                    click: function(t) {
                        return e.eventJump("/notices/private?u=1")
                    }
                }
            }, [e._v("@韭菜团子")])])]), e._v(" "), r("div", {
                staticClass: "mt5 fs11-bold lh20"
            }, [e._v("\n      公社愿景：韭研公社，原韭菜公社，投资干货最多的共享社群，汇聚全网最深度的基本面研究，消弭个人滞后机构的逻辑鸿沟。\n    ")]), e._v(" "), r("div", {
                staticClass: "mt5 fs11-bold lh20"
            }, [e._v("\n      风险提示：韭研公社里任何网友的发言，都有其特定立场，均不构成投资建议，请投资者独立审慎决策。\n    ")])]), e._v(" "), e.wechatDialog ? r("ewm-share-wechat", {
                attrs: {
                    type: "word-cloud"
                },
                on: {
                    close: function(t) {
                        e.wechatDialog = !1
                    }
                }
            }) : e._e()], 1)
        }
        ), [], !1, null, "0be041ba", null);
        t.default = component.exports;
        installComponents(component, {
            JcBanner: n(301).default
        })
    },
    36: function(e, t, n) {
        "use strict";
        n.r(t);
        n(12),
        n(14),
        n(15),
        n(16);
        var r = n(126)
          , o = n(48)
          , c = n(5)
          , l = (n(227),
        n(31),
        n(608),
        n(71),
        n(609),
        n(610),
        n(611),
        n(612),
        n(613),
        n(614),
        n(615),
        n(616),
        n(617),
        n(618),
        n(619),
        n(620),
        n(621),
        n(622),
        n(623),
        n(624),
        n(80),
        n(55),
        n(11),
        n(10),
        n(954),
        n(146),
        n(54),
        n(318),
        n(96),
        n(23),
        n(56),
        n(303))
          , d = n(40)
          , m = n(169)
          , h = n(38)
          , f = n(7)
          , v = n(0);
        function _(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? _(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var w = {
            name: "Header",
            mixins: [d.a],
            data: function() {
                return {
                    clickCount: 0,
                    isIndex: !0,
                    showForget: !1,
                    noticeList: [],
                    messageList: [],
                    active: "社群",
                    input: "",
                    showNotice: !1,
                    showMessage: !1,
                    showSystem: !1,
                    phone: "",
                    nowTime: 1,
                    timer: null,
                    publishList: [{
                        name: "发长文",
                        id: 1,
                        type: "long"
                    }, {
                        id: 2,
                        name: "发文档",
                        type: "documents"
                    }, {
                        id: 3,
                        name: "发链接",
                        type: "link"
                    }, {
                        id: 4,
                        name: "提问",
                        type: "ask"
                    }, {
                        id: 5,
                        name: "短文",
                        type: "garden"
                    }, {
                        id: 5,
                        name: "发生活",
                        type: "live"
                    }],
                    config: v.c,
                    investmentUrl: "",
                    toolsNavDropdownVisible: !1
                }
            },
            computed: y(y({}, Object(f.e)({
                messageCounts: function(e) {
                    return e.messageCounts
                },
                noticeCounts: function(e) {
                    return e.noticeCounts
                }
            })), {}, {
                isToolsMenuNoticeActive: function() {
                    return this.$route.path.startsWith("/announcement") && "action" !== this.$route.query.tab
                },
                isToolsMenuInteractionActive: function() {
                    return "/announcement" === this.$route.path && "action" === this.$route.query.tab
                },
                isToolsMenuIndustryActive: function() {
                    return this.$route.path.startsWith("/industryChain")
                },
                isToolsMenuTimelineActive: function() {
                    return this.$route.path.startsWith("/timeline")
                },
                isToolsNavActive: function() {
                    return this.isToolsMenuNoticeActive || this.isToolsMenuInteractionActive || this.isToolsMenuIndustryActive || this.isToolsMenuTimelineActive
                },
                toolsNavLabel: function() {
                    return this.isToolsMenuNoticeActive ? "搜公告" : this.isToolsMenuInteractionActive ? "搜互动" : this.isToolsMenuTimelineActive ? "时间轴" : "产业库"
                },
                isMine: function() {
                    return function(e) {
                        return (this.user ? this.user.user_id : "") === e
                    }
                }
            }),
            components: {
                ResetPassword: l.default
            },
            watch: {
                "$route.meta": {
                    handler: function(e, t) {
                        this.active = e.title,
                        this.isIndex = e.title.indexOf("列表") > -1,
                        "搜素帖子" != e.title && (this.input = "")
                    }
                },
                $route: {
                    handler: function(e, t) {
                        var time = $nuxt.$cookies.get("time");
                        this.nowTime = time
                    }
                },
                user: {
                    handler: function(e, t) {
                        0 !== this.getObjectDiff(t, e).length && (this.getCounts(),
                        this.getMessages(),
                        this.getNotices())
                    }
                }
            },
            created: function() {
                this.active = this.$route.meta.title
            },
            mounted: function() {
                var e = this
                  , time = $nuxt.$cookies.get("time") || 1;
                this.nowTime = time;
                var t = this.$route.query.k;
                t && (this.input = t),
                this.user && (this.getCounts(),
                this.getMessages(),
                this.getNotices()),
                h.k.investmentUrl().then((function(t) {
                    var n = (t.data,
                    t.data);
                    n && (e.investmentUrl = n)
                }
                ))
            },
            methods: y(y(y({}, Object(f.d)({
                setShowLogin: "setShowLogin"
            })), Object(f.b)(["loginOut", "getCounts"])), {}, {
                getObjectDiff: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , path = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                      , c = []
                      , l = null !== t && "object" === Object(o.a)(t)
                      , d = null !== n && "object" === Object(o.a)(n);
                    if (!l || !d)
                        return t !== n && c.push({
                            path: path || "root",
                            oldValue: t,
                            newValue: n
                        }),
                        c;
                    var m = new Set([].concat(Object(r.a)(Object.keys(t)), Object(r.a)(Object.keys(n))));
                    return m.forEach((function(l) {
                        var d = path ? Number.isInteger(Number(l)) ? "".concat(path, "[").concat(l, "]") : "".concat(path, ".").concat(l) : l
                          , m = t[l]
                          , h = n[l]
                          , f = null !== m && "object" === Object(o.a)(m)
                          , v = null !== h && "object" === Object(o.a)(h);
                        f && v ? c.push.apply(c, Object(r.a)(e.getObjectDiff(m, h, d))) : m !== h && c.push({
                            path: d,
                            oldValue: m,
                            newValue: h
                        })
                    }
                    )),
                    c
                },
                toAction: function() {
                    this.user ? this.$router.push("/action") : this.$store.commit("setShowLogin", !0)
                },
                toToolsIndustry: function() {
                    this.navClick(),
                    this.setEvent("Event_Tools_Industry"),
                    this.$route.path.startsWith("/industryChain") || this.$router.push("/industryChain")
                },
                onToolsNavVisibleChange: function(e) {
                    this.toolsNavDropdownVisible = e
                },
                toNotice: function() {
                    this.openNewPage("/agree/me?type=1", !1, !1)
                },
                toMinePage: function() {
                    this.setEvent("Event_Tab_Mine"),
                    this.$router.push("/mine/article")
                },
                toPage: function(e) {
                    1 != e ? 2 != e ? 3 != e ? 4 != e ? 5 != e || this.setEvent("Event_Publish_LivingArea") : this.setEvent("Event_Publish_OfferReward") : this.setEvent("Event_Publish_Link") : this.setEvent("Event_Publish_File") : this.setEvent("Event_Publish_LongText")
                },
                toActive: function(e) {
                    this.isMine(e.to_user_id) ? this.$router.push("/notices/private?u=".concat(e.from_user_id)) : this.$router.push("/notices/private?u=".concat(e.to_user_id))
                },
                afterRestPassword: function(e) {
                    this.showForget = !1,
                    this.loginOut(),
                    this.messageList = [],
                    this.noticeList = [],
                    this.setShowLogin(!0)
                },
                clearInput: function() {
                    this.input = ""
                },
                toIndex: function() {
                    this.$router.push("/action"),
                    this.input = "",
                    this.active = "异动",
                    this.$cookies.set("active", "异动")
                },
                querySearchAsync: function(e, t) {
                    var n = this;
                    if (this.user) {
                        var r = {};
                        e ? (r = {
                            keyword: e,
                            limit: 3,
                            start: 1,
                            exact: 0
                        },
                        this._sendPostRequest("/api/v1/stock/search", r).then((function(e) {
                            n.afterList(e, t),
                            console.log()
                        }
                        )).catch((function(e) {
                            console.log(e)
                        }
                        ))) : (r = {
                            is_add: 1,
                            limit: 3,
                            start: 1,
                            keyword: ""
                        },
                        this._sendPostRequest("/api/v1/stock/user/page", r).then((function(e) {
                            n.afterList(e, t)
                        }
                        )).catch((function(e) {
                            console.log(e)
                        }
                        )))
                    } else {
                        var o = [];
                        o.push({
                            id: "股票",
                            value: "股票",
                            type: "stock"
                        }),
                        o.push({
                            id: "1",
                            value: "全部",
                            type: "1"
                        }),
                        o.push({
                            id: "2",
                            value: "标题标签",
                            type: "2"
                        }),
                        o.push({
                            id: "8",
                            value: "纪要",
                            type: "8"
                        }),
                        o.push({
                            id: "5",
                            value: "异动",
                            type: "5"
                        }),
                        o.push({
                            id: "7",
                            value: "红宝书",
                            type: "product"
                        }),
                        o.push({
                            id: "8",
                            value: "公告",
                            type: "announcement"
                        }),
                        o.push({
                            id: "user",
                            value: "用户",
                            type: "user"
                        }),
                        t(o)
                    }
                },
                afterList: function(e, t) {
                    var n = []
                      , r = [];
                    n.push({
                        id: "股票",
                        value: "股票",
                        type: "stock"
                    }),
                    e.data.result.forEach((function(e) {
                        r.push({
                            id: e.stock_id,
                            value: e.name,
                            code: e.code,
                            type: "item"
                        }),
                        n.push({
                            id: e.stock_id,
                            value: e.name,
                            code: e.code,
                            type: "item"
                        })
                    }
                    )),
                    this.searchStockList = r,
                    n.push({
                        id: "1",
                        value: "全部",
                        type: "1"
                    }),
                    n.push({
                        id: "2",
                        value: "标题标签",
                        type: "2"
                    }),
                    n.push({
                        id: "8",
                        value: "纪要",
                        type: "8"
                    }),
                    n.push({
                        id: "5",
                        value: "异动",
                        type: "5"
                    }),
                    n.push({
                        id: "7",
                        value: "红宝书",
                        type: "product"
                    }),
                    n.push({
                        id: "8",
                        value: "公告",
                        type: "announcement"
                    }),
                    n.push({
                        id: "user",
                        value: "用户",
                        type: "user"
                    }),
                    t(n)
                },
                toSearch: function(e) {
                    var t = encodeURIComponent(this.input);
                    if (t) {
                        if ("" === e && this.searchStockList && 1 == this.searchStockList.length && (e = "stock",
                        t = this.searchStockList[0].value),
                        "stock" == e && this.setKeyword(this.input),
                        this.input = "",
                        "announcement" !== e)
                            return e ? ("stock" === e && this.setEvent("Event_Search_Stock"),
                            "user" === e && this.setEvent("Event_Search_User"),
                            "announcement" === e && this.setEvent("Event_Search_Notice"),
                            "product" === e && this.setEvent("Event_Search_RedBook"),
                            "2" == e && this.setEvent("Event_Search_TitleAndTag"),
                            "8" == e && this.setEvent("Event_Search_Summary"),
                            "5" == e && this.setEvent("Event_Search_Fluctuations"),
                            "1" == e && this.setEvent("Event_Search_All"),
                            window.open("/search/new?k=".concat(t, "&type=").concat(e)),
                            !1) : (this.setEvent("Event_Search_Normal"),
                            window.open("/search/new?k=".concat(t)),
                            !1);
                        window.open("/announcement")
                    }
                },
                addKeyword: function(e) {},
                setKeyword: function(e) {
                    if ("" !== e) {
                        var t = this.formatDate(new Date, 10)
                          , n = JSON.parse(localStorage.getItem("keyword") || "{}");
                        if (n.date && "Invalid Date" != new Date(n.date) && this.formatDate(new Date(n.date), 10) == t)
                            -1 == n.keywordList.findIndex((function(t) {
                                return t == e
                            }
                            )) && (n.keywordList.push(e),
                            localStorage.setItem("keyword", JSON.stringify(n)));
                        else
                            n.date = t,
                            n.keywordList = [e],
                            localStorage.setItem("keyword", JSON.stringify(n))
                    }
                },
                handleSelectSearch: function(e) {
                    var t = encodeURIComponent(this.input);
                    if (this.input = "",
                    "item" != e.type)
                        return !1;
                    this.openNewPage("/search/".concat(e.id, "?type=1&k=").concat(t))
                },
                noticeEmpty: function() {
                    var e = this;
                    this.setEvent("Event_Message_NoticeAllRead"),
                    this._sendPostRequest("/api/v1/user/notice/empty").then((function(t) {
                        e.getCounts().then((function(t) {
                            e.noticeList.map((function(e) {
                                e.unread_count = 0
                            }
                            ))
                        }
                        ))
                    }
                    )).catch((function(t) {
                        e.showError(t.message)
                    }
                    ))
                },
                noticClick: function(e, i) {
                    1 == e && this.setEvent("Event_Message_MyFansNotice"),
                    3 == e && this.setEvent("Event_Message_CommentMeNotice"),
                    2 == e && this.setEvent("Event_Message_LikeMeNotice"),
                    5 == e && this.setEvent("Event_Message_IncomeNotice"),
                    6 == e && this.setEvent("Event_Message_SystemNotice"),
                    this.noticeList[i].unread_count = 0,
                    this.getCounts(),
                    this.$router.push("/agree/me?type=".concat(e, "&from=message"))
                },
                navClick: function(e, t) {
                    document.body.scrollTop = 0,
                    document.documentElement.scrollTop = 0
                },
                getNotices: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/user/notice").then((function(t) {
                        e.noticeList = t.data.map((function(e) {
                            return e.content = e.content.replace(/<[^<>]+>/g, ""),
                            e
                        }
                        ))
                    }
                    )).catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                getMessages: function() {
                    var e = this;
                    this._sendPostRequest("/api/v1/user/session", {
                        limit: 30,
                        start: 1,
                        user_id: ""
                    }).then((function(t) {
                        e.messageList = t.data.result.map((function(e) {
                            return e.latest_message && (e.latest_message.content = e.latest_message.content.replace(/<[^<>]+>/g, "")),
                            e
                        }
                        ))
                    }
                    )).catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                onShowSystem: function(e) {
                    this.user && (this.showSystem = "on" == e,
                    this.showMessage = !1,
                    this.showNotice = !1)
                },
                showLoginDialog: function() {
                    this.$store.commit("setShowLogin", !0)
                },
                jcLoginOut: function() {
                    var e = this;
                    this.setEvent("Event_Mine_LogOutSetting"),
                    h.u.logout().then((function(t) {
                        e.onShowSystem("out"),
                        m.a.removeSession(),
                        e.$cookies.remove("admin"),
                        e.$cookies.remove("SESSION"),
                        e.messageList = [],
                        e.noticeList = [],
                        e.$route.meta.requiresLogin && (e.$router.replace("/"),
                        window.scrollTo(0, 0)),
                        e.loginOut()
                    }
                    )).catch((function(t) {
                        e.$cookies.remove("admin"),
                        e.showError(t.message)
                    }
                    ))
                },
                goAiPage: function() {
                    this.$route.path.indexOf("/ai") > -1 || (this.setEvent("Event_Tab_Ai"),
                    window.open("/ai"))
                }
            })
        }
          , k = (n(956),
        n(957),
        n(6))
          , component = Object(k.a)(w, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "jc-header"
            }, [r("div", {
                staticClass: "header-box parent"
            }, [r("div", {
                staticClass: "jc-logo-box parent lf click"
            }, [r("img", {
                staticClass: "jc-logo",
                attrs: {
                    src: n(607),
                    alt: ""
                },
                on: {
                    click: e.toIndex
                }
            })]), e._v(" "), r("div", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        e.navClick(),
                        e.setEvent("Event_Tab_Fluctuations")
                    }
                }
            }, [r("div", {
                staticClass: "menu",
                class: {
                    active: "异动" == e.active
                },
                on: {
                    click: e.toAction
                }
            }, [e._v("异动")])]), e._v(" "), r("div", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        e.navClick(),
                        e.setEvent("Event_Tab_Follow")
                    }
                }
            }, ["/focus" != e.$route.path ? r("nuxt-link", {
                class: {
                    active: "关注" == e.active
                },
                attrs: {
                    to: "/focus"
                }
            }, [e._v("关注")]) : r("a", {
                class: {
                    active: "关注" == e.active
                },
                attrs: {
                    href: "/focus"
                }
            }, [e._v("关注")])], 1), e._v(" "), r("div", {
                staticClass: "li",
                on: {
                    click: function(t) {
                        e.navClick(),
                        e.setEvent("Event_Tab_Community")
                    }
                }
            }, ["/" != e.$route.path && e.$route.path.indexOf(e.config.url + "/study") < 0 && e.$route.path.indexOf(e.config.url + "/square") < 0 && e.$route.path.indexOf(e.config.url + "/live") < 0 ? r("nuxt-link", {
                class: {
                    active: "研究优选" == e.active || e.$route.path.indexOf("/study") > -1 || e.$route.path.indexOf("/square") > -1 || "/product" == e.$route.path
                },
                attrs: {
                    to: 0 == e.nowTime ? "/study_publish" : 1 == e.nowTime ? "/" : 5 == e.nowTime ? "/study_action" : 3 == e.nowTime ? "/study_30" : "/"
                }
            }, [e._v("社群")]) : r("a", {
                class: {
                    active: "研究优选" == e.active || e.$route.path.indexOf("/study") > -1 || e.$route.path.indexOf("/square") > -1
                },
                attrs: {
                    href: e.$route.path
                }
            }, [e._v("社群")])], 1), e._v(" "), r("div", {
                staticClass: "li",
                staticStyle: {
                    width: "68px"
                },
                on: {
                    click: function(t) {
                        return e.setEvent("Event_TradePlan_Enter")
                    }
                }
            }, [r("nuxt-link", {
                class: {
                    active: "交易计划" == e.active
                },
                attrs: {
                    to: "/plan"
                }
            }, [e._v("交易计划")])], 1), e._v(" "), r("div", {
                staticClass: "li li-tools-nav"
            }, [r("el-dropdown", {
                attrs: {
                    trigger: "hover",
                    placement: "bottom",
                    "show-timeout": 0,
                    "hide-timeout": 200,
                    "popper-class": "jc-tools-nav-popper"
                },
                on: {
                    "visible-change": e.onToolsNavVisibleChange
                }
            }, [r("div", {
                staticClass: "tools-nav-trigger-wrap",
                class: {
                    "is-dropdown-open": e.toolsNavDropdownVisible
                },
                on: {
                    click: e.toToolsIndustry
                }
            }, [r("div", {
                staticClass: "tools-nav-trigger menu",
                class: {
                    active: e.isToolsNavActive
                }
            }, [r("span", [e._v(e._s(e.toolsNavLabel))])]), e._v(" "), r("i", {
                staticClass: "el-icon-arrow-down tools-nav-caret fs16-bold"
            })]), e._v(" "), r("el-dropdown-menu", {
                staticClass: "tools-nav-menu",
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [r("el-dropdown-item", {
                staticClass: "tools-nav-menu-item"
            }, [r("nuxt-link", {
                class: {
                    active: e.isToolsMenuNoticeActive
                },
                attrs: {
                    to: "/announcement"
                },
                nativeOn: {
                    click: function(t) {
                        return e.setEvent("Event_Tools_Notice")
                    }
                }
            }, [e._v("搜公告")])], 1), e._v(" "), r("el-dropdown-item", {
                staticClass: "tools-nav-menu-item"
            }, [r("nuxt-link", {
                class: {
                    active: e.isToolsMenuInteractionActive
                },
                attrs: {
                    to: "/announcement?tab=action"
                },
                nativeOn: {
                    click: function(t) {
                        return e.setEvent("Event_Tools_Interaction")
                    }
                }
            }, [e._v("搜互动")])], 1), e._v(" "), r("el-dropdown-item", {
                staticClass: "tools-nav-menu-item"
            }, [r("nuxt-link", {
                class: {
                    active: e.isToolsMenuIndustryActive
                },
                attrs: {
                    to: "/industryChain"
                },
                nativeOn: {
                    click: function(t) {
                        return e.setEvent("Event_Tools_Industry")
                    }
                }
            }, [e._v("产业库")])], 1), e._v(" "), r("el-dropdown-item", {
                staticClass: "tools-nav-menu-item"
            }, [r("nuxt-link", {
                class: {
                    active: e.isToolsMenuTimelineActive
                },
                attrs: {
                    to: "/timeline"
                },
                nativeOn: {
                    click: function(t) {
                        return e.setEvent("Event_Tools_Timeline")
                    }
                }
            }, [e._v("时间轴")])], 1)], 1)], 1)], 1), e._v(" "), r("div", {
                staticClass: "input-box",
                staticStyle: {
                    "margin-left": "20px"
                }
            }, [r("el-autocomplete", {
                attrs: {
                    placeholder: "搜索帖子/股票/用户",
                    "popper-append-to-body": !1,
                    autocomplete: "off",
                    "fetch-suggestions": e.querySearchAsync
                },
                on: {
                    select: e.handleSelectSearch
                },
                nativeOn: {
                    keyup: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.toSearch("")
                    }
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        var n = t.item;
                        return ["item" == n.type ? r("div", {
                            staticClass: "jc-autocomplete"
                        }, [r("div", {
                            staticClass: "name"
                        }, [e._v(e._s(n.value))]), e._v(" "), r("div", {
                            staticClass: "fs13-ash"
                        }, [e._v("(" + e._s(n.code) + ")")])]) : e._e(), e._v(" "), "item" != n.type ? r("div", {
                            staticClass: "jc-autoList",
                            on: {
                                click: function(t) {
                                    return t.preventDefault(),
                                    e.toSearch(n.type)
                                }
                            }
                        }, [r("div", {
                            staticClass: "text"
                        }, [e._v(e._s(n.value))]), e._v(" "), r("i", {
                            staticClass: "ml-auto el-icon-arrow-right"
                        })]) : e._e()]
                    }
                }]),
                model: {
                    value: e.input,
                    callback: function(t) {
                        e.input = t
                    },
                    expression: "input"
                }
            }), e._v(" "), r("img", {
                staticClass: "icon-search",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_search%402x.png?x-oss-process=image/resize,p_50",
                    alt: ""
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.toSearch("")
                    }
                }
            })], 1), e._v(" "), r("div", {
                staticClass: "dropBox"
            }, [r("el-dropdown", {
                attrs: {
                    placement: "bottom"
                }
            }, [r("div", {
                staticClass: "downNotices"
            }, [r("div", {
                staticClass: "ic_tongzhi",
                on: {
                    click: function(t) {
                        e.toNotice(),
                        e.setEvent("Event_Message_Notice")
                    }
                }
            }, [r("img", {
                staticClass: "ic_tongzhi",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_tongzhi%402x.png?x-oss-process=image/resize,p_50",
                    alt: ""
                }
            }), e._v(" "), e.noticeCounts > 0 ? r("div", {
                staticClass: "badge-box"
            }, [e._v("\n              " + e._s(e.noticeCounts) + "\n            ")]) : e._e()])]), e._v(" "), r("el-dropdown-menu", {
                staticClass: "downNoticesMenus",
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [r("el-dropdown-item", [r("div", {
                staticClass: "noticesItem"
            }, [r("div", {
                staticClass: "nitop straight-line"
            }, [r("div", {
                staticClass: "fs15"
            }, [e._v("通知")]), e._v(" "), r("div", {
                staticClass: "allRead",
                on: {
                    click: e.noticeEmpty
                }
            }, [r("span", [e._v("全部已读")]), e._v(" "), r("img", {
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_read%402x.png?x-oss-process=image/resize,p_50",
                    alt: "",
                    srcset: ""
                }
            })])]), e._v(" "), e.noticeList && e.noticeList.length > 0 ? r("div", {
                staticClass: "dr_list"
            }, e._l(e.noticeList, (function(t, i) {
                return r("div", {
                    key: i,
                    staticClass: "click dli",
                    on: {
                        click: function(n) {
                            return e.noticClick(t.type, i)
                        }
                    }
                }, [r("div", {
                    staticClass: "drvi mr14"
                }, [r("div", {
                    staticClass: "list-icon"
                }, [1 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_fans%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e(), e._v(" "), 2 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_like%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e(), e._v(" "), 4 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_at%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e(), e._v(" "), 3 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_comment%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e(), e._v(" "), 5 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_earnings%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e(), e._v(" "), 6 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_syster%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e(), e._v(" "), 10 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_syster%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e(), e._v(" "), 20 == t.type ? r("img", {
                    attrs: {
                        src: n(951)
                    }
                }) : e._e(), e._v(" "), 21 == t.type ? r("img", {
                    attrs: {
                        src: "https://cdn.jiuyangongshe.com/PC/ic_message_syster%402x.png?x-oss-process=image/resize,p_50"
                    }
                }) : e._e()]), e._v(" "), t.unread_count > 0 ? r("div", {
                    staticClass: "badge-box"
                }, [e._v("\n                      " + e._s(t.unread_count) + "\n                    ")]) : e._e()]), e._v(" "), r("div", {
                    staticClass: "text-bar straight-line"
                }, [r("div", {
                    staticClass: "fs15-bold hidFont"
                }, [e._v(e._s(t.title))]), e._v(" "), r("div", {
                    staticClass: "fs13-grey hidFont",
                    domProps: {
                        innerHTML: e._s(e.ReCont(t.content))
                    }
                })])])
            }
            )), 0) : r("div", {
                staticClass: "droEmpty"
            }, [r("empty-page", {
                attrs: {
                    position: "none"
                }
            })], 1)])])], 1)], 1), e._v(" "), r("el-dropdown", {
                attrs: {
                    placement: "bottom"
                }
            }, [r("div", {
                staticClass: "downNotices"
            }, [r("div", {
                staticClass: "ic_sixin",
                on: {
                    click: function(t) {
                        e.openNewPage("/notices/private", !1, !1),
                        e.setEvent("Event_Tab_Message")
                    }
                }
            }, [r("img", {
                staticClass: "ic_sixin",
                attrs: {
                    src: "https://cdn.jiuyangongshe.com/PC/ic_sixin%402x.png?x-oss-process=image/resize,p_50",
                    alt: ""
                }
            }), e._v(" "), e.messageCounts > 0 ? r("div", {
                staticClass: "badge-box"
            }, [e._v("\n              " + e._s(e.messageCounts) + "\n            ")]) : e._e()])]), e._v(" "), r("el-dropdown-menu", {
                staticClass: "downNoticesMenus",
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [r("el-dropdown-item", [r("div", {
                staticClass: "noticesItem noticesItemH"
            }, [r("div", {
                staticClass: "nitop straight-line"
            }, [r("div", {
                staticClass: "fs15"
            }, [e._v("私信")])]), e._v(" "), e.messageList && e.messageList.length > 0 ? r("div", {
                staticClass: "dr_list dr_list1"
            }, e._l(e.messageList, (function(t, i) {
                return r("div", {
                    key: i,
                    staticClass: "click dli",
                    on: {
                        click: function(n) {
                            e.toActive(t),
                            e.setEvent("Event_Message_PrivateMessageDetail")
                        }
                    }
                }, [r("div", {
                    staticClass: "drvi mr14"
                }, [r("div", {
                    staticClass: "list-icon-user"
                }, [r("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.avatar ? t.avatar + "?x-oss-process=image/resize,w_56,h_56,p_50" : e.defaultAvata
                    }
                })]), e._v(" "), t.unread_count > 0 ? r("div", {
                    staticClass: "badge-box"
                }, [e._v("\n                      " + e._s(t.unread_count) + "\n                    ")]) : e._e()]), e._v(" "), r("div", {
                    staticClass: "text-bar straight-line"
                }, [r("div", {
                    staticClass: "fs15-bold hidFont"
                }, [e._v(e._s(t.name))]), e._v(" "), t.latest_message ? r("div", {
                    staticClass: "fs13-grey hidFont thtml",
                    domProps: {
                        innerHTML: e._s(e.ReCont(t.latest_message.content))
                    }
                }) : e._e()])])
            }
            )), 0) : r("div", {
                staticClass: "droEmpty"
            }, [r("empty-page", {
                attrs: {
                    position: "none"
                }
            })], 1)])])], 1)], 1)], 1), e._v(" "), r("div", {
                staticClass: "user-box parent"
            }, [r("div", {
                staticClass: "user-info",
                on: {
                    mouseover: function(t) {
                        return e.onShowSystem("on")
                    },
                    mouseleave: function(t) {
                        return e.onShowSystem("out")
                    }
                }
            }, [r("img", {
                staticClass: "img",
                attrs: {
                    src: e.user && e.user.avatar ? e.user.avatar + "?x-oss-process=image/resize,w_56,p_50" : e.defaultAvatar
                }
            }), e._v(" "), e.user ? r("div", {
                staticClass: "name",
                attrs: {
                    title: e.user.nickname
                }
            }, [e._v(e._s(e.user.nickname))]) : e._e()]), e._v(" "), e.user ? r("el-dropdown", {
                staticClass: "publish",
                attrs: {
                    "show-timeout": 0,
                    trigger: "hover"
                },
                on: {
                    "visible-change": function(t) {
                        return e.onShowSystem("out")
                    },
                    command: e.toPage
                }
            }, [r("span", {
                staticClass: "el-dropdown-link timeText"
            }, [e._v("\n          发帖\n        ")]), e._v(" "), r("el-dropdown-menu", {
                ref: "dropdown",
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, e._l(e.publishList, (function(t, n) {
                return r("el-dropdown-item", {
                    key: n,
                    attrs: {
                        command: t.id
                    }
                }, [r("nuxt-link", {
                    staticClass: "publish-item",
                    attrs: {
                        target: "_blank",
                        to: "/article/edit?type=" + t.type
                    }
                }, [e._v(e._s(t.name))])], 1)
            }
            )), 1)], 1) : e._e(), e._v(" "), e.user ? e._e() : r("div", {
                staticClass: "name lf",
                staticStyle: {
                    color: "#8590a6"
                },
                on: {
                    click: e.showLoginDialog
                }
            }, [e._v("\n        登录注册\n      ")]), e._v(" "), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showSystem,
                    expression: "showSystem"
                }],
                ref: "userDialog",
                staticClass: "dropdown-me four-line",
                attrs: {
                    id: "userDialog"
                },
                on: {
                    mouseenter: function(t) {
                        return e.onShowSystem("on")
                    },
                    mouseleave: function(t) {
                        return e.onShowSystem("out")
                    }
                }
            }, [r("ul", {
                staticClass: "pz"
            }, [r("div", {
                staticClass: "jt"
            }), e._v(" "), r("li", {
                on: {
                    click: e.toMinePage
                }
            }, [r("div", {
                staticClass: "row home"
            }, [e._v("我的主页")])]), e._v(" "), e.user ? r("li", {
                on: {
                    click: function(t) {
                        e.showForget = !0
                    }
                }
            }, [r("div", {
                staticClass: "row set"
            }, [e._v("修改密码")])]) : e._e(), e._v(" "), r("li", {
                on: {
                    click: e.jcLoginOut
                }
            }, [r("div", {
                staticClass: "row quit"
            }, [e._v("退出")])])])])], 1)]), e._v(" "), e.showForget ? r("reset-password", {
                attrs: {
                    isLogin: !0,
                    phone: e.phone
                },
                on: {
                    submit: e.afterRestPassword,
                    close: function(t) {
                        e.showForget = !1
                    }
                }
            }) : e._e()], 1)
        }
        ), [], !1, null, "3588e6c2", null);
        t.default = component.exports;
        installComponents(component, {
            EmptyPage: n(216).default
        })
    },
    37: function(e, t, n) {
        "use strict";
        var r = n(0);
        t.a = {
            head: function() {
                return {
                    link: [{
                        rel: "canonical",
                        href: this.linkUrl
                    }]
                }
            },
            data: function() {
                return {
                    canonicalUrl: r.c.url + this.$route.path
                }
            },
            computed: {
                linkUrl: function() {
                    return this.canonicalUrl
                }
            },
            watch: {
                "$route.path": {
                    handler: function(path) {
                        this.canonicalUrl = r.c.url + this.$route.path
                    }
                }
            }
        }
    },
    38: function(e, t, n) {
        "use strict";
        n.d(t, "g", (function() {
            return te
        }
        )),
        n.d(t, "j", (function() {
            return X
        }
        )),
        n.d(t, "i", (function() {
            return M
        }
        )),
        n.d(t, "s", (function() {
            return D
        }
        )),
        n.d(t, "r", (function() {
            return R
        }
        )),
        n.d(t, "n", (function() {
            return L
        }
        )),
        n.d(t, "u", (function() {
            return m
        }
        )),
        n.d(t, "v", (function() {
            return v
        }
        )),
        n.d(t, "m", (function() {
            return w
        }
        )),
        n.d(t, "q", (function() {
            return E
        }
        )),
        n.d(t, "p", (function() {
            return S
        }
        )),
        n.d(t, "o", (function() {
            return j.a
        }
        )),
        n.d(t, "t", (function() {
            return A
        }
        )),
        n.d(t, "k", (function() {
            return I
        }
        )),
        n.d(t, "d", (function() {
            return N
        }
        )),
        n.d(t, "a", (function() {
            return F
        }
        )),
        n.d(t, "l", (function() {
            return z
        }
        )),
        n.d(t, "f", (function() {
            return H
        }
        )),
        n.d(t, "e", (function() {
            return W
        }
        )),
        n.d(t, "c", (function() {
            return Q
        }
        )),
        n.d(t, "h", (function() {
            return K
        }
        )),
        n.d(t, "b", (function() {
            return ne
        }
        ));
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = n(1)
          , c = n(0);
        function l(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var m = {
            getUser: function(e) {
                var data = {
                    url: "/susyser",
                    params: e
                };
                return o.a.get(data)
            },
            pwLogin: function(e, t) {
                var data = {
                    phone: e,
                    password: t
                };
                return o.a.post({
                    url: "/api/v1/user/login",
                    params: data,
                    headers: c.a
                })
            },
            login: function(e, t) {
                var data = {
                    url: "/sysuser/login",
                    params: {
                        username: e,
                        password: t
                    }
                };
                return o.a.post(data)
            },
            changePassword: function(e, t, n) {
                var data = {
                    url: "/sysuser/password",
                    params: {
                        oldPassword: t,
                        newPassword: n
                    }
                };
                return o.a.put(data)
            },
            logout: function() {
                return o.a.post({
                    url: "/api/v1/user/logout",
                    params: {}
                })
            },
            updateSysUser: function(e, body) {
                var data = {
                    url: "/sysuser/".concat(e),
                    params: body,
                    headers: c.a
                };
                return o.a.put(data)
            },
            addSysUser: function(body) {
                var data = {
                    url: "/sysuser",
                    params: d({}, body),
                    headers: c.a
                };
                return o.a.post(data)
            },
            deleteSysUser: function(e) {
                var data = {
                    url: "/sysuser/".concat(e),
                    params: {}
                };
                return o.a.delete(data)
            }
        };
        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var v = {
            getUserInfo: function() {
                return o.a.post({
                    url: "/api/v1/user/info",
                    params: {}
                })
            },
            getHomepage: function(e) {
                var data = {
                    url: "/api/v1/user/homepage",
                    params: f({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getUserArticle: function(e) {
                var data = {
                    url: "/api/v2/user/article/homepage",
                    params: f({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            userSerach: function(e) {
                var data = f({}, e);
                return o.a.post({
                    url: "/api/v1/user/search",
                    params: data,
                    headers: c.a
                })
            },
            getInviteInfo: function(e, t) {
                var data = {
                    url: "/api/v1/user/invite/info",
                    params: {
                        user_id: e,
                        type: t
                    },
                    headers: c.a
                };
                return o.a.post(data)
            },
            inviteUser: function(e, t) {
                var data = {
                    url: "/api/v1/user/invite",
                    params: {
                        user_id: t,
                        phone: e
                    },
                    headers: c.a
                };
                return o.a.post(data)
            },
            readPower: function() {
                var data = {
                    url: "/api/v1/user/read/limit",
                    params: {},
                    headers: c.a
                };
                return o.a.post(data)
            },
            wxLogin: function(e, t) {
                var data = {
                    url: "/api/v1/user/login/wx",
                    params: {
                        open_id: e,
                        union_id: t
                    },
                    headers: c.a
                };
                return o.a.post(data)
            }
        };
        function _(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? _(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var w = {
            getActionCount: function(e) {
                var data = {
                    url: "/api/v1/action/count-pc",
                    params: y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getActionList: function(e) {
                var data = {
                    url: "/api/v1/action/list",
                    params: y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getActionField: function(e) {
                var data = {
                    url: "/api/v1/action/field",
                    params: y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getActionDetail: function(e) {
                var data = {
                    url: "/api/v1/action/detail",
                    params: y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            }
        };
        function k(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function C(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? k(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var E = {
            deleteCommit: function(e) {
                var data = {
                    url: "/api/v1/article/comment/delete",
                    params: {
                        comment_id: e
                    },
                    headers: c.a
                };
                return o.a.post(data)
            },
            listFollowBook: function(e) {
                var data = {
                    url: "/api/v2/user/article/follow",
                    params: C({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            listFollowList: function(e) {
                var data = {
                    url: "/api/v1/user/fans/follow-list",
                    params: C({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            listFollowStock: function() {
                var data = {
                    url: "/api/v1/stock/user",
                    headers: c.a
                };
                return o.a.post(data)
            },
            listStockBook: function(e) {
                var data = {
                    url: "/api/v2/user/article/stock",
                    headers: c.a,
                    params: C({}, e)
                };
                return o.a.post(data)
            },
            setLike: function(e) {
                var data = {
                    url: "/api/v1/article/like",
                    headers: c.a,
                    params: C({}, e)
                };
                return o.a.post(data)
            },
            setStep: function(e) {
                var data = {
                    url: "/api/v1/article/step",
                    headers: c.a,
                    params: C({}, e)
                };
                return o.a.post(data)
            },
            setFollow: function(e) {
                var data = {
                    url: "/api/v1/user/fans/follow",
                    headers: c.a,
                    params: C({}, e)
                };
                return o.a.post(data)
            },
            removeFollowStock: function(e) {
                var data = {
                    url: "/api/v1/stock/user/del",
                    headers: c.a,
                    params: C({}, e)
                };
                return o.a.post(data)
            },
            searchStock: function(e) {
                var data = {
                    url: " /api/v1/stock/search",
                    headers: c.a,
                    params: C({}, e)
                };
                return o.a.post(data)
            }
        };
        function O(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function x(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? O(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : O(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var S = {
            listArticle: function(e) {
                var data = {
                    url: "/api/v2/article/community",
                    params: x({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            listCategory: function(e) {
                var data = {
                    url: "/api/v1/article/category/list/type",
                    params: {
                        type: e
                    },
                    headers: c.a
                };
                return o.a.post(data)
            }
        }
          , j = n(327);
        function P(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function T(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? P(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : P(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var $, A = {
            searchStock: function(e) {
                var data = {
                    url: "/api/v1/stock/search",
                    params: T({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            }
        }, L = {
            getCountry: function() {
                var data = {
                    url: "/api/v1/area/country-code",
                    params: {},
                    headers: c.a
                };
                return o.a.post(data)
            },
            getProvince: function() {
                return o.a.post({
                    url: "/api/v1/area/province",
                    headers: c.a
                })
            },
            getCity: function(code) {
                return o.a.post({
                    url: "/api/v1/area/city",
                    params: {
                        province_code: code
                    },
                    headers: c.a
                })
            }
        }, D = {
            get: function(e) {
                var data = {
                    url: "/mall-api/page/".concat(e, "/origin"),
                    params: {}
                };
                return o.a.post(data)
            },
            getProtocol: function(e) {
                var data = {
                    url: "/api/v1/user/protocol/".concat(e),
                    params: {}
                };
                return o.a.post(data)
            }
        }, R = {
            userNotice: function() {
                var data = {
                    url: "/api/v1/user/notice",
                    params: {},
                    headers: c.a
                };
                return o.a.post(data)
            },
            getCounts: function() {
                var data = {
                    url: "/api/v1/user/notice/count",
                    params: {},
                    headers: c.a
                };
                return o.a.post(data)
            }
        }, M = (n(31),
        {
            getOssToken: function() {
                return new Promise((function(e, t) {
                    var n = $nuxt.$store.state.ossToken;
                    if (n && n.expiration && Date.now() - 6e4 < new Date(n.expiration).getTime())
                        e({
                            errCode: "0",
                            data: n
                        });
                    else {
                        o.a.post({
                            url: "/api/v1/sts/token",
                            params: {}
                        }).then((function(t) {
                            $nuxt.$store.commit("setToken", t.data),
                            e(t)
                        }
                        )).catch((function(e) {
                            t(e)
                        }
                        ))
                    }
                }
                ))
            }
        }), I = ($ = {
            productList: function() {
                var data = {
                    url: "/api/v1/product/list",
                    params: {},
                    headers: c.a
                };
                return o.a.post(data)
            },
            articleList: function(e) {
                var data = {
                    url: "/api/v1/product/article/list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            articleDetail: function(e) {
                var data = {
                    url: "/api/v1/product/article/detail",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            payStatus: function(e) {
                var data = {
                    url: "/api/v1/product/pay/status",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            productStatus: function(e) {
                var data = {
                    url: "/api/v1/product/status",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            orderList: function(e) {
                var data = {
                    url: "/api/v1/product/order/list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            }
        },
        Object(r.a)($, "orderList", (function(e) {
            var data = {
                url: "/api/v1/product/order/list",
                params: e,
                headers: c.a
            };
            return o.a.post(data)
        }
        )),
        Object(r.a)($, "investmentUrl", (function(e) {
            var data = {
                url: "/api/v1/product/investment/url",
                params: e,
                headers: c.a
            };
            return o.a.post(data)
        }
        )),
        Object(r.a)($, "investmentPackage", (function(e) {
            var data = {
                url: "/api/v1/product/investment/package",
                params: e,
                headers: c.a
            };
            return o.a.post(data)
        }
        )),
        Object(r.a)($, "investmentCreateOrder", (function(e) {
            var data = {
                url: "/api/v1/product/investment/create-order",
                params: e,
                headers: c.a
            };
            return o.a.post(data)
        }
        )),
        Object(r.a)($, "orderInfo", (function(e) {
            var data = {
                url: "/api/v1/product/order/info",
                params: e,
                headers: c.a
            };
            return o.a.post(data)
        }
        )),
        Object(r.a)($, "orderPay", (function(e) {
            var data = {
                url: "/api/v1/product/order/pay",
                params: e,
                headers: c.a
            };
            return o.a.post(data)
        }
        )),
        $), N = {
            configOne: function(e) {
                var data = {
                    url: "/api/v1/config/one",
                    params: {
                        pro_name: e
                    },
                    headers: c.a
                };
                return o.a.post(data)
            },
            configHomePage: function() {
                var data = {
                    url: "/api/v1/config/home-page-route",
                    headers: c.a
                };
                return o.a.post(data)
            }
        }, F = {
            chatList: function(e) {
                var data = {
                    url: "/api/v1/ai/chat/list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            sessionList: function(e) {
                var data = {
                    url: "/api/v1/ai/session/list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            deleteChat: function(e) {
                var data = {
                    url: "/api/v1/ai/session/delete",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            chatDetail: function(e) {
                var data = {
                    url: "/api/v1/ai/chat/reply-list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            }
        };
        function U(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function B(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? U(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : U(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var z = {
            listArticle: function(e) {
                var data = {
                    url: "/api/v1/timeline/list",
                    params: B({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            publishArticle: function(e) {
                var data = {
                    url: "/api/v1/timeline/list",
                    params: B({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            }
        }
          , H = {
            getDetail: function(e) {
                var data = {
                    url: "/api/v1/industry/detail",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            view: function(e) {
                var data = {
                    url: "/api/v1/industry/browsers-count",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            share: function(e) {
                var data = {
                    url: "/api/v1/industry/forward-count",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            }
        }
          , W = {
            trace: function(e) {
                var data = {
                    url: "/api/v1/user/trace",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            }
        };
        function V(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function J(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? V(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : V(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var Q = {
            searchAnnouncement: function(e) {
                var data = {
                    url: "/api/v1/tool/announcement/search",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            exportAnnouncement: function(e) {
                var data = {
                    url: "/api/v1/tool/announcement/search/export",
                    params: e,
                    headers: J({}, c.a),
                    responseType: "arraybuffer"
                };
                return o.a.post(data)
            },
            searchAction: function(e) {
                var data = {
                    url: "/api/v1/tool/interaction/search",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            detail: function(e) {
                var data = {
                    url: "/api/v1/tool/announcement/detail",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            actionDetail: function(e) {
                var data = {
                    url: "/api/v1/tool/interaction/detail",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            }
        }
          , K = {
            ocr: function(e) {
                var data = {
                    url: "/api/v1/competition/ocr/stock-list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            detail: function(e) {
                var data = {
                    url: "/api/v1/competition/detail",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            add: function(e) {
                var data = {
                    url: "/api/v1/competition/apply/add",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            matchAdd: function(e) {
                var data = {
                    url: "/api/v1/competition/apply/detail",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            }
        };
        function G(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function Y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? G(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : G(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var X = {
            updateResult: function(e) {
                var data = {
                    url: "/api/v1/article/plan/update-result",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            listPlan: function(e) {
                var data = {
                    url: "/api/v1/article/plan/page",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            detailPlan: function(e) {
                var data = {
                    url: "/api/v1/article/plan/detail",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            addPlan: function(e) {
                var data = {
                    url: "/api/v1/article/plan/add",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            updatePlan: function(e) {
                var data = {
                    url: "/api/v1/article/plan/update",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            saveOrderBy: function(e) {
                var data = {
                    url: "/api/v1/article/plan/save-order-by",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            countRemind: function(e) {
                var data = {
                    url: "/api/v1/article/plan/count-remind",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getPageSetting: function(e) {
                var data = {
                    url: "/api/v1/article/plan/get-order-by",
                    params: Y({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            }
        };
        function Z(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function ee(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Z(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Z(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var te = {
            voteFavorite: function(e) {
                var data = {
                    url: "/api/v1/article/market/opinion/vote-favorite",
                    params: ee({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            list: function(e) {
                var data = {
                    url: "/api/v1/article/market/opinion/list",
                    params: ee({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            voteQuestion: function(e) {
                var data = {
                    url: "/api/v1/article/market/opinion/vote-question",
                    params: ee({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            },
            getActionDetail: function(e) {
                var data = {
                    url: "/api/v1/article/market/opinion/detail",
                    params: ee({}, e),
                    headers: c.a
                };
                return o.a.post(data)
            }
        }
          , ne = {
            cascade: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/cascade",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            stockList: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/stock-list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            exaggerated: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/exaggerated",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            fake: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/fake",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            stockTree: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/stock-tree",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            getSetting: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/get-setting",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            list: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            childrenList: function(e) {
                var data = {
                    url: "/api/v1/ai/industry/category-child/list",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            },
            markNew: function(e) {
                var data = {
                    url: "api/v1/ai/industry/mark-new",
                    params: e,
                    headers: c.a
                };
                return o.a.post(data)
            }
        }
    },
    391: function(e, t, n) {
        "use strict";
        n.r(t);
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(27)
          , o = n(5)
          , c = (n(31),
        n(52),
        n(97),
        n(38))
          , l = n(0);
        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        var m = null
          , h = function() {
            return {
                flag: !1,
                isLoading: !1,
                admin: null,
                ossToken: {},
                noticeCounts: 0,
                messageCounts: 0,
                scrollTop: 0,
                isShowLogin: !1,
                isFirstPage: !0,
                rankList: null,
                isShowNewestTool: !1,
                newestToolInfo: Object(o.a)({
                    voiceAlert: "on"
                }, "voiceAlert", "on"),
                context: null,
                host: ""
            }
        }
          , f = function(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }({}, h)
          , v = {
            setContext: function(e, t) {
                m = t
            },
            setHost: function(e, t) {
                e.host = t
            },
            getHost: function(e) {
                return null
            },
            setCookies: function(e, t, n, r) {
                m.set(t, n, r)
            },
            initNewestArticleTool: function(e) {
                var t = localStorage.isShowNewestTool && 1 == localStorage.isShowNewestTool;
                e.isShowNewestTool = t
            },
            setNewestArticleTool: function(e, t) {
                e.isShowNewestTool = t,
                localStorage.setItem("isShowNewestTool", t ? 1 : 0)
            },
            showLoading: function(e, t) {
                e.isLoading = t
            },
            setIsFitstPage: function(e, t) {
                e.isFirstPage = t
            },
            setShowLogin: function(e, t) {
                t && (e.admin = null),
                e.isShowLogin = t
            },
            setUserData: function(e, t) {
                e.admin = t
            },
            setLoginOut: function(e) {
                e.flag = !1,
                e.isLoading = !1,
                e.admin = null,
                e.ossToken = {},
                e.noticeCounts = 0,
                e.messageCounts = 0,
                e.scrollTop = 0,
                e.isShowLogin = !0
            },
            setToken: function(e, t) {
                e.ossToken = t
            },
            setMessageCounts: function(e, t) {
                e.messageCounts = t
            },
            setNoticeCounts: function(e, t) {
                e.noticeCounts = t
            },
            setRankList: function(e, t) {
                e.rankList = t
            }
        }
          , _ = {
            nuxtServerInit: function(e, t) {
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                r = e.commit,
                                e.state,
                                e.dispatch,
                                r("setContext", t.$cookies);
                            case 2:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            getRankList: function(e, t) {
                var n = e.commit;
                t ? t.app.ApiManager.post({
                    url: "/api/v1/article/rank-board",
                    headers: l.a
                }).then((function(e) {
                    n("setRankList", e.data)
                }
                )) : c.o.getRank().then((function(e) {
                    n("setRankList", e.data)
                }
                ))
            },
            getCounts: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    c.r.getCounts().then((function(n) {
                        t("setNoticeCounts", n.data.notice),
                        t("setMessageCounts", n.data.message),
                        e(n.data)
                    }
                    )).catch((function(e) {
                        console.log("getCounts>>>>>", e),
                        n(e)
                    }
                    ))
                }
                ))
            },
            getOSSToken: function(e) {
                var t = this
                  , n = e.commit;
                c.i.getOssToken().then((function(e) {
                    var r = e.data;
                    n("setToken", r);
                    var o = new Date(e.data.expiration).getTime()
                      , c = (new Date).getTime();
                    setTimeout((function() {
                        t.dispatch("getOSSToken")
                    }
                    ), o - c)
                }
                )).catch((function(e) {
                    console.log("getOssToken>>>>>", e)
                }
                ))
            },
            getUserInfo: function(e) {
                var t = e.commit;
                return new Promise((function(e, n) {
                    c.v.getUserInfo().then((function(r) {
                        if (r && 0 == r.errCode) {
                            var o = r.data;
                            t("setUserData", o),
                            t("setShowLogin", !1),
                            e(o)
                        } else
                            n(r)
                    }
                    ))
                }
                ))
            },
            loginOut: function(e) {
                (0,
                e.commit)("setLoginOut", {})
            }
        };
        t.default = {
            state: h,
            originState: f,
            mutations: v,
            actions: _,
            getters: {
                rankData: function(e) {
                    return e.rankList
                }
            }
        }
    },
    40: function(e, t, n) {
        "use strict";
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var r = n(5)
          , o = (n(23),
        n(42),
        n(56),
        n(313),
        n(128),
        n(129),
        n(29))
          , c = n(170)
          , l = n(7)
          , d = n(216)
          , m = n(310)
          , h = n(311)
          , f = n(1)
          , v = n(0)
          , _ = n(308);
        function y(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function w(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? y(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        t.a = {
            mixins: [o.a, c.a],
            data: function() {
                return {
                    defaultAvatar: "https://cdn.jiuyangongshe.com/PC/ic_default_touxiang%402x.png?x-oss-process=image/resize,p_50"
                }
            },
            components: {
                EmptyPage: d.default,
                ButtonBlue: m.default,
                ButtonCancel: h.default
            },
            computed: w(w({}, Object(l.e)({
                isShowLogin: function(e) {
                    return e.isShowLogin
                }
            })), {}, {
                user: function() {
                    var e = this.$store.state.admin;
                    return e ? (this.$store.commit("setUserData", e),
                    e) : null
                },
                isMove: function() {
                    return !!/(Phone; OpenHarmony|iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
                }
            }),
            created: function() {},
            methods: w(w({}, Object(l.b)(["getUserInfo"])), {}, {
                toArticleDetail: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , n = "";
                    this.setEvent("Event_Community_OpenArticle"),
                    /(Phone; OpenHarmony|iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? (n = "/h5/article/" + e,
                    this.openNewPage(n, t)) : (n = "/a/" + e,
                    window.open(n))
                },
                openNewPage: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (t)
                        window.open(e);
                    else {
                        var r = this.$cookies.get("admin");
                        if (r && "" !== r)
                            return n ? window.open(e) : this.$router.push(e),
                            !1;
                        this.$store.commit("setShowLogin", !0)
                    }
                },
                getPictures: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = {
                        url: "https://jbang.oss-cn-beijing.aliyuncs.com/0manbuzhe/%E7%BC%BA%E7%9C%81%E5%9B%BE.jpg",
                        type: "img"
                    }
                      , r = e.lastIndexOf(".");
                    return -1 != r && (n.type = e.substring(r + 1, e.length).toLowerCase().split("?")[0]),
                    "excel" != n.type && "xlsx" != n.type && "xls" != n.type || (n.url = "https://cdn.jiuyangongshe.com/PC/ic_excel%402x.png"),
                    "docx" != n.type && "doc" != n.type || (n.url = "https://cdn.jiuyangongshe.com/PC/ic_word%402x.png"),
                    "pdf" == n.type && (n.url = "https://cdn.jiuyangongshe.com/PC/ic_pdf%402x.png"),
                    "jpg" != n.type && "png" != n.type && "jpeg" != n.type && "gif" != n.type || (n.url = e.replace(/x-oss-process=image(.*)/, "")),
                    t ? n : n.url
                },
                formatNumber: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "price"
                      , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (0 == (e *= 1))
                        return 0;
                    if ("price" === t)
                        return (e / 100).toFixed(2);
                    if (n) {
                        var r = e.toFixed(2);
                        return e = r >= 1e6 ? (r / 1e5).toFixed(2) + "w" : r
                    }
                    return e.toFixed(2)
                },
                calculationPrice: function(e) {
                    return new _.Decimal(e).mul(new _.Decimal(100)).toNumber()
                },
                _sendPostRequest: function(e, t, n) {
                    n = n || !1;
                    var data = {
                        url: e,
                        params: w({}, t),
                        hideLoading: n,
                        headers: v.a
                    };
                    return f.a.post(data)
                },
                getPlatform: function() {
                    var e = navigator.userAgent.toLowerCase();
                    return e.includes("android") ? "android" : e.includes("iphone") || e.includes("ios") ? "ios" : "other"
                },
                startThrottleFunc: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
                    this.throttleFunc || (this.throttleFunc = this.throttle(e, t)),
                    this.throttleFunc()
                },
                throttle: function(e, t) {
                    var n = arguments
                      , r = null;
                    return function() {
                        var o = n
                          , c = Date.now();
                        (null == r || c - r >= t) && (e(o),
                        r = Date.now())
                    }
                }
            })
        }
    },
    420: function(e, t, n) {},
    421: function(e, t, n) {},
    557: function(e, t, n) {},
    558: function(e, t, n) {},
    559: function(e, t, n) {},
    560: function(e, t, n) {},
    561: function(e, t, n) {},
    563: function(e, t, n) {},
    564: function(e, t, n) {},
    565: function(e, t, n) {},
    566: function(e, t, n) {},
    567: function(e, t, n) {},
    568: function(e, t, n) {},
    569: function(e, t, n) {},
    570: function(e, t, n) {},
    571: function(e, t, n) {},
    573: function(e, t, n) {},
    574: function(e, t, n) {},
    575: function(e, t, n) {},
    576: function(e, t, n) {},
    577: function(e, t, n) {},
    578: function(e, t, n) {},
    579: function(e, t, n) {},
    580: function(e, t, n) {},
    581: function(e, t, n) {},
    582: function(e, t, n) {},
    583: function(e, t, n) {},
    584: function(e, t, n) {},
    585: function(e, t, n) {},
    586: function(e, t, n) {},
    587: function(e, t, n) {},
    588: function(e, t, n) {
        "use strict";
        var r = n(5)
          , o = (n(23),
        n(42),
        n(10),
        n(11),
        n(12),
        n(14),
        n(15),
        n(16),
        n(7))
          , c = n(35)
          , l = n(36)
          , d = n(33)
          , m = n(29)
          , h = n(37);
        function f(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function v(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? f(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var _ = {
            name: "Home",
            middleware: "auth",
            mixins: [m.a, h.a],
            data: function() {
                return {
                    right: 0,
                    showBacktop: !1
                }
            },
            created: function() {
                if (this.showBacktop = "/article/edit" != this.$route.path && "/notices/private" != this.$route.path,
                "wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            props: {
                homeHeight: {
                    type: String,
                    default: "100vh"
                }
            },
            mounted: function() {
                var e = this
                  , t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
            },
            components: {
                "v-header": l.default,
                IndexRightAside: c.default,
                Login: d.default
            },
            methods: v(v(v({}, Object(o.d)({
                setShowLogin: "setShowLogin"
            })), Object(o.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 884;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.$store.state.admin || this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , y = (n(973),
        n(6))
          , component = Object(y.a)(_, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "jc-home",
                style: {
                    "min-height": e.homeHeight
                }
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main"
            }, [n("nuxt", {
                key: e.$route.fullPath
            })], 1), e._v(" "), n("el-backtop", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showBacktop,
                    expression: "showBacktop"
                }],
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "56637c2f", null);
        t.a = component.exports
    },
    593: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return f
            }
            ));
            var r = n(5)
              , o = (n(31),
            n(71),
            n(80),
            n(11),
            n(12),
            n(14),
            n(15),
            n(10),
            n(16),
            n(4))
              , c = n(166);
            function l(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }
                    ))),
                    t.push.apply(t, n)
                }
                return t
            }
            function d(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? l(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }
                    ))
                }
                return e
            }
            o.default.use(c.a);
            var m = c.a.prototype.push;
            function h(view) {
                return function() {
                    return n(940)("./".concat(view, ".vue")).then((function(e) {
                        return e.default || e
                    }
                    ))
                }
            }
            function f() {
                return new c.a({
                    mode: "history",
                    base: e.env.BASE_URL,
                    routes: [{
                        path: "*",
                        redirect: "/"
                    }, {
                        meta: {
                            title: "关注",
                            requiresLogin: !0
                        },
                        path: "/aa",
                        component: h("plan/aa")
                    }, {
                        meta: {
                            title: "研究优选",
                            name: "study"
                        },
                        path: "/",
                        name: "home",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "研究优选",
                            name: "study"
                        },
                        path: "/study",
                        redirect: "/"
                    }, {
                        meta: {
                            title: "研究优选-最新热度",
                            name: "study"
                        },
                        path: "/study_hot/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "研究优选-最新发布",
                            name: "study"
                        },
                        path: "/study_publish/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "研究优选-最新互动",
                            name: "study"
                        },
                        path: "/study_action/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "研究优选-30天热度",
                            name: "study"
                        },
                        path: "/study_30/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "公社广场",
                            name: "square"
                        },
                        path: "/square",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "公社广场-最新热度",
                            name: "square"
                        },
                        path: "/square_hot/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "公社广场-最新发布",
                            name: "square"
                        },
                        path: "/square_publish/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "公社广场-最新互动",
                            name: "square"
                        },
                        path: "/square_action/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "公社广场-30天热度",
                            name: "square"
                        },
                        path: "/square_30/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "韭研公社-生活",
                            name: "live"
                        },
                        path: "/live/:type?",
                        props: {
                            isGarden: 2
                        },
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "生活-最新热度",
                            name: "live"
                        },
                        path: "/live_hot/:type?",
                        props: {
                            isGarden: 2
                        },
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "生活-最新发布",
                            name: "live"
                        },
                        path: "/live_publish/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "生活-最新互动",
                            name: "live"
                        },
                        path: "/live_action/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "生活-30天热度",
                            name: "live"
                        },
                        path: "/live_30/:type?",
                        component: function() {
                            return Promise.all([n.e(0), n.e(1), n.e(3)]).then(n.bind(null, 50)).then((function(e) {
                                return e.default || e
                            }
                            ))
                        }
                    }, {
                        meta: {
                            title: "关注",
                            requiresLogin: !0
                        },
                        path: "/focus",
                        component: h("focus/FocusList")
                    }, {
                        meta: {
                            title: "公社AI",
                            requiresLogin: !1
                        },
                        path: "/ai",
                        component: h("ai/aiChat")
                    }, {
                        meta: {
                            title: "开户"
                        },
                        path: "/open-account",
                        component: h("account/open-account-list-page")
                    }, {
                        meta: {
                            title: "开户详情"
                        },
                        path: "/open-account/:account_item_id",
                        props: function(e) {
                            return d(d({}, e.query), e.params)
                        },
                        component: h("account/open-account-page")
                    }, {
                        meta: {
                            title: "app开户"
                        },
                        path: "/app-open-account",
                        component: h("mobile/app-open-account-list-page")
                    }, {
                        meta: {
                            title: "app开户详情"
                        },
                        path: "/app-open-account/:account_item_id",
                        props: function(e) {
                            return d(d({}, e.query), e.params)
                        },
                        component: h("mobile/app-open-account-page")
                    }, {
                        meta: {
                            title: "交易计划"
                        },
                        path: "/plan",
                        name: "plan",
                        component: h("plan/plan-page")
                    }, {
                        meta: {
                            title: "搜公告"
                        },
                        path: "/announcement",
                        name: "announcement",
                        component: h("announcement/announcement-page")
                    }, {
                        meta: {
                            title: "公告详情"
                        },
                        path: "/announcement/:id",
                        name: "announcementDetail",
                        component: h("announcement/announcement-detail-page")
                    }, {
                        meta: {
                            title: "公告详情"
                        },
                        path: "/h5/announcement/:id",
                        name: "h5AnnouncementDetail",
                        component: h("h5/AnnouncementDetail")
                    }, {
                        meta: {
                            title: "产业库"
                        },
                        path: "/industryChaindev",
                        component: h("industry_dev/industry-list-page")
                    }, {
                        meta: {
                            title: "产业库分享"
                        },
                        path: "/industryChaindev/:code",
                        component: h("industry_dev/industry-share-list-page")
                    }, {
                        meta: {
                            title: "产业库详情"
                        },
                        path: "/industryChaindev/:id",
                        component: h("industry_dev/industry-page")
                    }, {
                        meta: {
                            title: "产业库"
                        },
                        path: "/industryChain",
                        component: h("industry/industry-list-page")
                    }, {
                        meta: {
                            title: "产业库详情"
                        },
                        path: "/industryChain/:id",
                        component: h("industry/industry-page")
                    }, {
                        meta: {
                            title: "时间轴"
                        },
                        path: "/timeline",
                        component: h("time-article/TimeArticleListPage")
                    }, {
                        meta: {
                            title: "创建事件",
                            requiresLogin: !1
                        },
                        path: "/timeline/edit",
                        component: h("time-article/TimeArticleEditPage")
                    }, {
                        meta: {
                            title: "事件详情",
                            requiresLogin: !1
                        },
                        path: "/timeline/:id",
                        component: h("time-article/TimeArticleDetailPage")
                    }, {
                        meta: {
                            title: "异动"
                        },
                        path: "/action/:date?/:type?",
                        component: h("action/ActionList")
                    }, {
                        meta: {
                            title: "异动"
                        },
                        path: "/action/:date?",
                        component: h("action/ActionList")
                    }, {
                        meta: {
                            title: "异动"
                        },
                        path: "/actions",
                        component: h("action/ActionList")
                    }, {
                        meta: {
                            title: "我发表的帖子",
                            requiresLogin: !0
                        },
                        path: "/mine/article",
                        component: h("mine/MineArticle")
                    }, {
                        meta: {
                            title: "我的动态",
                            requiresLogin: !0
                        },
                        path: "/mine/action",
                        component: h("mine/MineAction")
                    }, {
                        meta: {
                            title: "我的订单",
                            requiresLogin: !0
                        },
                        path: "/product/order",
                        component: h("product/product-order")
                    }, {
                        meta: {
                            title: "红宝书",
                            requiresLogin: !0
                        },
                        path: "/product",
                        component: h("product/product-page")
                    }, {
                        meta: {
                            title: "红宝书",
                            requiresLogin: !0
                        },
                        path: "/product-perview",
                        component: h("product/product-page")
                    }, {
                        meta: {
                            title: "付费文章详情",
                            requiresLogin: !0
                        },
                        path: "/product-article/:id",
                        component: h("product/product-article-page")
                    }, {
                        meta: {
                            title: "黑名单",
                            requiresLogin: !0
                        },
                        path: "/mine/black",
                        component: h("mine/MineBlack")
                    }, {
                        meta: {
                            title: "我的草稿箱",
                            requiresLogin: !0
                        },
                        path: "/mine/draft",
                        component: h("mine/MineDraft")
                    }, {
                        meta: {
                            title: "我的关注",
                            requiresLogin: !0
                        },
                        path: "/mine/care",
                        component: h("mine/MineCare")
                    }, {
                        meta: {
                            title: "我的工分",
                            requiresLogin: !0
                        },
                        path: "/mine/reward",
                        component: h("mine/MineReward")
                    }, {
                        meta: {
                            title: "我的养分",
                            requiresLogin: !0
                        },
                        path: "/mine/energy",
                        component: h("mine/MineEnergy")
                    }, {
                        meta: {
                            title: "我的钱包",
                            requiresLogin: !0
                        },
                        path: "/mine/wellat",
                        component: h("mine/MineWellat")
                    }, {
                        meta: {
                            title: "我的工分明细",
                            requiresLogin: !0
                        },
                        path: "/mine/reward/detail",
                        component: h("mine/MineRewardDetail")
                    }, {
                        meta: {
                            title: "我的权限",
                            requiresLogin: !0
                        },
                        path: "/mine/power",
                        component: h("mine/MinePower")
                    }, {
                        meta: {
                            title: "编辑个人资料",
                            requiresLogin: !0
                        },
                        path: "/mine/info",
                        component: h("mine/MineInfo")
                    }, {
                        meta: {
                            title: "赞我的",
                            requiresLogin: !0
                        },
                        path: "/agree/me",
                        component: h("agree/AgreeMe")
                    }, {
                        meta: {
                            title: "文章详情",
                            requiresLogin: !1
                        },
                        path: "/action/detail/:id",
                        component: h("article/ArticleDetail")
                    }, {
                        meta: {
                            title: "文章详情",
                            requiresLogin: !1
                        },
                        name: "articleDetail",
                        path: "/a/:id",
                        component: h("article/ArticleDetail")
                    }, {
                        meta: {
                            title: "文章详情",
                            requiresLogin: !1
                        },
                        name: "articleDetailPreview",
                        path: "/article-preview",
                        component: h("article/ArticleDetailPreview")
                    }, {
                        meta: {
                            title: "关于我们"
                        },
                        path: "/about/jc",
                        component: h("system/AboutJc")
                    }, {
                        meta: {
                            title: "搜素帖子"
                        },
                        path: "/stock/s/:id",
                        component: h("search/SearchPostOffice")
                    }, {
                        meta: {
                            title: "搜素帖子"
                        },
                        path: "/search/:id",
                        component: h("search/SearchPostOffice")
                    }, {
                        meta: {
                            title: "文章",
                            requiresLogin: !0
                        },
                        path: "/article/edit",
                        component: h("article/ArticleEdit")
                    }, {
                        meta: {
                            title: "文章编辑",
                            requiresLogin: !0
                        },
                        path: "/article/modify/:id",
                        component: h("article/ArticleModify")
                    }, {
                        meta: {
                            title: "我的草稿箱",
                            requiresLogin: !0
                        },
                        path: "/mine/draft",
                        component: h("mine/MineDraft")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/user/mine/:userId",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/original",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/forword",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/forward",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/live",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/page/:page?",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/original/page/:page?",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/forword/page/:page?",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/forward/page/:page?",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页",
                            requiresLogin: !0
                        },
                        path: "/u/:userId/live/page/:page?",
                        component: h("user/UserMine")
                    }, {
                        meta: {
                            title: "主页-关注",
                            requiresLogin: !0
                        },
                        path: "/user/care",
                        component: h("user/UserCare")
                    }, {
                        meta: {
                            title: "协议",
                            requiresLogin: !1
                        },
                        path: "/protocol/:type",
                        component: h("protocol/Protocol")
                    }, {
                        meta: {
                            title: "私人通知",
                            requiresLogin: !0
                        },
                        path: "/notices/private",
                        component: h("notices/Private")
                    }, {
                        path: "/h5/mine",
                        meta: {
                            title: "h5我的"
                        },
                        component: h("h5/UserMine")
                    }, {
                        path: "/h5/invite",
                        meta: {
                            title: "新用户活动详情"
                        },
                        component: h("h5/UserInvite")
                    }, {
                        path: "/h5/article/:id",
                        meta: {
                            title: "h5文章"
                        },
                        component: h("h5/ArticleDetail")
                    }, {
                        path: "/h5/image/:date?",
                        meta: {
                            title: "图片分享"
                        },
                        component: h("h5/imageShare")
                    }, {
                        path: "/h5/share_industry/:industry_id",
                        meta: {
                            title: "产业库分享"
                        },
                        component: h("h5/ShareIndustry")
                    }, {
                        path: "/h5/plan-share",
                        meta: {
                            title: "交易计划分享"
                        },
                        component: h("h5/planShare")
                    }, {
                        path: "/h5/actionShare",
                        meta: {
                            title: "市场舆情分享"
                        },
                        component: h("h5/actionShare")
                    }, {
                        path: "/h5/industry-chain",
                        meta: {
                            title: "产业库分享"
                        },
                        component: h("h5/industryChain")
                    }, {
                        meta: {
                            title: "产业库分享H5"
                        },
                        path: "/h5/share-industry-chain",
                        component: h("h5/shareIndustryChain")
                    }, {
                        path: "/h5/word-cloud",
                        meta: {
                            title: "词云图"
                        },
                        component: h("h5/canvasImage")
                    }, {
                        path: "/h5/ai",
                        meta: {
                            title: "公社AI"
                        },
                        component: h("h5/aiShare")
                    }, {
                        path: "/h5/time-article",
                        meta: {
                            title: "事件详情"
                        },
                        component: h("h5/TimeArticleShare")
                    }, {
                        path: "/h5/investment-share",
                        meta: {
                            title: "打开韭研公社文章"
                        },
                        component: h("h5/investment-share-page")
                    }, {
                        meta: {
                            title: "阅读查看"
                        },
                        path: "/jc/f",
                        component: h("system/JcIFrame")
                    }, {
                        meta: {
                            title: "投研助手",
                            requiresLogin: !0
                        },
                        path: "/aiResearch",
                        name: "investment-page",
                        component: h("investment/investment-page")
                    }, {
                        meta: {
                            title: "快报",
                            requiresLogin: !0
                        },
                        path: "/newest",
                        component: h("newest/ArticleNewestPage")
                    }, {
                        meta: {
                            title: "大赛",
                            requiresLogin: !0
                        },
                        path: "/match/:id?",
                        component: h("index/matchPage")
                    }, {
                        meta: {
                            title: "跳转中",
                            requiresLogin: !0
                        },
                        path: "/url/middleware",
                        component: h("h5/url-loading-page")
                    }]
                })
            }
            c.a.prototype.push = function(e) {
                return m.call(this, e).catch((function(e) {
                    return e
                }
                ))
            }
        }
        ).call(this, n(197))
    },
    598: function(e, t, n) {
        "use strict";
        var r = n(27)
          , o = (n(97),
        n(31),
        n(52),
        n(4))
          , c = n(8)
          , l = window.__NUXT__;
        function d() {
            if (!this._hydrated)
                return this.$fetch()
        }
        function m() {
            if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                var e;
                this._hydrated = !0,
                this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = l.fetch[this._fetchKey];
                if (data && data._error)
                    this.$fetchState.error = data._error;
                else
                    for (var t in data)
                        o.default.set(this.$data, t, data[t])
            }
        }
        function h() {
            var e = this;
            return this._fetchPromise || (this._fetchPromise = f.call(this).then((function() {
                delete e._fetchPromise
            }
            ))),
            this._fetchPromise
        }
        function f() {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = Object(r.a)(regeneratorRuntime.mark((function e() {
                var t, n, r, o = this;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return this.$nuxt.nbFetching++,
                            this.$fetchState.pending = !0,
                            this.$fetchState.error = null,
                            this._hydrated = !1,
                            t = null,
                            n = Date.now(),
                            e.prev = 6,
                            e.next = 9,
                            this.$options.fetch.call(this);
                        case 9:
                            e.next = 15;
                            break;
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(6),
                            t = Object(c.o)(e.t0);
                        case 15:
                            if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                e.next = 19;
                                break
                            }
                            return e.next = 19,
                            new Promise((function(e) {
                                return setTimeout(e, r)
                            }
                            ));
                        case 19:
                            this.$fetchState.error = t,
                            this.$fetchState.pending = !1,
                            this.$fetchState.timestamp = Date.now(),
                            this.$nextTick((function() {
                                return o.$nuxt.nbFetching--
                            }
                            ));
                        case 23:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[6, 11]])
            }
            )))).apply(this, arguments)
        }
        t.a = {
            beforeCreate: function() {
                Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200,
                o.default.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }),
                this.$fetch = h.bind(this),
                Object(c.a)(this, "created", m),
                Object(c.a)(this, "beforeMount", d))
            }
        }
    },
    599: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = {
            name: "Spinner",
            data: function() {
                return {
                    visible: !0,
                    fullscreen: ""
                }
            },
            methods: {
                show: function() {
                    this.visible = !0
                }
            }
        }
          , o = (n(1037),
        n(6))
          , component = Object(o.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.visible,
                    expression: "visible"
                }],
                staticClass: "v-spinner-mask"
            }, [n("div", {
                staticClass: "spinner"
            })])
        }
        ), [], !1, null, "334052f8", null);
        t.default = component.exports
    },
    600: function(e, t, n) {
        e.exports = n.p + "img/medal.39a2346.png"
    },
    607: function(e, t, n) {
        e.exports = n.p + "img/ic_logo_pc@3x.c3dc30d.png"
    },
    626: function(e, t, n) {
        e.exports = n.p + "img/ic_voice@2x.ec162f3.png"
    },
    627: function(e, t, n) {
        n(628),
        e.exports = n(629)
    },
    629: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n(98),
            n(125),
            n(12),
            n(131),
            n(132);
            var t = n(48)
              , r = n(27)
              , o = (n(229),
            n(637),
            n(644),
            n(645),
            n(97),
            n(54),
            n(31),
            n(10),
            n(14),
            n(11),
            n(128),
            n(129),
            n(55),
            n(96),
            n(71),
            n(80),
            n(52),
            n(4))
              , c = n(589)
              , l = n(306)
              , d = n(8)
              , m = n(95)
              , h = n(598)
              , f = n(213);
            function v(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e)
                            return;
                        if ("string" == typeof e)
                            return _(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return _(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0, l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done,
                        e
                    },
                    e: function(e) {
                        l = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw o
                        }
                    }
                }
            }
            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++)
                    n[i] = e[i];
                return n
            }
            o.default.__nuxt__fetch__mixin__ || (o.default.mixin(h.a),
            o.default.__nuxt__fetch__mixin__ = !0),
            o.default.component(f.a.name, f.a),
            o.default.component("NLink", f.a),
            e.fetch || (e.fetch = c.a);
            var y, w, k = [], C = window.__NUXT__ || {}, E = C.config || {};
            E._app && (n.p = Object(d.t)(E._app.cdnURL, E._app.assetsPath)),
            Object.assign(o.default.config, {
                silent: !0,
                performance: !1
            });
            var O = o.default.config.errorHandler || console.error;
            function x(e, t, n) {
                for (var r = function(component) {
                    var e = function(component, e) {
                        if (!component || !component.options || !component.options[e])
                            return {};
                        var option = component.options[e];
                        if ("function" == typeof option) {
                            for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++)
                                n[r - 2] = arguments[r];
                            return option.apply(void 0, n)
                        }
                        return option
                    }(component, "transition", t, n) || {};
                    return "string" == typeof e ? {
                        name: e
                    } : e
                }, o = n ? Object(d.g)(n) : [], c = Math.max(e.length, o.length), l = [], m = function(i) {
                    var t = Object.assign({}, r(e[i]))
                      , n = Object.assign({}, r(o[i]));
                    Object.keys(t).filter((function(e) {
                        return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                    }
                    )).forEach((function(e) {
                        n[e] = t[e]
                    }
                    )),
                    l.push(n)
                }, i = 0; i < c; i++)
                    m(i);
                return l
            }
            function S(e, t, n) {
                return j.apply(this, arguments)
            }
            function j() {
                return (j = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
                    var o, c, l, m, h = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this._routeChanged = Boolean(y.nuxt.err) || n.name !== t.name,
                                this._paramChanged = !this._routeChanged && n.path !== t.path,
                                this._queryChanged = !this._paramChanged && n.fullPath !== t.fullPath,
                                this._diffQuery = this._queryChanged ? Object(d.i)(t.query, n.query) : [],
                                (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                                e.prev = 5,
                                !this._queryChanged) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 9,
                                Object(d.q)(t, (function(e, t) {
                                    return {
                                        Component: e,
                                        instance: t
                                    }
                                }
                                ));
                            case 9:
                                o = e.sent,
                                o.some((function(e) {
                                    var r = e.Component
                                      , o = e.instance
                                      , c = r.options.watchQuery;
                                    return !0 === c || (Array.isArray(c) ? c.some((function(e) {
                                        return h._diffQuery[e]
                                    }
                                    )) : "function" == typeof c && c.apply(o, [t.query, n.query]))
                                }
                                )) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            case 12:
                                r(),
                                e.next = 26;
                                break;
                            case 15:
                                if (e.prev = 15,
                                e.t0 = e.catch(5),
                                c = e.t0 || {},
                                l = c.statusCode || c.status || c.response && c.response.status || 500,
                                m = c.message || "",
                                !/^Loading( CSS)? chunk (\d)+ failed\./.test(m)) {
                                    e.next = 23;
                                    break
                                }
                                return window.location.reload(!0),
                                e.abrupt("return");
                            case 23:
                                this.error({
                                    statusCode: l,
                                    message: m
                                }),
                                this.$nuxt.$emit("routeChanged", t, n, c),
                                r();
                            case 26:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[5, 15]])
                }
                )))).apply(this, arguments)
            }
            function P(e, t) {
                return C.serverRendered && t && Object(d.b)(e, t),
                e._Ctor = e,
                e
            }
            function T(e) {
                return Object(d.d)(e, function() {
                    var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r, o, c) {
                        var l;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("function" != typeof t || t.options) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3,
                                    t();
                                case 3:
                                    t = e.sent;
                                case 4:
                                    return l = P(Object(d.r)(t), C.data ? C.data[c] : null),
                                    r.components[o] = l,
                                    e.abrupt("return", l);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n, r, o, c) {
                        return e.apply(this, arguments)
                    }
                }())
            }
            function $(e, t, n) {
                var r = this
                  , o = ["auth", "device"]
                  , c = !1;
                if (void 0 !== n && (o = [],
                (n = Object(d.r)(n)).options.middleware && (o = o.concat(n.options.middleware)),
                e.forEach((function(e) {
                    e.options.middleware && (o = o.concat(e.options.middleware))
                }
                ))),
                o = o.map((function(e) {
                    return "function" == typeof e ? e : ("function" != typeof l.a[e] && (c = !0,
                    r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + e
                    })),
                    l.a[e])
                }
                )),
                !c)
                    return Object(d.n)(o, t)
            }
            function A(e, t, n) {
                return L.apply(this, arguments)
            }
            function L() {
                return (L = Object(r.a)(regeneratorRuntime.mark((function e(t, n, o) {
                    var c, l, h, f, _, w, C, E, O, S, j, P, T, A, L, D = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", o());
                            case 2:
                                return !1,
                                t === n ? (k = [],
                                !0) : (c = [],
                                k = Object(d.g)(n, c).map((function(e, i) {
                                    return Object(d.c)(n.matched[c[i]].path)(n.params)
                                }
                                ))),
                                l = !1,
                                h = function(path) {
                                    n.path === path.path && D.$loading.finish && D.$loading.finish(),
                                    n.path !== path.path && D.$loading.pause && D.$loading.pause(),
                                    l || (l = !0,
                                    o(path))
                                }
                                ,
                                e.next = 8,
                                Object(d.s)(y, {
                                    route: t,
                                    from: n,
                                    next: h.bind(this)
                                });
                            case 8:
                                if (this._dateLastError = y.nuxt.dateErr,
                                this._hadError = Boolean(y.nuxt.err),
                                f = [],
                                (_ = Object(d.g)(t, f)).length) {
                                    e.next = 27;
                                    break
                                }
                                return e.next = 15,
                                $.call(this, _, y.context);
                            case 15:
                                if (!l) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return");
                            case 17:
                                return w = (m.a.options || m.a).layout,
                                e.next = 20,
                                this.loadLayout("function" == typeof w ? w.call(m.a, y.context) : w);
                            case 20:
                                return C = e.sent,
                                e.next = 23,
                                $.call(this, _, y.context, C);
                            case 23:
                                if (!l) {
                                    e.next = 25;
                                    break
                                }
                                return e.abrupt("return");
                            case 25:
                                return y.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                e.abrupt("return", o());
                            case 27:
                                return _.forEach((function(e) {
                                    e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData,
                                    e.options.fetch = e._Ctor.options.fetch)
                                }
                                )),
                                this.setTransitions(x(_, t, n)),
                                e.prev = 29,
                                e.next = 32,
                                $.call(this, _, y.context);
                            case 32:
                                if (!l) {
                                    e.next = 34;
                                    break
                                }
                                return e.abrupt("return");
                            case 34:
                                if (!y.context._errored) {
                                    e.next = 36;
                                    break
                                }
                                return e.abrupt("return", o());
                            case 36:
                                return "function" == typeof (E = _[0].options.layout) && (E = E(y.context)),
                                e.next = 40,
                                this.loadLayout(E);
                            case 40:
                                return E = e.sent,
                                e.next = 43,
                                $.call(this, _, y.context, E);
                            case 43:
                                if (!l) {
                                    e.next = 45;
                                    break
                                }
                                return e.abrupt("return");
                            case 45:
                                if (!y.context._errored) {
                                    e.next = 47;
                                    break
                                }
                                return e.abrupt("return", o());
                            case 47:
                                O = !0,
                                e.prev = 48,
                                S = v(_),
                                e.prev = 50,
                                S.s();
                            case 52:
                                if ((j = S.n()).done) {
                                    e.next = 63;
                                    break
                                }
                                if ("function" == typeof (P = j.value).options.validate) {
                                    e.next = 56;
                                    break
                                }
                                return e.abrupt("continue", 61);
                            case 56:
                                return e.next = 58,
                                P.options.validate(y.context);
                            case 58:
                                if (O = e.sent) {
                                    e.next = 61;
                                    break
                                }
                                return e.abrupt("break", 63);
                            case 61:
                                e.next = 52;
                                break;
                            case 63:
                                e.next = 68;
                                break;
                            case 65:
                                e.prev = 65,
                                e.t0 = e.catch(50),
                                S.e(e.t0);
                            case 68:
                                return e.prev = 68,
                                S.f(),
                                e.finish(68);
                            case 71:
                                e.next = 77;
                                break;
                            case 73:
                                return e.prev = 73,
                                e.t1 = e.catch(48),
                                this.error({
                                    statusCode: e.t1.statusCode || "500",
                                    message: e.t1.message
                                }),
                                e.abrupt("return", o());
                            case 77:
                                if (O) {
                                    e.next = 80;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                e.abrupt("return", o());
                            case 80:
                                return e.next = 82,
                                Promise.all(_.map(function() {
                                    var e = Object(r.a)(regeneratorRuntime.mark((function e(r, i) {
                                        var o, c, l, m, h, v, _, w, p;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (r._path = Object(d.c)(t.matched[f[i]].path)(t.params),
                                                    r._dataRefresh = !1,
                                                    o = r._path !== k[i],
                                                    D._routeChanged && o ? r._dataRefresh = !0 : D._paramChanged && o ? (c = r.options.watchParam,
                                                    r._dataRefresh = !1 !== c) : D._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(e) {
                                                        return D._diffQuery[e]
                                                    }
                                                    )) : "function" == typeof l && (T || (T = Object(d.h)(t)),
                                                    r._dataRefresh = l.apply(T[i], [t.query, n.query]))),
                                                    D._hadError || !D._isMounted || r._dataRefresh) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 6:
                                                    return m = [],
                                                    h = r.options.asyncData && "function" == typeof r.options.asyncData,
                                                    v = Boolean(r.options.fetch) && r.options.fetch.length,
                                                    _ = h && v ? 30 : 45,
                                                    h && ((w = Object(d.p)(r.options.asyncData, y.context)).then((function(e) {
                                                        Object(d.b)(r, e),
                                                        D.$loading.increase && D.$loading.increase(_)
                                                    }
                                                    )),
                                                    m.push(w)),
                                                    D.$loading.manual = !1 === r.options.loading,
                                                    v && ((p = r.options.fetch(y.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)),
                                                    p.then((function(e) {
                                                        D.$loading.increase && D.$loading.increase(_)
                                                    }
                                                    )),
                                                    m.push(p)),
                                                    e.abrupt("return", Promise.all(m));
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 82:
                                l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                                o()),
                                e.next = 99;
                                break;
                            case 85:
                                if (e.prev = 85,
                                e.t2 = e.catch(29),
                                "ERR_REDIRECT" !== (A = e.t2 || {}).message) {
                                    e.next = 90;
                                    break
                                }
                                return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, A));
                            case 90:
                                return k = [],
                                Object(d.k)(A),
                                "function" == typeof (L = (m.a.options || m.a).layout) && (L = L(y.context)),
                                e.next = 96,
                                this.loadLayout(L);
                            case 96:
                                this.error(A),
                                this.$nuxt.$emit("routeChanged", t, n, A),
                                o();
                            case 99:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[29, 85], [48, 73], [50, 65, 68, 71]])
                }
                )))).apply(this, arguments)
            }
            function D(e, n) {
                Object(d.d)(e, (function(e, n, r, c) {
                    return "object" !== Object(t.a)(e) || e.options || ((e = o.default.extend(e))._Ctor = e,
                    r.components[c] = e),
                    e
                }
                ))
            }
            function R(e) {
                var t = Boolean(this.$options.nuxt.err);
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                var n = t ? (m.a.options || m.a).layout : e.matched[0].components.default.options.layout;
                "function" == typeof n && (n = n(y.context)),
                this.setLayout(n)
            }
            function M(e) {
                e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
            }
            function I(e, t) {
                var n = this;
                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                    var r = Object(d.h)(e)
                      , c = Object(d.g)(e)
                      , l = !1;
                    o.default.nextTick((function() {
                        r.forEach((function(e, i) {
                            if (e && !e._isDestroyed && e.constructor._dataRefresh && c[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                var t = e.constructor.options.data.call(e);
                                for (var n in t)
                                    o.default.set(e.$data, n, t[n]);
                                l = !0
                            }
                        }
                        )),
                        l && window.$nuxt.$nextTick((function() {
                            window.$nuxt.$emit("triggerScroll")
                        }
                        )),
                        M(n)
                    }
                    ))
                }
            }
            function N(e) {
                window.onNuxtReadyCbs.forEach((function(t) {
                    "function" == typeof t && t(e)
                }
                )),
                "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e),
                w.afterEach((function(t, n) {
                    o.default.nextTick((function() {
                        return e.$nuxt.$emit("routeChanged", t, n)
                    }
                    ))
                }
                ))
            }
            function F() {
                return (F = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                    var n, r, c, l, m;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return y = t.app,
                                w = t.router,
                                t.store,
                                n = new o.default(y),
                                r = C.layout || "default",
                                e.next = 7,
                                n.loadLayout(r);
                            case 7:
                                return n.setLayout(r),
                                c = function() {
                                    n.$mount("#__nuxt"),
                                    w.afterEach(D),
                                    w.afterEach(R.bind(n)),
                                    w.afterEach(I.bind(n)),
                                    o.default.nextTick((function() {
                                        N(n)
                                    }
                                    ))
                                }
                                ,
                                e.next = 11,
                                Promise.all(T(y.context.route));
                            case 11:
                                if (l = e.sent,
                                n.setTransitions = n.$options.nuxt.setTransitions.bind(n),
                                l.length && (n.setTransitions(x(l, w.currentRoute)),
                                k = w.currentRoute.matched.map((function(e) {
                                    return Object(d.c)(e.path)(w.currentRoute.params)
                                }
                                ))),
                                n.$loading = {},
                                C.error && n.error(C.error),
                                w.beforeEach(S.bind(n)),
                                w.beforeEach(A.bind(n)),
                                !C.serverRendered || !Object(d.m)(C.routePath, n.context.route.path)) {
                                    e.next = 20;
                                    break
                                }
                                return e.abrupt("return", c());
                            case 20:
                                return m = function() {
                                    D(w.currentRoute, w.currentRoute),
                                    R.call(n, w.currentRoute),
                                    M(n),
                                    c()
                                }
                                ,
                                e.next = 23,
                                new Promise((function(e) {
                                    return setTimeout(e, 0)
                                }
                                ));
                            case 23:
                                A.call(n, w.currentRoute, w.currentRoute, (function(path) {
                                    if (path) {
                                        var e = w.afterEach((function(t, n) {
                                            e(),
                                            m()
                                        }
                                        ));
                                        w.push(path, void 0, (function(e) {
                                            e && O(e)
                                        }
                                        ))
                                    } else
                                        m()
                                }
                                ));
                            case 24:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            Object(m.b)(null, C.config).then((function(e) {
                return F.apply(this, arguments)
            }
            )).catch(O)
        }
        .call(this, n(64))
    },
    648: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(27)
          , o = (n(97),
        n(54),
        n(38));
        function c() {
            return (c = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var n, r, c, l, d, m, path, h;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = t.store,
                            r = t.redirect,
                            c = t.route,
                            l = t.$cookies,
                            e.next = 19;
                            break;
                        case 7:
                            if ("wx" == c.query.type) {
                                e.next = 19;
                                break
                            }
                            if (l.get("homeReplace")) {
                                e.next = 19;
                                break
                            }
                            return e.prev = 10,
                            e.next = 13,
                            o.d.configHomePage();
                        case 13:
                            "0" === (d = e.sent).errCode && (l.set("homeReplace", 1),
                            r(d.data)),
                            e.next = 19;
                            break;
                        case 17:
                            e.prev = 17,
                            e.t0 = e.catch(10);
                        case 19:
                            (m = l.get("admin")) ? n.commit("setUserData", m) : n.commit("setUserData", null),
                            n.state.admin || "/about/jc" != c.path && (path = c.path,
                            h = !0,
                            "/" == path && (h = !1),
                            path && path.indexOf("/action") > -1 && (h = !1),
                            (path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/product") > -1 || path.indexOf("/plan") > -1 || path.indexOf("/square") > -1) || "/timeline" == path) && (h = !1),
                            h && n.commit("setShowLogin", !0));
                        case 22:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[10, 17]])
            }
            )))).apply(this, arguments)
        }
        t.default = function(e) {
            return c.apply(this, arguments)
        }
    },
    8: function(e, t, n) {
        "use strict";
        n.d(t, "k", (function() {
            return y
        }
        )),
        n.d(t, "l", (function() {
            return w
        }
        )),
        n.d(t, "e", (function() {
            return k
        }
        )),
        n.d(t, "b", (function() {
            return C
        }
        )),
        n.d(t, "r", (function() {
            return E
        }
        )),
        n.d(t, "g", (function() {
            return O
        }
        )),
        n.d(t, "h", (function() {
            return x
        }
        )),
        n.d(t, "d", (function() {
            return S
        }
        )),
        n.d(t, "q", (function() {
            return j
        }
        )),
        n.d(t, "j", (function() {
            return P
        }
        )),
        n.d(t, "s", (function() {
            return $
        }
        )),
        n.d(t, "n", (function() {
            return L
        }
        )),
        n.d(t, "p", (function() {
            return D
        }
        )),
        n.d(t, "f", (function() {
            return R
        }
        )),
        n.d(t, "c", (function() {
            return M
        }
        )),
        n.d(t, "i", (function() {
            return I
        }
        )),
        n.d(t, "o", (function() {
            return N
        }
        )),
        n.d(t, "a", (function() {
            return V
        }
        )),
        n.d(t, "t", (function() {
            return J
        }
        )),
        n.d(t, "m", (function() {
            return Q
        }
        ));
        n(125),
        n(12),
        n(131),
        n(132),
        n(15),
        n(10),
        n(16);
        var r = n(48)
          , o = n(27)
          , c = n(5)
          , l = n(70)
          , d = (n(97),
        n(14),
        n(933),
        n(31),
        n(54),
        n(55),
        n(96),
        n(11),
        n(71),
        n(80),
        n(98),
        n(23),
        n(56),
        n(227),
        n(316),
        n(225),
        n(88),
        n(167),
        n(936),
        n(128),
        n(129),
        n(4))
          , m = n(124);
        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        function v(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function y(e) {
            d.default.config.errorHandler && d.default.config.errorHandler(e)
        }
        function w(e) {
            return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
        }
        function k(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = e.$children || [], o = v(r);
            try {
                for (o.s(); !(t = o.n()).done; ) {
                    var c = t.value;
                    c.$fetch ? n.push(c) : c.$children && k(c, n)
                }
            } catch (e) {
                o.e(e)
            } finally {
                o.f()
            }
            return n
        }
        function C(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var n = e.options._originDataFn || e.options.data || function() {
                    return {}
                }
                ;
                e.options._originDataFn = n,
                e.options.data = function() {
                    var data = n.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                    f(f({}, data), t)
                }
                ,
                e.options.__hasNuxtData = !0,
                e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }
        function E(e) {
            return e.options && e._Ctor === e || (e.options ? (e._Ctor = e,
            e.extendOptions = e.options) : (e = d.default.extend(e))._Ctor = e,
            !e.options.name && e.options.__file && (e.options.name = e.options.__file)),
            e
        }
        function O(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function(e, r) {
                return Object.keys(e[n]).map((function(o) {
                    return t && t.push(r),
                    e[n][o]
                }
                ))
            }
            )))
        }
        function x(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return O(e, t, "instances")
        }
        function S(e, t) {
            return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                return Object.keys(e.components).reduce((function(r, o) {
                    return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o],
                    r
                }
                ), [])
            }
            )))
        }
        function j(e, t) {
            return Promise.all(S(e, function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r, o, c) {
                    var l, d;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof n || n.options) {
                                    e.next = 11;
                                    break
                                }
                                return e.prev = 1,
                                e.next = 4,
                                n();
                            case 4:
                                n = e.sent,
                                e.next = 11;
                                break;
                            case 7:
                                throw e.prev = 7,
                                e.t0 = e.catch(1),
                                e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(),
                                (!(d = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || d + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l),
                                window.location.reload(!0))),
                                e.t0;
                            case 11:
                                return o.components[c] = n = E(n),
                                e.abrupt("return", "function" == typeof t ? t(n, r, o, c) : n);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 7]])
                }
                )));
                return function(t, n, r, o) {
                    return e.apply(this, arguments)
                }
            }()))
        }
        function P(e) {
            return T.apply(this, arguments)
        }
        function T() {
            return (T = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4,
                            j(t);
                        case 4:
                            return e.abrupt("return", f(f({}, t), {}, {
                                meta: O(t).map((function(e, n) {
                                    return f(f({}, e.options.meta), (t.matched[n] || {}).meta)
                                }
                                ))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function $(e, t) {
            return A.apply(this, arguments)
        }
        function A() {
            return (A = Object(o.a)(regeneratorRuntime.mark((function e(t, n) {
                var o, c, d, h;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !1,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: n.payload,
                                error: n.error,
                                base: t.router.options.base,
                                env: {
                                    NUXT_ENV: "production"
                                }
                            },
                            n.req && (t.context.req = n.req),
                            n.res && (t.context.res = n.res),
                            n.ssrContext && (t.context.ssrContext = n.ssrContext),
                            t.context.redirect = function(e, path, n) {
                                if (e) {
                                    t.context._redirected = !0;
                                    var o = Object(r.a)(path);
                                    if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = path || {},
                                    path = e,
                                    o = Object(r.a)(path),
                                    e = 302),
                                    "object" === o && (path = t.router.resolve(path).route.fullPath),
                                    !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                                        throw path = Object(m.d)(path, n),
                                        window.location.replace(path),
                                        new Error("ERR_REDIRECT");
                                    t.context.next({
                                        path: path,
                                        query: n,
                                        status: e
                                    })
                                }
                            }
                            ,
                            t.context.nuxtState = window.__NUXT__),
                            e.next = 3,
                            Promise.all([P(n.route), P(n.from)]);
                        case 3:
                            o = e.sent,
                            c = Object(l.a)(o, 2),
                            d = c[0],
                            h = c[1],
                            n.route && (t.context.route = d),
                            n.from && (t.context.from = h),
                            t.context.next = n.next,
                            t.context._redirected = !1,
                            t.context._errored = !1,
                            t.context.isHMR = !1,
                            t.context.params = t.context.route.params || {},
                            t.context.query = t.context.route.query || {};
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function L(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : D(e[0], t).then((function() {
                return L(e.slice(1), t)
            }
            ))
        }
        function D(e, t) {
            var n;
            return (n = 2 === e.length ? new Promise((function(n) {
                e(t, (function(e, data) {
                    e && t.error(e),
                    n(data = data || {})
                }
                ))
            }
            )) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }
        function R(base, e) {
            if ("hash" === e)
                return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var t = (path || "/") + window.location.search + window.location.hash;
            return Object(m.c)(t)
        }
        function M(e, t) {
            return function(e, t) {
                for (var n = new Array(e.length), i = 0; i < e.length; i++)
                    "object" === Object(r.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$",W(t)));
                return function(t, r) {
                    for (var path = "", data = t || {}, o = (r || {}).pretty ? U : encodeURIComponent, c = 0; c < e.length; c++) {
                        var l = e[c];
                        if ("string" != typeof l) {
                            var d = data[l.name || "pathMatch"]
                              , m = void 0;
                            if (null == d) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(d)) {
                                if (!l.repeat)
                                    throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                if (0 === d.length) {
                                    if (l.optional)
                                        continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var h = 0; h < d.length; h++) {
                                    if (m = o(d[h]),
                                    !n[c].test(m))
                                        throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(m) + "`");
                                    path += (0 === h ? l.prefix : l.delimiter) + m
                                }
                            } else {
                                if (m = l.asterisk ? B(d) : o(d),
                                !n[c].test(m))
                                    throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + m + '"');
                                path += l.prefix + m
                            }
                        } else
                            path += l
                    }
                    return path
                }
            }(function(e, t) {
                var n, r = [], o = 0, c = 0, path = "", l = t && t.delimiter || "/";
                for (; null != (n = F.exec(e)); ) {
                    var d = n[0]
                      , m = n[1]
                      , h = n.index;
                    if (path += e.slice(c, h),
                    c = h + d.length,
                    m)
                        path += m[1];
                    else {
                        var f = e[c]
                          , v = n[2]
                          , _ = n[3]
                          , y = n[4]
                          , w = n[5]
                          , k = n[6]
                          , C = n[7];
                        path && (r.push(path),
                        path = "");
                        var E = null != v && null != f && f !== v
                          , O = "+" === k || "*" === k
                          , x = "?" === k || "*" === k
                          , S = n[2] || l
                          , pattern = y || w;
                        r.push({
                            name: _ || o++,
                            prefix: v || "",
                            delimiter: S,
                            optional: x,
                            repeat: O,
                            partial: E,
                            asterisk: Boolean(C),
                            pattern: pattern ? H(pattern) : C ? ".*" : "[^" + z(S) + "]+?"
                        })
                    }
                }
                c < e.length && (path += e.substr(c));
                path && r.push(path);
                return r
            }(e, t), t)
        }
        function I(e, t) {
            var n = {}
              , r = f(f({}, e), t);
            for (var o in r)
                String(e[o]) !== String(t[o]) && (n[o] = !0);
            return n
        }
        function N(e) {
            var t;
            if (e.message || "string" == typeof e)
                t = e.message || e;
            else
                try {
                    t = JSON.stringify(e, null, 2)
                } catch (n) {
                    t = "[".concat(e.constructor.name, "]")
                }
            return f(f({}, e), {}, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [],
        window.onNuxtReady = function(e) {
            window.onNuxtReadyCbs.push(e)
        }
        ;
        var F = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function U(e, t) {
            var n = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(n, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function B(e) {
            return U(e, !0)
        }
        function z(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function H(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }
        function W(e) {
            return e && e.sensitive ? "" : "i"
        }
        function V(e, t, n) {
            e.$options[t] || (e.$options[t] = []),
            e.$options[t].includes(n) || e.$options[t].push(n)
        }
        var J = m.b
          , Q = (m.e,
        m.a)
    },
    931: function(e, t, n) {
        "use strict";
        n.r(t);
        n(54),
        n(23),
        n(56);
        var r = n(99);
        t.default = function(e) {
            var t;
            if (null !== (t = e.route.query) && void 0 !== t && t.redirectUrl) {
                var n;
                if (e.userAgent = navigator.userAgent,
                e.deviceType = Object(r.a)(e.userAgent),
                e.deviceType.ismobile)
                    return e.redirect("/h5/investment-share?url=" + (null === (n = e.route.query) || void 0 === n ? void 0 : n.redirectUrl));
                e.$cookies.set("homePageRedirectUrl", e.route.query.redirectUrl)
            }
            if (e.route.path.indexOf("h5/image") > -1 && (e.userAgent = navigator.userAgent,
            e.deviceType = Object(r.a)(e.userAgent),
            !e.deviceType.ismobile))
                return e.redirect("/");
            if ("articleDetail" == e.route.name && (e.userAgent = navigator.userAgent,
            e.deviceType = Object(r.a)(e.userAgent),
            e.deviceType.ismobile && e.route.path.indexOf("/a/") > -1)) {
                var o = e.route.fullPath.replace(/^\/a\//, "/h5/article/");
                return e.redirect(o)
            }
            if ("announcementDetail" == e.route.name && (e.userAgent = navigator.userAgent,
            e.deviceType = Object(r.a)(e.userAgent),
            e.deviceType.ismobile)) {
                var c = e.route.fullPath.replace(/^\/announcement\//, "/h5/announcement/");
                return e.redirect(c)
            }
            if (e.route.path.indexOf("/u/") > -1 && (e.userAgent = navigator.userAgent,
            e.deviceType = Object(r.a)(e.userAgent),
            e.deviceType.ismobile && e.route.path.indexOf("/u/") > -1)) {
                var l = "/h5/mine?id=" + e.route.params.userId;
                return e.redirect(l)
            }
            if (e.route.path.indexOf("/action/detail") > -1) {
                if (e.userAgent = navigator.userAgent,
                e.deviceType = Object(r.a)(e.userAgent),
                e.deviceType.ismobile) {
                    var d = e.route.path.replace(/^\/action\/detail\//, "/h5/article/");
                    return e.redirect(d)
                }
                var m = e.route.path.replace(/^\/action\/detail\//, "/a/");
                return e.redirect(m)
            }
            if (e.route.path.indexOf("/user/mine") > -1) {
                if (e.userAgent = navigator.userAgent,
                e.deviceType = Object(r.a)(e.userAgent),
                e.deviceType.ismobile) {
                    var h = e.route.path.replace(/^\/user\/mine\//, "/h5/mine/");
                    return e.redirect(h)
                }
                var f = e.route.path.replace(/^\/user\/mine\//, "/u/");
                return e.redirect(f)
            }
            if (e.route.path.indexOf("/forword") > -1) {
                var v = e.route.path.replace(/\/forword/, "/forward");
                return e.redirect(v)
            }
        }
    },
    932: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = function(e) {
            e.store,
            e.redirect;
            var t = e.route;
            e.$cookies;
            console.log(t.params, "route.params")
        }
    },
    940: function(e, t, n) {
        var map = {
            "./account/open-account-list-page.vue": [1078, 88],
            "./account/open-account-page.vue": [1079, 108],
            "./action/ActionList.vue": [1080, 0, 2, 4, 6, 35],
            "./action/components/ActionList.vue": [1060, 102],
            "./action/components/EwmShareWechat.vue": [223],
            "./action/components/MarketSentiment/ActionsComments.vue": [1053, 0, 2, 4, 6, 46],
            "./action/components/MarketSentiment/Index.vue": [1061, 0, 2, 4, 6, 36],
            "./agree/AgreeMe.vue": [1081, 12, 75],
            "./agree/components/ArticleList.vue": [1073, 12],
            "./ai/aiChat-delete.vue": [1082, 5, 0, 1, 14, 66],
            "./ai/aiChat.vue": [1083, 137],
            "./ai/components/qrcode-dialog.vue": [1072, 14, 136],
            "./aiPage/components/EwmShareWechat.vue": [1062, 109],
            "./aiPage/components/IndustryListWidget.vue": [1063, 110],
            "./aiPage/industry-list-page.vue": [1084, 0, 57],
            "./aiPage/industry-page.vue": [1085, 0, 50],
            "./announcement/announcement-detail-page.vue": [1086, 48],
            "./announcement/announcement-page.vue": [1076, 9, 73],
            "./article/ArticleDetail.vue": [1087, 0, 2, 4, 39],
            "./article/ArticleDetailPreview.vue": [1088, 0, 2, 4, 40],
            "./article/ArticleEdit.vue": [1089, 0, 2, 49],
            "./article/ArticleModify.vue": [1090, 0, 2, 103],
            "./article/CommentReview.vue": [1091, 0, 2, 82],
            "./article/components/ActionForward.vue": [1046, 0, 2, 101],
            "./article/components/ActionReport.vue": [1041, 96],
            "./article/components/ArticleList.vue": [1044, 0, 1, 107],
            "./article/components/ArticleReward.vue": [1064, 111],
            "./article/components/EwmShareWechat.vue": [1043, 112],
            "./article/components/IntegralDialog.vue": [1054, 113],
            "./article/components/PayDialog.vue": [233],
            "./article/components/RewardAuthor.vue": [1040, 97],
            "./article/components/article-content.vue": [1092, 60],
            "./article/components/avatar-canvas.vue": [1042, 138],
            "./community/Community.vue": [50, 0, 1, 3],
            "./community/components/FollowDrop.vue": [1045, 114],
            "./focus/FocusList.vue": [1093, 0, 1, 79],
            "./h5/AnnouncementDetail.vue": [1094, 68],
            "./h5/ArticleDetail.vue": [1095, 69],
            "./h5/ShareIndustry.vue": [1096, 115],
            "./h5/TimeArticleShare.vue": [1097, 116],
            "./h5/UserInvite.vue": [1098, 92],
            "./h5/UserMine.vue": [1099, 74],
            "./h5/actionShare.vue": [1100, 7, 44],
            "./h5/aiShare.vue": [1101, 104],
            "./h5/canvasImage.vue": [1102, 80],
            "./h5/components/ArticleList.vue": [1065, 117],
            "./h5/imageShare.vue": [1103, 118],
            "./h5/industryChain.vue": [1104, 7, 72],
            "./h5/investment-share-page.vue": [1105, 86],
            "./h5/planShare.vue": [1106, 7, 98],
            "./h5/sentimentShare.vue": [1107, 7, 93],
            "./h5/shareIndustryChain.vue": [1108, 87],
            "./h5/tradeShare copy.vue": [1109, 83],
            "./h5/url-loading-page.vue": [1110, 119],
            "./index/Home.vue": [1111, 120],
            "./index/components/ForgetPassword.vue": [305],
            "./index/components/Login.vue": [33],
            "./index/components/Register.vue": [304],
            "./index/components/ResetPassword.vue": [303],
            "./index/components/match-register-content.vue": [1074, 0, 13],
            "./index/matchPage.vue": [1112, 0, 13, 94],
            "./industry/components/EwmShareWechat.vue": [1066, 121],
            "./industry/components/IndustryListWidget.vue": [1055, 122],
            "./industry/industry-list-page.vue": [1113, 0, 58],
            "./industry/industry-page.vue": [1114, 0, 51],
            "./industry_dev/components/EwmShareWechat.vue": [1056, 123],
            "./industry_dev/components/IndustryListWidget.vue": [1058, 124],
            "./industry_dev/components/table-tree-item.vue": [1050, 81],
            "./industry_dev/industry-list-page.vue": [1115, 0, 9, 10, 63],
            "./industry_dev/industry-page.vue": [1116, 0, 52],
            "./industry_dev/industry-share-list-page.vue": [1117, 0, 10, 77],
            "./investment/investment-page.vue": [1118, 56],
            "./mine/MineAction.vue": [1119, 5, 0, 1, 8, 125],
            "./mine/MineArticle.vue": [1120, 0, 1, 84],
            "./mine/MineBlack.vue": [1121, 54],
            "./mine/MineCare.vue": [1122, 55],
            "./mine/MineDraft.vue": [1123, 105],
            "./mine/MineEnergy.vue": [1124, 126],
            "./mine/MineInfo.vue": [1125, 0, 59],
            "./mine/MinePower.vue": [1126, 78],
            "./mine/MineReward.vue": [1127, 89],
            "./mine/MineRewardDetail.vue": [1128, 127],
            "./mine/MineWellat.vue": [1129, 128],
            "./mine/components/FansBtn.vue": [1039, 129],
            "./mine/components/FormRegion.vue": [1068, 106],
            "./mine/components/MineAside.vue": [221],
            "./mobile/app-open-account-list-page.vue": [1130, 90],
            "./mobile/app-open-account-page.vue": [1131, 130],
            "./newest/ArticleNewestPage.vue": [1132, 11, 91],
            "./newest/components/ArticleList.vue": [1075, 11],
            "./notices/Private.vue": [1077, 0, 45],
            "./notices/components/parivate-report.vue": [1069, 99],
            "./plan/components/ArticleCommentList.vue": [1049, 0, 2, 6, 61],
            "./plan/components/CommentEditor.vue": [1048, 0, 2, 131],
            "./plan/components/PlanList.vue": [1070, 0, 2, 4, 6, 43],
            "./plan/components/TradePlanDialog.vue": [1052, 0, 70],
            "./plan/plan-page.vue": [1133, 0, 9, 2, 4, 37],
            "./product/components/payEwm.vue": [1047, 132],
            "./product/components/product-article-list.vue": [1057, 71],
            "./product/product-article-page.vue": [1134, 47],
            "./product/product-order.vue": [1135, 62],
            "./product/product-page.vue": [1136, 41],
            "./protocol/Protocol.vue": [1137, 100],
            "./search/SearchPostOffice.vue": [1138, 0, 1, 42],
            "./system/AboutJc.vue": [1139, 0, 1, 85],
            "./system/JcIFrame.vue": [1140, 133],
            "./time-article/TimeArticleDetailPage.vue": [1141, 5, 0, 2, 4, 38],
            "./time-article/TimeArticleEditPage.vue": [1142, 0, 64],
            "./time-article/TimeArticleListPage.vue": [1143, 5, 0, 1, 8, 76],
            "./time-article/components/ShareArticleDialog.vue": [1051, 95],
            "./time-article/components/TimeArticleItem.vue": [1059, 67],
            "./time-article/components/TimeArticleList.vue": [1067, 5, 0, 8, 135],
            "./user/UserCare.vue": [1144, 0, 1, 65],
            "./user/UserMine.vue": [1145, 0, 1, 53],
            "./user/components/user-remark.vue": [1071, 134]
        };
        function r(e) {
            if (!n.o(map, e))
                return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                ));
            var t = map[e]
              , r = t[0];
            return Promise.all(t.slice(1).map(n.e)).then((function() {
                return n(r)
            }
            ))
        }
        r.keys = function() {
            return Object.keys(map)
        }
        ,
        r.id = 940,
        e.exports = r
    },
    941: function(e, t, n) {
        "use strict";
        n(420)
    },
    942: function(e, t, n) {
        e.exports = n.p + "img/ICP_icon.455720f.png"
    },
    943: function(e, t, n) {
        "use strict";
        n(421)
    },
    945: function(e, t, n) {
        var map = {
            "./af": 422,
            "./af.js": 422,
            "./ar": 423,
            "./ar-dz": 424,
            "./ar-dz.js": 424,
            "./ar-kw": 425,
            "./ar-kw.js": 425,
            "./ar-ly": 426,
            "./ar-ly.js": 426,
            "./ar-ma": 427,
            "./ar-ma.js": 427,
            "./ar-sa": 428,
            "./ar-sa.js": 428,
            "./ar-tn": 429,
            "./ar-tn.js": 429,
            "./ar.js": 423,
            "./az": 430,
            "./az.js": 430,
            "./be": 431,
            "./be.js": 431,
            "./bg": 432,
            "./bg.js": 432,
            "./bm": 433,
            "./bm.js": 433,
            "./bn": 434,
            "./bn-bd": 435,
            "./bn-bd.js": 435,
            "./bn.js": 434,
            "./bo": 436,
            "./bo.js": 436,
            "./br": 437,
            "./br.js": 437,
            "./bs": 438,
            "./bs.js": 438,
            "./ca": 439,
            "./ca.js": 439,
            "./cs": 440,
            "./cs.js": 440,
            "./cv": 441,
            "./cv.js": 441,
            "./cy": 442,
            "./cy.js": 442,
            "./da": 443,
            "./da.js": 443,
            "./de": 444,
            "./de-at": 445,
            "./de-at.js": 445,
            "./de-ch": 446,
            "./de-ch.js": 446,
            "./de.js": 444,
            "./dv": 447,
            "./dv.js": 447,
            "./el": 448,
            "./el.js": 448,
            "./en-au": 449,
            "./en-au.js": 449,
            "./en-ca": 450,
            "./en-ca.js": 450,
            "./en-gb": 451,
            "./en-gb.js": 451,
            "./en-ie": 452,
            "./en-ie.js": 452,
            "./en-il": 453,
            "./en-il.js": 453,
            "./en-in": 454,
            "./en-in.js": 454,
            "./en-nz": 455,
            "./en-nz.js": 455,
            "./en-sg": 456,
            "./en-sg.js": 456,
            "./eo": 457,
            "./eo.js": 457,
            "./es": 458,
            "./es-do": 459,
            "./es-do.js": 459,
            "./es-mx": 460,
            "./es-mx.js": 460,
            "./es-us": 461,
            "./es-us.js": 461,
            "./es.js": 458,
            "./et": 462,
            "./et.js": 462,
            "./eu": 463,
            "./eu.js": 463,
            "./fa": 464,
            "./fa.js": 464,
            "./fi": 465,
            "./fi.js": 465,
            "./fil": 466,
            "./fil.js": 466,
            "./fo": 467,
            "./fo.js": 467,
            "./fr": 468,
            "./fr-ca": 469,
            "./fr-ca.js": 469,
            "./fr-ch": 470,
            "./fr-ch.js": 470,
            "./fr.js": 468,
            "./fy": 471,
            "./fy.js": 471,
            "./ga": 472,
            "./ga.js": 472,
            "./gd": 473,
            "./gd.js": 473,
            "./gl": 474,
            "./gl.js": 474,
            "./gom-deva": 475,
            "./gom-deva.js": 475,
            "./gom-latn": 476,
            "./gom-latn.js": 476,
            "./gu": 477,
            "./gu.js": 477,
            "./he": 478,
            "./he.js": 478,
            "./hi": 479,
            "./hi.js": 479,
            "./hr": 480,
            "./hr.js": 480,
            "./hu": 481,
            "./hu.js": 481,
            "./hy-am": 482,
            "./hy-am.js": 482,
            "./id": 483,
            "./id.js": 483,
            "./is": 484,
            "./is.js": 484,
            "./it": 485,
            "./it-ch": 486,
            "./it-ch.js": 486,
            "./it.js": 485,
            "./ja": 487,
            "./ja.js": 487,
            "./jv": 488,
            "./jv.js": 488,
            "./ka": 489,
            "./ka.js": 489,
            "./kk": 490,
            "./kk.js": 490,
            "./km": 491,
            "./km.js": 491,
            "./kn": 492,
            "./kn.js": 492,
            "./ko": 493,
            "./ko.js": 493,
            "./ku": 494,
            "./ku.js": 494,
            "./ky": 495,
            "./ky.js": 495,
            "./lb": 496,
            "./lb.js": 496,
            "./lo": 497,
            "./lo.js": 497,
            "./lt": 498,
            "./lt.js": 498,
            "./lv": 499,
            "./lv.js": 499,
            "./me": 500,
            "./me.js": 500,
            "./mi": 501,
            "./mi.js": 501,
            "./mk": 502,
            "./mk.js": 502,
            "./ml": 503,
            "./ml.js": 503,
            "./mn": 504,
            "./mn.js": 504,
            "./mr": 505,
            "./mr.js": 505,
            "./ms": 506,
            "./ms-my": 507,
            "./ms-my.js": 507,
            "./ms.js": 506,
            "./mt": 508,
            "./mt.js": 508,
            "./my": 509,
            "./my.js": 509,
            "./nb": 510,
            "./nb.js": 510,
            "./ne": 511,
            "./ne.js": 511,
            "./nl": 512,
            "./nl-be": 513,
            "./nl-be.js": 513,
            "./nl.js": 512,
            "./nn": 514,
            "./nn.js": 514,
            "./oc-lnc": 515,
            "./oc-lnc.js": 515,
            "./pa-in": 516,
            "./pa-in.js": 516,
            "./pl": 517,
            "./pl.js": 517,
            "./pt": 518,
            "./pt-br": 519,
            "./pt-br.js": 519,
            "./pt.js": 518,
            "./ro": 520,
            "./ro.js": 520,
            "./ru": 521,
            "./ru.js": 521,
            "./sd": 522,
            "./sd.js": 522,
            "./se": 523,
            "./se.js": 523,
            "./si": 524,
            "./si.js": 524,
            "./sk": 525,
            "./sk.js": 525,
            "./sl": 526,
            "./sl.js": 526,
            "./sq": 527,
            "./sq.js": 527,
            "./sr": 528,
            "./sr-cyrl": 529,
            "./sr-cyrl.js": 529,
            "./sr.js": 528,
            "./ss": 530,
            "./ss.js": 530,
            "./sv": 531,
            "./sv.js": 531,
            "./sw": 532,
            "./sw.js": 532,
            "./ta": 533,
            "./ta.js": 533,
            "./te": 534,
            "./te.js": 534,
            "./tet": 535,
            "./tet.js": 535,
            "./tg": 536,
            "./tg.js": 536,
            "./th": 537,
            "./th.js": 537,
            "./tk": 538,
            "./tk.js": 538,
            "./tl-ph": 539,
            "./tl-ph.js": 539,
            "./tlh": 540,
            "./tlh.js": 540,
            "./tr": 541,
            "./tr.js": 541,
            "./tzl": 542,
            "./tzl.js": 542,
            "./tzm": 543,
            "./tzm-latn": 544,
            "./tzm-latn.js": 544,
            "./tzm.js": 543,
            "./ug-cn": 545,
            "./ug-cn.js": 545,
            "./uk": 546,
            "./uk.js": 546,
            "./ur": 547,
            "./ur.js": 547,
            "./uz": 548,
            "./uz-latn": 549,
            "./uz-latn.js": 549,
            "./uz.js": 548,
            "./vi": 550,
            "./vi.js": 550,
            "./x-pseudo": 551,
            "./x-pseudo.js": 551,
            "./yo": 552,
            "./yo.js": 552,
            "./zh-cn": 553,
            "./zh-cn.js": 553,
            "./zh-hk": 554,
            "./zh-hk.js": 554,
            "./zh-mo": 555,
            "./zh-mo.js": 555,
            "./zh-tw": 556,
            "./zh-tw.js": 556
        };
        function r(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return map[e]
        }
        r.keys = function() {
            return Object.keys(map)
        }
        ,
        r.resolve = o,
        e.exports = r,
        r.id = 945
    },
    946: function(e, t, n) {
        "use strict";
        n(557)
    },
    947: function(e, t, n) {
        "use strict";
        n(558)
    },
    948: function(e, t, n) {
        "use strict";
        n(559)
    },
    949: function(e, t, n) {
        "use strict";
        n(560)
    },
    95: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return fn
        }
        )),
        n.d(t, "a", (function() {
            return S
        }
        ));
        var r = {};
        n.r(r),
        n.d(r, "ButtonBlue", (function() {
            return Le
        }
        )),
        n.d(r, "ButtonCancel", (function() {
            return De
        }
        )),
        n.d(r, "EmptyPage", (function() {
            return Re
        }
        )),
        n.d(r, "FormTag", (function() {
            return Me
        }
        )),
        n.d(r, "IndexRightAside", (function() {
            return Ie
        }
        )),
        n.d(r, "JcImage", (function() {
            return Ne
        }
        )),
        n.d(r, "OpenAppButton", (function() {
            return qe
        }
        )),
        n.d(r, "UpLoadFile", (function() {
            return Fe
        }
        )),
        n.d(r, "UploadImage", (function() {
            return Ue
        }
        )),
        n.d(r, "UserCard", (function() {
            return Be
        }
        )),
        n.d(r, "UserMedalList", (function() {
            return ze
        }
        )),
        n.d(r, "VImage", (function() {
            return He
        }
        )),
        n.d(r, "EwmDialog", (function() {
            return We
        }
        )),
        n.d(r, "ExpireDialog", (function() {
            return Ve
        }
        )),
        n.d(r, "JcBanner", (function() {
            return Je
        }
        )),
        n.d(r, "NewestList", (function() {
            return Qe
        }
        )),
        n.d(r, "SignDialog", (function() {
            return Ke
        }
        )),
        n.d(r, "UserMineInfo", (function() {
            return Ge
        }
        )),
        n.d(r, "CommentArticleCommentList", (function() {
            return Ye
        }
        )),
        n.d(r, "CommentEditor", (function() {
            return Xe
        }
        )),
        n.d(r, "CommentList", (function() {
            return Ze
        }
        )),
        n.d(r, "CommonHeader", (function() {
            return et
        }
        )),
        n.d(r, "Editor", (function() {
            return tt
        }
        )),
        n.d(r, "EditorLinkDialog", (function() {
            return nt
        }
        )),
        n.d(r, "OrderList", (function() {
            return it
        }
        )),
        n.d(r, "SpinnerSpin", (function() {
            return ot
        }
        )),
        n.d(r, "Spinner", (function() {
            return at
        }
        ));
        n(11),
        n(12),
        n(14),
        n(15),
        n(10),
        n(16);
        var o = n(27)
          , c = n(5)
          , l = (n(97),
        n(54),
        n(96),
        n(31),
        n(23),
        n(56),
        n(4))
          , d = n(7)
          , m = n(591)
          , h = n(307)
          , f = n.n(h)
          , v = n(144)
          , _ = n.n(v)
          , y = n(593);
        function w(e, t) {
            return Object(y.a)(e, null, null, t)
        }
        var k = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render: function(e, t) {
                var n = t.parent
                  , data = t.data
                  , r = t.props
                  , o = n.$createElement;
                data.nuxtChild = !0;
                for (var c = n, l = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, m = 0; n; )
                    n.$vnode && n.$vnode.data.nuxtChild && m++,
                    n = n.$parent;
                data.nuxtChildDepth = m;
                var h = l[m] || d
                  , f = {};
                C.forEach((function(e) {
                    void 0 !== h[e] && (f[e] = h[e])
                }
                ));
                var v = {};
                E.forEach((function(e) {
                    "function" == typeof h[e] && (v[e] = h[e].bind(c))
                }
                ));
                var _ = v.beforeEnter;
                if (v.beforeEnter = function(e) {
                    if (window.$nuxt.$nextTick((function() {
                        window.$nuxt.$emit("triggerScroll")
                    }
                    )),
                    _)
                        return _.call(c, e)
                }
                ,
                !1 === h.css) {
                    var y = v.leave;
                    (!y || y.length < 2) && (v.leave = function(e, t) {
                        y && y.call(c, e),
                        c.$nextTick(t)
                    }
                    )
                }
                var w = o("routerView", data);
                return r.keepAlive && (w = o("keep-alive", {
                    props: r.keepAliveProps
                }, [w])),
                o("transition", {
                    props: f,
                    on: v
                }, [w])
            }
        }
          , C = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
          , E = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
          , O = {
            props: ["error"],
            layout: "head"
        }
          , x = n(6)
          , S = Object(x.a)(O, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "container"
            }, [404 === e.error.statusCode ? n("h1", [e._v("页面未找到或系统发生错误")]) : n("h1", [e._v(e._s(e.error.message))]), e._v(" "), 404 === e.error.statusCode ? n("nuxt-link", {
                attrs: {
                    to: "/"
                }
            }, [e._v("返回首页")]) : e._e()], 1)
        }
        ), [], !1, null, null, null).exports
          , j = n(70)
          , P = (n(88),
        n(8))
          , T = {
            name: "Nuxt",
            components: {
                NuxtChild: k,
                NuxtError: S
            },
            props: {
                nuxtChildKey: {
                    type: String,
                    default: void 0
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                },
                name: {
                    type: String,
                    default: "default"
                }
            },
            errorCaptured: function(e) {
                this.displayingNuxtError && (this.errorFromNuxtError = e,
                this.$forceUpdate())
            },
            computed: {
                routerViewKey: function() {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                        return this.nuxtChildKey || Object(P.c)(this.$route.matched[0].path)(this.$route.params);
                    var e = Object(j.a)(this.$route.matched, 1)[0];
                    if (!e)
                        return this.$route.path;
                    var t = e.components.default;
                    if (t && t.options) {
                        var n = t.options;
                        if (n.key)
                            return "function" == typeof n.key ? n.key(this.$route) : n.key
                    }
                    return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function() {
                l.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function(e) {
                var t = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                    return t.errorFromNuxtError = !1
                }
                )),
                e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                    props: {
                        to: "/"
                    }
                }, "Go back to home")])) : (this.displayingNuxtError = !0,
                this.$nextTick((function() {
                    return t.displayingNuxtError = !1
                }
                )),
                e(S, {
                    props: {
                        error: this.nuxt.err
                    }
                })) : e("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            }
        }
          , $ = (n(98),
        n(125),
        n(131),
        n(132),
        n(71),
        n(80),
        n(52),
        {
            name: "NuxtLoading",
            data: function() {
                return {
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }
            },
            computed: {
                left: function() {
                    return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                }
            },
            beforeDestroy: function() {
                this.clear()
            },
            methods: {
                clear: function() {
                    clearInterval(this._timer),
                    clearTimeout(this._throttle),
                    this._timer = null
                },
                start: function() {
                    var e = this;
                    return this.clear(),
                    this.percent = 0,
                    this.reversed = !1,
                    this.skipTimerCount = 0,
                    this.canSucceed = !0,
                    this.throttle ? this._throttle = setTimeout((function() {
                        return e.startTimer()
                    }
                    ), this.throttle) : this.startTimer(),
                    this
                },
                set: function(e) {
                    return this.show = !0,
                    this.canSucceed = !0,
                    this.percent = Math.min(100, Math.max(0, Math.floor(e))),
                    this
                },
                get: function() {
                    return this.percent
                },
                increase: function(e) {
                    return this.percent = Math.min(100, Math.floor(this.percent + e)),
                    this
                },
                decrease: function(e) {
                    return this.percent = Math.max(0, Math.floor(this.percent - e)),
                    this
                },
                pause: function() {
                    return clearInterval(this._timer),
                    this
                },
                resume: function() {
                    return this.startTimer(),
                    this
                },
                finish: function() {
                    return this.percent = this.reversed ? 0 : 100,
                    this.hide(),
                    this
                },
                hide: function() {
                    var e = this;
                    return this.clear(),
                    setTimeout((function() {
                        e.show = !1,
                        e.$nextTick((function() {
                            e.percent = 0,
                            e.reversed = !1
                        }
                        ))
                    }
                    ), 500),
                    this
                },
                fail: function(e) {
                    return this.canSucceed = !1,
                    this
                },
                startTimer: function() {
                    var e = this;
                    this.show || (this.show = !0),
                    void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                    this._timer = setInterval((function() {
                        e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                        e.continuous && (e.percent >= 100 || e.percent <= 0) && (e.skipTimerCount = 1,
                        e.reversed = !e.reversed))
                    }
                    ), 100)
                }
            },
            render: function(e) {
                var t = e(!1);
                return this.show && (t = e("div", {
                    staticClass: "nuxt-progress",
                    class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                    },
                    style: {
                        width: this.percent + "%",
                        left: this.left
                    }
                })),
                t
            }
        })
          , A = (n(941),
        Object(x.a)($, undefined, undefined, !1, null, null, null).exports)
          , L = (n(42),
        n(35))
          , D = n(36)
          , R = n(33)
          , M = n(29)
          , I = n(37);
        function N(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function F(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? N(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : N(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var U = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            mounted: function() {
                var e = this
                  , t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1)
            },
            computed: {
                visitor: function() {
                    var path = this.$route.path
                      , e = !0;
                    return "/" == path && (e = !1),
                    path && path.indexOf("/action") > -1 && (e = !1),
                    path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (e = !1),
                    e
                }
            },
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default
            },
            methods: F(F(F({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , B = (n(961),
        Object(x.a)(U, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main"
            }, [n("nuxt", {
                key: e.$route.fullPath
            })], 1), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "a67f7c92", null).exports);
        function z(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function H(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? z(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : z(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var W = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            mounted: function() {
                var e = this
                  , t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1)
            },
            computed: {
                visitor: function() {
                    var path = this.$route.path
                      , e = !0;
                    return "/" == path && (e = !1),
                    path && path.indexOf("/action") > -1 && (e = !1),
                    path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (e = !1),
                    e
                }
            },
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default
            },
            methods: H(H(H({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , V = (n(962),
        Object(x.a)(W, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main"
            }, [n("nuxt", {
                key: e.$route.fullPath
            })], 1), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "2da7188d", null).exports);
        function J(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function Q(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? J(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : J(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var K = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            watch: {
                $route: {
                    handler: function() {}
                }
            },
            mounted: function() {
                var e = this
                  , t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1)
            },
            computed: {
                visitor: function() {
                    var path = this.$route.path
                      , e = !0;
                    return "/" == path && (e = !1),
                    path && path.indexOf("/action") > -1 && (e = !1),
                    path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (e = !1),
                    e
                }
            },
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default
            },
            methods: Q(Q(Q({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , G = (n(963),
        Object(x.a)(K, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("nuxt", {
                key: e.$route.fullPath
            }), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "e12b39d0", null).exports)
          , Y = n(302);
        function X(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function Z(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? X(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : X(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var ee = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.setShowLogin(!1),
                this.fetchData()
            },
            watch: {
                $route: {
                    handler: function() {
                        var e = this;
                        setTimeout((function() {
                            var t = e.$refs.aside.$el.offsetHeight
                              , n = e.$refs.jcHome.offsetHeight;
                            t > n ? e.contentHeight = t + "px" : n >= t && (e.contentHeight = "100%")
                        }
                        ), 400)
                    }
                }
            },
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    var t = e.$refs.aside.$el.offsetHeight
                      , n = e.$refs.jcHome.offsetHeight;
                    t > n ? e.contentHeight = t + "px" : n >= t && (e.contentHeight = "100%")
                }
                ), 400);
                var t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1),
                this.initNewestArticleTool()
            },
            computed: Z(Z({}, Object(d.e)(["isShowNewestTool"])), {}, {
                visitor: function() {
                    var path = this.$route.path
                      , e = !0;
                    return "/" == path && (e = !1),
                    path && path.indexOf("/action") > -1 && (e = !1),
                    path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (e = !1),
                    e
                }
            }),
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default,
                NewestList: Y.default
            },
            methods: Z(Z(Z({}, Object(d.d)({
                setShowLogin: "setShowLogin",
                initNewestArticleTool: "initNewestArticleTool"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , te = (n(969),
        Object(x.a)(ee, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main",
                class: {
                    "jc-home-main-newest": e.isShowNewestTool
                }
            }, [e.isShowNewestTool ? n("newest-list") : e._e(), e._v(" "), n("nuxt", {
                key: e.$route.fullPath
            }), e._v(" "), n("index-right-aside", {
                ref: "aside",
                staticClass: "jc-aside"
            })], 1), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "3fc11c62", null))
          , ne = te.exports;
        installComponents(te, {
            NewestList: n(302).default,
            IndexRightAside: n(35).default
        });
        var re = {
            name: "App",
            data: function() {
                return {}
            },
            created: function() {},
            mounted: function() {
                var e = decodeURIComponent(document.cookie).split(";")
                  , t = {};
                if (e.forEach((function(i) {
                    var e = i.split("=");
                    t[e[0]] = e[1]
                }
                )),
                t[" admin"] && JSON.parse(t[" admin"]) && JSON.parse(t[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var n = JSON.parse(t[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", n)
                }
            },
            components: {},
            methods: {}
        }
          , ie = (n(970),
        n(971),
        Object(x.a)(re, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "containers",
                attrs: {
                    id: "app"
                }
            }, [n("nuxt", {
                key: e.$route.fullPath
            })], 1)
        }
        ), [], !1, null, "9e91d814", null).exports);
        function oe(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function ae(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? oe(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : oe(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var se = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            watch: {
                $route: {
                    handler: function() {
                        var e = this;
                        setTimeout((function() {
                            var t = e.$refs.aside.$el.offsetHeight
                              , n = e.$refs.jcHome.offsetHeight;
                            t > n ? e.contentHeight = t + "px" : n >= t && (e.contentHeight = "100%")
                        }
                        ), 400)
                    }
                }
            },
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    var t = e.$refs.aside.$el.offsetHeight
                      , n = e.$refs.jcHome.offsetHeight;
                    t > n ? e.contentHeight = t + "px" : n >= t && (e.contentHeight = "100%")
                }
                ), 400);
                var t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1)
            },
            computed: {
                visitor: function() {
                    var path = this.$route.path
                      , e = !0;
                    return "/" == path && (e = !1),
                    path && path.indexOf("/action") > -1 && (e = !1),
                    path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (e = !1),
                    e
                }
            },
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default
            },
            methods: ae(ae(ae({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , ce = (n(972),
        Object(x.a)(se, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main"
            }, [n("nuxt", {
                key: e.$route.fullPath
            }), e._v(" "), n("index-right-aside", {
                ref: "aside",
                staticClass: "jc-aside"
            })], 1), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "e8aed1ae", null))
          , ue = ce.exports;
        installComponents(ce, {
            IndexRightAside: n(35).default
        });
        var head = n(588);
        function le(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function pe(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? le(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : le(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var de = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            mounted: function() {
                var e = this
                  , t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1)
            },
            computed: {
                visitor: function() {
                    var path = this.$route.path
                      , e = !0;
                    return "/" == path && (e = !1),
                    path && path.indexOf("/action") > -1 && (e = !1),
                    path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (e = !1),
                    e
                }
            },
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default
            },
            methods: pe(pe(pe({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , me = (n(974),
        Object(x.a)(de, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main"
            }, [n("nuxt", {
                key: e.$route.fullPath
            })], 1), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "e08ef19a", null).exports);
        function he(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function fe(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? he(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : he(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var ve = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            mounted: function() {
                var e = this
                  , t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1)
            },
            computed: {
                visitor: function() {
                    var path = this.$route.path
                      , e = !0;
                    return "/" == path && (e = !1),
                    path && path.indexOf("/action") > -1 && (e = !1),
                    path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (e = !1),
                    e
                }
            },
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default
            },
            methods: fe(fe(fe({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , _e = (n(975),
        Object(x.a)(ve, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main"
            }, [n("nuxt", {
                key: e.$route.fullPath
            })], 1), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "b75357c8", null).exports);
        function ge(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function ye(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ge(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ge(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var be = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    right: 0,
                    contentHeight: "100%"
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            watch: {
                $route: {
                    handler: function() {}
                }
            },
            mounted: function() {
                var e = this;
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto"
                });
                var t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
                ;
                var path = this.$route.path
                  , o = !0;
                "/" == path && (o = !1),
                path && path.indexOf("/action") > -1 && (o = !1),
                path && (path.indexOf("/live") > -1 || path.indexOf("/study") > -1 || path.indexOf("/square") > -1) && (o = !1),
                o || "wx" == this.$route.query.type || this.$store.commit("setShowLogin", !1)
            },
            components: {
                "v-header": D.default,
                IndexRightAside: L.default,
                Login: R.default
            },
            methods: ye(ye(ye({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo", "getCounts"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 1024;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.$cookies.get("SESSION") && this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , we = (n(976),
        Object(x.a)(be, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "jcHome",
                staticClass: "jc-home",
                style: {
                    height: e.contentHeight
                }
            }, [n("v-header"), e._v(" "), n("nuxt", {
                key: e.$route.fullPath
            }), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "faebbe02", null).exports)
          , ke = n(221);
        function Ce(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function Ee(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Ce(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Ce(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var Oe = {
            name: "Home",
            middleware: "auth",
            mixins: [M.a, I.a],
            data: function() {
                return {
                    scrollToTop: !0,
                    right: 0
                }
            },
            created: function() {
                if ("wx" == this.$route.query.type && !this.$route.query.login && this.$route.query.openid)
                    return this.setShowLogin(!0),
                    !1;
                this.fetchData()
            },
            mounted: function() {
                var e = this
                  , t = decodeURIComponent(document.cookie).split(";")
                  , n = {};
                if (t.forEach((function(i) {
                    var e = i.split("=");
                    n[e[0]] = e[1]
                }
                )),
                n[" admin"] && JSON.parse(n[" admin"]) && JSON.parse(n[" admin"]).sessionToken && !$nuxt.$cookies.get("SESSION")) {
                    var r = JSON.parse(n[" admin"]).sessionToken;
                    $nuxt.$cookies.set("SESSION", r)
                }
                this.getBackTopRight(),
                window.onresize = function() {
                    e.getBackTopRight()
                }
            },
            components: {
                "v-header": D.default,
                MineAside: ke.default,
                Login: R.default
            },
            methods: Ee(Ee(Ee({}, Object(d.d)({
                setShowLogin: "setShowLogin"
            })), Object(d.b)(["getOSSToken", "getUserInfo"])), {}, {
                getBackTopRight: function() {
                    var e = window.document.body.offsetWidth
                      , t = parseInt((e - 824) / 2) + 834;
                    this.right = e - t
                },
                fetchData: function() {
                    var e = this;
                    this.getUserInfo().then((function(t) {
                        e.$cookies.set("admin", t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            })
        }
          , xe = (n(978),
        Object(x.a)(Oe, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "jc-home"
            }, [n("v-header"), e._v(" "), n("div", {
                staticClass: "jc-home-main"
            }, [n("nuxt", {
                key: e.$route.fullPath
            }), e._v(" "), n("mine-aside", {
                staticClass: "jc-aside",
                attrs: {
                    isActive: !0
                }
            })], 1), e._v(" "), n("el-backtop", {
                attrs: {
                    right: e.right,
                    bottom: 100
                }
            }), e._v(" "), e.$store.state.isShowLogin ? n("login") : e._e()], 1)
        }
        ), [], !1, null, "1dfed6c8", null).exports);
        function Se(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return je(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return je(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function je(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        var Pe = {
            _account: Object(P.r)(B),
            _AiFirst: Object(P.r)(V),
            _announcement: Object(P.r)(G),
            "_community-first": Object(P.r)(ne),
            _default: Object(P.r)(ie),
            _first: Object(P.r)(ue),
            _head: Object(P.r)(head.a),
            _industry: Object(P.r)(me),
            _investment: Object(P.r)(_e),
            _plan: Object(P.r)(we),
            _second: Object(P.r)(xe)
        }
          , Te = {
            render: function(e, t) {
                var n = e("NuxtLoading", {
                    ref: "loading"
                })
                  , r = e(this.layout || "nuxt")
                  , o = e("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [r])
                  , c = e("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    },
                    on: {
                        beforeEnter: function(e) {
                            window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            }
                            ))
                        }
                    }
                }, [o]);
                return e("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [n, c])
            },
            data: function() {
                return {
                    isOnline: !0,
                    layout: null,
                    layoutName: "",
                    nbFetching: 0
                }
            },
            beforeCreate: function() {
                l.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function() {
                this.$root.$options.$nuxt = this,
                window.$nuxt = this,
                this.refreshOnlineStatus(),
                window.addEventListener("online", this.refreshOnlineStatus),
                window.addEventListener("offline", this.refreshOnlineStatus),
                this.error = this.nuxt.error,
                this.context = this.$options.context
            },
            mounted: function() {
                var e = this;
                return Object(o.a)(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e.$loading = e.$refs.loading;
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            computed: {
                isOffline: function() {
                    return !this.isOnline
                },
                isFetching: function() {
                    return this.nbFetching > 0
                }
            },
            methods: {
                refreshOnlineStatus: function() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                refresh: function() {
                    var e = this;
                    return Object(o.a)(regeneratorRuntime.mark((function t() {
                        var n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ((n = Object(P.h)(e.$route)).length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return e.$loading.start(),
                                    r = n.map((function(t) {
                                        var p = [];
                                        if (t.$options.fetch && t.$options.fetch.length && p.push(Object(P.p)(t.$options.fetch, e.context)),
                                        t.$fetch)
                                            p.push(t.$fetch());
                                        else {
                                            var n, r = Se(Object(P.e)(t.$vnode.componentInstance));
                                            try {
                                                for (r.s(); !(n = r.n()).done; ) {
                                                    var component = n.value;
                                                    p.push(component.$fetch())
                                                }
                                            } catch (e) {
                                                r.e(e)
                                            } finally {
                                                r.f()
                                            }
                                        }
                                        return t.$options.asyncData && p.push(Object(P.p)(t.$options.asyncData, e.context).then((function(e) {
                                            for (var n in e)
                                                l.default.set(t.$data, n, e[n])
                                        }
                                        ))),
                                        Promise.all(p)
                                    }
                                    )),
                                    t.prev = 5,
                                    t.next = 8,
                                    Promise.all(r);
                                case 8:
                                    t.next = 15;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(5),
                                    e.$loading.fail(t.t0),
                                    Object(P.k)(t.t0),
                                    e.error(t.t0);
                                case 15:
                                    e.$loading.finish();
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[5, 10]])
                    }
                    )))()
                },
                errorChanged: function() {
                    if (this.nuxt.err) {
                        this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                        this.$loading.finish && this.$loading.finish());
                        var e = (S.options || S).layout;
                        "function" == typeof e && (e = e(this.context)),
                        this.setLayout(e)
                    }
                },
                setLayout: function(e) {
                    return e && Pe["_" + e] || (e = "default"),
                    this.layoutName = e,
                    this.layout = Pe["_" + e],
                    this.layout
                },
                loadLayout: function(e) {
                    return e && Pe["_" + e] || (e = "default"),
                    Promise.resolve(Pe["_" + e])
                }
            },
            components: {
                NuxtLoading: A
            }
        };
        l.default.use(d.a);
        var $e = {};
        ($e = function(e, t) {
            if ((e = e.default || e).commit)
                throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
            return "function" != typeof e && (e = Object.assign({}, e)),
            function(e, t) {
                if (e.state && "function" != typeof e.state) {
                    console.warn("'state' should be a method that returns an object in ".concat(t));
                    var n = Object.assign({}, e.state);
                    e = Object.assign({}, e, {
                        state: function() {
                            return n
                        }
                    })
                }
                return e
            }(e, t)
        }(n(391), "store/index.js")).modules = $e.modules || {};
        var Ae = $e instanceof Function ? $e : function() {
            return new d.a.Store(Object.assign({
                strict: !1
            }, $e))
        }
        ;
        n(128),
        n(129);
        var Le = function() {
            return Promise.resolve().then(n.bind(null, 310)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , De = function() {
            return Promise.resolve().then(n.bind(null, 311)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Re = function() {
            return Promise.resolve().then(n.bind(null, 216)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Me = function() {
            return n.e(22).then(n.bind(null, 1338)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ie = function() {
            return Promise.resolve().then(n.bind(null, 35)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ne = function() {
            return n.e(23).then(n.bind(null, 1146)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , qe = function() {
            return n.e(24).then(n.bind(null, 1195)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Fe = function() {
            return Promise.all([n.e(0), n.e(27)]).then(n.bind(null, 1337)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ue = function() {
            return Promise.all([n.e(0), n.e(28)]).then(n.bind(null, 1147)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Be = function() {
            return n.e(29).then(n.bind(null, 1170)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , ze = function() {
            return n.e(30).then(n.bind(null, 1341)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , He = function() {
            return n.e(32).then(n.bind(null, 1581)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , We = function() {
            return Promise.resolve().then(n.bind(null, 214)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ve = function() {
            return n.e(21).then(n.bind(null, 1340)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Je = function() {
            return Promise.resolve().then(n.bind(null, 301)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Qe = function() {
            return Promise.resolve().then(n.bind(null, 302)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ke = function() {
            return n.e(26).then(n.bind(null, 1226)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ge = function() {
            return n.e(31).then(n.bind(null, 1193)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ye = function() {
            return Promise.all([n.e(0), n.e(2), n.e(17)]).then(n.bind(null, 1231)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Xe = function() {
            return Promise.all([n.e(0), n.e(2), n.e(18)]).then(n.bind(null, 1164)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , Ze = function() {
            return Promise.all([n.e(0), n.e(2), n.e(4), n.e(19)]).then(n.bind(null, 1192)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , et = function() {
            return Promise.resolve().then(n.bind(null, 36)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , tt = function() {
            return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, 1189)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , nt = function() {
            return n.e(20).then(n.bind(null, 1444)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , it = function() {
            return n.e(25).then(n.bind(null, 1339)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , ot = function() {
            return Promise.resolve().then(n.bind(null, 309)).then((function(e) {
                return st(e.default || e)
            }
            ))
        }
          , at = function() {
            return Promise.resolve().then(n.bind(null, 599)).then((function(e) {
                return st(e.default || e)
            }
            ))
        };
        function st(e) {
            if (!e || !e.functional)
                return e;
            var t = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
            return {
                render: function(n) {
                    var r = {}
                      , o = {};
                    for (var c in this.$attrs)
                        t.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                    return n(e, {
                        on: this.$listeners,
                        attrs: r,
                        props: o,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        for (var ct in r)
            l.default.component(ct, r[ct]),
            l.default.component("Lazy" + ct, r[ct]);
        var ut = n(94)
          , lt = n.n(ut)
          , pt = n(594);
        function mt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function ht(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? mt(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : mt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        function ft(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return vt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return vt(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function vt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        for (var _t = {
            setBaseURL: function(e) {
                this.defaults.baseURL = e
            },
            setHeader: function(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common", o = ft(Array.isArray(r) ? r : [r]);
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var c = n.value;
                        t ? this.defaults.headers[c][e] = t : delete this.defaults.headers[c][e]
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            },
            setToken: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common"
                  , r = e ? (t ? t + " " : "") + e : null;
                this.setHeader("Authorization", r, n)
            },
            onRequest: function(e) {
                this.interceptors.request.use((function(t) {
                    return e(t) || t
                }
                ))
            },
            onResponse: function(e) {
                this.interceptors.response.use((function(t) {
                    return e(t) || t
                }
                ))
            },
            onRequestError: function(e) {
                this.interceptors.request.use(void 0, (function(t) {
                    return e(t) || Promise.reject(t)
                }
                ))
            },
            onResponseError: function(e) {
                this.interceptors.response.use(void 0, (function(t) {
                    return e(t) || Promise.reject(t)
                }
                ))
            },
            onError: function(e) {
                this.onRequestError(e),
                this.onResponseError(e)
            },
            create: function(e) {
                return wt(Object(pt.a)(e, this.defaults))
            }
        }, gt = function() {
            var e = bt[yt];
            _t["$" + e] = function() {
                return this[e].apply(this, arguments).then((function(e) {
                    return e && e.data
                }
                ))
            }
        }, yt = 0, bt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; yt < bt.length; yt++)
            gt();
        var wt = function(e) {
            var t = lt.a.create(e);
            return t.CancelToken = lt.a.CancelToken,
            t.isCancel = lt.a.isCancel,
            function(e) {
                for (var t in _t)
                    e[t] = _t[t].bind(e)
            }(t),
            t.onRequest((function(e) {
                e.headers = ht(ht({}, t.defaults.headers.common), e.headers)
            }
            )),
            kt(t),
            Ct(t),
            t
        }
          , kt = function(e) {
            e.onRequest((function(e) {
                void 0 === e.withCredentials && (/^https?:\/\//i.test(e.url) && 0 !== e.url.indexOf(e.baseURL) || (e.withCredentials = !0))
            }
            ))
        }
          , Ct = function(e) {
            var t = {
                finish: function() {},
                start: function() {},
                fail: function() {},
                set: function() {}
            }
              , n = function() {
                var e = "undefined" != typeof window && window.$nuxt;
                return e && e.$loading && e.$loading.set ? e.$loading : t
            }
              , r = 0;
            e.onRequest((function(e) {
                e && !1 === e.progress || r++
            }
            )),
            e.onResponse((function(e) {
                e && e.config && !1 === e.config.progress || --r <= 0 && (r = 0,
                n().finish())
            }
            )),
            e.onError((function(e) {
                e && e.config && !1 === e.config.progress || (r--,
                lt.a.isCancel(e) ? r <= 0 && (r = 0,
                n().finish()) : (n().fail(),
                n().finish()))
            }
            ));
            var o = function(e) {
                if (r && e.total) {
                    var progress = 100 * e.loaded / (e.total * r);
                    n().set(Math.min(100, progress))
                }
            };
            e.defaults.onUploadProgress = o,
            e.defaults.onDownloadProgress = o
        }
          , Et = function(e, t) {
            var n = e.$config && e.$config.axios || {}
              , r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/";
            var o = wt({
                baseURL: r,
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    delete: {},
                    get: {},
                    head: {},
                    post: {},
                    put: {},
                    patch: {}
                }
            });
            e.$axios = o,
            t("axios", o)
        }
          , Ot = n(595)
          , xt = n.n(Ot)
          , St = function(e, t) {
            var n = e.req
              , r = e.res
              , o = !0;
            t("cookies", xt()(n, r, o))
        }
          , jt = n(38)
          , Pt = {
            Event_Tab_Fluctuations: {
                name: "异动",
                key: "Event_Tab_Fluctuations"
            },
            Event_Tab_Follow: {
                name: "关注",
                key: "Event_Tab_Follow"
            },
            Event_Tab_Community: {
                name: "社群",
                key: "Event_Tab_Community"
            },
            Event_Tab_Message: {
                name: "消息",
                key: "Event_Tab_Message"
            },
            Event_Tab_Mine: {
                name: "我的",
                key: "Event_Tab_Mine"
            },
            Event_User_HomePage: {
                name: "点开用户个人主页",
                key: "Event_User_HomePage"
            },
            Event_Tab_Ai: {
                name: "公社Ai",
                key: "Event_Tab_Ai"
            },
            Event_Ai_Send: {
                name: "公社Ai对话发送",
                key: "Event_Ai_Send"
            },
            Event_Fluctuations_AllColumn: {
                name: "全部",
                key: "Event_Fluctuations_AllColumn"
            },
            Event_Follow_User: {
                name: "关注的人",
                key: "Event_Follow_User"
            },
            Event_Search_Normal: {
                name: "全站搜索",
                key: "Event_Search_Normal"
            },
            Event_Message_Notice: {
                name: "通知",
                key: "Event_Message_Notice"
            },
            Event_Mine_Follow: {
                name: "关注",
                key: "Event_Mine_Follow"
            },
            Event_User_FansList: {
                name: "TA的粉丝",
                key: "Event_User_FansList"
            },
            Event_OpenAccount_Normal: {
                name: "开户",
                key: "Event_OpenAccount_Normal"
            },
            Event_Fluctuations_ImportantColumn: {
                name: "重点",
                key: "Event_Fluctuations_ImportantColumn"
            },
            Event_Follow_AllArticle: {
                name: "全部",
                key: "Event_Follow_AllArticle"
            },
            Event_Search_HistoryKeyword: {
                name: "历史搜索",
                key: "Event_Search_HistoryKeyword"
            },
            Event_Message_NoticeAllRead: {
                name: "全部已读",
                key: "Event_Message_NoticeAllRead"
            },
            Event_Mine_Fans: {
                name: "粉丝",
                key: "Event_Mine_Fans"
            },
            Event_User_FollowList: {
                name: "TA的关注",
                key: "Event_User_FollowList"
            },
            Event_OpenAccount_GuoYuan: {
                name: "国元证券",
                key: "Event_OpenAccount_GuoYuan"
            },
            Event_Fluctuations_HideListReason: {
                name: "收起原因",
                key: "Event_Fluctuations_HideListReason"
            },
            Event_Follow_OriginalArticle: {
                name: "原发",
                key: "Event_Follow_OriginalArticle"
            },
            Event_Search_HotKeyword: {
                name: "公社热门搜索",
                key: "Event_Search_HotKeyword"
            },
            Event_Message_MyFansNotice: {
                name: "我的粉丝",
                key: "Event_Message_MyFansNotice"
            },
            Event_User_PrivateMessage: {
                name: "私信",
                key: "Event_User_PrivateMessage"
            },
            Event_OpenAccount_OpenGuoYuan: {
                name: "立即开通国元证券",
                key: "Event_OpenAccount_OpenGuoYuan"
            },
            Event_Fluctuations_ShowListReason: {
                name: "展开原因",
                key: "Event_Fluctuations_ShowListReason"
            },
            Event_Follow_LimitArticle: {
                name: "受限",
                key: "Event_Follow_LimitArticle"
            },
            Event_Search_BackGardenKeyword: {
                name: "后花园传递",
                key: "Event_Search_BackGardenKeyword"
            },
            Event_Message_MyFansHomePage: {
                name: "点开粉丝个人主页",
                key: "Event_Message_MyFansHomePage"
            },
            Event_Mine_WorkIntegralDetail: {
                name: "工分明细",
                key: "Event_Mine_WorkIntegralDetail"
            },
            Event_User_GiveWorkIntegral: {
                name: "赠送工分",
                key: "Event_User_GiveWorkIntegral"
            },
            Event_OpenAccount_DongYaQianHai: {
                name: "东亚前海",
                key: "Event_OpenAccount_DongYaQianHai"
            },
            Event_Fluctuations_SortByLatestPrice: {
                name: "最新价",
                key: "Event_Fluctuations_SortByLatestPrice"
            },
            Event_Follow_Stock: {
                name: "关注的股",
                key: "Event_Follow_Stock"
            },
            Event_Search_Feedback: {
                name: "点击发表您对公社的意见",
                key: "Event_Search_Feedback"
            },
            Event_Message_CommentMeNotice: {
                name: "评论我的",
                key: "Event_Message_CommentMeNotice"
            },
            Event_Mine_WorkIntegralPermission: {
                name: "查看权限",
                key: "Event_Mine_WorkIntegralPermission"
            },
            Event_User_FollowUser: {
                name: "关注",
                key: "Event_User_FollowUser"
            },
            Event_OpenAccount_OpenDongYaQianHai: {
                name: "立即开通东亚前海",
                key: "Event_OpenAccount_OpenDongYaQianHai"
            },
            Event_Fluctuations_SortByFluctuationRange: {
                name: "涨跌幅",
                key: "Event_Fluctuations_SortByFluctuationRange"
            },
            Event_Follow_EditFollowStock: {
                name: "编辑",
                key: "Event_Follow_EditFollowStock"
            },
            Event_Search_HotMore: {
                name: "热门搜索->更多",
                key: "Event_Search_HotMore"
            },
            Event_Message_LikeCommentMe: {
                name: "点赞评论我的",
                key: "Event_Message_LikeCommentMe"
            },
            Event_Mine_WorkIntegralInvite: {
                name: "立即邀请",
                key: "Event_Mine_WorkIntegralInvite"
            },
            Event_User_SpecialFollowUser: {
                name: "特别关注",
                key: "Event_User_SpecialFollowUser"
            },
            Event_Tools_Industry: {
                name: "产业库",
                key: "Event_Tools_Industry"
            },
            Event_Fluctuations_SortByLimitUpTime: {
                name: "涨停时间",
                key: "Event_Fluctuations_SortByLimitUpTime"
            },
            Event_Follow_AddStock: {
                name: "新增股票",
                key: "Event_Follow_AddStock"
            },
            Event_Follow_SpecialFollow: {
                name: "特别关注",
                key: "Event_Follow_SpecialFollow"
            },
            Event_Search_BackGardenMore: {
                name: "后花园传送->更多",
                key: "Event_Search_BackGardenMore"
            },
            Event_Message_ReplyCommentMe: {
                name: "回复评论我的",
                key: "Event_Message_ReplyCommentMe"
            },
            Event_Mine_NutritionalScore: {
                name: "养分",
                key: "Event_Mine_NutritionalScore"
            },
            Event_User_NormalFollowUser: {
                name: "转为普通关注",
                key: "Event_User_NormalFollowUser"
            },
            Event_Tools_Industry_Search: {
                name: "产业库搜索",
                key: "Event_Tools_Industry_Search"
            },
            Event_Fluctuations_ChooseDate: {
                name: "选择日期",
                key: "Event_Fluctuations_ChooseDate"
            },
            Event_Community_Research: {
                name: "研究优选",
                key: "Event_Community_Research"
            },
            Event_Message_CommentMeDetail: {
                name: "点开评论详情",
                key: "Event_Message_CommentMeDetail"
            },
            Event_Mine_Wallet: {
                name: "钱包",
                key: "Event_Mine_Wallet"
            },
            Event_User_CancelFollowUser: {
                name: "取消关注",
                key: "Event_User_CancelFollowUser"
            },
            Event_Tools_Industry_Add: {
                name: "添加产业图标或个股",
                key: "Event_Tools_Industry_Add"
            },
            Event_Fluctuations_ShowCellReason: {
                name: "展开",
                key: "Event_Fluctuations_ShowCellReason"
            },
            Event_Community_AllResearch: {
                name: "全部",
                key: "Event_Community_AllResearch"
            },
            Event_Message_LikeMeNotice: {
                name: "赞我的",
                key: "Event_Message_LikeMeNotice"
            },
            Event_Mine_WalletWithdraw: {
                name: "提现",
                key: "Event_Mine_WalletWithdraw"
            },
            Event_User_Search: {
                name: "搜索",
                key: "Event_User_Search"
            },
            Event_Industry_SaveImages: {
                name: "产业库保存图片",
                key: "Event_Industry_SaveImages"
            },
            Event_Fluctuations_HideCellReason: {
                name: "收起",
                key: "Event_Fluctuations_HideCellReason"
            },
            Event_Community_LongTextResearch: {
                name: "长文",
                key: "Event_Community_LongTextResearch"
            },
            Event_Message_AtMeNotice: {
                name: "提到我的",
                key: "Event_Message_AtMeNotice"
            },
            Event_Mine_Permission: {
                name: "权限",
                key: "Event_Mine_Permission"
            },
            Event_User_ShareUser: {
                name: "转发个人主页",
                key: "Event_User_ShareUser"
            },
            Event_Tools_Timeline: {
                name: "时间轴",
                key: "Event_Tools_Timeline"
            },
            Event_Fluctuations_RepostArticle: {
                name: "转发主帖",
                key: "Event_Fluctuations_RepostArticle"
            },
            Event_Community_FileResearch: {
                name: "文档",
                key: "Event_Community_FileResearch"
            },
            Event_Search_Summary: {
                name: "搜索纪要",
                key: "Event_Search_Summary"
            },
            Event_Message_IncomeNotice: {
                name: "收益信息",
                key: "Event_Message_IncomeNotice"
            },
            Event_Mine_WorkIntegral: {
                name: "工分",
                key: "Event_Mine_WorkIntegral"
            },
            Event_User_ViewProfile: {
                name: "点开TA的个人简介",
                key: "Event_User_ViewProfile"
            },
            Event_Tools_Timeline_Today: {
                name: "返回今日",
                key: "Event_Tools_Timeline_Today"
            },
            Event_Fluctuations_CommentArticle: {
                name: "评论主帖",
                key: "Event_Fluctuations_CommentArticle"
            },
            Event_Community_LinkResearch: {
                name: "链接",
                key: "Event_Community_LinkResearch"
            },
            Event_Message_IncomeNoticeDetail: {
                name: "点开收益信息明细",
                key: "Event_Message_IncomeNoticeDetail"
            },
            Event_Mine_PermissionInvite: {
                name: "立即邀请",
                key: "Event_Mine_PermissionInvite"
            },
            Event_User_AllArticleList: {
                name: "全部",
                key: "Event_User_AllArticleList"
            },
            Event_Timeline_SwitchYearMonth: {
                name: "切换月/年",
                key: "Event_Timeline_SwitchYearMonth"
            },
            Event_Fluctuations_LikeArticle: {
                name: "赞主帖",
                key: "Event_Fluctuations_LikeArticle"
            },
            Event_Community_OfferRewardResearch: {
                name: "悬赏",
                key: "Event_Community_OfferRewardResearch"
            },
            Event_Message_SystemNotice: {
                name: "系统消息",
                key: "Event_Message_SystemNotice"
            },
            Event_Mine_PermissionShare: {
                name: "立即转发",
                key: "Event_Mine_PermissionShare"
            },
            Event_User_OriginalArticleList: {
                name: "原发",
                key: "Event_User_OriginalArticleList"
            },
            Event_Tools_Timeline_Search: {
                name: "时间轴搜索",
                key: "Event_Tools_Timeline_Search"
            },
            Event_Fluctuations_DislikeArticle: {
                name: "踩主帖",
                key: "Event_Fluctuations_DislikeArticle"
            },
            Event_Community_PrivateResearch: {
                name: "私密",
                key: "Event_Community_PrivateResearch"
            },
            Event_Message_SystemNoticeDetail: {
                name: "点开系统消息明细",
                key: "Event_Message_SystemNoticeDetail"
            },
            Event_Mine_MyPost: {
                name: "我发表的帖子",
                key: "Event_Mine_MyPost"
            },
            Event_User_RepostArticleList: {
                name: "转发",
                key: "Event_User_RepostArticleList"
            },
            Event_Tools_Timeline_Add: {
                name: "我要添加",
                key: "Event_Tools_Timeline_Add"
            },
            Event_Fluctuations_OpenArticle: {
                name: "点击打开异动详情页",
                key: "Event_Fluctuations_OpenArticle"
            },
            Event_Community_Square: {
                name: "公社广场",
                key: "Event_Community_Square"
            },
            Event_Message_PrivateMessage: {
                name: "私信",
                key: "Event_Message_PrivateMessage"
            },
            Event_Mine_TopMyPost: {
                name: "置顶",
                key: "Event_Mine_TopMyPost"
            },
            Event_User_LivingAreaArticleList: {
                name: "生活区",
                key: "Event_User_LivingAreaArticleList"
            },
            Event_Tools_Timeline_Main: {
                name: "重磅/全部",
                key: "Event_Tools_Timeline_Main"
            },
            Event_Fluctuations_RewardArticleAuthor: {
                name: "打赏作者",
                key: "Event_Fluctuations_RewardArticleAuthor"
            },
            Event_Community_AllSquare: {
                name: "全部",
                key: "Event_Community_AllSquare"
            },
            Event_Message_PrivateMessageDetail: {
                name: "点开私信",
                key: "Event_Message_PrivateMessageDetail"
            },
            Event_Mine_DeleteMyPost: {
                name: "删除",
                key: "Event_Mine_DeleteMyPost"
            },
            Event_Tools_Timeline_Tag: {
                name: "点击题材标签筛选",
                key: "Event_Tools_Timeline_Tag"
            },
            Event_Fluctuations_MoreArticleFunction: {
                name: "主帖…功能区",
                key: "Event_Fluctuations_MoreArticleFunction"
            },
            Event_Community_LongTextSquare: {
                name: "长文",
                key: "Event_Community_LongTextSquare"
            },
            Event_Community_ThemeShareStudy: {
                name: "题材行业---\x3e研究分享",
                key: "Event_Community_LongTextSquare"
            },
            Event_Community_StockShareSummary: {
                name: "个股研究---\x3e纪要转载",
                key: "Event_Community_LongTextSquare"
            },
            Event_Message_SendPrivateMessage: {
                name: "发私信",
                key: "Event_Message_SendPrivateMessage"
            },
            Event_Mine_MyCollectionAndTrends: {
                name: "我的收藏和动态",
                key: "Event_Mine_MyCollectionAndTrends"
            },
            Event_Product_RedBook: {
                name: "红宝书",
                key: "Event_Product_RedBook"
            },
            Event_Fluctuations_ShareArticleLinkToWechatSession: {
                name: "主帖分享链接",
                key: "Event_Fluctuations_ShareArticleLinkToWechatSession"
            },
            Event_Community_FileSquare: {
                name: "文档",
                key: "Event_Community_FileSquare"
            },
            Event_Message_AddEmojiToPrivateMessage: {
                name: "插入表情",
                key: "Event_Message_AddEmojiToPrivateMessage"
            },
            Event_Mine_Invite: {
                name: "邀好友，赢奖励",
                key: "Event_Mine_Invite"
            },
            Event_Product_RedBook_Purchase: {
                name: "立即购买",
                key: "Event_Product_RedBook_Purchase"
            },
            Event_Fluctuations_ShareArticleImageToWechatSession: {
                name: "主帖分享转图",
                key: "Event_Fluctuations_ShareArticleImageToWechatSession"
            },
            Event_Community_LinkSquare: {
                name: "链接",
                key: "Event_Community_LinkSquare"
            },
            Event_Message_AddImageToPrivateMessage: {
                name: "插入图片",
                key: "Event_Message_AddImageToPrivateMessage"
            },
            Event_Mine_InviteNow: {
                name: "立即邀请",
                key: "Event_Mine_InviteNow"
            },
            Event_Product_UnlockRedBook: {
                name: "解锁全文",
                key: "Event_Product_UnlockRedBook"
            },
            Event_Fluctuations_ShareArticleToWechatTimeLine: {
                name: "主帖分享朋友圈",
                key: "Event_Fluctuations_ShareArticleToWechatTimeLine"
            },
            Event_Community_OfferRewardSquare: {
                name: "悬赏",
                key: "Event_Community_OfferRewardSquare"
            },
            Event_Message_BlockUserFromPrivateMessage: {
                name: "拉黑用户",
                key: "Event_Message_BlockUserFromPrivateMessage"
            },
            Event_Mine_Blacklist: {
                name: "黑名单",
                key: "Event_Mine_Blacklist"
            },
            Event_Product_RedBook_Try: {
                name: "免费试读",
                key: "Event_Product_RedBook_Try"
            },
            Event_Fluctuations_ShareArticleToQQ: {
                name: "主帖分享QQ",
                key: "Event_Fluctuations_ShareArticleToQQ"
            },
            Event_Community_PrivateSquare: {
                name: "私密",
                key: "Event_Community_PrivateSquare"
            },
            Event_Mine_DraftBox: {
                name: "草稿箱",
                key: "Event_Mine_DraftBox"
            },
            Event_Search_AnnouncementList: {
                name: "公告目录",
                key: "Event_Search_AnnouncementList"
            },
            Event_Fluctuations_ComplainArticle: {
                name: "主帖投诉",
                key: "Event_Fluctuations_ComplainArticle"
            },
            Event_Community_ShortTermThemeSquare: {
                name: "短线题材",
                key: "Event_Community_ShortTermThemeSquare"
            },
            Event_Mine_Feedback: {
                name: "建议反馈",
                key: "Event_Mine_Feedback"
            },
            Event_Search_AnnouncementContent: {
                name: "公告正文",
                key: "Event_Search_AnnouncementContent"
            },
            Event_Fluctuations_CollectArticle: {
                name: "主帖收藏",
                key: "Event_Fluctuations_CollectArticle"
            },
            Event_Community_LongTermValueSquare: {
                name: "长线价值",
                key: "Event_Community_LongTermValueSquare"
            },
            Event_Mine_AboutUs: {
                name: "关于我们",
                key: "Event_Mine_AboutUs"
            },
            Event_Fluctuations_SearchArticleKeyword: {
                name: "主帖搜索",
                key: "Event_Fluctuations_SearchArticleKeyword"
            },
            Event_Community_ReviewAndActualSquare: {
                name: "复盘实盘",
                key: "Event_Community_ReviewAndActualSquare"
            },
            Event_App_ServiceAgreement: {
                name: "韭菜公社服务协议",
                key: "Event_App_ServiceAgreement"
            },
            Event_Fluctuations_CopyArticleLink: {
                name: "主帖复制链接",
                key: "Event_Fluctuations_CopyArticleLink"
            },
            Event_Community_LivingAreaSquare: {
                name: "生活区",
                key: "Event_Community_LivingAreaSquare"
            },
            Event_App_PrivacyAgreement: {
                name: "韭菜公社隐私协议",
                key: "Event_App_PrivacyAgreement"
            },
            Event_Fluctuations_ViewAuthorCommentsOnly: {
                name: "只看作者",
                key: "Event_Fluctuations_ViewAuthorCommentsOnly"
            },
            Event_Community_SortByLatestRelease: {
                name: "最新发布",
                key: "Event_Community_SortByLatestRelease"
            },
            Event_App_CommunityRules: {
                name: "社区规则",
                key: "Event_App_CommunityRules"
            },
            Event_Fluctuations_SortCommentsByClout: {
                name: "热度排序",
                key: "Event_Fluctuations_SortCommentsByClout"
            },
            Event_Community_SortByLatestClout: {
                name: "最新热度",
                key: "Event_Community_SortByLatestClout"
            },
            Event_Mine_Settings: {
                name: "设置",
                key: "Event_Mine_Settings"
            },
            Event_Fluctuations_SortCommentsByLatestComment: {
                name: "最新发布",
                key: "Event_Fluctuations_SortCommentsByLatestComment"
            },
            Event_Community_SortByWeekClout: {
                name: "7天热度",
                key: "Event_Community_SortByWeekClout"
            },
            Event_Mine_ProfileSetting: {
                name: "编辑个人资料",
                key: "Event_Mine_ProfileSetting"
            },
            Event_Fluctuations_SortCommentsByLatestReply: {
                name: "最新互动",
                key: "Event_Fluctuations_SortCommentsByLatestReply"
            },
            Event_Community_SortByMonthClout: {
                name: "30天热度",
                key: "Event_Community_SortByMonthClout"
            },
            Event_Mine_PasswordSetting: {
                name: "设置登录密码",
                key: "Event_Mine_PasswordSetting"
            },
            Event_Fluctuations_StockTag: {
                name: "点击股票标签",
                key: "Event_Fluctuations_StockTag"
            },
            Event_Fluctuations_LastDay: {
                name: "上一日",
                key: "Event_Fluctuations_LastDay"
            },
            Event_Fluctuations_NextDay: {
                name: "下一日",
                key: "Event_Fluctuations_NextDay"
            },
            Event_Fluctuations_Today: {
                name: "返回今日",
                key: "Event_Fluctuations_Today"
            },
            Event_Fluctuations_Simple: {
                name: "涨停简图",
                key: "Event_Fluctuations_Simple"
            },
            Event_Fluctuations_One: {
                name: "一字板",
                key: "Event_Fluctuations_One"
            },
            Event_Community_OpenArticle: {
                name: "点击打开帖子详情页",
                key: "Event_Community_OpenArticle"
            },
            Event_Mine_PushSetting: {
                name: "推送设置",
                key: "Event_Mine_PushSetting"
            },
            Event_Community_ResearchNextPage: {
                name: "研究优选上划翻页",
                key: "Event_Community_ResearchNextPage"
            },
            Event_Mine_OpenPrivateMessagePushSetting: {
                name: "打开私信推送",
                key: "Event_Mine_OpenPrivateMessagePushSetting"
            },
            Event_Community_SquareNextPage: {
                name: "公社广场上划翻页",
                key: "Event_Community_SquareNextPage"
            },
            Event_Mine_OpenCommentPushSetting: {
                name: "打开评论我的推送",
                key: "Event_Mine_OpenCommentPushSetting"
            },
            Event_Community_RepostArticle: {
                name: "转发主帖",
                key: "Event_Community_RepostArticle"
            },
            Event_Mine_OpenAtMePushSetting: {
                name: "打开提到我的推送",
                key: "Event_Mine_OpenAtMePushSetting"
            },
            Event_Community_CommentArticle: {
                name: "评论主帖",
                key: "Event_Community_CommentArticle"
            },
            Event_Mine_OpenIncomePushSetting: {
                name: "打开收益消息推送",
                key: "Event_Mine_OpenIncomePushSetting"
            },
            Event_Community_LikeArticle: {
                name: "点赞主帖",
                key: "Event_Community_LikeArticle"
            },
            Event_Mine_OpenSystemPushSetting: {
                name: "打开系统消息推送",
                key: "Event_Mine_OpenSystemPushSetting"
            },
            Event_Community_DislikeArticle: {
                name: "点踩主帖",
                key: "Event_Community_DislikeArticle"
            },
            Event_Mine_OpenImpackFeedbackSetting: {
                name: "打开赞踩收藏震动",
                key: "Event_Mine_OpenImpackFeedbackSetting"
            },
            Event_Community_RewardArticleAuthor: {
                name: "打赏作者",
                key: "Event_Community_RewardArticleAuthor"
            },
            Event_Mine_ThemeModeSetting: {
                name: "主题模式",
                key: "Event_Mine_ThemeModeSetting"
            },
            Event_Community_MoreArticleFunction: {
                name: "主帖…功能区",
                key: "Event_Community_MoreArticleFunction"
            },
            Event_Mine_LightThemeModeSetting: {
                name: "日间模式",
                key: "Event_Mine_LightThemeModeSetting"
            },
            Event_Community_ShareArticleLinkToWechatSession: {
                name: "主帖分享链接",
                key: "Event_Community_ShareArticleLinkToWechatSession"
            },
            Event_Mine_DarkThemeModeSetting: {
                name: "夜间模式",
                key: "Event_Mine_DarkThemeModeSetting"
            },
            Event_Community_ShareArticleImageToWechatSession: {
                name: "主帖分享转图",
                key: "Event_Community_ShareArticleImageToWechatSession"
            },
            Event_Mine_SmartThemeModeSetting: {
                name: "智能模式",
                key: "Event_Mine_SmartThemeModeSetting"
            },
            Event_Community_ShareArticleToWechatTimeLine: {
                name: "主帖分享朋友圈",
                key: "Event_Community_ShareArticleToWechatTimeLine"
            },
            Event_Mine_AutoThemeModeSetting: {
                name: "自动跟随系统",
                key: "Event_Mine_AutoThemeModeSetting"
            },
            Event_Community_ShareArticleToQQ: {
                name: "主帖分享QQ",
                key: "Event_Community_ShareArticleToQQ"
            },
            Event_Mine_FontSizeSetting: {
                name: "字号设置",
                key: "Event_Mine_FontSizeSetting"
            },
            Event_Community_ComplainArticle: {
                name: "主帖投诉",
                key: "Event_Community_ComplainArticle"
            },
            Event_Mine_ScoreAndSupportUsSetting: {
                name: "来打分支持我们",
                key: "Event_Mine_ScoreAndSupportUsSetting"
            },
            Event_Community_CollectArticle: {
                name: "主帖收藏",
                key: "Event_Community_CollectArticle"
            },
            Event_Mine_WipeCacheSetting: {
                name: "清除缓存",
                key: "Event_Mine_WipeCacheSetting"
            },
            Event_Community_SearchArticleKeyword: {
                name: "主帖搜索",
                key: "Event_Community_SearchArticleKeyword"
            },
            Event_Mine_CheckUpdateSetting: {
                name: "检查更新",
                key: "Event_Mine_CheckUpdateSetting"
            },
            Event_Community_CopyArticleLink: {
                name: "主帖复制链接",
                key: "Event_Community_CopyArticleLink"
            },
            Event_Mine_LogOutSetting: {
                name: "退出登录",
                key: "Event_Mine_LogOutSetting"
            },
            Event_Community_StockTag: {
                name: "点击股票标签",
                key: "Event_Community_StockTag"
            },
            Event_LogIn_PhoneVerificationCode: {
                name: "手机快捷登录",
                key: "Event_LogIn_PhoneVerificationCode"
            },
            Event_Community_ViewAuthorCommentsOnly: {
                name: "只看作者",
                key: "Event_Community_ViewAuthorCommentsOnly"
            },
            Event_LogIn_AccountPassword: {
                name: "账号密码登陆",
                key: "Event_LogIn_AccountPassword"
            },
            Event_Community_ReplyComment: {
                name: "回复评论",
                key: "Event_Community_ReplyComment"
            },
            Event_LogIn_ThirdParty: {
                name: "第三方账号登录",
                key: "Event_LogIn_ThirdParty"
            },
            Event_Community_LikeComment: {
                name: "点赞评论",
                key: "Event_Community_LikeComment"
            },
            Event_Community_DislikeComment: {
                name: "点踩评论",
                key: "Event_Community_DislikeComment"
            },
            Event_LogIn_SignUp: {
                name: "注册",
                key: "Event_LogIn_SignUp"
            },
            Event_Community_SortCommentsByClout: {
                name: "热度排序",
                key: "Event_Community_SortCommentsByClout"
            },
            Event_SignUp_GetCode: {
                name: "获取验证码",
                key: "Event_SignUp_GetCode"
            },
            Event_Community_SortCommentsByLatestComment: {
                name: "最新发布",
                key: "Event_Community_SortCommentsByLatestComment"
            },
            Event_SignUp_SignUp: {
                name: "立即注册",
                key: "Event_SignUp_SignUp"
            },
            Event_Community_SortCommentsByLatestReply: {
                name: "最新互动",
                key: "Event_Community_SortCommentsByLatestReply"
            },
            Event_Community_MoreCommentFunction: {
                name: "评论…功能区",
                key: "Event_Community_MoreCommentFunction"
            },
            Event_Mine_Order: {
                name: "我的订单",
                key: "Event_Mine_Order"
            },
            Event_Community_ShareCommentImageToWechatSession: {
                name: "评论分享微信",
                key: "Event_Community_ShareCommentImageToWechatSession"
            },
            Event_Order_All: {
                name: "全部订单",
                key: "Event_Order_All"
            },
            Event_Community_ShareCommentToWechatTimeLine: {
                name: "评论分享朋友圈",
                key: "Event_Community_ShareCommentToWechatTimeLine"
            },
            Event_Order_WaitPay: {
                name: "待付款订单",
                key: "Event_Order_WaitPay"
            },
            Event_Community_ShareCommentToQQ: {
                name: "评论分享QQ",
                key: "Event_Community_ShareCommentToQQ"
            },
            Event_Order_WaitSign: {
                name: "待签约订单",
                key: "Event_Order_WaitSign"
            },
            Event_Community_ReplyCommentFunction: {
                name: "评论回复",
                key: "Event_Community_ReplyCommentFunction"
            },
            Event_Order_InReview: {
                name: "审核中订单",
                key: "Event_Order_InReview"
            },
            Event_Community_CopyCommentFunction: {
                name: "评论复制",
                key: "Event_Community_CopyCommentFunction"
            },
            Event_Order_InEffect: {
                name: "生效中订单",
                key: "Event_Order_InEffect"
            },
            Event_Community_RewardCommentFunction: {
                name: "评论打赏",
                key: "Event_Community_RewardCommentFunction"
            },
            Event_Order_Expired: {
                name: "已过期订单",
                key: "Event_Order_Expired"
            },
            Event_Community_ComplainCommentFunction: {
                name: "评论投诉",
                key: "Event_Community_ComplainCommentFunction"
            },
            Event_Order_SignNow: {
                name: "立即签约",
                key: "Event_Order_SignNow"
            },
            Event_Community_PayIntegralToRead: {
                name: "支付工分阅读",
                key: "Event_Community_PayIntegralToRead"
            },
            Event_Order_ContinueSign: {
                name: "继续签约",
                key: "Event_Order_ContinueSign"
            },
            Event_Search_Stock: {
                name: "搜索股票",
                key: "Event_Search_Stock"
            },
            Event_Order_ContinuePay: {
                name: "继续支付",
                key: "Event_Order_ContinuePay"
            },
            Event_Search_All: {
                name: "搜索全部",
                key: "Event_Search_All"
            },
            Event_Search_TitleAndTag: {
                name: "搜索标题标签",
                key: "Event_Search_TitleAndTag"
            },
            Event_Search_FileAndLink: {
                name: "搜索文档链接",
                key: "Event_Search_FileAndLink"
            },
            Event_Search_Fluctuations: {
                name: "搜索异动",
                key: "Event_Search_Fluctuations"
            },
            Event_Search_RedBook: {
                name: "搜索红宝书",
                key: "Event_Search_RedBook"
            },
            Event_Search_User: {
                name: "搜索用户",
                key: "Event_Search_User"
            },
            Event_Search_SortByClout: {
                name: "按热度",
                key: "Event_Search_SortByClout"
            },
            Event_Search_SortByTime: {
                name: "按时间",
                key: "Event_Search_SortByTime"
            },
            Event_Search_IncludeWeakCorrelation: {
                name: "包括弱关联",
                key: "Event_Search_IncludeWeakCorrelation"
            },
            Event_Search_ShowKLineImage: {
                name: "显示K线图",
                key: "Event_Search_ShowKLineImage"
            },
            Event_Search_FollowStock: {
                name: "添加股票",
                key: "Event_Search_FollowStock"
            },
            Event_Search_FollowUser: {
                name: "关注用户",
                key: "Event_Search_FollowUser"
            },
            Event_Search_SpecialFollowUser: {
                name: "特别关注",
                key: "Event_Search_SpecialFollowUser"
            },
            Event_Search_CancelFollowUser: {
                name: "取消关注",
                key: "Event_Search_CancelFollowUser"
            },
            Event_Search_NormalFollowUser: {
                name: "转为普通关注",
                key: "Event_Search_NormalFollowUser"
            },
            Event_Publish: {
                name: "发文",
                key: "Event_Publish"
            },
            Event_Publish_LongText: {
                name: "发长文",
                key: "Event_Publish_LongText"
            },
            Event_Publish_File: {
                name: "发文档",
                key: "Event_Publish_File"
            },
            Event_Publish_Link: {
                name: "发链接",
                key: "Event_Publish_Link"
            },
            Event_Publish_OfferReward: {
                name: "悬赏提问",
                key: "Event_Publish_OfferReward"
            },
            Event_Publish_LivingArea: {
                name: "发生活区",
                key: "Event_Publish_LivingArea"
            },
            Event_Publish_Life: {
                name: "发生活",
                key: "Event_Publish_Life"
            },
            Event_Publish_ShortArticle: {
                name: "发短文",
                key: "Event_Publish_ShortArticle"
            },
            Event_Publish_SetReadLimit: {
                name: "设置阅读受限",
                key: "Event_Publish_SetReadLimit"
            },
            Event_Publish_SetFansLimit: {
                name: "仅粉丝可见发文",
                key: "Event_Publish_SetFansLimit"
            },
            Event_Publish_SetWorkIntegralLimit: {
                name: "需支付公分解锁",
                key: "Event_Publish_SetWorkIntegralLimit"
            },
            Event_Publish_SetCopyLimit: {
                name: "禁止复制",
                key: "Event_Publish_SetCopyLimit"
            },
            Event_Publish_MoveToSquare: {
                name: "移入公社广场",
                key: "Event_Publish_MoveToSquare"
            },
            Event_App_OfferRewardRule: {
                name: "韭菜公社悬赏规则",
                key: "Event_App_OfferRewardRule"
            },
            Event_App_RewardRule: {
                name: "韭菜公社打赏规则",
                key: "Event_App_RewardRule"
            },
            Event_Reward_8: {
                name: "打赏8",
                key: "Event_Reward_8"
            },
            Event_Reward_28: {
                name: "打赏28",
                key: "Event_Reward_28"
            },
            Event_Reward_88: {
                name: "打赏88",
                key: "Event_Reward_88"
            },
            Event_Reward_188: {
                name: "打赏188",
                key: "Event_Reward_188"
            },
            Event_Reward_288: {
                name: "打赏288",
                key: "Event_Reward_288"
            },
            Event_Reward_Other: {
                name: "其他金额/工分",
                key: "Event_Reward_Other"
            },
            Event_Reward_WechatPay: {
                name: "微信支付",
                key: "Event_Reward_WechatPay"
            },
            Event_Reward_Wallet: {
                name: "钱包支付",
                key: "Event_Reward_Wallet"
            },
            Event_Reward_Integral: {
                name: "工分支付",
                key: "Event_Reward_Integral"
            },
            Event_Tool_NewestOpen: {
                name: "打开新帖播报工具",
                key: "Event_Tool_NewestOpen"
            },
            Event_Tool_NewestClose: {
                name: "关闭新帖播报工具",
                key: "Event_Tool_NewestClose"
            },
            Event_Tool_NewestToastOpen: {
                name: "打开声音提醒",
                key: "Event_Tool_NewestToastOpen"
            },
            Event_Tool_NewestToastClose: {
                name: "关闭声音提醒",
                key: "Event_Tool_NewestToastClose"
            },
            Event_Tool_NewestAudioOpen: {
                name: "打开语音播报",
                key: "Event_Tool_NewestAudioOpen"
            },
            Event_Tool_NewestAudioClose: {
                name: "关闭语音播报",
                key: "Event_Tool_NewestAudioClose"
            },
            Event_Tool_NewesOpenArticle: {
                name: "通过新帖播报工具打开帖子",
                key: "Event_Tool_NewesOpenArticle"
            },
            Event_Tools_Notice: {
                name: "搜公告",
                key: "Event_Tools_Notice"
            },
            Event_Tools_Notice_Search: {
                name: "搜公告-点击搜索",
                key: "Event_Tools_Notice_Search"
            },
            Event_Tools_Interaction: {
                name: "搜互动",
                key: "Event_Tools_Interaction"
            },
            Event_Tools_Interaction_Search: {
                name: "搜互动-点击搜索",
                key: "Event_Tools_Interaction_Search"
            },
            Event_Tools_Industry_Detail: {
                name: "点击打开产业库帖子详情页",
                key: "Event_Tools_Industry_Detail"
            },
            Event_Tools_Timeline_Month: {
                name: "月",
                key: "Event_Tools_Timeline_Month"
            },
            Event_Tools_Timeline_Year: {
                name: "年",
                key: "Event_Tools_Timeline_Year"
            },
            Event_Tools_Timeline_ChooseDate: {
                name: "选择日期",
                key: "Event_Tools_Timeline_ChooseDate"
            },
            Event_Tools_Timeline_Detail: {
                name: "点击详情",
                key: "Event_Tools_Timeline_Detail"
            },
            Event_Tools_Timeline_Expand: {
                name: "展开",
                key: "Event_Tools_Timeline_Expand"
            },
            Event_Community_Research_All: {
                name: "研选全部",
                key: "Event_Community_Research_All"
            },
            Event_Community_Research_Category1: {
                name: "个股研究",
                key: "Event_Community_Research_Category1"
            },
            Event_Community_Research_Category2: {
                name: "题材行业",
                key: "Event_Community_Research_Category2"
            },
            Event_Community_Research_Category3: {
                name: "纪要转载",
                key: "Event_Community_Research_Category3"
            },
            Event_Community_Research_Category4: {
                name: "咨询荟萃",
                key: "Event_Community_Research_Category4"
            },
            Event_Community_Square_All: {
                name: "广场全部",
                key: "Event_Community_Square_All"
            },
            Event_Community_Square_Category1: {
                name: "个股研究",
                key: "Event_Community_Square_Category1"
            },
            Event_Community_Square_Category2: {
                name: "题材行业",
                key: "Event_Community_Square_Category2"
            },
            Event_Community_Square_Category3: {
                name: "纪要转载",
                key: "Event_Community_Square_Category3"
            },
            Event_Community_Square_Category4: {
                name: "复盘实盘",
                key: "Event_Community_Square_Category4"
            },
            Event_Community_Square_Category5: {
                name: "短文",
                key: "Event_Community_Square_Category5"
            },
            Event_Search_ShareWordCloudImage: {
                name: "转发词云图",
                key: "Event_Search_ShareWordCloudImage"
            },
            Event_Search_Notice: {
                name: "搜索公告",
                key: "Event_Search_Notice"
            },
            Event_TradePlan_Enter: {
                name: "交易计划",
                key: "Event_TradePlan_Enter"
            },
            Event_TradePlan_Bullish: {
                name: "看好",
                key: "Event_TradePlan_Bullish"
            },
            Event_TradePlan_Bearish: {
                name: "谨慎",
                key: "Event_TradePlan_Bearish"
            },
            Event_TradePlan_Neutral: {
                name: "说不清",
                key: "Event_TradePlan_Neutral"
            },
            Event_TradePlan_PublishClick: {
                name: "点击发布",
                key: "Event_TradePlan_PublishClick"
            },
            Event_TradePlan_ImageInsert: {
                name: "插入图片",
                key: "Event_TradePlan_ImageInsert"
            },
            Event_TradePlan_Filter_StockHot: {
                name: "个股热度",
                key: "Event_TradePlan_Filter_StockHot"
            },
            Event_TradePlan_Filter_PostHot: {
                name: "帖子热度",
                key: "Event_TradePlan_Filter_PostHot"
            },
            Event_TradePlan_Filter_LatestPublish: {
                name: "最新发布",
                key: "Event_TradePlan_Filter_LatestPublish"
            },
            Event_TradePlan_SettingPageOpen: {
                name: "点击设置页面",
                key: "Event_TradePlan_SettingPageOpen"
            },
            Event_TradePlan_SettingSubmit: {
                name: "提交设置页面",
                key: "Event_TradePlan_SettingSubmit"
            },
            Event_TradePlan_Search: {
                name: "搜索交易计划",
                key: "Event_TradePlan_Search"
            },
            Event_TradePlan_Filter_StrongLogic: {
                name: "强逻辑",
                key: "Event_TradePlan_Filter_StrongLogic"
            },
            Event_TradePlan_Filter_All: {
                name: "全部",
                key: "Event_TradePlan_Filter_All"
            },
            Event_TradePlan_Filter_ShareRanking: {
                name: "转发榜单",
                key: "Event_TradePlan_Filter_ShareRanking"
            },
            Event_TradePlan_StockViewClick: {
                name: "点击查看个股",
                key: "Event_TradePlan_StockViewClick"
            },
            Event_TradePlan_ProfileViewClick: {
                name: "点击查看个人主页",
                key: "Event_TradePlan_ProfileViewClick"
            },
            Event_TradePlan_ResultAdd: {
                name: "添加交易结果",
                key: "Event_TradePlan_ResultAdd"
            },
            Event_TradePlan_ExpandClick: {
                name: "点击展开",
                key: "Event_TradePlan_ExpandClick"
            },
            Event_TradePlan_ShareInternal: {
                name: "转发到站内",
                key: "Event_TradePlan_ShareInternal"
            },
            Event_TradePlan_ShareExternal: {
                name: "转发到站外",
                key: "Event_TradePlan_ShareExternal"
            },
            Event_TradePlan_Comment: {
                name: "评论",
                key: "Event_TradePlan_Comment"
            },
            Event_TradePlan_Like: {
                name: "点赞",
                key: "Event_TradePlan_Like"
            },
            Event_TradePlan_Reward: {
                name: "打赏",
                key: "Event_TradePlan_Reward"
            },
            Event_TradePlan_Dislike: {
                name: "点踩",
                key: "Event_TradePlan_Dislike"
            },
            Event_TradePlan_Collect: {
                name: "收藏",
                key: "Event_TradePlan_Collect"
            },
            Event_TradePlan_Complain: {
                key: "Event_TradePlan_Complain",
                name: "投诉"
            }
        }
          , Tt = function(e, t) {
            l.default.prototype.setEvent = function(e) {
                jt.e.trace({
                    action: Pt[e].key,
                    source: "web"
                }).finally()
            }
        }
          , $t = function(e) {
            var t = e.app
              , n = (e.store,
            e.route,
            e.req,
            e.redirect,
            function(e, t, n) {
                console.error(e)
            }
            );
            l.default.config.errorHandler = n,
            l.default.prototype.$throw = function(e, t, r) {
                return n(e)
            }
            ,
            t.$serverThrow = function(e) {
                e.error,
                e.route
            }
        }
          , At = n(141)
          , Lt = n(142)
          , Dt = n(57)
          , Rt = n.n(Dt)
          , Mt = n(209)
          , It = n(0);
        new l.default({});
        var Nt = function(e, t) {
            var n = function() {
                function t() {
                    Object(At.a)(this, t)
                }
                return Object(Lt.a)(t, [{
                    key: "get",
                    value: function(data) {
                        return data.method = "get",
                        this._sendRequest(data)
                    }
                }, {
                    key: "post",
                    value: function(data) {
                        return data.method = "post",
                        this._sendRequest(data)
                    }
                }, {
                    key: "put",
                    value: function(data) {
                        return data.method = "put",
                        this._sendRequest(data)
                    }
                }, {
                    key: "delete",
                    value: function(data) {
                        return data.method = "delete",
                        this._sendRequest(data)
                    }
                }, {
                    key: "_sendRequest",
                    value: function(data) {
                        var t = this;
                        e.$axios.interceptors.request.use((function(e) {
                            return Object(Mt.a)(e)
                        }
                        ));
                        var n = Object.assign({}, It.c);
                        n.baseURL = It.b ? It.b : n.baseURL;
                        var time = (new Date).getTime()
                          , r = "Uu0KfOB8iUP69d3c:".concat(time);
                        n.headers = data.headers ? data.headers : n.headers,
                        n.headers.timestamp = time,
                        n.headers.token = Rt()(r),
                        n.method = data.method,
                        n.url = data.url,
                        n.body = data.params,
                        e.$axios.defaults.withCredentials = !0,
                        n.url,
                        e.route && e.route.query && e.route.query.traceId && (console.log("收到traceId====》", e.route.query.traceId),
                        n.headers["X-TRACE-ID"] = e.route.query.traceId);
                        try {
                            var o = e.$cookies.get("SESSION");
                            n.headers.Cookie = o ? "SESSION=" + o : ""
                        } catch (e) {
                            n.headers.Cookie = ""
                        }
                        return e.$axios(n).then((function(e) {
                            if (e.data && "0" != e.data.errCode && "1" != e.data.errCode)
                                try {
                                    console.log("request_error========>", JSON.stringify(e.data) + "\nconfig========>", JSON.stringify(n))
                                } catch (e) {}
                            return t.onSuccess(e)
                        }
                        )).catch((function(e) {
                            try {
                                console.log("request_error========>", JSON.stringify(e) + "\nconfig========>", JSON.stringify(n))
                            } catch (e) {}
                            return t.onFailure(e, n)
                        }
                        ))
                    }
                }, {
                    key: "onSuccess",
                    value: function(t) {
                        var n = t.data;
                        return n.data && n.data.sessionToken && e.$cookies.set("SESSION", n.data.sessionToken),
                        "1" == n.errCode && "/api/v1/user/info" != t.config.url && "/api/v2/user/medal/list" != t.config.url && "/api/v1/article/forward-out" != t.config.url && $nuxt.$store.commit("setShowLogin", !0),
                        Promise.resolve(n)
                    }
                }, {
                    key: "onFailure",
                    value: function(e, t) {
                        if (!e.errCode)
                            return Promise.reject(e)
                    }
                }]),
                t
            }();
            e.app.ApiManager = new n,
            t("ApiManager", new n)
        }
          , qt = (n(313),
        n(2))
          , Ft = n.n(qt);
        function Ut(e) {
            return e.toString().replace(/^(\d)$/, "0$1")
        }
        var Bt = function(e, t) {
            e.$cookies.remove("homeReplace"),
            e.$errorHandler = function(t) {
                try {
                    var n = t.data;
                    n ? e.error({
                        statusCode: 500,
                        message: n.resultInfo
                    }) : e.error({
                        statusCode: 500,
                        message: "服务器开小差了~"
                    })
                } catch (t) {
                    e.error({
                        statusCode: 500,
                        message: "服务器开小差了~"
                    })
                }
            }
            ,
            e.$isToday = function(e) {
                var t, n;
                return t = new Date(e.replace(/-/g, "/")),
                n = (new Date).getTime() - t.getTime(),
                parseInt(n / 864e5) < 1
            }
            ,
            e.$formatDate = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "yyyy-MM-dd HH:mm"
                  , r = ""
                  , o = Ft()(e)
                  , c = o.get("year");
                r = n.replace(/yyyy/g, c);
                var l = o.get("month") + 1;
                r = r.replace(/MM/g, Ut(l));
                var d = o.get("date");
                r = r.replace(/dd/g, Ut(d));
                var m = o.get("hour");
                r = r.replace(/HH/g, Ut(m));
                var h = o.get("minute");
                r = r.replace(/mm/g, Ut(h));
                var f = o.get("second");
                return (r = r.replace(/ss/g, Ut(f))).substr(0, t)
            }
            ,
            e.$formatNumber = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "price"
                  , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (0 == (e *= 1))
                    return 0;
                if ("price" === t)
                    return (e / 100).toFixed(2);
                if (n) {
                    var r = e.toFixed(2);
                    return e = r >= 1e6 ? (r / 1e5).toFixed(2) + "w" : r
                }
                return e.toFixed(2)
            }
            ,
            e.$getPictures = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = {
                    url: "https://jbang.oss-cn-beijing.aliyuncs.com/0manbuzhe/%E7%BC%BA%E7%9C%81%E5%9B%BE.jpg",
                    type: "img"
                }
                  , r = e.lastIndexOf(".");
                return -1 != r && (n.type = e.substring(r + 1, e.length).toLowerCase().split("?")[0]),
                "excel" != n.type && "xlsx" != n.type && "xls" != n.type || (n.url = "https://cdn.jiuyangongshe.com/PC/ic_excel%402x.png"),
                "docx" != n.type && "doc" != n.type || (n.url = "https://cdn.jiuyangongshe.com/PC/ic_word%402x.png"),
                "pdf" == n.type && (n.url = "https://cdn.jiuyangongshe.com/PC/ic_pdf%402x.png"),
                "jpg" != n.type && "png" != n.type && "jpeg" != n.type && "gif" != n.type || (n.url = e),
                t ? n : n.url
            }
            ,
            e.$dateToSeen = function(e) {
                var t = new String(e).split(" ")
                  , n = t[0].split("-")
                  , r = t[1].split(":")
                  , o = new Date
                  , c = function() {
                    return n[1] + "-" + n[2] + " " + r[0] + ":" + r[1]
                };
                if (o.getFullYear() != n[0])
                    return n[0] + "-" + c();
                if (o.getMonth() + 1 != n[1])
                    return c();
                if (o.getDate() == n[2])
                    return "今天 " + r[0] + ":" + r[1];
                switch (o.getDate() - parseInt(n[2])) {
                case 1:
                    return "昨天 " + r[0] + ":" + r[1];
                case 2:
                    return "前天 " + r[0] + ":" + r[1];
                default:
                    return c()
                }
            }
        }
          , zt = (n(354),
        n(208))
          , Ht = n.n(zt)
          , Wt = n(596)
          , Vt = n.n(Wt)
          , Jt = n(164)
          , Qt = n.n(Jt)
          , Kt = n(300)
          , Gt = n.n(Kt)
          , Yt = (n(55),
        n(225),
        {
            install: function(e) {
                e.prototype.emjoList = [{
                    id: 1,
                    name: "[可爱]",
                    src: n(980)
                }, {
                    id: 2,
                    name: "[晕]",
                    src: n(981)
                }, {
                    id: 2,
                    name: "[微笑]",
                    src: n(982)
                }, {
                    id: 3,
                    name: "[大哭]",
                    src: n(983)
                }, {
                    id: 4,
                    name: "[睡觉]",
                    src: n(984)
                }, {
                    id: 5,
                    name: "[哇~]",
                    src: n(985)
                }, {
                    id: 6,
                    name: "[得意]",
                    src: n(986)
                }, {
                    id: 7,
                    name: "[露齿笑]",
                    src: n(987)
                }, {
                    id: 8,
                    name: "[惊恐]",
                    src: n(988)
                }, {
                    id: 9,
                    name: "[老司机]",
                    src: n(989)
                }, {
                    id: 10,
                    name: "[奋斗]",
                    src: n(990)
                }, {
                    id: 11,
                    name: "[不要怂]",
                    src: n(991)
                }, {
                    id: 12,
                    name: "[散户必胜]",
                    src: n(992)
                }, {
                    id: 13,
                    name: "[加油]",
                    src: n(993)
                }, {
                    id: 14,
                    name: "[鼓掌]",
                    src: n(994)
                }, {
                    id: 15,
                    name: "[偷笑]",
                    src: n(995)
                }, {
                    id: 16,
                    name: "[哦了]",
                    src: n(996)
                }, {
                    id: 17,
                    name: "[再见]",
                    src: n(997)
                }, {
                    id: 18,
                    name: "[赞]",
                    src: n(998)
                }, {
                    id: 19,
                    name: "[666]",
                    src: n(999)
                }, {
                    id: 20,
                    name: "[感谢分享]",
                    src: n(1e3)
                }, {
                    id: 21,
                    name: "[韭菜]",
                    src: n(1001)
                }, {
                    id: 22,
                    name: "[投降]",
                    src: n(1002)
                }, {
                    id: 23,
                    name: "[吃面]",
                    src: n(1003)
                }, {
                    id: 24,
                    name: "[吐血]",
                    src: n(1004)
                }, {
                    id: 26,
                    name: "[加鸡腿]",
                    src: n(1005)
                }, {
                    id: 27,
                    name: "[大牛市]",
                    src: n(1006)
                }, {
                    id: 28,
                    name: "[吃瓜]",
                    src: n(1007)
                }, {
                    id: 29,
                    name: "[恭喜发财]",
                    src: n(1008)
                }, {
                    id: 30,
                    name: "[奉旨割肉]",
                    src: n(1009)
                }, {
                    id: 31,
                    name: "[牛市旗手]",
                    src: n(1010)
                }, {
                    id: 32,
                    name: "[站岗小能手]",
                    src: n(1011)
                }, {
                    id: 33,
                    name: "[梭哈]",
                    src: n(1012)
                }, {
                    id: 34,
                    name: "[暴风雨]",
                    src: n(1013)
                }, {
                    id: 35,
                    name: "[打赏]",
                    src: n(1014)
                }, {
                    id: 36,
                    name: "[搬砖]",
                    src: n(1015)
                }, {
                    id: 37,
                    name: "[踩雷了]",
                    src: n(1016)
                }, {
                    id: 38,
                    name: "[不讲武德]",
                    src: n(1017)
                }, {
                    id: 39,
                    name: "[上火]",
                    src: n(1018)
                }, {
                    id: 40,
                    name: "[删除软件]",
                    src: n(1019)
                }, {
                    id: 41,
                    name: "[砸盘]",
                    src: n(1020)
                }, {
                    id: 42,
                    name: "[已销户]",
                    src: n(1021)
                }, {
                    id: 43,
                    name: "[握手]",
                    src: n(1022)
                }, {
                    id: 44,
                    name: "[胜利]",
                    src: n(1023)
                }, {
                    id: 45,
                    name: "[踩]",
                    src: n(1024)
                }, {
                    id: 9,
                    name: "[保佑]",
                    src: n(1025)
                }, {
                    id: 9,
                    name: "[接飞刀]",
                    src: n(1026)
                }, {
                    id: 9,
                    name: "[剁手]",
                    src: n(1027)
                }, {
                    id: 9,
                    name: "[500万]",
                    src: n(1028)
                }, {
                    id: 9,
                    name: "[打板]",
                    src: n(1029)
                }, {
                    id: 9,
                    name: "[亏损]",
                    src: n(1030)
                }, {
                    id: 9,
                    name: "[一万点]",
                    src: n(1031)
                }],
                e.prototype.ReCont = function(t) {
                    if (!t || "" === t)
                        return "";
                    for (var i in e.prototype.emjoList) {
                        var n = e.prototype.emjoList[i]
                          , r = "<img class='jcEmjo' name='".concat(n.name, "' width='24px' src='").concat(n.src, "' />")
                          , o = new RegExp("\\" + n.name,"g");
                        t = t.replace(o, r)
                    }
                    return t
                }
                ,
                e.prototype.resetHtmlEmjo = function(html) {
                    return html = html.replace(/<img class="jcEmjo"[^>]+>/g, (function(e, t) {
                        var n = e.indexOf(']"');
                        return e.substring(26, n + 1)
                    }
                    ))
                }
            }
        })
          , Xt = function(e, t) {
            l.default.prototype.useExtend || (l.default.prototype.useExtend = !0,
            l.default.use(Qt.a, {
                locale: Gt.a
            }),
            Ht.a.polyfill(),
            l.default.use(Yt),
            l.default.config.productionTip = !1,
            l.default.config.ignoredElements = ["wx-open-launch-app"],
            l.default.use(Vt.a))
        }
          , Zt = n(597)
          , en = n.n(Zt)
          , tn = n(325)
          , nn = {
            install: function(e) {
                var t = new (e.extend(tn.a));
                t.$mount(document.createElement("div")),
                document.body.appendChild(t.$el),
                e.directive("drag", (function(e, n) {
                    t.isShowImageDialog = !0;
                    var r = e;
                    r.onmousedown = function(e) {
                        if (2 !== e.button) {
                            e.preventDefault();
                            var t = document.body.clientWidth
                              , o = document.body.clientHeight
                              , c = e.clientX - r.offsetLeft
                              , l = e.clientY - r.offsetTop;
                            document.onmousemove = function(e) {
                                var d = 0
                                  , m = 0;
                                d = e.clientX >= t ? t - c : e.clientX <= 0 ? 0 - c : e.clientX - c,
                                m = e.clientY >= o ? o - l : e.clientY <= 0 ? 0 - l : e.clientY - l,
                                r.style.left = d + "px",
                                r.style.top = m + "px",
                                n.value({
                                    x: e.pageX,
                                    y: e.pageY
                                })
                            }
                            ,
                            document.onmouseup = function(e) {
                                document.onmousemove = null,
                                document.onmouseup = null
                            }
                        }
                    }
                }
                )),
                e.prototype.$imageViewer = function(e, n) {
                    t.currentImg = n || e.currentTarget.currentSrc,
                    t.visible = !0
                }
            }
        }
          , rn = nn
          , on = n(309)
          , an = {
            install: function(e) {
                e.prototype.$spin = on.default
            },
            Spin: on.default
        }
          , sn = function(e, t) {
            l.default.prototype.useExtendChild || (l.default.use(en.a),
            l.default.use(rn),
            l.default.use(an))
        }
          , cn = (n(215),
        n(314))
          , un = function(e) {
            var t = e.app;
            t.router.onError((function(e) {
                console.log("路由错误", e);
                e.message.match(/Loading chunk (\d)+ failed/g) && location.reload()
            }
            )),
            t.router.beforeEach((function(e, n, r) {
                var o = t.$cookies.get("flag");
                console.log(o, "flag"),
                o && "/article/edit" == n.path ? l.default.prototype.$confirm("输入框内含有未发出内容，请您确认是否离开?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then((function() {
                    t.$cookies.set("flag", !1),
                    localStorage.setItem("flag", o),
                    r()
                }
                )) : (cn.a.configUrl(e.fullPath),
                r())
            }
            ))
        };
        function ln(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function pn(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ln(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ln(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        l.default.component(f.a.name, f.a),
        l.default.component(_.a.name, pn(pn({}, _.a), {}, {
            render: function(e, t) {
                return _.a._warned || (_.a._warned = !0,
                console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),
                _.a.render(e, t)
            }
        })),
        l.default.component(k.name, k),
        l.default.component("NChild", k),
        l.default.component(T.name, T),
        Object.defineProperty(l.default.prototype, "$nuxt", {
            get: function() {
                var e = this.$root.$options.$nuxt;
                return e || "undefined" == typeof window ? e : window.$nuxt
            },
            configurable: !0
        }),
        l.default.use(m.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var dn = {
            name: "page",
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        }
          , mn = d.a.Store.prototype.registerModule;
        function hn(path, e) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = Array.isArray(path) ? !!path.reduce((function(e, path) {
                return e && e[path]
            }
            ), this.state) : path in this.state;
            return mn.call(this, path, e, pn({
                preserveState: n
            }, t))
        }
        function fn(e) {
            return vn.apply(this, arguments)
        }
        function vn() {
            return (vn = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                var n, r, c, d, m, h, path, f, v = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return f = function(e, t) {
                                if (!e)
                                    throw new Error("inject(key, value) has no key provided");
                                if (void 0 === t)
                                    throw new Error("inject('".concat(e, "', value) has no value provided"));
                                d[e = "$" + e] = t,
                                d.context[e] || (d.context[e] = t),
                                c[e] = d[e];
                                var n = "__nuxt_" + e + "_installed__";
                                l.default[n] || (l.default[n] = !0,
                                l.default.use((function() {
                                    Object.prototype.hasOwnProperty.call(l.default.prototype, e) || Object.defineProperty(l.default.prototype, e, {
                                        get: function() {
                                            return this.$root.$options[e]
                                        }
                                    })
                                }
                                )))
                            }
                            ,
                            n = v.length > 1 && void 0 !== v[1] ? v[1] : {},
                            e.next = 4,
                            w(t, n);
                        case 4:
                            return r = e.sent,
                            (c = Ae(t)).$router = r,
                            c.registerModule = hn,
                            d = pn({
                                head: {
                                    title: "韭研公社—研究共享 茁壮成长",
                                    htmlAttrs: {
                                        lang: "zh-Hans"
                                    },
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        "http-equiv": "Cache-Control",
                                        content: "no-transform"
                                    }, {
                                        "http-equiv": "Cache-Control",
                                        content: "no-siteapp"
                                    }, {
                                        name: "apple-mobile-web-app-capable",
                                        content: "yes"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1,user-scalable=0,viewport-fit=cover"
                                    }, {
                                        hid: "description",
                                        name: "description",
                                        content: "韭研公社—研究共享 茁壮成长"
                                    }, {
                                        hid: "keywords",
                                        name: "keywords",
                                        content: "基本面,基本面分析,股票,炒股,股票资讯,行情,财经,证券,投资,A股,金融,港股,美股,基金,债券,期货,外汇,科创板,保险,财经,投资社区,股票投资"
                                    }, {
                                        name: "format-detection",
                                        content: "telephone=no"
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/png",
                                        href: "/img/favicon.png"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/font/font.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/style.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/components/Header-1762316082734.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/components/IndexRightAside.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/components/ArticleList.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/community.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/actions-list1774595161445.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/theme-chalk/index.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/components/PlanList1762316082734.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/css/plan1762316082734.css"
                                    }],
                                    script: [{
                                        src: "https://hm.baidu.com/hm.js?2d6d056d37910563cdaa290ee2981080"
                                    }, {
                                        src: "https://hm.baidu.com/hm.js?58aa18061df7855800f2a1b32d6da7f4"
                                    }, {
                                        src: "/js/jquery-3.1.1.min.js",
                                        async: !1,
                                        defer: !1
                                    }, {
                                        src: "https://cdn.jiuyangongshe.com/web/moment.min.js",
                                        async: !1,
                                        defer: !1
                                    }, {
                                        src: "https://v1.cnzz.com/z_stat.php?id=1279009710&web_id=1279009710",
                                        async: !0,
                                        defer: !0
                                    }, {
                                        src: "/js/jquery.caret.min.js",
                                        async: !0,
                                        defer: !0
                                    }, {
                                        src: "/js/qrcode.min.js",
                                        async: !1,
                                        defer: !0
                                    }, {
                                        src: "/js/main.js",
                                        async: !0,
                                        defer: !0
                                    }],
                                    style: []
                                },
                                store: c,
                                router: r,
                                nuxt: {
                                    defaultTransition: dn,
                                    transitions: [dn],
                                    setTransitions: function(e) {
                                        return Array.isArray(e) || (e = [e]),
                                        e = e.map((function(e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, dn, {
                                                name: e
                                            }) : Object.assign({}, dn, e) : dn
                                        }
                                        )),
                                        this.$options.nuxt.transitions = e,
                                        e
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(e) {
                                        e = e || null,
                                        d.context._errored = Boolean(e),
                                        e = e ? Object(P.o)(e) : null;
                                        var n = d.nuxt;
                                        return this && (n = this.nuxt || this.$options.nuxt),
                                        n.dateErr = Date.now(),
                                        n.err = e,
                                        t && (t.nuxt.error = e),
                                        e
                                    }
                                }
                            }, Te),
                            c.app = d,
                            m = t ? t.next : function(e) {
                                return d.router.push(e)
                            }
                            ,
                            t ? h = r.resolve(t.url).route : (path = Object(P.f)(r.options.base, r.options.mode),
                            h = r.resolve(path).route),
                            e.next = 14,
                            Object(P.s)(d, {
                                store: c,
                                route: h,
                                next: m,
                                error: d.nuxt.error.bind(d),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 14:
                            f("config", n),
                            window.__NUXT__ && window.__NUXT__.state && c.replaceState(window.__NUXT__.state),
                            e.next = 20;
                            break;
                        case 20:
                            e.next = 23;
                            break;
                        case 23:
                            return e.next = 26,
                            Et(d.context, f);
                        case 26:
                            return e.next = 29,
                            St(d.context, f);
                        case 29:
                            return e.next = 32,
                            Tt(d.context);
                        case 32:
                            return e.next = 35,
                            $t(d.context);
                        case 35:
                            return e.next = 38,
                            Nt(d.context, f);
                        case 38:
                            return e.next = 41,
                            Bt(d.context);
                        case 41:
                            return e.next = 44,
                            Xt(d.context);
                        case 44:
                            return e.next = 47,
                            sn(d.context);
                        case 47:
                            return e.next = 50,
                            un(d.context);
                        case 50:
                            return e.next = 53,
                            new Promise((function(e, t) {
                                if (!r.resolve(d.context.route.fullPath).route.matched.length)
                                    return e();
                                r.replace(d.context.route.fullPath, e, (function(n) {
                                    if (!n._isRouter)
                                        return t(n);
                                    if (2 !== n.type)
                                        return e();
                                    var c = r.afterEach(function() {
                                        var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r) {
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 3,
                                                        Object(P.j)(n);
                                                    case 3:
                                                        d.context.route = t.sent,
                                                        d.context.params = n.params || {},
                                                        d.context.query = n.query || {},
                                                        c(),
                                                        e();
                                                    case 8:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e, n) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ))
                            }
                            ));
                        case 53:
                            return e.abrupt("return", {
                                store: c,
                                app: d,
                                router: r
                            });
                        case 54:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
    },
    950: function(e, t, n) {
        "use strict";
        n(561)
    },
    951: function(e, t, n) {
        e.exports = n.p + "img/ic_message_broadcast@3x.d4ab4b7.png"
    },
    955: function(e, t, n) {
        "use strict";
        n(563)
    },
    956: function(e, t, n) {
        "use strict";
        n(564)
    },
    957: function(e, t, n) {
        "use strict";
        n(565)
    },
    958: function(e, t, n) {
        "use strict";
        n(566)
    },
    959: function(e, t, n) {
        "use strict";
        n(567)
    },
    960: function(e, t, n) {
        "use strict";
        n(568)
    },
    961: function(e, t, n) {
        "use strict";
        n(569)
    },
    962: function(e, t, n) {
        "use strict";
        n(570)
    },
    963: function(e, t, n) {
        "use strict";
        n(571)
    },
    966: function(e, t, n) {
        "use strict";
        n(573)
    },
    967: function(e, t, n) {
        "use strict";
        n(574)
    },
    968: function(e, t, n) {
        "use strict";
        n(575)
    },
    969: function(e, t, n) {
        "use strict";
        n(576)
    },
    970: function(e, t, n) {
        "use strict";
        n(577)
    },
    971: function(e, t, n) {
        "use strict";
        n(578)
    },
    972: function(e, t, n) {
        "use strict";
        n(579)
    },
    973: function(e, t, n) {
        "use strict";
        n(580)
    },
    974: function(e, t, n) {
        "use strict";
        n(581)
    },
    975: function(e, t, n) {
        "use strict";
        n(582)
    },
    976: function(e, t, n) {
        "use strict";
        n(583)
    },
    977: function(e, t, n) {
        "use strict";
        n(584)
    },
    978: function(e, t, n) {
        "use strict";
        n(585)
    },
    980: function(e, t, n) {
        e.exports = n.p + "img/[可爱].bc773fc.png"
    },
    981: function(e, t, n) {
        e.exports = n.p + "img/[晕].0530dc1.png"
    },
    982: function(e, t, n) {
        e.exports = n.p + "img/[微笑].1ee108e.png"
    },
    983: function(e, t, n) {
        e.exports = n.p + "img/[大哭].a3b7c41.png"
    },
    984: function(e, t, n) {
        e.exports = n.p + "img/[睡觉].104f358.png"
    },
    985: function(e, t, n) {
        e.exports = n.p + "img/[哇~].130ec63.png"
    },
    986: function(e, t, n) {
        e.exports = n.p + "img/[得意].8f1c7d5.png"
    },
    987: function(e, t, n) {
        e.exports = n.p + "img/[露齿笑].edb03e8.png"
    },
    988: function(e, t, n) {
        e.exports = n.p + "img/[惊恐].2f30be8.png"
    },
    989: function(e, t, n) {
        e.exports = n.p + "img/[老司机].097f1ac.png"
    },
    99: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        n(225),
        n(23),
        n(88);
        function r(e) {
            return !!/MicroMessenger/i.test(e)
        }
        function o(e) {
            return !!/Weibo/i.test(e)
        }
        function c(e) {
            return !!/QQ/i.test(e)
        }
        function l(e) {
            return !!/WpsOfficeApp/i.test(e)
        }
        function d(e) {
            return {
                env: function(e) {
                    if (r(e))
                        return "wechat";
                    if (o(e))
                        return "weibo";
                    if (c(e))
                        return "qq";
                    if (l(e))
                        return "wps";
                    return "other"
                }(e),
                type: function(e) {
                    if (function(e) {
                        return !!/iPhone|iPad|iPod/i.test(e)
                    }(e))
                        return "ios";
                    if (function(e) {
                        return !!/OpenHarmony/i.test(e)
                    }(e))
                        return "harmony";
                    if (function(e) {
                        return !!/Android/i.test(e)
                    }(e))
                        return "android";
                    return "pc"
                }(e),
                ismobile: function(e) {
                    if (function(e) {
                        return !!/(Phone; OpenHarmony|Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(e)
                    }(e))
                        return !0;
                    return !1
                }(e),
                masklayer: function(e) {
                    if (r(e))
                        return !0;
                    if (o(e))
                        return !0;
                    if (c(e))
                        return !0;
                    if (l(e))
                        return !0;
                    return !1
                }(e)
            }
        }
    },
    990: function(e, t, n) {
        e.exports = n.p + "img/[奋斗].b46cbee.png"
    },
    991: function(e, t, n) {
        e.exports = n.p + "img/[不要怂].27cb057.png"
    },
    992: function(e, t, n) {
        e.exports = n.p + "img/[散户必胜].32a16c6.png"
    },
    993: function(e, t, n) {
        e.exports = n.p + "img/[加油].7011978.png"
    },
    994: function(e, t, n) {
        e.exports = n.p + "img/[鼓掌].d5eb664.png"
    },
    995: function(e, t, n) {
        e.exports = n.p + "img/[偷笑].b365bed.png"
    },
    996: function(e, t, n) {
        e.exports = n.p + "img/[哦了].c0cfc82.png"
    },
    997: function(e, t, n) {
        e.exports = n.p + "img/[再见].31338bf.png"
    },
    998: function(e, t, n) {
        e.exports = n.p + "img/[赞].7269160.png"
    },
    999: function(e, t, n) {
        e.exports = n.p + "img/[666].2e366c5.png"
    }
}, [[627, 33, 16, 34]]]);

/*! For license information please see main.js.LICENSE.txt */ ! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.cb = e() : t.cb = e()
}(self, (() => (self.webpackChunkcb = self.webpackChunkcb || []).push([
    [179], {
        10: (t, e, s) => {
            const i = s(192),
                n = s(29);
            t.exports = {
                upgrade: i,
                Contract: n
            }
        },
        527: t => {
            t.exports = class {
                constructor(t = !1) {
                    this.LOOK_UP = "min", this.LOOK_DOWN = "max", t && this.setRange(t)
                }
                setRange(t) {
                    this.rangeAssoc = t, this.range = [];
                    let e = Object.keys(this.rangeAssoc);
                    e.splice(0, 0, void 0).sort((function(t, e) {
                        return t - e
                    }));
                    for (let t = 0; t < e.length; t++) this.range[t] = {
                        min: e[t],
                        max: e[t + 1]
                    }
                }
                lookUp(t) {
                    return this.look(t, this.LOOK_UP)
                }
                lookUpAssoc(t) {
                    return this.rangeAssoc[this.look(t, this.LOOK_UP)]
                }
                lookDown(t) {
                    return this.look(t, this.LOOK_DOWN)
                }
                lookDownAssoc(t) {
                    return this.rangeAssoc[this.look(t, this.LOOK_DOWN)]
                }
                look(t, e) {
                    for (var s in this.range)
                        if (e == this.LOOK_DOWN) {
                            if (t >= (this.range[s].min || 0) && t <= this.range[s].max && void 0 !== this.range[s].min) return t == this.range[s].max ? this.range[s].max : this.range[s].min
                        } else if (e == this.LOOK_UP && t >= (this.range[s].min || 0) && t <= this.range[s].max && void 0 !== this.range[s].max) return t == this.range[s].min ? this.range[s].min : this.range[s].max;
                    if (e == this.LOOK_DOWN && t > this.range[s].min) return this.range[s].min
                }
                getRanges() {
                    return this.range
                }
            }
        },
        704: () => {
            ! function(t, e, s) {
                var i, n = e.documentElement,
                    r = "HEX",
                    a = "top",
                    o = "px",
                    l = t.setTimeout,
                    c = ["touchstart", "mousedown"],
                    h = ["touchmove", "mousemove"],
                    u = ["orientationchange", "resize"],
                    d = ["touchend", "mouseup"];

                function p(t) {
                    var e, s, i, n, r, a, o, l, c = +t[0],
                        h = +t[1],
                        u = +t[2];
                    switch (a = u * (1 - h), o = (o = u * (1 - (r = 6 * c - (n = Math.floor(6 * c))) * h)) || 0, l = (l = u * (1 - (1 - r) * h)) || 0, (n = n || 0) % 6) {
                        case 0:
                            e = u, s = l, i = a;
                            break;
                        case 1:
                            e = o, s = u, i = a;
                            break;
                        case 2:
                            e = a, s = u, i = l;
                            break;
                        case 3:
                            e = a, s = o, i = u;
                            break;
                        case 4:
                            e = l, s = a, i = u;
                            break;
                        case 5:
                            e = u, s = a, i = o
                    }
                    return [A(255 * e), A(255 * s), A(255 * i), x(E(t[3]) ? +t[3] : 1, 2)]
                }

                function m(t) {
                    var e, s = +t[0] / 255,
                        i = +t[1] / 255,
                        n = +t[2] / 255,
                        r = Math.max(s, i, n),
                        a = Math.min(s, i, n),
                        o = r,
                        l = r - a,
                        c = 0 === r ? 0 : l / r;
                    if (r === a) e = 0;
                    else {
                        switch (r) {
                            case s:
                                e = (i - n) / l + (i < n ? 6 : 0);
                                break;
                            case i:
                                e = (n - s) / l + 2;
                                break;
                            case n:
                                e = (s - i) / l + 4
                        }
                        e /= 6
                    }
                    return [e, c, o, E(t[3]) ? +t[3] : 1]
                }

                function f(t, e) {
                    var s = e.touches ? e.touches[0].clientX : e.clientX,
                        i = e.touches ? e.touches[0].clientY : e.clientY,
                        n = y(t);
                    return [s - n[0], i - n[1]]
                }

                function g(t, e) {
                    if (t === e) return t;
                    for (;
                        (t = t.parentElement) && t !== e;);
                    return t
                }

                function y(e) {
                    var s, i, r;
                    return e === t ? (s = t.pageXOffset || n.scrollLeft, i = t.pageYOffset || n.scrollTop) : (s = (r = e.getBoundingClientRect()).left, i = r.top), [s, i]
                }

                function v(e) {
                    return e === t ? [t.innerWidth, t.innerHeight] : [e.offsetWidth, e.offsetHeight]
                }

                function b(t) {
                    t && t.preventDefault()
                }

                function S(t) {
                    return "function" == typeof t
                }

                function E(t) {
                    return void 0 !== t || null === t
                }

                function C(t) {
                    return "string" == typeof t
                }

                function w(t, e) {
                    return t < e[0] ? e[0] : t > e[1] ? e[1] : t
                }

                function x(t, e) {
                    return +t.toFixed(e)
                }

                function T(t, e) {
                    return parseInt(t, e || 10)
                }

                function A(t) {
                    return Math.round(t)
                }

                function k(t, e) {
                    return t.toString(e)
                }

                function q(t, e, s) {
                    for (var i = 0, n = e.length; i < n; ++i) t.removeEventListener(e[i], s, !1)
                }

                function L(t, e, s) {
                    for (var i = 0, n = e.length; i < n; ++i) t.addEventListener(e[i], s, !1)
                }

                function F(t, e, s) {
                    t.style[e] = s
                }(i = t.CP = function(s, i) {
                    if (s) {
                        var x = this,
                            T = t.CP,
                            A = {},
                            k = e.createElement("div"),
                            I = Object.assign({}, T.state, C(i) ? {
                                color: i
                            } : i || {}),
                            R = I.class;
                        if (s.CP) return x;
                        if (!(x instanceof T)) return new T(s, i);
                        T.instances[s.id || s.name || Object.keys(T.instances).length] = x, s.CP = 1, x.visible = !1, k.className = R, k.innerHTML = '<div><div class="' + R + ':sv"><div></div><div></div><div></div><i></i></div><div class="' + R + ':h"><div></div><i></i></div><div class="' + R + ':a"><div></div><div></div><i></i></div></div>';
                        var M, N, O, _, D = e.body,
                            B = et(),
                            P = m(B),
                            G = k.firstChild,
                            V = G.children[0],
                            H = G.children[1],
                            U = G.children[2],
                            W = V.children[0],
                            j = V.children[3],
                            X = (H.children[0], H.children[1]),
                            $ = U.children[0],
                            z = U.children[2],
                            Y = 0,
                            K = 0,
                            J = 0,
                            Q = 0,
                            Z = 0,
                            tt = 0;
                        ! function i(r, S) {
                            P = m(B = et()), r || ((S || I.parent || D).appendChild(k), x.visible = !0), M = function(t) {
                                return i(0, t), st("enter", B), x
                            }, N = function() {
                                var s = it();
                                return s && (s.removeChild(k), x.current = null, x.visible = !1), q(V, c, pt), q(H, c, mt), q(U, c, ft), q(e, h, ut), q(e, d, dt), q(t, u, _), st("exit", B), x
                            }, O = function(e) {
                                var i = v(t),
                                    r = v(n),
                                    l = i[0] - r[0],
                                    c = i[1] - n.clientHeight,
                                    h = y(t),
                                    u = y(s),
                                    d = v(k),
                                    p = d[0],
                                    m = d[1],
                                    f = u[0] + h[0],
                                    g = u[1] + h[1] + v(s)[1];
                                if ("object" == typeof e) E(e[0]) && (f = e[0]), E(e[1]) && (g = e[1]);
                                else {
                                    var b = h[0],
                                        S = h[1],
                                        C = h[0] + i[0] - p - l,
                                        T = h[1] + i[1] - m - c;
                                    f = w(f, [b, C]) >> 0, g = w(g, [S, T]) >> 0
                                }
                                return F(k, "left", f + o), F(k, a, g + o), st("fit", B), x
                            }, _ = function() {
                                return O()
                            };
                            var C = v(V),
                                T = C[0],
                                R = C[1],
                                G = v(j),
                                rt = G[0],
                                at = G[1],
                                ot = v(H)[1],
                                lt = v(X)[1],
                                ct = v(U)[1],
                                ht = v(z)[1];

                            function ut(t) {
                                Q && function(t) {
                                    var e = f(V, t),
                                        s = w(e[0], [0, T]),
                                        i = w(e[1], [0, R]);
                                    P[1] = 1 - (T - s) / T, P[2] = (R - i) / R, gt()
                                }(t), Z && function(t) {
                                    P[0] = (ot - w(f(H, t)[1], [0, ot])) / ot, gt()
                                }(t), tt && function(t) {
                                    P[3] = (ct - w(f(U, t)[1], [0, ct])) / ct, gt()
                                }(t), B = p(P), (Q || Z || tt) && (st(Y || K || J ? "start" : "drag", B), st("change", B)), Y = K = J = 0
                            }

                            function dt(t) {
                                B = p(P);
                                var e = t.target,
                                    i = s === g(e, s),
                                    n = k === g(e, k);
                                x.current = null, i || n ? n && (Q || Z || tt) && st("stop", B) : A.blur ? st("blur", B) : it() && N(), Q = Z = tt = 0
                            }

                            function pt(t) {
                                x.current = V, Y = Q = 1, ut(t), b(t)
                            }

                            function mt(t) {
                                x.current = H, K = Z = 1, ut(t), b(t)
                            }

                            function ft(t) {
                                x.current = U, J = tt = 1, ut(t), b(t)
                            }

                            function gt() {
                                var t;
                                E((t = P)[1]) && F(j, "right", T - rt / 2 - T * +t[1] + o), E(t[2]) && F(j, a, R - at / 2 - R * +t[2] + o), E(t[0]) && F(X, a, ot - lt / 2 - ot * +t[0] + o), E(t[3]) && F(z, a, ct - ht / 2 - ct * +t[3] + o);
                                var e = p(P),
                                    s = p([P[0], 1, 1]);
                                F(W, "backgroundColor", "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")"), F($, "backgroundImage", "linear-gradient(rgb(" + e[0] + "," + e[1] + "," + e[2] + "),transparent)")
                            }
                            r ? (L(s, c, nt), l((function() {
                                st("change", B)
                            }), 1)) : (L(V, c, pt), L(H, c, mt), L(U, c, ft), L(e, h, ut), L(e, d, dt), L(t, u, _), O()), x.get = function() {
                                return et()
                            }, x.set = function(t, e, s, i) {
                                return P = m([t, e, s, i]), gt(), x
                            }, gt()
                        }(1), x.color = function(t, e, s, i) {
                            return T[S(T[I.color]) ? I.color : r]([t, e, s, i])
                        }, x.current = null, x.enter = M, x.exit = N, x.fire = st, x.fit = O, x.hooks = A, x.off = function(t, e) {
                            if (!E(t)) return A = {}, x;
                            if (E(A[t]))
                                if (E(e)) {
                                    for (var s = 0, i = A[t].length; s < i; ++s) e === A[t][s] && A[t].splice(s, 1);
                                    0 === i && delete A[t]
                                } else delete A[t];
                            return x
                        }, x.on = function(t, e) {
                            return E(A[t]) || (A[t] = []), E(e) && A[t].push(e), x
                        }, x.pop = function() {
                            return s.CP ? (delete s.CP, q(s, c, nt), N(), st("pop", B)) : x
                        }, x.value = function(t, e, s, i) {
                            return x.set(t, e, s, i), st("change", [t, e, s, i])
                        }, x.self = k, x.source = s, x.state = I
                    }

                    function et(t) {
                        var e, i = T[S(T[I.color]) ? I.color : r];
                        return (e = s.dataset.color) ? E(t) ? s.dataset.color = i(e) : i(e) : (e = s.value) ? E(t) ? s.value = i(e) : i(e) : (e = s.textContent) ? E(t) ? s.textContent = i(e) : i(e) : E(t) ? void 0 : [0, 0, 0, 1]
                    }

                    function st(t, e) {
                        if (!E(A[t])) return x;
                        for (var s = 0, i = A[t].length; s < i; ++s) A[t][s].apply(x, e);
                        return x
                    }

                    function it() {
                        return k.parentNode
                    }

                    function nt(t) {
                        if (A.focus) st("focus", B);
                        else {
                            var e = t.target;
                            s === g(e, s) ? !it() && M(I.parent) : N()
                        }
                    }
                }).version = "2.1.1", i.state = {
                    class: "color-picker",
                    color: r,
                    parent: null
                }, i.instances = {}, i[r] = function(t) {
                    if (C(t)) {
                        var e = (t = t.trim()).length;
                        if (4 !== e && 7 !== e || "#" !== t[0]) {
                            if ((5 === e || 9 === e) && "#" === t[0] && /^#([a-z\d]{1,2}){4}$/i.test(t)) return 5 === e ? [T(t[1] + t[1], 16), T(t[2] + t[2], 16), T(t[3] + t[3], 16), x(T(t[4] + t[4], 16) / 255, 2)] : [T(t[1] + t[2], 16), T(t[3] + t[4], 16), T(t[5] + t[6], 16), x(T(t[7] + t[8], 16) / 255, 2)]
                        } else if (/^#([a-z\d]{1,2}){3}$/i.test(t)) return 4 === e ? [T(t[1] + t[1], 16), T(t[2] + t[2], 16), T(t[3] + t[3], 16), 1] : [T(t[1] + t[2], 16), T(t[3] + t[4], 16), T(t[5] + t[6], 16), 1];
                        return [0, 0, 0, 1]
                    }
                    return "#" + ("000000" + k(+t[2] | +t[1] << 8 | +t[0] << 16, 16)).slice(-6) + (E(t[3]) && t[3] < 1 ? k(A(255 * t[3]) + 65536, 16).substr(-2) : "")
                }, i._ = i.prototype
            }(window, document)
        },
        164: (t, e, s) => {
            const i = s(61),
                n = s(278),
                r = s(816),
                a = s(810),
                o = s(692),
                l = s(607),
                c = s(706),
                h = s(565),
                u = s(40);
            class d {
                constructor(t) {
                    this.bodyEl = document.querySelector("#contract-result > .body"), this.tpl = r(document.getElementById("tpl-final-result").innerHTML), this.eventEmitter = new a, this.userBalance = t, this.sfx = new c
                }
                static get btnId() {
                    return "btn-result-close"
                }
                static get elId() {
                    return "state-after-sign"
                }
                clear() {
                    let t = this.bodyEl.querySelector("#" + d.elId);
                    if (t) {
                        for (; t.firstChild;) t.removeChild(t.lastChild);
                        this.bodyEl.removeChild(t)
                    }
                    l.stop()
                }
                render(t) {
                    this.clear();
                    let e = document.createElement("div");
                    e.id = d.elId, e.innerHTML = this.tpl({
                        image: t.asset.image.large,
                        price: n.format(t.price),
                        rarity: t.asset.rarity
                    }), e.querySelector("#" + d.btnId).addEventListener("click", (t => {
                        this.clear(), this.eventEmitter.emit("closed")
                    })), this.bodyEl.prepend(e), this.renderSfx(t.asset.nameRu || t.asset.nameEn), setTimeout((() => {
                        this.eventEmitter.emit("animation.finished")
                    }), h.animationFinished)
                }
                renderSfx(t) {
                    new u(t, ".result-name"), setTimeout((() => {
                        l.start()
                    }), h.confettiDelay), this.sfx.playApplause(h.applauseDelay)
                }
                request(t) {
                    return new Promise((async (e, s) => {
                        i.doRequest(this.bodyEl.dataset.endpoint, o(t), "POST").then((t => {
                            if (!0 === t.data.success) return this.userBalance.balance = t.data.balance, setTimeout((() => {
                                this.render(t.data)
                            }), h.finalRenderDelay), void e(t);
                            s(t)
                        })).catch((t => {
                            s(t)
                        }))
                    }))
                }
                on(t, e) {
                    this.eventEmitter.on(t, e)
                }
            }
            t.exports = d
        },
        692: t => {
            t.exports = function(t) {
                let e = new FormData;
                return e.append("balance", parseFloat(t.balance).toString()), t.signature && e.append("signature", t.signature), t.target && e.append("target", t.target),
                    function(t) {
                        let s = new RegExp("^\\d+$");
                        t.filter((t => s.test(t))).forEach(((t, s) => {
                            e.append(`drops[${s}][id]`, t)
                        }))
                    }(t.drops), e
            }
        },
        234: (t, e, s) => {
            const i = s(225);
            t.exports = class {
                constructor() {
                    this.parentClassName = ".result-target-select", this.parentEl = document.querySelector(this.parentClassName), this.listEl = this.parentEl.querySelector(".result-target-list"), this._target = null, this.parentEl.addEventListener("click", this.open.bind(this)), this.listEl.addEventListener("click", this.select.bind(this)), document.addEventListener("click", (t => {
                        null === t.target.closest(this.parentClassName) && i.removeClass(this.listEl, "open")
                    }))
                }
                get target() {
                    return this._target || null
                }
                select(t) {
                    if (t.target && "ul" !== t.target.tagName.toLowerCase()) {
                        i.forEach(this.listEl.querySelectorAll("li"), ((t, e) => {
                            i.removeClass(e, "active")
                        }));
                        let e = t.target.closest("li");
                        i.addClass(e, "active");
                        let s = e.querySelector("svg"),
                            n = this.parentEl.querySelector("#result-target-option-holder");
                        n.replaceChild(s.cloneNode(!0), n.querySelector("svg")), n.childNodes[1].textContent = e.dataset.tooltipContent, this._target = e.dataset.type
                    }
                }
                open(t) {
                    i.toggleClass(this.parentEl, "active"), i.toggleClass(this.listEl, "open")
                }
            }
        },
        40: (t, e, s) => {
            const i = s(706);
            t.exports = class {
                constructor(t, e) {
                    this.maskLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], this.duration = 3e3, this.delay = 0, this.parentEl = document.querySelector(e), this.sfx = new i, this.text = t.split(""), this.fn = () => {
                        this.sfx.playStep()
                    }, this.clear(), this.text.forEach((t => {
                        let e = document.createElement("span");
                        e.dataset.l = t, e.dataset.t = 0, e.innerText = this.maskLetters[Math.floor(Math.random() * this.maskLetters.length)], this.parentEl.appendChild(e), this.changeLetter(e, 0)
                    }))
                }
                changeLetter(t, e) {
                    let s = this.randomInt(.1 * this.duration, .85 * this.duration);
                    if (parseInt(t.dataset.t) + s > this.duration && (s = this.duration - parseInt(t.dataset.t)), parseInt(t.dataset.t) >= this.duration) return t.innerText = t.dataset.l, t.dataset.l = "", void(t.dataset.t = "");
                    setTimeout((() => {
                        t.innerText = this.maskLetters[this.randomInt(0, this.maskLetters.length - 1)], t.dataset.t = parseInt(t.dataset.t) + s, this.fn(), this.changeLetter(t, s)
                    }), e)
                }
                randomInt(t, e) {
                    return Math.floor(Math.random() * (e - t + 1) + t)
                }
                clear() {
                    if (this.parentEl)
                        for (; this.parentEl.firstChild;) this.parentEl.removeChild(this.parentEl.firstChild)
                }
            }
        },
        714: (t, e, s) => {
            const i = s(544),
                n = s(810),
                r = s(879),
                a = s(139),
                o = s(589),
                l = s(278),
                c = s(225),
                h = s(565);
            t.exports = class {
                constructor() {
                    this.STATES = {
                        ERROR: -1,
                        NEW: 0,
                        NOT_ENOUGH: 1,
                        OVERFLOWED: 2,
                        FILLED: 3,
                        LOADING: 4,
                        LOADED: 5,
                        FINISHED: 6
                    }, this.parentEl = document.querySelector("#contract-collection"), this.summaryEl = document.querySelector("#contract-summary"), this.resultEl = document.querySelector("#state-before-sign"), this.btnSignEl = this.resultEl.querySelector("#btn-sign"), this.resultRangeEl = this.resultEl.querySelector("#result-range"), this.balanceSlider = new i, this.eventEmitter = new n, this.collection = new Map, this.limits = {
                        in: this.parentEl.dataset.limitIn,
                        out: this.parentEl.dataset.limitOut,
                        isOverflowed: t => parseFloat(t) > this.parentEl.dataset.limitIn
                    }, this.resultRange = t => {
                        let e = parseFloat(4.3 * t);
                        return {
                            min: parseFloat(.37 * t).toFixed(0),
                            max: e > this.limits.out ? this.limits.out : e.toFixed(0)
                        }
                    }, this.stopPropagationFn = t => {
                        t.stopPropagation(), t.preventDefault()
                    }, this.changeState().new(), this.init()
                }
                init() {
                    this.attachListeners(), this.balanceSlider.on("change", (t => {
                        t > 0 ? this.add(new r({
                            cost: t
                        })) : this.deleteItem(r.id())
                    })), this.eventEmitter.on("contract.modified", (() => {
                        this.renderCollection(), this.renderLabels();
                        let {
                            totalCost: t,
                            assetCount: e
                        } = this.summary;
                        this.isPreparing && (this.limits.isOverflowed(t) ? this.state = this.STATES.OVERFLOWED : this.state = e >= 3 ? this.STATES.FILLED : this.STATES.NOT_ENOUGH)
                    }))
                }
                attachListeners() {
                    this.parentEl.addEventListener("click", (t => {
                        t.target.closest("div.item") && "" !== t.target.closest("div.item").dataset.id && (t.preventDefault(), this.deleteItem(t.target.closest("div.item").dataset.id))
                    }), !1), this.btnSignEl.addEventListener("click", (t => {
                        this._state === this.STATES.FILLED && (this.eventEmitter.emit("signed"), this.state = this.STATES.LOADING)
                    }))
                }
                renderCollection() {
                    let t = this.parentEl.querySelectorAll(".item"),
                        e = 0;
                    this.collection.forEach(((s, i) => {
                        t[e].setAttribute("data-id", s.id), t[e].innerHTML = s.render(), e++
                    }));
                    for (let e = this.collection.size; e < 10; e++) "" !== t[e].dataset.id && (t[e].dataset.id = "", t[e].innerHTML = o.renderEmpty())
                }
                renderLabels() {
                    let {
                        totalCost: t,
                        assetCount: e
                    } = this.summary, s = this.resultRange(t), i = this.resultRangeEl.querySelectorAll("span");
                    i[0].innerText = l.format(s.min), i[1].innerText = l.format(s.max), this.limits.isOverflowed(t) ? c.addClass(this.summaryEl, "overflow") : (c.removeClass(this.summaryEl, "overflow"), this.summaryEl.querySelector(".asset-counter").innerText = function(t) {
                        let e = "";
                        switch (t) {
                            case 0:
                            case 1:
                                e = "ПРЕДМЕТА";
                                break;
                            case 2:
                                e = "ПРЕДМЕТ";
                                break;
                            default:
                                return ""
                        }
                        return "ПОЛОЖИТЕ ЕЩЕ МИНИМУМ " + (3 - t) + " " + e
                    }(e)), t.length > 8 ? c.addClass(this.summaryEl.querySelector(".contract-total-sum"), "wide") : c.removeClass(this.summaryEl.querySelector(".contract-total-sum"), "wide"), this.summaryEl.querySelector(".contract-total-sum > span").innerText = l.format(t)
                }
                set state(t) {
                    t !== this._state && (this._state = t, this.changeUI())
                }
                changeUI() {
                    switch (this._state) {
                        case this.STATES.ERROR:
                            this.balanceSlider.enable(), this.eventEmitter.emit("contract.modified"), document.querySelector(".contract").removeEventListener("click", this.stopPropagationFn, !0);
                            break;
                        case this.STATES.NEW:
                        case this.STATES.NOT_ENOUGH:
                        case this.STATES.OVERFLOWED:
                            this._state === this.STATES.NEW && this.show(), this.balanceSlider.enable(), c.addClass(this.btnSignEl, "disabled");
                            break;
                        case this.STATES.FILLED:
                            c.removeClass(this.btnSignEl, "disabled");
                            break;
                        case this.STATES.LOADING:
                            this.balanceSlider.disable(), c.addClass(this.btnSignEl, "disabled"), document.querySelector(".contract").addEventListener("click", this.stopPropagationFn, !0);
                            break;
                        case this.STATES.LOADED:
                            this.hide(), setTimeout((() => {
                                this.deleteAll(), this.balanceSlider.setValue(0)
                            }), h.contractResetDelay);
                            break;
                        case this.STATES.FINISHED:
                            document.querySelector(".contract").removeEventListener("click", this.stopPropagationFn, !0)
                    }
                }
                get summary() {
                    let t = 0,
                        e = 0;
                    return this.collection.forEach(((s, i) => {
                        t += s.cost, e += s instanceof a ? 1 : 0
                    })), {
                        totalCost: parseFloat(t).toFixed(2),
                        assetCount: e
                    }
                }
                addAsset(t) {
                    this.add(new a(t))
                }
                add(t) {
                    this.collection.set(t.id, t), this.eventEmitter.emit("contract.modified", t, !1)
                }
                deleteItem(t) {
                    if (this.collection.has(t)) {
                        let e = this.collection.get(t);
                        this.collection.delete(t), e instanceof r && this.balanceSlider.setValue(0), this.eventEmitter.emit("contract.modified", e, !0)
                    }
                }
                deleteAll() {
                    this.collection.clear(), this.eventEmitter.emit("contract.modified", null, !0)
                }
                on(t, e) {
                    this.eventEmitter.on(t, e)
                }
                changeState() {
                    return {
                        error: () => {
                            this.state = this.STATES.ERROR
                        },
                        new: () => {
                            this.state = this.STATES.NEW
                        },
                        finished: () => {
                            this.state = this.STATES.FINISHED
                        },
                        loaded: () => {
                            this.state = this.STATES.LOADED
                        }
                    }
                }
                serialize() {
                    return {
                        drops: Array.from(this.collection.keys()),
                        balance: this.balanceSlider.getValue()
                    }
                }
                get isFinished() {
                    return this._state === this.STATES.FINISHED
                }
                get isPreparing() {
                    return [this.STATES.FILLED, this.STATES.NEW, this.STATES.NOT_ENOUGH, this.STATES.ERROR, this.STATES.OVERFLOWED].includes(this._state)
                }
                show() {
                    c.removeClass(this.resultEl, "animated"), c.removeClass(this.resultEl, "bounceOut")
                }
                hide() {
                    c.addClass(this.resultEl, "animated"), c.addClass(this.resultEl, "bounceOut")
                }
                has(t) {
                    return this.collection.has(t.toString())
                }
            }
        },
        139: (t, e, s) => {
            const i = s(589),
                n = s(278);
            t.exports = class extends i {
                constructor(t) {
                    super(t.id, t.cost), this.name = t.name, this.title = t.title, this.rarity = t.rarity, this.image = t.image, this.tpl = this.template(document.getElementById("tpl-asset-slot").innerHTML)
                }
                render() {
                    return this.tpl({
                        name: this.name,
                        title: this.title,
                        cost: n.format(this.cost),
                        image: this.image
                    })
                }
            }
        },
        879: (t, e, s) => {
            const i = s(589),
                n = s(278);
            class r extends i {
                constructor(t) {
                    super(r.id(), t.cost), this.tpl = this.template(document.getElementById("tpl-funds-slot").innerHTML)
                }
                static id() {
                    return "_funds"
                }
                render() {
                    return this.tpl({
                        cost: n.format(this.cost)
                    })
                }
            }
            t.exports = r
        },
        589: (t, e, s) => {
            const i = s(816);
            t.exports = class {
                constructor(t, e) {
                    this.id = t, this.cost = e, this.template = i
                }
                set cost(t) {
                    this._cost = parseFloat(t)
                }
                get cost() {
                    return this._cost
                }
                static renderEmpty() {
                    return i(document.getElementById("tpl-empty-slot").innerHTML)()
                }
            }
        },
        898: (t, e, s) => {
            const i = s(225);
            s(704), t.exports = class {
                constructor() {
                    this.parent = document.getElementById("signature-holder"), this.canvas = this.parent.querySelector("#signature-canvas"), this.ctx = this.canvas.getContext("2d");
                    let t = this.getCoords(this.canvas);
                    this.canvasx = t.left, this.canvasy = t.top, this.last_mousex = this.last_mousey = 0, this.mousex = this.mousey = 0, this.mousedown = !1, this.btnEls = {
                        tools: this.parent.querySelectorAll("ul.tools > li"),
                        colors: this.parent.querySelectorAll("ul.colors > li")
                    }, this.isClear = !0, this.initColorButtons(), this.initToolButtons(), this.canvas.addEventListener("mousedown", this.engage.bind(this)), this.canvas.addEventListener("touchstart", this.engage.bind(this), !1), this.canvas.addEventListener("mousemove", this.putPoint.bind(this)), this.canvas.addEventListener("touchmove", this.putPoint.bind(this), !1), this.canvas.addEventListener("mouseup", this.disengage.bind(this)), this.canvas.addEventListener("touchend", this.disengage.bind(this), !1)
                }
                initColorButtons() {
                    let t = new CP(document.querySelector("#colors-holder"));
                    t.on("blur", (function() {})), t.on("focus", (function() {})), t.on("change", ((e, s, i, n) => {
                        this.strokeColor = t.color(e, s, i, n)
                    })), t.self.classList.add("is-static"), t.enter(document.querySelector("#colors-holder"))
                }
                initToolButtons() {
                    this.toolType = this.parent.querySelector("ul.tools > li.active[data-tool]").getAttribute("data-tool"), i.forEach(this.btnEls.tools, ((t, e) => {
                        e.addEventListener("click", this.toolClickHandler.bind(this))
                    }))
                }
                toolClickHandler(t) {
                    t.preventDefault();
                    let e = t.target.closest("li");
                    e.getAttribute("data-tool") ? (this.toolType = e.getAttribute("data-tool"), i.forEach(this.btnEls.tools, ((t, e) => {
                        i.removeClass(e, "active")
                    })), i.addClass(e, "active")) : !0 === confirm("Стереть подпись?") && (this.clearRect(), this.parent.querySelector('ul.tools > li[data-tool="draw"]').click())
                }
                set strokeColor(t) {
                    this.ctx.strokeStyle = t
                }
                set toolType(t) {
                    this._tooltype = t
                }
                clearRect() {
                    this.isClear = !0, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                reset() {
                    this.clearRect(), this.toolType = "draw", i.forEach(this.btnEls.tools, ((t, e) => {
                        0 !== t ? i.removeClass(e, "active") : i.addClass(e, "active")
                    }))
                }
                engage(t) {
                    let e = this._getPoint(t);
                    this.isClear = !1, this.last_mousex = this.mousex = e.x, this.last_mousey = this.mousey = e.y, this.mousedown = !0
                }
                putPoint(t) {
                    let e = this._getPoint(t);
                    this.mousex = e.x, this.mousey = e.y, this.mousedown && (this.ctx.beginPath(), "draw" === this._tooltype ? (this.ctx.globalCompositeOperation = "source-over", this.ctx.lineWidth = 3) : "erase" === this._tooltype && (this.ctx.globalCompositeOperation = "destination-out", this.ctx.lineWidth = 10), this.ctx.moveTo(this.last_mousex, this.last_mousey), this.ctx.lineTo(this.mousex, this.mousey), this.ctx.lineJoin = this.ctx.lineCap = "round", this.ctx.stroke()), this.last_mousex = this.mousex, this.last_mousey = this.mousey, t.stopPropagation(), t.preventDefault()
                }
                disengage() {
                    this.mousedown = !1
                }
                _getPoint(t) {
                    let e = parseInt(t.pageX - this.canvasx),
                        s = parseInt(t.pageY - this.canvasy);
                    if (t.touches && 1 === parseInt(t.touches.length)) {
                        let i = t.touches[0];
                        e = parseInt(i.pageX - this.canvasx), s = parseInt(i.pageY - this.canvasy)
                    }
                    return {
                        x: e,
                        y: s
                    }
                }
                get base64Data() {
                    return this.isClear ? null : this.canvas.toDataURL()
                }
                getCoords(t) {
                    let e = t.getBoundingClientRect(),
                        s = document.body,
                        i = document.documentElement,
                        n = window.pageYOffset || i.scrollTop || s.scrollTop,
                        r = window.pageXOffset || i.scrollLeft || s.scrollLeft,
                        a = i.clientTop || s.clientTop || 0,
                        o = i.clientLeft || s.clientLeft || 0,
                        l = e.top + n - a,
                        c = e.left + r - o;
                    return {
                        top: Math.round(l),
                        left: Math.round(c)
                    }
                }
            }
        },
        565: t => {
            t.exports = {
                confettiDelay: 2600,
                applauseDelay: 2e3,
                contractResetDelay: 700,
                animationFinished: 2e3,
                finalRenderDelay: 850
            }
        },
        544: (t, e, s) => {
            const i = s(365),
                n = s(810),
                r = s(278);
            t.exports = class {
                constructor() {
                    this.parent = document.querySelector("#use-balance-wrapper"), this.slider = this.parent.querySelector("#use-balance-slider"), this.eventEmitter = new n, this.balance = parseFloat(this.slider.dataset.__balance), this.init()
                }
                init() {
                    i.create(this.slider, {
                        start: [0],
                        range: {
                            min: 0,
                            max: this.balance <= 0 ? .01 : this.balance
                        }
                    }), this.balance <= 0 && this.disable(), this.slider.noUiSlider.on("update", ((t, e) => {
                        this.parent.querySelector("#use-balance-amount").innerText = r.priceFormat(t[e]), this.eventEmitter.emit("change", t[e])
                    }))
                }
                getValue() {
                    return parseFloat(this.slider.noUiSlider.get())
                }
                setValue(t) {
                    this.slider.noUiSlider.set([t, null])
                }
                disable() {
                    this.slider.setAttribute("disabled", !0)
                }
                enable() {
                    let t = parseFloat(this.slider.dataset.__balance);
                    t <= 0 ? this.disable() : this.slider.hasAttribute("disabled") && (t !== this.balance ? (this.balance = t, this.slider.noUiSlider.updateOptions({
                        range: {
                            min: 0,
                            max: this.balance
                        }
                    }), this.slider.removeAttribute("disabled")) : this.slider.removeAttribute("disabled"))
                }
                on(t, e) {
                    this.eventEmitter.on(t, e)
                }
            }
        },
        609: (t, e, s) => {
            const i = s(61),
                n = s(278),
                r = s(816),
                a = s(625),
                o = s(30),
                l = s(225),
                c = s(55),
                h = s(810);
            t.exports = class {
                constructor(t) {
                    this.parentEl = document.querySelector("#user-items"), this.loadingEl = this.parentEl.querySelector(".loading"), this.sortEl = this.parentEl.querySelector("#inv-sort-by-price"), this.summaryEl = this.parentEl.querySelector(".summary"), this.collection = new Map, this.contractCollection = t, this.pagination = new o, this.eventEmitter = new h, this.init()
                }
                init() {
                    this.fetchItems(), this.attachListeners()
                }
                setItems(t) {
                    this.sortEl.style.display = "block", this.summaryEl.innerHTML = `(<strong>${t.totalCount}</strong> шт на <span class='__balance'><strong>${n.format(t.totalCost)}</strong></span>)`, this.pagination.set(Object.assign(t.pagination, {
                        totalCount: t.totalCount
                    })), this.collection.clear(), t.drops.forEach((t => {
                        this.collection.set(t.id.toString(), new a(t))
                    })), this.renderCollection()
                }
                renderCollection() {
                    let t = "";
                    this.collection.forEach(((e, s) => {
                        t += e.render(this.contractCollection.has(s))
                    }));
                    let e = this.getClearedBody();
                    e.innerHTML = `<div class="items-holder">${t}</div>`, e.appendChild(this.pagination.render())
                }
                enableItem(t) {
                    this.collection.has(t) && l.removeClass(this.parentEl.querySelector(`div.item[data-id="${t}"]`), "disabled")
                }
                setNoItems() {
                    let t = r(document.getElementById("tpl-empty-inventory").innerHTML);
                    this.getClearedBody().innerHTML = t(), this.sortEl.style.display = "none", this.summaryEl.innerHTML = ""
                }
                showLoading() {
                    this.loadingEl.style.display = "flex"
                }
                hideLoading() {
                    this.loadingEl.style.display = "none"
                }
                getClearedBody() {
                    let t = this.parentEl.querySelector(".body");
                    for (; t.firstChild;) t.removeChild(t.lastChild);
                    return t
                }
                attachListeners() {
                    this.pagination.onClick = t => {
                        this.fetchItems(t.target.dataset.page, this.sortEl.dataset.sort)
                    }, this.parentEl.addEventListener("click", (t => {
                        t.target.closest("div.item") ? (t.preventDefault(), this.clickEvents.item(t.target.closest("div.item"))) : t.target.matches(`#${this.sortEl.id}`) && (t.preventDefault(), this.clickEvents.sort(t))
                    }), !1)
                }
                fetchItems(t = 1, e = null, s = null) {
                    this.showLoading(), i.doRequest(this.parentEl.dataset.endpoint, {
                        page: t,
                        sort: e || null
                    }).then((t => {
                        !0 === t.data.success && (0 === t.data.drops.length ? this.setNoItems() : this.setItems(t.data))
                    })).catch((t => {
                        console.log(t), t && t.response && 401 === t.response.status ? this.setNoItems() : c.showError(t)
                    })).then((() => {
                        this.hideLoading()
                    }))
                }
                get clickEvents() {
                    return {
                        sort: t => {
                            l.addClass(t.target, "active"), l.toggleClass(t.target, "reverse"), t.target.dataset.sort && "price" !== t.target.dataset.sort ? t.target.dataset.sort = "price" : t.target.dataset.sort = "-price", this.fetchItems(this.pagination.pager.currentPage, t.target.dataset.sort)
                        },
                        item: t => {
                            let {
                                assetCount: e
                            } = this.contractCollection.summary;
                            l.hasClass(t, "disabled") || e + 1 > 9 || (l.addClass(t, "disabled"), this.eventEmitter.emit("item.clicked"), this.contractCollection.addAsset(t.dataset))
                        }
                    }
                }
                on(t, e) {
                    this.eventEmitter.on(t, e)
                }
            }
        },
        625: (t, e, s) => {
            const i = s(816),
                n = s(278);
            t.exports = class {
                constructor(t) {
                    this.tpl = i(document.getElementById("tpl-inventory-item").innerHTML), this.drop = t, this.drop.asset.name = function(e) {
                        let s = t.asset.name_ru || t.asset.name_en;
                        return "multiline" === e ? s.replace(/\s\|\s/gi, "<br/>") : s
                    }
                }
                render(t) {
                    return this.tpl({
                        id: this.drop.id,
                        price: this.drop.price,
                        cost: {
                            float: this.drop.price,
                            formatted: n.priceFormat(this.drop.price)
                        },
                        name: this.drop.asset.name("multiline"),
                        title: this.drop.asset.name(),
                        rarity: this.drop.asset.rarity,
                        image: this.drop.asset.image.middle,
                        disabled: t
                    })
                }
            }
        },
        30: (t, e, s) => {
            const i = s(15),
                n = s(816);
            t.exports = class {
                constructor() {
                    this.tpl = n(document.getElementById("tpl-pagination").innerHTML)
                }
                set onClick(t) {
                    this.clickFn = t
                }
                set(t) {
                    this.pager = i(t.totalCount, t.current, t.size, t.count)
                }
                render() {
                    let t = this.tpl({
                            total: this.pager.totalPages,
                            pages: this.pager.pages,
                            currentPage: this.pager.currentPage,
                            startPage: this.pager.startPage,
                            endPage: this.pager.endPage
                        }),
                        e = (new DOMParser).parseFromString(t, "text/html");
                    return e.querySelectorAll("a").forEach((t => {
                        t.addEventListener("click", (t => {
                            t.preventDefault(), this.clickFn(t)
                        }))
                    })), e.body.firstChild
                }
            }
        },
        29: (t, e, s) => {
            const i = s(609),
                n = s(714),
                r = s(898),
                a = s(164),
                o = s(234),
                l = s(174),
                c = s(55),
                h = s(565),
                u = s(706);
            t.exports = class {
                constructor() {
                    this.signature = new r, this.contractCollection = new n, this.userItemsCollection = new i(this.contractCollection), this.userBalance = new l, this.finale = new a(this.userBalance), this.resultTargetSelect = new o, this.sfx = new u, this.initEvents()
                }
                initEvents() {
                    this.contractCollection.on("contract.modified", ((t, e) => {
                        t && e && this.userItemsCollection.enableItem(t.id)
                    })), this.contractCollection.on("signed", (async () => {
                        try {
                            this.sfx.playPenClick(), !0 === (await this.finale.request(Object.assign(this.contractCollection.serialize(), {
                                signature: this.signature.base64Data,
                                target: this.resultTargetSelect.target
                            }))).data.success && (this.contractCollection.changeState().loaded(), setTimeout((() => {
                                this.signature.reset()
                            }), h.contractResetDelay))
                        } catch (t) {
                            this.contractCollection.changeState().error(), c.showError(t)
                        }
                    })), this.userItemsCollection.on("item.clicked", (() => {
                        this.contractCollection.isFinished && (this.finale.clear(), this.contractCollection.changeState().new())
                    })), this.finale.on("closed", (() => {
                        this.contractCollection.changeState().new()
                    })), this.finale.on("animation.finished", (() => {
                        this.contractCollection.changeState().finished(), this.userItemsCollection.fetchItems()
                    }))
                }
            }
        },
        885: t => {
            t.exports = class {
                constructor(t) {
                    this.collection = document.getElementsByClassName("balance-amount"), this._setBalance(t)
                }
                up(t) {
                    this._change(Math.abs(parseFloat(t)))
                }
                down(t) {
                    this._change(-1 * Math.abs(parseFloat(t)))
                }
                set(t) {
                    this._change(null, Math.abs(parseFloat(t)))
                }
                getBalance() {
                    return this.balance
                }
                _setBalance(t) {
                    this.balance = Math.round(100 * parseFloat(t)) / 100
                }
                _change(t, e = null) {
                    if (this.getBalance()) {
                        let s = null !== t ? this.getBalance() + t : e;
                        s < 0 && (s = 0), this._setBalance(s);
                        for (let t = 0, e = this.collection.length; t < e; t++) this.collection[t].innerText = this.getBalance()
                    }
                }
            }
        },
        607: t => {
            t.exports = function() {
                let t = {
                        maxCount: 30,
                        speed: 2,
                        frameInterval: 15,
                        alpha: 1,
                        gradient: !1,
                        start: m,
                        stop: f,
                        toggle: function() {
                            i ? f() : m()
                        },
                        pause: u,
                        resume: d,
                        togglePause: function() {
                            r ? d() : u()
                        },
                        remove: function() {
                            stop(), r = !1, o = []
                        },
                        isPaused: function() {
                            return r
                        },
                        isRunning: function() {
                            return i
                        }
                    },
                    e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
                    s = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"],
                    i = !1,
                    n = null,
                    r = !1,
                    a = Date.now(),
                    o = [],
                    l = 0,
                    c = null;

                function h(e, i, n) {
                    return e.color = s[Math.random() * s.length | 0] + (t.alpha + ")"), e.color2 = s[Math.random() * s.length | 0] + (t.alpha + ")"), e.x = Math.random() * i, e.y = Math.random() * n - n, e.diameter = 10 * Math.random() + 5, e.tilt = 10 * Math.random() - 10, e.tiltAngleIncrement = .07 * Math.random() + .05, e.tiltAngle = Math.random() * Math.PI, e
                }

                function u() {
                    r = !0
                }

                function d() {
                    r = !1, p()
                }

                function p() {
                    if (r);
                    else if (0 === o.length) c.clearRect(0, 0, window.innerWidth, window.innerHeight), n = null;
                    else {
                        var s = Date.now(),
                            u = s - a;
                        (!e || u > t.frameInterval) && (c.clearRect(0, 0, window.innerWidth, window.innerHeight), function() {
                            var e, s = window.innerWidth,
                                n = window.innerHeight;
                            l += .01;
                            for (var r = 0; r < o.length; r++) e = o[r], !i && e.y < -15 ? e.y = n + 100 : (e.tiltAngle += e.tiltAngleIncrement, e.x += Math.sin(l) - .5, e.y += .5 * (Math.cos(l) + e.diameter + t.speed), e.tilt = 15 * Math.sin(e.tiltAngle)), (e.x > s + 20 || e.x < -20 || e.y > n) && (i && o.length <= t.maxCount ? h(e, s, n) : (o.splice(r, 1), r--))
                        }(), function(e) {
                            for (var s, i, n, r, a = 0; a < o.length; a++) {
                                if (s = o[a], e.beginPath(), e.lineWidth = s.diameter, i = (n = s.x + s.tilt) + s.diameter / 2, r = s.y + s.tilt + s.diameter / 2, t.gradient) {
                                    var l = e.createLinearGradient(i, s.y, n, r);
                                    l.addColorStop("0", s.color), l.addColorStop("1.0", s.color2), e.strokeStyle = l
                                } else e.strokeStyle = s.color;
                                e.moveTo(i, s.y), e.lineTo(n, r), e.stroke()
                            }
                        }(c), a = s - u % t.frameInterval), n = requestAnimationFrame(p)
                    }
                }

                function m(e, s, n) {
                    let a = document.querySelector("#contract-result > .body"),
                        l = a.offsetWidth,
                        u = a.offsetHeight;
                    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                        return window.setTimeout(e, t.frameInterval)
                    };
                    let d = document.getElementById("confetti-canvas");
                    null === d ? (d = document.createElement("canvas"), d.setAttribute("id", "confetti-canvas"), d.setAttribute("style", "display:block;z-index:1;pointer-events:none;position:absolute;top:0;left:0;"), a.prepend(d), d.width = l, d.height = u, window.addEventListener("resize", (function() {
                        d.width = window.innerWidth, d.height = window.innerHeight
                    }), !0), c = d.getContext("2d")) : null === c && (c = d.getContext("2d"));
                    let m = t.maxCount;
                    if (s)
                        if (n)
                            if (s == n) m = o.length + n;
                            else {
                                if (s > n) {
                                    var g = s;
                                    s = n, n = g
                                }
                                m = o.length + (Math.random() * (n - s) + s | 0)
                            }
                    else m = o.length + s;
                    else n && (m = o.length + n);
                    for (; o.length < m;) o.push(h({}, l, u));
                    i = !0, r = !1, p(), e && window.setTimeout(f, e)
                }

                function f() {
                    i = !1
                }
                return t
            }()
        },
        582: t => {
            "use strict";
            var e = "http://www.w3.org/2000/svg",
                s = 0,
                i = {},
                n = !1,
                r = null;

            function a(t, e, i, n, r) {
                s++, this.num = s, this.htmlContainerId = t.toLowerCase(), this.htmlContainer = document.getElementById(t), this.fireColor = e, this.startX = i, this.startY = n, this.fwScale = void 0 !== r ? r : 1, this.SVGcanvas = null, this.fwContainer = null, this.ascendingFireBall = null, this.sparks = null, this.fastExplosion = null, this.particles = null, this.shineColor = null, this.velX = 0, this.velY = -100, this.gravity = 40, this.timeBeforeExplosion = 1500, this.ascendingFireBallRadius = 14, this.firstExplosionRadius = 45, this.numExplosionParticles = 200, this.explosionParticleRadius = 2.5, this.explosionVelocity = 180, this.explosionDeceleration = .96, this.explosionParticlesMaxLifespan = 2e3, this.shineRadius = 60, this.shineExpansionTime = 800, this.shineFadeOutTime = 1100, this.useAudio = !1, this.audioURL = "Explosion.mp3", this.separation = 118, this.fwCenter = 132
            }
            a.prototype.start = function() {
                i.hasOwnProperty(this.htmlContainerId) ? i[this.htmlContainerId] = i[this.htmlContainerId] + 1 : i[this.htmlContainerId] = 1, this.separation = Math.round(1.6 * (this.shineRadius + this.ascendingFireBallRadius)), this.fwCenter = this.ascendingFireBallRadius + this.separation;
                var t = this.htmlContainer.getElementsByClassName("fwSVGcanvas");
                if (t.length > 0) this.SVGcanvas = t[0];
                else {
                    this.SVGcanvas = document.createElementNS(e, "svg"), this.SVGcanvas.setAttributeNS(null, "class", "fwSVGcanvas"), this.SVGcanvas.setAttributeNS(null, "width", this.htmlContainer.offsetWidth), this.SVGcanvas.setAttributeNS(null, "height", this.htmlContainer.offsetHeight), this.SVGcanvas.setAttributeNS(null, "style", "display:block; position:absolute");
                    var s = getComputedStyle(this.htmlContainer, null).position.toLowerCase();
                    if ("absolute" == s || "fixed" == s || "relative" == s) this.SVGcanvas.style.top = "0px", this.SVGcanvas.style.left = "0px";
                    else {
                        var o = this.htmlContainer.getBoundingClientRect();
                        this.SVGcanvas.style.top = o.top + "px", this.SVGcanvas.style.left = o.left + "px"
                    }
                    this.htmlContainer.appendChild(this.SVGcanvas)
                }
                this.fwContainer = document.createElementNS(e, "svg");
                var l = (this.separation + this.ascendingFireBallRadius) * this.fwScale;
                this.fwContainer.setAttributeNS(null, "x", this.startX - l), this.fwContainer.setAttributeNS(null, "y", this.startY - l), this.fwContainer.setAttributeNS(null, "width", 2 * this.separation * this.fwScale), this.fwContainer.setAttributeNS(null, "height", 2 * this.separation * this.fwScale);
                var c = 2 * this.separation;
                this.fwContainer.setAttributeNS(null, "viewBox", "0 0 " + c + " " + c), this.SVGcanvas.appendChild(this.fwContainer), this.useAudio && !n && (r = new Audio(this.audioURL), n = !0), this.createGradient(this.fwContainer, "bigFireGrad" + this.num, [{
                    offset: "20%",
                    style: "stop-color:#fff;stop-opacity:1"
                }, {
                    offset: "45%",
                    style: "stop-color:#" + this.fireColor + ";stop-opacity:0.6"
                }, {
                    offset: "100%",
                    style: "stop-color:#" + this.fireColor + ";stop-opacity:0"
                }]), this.createFilter(this.fwContainer, "sparklesGlow" + this.num, "FFFFFF", 2), this.createGradient(this.fwContainer, "explosionGrad" + this.num, [{
                    offset: "0%",
                    style: "stop-color:#fff;stop-opacity:1"
                }, {
                    offset: "100%",
                    style: "stop-color:#" + this.fireColor + ";stop-opacity:0"
                }]), this.createFilter(this.fwContainer, "particlesGlow" + this.num, this.fireColor, 4), this.createGradient(this.fwContainer, "backlightGrad" + this.num, [{
                    offset: "20%",
                    style: "stop-color:#" + this.fireColor + ";stop-opacity:0.3"
                }, {
                    offset: "100%",
                    style: "stop-color:#" + this.fireColor + ";stop-opacity:0"
                }]), this.ascendingFireBall = this.createSVG("circle", "bigFire", {
                    cx: this.fwCenter,
                    cy: this.fwCenter,
                    r: this.ascendingFireBallRadius,
                    stroke: "none",
                    fill: "url(#bigFireGrad" + this.num + ")"
                }), this.fwContainer.appendChild(this.ascendingFireBall);
                var h = this.timeBeforeExplosion + Math.max(this.explosionParticlesMaxLifespan, this.shineExpansionTime + this.shineFadeOutTime) + 100,
                    u = (this.projectileTween(this.fwContainer, h, (function() {
                        u.fwContainer.removeChild(u.particles), u.fwContainer.removeChild(u.shineColor), u.SVGcanvas.removeChild(u.fwContainer), i[u.htmlContainerId] = Math.max(0, i[u.htmlContainerId] - 1), 0 == i[u.htmlContainerId] && u.htmlContainer.removeChild(u.SVGcanvas)
                    }), this.gravity, this.velX, this.velY), this),
                    d = !1,
                    p = [
                        [.85, 85],
                        [.6, 30],
                        [.85, 120],
                        [1, 30]
                    ],
                    m = 0;
                ! function t() {
                    d || (u.setSVGscale(u.ascendingFireBall, p[m][0], u.fwCenter, u.fwCenter), setTimeout(t, p[m][1]), m = m == p.length - 1 ? 0 : m + 1)
                }(), this.sparks = document.createElementNS(e, "svg"), this.sparks.setAttributeNS(null, "filter", "url(#sparklesGlow" + this.num + ")"), this.sparks.setAttributeNS(null, "x", this.separation), this.sparks.setAttributeNS(null, "y", this.separation), this.fwContainer.appendChild(this.sparks);
                var f = setInterval((function() {
                    a.prototype.addSpark.call(u)
                }), 5);
                setTimeout((function() {
                    d = !0, u.fwContainer.removeChild(u.ascendingFireBall), clearInterval(f), u.explosion()
                }), this.timeBeforeExplosion)
            }, a.prototype.createSVG = function(t, s, i) {
                var n = document.createElementNS(e, t);
                for (var r in null != s && n.setAttributeNS(null, "id", s), i) n.setAttributeNS(null, r, i[r]);
                return n
            }, a.prototype.createGradient = function(t, s, i) {
                for (var n = this.createSVG("radialGradient", s, {
                        cx: "50%",
                        cy: "50%",
                        r: "50%",
                        fx: "50%",
                        fy: "50%"
                    }), r = 0; r < i.length; r++) {
                    var a = i[r],
                        o = document.createElementNS(e, "stop");
                    for (var l in a) o.hasAttribute(l) || o.setAttribute(l, a[l]);
                    n.appendChild(o)
                }
                this.insertDef(t, n)
            }, a.prototype.createFilter = function(t, e, s, i) {
                var n = parseInt(s, 16),
                    r = (n >> 16 & 255) / 255,
                    a = (n >> 8 & 255) / 255,
                    o = (255 & n) / 255,
                    l = this.createSVG("filter", e, {}),
                    c = this.createSVG("feColorMatrix", null, {
                        type: "matrix",
                        values: "0 0 0 " + r + " " + r + "  0 0 0 " + a + " " + a + "  0 0 0 " + o + " " + o + "  0 0 0 1 0"
                    });
                l.appendChild(c);
                var h = this.createSVG("feGaussianBlur", null, {
                    stdDeviation: i,
                    result: "coloredBlur"
                });
                l.appendChild(h);
                var u = this.createSVG("feMerge", null, {}),
                    d = this.createSVG("feMergeNode", null, {
                        in: "coloredBlur"
                    }),
                    p = this.createSVG("feMergeNode", null, {
                        in: "SourceGraphic"
                    });
                u.appendChild(d), u.appendChild(p), l.appendChild(u), this.insertDef(t, l)
            }, a.prototype.insertDef = function(t, s) {
                (t.querySelector("defs") || t.insertBefore(document.createElementNS(e, "defs"), t.firstChild)).appendChild(s)
            }, a.prototype.addSpark = function() {
                var t = 400 + 800 * Math.random(),
                    e = this.velX + 20 * Math.random() - 10,
                    s = 80 * Math.random() + 40,
                    i = this.ascendingFireBallRadius + 3 * Math.random() - 1.5,
                    n = this.ascendingFireBallRadius + 4 * Math.random(),
                    r = this.sparks,
                    o = a.prototype.createCircle.call(this, r, i, n, 1, "FFEEB8");
                this.projectileTween(o, t, (function() {
                    r.removeChild(o)
                }), 0, -e, s, 1, 0)
            }, a.prototype.explosion = function() {
                var t = this;
                this.shineColor = this.createSVG("circle", "shineColor", {
                    cx: this.fwCenter,
                    cy: this.fwCenter,
                    r: this.shineRadius,
                    stroke: "none",
                    fill: "url(#backlightGrad" + this.num + ")"
                }), this.fwContainer.appendChild(this.shineColor), this.fastExplosion = this.createSVG("circle", "explosion", {
                    cx: this.fwCenter,
                    cy: this.fwCenter,
                    r: this.firstExplosionRadius,
                    stroke: "none",
                    fill: "url(#explosionGrad" + this.num + ")"
                }), this.fwContainer.appendChild(this.fastExplosion), this.animation(65, (function(e) {
                    e > 15 && e < 40 && t.setSVGscale(t.fastExplosion, 1.67, t.fwCenter, t.fwCenter), e >= 40 && e < 65 && t.setSVGscale(t.fastExplosion, 1, t.fwCenter, t.fwCenter)
                }), (function() {
                    t.fwContainer.removeChild(t.fastExplosion)
                })), this.particles = document.createElementNS(e, "svg"), this.particles.setAttributeNS(null, "filter", "url(#particlesGlow" + this.num + ")"), this.particles;
                for (var s = 0; s < this.numExplosionParticles; s++) {
                    var i = Math.pow(Math.random(), .3) * this.explosionVelocity,
                        n = 2 * Math.random() * Math.PI,
                        a = i * Math.sin(n),
                        o = i * Math.cos(n),
                        l = 50 + Math.random() * this.explosionParticlesMaxLifespan,
                        c = this.createCircle(this.particles, this.fwCenter, this.fwCenter, this.explosionParticleRadius, "FFFFFF", this.fireColor);
                    this.explosionParticleTween(c, l, this.explosionParticleRadius, this.explosionDeceleration, a, o)
                }

                function h(e) {
                    var s = Math.min(e / t.shineFadeOutTime, 1),
                        i = 1 - s * s;
                    t.shineColor.setAttribute("fill-opacity", i)
                }
                this.fwContainer.appendChild(this.particles), this.animation(this.shineExpansionTime, (function(e) {
                    var s = Math.min(e / t.shineExpansionTime, 1),
                        i = .9 + s * (2 - s) * .7;
                    t.shineColor.setAttribute("r", i * t.shineRadius)
                }), (function() {
                    t.animation(t.shineFadeOutTime, h, null)
                })), this.useAudio && (r.currentTime = 0, r.play())
            }, a.prototype.createCircle = function(t, s, i, n, r, a) {
                a = void 0 !== a ? "#" + a : "none";
                var o = document.createElementNS(e, "circle");
                return o.setAttributeNS(null, "cx", s), o.setAttributeNS(null, "cy", i), o.setAttributeNS(null, "r", n), o.setAttributeNS(null, "fill", "#" + r), o.setAttributeNS(null, "stroke", a), "none" != a && o.setAttributeNS(null, "stroke-width", .5), t.appendChild(o), o
            }, a.prototype.projectileTween = function(t, e, s, i, n, r, a, o) {
                var l = (a = void 0 !== a ? a : 1) != (o = void 0 !== o ? o : 1),
                    c = o - a,
                    h = 0,
                    u = 0,
                    d = "svg" != t.nodeName;
                l && (d ? t.setAttribute("fill-opacity", a + "") : t.style.opacity = a);
                var p = this;
                this.animation(e, (function(s) {
                    h = s - u, u = s;
                    var o = h / 1e3;
                    r += i * o;
                    var m = d ? "cx" : "x",
                        f = d ? "cy" : "y";
                    if (p.increaseParameter(t, m, n * o), p.increaseParameter(t, f, r * o), l) {
                        var g = a + c * (s / e);
                        d ? t.setAttribute("fill-opacity", g) : t.style.opacity = g
                    }
                }), s)
            }, a.prototype.explosionParticleTween = function(t, e, s, i, n, r) {
                var a = this,
                    o = 0,
                    l = 0;
                this.animation(e, (function(c) {
                    o = c - l, l = c;
                    var h = Math.pow(i, o / 17);
                    n *= h, r *= h;
                    var u = o / 1e3;
                    a.increaseParameter(t, "cx", n * u), a.increaseParameter(t, "cy", r * u);
                    var d = 1 - c / e * .9;
                    d = Math.max(d, .01), t.setAttribute("r", d * s), t.setAttribute("stroke-width", .5 * d)
                }), null)
            }, a.prototype.animation = function(t, e, s) {
                s = void 0 !== s ? s : null;
                var i = null;
                ! function n() {
                    var r = (new Date).getTime();
                    null === i && (i = r);
                    var a = r - i;
                    e(a), a < t ? setTimeout(n, 15) : null != s && s()
                }()
            }, a.prototype.increaseParameter = function(t, e, s) {
                t.setAttribute(e, parseFloat(t.getAttribute(e)) + s)
            }, a.prototype.setSVGscale = function(t, e, s, i) {
                t.setAttribute("transform", "scale(" + e + ")"), t.setAttribute("cx", s + (1 - e) * s / e), t.setAttribute("cy", i + (1 - e) * i / e)
            }, t.exports = {
                CFirework: a,
                FireworkTimer: function(t, e, s, i, n, r, o, l) {
                    var c = void 0 !== r && r,
                        h = void 0 !== o ? o : 1,
                        u = void 0 !== l ? l : 0;
                    setTimeout((function() {
                        var n = new a(t, e, s, i, h);
                        n.useAudio = c, n.velX = u, n.start()
                    }), n)
                }
            }
        },
        706: t => {
            class e {
                constructor() {
                    this.sfx = {
                        start: document.querySelector("audio#sfx-start"),
                        finish: document.querySelector("audio#sfx-finish"),
                        applause: document.querySelector("audio#sfx-applause"),
                        fwStart: document.querySelector("audio#sfx-fw-start"),
                        fwExplosion: document.querySelector("audio#sfx-fw-explosion"),
                        step: document.querySelector("audio#sfx-step"),
                        penClick: document.querySelector("audio#sfx-pen-click")
                    }
                }
                get Sounds() {
                    return {
                        fwExplosion: "fwExplosion"
                    }
                }
                playStart(t = 0, s = .1) {
                    let i = this.sfx.start;
                    i.volume = s, setTimeout((function() {
                        e.play(i)
                    }), t)
                }
                playPenClick(t = 0, s = .4) {
                    let i = this.sfx.penClick;
                    i.volume = s, setTimeout((function() {
                        e.play(i)
                    }), t)
                }
                playFinish(t = 0, s = .1) {
                    let i = this.sfx.finish;
                    i.volume = s, setTimeout((function() {
                        e.play(i)
                    }), t)
                }
                playStep(t = 0, s = .15) {
                    let i = this.sfx.step;
                    i.volume = s, setTimeout((function() {
                        e.play(i)
                    }), t)
                }
                playApplause(t = 0, s = .15) {
                    let i = this.sfx.applause;
                    i.volume = s, setTimeout((function() {
                        e.play(i)
                    }), t)
                }
                playFireworkStart(t = 0, s = .05) {
                    let i = this.sfx.fwStart;
                    i.volume = s, setTimeout((function() {
                        e.play(i)
                    }), t)
                }
                playWin() {
                    this.playApplause(), this.playFireworkStart(100)
                }
                getSrc(t) {
                    return this.sfx[t].getAttribute("src")
                }
                static play(t) {
                    t && (t.currentTime = 0, t.play())
                }
            }
            t.exports = e
        },
        174: (t, e, s) => {
            const i = s(278);
            t.exports = class {
                constructor(t) {
                    this.selector = t || "__balance", this.collection = document.getElementsByClassName(this.selector)
                }
                set balance(t) {
                    if (null !== t) {
                        this._balance = parseFloat(t).toFixed(2);
                        for (let t = 0, e = this.collection.length; t < e; t++) this.collection[t].dataset[this.selector] && (this.collection[t].innerText = i.roundFormat(this.balance));
                        document.querySelectorAll("[data-" + this.selector + "]").forEach((t => {
                            t.dataset[this.selector] = this.balance
                        }))
                    }
                }
                get balance() {
                    return this._balance
                }
            }
        },
        55: (t, e, s) => {
            const i = s(193);
            s(788), t.exports = {
                showErrort: function(t) {
                    let e = "Мы уже работаем над её устранением!",
                        s = "Ошибка";
                    var n;
                    t && t.response ? t.response.request instanceof window.XMLHttpRequest && (t.response.data && t.response.data.message ? e = t.response.data.message : t.response.status && [401].includes(t.response.status) ? e = "Сперва необходимо авторизоваться" : t.response.status && [403].includes(t.response.status) ? e = "Данное действие запрещено" : s = "Внутренняя ошибка") : "string" == typeof t ? e = t : "object" == typeof t && t.data && t.data.message && (e = t.data.message), i.growl.error({
                        duration: 4e3,
                        title: s,
                        message: (n = e, n.replace(/\$([0-9.,]+)\$/g, "<span class='__currency'>$1</span>"))
                    })
                },
                showNotice: function(t) {
                    var e;
                    i.growl.notice({
                        duration: 4e3,
                        title: "Готово!",
                        message: (e = t, e.replace(/\$([0-9.,]+)\$/g, "<span class='__currency'>$1</span>"))
                    })
                }
            }
        },
        696: t => {
            const e = {
                    token: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
                    param: document.querySelector('meta[name="csrf-param"]').content
                },
                s = {
                    url: document.querySelector('meta[name="cdn-url"]').content
                };
            let i = document.querySelector('meta[name="balance-rub"]');
            const n = {
                rub: i ? i.getAttribute("content") : null
            };
            t.exports = {
                csrf: e,
                cdn: s,
                balance: n,
                drop: {
                    source: {
                        CASE: 1,
                        1: "CASE",
                        UPGRADE: 2,
                        2: "UPGRADE",
                        CONTRACT: 3,
                        3: "CONTRACT",
                        GIVEAWAY: 4,
                        4: "GIVEAWAY",
                        COINFLIP: 5,
                        5: "COINFLIP"
                    }
                }
            }
        },
        225: t => {
            t.exports = {
                animateCSS: function(t, e, s) {
                    t.classList.add("animated", e), t.addEventListener("animationend", (function i() {
                        t.classList.remove("animated", e), t.removeEventListener("animationend", i), "function" == typeof s && s()
                    }))
                },
                addClass: function(t, e) {
                    t.classList ? t.classList.add(e) : t.className += " " + e
                },
                removeClass: function(t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
                },
                hasClass: function(t, e) {
                    return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
                },
                toggleClass: function(t, e) {
                    if (t.classList) t.classList.toggle(e);
                    else {
                        let s = t.className.split(" "),
                            i = s.indexOf(e);
                        i >= 0 ? s.splice(i, 1) : s.push(e), t.className = s.join(" ")
                    }
                },
                forEach: function(t, e, s) {
                    for (let i = 0; i < t.length; i++) e.call(s, i, t[i])
                }
            }
        },
        810: t => {
            t.exports = class {
                constructor() {
                    this.events = {}
                }
                _getEventListByName(t) {
                    return void 0 === this.events[t] && (this.events[t] = new Set), this.events[t]
                }
                on(t, e) {
                    this._getEventListByName(t).add(e)
                }
                once(t, e) {
                    const s = this,
                        i = function(...n) {
                            s.removeListener(t, i), e.apply(s, n)
                        };
                    this.on(t, i)
                }
                emit(t, ...e) {
                    this._getEventListByName(t).forEach(function(t) {
                        t.apply(this, e)
                    }.bind(this))
                }
                removeListener(t, e) {
                    this._getEventListByName(t).delete(e)
                }
            }
        },
        61: (t, e, s) => {
            const i = s(696),
                n = s(218);
            t.exports = {
                getRandomInt: function(t, e) {
                    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
                },
                generateId: function(t) {
                    let e = "";
                    for (let s = 0; s < t; s++) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
                    return e
                },
                declOfNum: function(t, e) {
                    return e[t % 100 > 4 && t % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][t % 10 < 5 ? t % 10 : 5]]
                },
                doRequest: function(t, e = {}, s = "GET") {
                    let r = {
                        url: t,
                        method: s,
                        responseType: "json",
                        headers: {
                            "X-CSRF-Token": i.csrf.token,
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        data: e
                    };
                    return r["GET" === s ? "params" : "data"] = e, n(r)
                },
                serialize: function(t) {
                    let e = [];
                    for (let s = 0; s < t.elements.length; s++) {
                        let i = t.elements[s];
                        if (i.name && !i.disabled && "file" !== i.type && "reset" !== i.type && "submit" !== i.type && "button" !== i.type)
                            if ("select-multiple" === i.type)
                                for (let t = 0; t < i.options.length; t++) i.options[t].selected && e.push(encodeURIComponent(i.name) + "=" + encodeURIComponent(i.options[t].value));
                            else("checkbox" !== i.type && "radio" !== i.type || i.checked) && e.push(encodeURIComponent(i.name) + "=" + encodeURIComponent(i.value))
                    }
                    return e.join("&")
                },
                getCookie: function(t) {
                    let e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                    return e ? decodeURIComponent(e[1]) : void 0
                },
                setCookie: function(t, e, s) {
                    var i = (s = s || {}).expires;
                    if ("number" == typeof i && i) {
                        var n = new Date;
                        n.setTime(n.getTime() + 1e3 * i), i = s.expires = n
                    }
                    i && i.toUTCString && (s.expires = i.toUTCString());
                    var r = t + "=" + (e = encodeURIComponent(e));
                    for (var a in s) {
                        r += "; " + a;
                        var o = s[a];
                        !0 !== o && (r += "=" + o)
                    }
                    document.cookie = r
                }
            }
        },
        278: t => {
            function e(t, e = " ") {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e)
            }
            t.exports = {
                priceFormat: function(t) {
                    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                },
                format: e,
                roundFormat: function(t, s = 2, i = " ") {
                    return e(Number(t), i)
                }
            }
        },
        626: (t, e, s) => {
            const i = s(193);
            s(651), t.exports = class {
                constructor() {
                    this.parent = document.querySelector("#summary"), i.fn.animateRotate = function(t, e, s, n) {
                            let r = i.speed(e, s, n),
                                a = r.step;
                            return this.each((function(e, s) {
                                r.complete = i.proxy(r.complete, s), r.step = function(t) {
                                    if (i.style(s, "transform", "rotate(" + t + "deg)"), a) return a.apply(s, arguments)
                                }, i({
                                    deg: 0
                                }).animate({
                                    deg: t
                                }, r)
                            }))
                        },
                        function(t) {
                            t.extend({
                                bez: function(e, s) {
                                    if (t.isArray(e) && (e = "bez_" + (s = e).join("_").replace(/\./g, "p")), "function" != typeof t.easing[e]) {
                                        var i = function(t, e) {
                                            var s = [null, null],
                                                i = [null, null],
                                                n = [null, null],
                                                r = function(r, a) {
                                                    return n[a] = 3 * t[a], i[a] = 3 * (e[a] - t[a]) - n[a], s[a] = 1 - n[a] - i[a], r * (n[a] + r * (i[a] + r * s[a]))
                                                },
                                                a = function(t) {
                                                    return n[0] + t * (2 * i[0] + 3 * s[0] * t)
                                                };
                                            return function(t) {
                                                return r(function(t) {
                                                    for (var e, s = t, i = 0; ++i < 14 && (e = r(s, 0) - t, !(Math.abs(e) < .001));) s -= e / a(s);
                                                    return s
                                                }(t), 1)
                                            }
                                        };
                                        t.easing[e] = function(t, e, n, r, a) {
                                            return r * i([s[0], s[1]], [s[2], s[3]])(e / a) + n
                                        }
                                    }
                                    return e
                                }
                            })
                        }(s(193))
                }
                setText(t, e) {
                    this.parent.querySelector("h1").innerText = t, this.parent.querySelector("h2").innerText = e
                }
            }
        },
        80: t => {
            t.exports = class {
                constructor() {
                    this.parent = document.querySelector("#balance-range")
                }
                getValue() {
                    return parseFloat(this.parent.noUiSlider.get())
                }
                setValue(t) {
                    this.parent.noUiSlider.set([t, null])
                }
                disable() {
                    this.parent.setAttribute("disabled", !0)
                }
                enable() {
                    this.parent.removeAttribute("disabled")
                }
            }
        },
        765: (t, e, s) => {
            const i = s(974);
            t.exports = class {
                constructor() {
                    this.el = document.querySelector("#userSlot"), this.id = null, this.price = null, this.odometer = null, this.images = {
                        cashback: "/img/cashback-placeholder.png",
                        placeholder: "/img/weapon-placeholder.png"
                    }
                }
                fill({
                    id: t,
                    image: e,
                    text: s,
                    price: n
                }) {
                    this.id = t, this.price = n;
                    let r = this.el.querySelector(".weapon-name > .price");
                    r.innerHTML = "<span>" + n + "</span> ₽", this.el.querySelector(".weapon-img > img").src = this.images.hasOwnProperty(e) ? this.images[e] : e, this.el.querySelector(".weapon-name > .name").innerHTML = s, this.el.querySelector(".choose-weapon").style.display = "block", this.el.querySelector(".no-weapon").style.display = "none", "cashback" === e && (new i({
                        el: r.querySelector("span"),
                        value: n,
                        format: "( ddd).dd",
                        theme: "default"
                    }), setTimeout(function() {
                        this.el.querySelector(".weapon-name > .price > span").innerText = 0
                    }.bind(this), 3e3))
                }
                reset() {
                    this.id = null, this.price = null, this.el.querySelector(".choose-weapon").style.display = "none", this.el.querySelector(".no-weapon").style.display = "block", this.el.querySelector(".weapon-name > .price > span").innerText = null
                }
            }
        },
        192: (t, e, s) => {
            const i = s(193),
                n = s(696),
                r = s(218),
                a = s(55),
                o = s(225),
                l = (s(61), s(365)),
                c = s(527),
                h = s(582),
                u = s(974),
                d = "#cb-items",
                p = "#my-items",
                m = ".price-text",
                f = .75,
                g = 103;
            let y, v, b, S, E, C, w, x, T;

            function A(t) {
                let e = document.getElementById("do-upgrade");
                "disable" !== t && (t = k()) ? o.removeClass(e, "disabled") : o.addClass(e, "disabled")
            }

            function k() {
                let t = parseFloat(b.user.slot.querySelector(".weapon-name > .price > span").innerText),
                    e = parseFloat(b.cb.slot.querySelector(".weapon-name > .price > span").innerText);
                if (t > 0 && e > 0) {
                    let s = parseFloat(b.slider.noUiSlider.get()),
                        i = (t + s) * g / e;
                    return i = i > 100 * f ? 100 * f : i, i = Math.round(100 * i) / 100, {
                        chance: i,
                        slider: {
                            maxRange: e * (100 * f) / g - t,
                            value: s
                        },
                        user: {
                            slot: t
                        },
                        cb: {
                            slot: e
                        }
                    }
                }
                return !1
            }

            function q() {
                let t = k();
                return t && (b.summary.querySelector("h1").innerText = t.chance + "%", b.summary.querySelector("h2").innerText = y.lookUpAssoc(t.chance), b.summary.querySelector("#s-mask > rect").setAttribute("height", t.chance + "%"), b.summary.querySelector(".arrow").style.display = "block"), t
            }

            function L(t) {
                if (t) {
                    if (A(), t.slider.maxRange <= 0) return b.slider.setAttribute("disabled", !0), void(b.user.usedBalance.innerText = "0.00");
                    b.slider.noUiSlider.updateOptions({
                        range: {
                            min: 0,
                            max: t.slider.maxRange
                        }
                    }), b.slider.removeAttribute("disabled")
                }
            }
            let F = function() {
                let t = function(t) {
                        return {
                            id: t.dataset.id,
                            price: parseFloat(t.querySelector(".price > span").innerText),
                            rarity: t.dataset.rarity,
                            name: t.querySelector(".title").innerHTML,
                            imgUrl: t.querySelector("img").getAttribute("src")
                        }
                    },
                    e = function() {
                        L(q())
                    };
                return {
                    user: function(s) {
                        let i = t(s);
                        x.fill({
                            id: i.id,
                            image: i.imgUrl,
                            text: i.name,
                            price: i.price
                        }), e()
                    },
                    cb: function(s) {
                        var i, n;
                        i = b.cb.slot, n = t(s), i.dataset.id = n.id, i.dataset.price = n.price, i.querySelector(".no-weapon").style.display = "none", i.querySelector(".choose-weapon").style.display = "block", i.querySelector(".weapon-img > img").src = n.imgUrl, i.querySelector(".choose-weapon").className = "choose-weapon " + n.rarity, i.querySelector(".weapon-name > .name").innerHTML = n.name, i.querySelector(".weapon-name > .price > span").innerText = n.price, e()
                    }
                }
            }();

            function I(t = 1) {
                let e = b.cb.items.querySelector(".loading"),
                    s = b.cb.items.querySelector(m),
                    i = b.cb.items.querySelector("form"),
                    n = function() {
                        return parseInt(i.querySelector(".weapon-type").dataset.rarity) || null
                    },
                    r = function() {
                        return i.querySelector('input[name="query"]').value
                    },
                    o = function() {
                        return parseInt(i.querySelector('input[name="price-min"]').value) || null
                    },
                    l = function() {
                        return parseInt(i.querySelector('input[name="price-max"]').value) || null
                    };
                M(e), O(i.getAttribute("action"), {
                    sort: s.dataset.sort || null,
                    rarity: r() ? null : n(),
                    priceMin: r() ? null : o(),
                    priceMax: r() ? null : l(),
                    query: r() || null,
                    page: t
                }).then((function(t) {
                    "ok" === t.data.result ? b.cb.items.querySelector("#cb-skins").innerHTML = t.data.content : a.showError(t.data.error)
                })).catch((function(t) {
                    a.showError(t)
                })).then((function() {
                    N(e)
                }))
            }

            function R(t = 1) {
                let e = b.user.items.querySelector(m),
                    s = b.user.items.querySelector(".loading");
                M(s), O(b.user.items.dataset.endpoint, {
                    sort: e.dataset.sort || null,
                    page: t
                }).then((function(t) {
                    "ok" === t.data.result ? b.user.items.querySelector("#user-items").innerHTML = t.data.content : a.showError()
                })).catch((function(t) {
                    a.showError(t)
                })).then((function() {
                    N(s)
                }))
            }

            function M(t) {
                t.style.display = "flex"
            }

            function N(t) {
                t.style.display = "none"
            }

            function O(t, e = {}, s = "GET") {
                let i = {
                    url: t,
                    method: s,
                    responseType: "json",
                    headers: {
                        "X-CSRF-Token": n.csrf.token
                    },
                    data: e
                };
                return i["GET" === s ? "params" : "data"] = e, r(i)
            }
            t.exports.init = function() {
                const t = s(626);
                S = new t;
                const e = s(80);
                E = new e;
                const r = s(765);
                x = new r;
                const f = s(885);
                C = new f(n.balance.rub);
                const g = s(706);
                w = new g, new u({
                    el: document.querySelector(".left-balance .balance-amount"),
                    value: n.balance.rub,
                    format: "( ddd).dd",
                    theme: "default"
                }), b = {
                    cb: {
                        items: document.querySelector(d),
                        slot: document.querySelector("#cbSlot")
                    },
                    user: {
                        items: document.querySelector(p),
                        slot: document.querySelector("#userSlot"),
                        usedBalance: document.getElementById("use-balance-amount"),
                        outOf: document.getElementById("out-of-block")
                    },
                    summary: document.querySelector("#summary"),
                    slider: document.querySelector("#balance-range")
                }, y = new c({
                    10: "крайне низкий шанс",
                    30: "низкий шанс",
                    50: "средний шанс",
                    65: "высокий шанс",
                    75: "очень высокий шанс"
                }), document.getElementById("do-upgrade").addEventListener("click", (function(t) {
                    if (t.preventDefault(), o.hasClass(t.target, "disabled") || T) return !1;
                    let e = new FormData;
                    e.append("from", x.id), e.append("to", b.cb.slot.dataset.id), e.append("toPrice", b.cb.slot.dataset.price), e.append("balance", E.getValue().toString()), w.playStart(), A("disable"), b.slider.setAttribute("disabled", !0), T = !0, O(t.target.dataset.endpoint, e, "POST").then((function(t) {
                        if (!0 === t.data.success) {
                            let e = i(b.summary.querySelector(".arrow")),
                                s = 0,
                                r = 0;
                            const a = {
                                v1: {
                                    laps: 5,
                                    duration: 8,
                                    fn: [.18, .1, .11, 1]
                                },
                                v2: {
                                    laps: 6,
                                    duration: 13,
                                    fn: [.41, 0, 0, 1]
                                }
                            };
                            e.animateRotate(360 * a[__av].laps + t.data.angle, {
                                duration: 1e3 * a[__av].duration,
                                easing: i.bez(a[__av].fn),
                                complete: function() {
                                    if (R(), b.user.slot.dataset.id = null, b.user.slot.querySelector(".choose-weapon").style.display = "none", b.user.slot.querySelector(".no-weapon").style.display = "block", b.user.slot.querySelector(".weapon-name > .price > span").innerText = null, E.setValue(0), t.data.asset) {
                                        C.set(t.data.balance), S.setText("ПОБЕДА!", "поздравляем");
                                        let e = new h.CFirework("cbSlot", "00FFFF", 100, 270);
                                        e.useAudio = !0, e.audioURL = n.cdn.url + "/media/sfx-fw-explosion.mp3", e.start(), h.FireworkTimer("cbSlot", "FF0000", 365, 295, 1e3, !0), h.FireworkTimer("cbSlot", "FFFF00", 265, 200, 1100, !0), w.playWin()
                                    } else S.setText("УВЫ...", "попробуйте еще раз"), x.fill({
                                        image: "cashback",
                                        text: "ВАШ КЭШБЭК",
                                        price: parseFloat(Math.round(100 * t.data.cashback) / 100).toFixed(2)
                                    }), setTimeout((function() {
                                        C.set(t.data.balance)
                                    }), 3e3), setTimeout((function() {
                                        x.reset()
                                    }), 5300)
                                },
                                step: function(t) {
                                    s = Math.abs(Math.floor(t / 60)), s !== r && w.playStep(), r = s
                                }
                            })
                        } else a.showError(t.data.error), L(k())
                    })).catch((function(t) {
                        a.showError(t), A()
                    })).then((() => {
                        T = !1
                    }))
                })), i(d + ", " + p).on("click", ".pagination a", (function(t) {
                    t.preventDefault(), clearTimeout(v), 0 !== i(this).closest(p).length ? R(parseInt(this.dataset.page) + 1) : 0 !== i(this).closest(d).length && I(parseInt(this.dataset.page) + 1)
                })), i(d + ", " + p).on("click", ".weapon-block", (function(t) {
                    if (t.preventDefault(), T) return !1;
                    let e = i(t.target).closest(".weapon-block");
                    if (o.hasClass(e[0], "disabled")) return !1;
                    let s = i(t.target).closest(".weapon-wrap")[0].querySelectorAll(".weapon-block");
                    i(s).removeClass("disabled"), o.addClass(e[0], "disabled"), 0 !== i(this).closest(p).length ? F.user(e[0]) : 0 !== i(this).closest(d).length && F.cb(e[0])
                }));
                let M = document.querySelectorAll(m);
                o.forEach(M, (function(t, e) {
                    e.addEventListener("click", (function(t) {
                        t.preventDefault(), o.toggleClass(t.target, "reverse"), o.addClass(t.target, "active"), t.target.dataset.sort && "price" !== t.target.dataset.sort ? t.target.dataset.sort = "price" : t.target.dataset.sort = "-price", 0 !== i(t.target).closest(p).length ? R() : 0 !== i(t.target).closest(d).length && I()
                    }))
                }));
                let N = b.cb.items.querySelectorAll("form input");
                o.forEach(N, (function(t, e) {
                    e.addEventListener("change", (function(t) {
                        v = setTimeout((function() {
                            I()
                        }), 100)
                    })), e.addEventListener("focus", (function() {
                        clearTimeout(v)
                    }))
                })), b.cb.items.querySelector("form").addEventListener("submit", (function(t) {
                    t.preventDefault(), I()
                }));
                let _ = b.cb.items.querySelectorAll(".filter-toggle");
                o.forEach(_, (function(t, e) {
                        e.addEventListener("click", (function() {
                            i(b.cb.items.querySelector(".change-block")).toggle(), i(b.cb.items.querySelector(".search-block-wrapper")).toggle(), b.cb.items.querySelector(".search-block input").value = ""
                        }))
                    })),
                    function() {
                        let t = document.querySelector(".weapon-type");
                        t.addEventListener("click", (function(e) {
                            clearTimeout(v);
                            let s = e.target;
                            if (e.target && ("SPAN" === e.target.tagName || "LI" === e.target.tagName) && (s = i(e.target).closest(".weapon-type"), s = s[0], "LI" === e.target.tagName)) {
                                let t = parseInt(e.target.dataset.rarity);
                                i(e.target).siblings().removeClass("active"), o.addClass(e.target, "active");
                                let n = parseInt(s.getAttribute("data-rarity"));
                                s.querySelector("span").innerText = e.target.innerText, s.dataset.rarity = t, t !== n && I()
                            }
                            if (s !== t) return !1;
                            o.toggleClass(s, "active"), o.toggleClass(t.querySelector(".weapon-select"), "open")
                        })), document.addEventListener("click", (function(t) {
                            0 === i(t.target).closest(".weapon-type").length && i(".weapon-select").removeClass("open")
                        }))
                    }(),
                    function() {
                        let t = parseFloat(b.slider.dataset.balance);
                        l.create(b.slider, {
                            start: [0],
                            range: {
                                min: 0,
                                max: 0 === t ? .01 : t
                            }
                        }), b.slider.setAttribute("disabled", !0), b.slider.noUiSlider.on("update", (function(e, s) {
                            b.user.usedBalance.innerText = e[s], parseFloat(e[s]) > 0 && e[s] > parseFloat(b.slider.dataset.balance) ? (b.user.outOf.style.display = "block", b.user.outOf.querySelector("span > strong").innerText = Math.ceil(parseFloat(e[s]) - t), A("disable")) : (b.user.outOf.style.display = "none", A()), q()
                        }))
                    }()
            }
        }
    },
    t => (t.O(0, [216], (() => (10, t(t.s = 10)))), t.O())
])));
//# sourceMappingURL=main.js.map
/*press-1.0*/
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement)cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)for (h in a.converters)typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*")k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)for (i in e)if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0]in d)j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b))f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        }); else if (!c && f.type(b) === "object")for (var e in b)b_(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++)l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border")for (; e < g; e += 2)c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null)d = a.style[b];
        if (bt.test(d))return d;
        d = parseFloat(d) || 0;
        if (c)for (; e < g; e += 2)d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio")a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)for (d = 0, e = i[c].length; d < e; d++)f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b))return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return!a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return!0
    }

    function J() {
        return!1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b]))continue;
            if (b !== "toJSON")return!1
        }
        return!0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++)b[a[c]] = !0;
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
            return(b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        e.fn = e.prototype = {constructor: e, init: function (a, d, f) {
            var g, h, j, k;
            if (!a)return this;
            if (a.nodeType) {
                this.context = this[0] = a, this.length = 1;
                return this
            }
            if (a === "body" && !d && c.body) {
                this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                return this
            }
            if (typeof a == "string") {
                a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                if (g && (g[1] || !d)) {
                    if (g[1]) {
                        d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                        return e.merge(this, a)
                    }
                    h = c.getElementById(g[2]);
                    if (h && h.parentNode) {
                        if (h.id !== g[2])return f.find(a);
                        this.length = 1, this[0] = h
                    }
                    this.context = c, this.selector = a;
                    return this
                }
                return!d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
            }
            if (e.isFunction(a))return f.ready(a);
            a.selector !== b && (this.selector = a.selector, this.context = a.context);
            return e.makeArray(a, this)
        }, selector: "", jquery: "1.7.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return F.call(this, 0)
        }, get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = this.constructor();
            e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
            return d
        }, each: function (a, b) {
            return e.each(this, a, b)
        }, ready: function (a) {
            e.bindReady(), A.add(a);
            return this
        }, eq: function (a) {
            a = +a;
            return a === -1 ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(e.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: E, sort: [].sort, splice: [].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++)if ((a = arguments[j]) != null)for (c in a) {
                d = i[c], f = a[c];
                if (i === f)continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({noConflict: function (b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
            return e
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0)
        }, ready: function (a) {
            if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                if (!c.body)return setTimeout(e.ready, 1);
                e.isReady = !0;
                if (a !== !0 && --e.readyWait > 0)return;
                A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
            }
        }, bindReady: function () {
            if (!A) {
                A = e.Callbacks("once memory");
                if (c.readyState === "complete")return setTimeout(e.ready, 1);
                if (c.addEventListener)c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                    c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                    var b = !1;
                    try {
                        b = a.frameElement == null
                    } catch (d) {
                    }
                    c.documentElement.doScroll && b && J()
                }
            }
        }, isFunction: function (a) {
            return e.type(a) === "function"
        }, isArray: Array.isArray || function (a) {
            return e.type(a) === "array"
        }, isWindow: function (a) {
            return a != null && a == a.window
        }, isNumeric: function (a) {
            return!isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return a == null ? String(a) : I[C.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))return!1;
            try {
                if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))return!1
            } catch (c) {
                return!1
            }
            var d;
            for (d in a);
            return d === b || D.call(a, d)
        }, isEmptyObject: function (a) {
            for (var b in a)return!1;
            return!0
        }, error: function (a) {
            throw new Error(a)
        }, parseJSON: function (b) {
            if (typeof b != "string" || !b)return null;
            b = e.trim(b);
            if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
            if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))return(new Function("return " + b))();
            e.error("Invalid JSON: " + b)
        }, parseXML: function (c) {
            if (typeof c != "string" || !c)return null;
            var d, f;
            try {
                a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (g) {
                d = b
            }
            (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
            return d
        }, noop: function () {
        }, globalEval: function (b) {
            b && j.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(w, "ms-").replace(v, x)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        }, each: function (a, c, d) {
            var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
            if (d) {
                if (i) {
                    for (f in a)if (c.apply(a[f], d) === !1)break
                } else for (; g < h;)if (c.apply(a[g++], d) === !1)break
            } else if (i) {
                for (f in a)if (c.call(a[f], f, a[f]) === !1)break
            } else for (; g < h;)if (c.call(a[g], g, a[g++]) === !1)break;
            return a
        }, trim: G ? function (a) {
            return a == null ? "" : G.call(a)
        } : function (a) {
            return a == null ? "" : (a + "").replace(k, "").replace(l, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
                var d = e.type(a);
                a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
            }
            return c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (H)return H.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)if (c in b && b[c] === a)return c
            }
            return-1
        }, merge: function (a, c) {
            var d = a.length, e = 0;
            if (typeof c.length == "number")for (var f = c.length; e < f; e++)a[d++] = c[e]; else while (c[e] !== b)a[d++] = c[e++];
            a.length = d;
            return a
        }, grep: function (a, b, c) {
            var d = [], e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++)e = !!b(a[f], f), c !== e && d.push(a[f]);
            return d
        }, map: function (a, c, d) {
            var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
            if (k)for (; i < j; i++)f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a)f = c(a[g], g, d), f != null && (h[h.length] = f);
            return h.concat.apply([], h)
        }, guid: 1, proxy: function (a, c) {
            if (typeof c == "string") {
                var d = a[c];
                c = a, a = d
            }
            if (!e.isFunction(a))return b;
            var f = F.call(arguments, 2), g = function () {
                return a.apply(c, f.concat(F.call(arguments)))
            };
            g.guid = a.guid = a.guid || g.guid || e.guid++;
            return g
        }, access: function (a, c, d, f, g, h, i) {
            var j, k = d == null, l = 0, m = a.length;
            if (d && typeof d == "object") {
                for (l in d)e.access(a, c, l, d[l], 1, h, f);
                g = 1
            } else if (f !== b) {
                j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                    return j.call(e(a), c)
                }) : (c.call(a, f), c = null));
                if (c)for (; l < m; l++)c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                g = 1
            }
            return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
        }, now: function () {
            return(new Date).getTime()
        }, uaMatch: function (a) {
            a = a.toLowerCase();
            var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
            return{browser: b[1] || "", version: b[2] || "0"}
        }, sub: function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f));
                return e.fn.init.call(this, d, f, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(c);
            return a
        }, browser: {}}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++)g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        }, o = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++)if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {add: function () {
            if (c) {
                var a = c.length;
                n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
            }
            return this
        }, remove: function () {
            if (c) {
                var b = arguments, d = 0, e = b.length;
                for (; d < e; d++)for (var f = 0; f < c.length; f++)if (b[d] === c[f]) {
                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                    if (a.unique)break
                }
            }
            return this
        }, has: function (a) {
            if (c) {
                var b = 0, d = c.length;
                for (; b < d; b++)if (a === c[b])return!0
            }
            return!1
        }, empty: function () {
            c = [];
            return this
        }, disable: function () {
            c = d = e = b;
            return this
        }, disabled: function () {
            return!c
        }, lock: function () {
            d = b, (!e || e === !0) && p.disable();
            return this
        }, locked: function () {
            return!d
        }, fireWith: function (b, c) {
            d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
            return this
        }, fire: function () {
            p.fireWith(this, arguments);
            return this
        }, fired: function () {
            return!!i
        }};
        return p
    };
    var i = [].slice;
    f.extend({Deferred: function (a) {
        var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {resolve: b, reject: c, notify: d}, h = {done: b.add, fail: c.add, progress: d.add, state: function () {
            return e
        }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
            i.done(a).fail(b).progress(c);
            return this
        }, always: function () {
            i.done.apply(i, arguments).fail.apply(i, arguments);
            return this
        }, pipe: function (a, b, c) {
            return f.Deferred(function (d) {
                f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                    var c = b[0], e = b[1], g;
                    f.isFunction(c) ? i[a](function () {
                        g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                    }) : i[a](d[e])
                })
            }).promise()
        }, promise: function (a) {
            if (a == null)a = h; else for (var b in h)a[b] = h[b];
            return a
        }}, i = h.promise({}), j;
        for (j in g)i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
        i.done(function () {
            e = "resolved"
        }, c.disable, d.lock).fail(function () {
            e = "rejected"
        }, b.disable, d.lock), a && a.call(i, i);
        return i
    }, when: function (a) {
        function m(a) {
            return function (b) {
                e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
            }
        }

        function l(a) {
            return function (c) {
                b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
            }
        }

        var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
        if (d > 1) {
            for (; c < d; c++)b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
            g || j.resolveWith(j, b)
        } else j !== a && j.resolveWith(j, d ? [a] : []);
        return k
    }}), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e)return{};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(e.getAttribute("style")), hrefNormalized: e.getAttribute("href") === "/a", opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, checkOn: i.value === "on", optSelected: h.selected, getSetAttribute: p.className !== "t", enctype: !!c.createElement("form").enctype, html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0}, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)for (n in{submit: 1, change: 1, focusin: 1})m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {doesNotAddBorder: g.offsetTop !== 5, doesAddBorderForTableAndCells: i.offsetTop === 5}, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({cache: {}, uuid: 0, expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (a) {
        a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
        return!!a && !m(a)
    }, data: function (a, c, d, e) {
        if (!!f.acceptData(a)) {
            var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
            if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)return;
            n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
            if (typeof c == "object" || typeof c == "function")e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
            g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
            if (o && !h[c])return g.events;
            k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
            return i
        }
    }, removeData: function (a, b, c) {
        if (!!f.acceptData(a)) {
            var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
            if (!j[k])return;
            if (b) {
                d = c ? j[k] : j[k].data;
                if (d) {
                    f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, g = b.length; e < g; e++)delete d[b[e]];
                    if (!(c ? m : f.isEmptyObject)(d))return
                }
            }
            if (!c) {
                delete j[k].data;
                if (!m(j[k]))return
            }
            f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
        }
    }, _data: function (a, b, c) {
        return f.data(a, b, c, !0)
    }, acceptData: function (a) {
        if (a.nodeName) {
            var b = f.noData[a.nodeName.toLowerCase()];
            if (b)return b !== !0 && a.getAttribute("classid") === b
        }
        return!0
    }}), f.fn.extend({data: function (a, c) {
        var d, e, g, h, i, j = this[0], k = 0, m = null;
        if (a === b) {
            if (this.length) {
                m = f.data(j);
                if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                    g = j.attributes;
                    for (i = g.length; k < i; k++)h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                    f._data(j, "parsedAttrs", !0)
                }
            }
            return m
        }
        if (typeof a == "object")return this.each(function () {
            f.data(this, a)
        });
        d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
        return f.access(this, function (c) {
            if (c === b) {
                m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                return m === b && d[1] ? this.data(d[0]) : m
            }
            d[1] = c, this.each(function () {
                var b = f(this);
                b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
            })
        }, null, c, arguments.length > 1, null, !1)
    }, removeData: function (a) {
        return this.each(function () {
            f.removeData(this, a)
        })
    }}), f.extend({_mark: function (a, b) {
        a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
    }, _unmark: function (a, b, c) {
        a !== !0 && (c = b, b = a, a = !1);
        if (b) {
            c = c || "fx";
            var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
            e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
        }
    }, queue: function (a, b, c) {
        var d;
        if (a) {
            b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
            return d || []
        }
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = f.queue(a, b), d = c.shift(), e = {};
        d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
            f.dequeue(a, b)
        }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
    }}), f.fn.extend({queue: function (a, c) {
        var d = 2;
        typeof a != "string" && (c = a, a = "fx", d--);
        if (arguments.length < d)return f.queue(this[0], a);
        return c === b ? this : this.each(function () {
            var b = f.queue(this, a, c);
            a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            f.dequeue(this, a)
        })
    }, delay: function (a, b) {
        a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
        return this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, c) {
        function m() {
            --h || d.resolveWith(e, [e])
        }

        typeof a != "string" && (c = a, a = b), a = a || "fx";
        var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
        while (g--)if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))h++, l.add(m);
        m();
        return d.promise(c)
    }});
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({attr: function (a, b) {
        return f.access(this, f.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
        return this.each(function () {
            f.removeAttr(this, a)
        })
    }, prop: function (a, b) {
        return f.access(this, f.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
        a = f.propFix[a] || a;
        return this.each(function () {
            try {
                this[a] = b, delete this[a]
            } catch (c) {
            }
        })
    }, addClass: function (a) {
        var b, c, d, e, g, h, i;
        if (f.isFunction(a))return this.each(function (b) {
            f(this).addClass(a.call(this, b, this.className))
        });
        if (a && typeof a == "string") {
            b = a.split(p);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e.nodeType === 1)if (!e.className && b.length === 1)e.className = a; else {
                    g = " " + e.className + " ";
                    for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                    e.className = f.trim(g)
                }
            }
        }
        return this
    }, removeClass: function (a) {
        var c, d, e, g, h, i, j;
        if (f.isFunction(a))return this.each(function (b) {
            f(this).removeClass(a.call(this, b, this.className))
        });
        if (a && typeof a == "string" || a === b) {
            c = (a || "").split(p);
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                if (g.nodeType === 1 && g.className)if (a) {
                    h = (" " + g.className + " ").replace(o, " ");
                    for (i = 0, j = c.length; i < j; i++)h = h.replace(" " + c[i] + " ", " ");
                    g.className = f.trim(h)
                } else g.className = ""
            }
        }
        return this
    }, toggleClass: function (a, b) {
        var c = typeof a, d = typeof b == "boolean";
        if (f.isFunction(a))return this.each(function (c) {
            f(this).toggleClass(a.call(this, c, this.className, b), b)
        });
        return this.each(function () {
            if (c === "string") {
                var e, g = 0, h = f(this), i = b, j = a.split(p);
                while (e = j[g++])i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
            } else if (c === "undefined" || c === "boolean")this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
        })
    }, hasClass: function (a) {
        var b = " " + a + " ", c = 0, d = this.length;
        for (; c < d; c++)if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)return!0;
        return!1
    }, val: function (a) {
        var c, d, e, g = this[0];
        {
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function (d) {
                    var g = f(this), h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                            return a == null ? "" : a + ""
                        })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                        if (!c || !("set"in c) || c.set(this, h, "value") === b)this.value = h
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                if (c && "get"in c && (d = c.get(g, "value")) !== b)return d;
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }
    }}), f.extend({valHooks: {option: {get: function (a) {
        var b = a.attributes.value;
        return!b || b.specified ? a.value : a.text
    }}, select: {get: function (a) {
        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
        if (g < 0)return null;
        c = j ? g : 0, d = j ? g + 1 : i.length;
        for (; c < d; c++) {
            e = i[c];
            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                b = f(e).val();
                if (j)return b;
                h.push(b)
            }
        }
        if (j && !h.length && i.length)return f(i[g]).val();
        return h
    }, set: function (a, b) {
        var c = f.makeArray(b);
        f(a).find("option").each(function () {
            this.selected = f.inArray(f(this).val(), c) >= 0
        }), c.length || (a.selectedIndex = -1);
        return c
    }}}, attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0}, attr: function (a, c, d, e) {
        var g, h, i, j = a.nodeType;
        if (!!a && j !== 3 && j !== 8 && j !== 2) {
            if (e && c in f.attrFn)return f(a)[c](d);
            if (typeof a.getAttribute == "undefined")return f.prop(a, c, d);
            i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return
                }
                if (h && "set"in h && i && (g = h.set(a, d, c)) !== b)return g;
                a.setAttribute(c, "" + d);
                return d
            }
            if (h && "get"in h && i && (g = h.get(a, c)) !== null)return g;
            g = a.getAttribute(c);
            return g === null ? b : g
        }
    }, removeAttr: function (a, b) {
        var c, d, e, g, h, i = 0;
        if (b && a.nodeType === 1) {
            d = b.toLowerCase().split(p), g = d.length;
            for (; i < g; i++)e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
        }
    }, attrHooks: {type: {set: function (a, b) {
        if (r.test(a.nodeName) && a.parentNode)f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
            var c = a.value;
            a.setAttribute("type", b), c && (a.value = c);
            return b
        }
    }}, value: {get: function (a, b) {
        if (w && f.nodeName(a, "button"))return w.get(a, b);
        return b in a ? a.value : null
    }, set: function (a, b, c) {
        if (w && f.nodeName(a, "button"))return w.set(a, b, c);
        a.value = b
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (a, c, d) {
        var e, g, h, i = a.nodeType;
        if (!!a && i !== 3 && i !== 8 && i !== 2) {
            h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
            return d !== b ? g && "set"in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
        }
    }, propHooks: {tabIndex: {get: function (a) {
        var c = a.getAttributeNode("tabindex");
        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
    }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get: function (a, c) {
        var d, e = f.prop(a, c);
        return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
    }, set: function (a, b, c) {
        var d;
        b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
        return c
    }}, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {get: function (a, c) {
        var d;
        d = a.getAttributeNode(c);
        return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
    }, set: function (a, b, d) {
        var e = a.getAttributeNode(d);
        e || (e = c.createAttribute(d), a.setAttributeNode(e));
        return e.nodeValue = b + ""
    }}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {set: function (a, c) {
            if (c === "") {
                a.setAttribute(b, "auto");
                return c
            }
        }})
    }), f.attrHooks.contenteditable = {get: w.get, set: function (a, b, c) {
        b === "" && (b = "false"), w.set(a, b, c)
    }}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d
        }})
    }), f.support.style || (f.attrHooks.style = {get: function (a) {
        return a.style.cssText.toLowerCase() || b
    }, set: function (a, b) {
        return a.style.cssText = "" + b
    }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get: function (a) {
        var b = a.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        return null
    }})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value
        }}
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {set: function (a, b) {
            if (f.isArray(b))return a.checked = f.inArray(f(a).val(), b) >= 0
        }})
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    }, H = function (a, b) {
        var c = a.attributes || {};
        return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }, I = function (a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {add: function (a, c, d, e, g) {
        var h, i, j, k, l, m, n, o, p, q, r, s;
        if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
            d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
            }, i.elem = a), c = f.trim(I(c)).split(" ");
            for (k = 0; k < c.length; k++) {
                l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, quick: g && G(g), namespace: n.join(".")}, p), r = j[m];
                if (!r) {
                    r = j[m] = [], r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i) === !1)a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                }
                s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
            }
            a = null
        }
    }, global: {}, remove: function (a, b, c, d, e) {
        var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
        if (!!g && !!(o = g.events)) {
            b = f.trim(I(b || "")).split(" ");
            for (h = 0; h < b.length; h++) {
                i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                if (!j) {
                    for (j in o)f.event.remove(a, j + b[h], c, d, !0);
                    continue
                }
                p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (n = 0; n < r.length; n++)s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
            }
            f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
        }
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (c, d, e, g) {
        if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
            var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
            if (E.test(h + f.event.triggered))return;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if ((!e || f.event.customEvent[h]) && !f.event.global[h])return;
            c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
            if (!e) {
                j = f.cache;
                for (l in j)j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                return
            }
            c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
            if (p.trigger && p.trigger.apply(e, d) === !1)return;
            r = [
                [e, p.bindType || h]
            ];
            if (!g && !p.noBubble && !f.isWindow(e)) {
                s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                for (; m; m = m.parentNode)r.push([m, s]), n = m;
                n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
            }
            for (l = 0; l < r.length && !c.isPropagationStopped(); l++)m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
            c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
            return c.result
        }
    }, dispatch: function (c) {
        c = f.event.fix(c || a.event);
        var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
        g[0] = c, c.delegateTarget = this;
        if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
            if (e && (!c.button || c.type !== "click")) {
                n = f(this), n.context = this.ownerDocument || this;
                for (m = c.target; m != this; m = m.parentNode || this)if (m.disabled !== !0) {
                    p = {}, r = [], n[0] = m;
                    for (k = 0; k < e; k++)s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                    r.length && j.push({elem: m, matches: r})
                }
            }
            d.length > e && j.push({elem: this, matches: d.slice(e)});
            for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                q = j[k], c.currentTarget = q.elem;
                for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                    s = q.matches[l];
                    if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            i.postDispatch && i.postDispatch.call(this, c);
            return c.result
        }
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, d) {
        var e, f, g, h = d.button, i = d.fromElement;
        a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a
    }}, fix: function (a) {
        if (a[f.expando])return a;
        var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
        a = f.Event(g);
        for (d = i.length; d;)e = i[--d], a[e] = g[e];
        a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
        return h.filter ? h.filter(a, g) : a
    }, special: {ready: {setup: f.bindReady}, load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (a, b, c) {
        f.isWindow(this) && (this.onbeforeunload = c)
    }, teardown: function (a, b) {
        this.onbeforeunload === b && (this.onbeforeunload = null)
    }}}, simulate: function (a, b, c, d) {
        var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event))return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = K;
        var a = this.originalEvent;
        !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    }, stopPropagation: function () {
        this.isPropagationStopped = K;
        var a = this.originalEvent;
        !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = K, this.stopPropagation()
    }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J}, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
            if (!d || d !== c && !f.contains(c, d))a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
            return h
        }}
    }), f.support.submitBubbles || (f.event.special.submit = {setup: function () {
        if (f.nodeName(this, "form"))return!1;
        f.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
            d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0
            }), d._submit_attached = !0)
        })
    }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        if (f.nodeName(this, "form"))return!1;
        f.event.remove(this, "._submit")
    }}), f.support.changeBubbles || (f.event.special.change = {setup: function () {
        if (z.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")f.event.add(this, "propertychange._change", function (a) {
                a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), f.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
            });
            return!1
        }
        f.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
            }), b._change_attached = !0)
        })
    }, handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")return a.handleObj.handler.apply(this, arguments)
    }, teardown: function () {
        f.event.remove(this, "._change");
        return z.test(this.nodeName)
    }}), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {setup: function () {
            d++ === 0 && c.addEventListener(a, e, !0)
        }, teardown: function () {
            --d === 0 && c.removeEventListener(a, e, !0)
        }}
    }), f.fn.extend({on: function (a, c, d, e, g) {
        var h, i;
        if (typeof a == "object") {
            typeof c != "string" && (d = d || c, c = b);
            for (i in a)this.on(i, c, d, a[i], g);
            return this
        }
        d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
        if (e === !1)e = J; else if (!e)return this;
        g === 1 && (h = e, e = function (a) {
            f().off(a);
            return h.apply(this, arguments)
        }, e.guid = h.guid || (h.guid = f.guid++));
        return this.each(function () {
            f.event.add(this, a, e, d, c)
        })
    }, one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
            var e = a.handleObj;
            f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
            return this
        }
        if (typeof a == "object") {
            for (var g in a)this.off(g, c, a[g]);
            return this
        }
        if (c === !1 || typeof c == "function")d = c, c = b;
        d === !1 && (d = J);
        return this.each(function () {
            f.event.remove(this, a, d, c)
        })
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, live: function (a, b, c) {
        f(this.context).on(a, this.selector, b, c);
        return this
    }, die: function (a, b) {
        f(this.context).off(a, this.selector || "**", b);
        return this
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
    }, trigger: function (a, b) {
        return this.each(function () {
            f.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        if (this[0])return f.event.trigger(a, b, this[0], !0)
    }, toggle: function (a) {
        var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
            var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
            f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
            return b[e].apply(this, arguments) || !1
        };
        e.guid = c;
        while (d < b.length)b[d++].guid = c;
        return this.click(e)
    }, hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)return[];
            if (!b || typeof b != "string")return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))if (w.length === 2 && o.relative[w[0]])j = y(w[0] + w[1], d, f); else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length)b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {expr: w.pop(), set: s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length)q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")if (!u)e.push.apply(e, k); else if (d && d.nodeType === 1)for (t = 0; k[t] != null; t++)k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++)k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a)return[];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return{set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\")continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f)g = i = !0; else if (f === !0)continue
                    }
                    if (f)for (n = 0; (j = s[n]) != null; n++)j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g)return[];
                        break
                    }
                }
                if (a === q)if (g == null)m.error(a); else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string")return a.textContent;
                    if (typeof a.innerText == "string")return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling)e += n(a)
                } else if (d === 3 || d === 4)return a.nodeValue
            } else for (b = 0; c = a[b]; b++)c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (a) {
            return a.getAttribute("href")
        }, type: function (a) {
            return a.getAttribute("type")
        }}, relative: {"+": function (a, b) {
            var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
            d && (b = b.toLowerCase());
            for (var f = 0, g = a.length, h; f < g; f++)if (h = a[f]) {
                while ((h = h.previousSibling) && h.nodeType !== 1);
                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
            }
            e && m.filter(b, a, !0)
        }, ">": function (a, b) {
            var c, d = typeof b == "string", e = 0, f = a.length;
            if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                    c = a[e];
                    if (c) {
                        var g = c.parentNode;
                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                    }
                }
            } else {
                for (; e < f; e++)c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                d && m.filter(b, a, !0)
            }
        }, "": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
        }, "~": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
        }}, find: {ID: function (a, b, c) {
            if (typeof b.getElementById != "undefined" && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : []
            }
        }, NAME: function (a, b) {
            if (typeof b.getElementsByName != "undefined") {
                var c = [], d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
                return c.length === 0 ? null : c
            }
        }, TAG: function (a, b) {
            if (typeof b.getElementsByTagName != "undefined")return b.getElementsByTagName(a[1])
        }}, preFilter: {CLASS: function (a, b, c, d, e, f) {
            a = " " + a[1].replace(j, "") + " ";
            if (f)return a;
            for (var g = 0, h; (h = b[g]) != null; g++)h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
            return!1
        }, ID: function (a) {
            return a[1].replace(j, "")
        }, TAG: function (a, b) {
            return a[1].replace(j, "").toLowerCase()
        }, CHILD: function (a) {
            if (a[1] === "nth") {
                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
            } else a[2] && m.error(a[0]);
            a[0] = e++;
            return a
        }, ATTR: function (a, b, c, d, e, f) {
            var g = a[1] = a[1].replace(j, "");
            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
            return a
        }, PSEUDO: function (b, c, d, e, f) {
            if (b[1] === "not")if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))b[3] = m(b[3], null, null, c); else {
                var g = m.filter(b[3], c, d, !0 ^ f);
                d || e.push.apply(e, g);
                return!1
            } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))return!0;
            return b
        }, POS: function (a) {
            a.unshift(!0);
            return a
        }}, filters: {enabled: function (a) {
            return a.disabled === !1 && a.type !== "hidden"
        }, disabled: function (a) {
            return a.disabled === !0
        }, checked: function (a) {
            return a.checked === !0
        }, selected: function (a) {
            a.parentNode && a.parentNode.selectedIndex;
            return a.selected === !0
        }, parent: function (a) {
            return!!a.firstChild
        }, empty: function (a) {
            return!a.firstChild
        }, has: function (a, b, c) {
            return!!m(c[3], a).length
        }, header: function (a) {
            return/h\d/i.test(a.nodeName)
        }, text: function (a) {
            var b = a.getAttribute("type"), c = a.type;
            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
        }, radio: function (a) {
            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
        }, checkbox: function (a) {
            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
        }, file: function (a) {
            return a.nodeName.toLowerCase() === "input" && "file" === a.type
        }, password: function (a) {
            return a.nodeName.toLowerCase() === "input" && "password" === a.type
        }, submit: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "submit" === a.type
        }, image: function (a) {
            return a.nodeName.toLowerCase() === "input" && "image" === a.type
        }, reset: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "reset" === a.type
        }, button: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && "button" === a.type || b === "button"
        }, input: function (a) {
            return/input|select|textarea|button/i.test(a.nodeName)
        }, focus: function (a) {
            return a === a.ownerDocument.activeElement
        }}, setFilters: {first: function (a, b) {
            return b === 0
        }, last: function (a, b, c, d) {
            return b === d.length - 1
        }, even: function (a, b) {
            return b % 2 === 0
        }, odd: function (a, b) {
            return b % 2 === 1
        }, lt: function (a, b, c) {
            return b < c[3] - 0
        }, gt: function (a, b, c) {
            return b > c[3] - 0
        }, nth: function (a, b, c) {
            return c[3] - 0 === b
        }, eq: function (a, b, c) {
            return c[3] - 0 === b
        }}, filter: {PSEUDO: function (a, b, c, d) {
            var e = b[1], f = o.filters[e];
            if (f)return f(a, c, b, d);
            if (e === "contains")return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
            if (e === "not") {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++)if (g[h] === a)return!1;
                return!0
            }
            m.error(e)
        }, CHILD: function (a, b) {
            var c, e, f, g, h, i, j, k = b[1], l = a;
            switch (k) {
                case"only":
                case"first":
                    while (l = l.previousSibling)if (l.nodeType === 1)return!1;
                    if (k === "first")return!0;
                    l = a;
                case"last":
                    while (l = l.nextSibling)if (l.nodeType === 1)return!1;
                    return!0;
                case"nth":
                    c = b[2], e = b[3];
                    if (c === 1 && e === 0)return!0;
                    f = b[0], g = a.parentNode;
                    if (g && (g[d] !== f || !a.nodeIndex)) {
                        i = 0;
                        for (l = g.firstChild; l; l = l.nextSibling)l.nodeType === 1 && (l.nodeIndex = ++i);
                        g[d] = f
                    }
                    j = a.nodeIndex - e;
                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
            }
        }, ID: function (a, b) {
            return a.nodeType === 1 && a.getAttribute("id") === b
        }, TAG: function (a, b) {
            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
        }, CLASS: function (a, b) {
            return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
        }, ATTR: function (a, b) {
            var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
        }, POS: function (a, b, c, d) {
            var e = b[2], f = o.setFilters[e];
            if (f)return f(a, c, b, d)
        }}}, p = o.match.POS, q = function (a, b) {
            return"\\" + (b - 0 + 1)
        };
        for (var r in o.match)o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]")Array.prototype.push.apply(d, a); else if (typeof a.length == "number")for (var e = a.length; c < e; c++)d.push(a[c]); else for (; a[c]; c++)d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i)return v(a, b);
            if (!g)return-1;
            if (!i)return 1;
            while (j)e.unshift(j), j = j.parentNode;
            j = i;
            while (j)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)if (e[k] !== f[k])return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b)return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)return-1;
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)return s([], f);
                                if (i.id === h[3])return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p)return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {
                            } finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a)m[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a))try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11)return f
                        }
                    } catch (g) {
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1)return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return!!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return!1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a))f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++)m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({find: function (a) {
        var b = this, c, d;
        if (typeof a != "string")return f(a).filter(function () {
            for (c = 0, d = b.length; c < d; c++)if (f.contains(b[c], this))return!0
        });
        var e = this.pushStack("", "find", a), g, h, i;
        for (c = 0, d = this.length; c < d; c++) {
            g = e.length, f.find(a, this[c], e);
            if (c > 0)for (h = g; h < e.length; h++)for (i = 0; i < g; i++)if (e[i] === e[h]) {
                e.splice(h--, 1);
                break
            }
        }
        return e
    }, has: function (a) {
        var b = f(a);
        return this.filter(function () {
            for (var a = 0, c = b.length; a < c; a++)if (f.contains(this, b[a]))return!0
        })
    }, not: function (a) {
        return this.pushStack(T(this, a, !1), "not", a)
    }, filter: function (a) {
        return this.pushStack(T(this, a, !0), "filter", a)
    }, is: function (a) {
        return!!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
    }, closest: function (a, b) {
        var c = [], d, e, g = this[0];
        if (f.isArray(a)) {
            var h = 1;
            while (g && g.ownerDocument && g !== b) {
                for (d = 0; d < a.length; d++)f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                g = g.parentNode, h++
            }
            return c
        }
        var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
        for (d = 0, e = this.length; d < e; d++) {
            g = this[d];
            while (g) {
                if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                    c.push(g);
                    break
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === b || g.nodeType === 11)break
            }
        }
        c = c.length > 1 ? f.unique(c) : c;
        return this.pushStack(c, "closest", a)
    }, index: function (a) {
        if (!a)return this[0] && this[0].parentNode ? this.prevAll().length : -1;
        if (typeof a == "string")return f.inArray(this[0], f(a));
        return f.inArray(a.jquery ? a[0] : a, this)
    }, add: function (a, b) {
        var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
        return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
    }, andSelf: function () {
        return this.add(this.prevObject)
    }}), f.each({parent: function (a) {
        var b = a.parentNode;
        return b && b.nodeType !== 11 ? b : null
    }, parents: function (a) {
        return f.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
        return f.dir(a, "parentNode", c)
    }, next: function (a) {
        return f.nth(a, 2, "nextSibling")
    }, prev: function (a) {
        return f.nth(a, 2, "previousSibling")
    }, nextAll: function (a) {
        return f.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return f.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
        return f.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
        return f.dir(a, "previousSibling", c)
    }, siblings: function (a) {
        return f.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return f.sibling(a.firstChild)
    }, contents: function (a) {
        return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
    }}, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({filter: function (a, b, c) {
        c && (a = ":not(" + a + ")");
        return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
    }, dir: function (a, c, d) {
        var e = [], g = a[c];
        while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))g.nodeType === 1 && e.push(g), g = g[c];
        return e
    }, nth: function (a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c])if (a.nodeType === 1 && ++e === b)break;
        return a
    }, sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a);
        return c
    }});
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({text: function (a) {
        return f.access(this, function (a) {
            return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
        }, null, a, arguments.length)
    }, wrapAll: function (a) {
        if (f.isFunction(a))return this.each(function (b) {
            f(this).wrapAll(a.call(this, b))
        });
        if (this[0]) {
            var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)a = a.firstChild;
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        if (f.isFunction(a))return this.each(function (b) {
            f(this).wrapInner(a.call(this, b))
        });
        return this.each(function () {
            var b = f(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = f.isFunction(a);
        return this.each(function (c) {
            f(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.appendChild(a)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild)
        })
    }, before: function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this)
        });
        if (arguments.length) {
            var a = f
                .clean(arguments);
            a.push.apply(a, this.toArray());
            return this.pushStack(a, "before", arguments)
        }
    }, after: function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling)
        });
        if (arguments.length) {
            var a = this.pushStack(this, "after", arguments);
            a.push.apply(a, f.clean(arguments));
            return a
        }
    }, remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
        return this
    }, empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
            b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
            while (b.firstChild)b.removeChild(b.firstChild)
        }
        return this
    }, clone: function (a, b) {
        a = a == null ? !1 : a, b = b == null ? a : b;
        return this.map(function () {
            return f.clone(this, a, b)
        })
    }, html: function (a) {
        return f.access(this, function (a) {
            var c = this[0] || {}, d = 0, e = this.length;
            if (a === b)return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (; d < e; d++)c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                    c = 0
                } catch (g) {
                }
            }
            c && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function (a) {
        if (this[0] && this[0].parentNode) {
            if (f.isFunction(a))return this.each(function (b) {
                var c = f(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            });
            typeof a != "string" && (a = f(a).detach());
            return this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                f(this).remove(), b ? f(b).before(a) : f(c).append(a)
            })
        }
        return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, c, d) {
        var e, g, h, i, j = a[0], k = [];
        if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))return this.each(function () {
            f(this).domManip(a, c, d, !0)
        });
        if (f.isFunction(j))return this.each(function (e) {
            var g = f(this);
            a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
        });
        if (this[0]) {
            i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
            if (g) {
                c = c && f.nodeName(g, "tr");
                for (var l = 0, m = this.length, n = m - 1; l < m; l++)d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
            }
            k.length && f.each(k, function (a, b) {
                b.src ? f.ajax({type: "GET", global: !1, url: b.src, async: !1, dataType: "script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
            })
        }
        return this
    }}), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return{fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({clone: function (a, b, c) {
        var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
        if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
            bk(a, h), d = bl(a), e = bl(h);
            for (g = 0; d[g]; ++g)e[g] && bk(d[g], e[g])
        }
        if (b) {
            bj(a, h);
            if (c) {
                d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g)bj(d[g], e[g])
            }
        }
        d = e = null;
        return h
    }, clean: function (a, b, d, e) {
        var g, h, i, j = [];
        b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
        for (var k = 0, l; (l = a[k]) != null; k++) {
            typeof l == "number" && (l += "");
            if (!l)continue;
            if (typeof l == "string")if (!_.test(l))l = b.createTextNode(l); else {
                l = l.replace(Y, "<$1></$2>");
                var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r;
                b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                while (o--)p = p.lastChild;
                if (!f.support.tbody) {
                    var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                    for (i = t.length - 1; i >= 0; --i)f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                }
                !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
            }
            var u;
            if (!f.support.appendChecked)if (l[0] && typeof (u = l.length) == "number")for (i = 0; i < u; i++)bn(l[i]); else bn(l);
            l.nodeType ? j.push(l) : j = f.merge(j, l)
        }
        if (d) {
            g = function (a) {
                return!a.type || be.test(a.type)
            };
            for (k = 0; j[k]; k++) {
                h = j[k];
                if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type)))e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else {
                    if (h.nodeType === 1) {
                        var v = f.grep(h.getElementsByTagName("script"), g);
                        j.splice.apply(j, [k + 1, 0].concat(v))
                    }
                    d.appendChild(h)
                }
            }
        }
        return j
    }, cleanData: function (a) {
        var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
            if (i.nodeName && f.noData[i.nodeName.toLowerCase()])continue;
            c = i[f.expando];
            if (c) {
                b = d[c];
                if (b && b.events) {
                    for (var j in b.events)e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                    b.handle && (b.handle.elem = null)
                }
                g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
            }
        }
    }});
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {position: "absolute", visibility: "hidden", display: "block"}, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = by(a, "opacity");
            return c === "" ? "1" : c
        }
        return a.style.opacity
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
            var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) {
                if (k && "get"in k && (g = k.get(a, !1, e)) !== b)return g;
                return j[c]
            }
            h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
            if (d == null || h === "number" && isNaN(d))return;
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set"in k) || (d = k.set(a, d)) !== b)try {
                j[c] = d
            } catch (l) {
            }
        }
    }, css: function (a, c, d) {
        var e, g;
        c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
        if (g && "get"in g && (e = g.get(a, !0, d)) !== b)return e;
        if (by)return by(a, c)
    }, swap: function (a, b, c) {
        var d = {}, e, f;
        for (f in b)d[f] = a.style[f], a.style[f] = b[f];
        e = c.call(a);
        for (f in b)a.style[f] = d[f];
        return e
    }}), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {get: function (a, c, d) {
            if (c)return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                return bB(a, b, d)
            })
        }, set: function (a, b) {
            return bs.test(b) ? b + "px" : b
        }}
    }), f.support.opacity || (f.cssHooks.opacity = {get: function (a, b) {
        return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    }, set: function (a, b) {
        var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter)return
        }
        c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
    }}), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {get: function (a, b) {
            return f.swap(a, {display: "inline-block"}, function () {
                return b ? by(a, "margin-right") : a.style.marginRight
            })
        }})
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return!f.expr.filters.hidden(a)
    }), f.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        f.cssHooks[a + b] = {expand: function (c) {
            var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
            for (d = 0; d < 4; d++)f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
            return f
        }}
    });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({load: function (a, c, d) {
        if (typeof a != "string" && bR)return bR.apply(this, arguments);
        if (!this.length)return this;
        var e = a.indexOf(" ");
        if (e >= 0) {
            var g = a.slice(e, a.length);
            a = a.slice(0, e)
        }
        var h = "GET";
        c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
        var i = this;
        f.ajax({url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
            c = a.responseText, a.isResolved() && (a.done(function (a) {
                c = a
            }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
        }});
        return this
    }, serialize: function () {
        return f.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? f.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
        }).map(function (a, b) {
            var c = f(this).val();
            return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                return{name: b.name, value: a.replace(bE, "\r\n")}
            }) : {name: b.name, value: c.replace(bE, "\r\n")}
        }).get()
    }}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({getScript: function (a, c) {
        return f.get(a, b, c, "script")
    }, getJSON: function (a, b, c) {
        return f.get(a, b, c, "json")
    }, ajaxSetup: function (a, b) {
        b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
        return a
    }, ajaxSettings: {url: bU, isLocal: bI.test(bV[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bW}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: bY(bS), ajaxTransport: bY(bT), ajax: function (a, c) {
        function w(a, c, l, m) {
            if (s !== 2) {
                s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = v.getResponseHeader("Last-Modified"))f.lastModified[k] = y;
                        if (z = v.getResponseHeader("Etag"))f.etag[k] = z
                    }
                    if (a === 304)w = "notmodified", o = !0; else try {
                        r = cb(d, x), w = "success", o = !0
                    } catch (A) {
                        w = "parsererror", u = A
                    }
                } else {
                    u = w;
                    if (!w || a)w = "error", a < 0 && (a = 0)
                }
                v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
            }
        }

        typeof a == "object" && (c = a, a = b), c = c || {};
        var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState: 0, setRequestHeader: function (a, b) {
            if (!s) {
                var c = a.toLowerCase();
                a = m[c] = m[c] || a, l[a] = b
            }
            return this
        }, getAllResponseHeaders: function () {
            return s === 2 ? n : null
        }, getResponseHeader: function (a) {
            var c;
            if (s === 2) {
                if (!o) {
                    o = {};
                    while (c = bG.exec(n))o[c[1].toLowerCase()] = c[2]
                }
                c = o[a.toLowerCase()]
            }
            return c === b ? null : c
        }, overrideMimeType: function (a) {
            s || (d.mimeType = a);
            return this
        }, abort: function (a) {
            a = a || "abort", p && p.abort(a), w(0, a);
            return this
        }};
        h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
            if (a) {
                var b;
                if (s < 2)for (b in a)j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
            }
            return this
        }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
        if (s === 2)return!1;
        t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
        if (!d.hasContent) {
            d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
            if (d.cache === !1) {
                var x = f.now(), y = d.url.replace(bP, "$1_=" + x);
                d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
            }
        }
        (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
        for (u in d.headers)v.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
            v.abort();
            return!1
        }
        for (u in{success: 1, error: 1, complete: 1})v[u](d[u]);
        p = bZ(bT, d, c, v);
        if (!p)w(-1, "No Transport"); else {
            v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                v.abort("timeout")
            }, d.timeout));
            try {
                s = 1, p.send(l, w)
            } catch (z) {
                if (s < 2)w(-1, z); else throw z
            }
        }
        return v
    }, param: function (a, c) {
        var d = [], e = function (a, b) {
            b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function () {
            e(this.name, this.value)
        }); else for (var g in a)b_(g, a[g], c, e);
        return d.join("&").replace(bC, "+")
    }}), f.extend({active: 0, lastModified: {}, etag: {}});
    var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        return f.expando + "_" + cc++
    }}), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return"script"
        }
    }), f.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (a) {
        f.globalEval(a);
        return a
    }}}), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return{send: function (f, g) {
                d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                    if (c || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                }, e.insertBefore(d, e.firstChild)
            }, abort: function () {
                d && d.onload(0, 1)
            }}
        }
    });
    var ce = a.ActiveXObject ? function () {
        for (var a in cg)cg[a](0, 1)
    } : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return!this.isLocal && ch() || ci()
    } : ch, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials"in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return{send: function (e, g) {
                var h = c.xhr(), i, j;
                c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                if (c.xhrFields)for (j in c.xhrFields)h[j] = c.xhrFields[j];
                c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (j in e)h.setRequestHeader(j, e[j])
                } catch (k) {
                }
                h.send(c.hasContent && c.data || null), d = function (a, e) {
                    var j, k, l, m, n;
                    try {
                        if (d && (e || h.readyState === 4)) {
                            d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                            if (e)h.readyState !== 4 && h.abort(); else {
                                j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                try {
                                    m.text = h.responseText
                                } catch (a) {
                                }
                                try {
                                    k = h.statusText
                                } catch (o) {
                                    k = ""
                                }
                                !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                            }
                        }
                    } catch (p) {
                        e || g(-1, p)
                    }
                    m && g(j, k, m, l)
                }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
            }, abort: function () {
                d && d(0, 1)
            }}
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ], cq;
    f.fn.extend({show: function (a, b, c) {
        var d, e;
        if (a || a === 0)return this.animate(ct("show", 3), a, b, c);
        for (var g = 0, h = this.length; g < h; g++)d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
        for (g = 0; g < h; g++) {
            d = this[g];
            if (d.style) {
                e = d.style.display;
                if (e === "" || e === "none")d.style.display = f._data(d, "olddisplay") || ""
            }
        }
        return this
    }, hide: function (a, b, c) {
        if (a || a === 0)return this.animate(ct("hide", 3), a, b, c);
        var d, e, g = 0, h = this.length;
        for (; g < h; g++)d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
        for (g = 0; g < h; g++)this[g].style && (this[g].style.display = "none");
        return this
    }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
        var d = typeof a == "boolean";
        f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
            var b = d ? a : f(this).is(":hidden");
            f(this)[b ? "show" : "hide"]()
        }) : this.animate(ct("toggle", 3), a, b, c);
        return this
    }, fadeTo: function (a, b, c, d) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
        function g() {
            e.queue === !1 && f._mark(this);
            var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
            b.animatedProperties = {};
            for (i in a) {
                g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                if ((k = f.cssHooks[g]) && "expand"in k) {
                    l = k.expand(a[g]), delete a[g];
                    for (i in l)i in a || (a[i] = l[i])
                }
            }
            for (g in a) {
                h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                if (h === "hide" && d || h === "show" && !d)return b.complete.call(this);
                c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
            }
            b.overflow != null && (this.style.overflow = "hidden");
            for (i in a)j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
            return!0
        }

        var e = f.speed(b, c, d);
        if (f.isEmptyObject(a))return this.each(e.complete, [!1]);
        a = f.extend({}, a);
        return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
    }, stop: function (a, c, d) {
        typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
        return this.each(function () {
            function h(a, b, c) {
                var e = b[c];
                f.removeData(a, c, !0), e.stop(d)
            }

            var b, c = !1, e = f.timers, g = f._data(this);
            d || f._unmark(!0, this);
            if (a == null)for (b in g)g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
            for (b = e.length; b--;)e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
            (!d || !c) && f.dequeue(this, a)
        })
    }}), f.each({slideDown: ct("show", 1), slideUp: ct("hide", 1), slideToggle: ct("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({speed: function (a, b, c) {
        var d = a && typeof a == "object" ? f.extend({}, a) : {complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b};
        d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0)d.queue = "fx";
        d.old = d.complete, d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
        };
        return d
    }, easing: {linear: function (a) {
        return a
    }, swing: function (a) {
        return-Math.cos(a * Math.PI) / 2 + .5
    }}, timers: [], fx: function (a, b, c) {
        this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
    }}), f.fx.prototype = {update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
    }, cur: function () {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))return this.elem[this.prop];
        var a, b = f.css(this.elem, this.prop);
        return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
    }, custom: function (a, c, d) {
        function h(a) {
            return e.step(a)
        }

        var e = this, g = f.fx;
        this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
            f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
        }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
    }, show: function () {
        var a = f._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
    }, hide: function () {
        this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    }, step: function (a) {
        var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
        if (a || e >= i.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
            for (b in i.animatedProperties)i.animatedProperties[b] !== !0 && (g = !1);
            if (g) {
                i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                    h.style["overflow" + b] = i.overflow[a]
                }), i.hide && f(h).hide();
                if (i.hide || i.show)for (b in i.animatedProperties)f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                d = i.complete, d && (i.complete = !1, d.call(h))
            }
            return!1
        }
        i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
        return!0
    }}, f.extend(f.fx, {tick: function () {
        var a, b = f.timers, c = 0;
        for (; c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || f.fx.stop()
    }, interval: 13, stop: function () {
        clearInterval(co), co = null
    }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (a) {
        f.style(a.elem, "opacity", a.now)
    }, _default: function (a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
    }}}), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers,function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect"in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a))return d ? {top: d.top, left: d.left} : {top: 0, left: 0};
        var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j;
        return{top: m, left: n}
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed")break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static")k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return{top: k, left: l}
    }, f.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0], d = c && c.ownerDocument;
        if (!d)return null;
        if (c === d.body)return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {bodyOffset: function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
        return{top: b, left: c}
    }, setOffset: function (a, b, c) {
        var d = f.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
        j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using"in b ? b.using.call(a, k) : e.css(k)
    }}, f.fn.extend({position: function () {
        if (!this[0])return null;
        var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
        c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
        return{top: c.top - d.top, left: c.left - d.left}
    }, offsetParent: function () {
        return this.map(function () {
            var a = this.offsetParent || c.body;
            while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")a = a.offsetParent;
            return a
        })
    }}), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b)return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height", Width: "width"}, function (a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e])return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function (f, b, g) {
    var a = /\+/g;

    function e(h) {
        return h
    }

    function c(h) {
        return decodeURIComponent(h.replace(a, " "))
    }

    var d = f.cookie = function (p, o, u) {
        if (o !== g) {
            u = f.extend({}, d.defaults, u);
            if (o === null) {
                u.expires = -1
            }
            if (typeof u.expires === "number") {
                var q = u.expires, s = u.expires = new Date();
                s.setDate(s.getDate() + q)
            }
            o = d.json ? JSON.stringify(o) : String(o);
            return(b.cookie = [encodeURIComponent(p), "=", d.raw ? o : encodeURIComponent(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join(""))
        }
        var h = d.raw ? e : c;
        var r = b.cookie.split("; ");
        for (var n = 0, k = r.length; n < k; n++) {
            var m = r[n].split("=");
            if (h(m.shift()) === p) {
                var j = h(m.join("="));
                return d.json ? JSON.parse(j) : j
            }
        }
        return null
    };
    d.defaults = {};
    f.removeCookie = function (i, h) {
        if (f.cookie(i) !== null) {
            f.cookie(i, null, h);
            return true
        }
        return false
    }
})(jQuery, document);
/**
 * jQuery Masonry v2.1.05
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function (a, b, c) {
    "use strict";
    var d = b.event, e;
    d.special.smartresize = {setup: function () {
        b(this).bind("resize", d.special.smartresize.handler)
    }, teardown: function () {
        b(this).unbind("resize", d.special.smartresize.handler)
    }, handler: function (a, c) {
        var d = this, f = arguments;
        a.type = "smartresize", e && clearTimeout(e), e = setTimeout(function () {
            b.event.handle.apply(d, f)
        }, c === "execAsap" ? 0 : 100)
    }}, b.fn.smartresize = function (a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Mason = function (a, c) {
        this.element = b(c), this._create(a), this._init()
    }, b.Mason.settings = {isResizable: !0, isAnimated: !1, animationOptions: {queue: !1, duration: 500}, gutterWidth: 0, isRTL: !1, isFitWidth: !1, containerStyle: {position: "relative"}}, b.Mason.prototype = {_filterFindBricks: function (a) {
        var b = this.options.itemSelector;
        return b ? a.filter(b).add(a.find(b)) : a
    }, _getBricks: function (a) {
        var b = this._filterFindBricks(a).css({position: "absolute"}).addClass("masonry-brick");
        return b
    }, _create: function (c) {
        this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [];
        var d = this.element[0].style;
        this.originalStyle = {height: d.height || ""};
        var e = this.options.containerStyle;
        for (var f in e)this.originalStyle[f] = d[f] || "";
        this.element.css(e), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10), y: parseInt(this.element.css("padding-top"), 10)}, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
        var g = this;
        setTimeout(function () {
            g.element.addClass("masonry")
        }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function () {
            g.resize()
        }), this.reloadItems()
    }, _init: function (a) {
        this._getColumns(), this._reLayout(a)
    }, option: function (a, c) {
        b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
    }, layout: function (a, b) {
        for (var c = 0, d = a.length; c < d; c++)this._placeBrick(a[c]);
        var e = {};
        e.height = Math.max.apply(Math, this.colYs);
        if (this.options.isFitWidth) {
            var f = 0;
            c = this.cols;
            while (--c) {
                if (this.colYs[c] !== 0)break;
                f++
            }
            e.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth
        }
        this.styleQueue.push({$el: this.element, style: e});
        var g = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css", h = this.options.animationOptions, i;
        for (c = 0, d = this.styleQueue.length; c < d; c++)i = this.styleQueue[c], i.$el[g](i.style, h);
        this.styleQueue = [], b && b.call(a), this.isLaidOut = !0
    }, _getColumns: function () {
        var a = this.options.isFitWidth ? this.element.parent() : this.element, b = a.width();
        this.columnWidth = this.isFluid ? this.options.columnWidth(b) : this.options.columnWidth || this.$bricks.outerWidth(!0) || b, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
    }, _placeBrick: function (a) {
        var c = b(a), d, e, f, g, h;
        d = Math.ceil(c.outerWidth(!0) / this.columnWidth), d = Math.min(d, this.cols);
        if (d === 1)f = this.colYs; else {
            e = this.cols + 1 - d, f = [];
            for (h = 0; h < e; h++)g = this.colYs.slice(h, h + d), f[h] = Math.max.apply(Math, g)
        }
        var i = Math.min.apply(Math, f), j = 0;
        for (var k = 0, l = f.length; k < l; k++)if (f[k] === i) {
            j = k;
            break
        }
        var m = {top: i + this.offset.y};
        m[this.horizontalDirection] = this.columnWidth * j + this.offset.x, this.styleQueue.push({$el: c, style: m});
        var n = i + c.outerHeight(!0), o = this.cols + 1 - l;
        for (k = 0; k < o; k++)this.colYs[j + k] = n
    }, resize: function () {
        var a = this.cols;
        this._getColumns(), (this.isFluid || this.cols !== a) && this._reLayout()
    }, _reLayout: function (a) {
        var b = this.cols;
        this.colYs = [];
        while (b--)this.colYs.push(0);
        this.layout(this.$bricks, a)
    }, reloadItems: function () {
        this.$bricks = this._getBricks(this.element.children())
    }, reload: function (a) {
        this.reloadItems(), this._init(a)
    }, appended: function (a, b, c) {
        if (b) {
            this._filterFindBricks(a).css({top: this.element.height()});
            var d = this;
            setTimeout(function () {
                d._appended(a, c)
            }, 1)
        } else this._appended(a, c)
    }, _appended: function (a, b) {
        var c = this._getBricks(a);
        this.$bricks = this.$bricks.add(c), this.layout(c, b)
    }, remove: function (a) {
        this.$bricks = this.$bricks.not(a), a.remove()
    }, destroy: function () {
        this.$bricks.removeClass("masonry-brick").each(function () {
            this.style.position = "", this.style.top = "", this.style.left = ""
        });
        var c = this.element[0].style;
        for (var d in this.originalStyle)c[d] = this.originalStyle[d];
        this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry")
    }}, b.fn.imagesLoaded = function (a) {
        function h() {
            a.call(c, d)
        }

        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }

        var c = this, d = c.find("img").add(c.filter("img")), e = d.length, f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", g = [];
        return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
            var a = this.src;
            this.src = f, this.src = a
        }), c
    };
    var f = function (b) {
        a.console && a.console.error(b)
    };
    b.fn.masonry = function (a) {
        if (typeof a == "string") {
            var c = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var d = b.data(this, "masonry");
                if (!d) {
                    f("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'");
                    return
                }
                if (!b.isFunction(d[a]) || a.charAt(0) === "_") {
                    f("no such method '" + a + "' for masonry instance");
                    return
                }
                d[a].apply(d, c)
            })
        } else this.each(function () {
            var c = b.data(this, "masonry");
            c ? (c.option(a || {}), c._init()) : b.data(this, "masonry", new b.Mason(a, this))
        });
        return this
    }
})(window, jQuery);
var googleAccessToken = "";
var googleClientId = "1048371872626.apps.googleusercontent.com";
var googleRedirectUri = window.location.protocol + "//" + window.location.hostname + "/oauthcallback";
var fbAppId = "393085564087969";
var cookieDomain = ".giveter.com";
var hostDomain = window.location.protocol + "//" + window.location.hostname + "/";
var imagePath = "http://www.giveter.com/public/images/products/";
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;
(function (f, h, $) {
    var a = 'placeholder' in h.createElement('input'), d = 'placeholder' in h.createElement('textarea'), i = $.fn, c = $.valHooks, k, j;
    if (a && d) {
        j = i.placeholder = function () {
            return this
        };
        j.input = j.textarea = true
    } else {
        j = i.placeholder = function () {
            var l = this;
            l.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({'focus.placeholder': b, 'blur.placeholder': e}).data('placeholder-enabled', true).trigger('blur.placeholder');
            return l
        };
        j.input = a;
        j.textarea = d;
        k = {get: function (m) {
            var l = $(m);
            return l.data('placeholder-enabled') && l.hasClass('placeholder') ? '' : m.value
        }, set: function (m, n) {
            var l = $(m);
            if (!l.data('placeholder-enabled')) {
                return m.value = n
            }
            if (n == '') {
                m.value = n;
                if (m != h.activeElement) {
                    e.call(m)
                }
            } else {
                if (l.hasClass('placeholder')) {
                    b.call(m, true, n) || (m.value = n)
                } else {
                    m.value = n
                }
            }
            return l
        }};
        a || (c.input = k);
        d || (c.textarea = k);
        $(function () {
            $(h).delegate('form', 'submit.placeholder', function () {
                var l = $('.placeholder', this).each(b);
                setTimeout(function () {
                    l.each(e)
                }, 10)
            })
        });
        $(f).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = ''
            })
        })
    }
    function g(m) {
        var l = {}, n = /^jQuery\d+$/;
        $.each(m.attributes, function (p, o) {
            if (o.specified && !n.test(o.name)) {
                l[o.name] = o.value
            }
        });
        return l
    }

    function b(m, n) {
        var l = this, o = $(l);
        if (l.value == o.attr('placeholder') && o.hasClass('placeholder')) {
            if (o.data('placeholder-password')) {
                o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id'));
                if (m === true) {
                    return o[0].value = n
                }
                o.focus()
            } else {
                l.value = '';
                o.removeClass('placeholder');
                l == h.activeElement && l.select()
            }
        }
    }

    function e() {
        var q, l = this, p = $(l), m = p, o = this.id;
        if (l.value == '') {
            if (l.type == 'password') {
                if (!p.data('placeholder-textinput')) {
                    try {
                        q = p.clone().attr({type: 'text'})
                    } catch (n) {
                        q = $('<input>').attr($.extend(g(this), {type: 'text'}))
                    }
                    q.removeAttr('name').data({'placeholder-password': true, 'placeholder-id': o}).bind('focus.placeholder', b);
                    p.data({'placeholder-textinput': q, 'placeholder-id': o}).before(q)
                }
                p = p.removeAttr('id').hide().prev().attr('id', o).show()
            }
            p.addClass('placeholder');
            p[0].value = p.attr('placeholder')
        } else {
            p.removeClass('placeholder')
        }
    }
}(this, document, jQuery));
/*!
 * Bootstrap.js by @fat & @mdo
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function (a) {
    a(function () {
        "use strict", a.support.transition = function () {
            var a = function () {
                var a = document.createElement("bootstrap"), b = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", msTransition: "MSTransitionEnd", transition: "transitionend"}, c;
                for (c in b)if (a.style[c] !== undefined)return b[c]
            }();
            return a && {end: a}
        }()
    })
}(window.jQuery), !function (a) {
    "use strict";
    var b = '[data-dismiss="alert"]', c = function (c) {
        a(c).on("click", b, this.close)
    };
    c.prototype.close = function (b) {
        function f() {
            e.trigger("closed").remove()
        }

        var c = a(this), d = c.attr("data-target"), e;
        d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), e = a(d), b && b.preventDefault(), e.length || (e = c.hasClass("alert") ? c : c.parent()), e.trigger(b = a.Event("close"));
        if (b.isDefaultPrevented())return;
        e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.on(a.support.transition.end, f) : f()
    }, a.fn.alert = function (b) {
        return this.each(function () {
            var d = a(this), e = d.data("alert");
            e || d.data("alert", e = new c(this)), typeof b == "string" && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a(function () {
        a("body").on("click.alert.data-api", b, c.prototype.close)
    })
}(window.jQuery), !function (a) {
    "use strict";
    var b = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
    };
    b.prototype.setState = function (a) {
        var b = "disabled", c = this.$element, d = c.data(), e = c.is("input") ? "val" : "html";
        a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function () {
            a == "loadingText" ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }, b.prototype.toggle = function () {
        var a = this.$element.parent('[data-toggle="buttons-radio"]');
        a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
    }, a.fn.button = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("button"), f = typeof c == "object" && c;
            e || d.data("button", e = new b(this, f)), c == "toggle" ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.defaults = {loadingText: "loading..."}, a.fn.button.Constructor = b, a(function () {
        a("body").on("click.button.data-api", "[data-toggle^=button]", function (b) {
            var c = a(b.target);
            c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
        })
    })
}(window.jQuery), !function (a) {
    "use strict";
    var b = function (b, c) {
        this.$element = a(b), this.options = c, this.options.slide && this.slide(this.options.slide), this.options.pause == "hover" && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.prototype = {cycle: function (b) {
        return b || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, to: function (b) {
        var c = this.$element.find(".active"), d = c.parent().children(), e = d.index(c), f = this;
        if (b > d.length - 1 || b < 0)return;
        return this.sliding ? this.$element.one("slid", function () {
            f.to(b)
        }) : e == b ? this.pause().cycle() : this.slide(b > e ? "next" : "prev", a(d[b]))
    }, pause: function (a) {
        return a || (this.paused = !0), clearInterval(this.interval), this.interval = null, this
    }, next: function () {
        if (this.sliding)return;
        return this.slide("next")
    }, prev: function () {
        if (this.sliding)return;
        return this.slide("prev")
    }, slide: function (b, c) {
        var d = this.$element.find(".active"), e = c || d[b](), f = this.interval, g = b == "next" ? "left" : "right", h = b == "next" ? "first" : "last", i = this, j = a.Event("slide");
        this.sliding = !0, f && this.pause(), e = e.length ? e : this.$element.find(".item")[h]();
        if (e.hasClass("active"))return;
        if (a.support.transition && this.$element.hasClass("slide")) {
            this.$element.trigger(j);
            if (j.isDefaultPrevented())return;
            e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), this.$element.one(a.support.transition.end, function () {
                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger("slid")
                }, 0)
            })
        } else {
            this.$element.trigger(j);
            if (j.isDefaultPrevented())return;
            d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
        }
        return f && this.cycle(), this
    }}, a.fn.carousel = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("carousel"), f = a.extend({}, a.fn.carousel.defaults, typeof c == "object" && c);
            e || d.data("carousel", e = new b(this, f)), typeof c == "number" ? e.to(c) : typeof c == "string" || (c = f.slide) ? e[c]() : f.interval && e.cycle()
        })
    }, a.fn.carousel.defaults = {interval: 5e3, pause: "hover"}, a.fn.carousel.Constructor = b, a(function () {
        a("body").on("click.carousel.data-api", "[data-slide]", function (b) {
            var c = a(this), d, e = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")), f = !e.data("modal") && a.extend({}, e.data(), c.data());
            e.carousel(f), b.preventDefault()
        })
    })
}(window.jQuery), !function (a) {
    "use strict";
    var b = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.prototype = {constructor: b, dimension: function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, show: function () {
        var b, c, d, e;
        if (this.transitioning)return;
        b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in");
        if (d && d.length) {
            e = d.data("collapse");
            if (e && e.transitioning)return;
            d.collapse("hide"), e || d.data("collapse", null)
        }
        this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), this.$element[b](this.$element[0][c])
    }, hide: function () {
        var b;
        if (this.transitioning)return;
        b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0)
    }, reset: function (a) {
        var b = this.dimension();
        return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[a !== null ? "addClass" : "removeClass"]("collapse"), this
    }, transition: function (b, c, d) {
        var e = this, f = function () {
            c.type == "show" && e.reset(), e.transitioning = 0, e.$element.trigger(d)
        };
        this.$element.trigger(c);
        if (c.isDefaultPrevented())return;
        this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f()
    }, toggle: function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }}, a.fn.collapse = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("collapse"), f = typeof c == "object" && c;
            e || d.data("collapse", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.collapse.defaults = {toggle: !0}, a.fn.collapse.Constructor = b, a(function () {
        a("body").on("click.collapse.data-api", "[data-toggle=collapse]", function (b) {
            var c = a(this), d, e = c.attr("data-target") || b.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), f = a(e).data("collapse") ? "toggle" : c.data();
            a(e).collapse(f)
        })
    })
}(window.jQuery), !function (a) {
    function d() {
        a(b).parent().removeClass("open")
    }

    "use strict";
    var b = '[data-toggle="dropdown"]', c = function (b) {
        var c = a(b).on("click.dropdown.data-api", this.toggle);
        a("html").on("click.dropdown.data-api", function () {
            c.parent().removeClass("open")
        })
    };
    c.prototype = {constructor: c, toggle: function (b) {
        var c = a(this), e, f, g;
        if (c.is(".disabled, :disabled"))return;
        return f = c.attr("data-target"), f || (f = c.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), e = a(f), e.length || (e = c.parent()), g = e.hasClass("open"), d(), g || e.toggleClass("open"), !1
    }}, a.fn.dropdown = function (b) {
        return this.each(function () {
            var d = a(this), e = d.data("dropdown");
            e || d.data("dropdown", e = new c(this)), typeof b == "string" && e[b].call(d)
        })
    }, a.fn.dropdown.Constructor = c, a(function () {
        a("html").on("click.dropdown.data-api", d), a("body").on("click.dropdown", ".dropdown form",function (a) {
            a.stopPropagation()
        }).on("click.dropdown.data-api", b, c.prototype.toggle)
    })
}(window.jQuery), !function (a) {
    function c() {
        var b = this, c = setTimeout(function () {
            b.$element.off(a.support.transition.end), d.call(b)
        }, 500);
        this.$element.one(a.support.transition.end, function () {
            clearTimeout(c), d.call(b)
        })
    }

    function d(a) {
        this.$element.hide().trigger("hidden"), e.call(this)
    }

    function e(b) {
        var c = this, d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this.options.backdrop != "static" && this.$backdrop.click(a.proxy(this.hide, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), e ? this.$backdrop.one(a.support.transition.end, b) : b()
        } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, a.proxy(f, this)) : f.call(this)) : b && b()
    }

    function f() {
        this.$backdrop.remove(), this.$backdrop = null
    }

    function g() {
        var b = this;
        this.isShown && this.options.keyboard ? a(document).on("keyup.dismiss.modal", function (a) {
            a.which == 27 && b.hide()
        }) : this.isShown || a(document).off("keyup.dismiss.modal")
    }

    "use strict";
    var b = function (b, c) {
        this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this))
    };
    b.prototype = {constructor: b, toggle: function () {
        return this[this.isShown ? "hide" : "show"]()
    }, show: function () {
        var b = this, c = a.Event("show");
        this.$element.trigger(c);
        if (this.isShown || c.isDefaultPrevented())return;
        a("body").addClass("modal-open"), this.isShown = !0, g.call(this), e.call(this, function () {
            var c = a.support.transition && b.$element.hasClass("fade");
            b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in"), c ? b.$element.one(a.support.transition.end, function () {
                b.$element.trigger("shown")
            }) : b.$element.trigger("shown")
        })
    }, hide: function (b) {
        b && b.preventDefault();
        var e = this;
        b = a.Event("hide"), this.$element.trigger(b);
        if (!this.isShown || b.isDefaultPrevented())return;
        this.isShown = !1, a("body").removeClass("modal-open"), g.call(this), this.$element.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? c.call(this) : d.call(this)
    }}, a.fn.modal = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("modal"), f = a.extend({}, a.fn.modal.defaults, d.data(), typeof c == "object" && c);
            e || d.data("modal", e = new b(this, f)), typeof c == "string" ? e[c]() : f.show && e.show()
        })
    }, a.fn.modal.defaults = {backdrop: !0, keyboard: !0, show: !0}, a.fn.modal.Constructor = b, a(function () {
        a("body").on("click.modal.data-api", '[data-toggle="modal"]', function (b) {
            var c = a(this), d, e = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({}, e.data(), c.data());
            b.preventDefault(), e.modal(f)
        })
    })
}(window.jQuery), !function (a) {
    "use strict";
    var b = function (a, b) {
        this.init("tooltip", a, b)
    };
    b.prototype = {constructor: b, init: function (b, c, d) {
        var e, f;
        this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, this.options.trigger != "manual" && (e = this.options.trigger == "hover" ? "mouseenter" : "focus", f = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(e, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    }, getOptions: function (b) {
        return b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data()), b.delay && typeof b.delay == "number" && (b.delay = {show: b.delay, hide: b.delay}), b
    }, enter: function (b) {
        var c = a(b.currentTarget)[this.type](this._options).data(this.type);
        if (!c.options.delay || !c.options.delay.show)return c.show();
        clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function () {
            c.hoverState == "in" && c.show()
        }, c.options.delay.show)
    }, leave: function (b) {
        var c = a(b.currentTarget)[this.type](this._options).data(this.type);
        this.timeout && clearTimeout(this.timeout);
        if (!c.options.delay || !c.options.delay.hide)return c.hide();
        c.hoverState = "out", this.timeout = setTimeout(function () {
            c.hoverState == "out" && c.hide()
        }, c.options.delay.hide)
    }, show: function () {
        var a, b, c, d, e, f, g;
        if (this.hasContent() && this.enabled) {
            a = this.tip(), this.setContent(), this.options.animation && a.addClass("fade"), f = typeof this.options.placement == "function" ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, b = /in/.test(f), a.remove().css({top: 0, left: 0, display: "block"}).appendTo(b ? this.$element : document.body), c = this.getPosition(b), d = a[0].offsetWidth, e = a[0].offsetHeight;
            switch (b ? f.split(" ")[1] : f) {
                case"bottom":
                    g = {top: c.top + c.height, left: c.left + c.width / 2 - d / 2};
                    break;
                case"top":
                    g = {top: c.top - e, left: c.left + c.width / 2 - d / 2};
                    break;
                case"left":
                    g = {top: c.top + c.height / 2 - e / 2, left: c.left - d};
                    break;
                case"right":
                    g = {top: c.top + c.height / 2 - e / 2, left: c.left + c.width}
            }
            a.css(g).addClass(f).addClass("in")
        }
    }, isHTML: function (a) {
        return typeof a != "string" || a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(a)
    }, setContent: function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.isHTML(b) ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, hide: function () {
        function d() {
            var b = setTimeout(function () {
                c.off(a.support.transition.end).remove()
            }, 500);
            c.one(a.support.transition.end, function () {
                clearTimeout(b), c.remove()
            })
        }

        var b = this, c = this.tip();
        c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d() : c.remove()
    }, fixTitle: function () {
        var a = this.$element;
        (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
    }, hasContent: function () {
        return this.getTitle()
    }, getPosition: function (b) {
        return a.extend({}, b ? {top: 0, left: 0} : this.$element.offset(), {width: this.$element[0].offsetWidth, height: this.$element[0].offsetHeight})
    }, getTitle: function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
    }, tip: function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, validate: function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, enable: function () {
        this.enabled = !0
    }, disable: function () {
        this.enabled = !1
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }, toggle: function () {
        this[this.tip().hasClass("in") ? "hide" : "show"]()
    }}, a.fn.tooltip = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("tooltip"), f = typeof c == "object" && c;
            e || d.data("tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover", title: "", delay: 0}
}(window.jQuery), !function (a) {
    "use strict";
    var b = function (a, b) {
        this.init("popover", a, b)
    };
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {constructor: b, setContent: function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.isHTML(b) ? "html" : "text"](b), a.find(".popover-content > *")[this.isHTML(c) ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
    }, hasContent: function () {
        return this.getTitle() || this.getContent()
    }, getContent: function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-content") || (typeof c.content == "function" ? c.content.call(b[0]) : c.content), a
    }, tip: function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    }}), a.fn.popover = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("popover"), f = typeof c == "object" && c;
            e || d.data("popover", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {placement: "right", content: "", template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})
}(window.jQuery), !function (a) {
    function b(b, c) {
        var d = a.proxy(this.process, this), e = a(b).is("body") ? a(window) : a(b), f;
        this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = e.on("scroll.scroll.data-api", d), this.selector = (this.options.target || (f = a(b).attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
    }

    "use strict", b.prototype = {constructor: b, refresh: function () {
        var b = this, c;
        this.offsets = a([]), this.targets = a([]), c = this.$body.find(this.selector).map(function () {
            var b = a(this), c = b.data("target") || b.attr("href"), d = /^#\w/.test(c) && a(c);
            return d && c.length && [
                [d.position().top, c]
            ] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, process: function () {
        var a = this.$scrollElement.scrollTop() + this.options.offset, b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, c = b - this.$scrollElement.height(), d = this.offsets, e = this.targets, f = this.activeTarget, g;
        if (a >= c)return f != (g = e.last()[0]) && this.activate(g);
        for (g = d.length; g--;)f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
    }, activate: function (b) {
        var c, d;
        this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu") && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
    }}, a.fn.scrollspy = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("scrollspy"), f = typeof c == "object" && c;
            e || d.data("scrollspy", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {offset: 10}, a(function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(window.jQuery), !function (a) {
    "use strict";
    var b = function (b) {
        this.element = a(b)
    };
    b.prototype = {constructor: b, show: function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.attr("data-target"), e, f, g;
        d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
        if (b.parent("li").hasClass("active"))return;
        e = c.find(".active a").last()[0], g = a.Event("show", {relatedTarget: e}), b.trigger(g);
        if (g.isDefaultPrevented())return;
        f = a(d), this.activate(b.parent("li"), c), this.activate(f, f.parent(), function () {
            b.trigger({type: "shown", relatedTarget: e})
        })
    }, activate: function (b, c, d) {
        function g() {
            e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }

        var e = c.find("> .active"), f = d && a.support.transition && e.hasClass("fade");
        f ? e.one(a.support.transition.end, g) : g(), e.removeClass("in")
    }}, a.fn.tab = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("tab");
            e || d.data("tab", e = new b(this)), typeof c == "string" && e[c]()
        })
    }, a.fn.tab.Constructor = b, a(function () {
        a("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
            b.preventDefault(), a(this).tab("show")
        })
    })
}(window.jQuery), !function (a) {
    "use strict";
    var b = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.$menu = a(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
    };
    b.prototype = {constructor: b, select: function () {
        var a = this.$menu.find(".active").attr("data-value");
        return this.$element.val(this.updater(a)).change(), this.hide()
    }, updater: function (a) {
        return a
    }, show: function () {
        var b = a.extend({}, this.$element.offset(), {height: this.$element[0].offsetHeight});
        return this.$menu.css({top: b.top + b.height, left: b.left}), this.$menu.show(), this.shown = !0, this
    }, hide: function () {
        return this.$menu.hide(), this.shown = !1, this
    }, lookup: function (b) {
        var c = this, d, e;
        return this.query = this.$element.val(), this.query ? (d = a.grep(this.source, function (a) {
            return c.matcher(a)
        }), d = this.sorter(d), d.length ? this.render(d.slice(0, this.options.items)).show() : this.shown ? this.hide() : this) : this.shown ? this.hide() : this
    }, matcher: function (a) {
        return~a.toLowerCase().indexOf(this.query.toLowerCase())
    }, sorter: function (a) {
        var b = [], c = [], d = [], e;
        while (e = a.shift())e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? c.push(e) : d.push(e) : b.push(e);
        return b.concat(c, d)
    }, highlighter: function (a) {
        var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        return a.replace(new RegExp("(" + b + ")", "ig"), function (a, b) {
            return"<strong>" + b + "</strong>"
        })
    }, render: function (b) {
        var c = this;
        return b = a(b).map(function (b, d) {
            return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
        }), b.first().addClass("active"), this.$menu.html(b), this
    }, next: function (b) {
        var c = this.$menu.find(".active").removeClass("active"), d = c.next();
        d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active")
    }, prev: function (a) {
        var b = this.$menu.find(".active").removeClass("active"), c = b.prev();
        c.length || (c = this.$menu.find("li").last()), c.addClass("active")
    }, listen: function () {
        this.$element.on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), (a.browser.webkit || a.browser.msie) && this.$element.on("keydown", a.proxy(this.keypress, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this))
    }, keyup: function (a) {
        switch (a.keyCode) {
            case 40:
            case 38:
                break;
            case 9:
            case 13:
                if (!this.shown)return;
                this.select();
                break;
            case 27:
                if (!this.shown)return;
                this.hide();
                break;
            default:
                this.lookup()
        }
        a.stopPropagation(), a.preventDefault()
    }, keypress: function (a) {
        if (!this.shown)return;
        switch (a.keyCode) {
            case 9:
            case 13:
            case 27:
                a.preventDefault();
                break;
            case 38:
                if (a.type != "keydown")break;
                a.preventDefault(), this.prev();
                break;
            case 40:
                if (a.type != "keydown")break;
                a.preventDefault(), this.next()
        }
        a.stopPropagation()
    }, blur: function (a) {
        var b = this;
        setTimeout(function () {
            b.hide()
        }, 150)
    }, click: function (a) {
        a.stopPropagation(), a.preventDefault(), this.select()
    }, mouseenter: function (b) {
        this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
    }}, a.fn.typeahead = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("typeahead"), f = typeof c == "object" && c;
            e || d.data("typeahead", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.typeahead.defaults = {source: [], items: 8, menu: '<ul class="typeahead dropdown-menu"></ul>', item: '<li><a href="#"></a></li>'}, a.fn.typeahead.Constructor = b, a(function () {
        a("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (b) {
            var c = a(this);
            if (c.data("typeahead"))return;
            b.preventDefault(), c.typeahead(c.data())
        })
    })
}(window.jQuery);
!function (d) {
    function f() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function b() {
        var g = new Date();
        return f(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate())
    }

    var a = function (h, g) {
        var i = this;
        this.element = d(h);
        this.language = g.language || this.element.data("date-language") || "en";
        this.language = this.language in e ? this.language : "en";
        this.format = c.parseFormat(g.format || this.element.data("date-format") || "mm/dd/yyyy");
        this.isInline = false;
        this.isInput = this.element.is("input");
        this.component = this.element.is(".date") ? this.element.find(".add-on") : false;
        this.hasInput = this.component && this.element.find("input").length;
        if (this.component && this.component.length === 0) {
            this.component = false
        }
        this._attachEvents();
        this.forceParse = true;
        if ("forceParse" in g) {
            this.forceParse = g.forceParse
        } else {
            if ("dateForceParse" in this.element.data()) {
                this.forceParse = this.element.data("date-force-parse")
            }
        }
        this.picker = d(c.template).appendTo(this.isInline ? this.element : "body").on({click: d.proxy(this.click, this), mousedown: d.proxy(this.mousedown, this)});
        if (this.isInline) {
            this.picker.addClass("datepicker-inline")
        } else {
            this.picker.addClass("datepicker-dropdown dropdown-menu")
        }
        d(document).on("mousedown", function (j) {
            if (d(j.target).closest(".datepicker").length === 0) {
                i.hide()
            }
        });
        this.autoclose = false;
        if ("autoclose" in g) {
            this.autoclose = g.autoclose
        } else {
            if ("dateAutoclose" in this.element.data()) {
                this.autoclose = this.element.data("date-autoclose")
            }
        }
        this.keyboardNavigation = true;
        if ("keyboardNavigation" in g) {
            this.keyboardNavigation = g.keyboardNavigation
        } else {
            if ("dateKeyboardNavigation" in this.element.data()) {
                this.keyboardNavigation = this.element.data("date-keyboard-navigation")
            }
        }
        this.viewMode = this.startViewMode = 0;
        switch (g.startView || this.element.data("date-start-view")) {
            case 2:
            case"decade":
                this.viewMode = this.startViewMode = 2;
                break;
            case 1:
            case"year":
                this.viewMode = this.startViewMode = 1;
                break
        }
        this.todayBtn = (g.todayBtn || this.element.data("date-today-btn") || false);
        this.todayHighlight = (g.todayHighlight || this.element.data("date-today-highlight") || false);
        this.weekStart = ((g.weekStart || this.element.data("date-weekstart") || e[this.language].weekStart || 0) % 7);
        this.weekEnd = ((this.weekStart + 6) % 7);
        this.startDate = -Infinity;
        this.endDate = Infinity;
        this.daysOfWeekDisabled = [];
        this.setStartDate(g.startDate || this.element.data("date-startdate"));
        this.setEndDate(g.endDate || this.element.data("date-enddate"));
        this.setDaysOfWeekDisabled(g.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled"));
        this.fillDow();
        this.fillMonths();
        this.update();
        this.showMode();
        if (this.isInline) {
            this.show()
        }
    };
    a.prototype = {constructor: a, _events: [], _attachEvents: function () {
        this._detachEvents();
        if (this.isInput) {
            this._events = [
                [this.element, {focus: d.proxy(this.show, this), keyup: d.proxy(this.update, this), keydown: d.proxy(this.keydown, this)}]
            ]
        } else {
            if (this.component && this.hasInput) {
                this._events = [
                    [this.element.find("input"), {focus: d.proxy(this.show, this), keyup: d.proxy(this.update, this), keydown: d.proxy(this.keydown, this)}],
                    [this.component, {click: d.proxy(this.show, this)}]
                ]
            } else {
                if (this.element.is("div")) {
                    this.isInline = true
                } else {
                    this._events = [
                        [this.element, {click: d.proxy(this.show, this)}]
                    ]
                }
            }
        }
        for (var g = 0, h, j; g < this._events.length; g++) {
            h = this._events[g][0];
            j = this._events[g][1];
            h.on(j)
        }
    }, _detachEvents: function () {
        for (var g = 0, h, j; g < this._events.length; g++) {
            h = this._events[g][0];
            j = this._events[g][1];
            h.off(j)
        }
        this._events = []
    }, show: function (g) {
        this.picker.show();
        this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
        this.update();
        this.place();
        d(window).on("resize", d.proxy(this.place, this));
        if (g) {
            g.stopPropagation();
            g.preventDefault()
        }
        this.element.trigger({type: "show", date: this.date})
    }, hide: function (g) {
        if (this.isInline) {
            return
        }
        this.picker.hide();
        d(window).off("resize", this.place);
        this.viewMode = this.startViewMode;
        this.showMode();
        if (!this.isInput) {
            d(document).off("mousedown", this.hide)
        }
        if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) {
            if (this.element.val() != "Date") {
                this.setValue()
            }
        }
        this.element.trigger({type: "hide", date: this.date})
    }, remove: function () {
        this._detachEvents();
        this.picker.remove();
        delete this.element.data().datepicker
    }, getDate: function () {
        var g = this.getUTCDate();
        return new Date(g.getTime() + (g.getTimezoneOffset() * 60000))
    }, getUTCDate: function () {
        return this.date
    }, setDate: function (g) {
        this.setUTCDate(new Date(g.getTime() - (g.getTimezoneOffset() * 60000)))
    }, setUTCDate: function (g) {
        this.date = g;
        this.setValue()
    }, setValue: function () {
        var g = this.getFormattedDate();
        if (!this.isInput) {
            if (this.component) {
                this.element.find("input").prop("value", g)
            }
            this.element.data("date", g)
        } else {
            this.element.prop("value", g)
        }
    }, getFormattedDate: function (g) {
        if (g == undefined) {
            g = this.format
        }
        return c.formatDate(this.date, g, this.language)
    }, setStartDate: function (g) {
        this.startDate = g || -Infinity;
        if (this.startDate !== -Infinity) {
            this.startDate = c.parseDate(this.startDate, this.format, this.language)
        }
        this.update();
        this.updateNavArrows()
    }, setEndDate: function (g) {
        this.endDate = g || Infinity;
        if (this.endDate !== Infinity) {
            this.endDate = c.parseDate(this.endDate, this.format, this.language)
        }
        this.update();
        this.updateNavArrows()
    }, setDaysOfWeekDisabled: function (g) {
        this.daysOfWeekDisabled = g || [];
        if (!d.isArray(this.daysOfWeekDisabled)) {
            this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)
        }
        this.daysOfWeekDisabled = d.map(this.daysOfWeekDisabled, function (h) {
            return parseInt(h, 10)
        });
        this.update();
        this.updateNavArrows()
    }, place: function () {
        if (this.isInline) {
            return
        }
        var i = parseInt(this.element.parents().filter(function () {
            return d(this).css("z-index") != "auto"
        }).first().css("z-index")) + 10;
        var h = this.component ? this.component.offset() : this.element.offset();
        var g = this.component ? (h.left - this.picker.outerWidth() + this.component.outerWidth()) : (h.left - (this.picker.outerWidth() - this.element.outerWidth()));
        this.picker.css({top: h.top + this.height + 2, left: g, zIndex: i})
    }, update: function () {
        var g, h = false;
        if (arguments && arguments.length && (typeof arguments[0] === "string" || arguments[0] instanceof Date)) {
            g = arguments[0];
            h = true
        } else {
            g = this.isInput ? this.element.prop("value") : this.element.data("date") || this.element.find("input").prop("value")
        }
        this.date = c.parseDate(g, this.format, this.language);
        if (h) {
            this.setValue()
        }
        if (this.date < this.startDate) {
            this.viewDate = new Date(this.startDate)
        } else {
            if (this.date > this.endDate) {
                this.viewDate = new Date(this.endDate)
            } else {
                this.viewDate = new Date(this.date)
            }
        }
        this.fill()
    }, fillDow: function () {
        var g = this.weekStart, h = "<tr>";
        while (g < this.weekStart + 7) {
            h += '<th class="dow">' + e[this.language].daysMin[(g++) % 7] + "</th>"
        }
        h += "</tr>";
        this.picker.find(".datepicker-days thead").append(h)
    }, fillMonths: function () {
        var h = "", g = 0;
        while (g < 12) {
            h += '<span class="month">' + e[this.language].monthsShort[g++] + "</span>"
        }
        this.picker.find(".datepicker-months td").html(h)
    }, fill: function () {
        var u = new Date(this.viewDate), m = u.getUTCFullYear(), v = u.getUTCMonth(), o = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity, s = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity, j = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity, p = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity, k = this.date.valueOf(), t = new Date();
        this.picker.find(".datepicker-days thead th:eq(1)").text(e[this.language].months[v] + " " + m);
        this.picker.find("tfoot th.today").text(e[this.language].today).toggle(this.todayBtn !== false);
        this.updateNavArrows();
        this.fillMonths();
        var x = f(m, v - 1, 28, 0, 0, 0, 0), r = c.getDaysInMonth(x.getUTCFullYear(), x.getUTCMonth());
        x.setUTCDate(r);
        x.setUTCDate(r - (x.getUTCDay() - this.weekStart + 7) % 7);
        var g = new Date(x);
        g.setUTCDate(g.getUTCDate() + 42);
        g = g.valueOf();
        var l = [];
        var n;
        while (x.valueOf() < g) {
            if (x.getUTCDay() == this.weekStart) {
                l.push("<tr>")
            }
            n = "";
            if (x.getUTCFullYear() < m || (x.getUTCFullYear() == m && x.getUTCMonth() < v)) {
                n += " old"
            } else {
                if (x.getUTCFullYear() > m || (x.getUTCFullYear() == m && x.getUTCMonth() > v)) {
                    n += " new"
                }
            }
            if (this.todayHighlight && x.getUTCFullYear() == t.getFullYear() && x.getUTCMonth() == t.getMonth() && x.getUTCDate() == t.getDate()) {
                n += " today"
            }
            if (x.valueOf() == k) {
                n += " active"
            }
            if (x.valueOf() < this.startDate || x.valueOf() > this.endDate || d.inArray(x.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                n += " disabled"
            }
            l.push('<td class="day' + n + '">' + x.getUTCDate() + "</td>");
            if (x.getUTCDay() == this.weekEnd) {
                l.push("</tr>")
            }
            x.setUTCDate(x.getUTCDate() + 1)
        }
        this.picker.find(".datepicker-days tbody").empty().append(l.join(""));
        var y = this.date.getUTCFullYear();
        var h = this.picker.find(".datepicker-months").find("th:eq(1)").text(m).end().find("span").removeClass("active");
        if (y == m) {
            h.eq(this.date.getUTCMonth()).addClass("active")
        }
        if (m < o || m > j) {
            h.addClass("disabled")
        }
        if (m == o) {
            h.slice(0, s).addClass("disabled")
        }
        if (m == j) {
            h.slice(p + 1).addClass("disabled")
        }
        l = "";
        m = parseInt(m / 10, 10) * 10;
        var w = this.picker.find(".datepicker-years").find("th:eq(1)").text(m + "-" + (m + 9)).end().find("td");
        m -= 1;
        for (var q = -1; q < 11; q++) {
            l += '<span class="year' + (q == -1 || q == 10 ? " old" : "") + (y == m ? " active" : "") + (m < o || m > j ? " disabled" : "") + '">' + m + "</span>";
            m += 1
        }
        w.html(l)
    }, updateNavArrows: function () {
        var i = new Date(this.viewDate), g = i.getUTCFullYear(), h = i.getUTCMonth();
        switch (this.viewMode) {
            case 0:
                if (this.startDate !== -Infinity && g <= this.startDate.getUTCFullYear() && h <= this.startDate.getUTCMonth()) {
                    this.picker.find(".prev").css({visibility: "hidden"})
                } else {
                    this.picker.find(".prev").css({visibility: "visible"})
                }
                if (this.endDate !== Infinity && g >= this.endDate.getUTCFullYear() && h >= this.endDate.getUTCMonth()) {
                    this.picker.find(".next").css({visibility: "hidden"})
                } else {
                    this.picker.find(".next").css({visibility: "visible"})
                }
                break;
            case 1:
            case 2:
                if (this.startDate !== -Infinity && g <= this.startDate.getUTCFullYear()) {
                    this.picker.find(".prev").css({visibility: "hidden"})
                } else {
                    this.picker.find(".prev").css({visibility: "visible"})
                }
                if (this.endDate !== Infinity && g >= this.endDate.getUTCFullYear()) {
                    this.picker.find(".next").css({visibility: "hidden"})
                } else {
                    this.picker.find(".next").css({visibility: "visible"})
                }
                break
        }
    }, click: function (m) {
        m.stopPropagation();
        m.preventDefault();
        var l = d(m.target).closest("span, td, th");
        if (l.length == 1) {
            switch (l[0].nodeName.toLowerCase()) {
                case"th":
                    switch (l[0].className) {
                        case"switch":
                            this.showMode(1);
                            break;
                        case"prev":
                        case"next":
                            var i = c.modes[this.viewMode].navStep * (l[0].className == "prev" ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, i);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, i);
                                    break
                            }
                            this.fill();
                            break;
                        case"today":
                            var h = new Date();
                            h = f(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0);
                            this.showMode(-2);
                            var n = this.todayBtn == "linked" ? null : "view";
                            this._setDate(h, n);
                            break
                    }
                    break;
                case"span":
                    if (!l.is(".disabled")) {
                        this.viewDate.setUTCDate(1);
                        if (l.is(".month")) {
                            var k = l.parent().find("span").index(l);
                            this.viewDate.setUTCMonth(k);
                            this.element.trigger({type: "changeMonth", date: this.viewDate})
                        } else {
                            var j = parseInt(l.text(), 10) || 0;
                            this.viewDate.setUTCFullYear(j);
                            this.element.trigger({type: "changeYear", date: this.viewDate})
                        }
                        this.showMode(-1);
                        this.fill()
                    }
                    break;
                case"td":
                    if (l.is(".day") && !l.is(".disabled")) {
                        var g = parseInt(l.text(), 10) || 1;
                        var j = this.viewDate.getUTCFullYear(), k = this.viewDate.getUTCMonth();
                        if (l.is(".old")) {
                            if (k === 0) {
                                k = 11;
                                j -= 1
                            } else {
                                k -= 1
                            }
                        } else {
                            if (l.is(".new")) {
                                if (k == 11) {
                                    k = 0;
                                    j += 1
                                } else {
                                    k += 1
                                }
                            }
                        }
                        this._setDate(f(j, k, g, 0, 0, 0, 0))
                    }
                    break
            }
        }
    }, _setDate: function (g, i) {
        if (!i || i == "date") {
            this.date = g
        }
        if (!i || i == "view") {
            this.viewDate = g
        }
        this.fill();
        this.setValue();
        this.element.trigger({type: "changeDate", date: this.date});
        var h;
        if (this.isInput) {
            h = this.element
        } else {
            if (this.component) {
                h = this.element.find("input")
            }
        }
        if (h) {
            h.change();
            if (this.autoclose && (!i || i == "date")) {
                this.hide()
            }
        }
    }, moveMonth: function (g, h) {
        if (!h) {
            return g
        }
        var l = new Date(g.valueOf()), p = l.getUTCDate(), m = l.getUTCMonth(), k = Math.abs(h), o, n;
        h = h > 0 ? 1 : -1;
        if (k == 1) {
            n = h == -1 ? function () {
                return l.getUTCMonth() == m
            } : function () {
                return l.getUTCMonth() != o
            };
            o = m + h;
            l.setUTCMonth(o);
            if (o < 0 || o > 11) {
                o = (o + 12) % 12
            }
        } else {
            for (var j = 0; j < k; j++) {
                l = this.moveMonth(l, h)
            }
            o = l.getUTCMonth();
            l.setUTCDate(p);
            n = function () {
                return o != l.getUTCMonth()
            }
        }
        while (n()) {
            l.setUTCDate(--p);
            l.setUTCMonth(o)
        }
        return l
    }, moveYear: function (h, g) {
        return this.moveMonth(h, g * 12)
    }, dateWithinRange: function (g) {
        return g >= this.startDate && g <= this.endDate
    }, keydown: function (n) {
        if (this.picker.is(":not(:visible)")) {
            if (n.keyCode == 27) {
                this.show()
            }
            return
        }
        var j = false, i, h, m, g, l;
        switch (n.keyCode) {
            case 27:
                this.hide();
                n.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.keyboardNavigation) {
                    break
                }
                i = n.keyCode == 37 ? -1 : 1;
                if (n.ctrlKey) {
                    g = this.moveYear(this.date, i);
                    l = this.moveYear(this.viewDate, i)
                } else {
                    if (n.shiftKey) {
                        g = this.moveMonth(this.date, i);
                        l = this.moveMonth(this.viewDate, i)
                    } else {
                        g = new Date(this.date);
                        g.setUTCDate(this.date.getUTCDate() + i);
                        l = new Date(this.viewDate);
                        l.setUTCDate(this.viewDate.getUTCDate() + i)
                    }
                }
                if (this.dateWithinRange(g)) {
                    this.date = g;
                    this.viewDate = l;
                    this.setValue();
                    this.update();
                    n.preventDefault();
                    j = true
                }
                break;
            case 38:
            case 40:
                if (!this.keyboardNavigation) {
                    break
                }
                i = n.keyCode == 38 ? -1 : 1;
                if (n.ctrlKey) {
                    g = this.moveYear(this.date, i);
                    l = this.moveYear(this.viewDate, i)
                } else {
                    if (n.shiftKey) {
                        g = this.moveMonth(this.date, i);
                        l = this.moveMonth(this.viewDate, i)
                    } else {
                        g = new Date(this.date);
                        g.setUTCDate(this.date.getUTCDate() + i * 7);
                        l = new Date(this.viewDate);
                        l.setUTCDate(this.viewDate.getUTCDate() + i * 7)
                    }
                }
                if (this.dateWithinRange(g)) {
                    this.date = g;
                    this.viewDate = l;
                    this.setValue();
                    this.update();
                    n.preventDefault();
                    j = true
                }
                break;
            case 13:
                this.hide();
                n.preventDefault();
                break;
            case 9:
                this.hide();
                break
        }
        if (j) {
            this.element.trigger({type: "changeDate", date: this.date});
            var k;
            if (this.isInput) {
                k = this.element
            } else {
                if (this.component) {
                    k = this.element.find("input")
                }
            }
            if (k) {
                k.change()
            }
        }
    }, showMode: function (g) {
        if (g) {
            this.viewMode = Math.max(0, Math.min(2, this.viewMode + g))
        }
        this.picker.find(">div").hide().filter(".datepicker-" + c.modes[this.viewMode].clsName).css("display", "block");
        this.updateNavArrows()
    }};
    d.fn.datepicker = function (h) {
        var g = Array.apply(null, arguments);
        g.shift();
        return this.each(function () {
            var k = d(this), j = k.data("datepicker"), i = typeof h == "object" && h;
            if (!j) {
                k.data("datepicker", (j = new a(this, d.extend({}, d.fn.datepicker.defaults, i))))
            }
            if (typeof h == "string" && typeof j[h] == "function") {
                j[h].apply(j, g)
            }
        })
    };
    d.fn.datepicker.defaults = {};
    d.fn.datepicker.Constructor = a;
    var e = d.fn.datepicker.dates = {en: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today"}};
    var c = {modes: [
        {clsName: "days", navFnc: "Month", navStep: 1},
        {clsName: "months", navFnc: "FullYear", navStep: 1},
        {clsName: "years", navFnc: "FullYear", navStep: 10}
    ], isLeapYear: function (g) {
        return(((g % 4 === 0) && (g % 100 !== 0)) || (g % 400 === 0))
    }, getDaysInMonth: function (g, h) {
        return[31, (c.isLeapYear(g) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][h]
    }, validParts: /dd?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\r]+/g, parseFormat: function (i) {
        var g = i.replace(this.validParts, "\0").split("\0"), h = i.match(this.validParts);
        if (!g || !g.length || !h || h.length == 0) {
            throw new Error("Invalid date format.")
        }
        return{separators: g, parts: h}
    }, parseDate: function (k, t, n) {
        if (k instanceof Date) {
            return k
        }
        if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(k)) {
            var v = /([-+]\d+)([dmwy])/, m = k.match(/([-+]\d+)([dmwy])/g), g, l;
            k = new Date();
            for (var o = 0; o < m.length; o++) {
                g = v.exec(m[o]);
                l = parseInt(g[1]);
                switch (g[2]) {
                    case"d":
                        k.setUTCDate(k.getUTCDate() + l);
                        break;
                    case"m":
                        k = a.prototype.moveMonth.call(a.prototype, k, l);
                        break;
                    case"w":
                        k.setUTCDate(k.getUTCDate() + l * 7);
                        break;
                    case"y":
                        k = a.prototype.moveYear.call(a.prototype, k, l);
                        break
                }
            }
            return f(k.getUTCFullYear(), k.getUTCMonth(), k.getUTCDate(), 0, 0, 0)
        }
        var m = k && k.match(this.nonpunctuation) || [], k = new Date(), q = {}, r = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], u = {yyyy: function (s, i) {
            return s.setUTCFullYear(i)
        }, yy: function (s, i) {
            return s.setUTCFullYear(2000 + i)
        }, m: function (s, i) {
            i -= 1;
            while (i < 0) {
                i += 12
            }
            i %= 12;
            s.setUTCMonth(i);
            while (s.getUTCMonth() != i) {
                s.setUTCDate(s.getUTCDate() - 1)
            }
            return s
        }, d: function (s, i) {
            return s.setUTCDate(i)
        }}, j, p, g;
        u.M = u.MM = u.mm = u.m;
        u.dd = u.d;
        k = f(k.getFullYear(), k.getMonth(), k.getDate(), 0, 0, 0);
        if (m.length == t.parts.length) {
            for (var o = 0, h = t.parts.length; o < h; o++) {
                j = parseInt(m[o], 10);
                g = t.parts[o];
                if (isNaN(j)) {
                    switch (g) {
                        case"MM":
                            p = d(e[n].months).filter(function () {
                                var i = this.slice(0, m[o].length), s = m[o].slice(0, i.length);
                                return i == s
                            });
                            j = d.inArray(p[0], e[n].months) + 1;
                            break;
                        case"M":
                            p = d(e[n].monthsShort).filter(function () {
                                var i = this.slice(0, m[o].length), s = m[o].slice(0, i.length);
                                return i == s
                            });
                            j = d.inArray(p[0], e[n].monthsShort) + 1;
                            break
                    }
                }
                q[g] = j
            }
            for (var o = 0, w; o < r.length; o++) {
                w = r[o];
                if (w in q && !isNaN(q[w])) {
                    u[w](k, q[w])
                }
            }
        }
        return k
    }, formatDate: function (g, l, n) {
        var m = {d: g.getUTCDate(), m: g.getUTCMonth() + 1, M: e[n].monthsShort[g.getUTCMonth()], MM: e[n].months[g.getUTCMonth()], yy: g.getUTCFullYear().toString().substring(2), yyyy: g.getUTCFullYear()};
        m.dd = (m.d < 10 ? "0" : "") + m.d;
        m.mm = (m.m < 10 ? "0" : "") + m.m;
        var g = [], k = d.extend([], l.separators);
        for (var j = 0, h = l.parts.length; j < h; j++) {
            if (k.length) {
                g.push(k.shift())
            }
            g.push(m[l.parts[j]])
        }
        return g.join("")
    }, headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};
    c.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + c.headTemplate + "<tbody></tbody>" + c.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + c.headTemplate + c.contTemplate + c.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + c.headTemplate + c.contTemplate + c.footTemplate + "</table></div></div>";
    d.fn.datepicker.DPGlobal = c
}(window.jQuery);
(function (i) {
    var l = i("<img />").addClass("vegas-background"), o = i("<div />").addClass("vegas-overlay"), m = i("<div />").addClass("vegas-loading"), a = i(), p = null, j = [], d = 0, h = 5000, n = function () {
    }, b, e = {init: function (r) {
        var q = {src: k(), align: "center", valign: "center", fade: 0, loading: true, load: function () {
        }, complete: function () {
        }};
        i.extend(q, i.vegas.defaults.background, r);
        if (q.loading) {
            f()
        }
        var s = l.clone();
        s.css({position: "relative", left: "0px", top: "0px"}).imagesLoadedForVegas(function () {
            if (s == a) {
                return
            }
            i(window).bind("load resize.vegas", function (t) {
                c(s, q)
            });
            if (a.is("img")) {
                a.stop();
                s.hide().insertAfter(a).fadeIn(q.fade, function () {
                    i(".vegas-background").not(this).remove();
                    i(".fullPageImage").trigger("vegascomplete", [this, d - 1]);
                    q.complete.apply(s, [d - 1])
                })
            } else {
                s.hide().prependTo(".fullPageImage").fadeIn(q.fade, function () {
                    i(".fullPageImage").trigger("vegascomplete", [this, d - 1]);
                    q.complete.apply(this, [d - 1])
                })
            }
            a = s;
            c(a, q);
            if (q.loading) {
                g()
            }
            i(".fullPageImage").trigger("vegasload", [a.get(0), d - 1]);
            q.load.apply(a.get(0), [d - 1]);
            if (d) {
                i(".fullPageImage").trigger("vegaswalk", [a.get(0), d - 1]);
                q.walk.apply(a.get(0), [d - 1])
            }
        }).attr("src", q.src);
        return i.vegas
    }, destroy: function (q) {
        if (!q || q == "background") {
            i(".vegas-background, .vegas-loading").remove();
            i(window).unbind("resize.vegas");
            a = i()
        }
        if (q == "overlay") {
            i(".vegas-overlay").remove()
        }
        return i.vegas
    }, overlay: function (r) {
        var q = {src: null, opacity: null};
        i.extend(q, i.vegas.defaults.overlay, r);
        o.remove();
        o.css({margin: "0", padding: "0", position: "fixed", left: "0px", top: "0px", width: "100%", height: "100%"});
        if (q.src) {
            o.css("backgroundImage", "url(" + q.src + ")")
        }
        if (q.opacity) {
            o.css("opacity", q.opacity)
        }
        o.prependTo(".fullPageImage");
        return i.vegas
    }, slideshow: function (s, q) {
        var r = {step: d, delay: h, preload: false, backgrounds: j, walk: n};
        i.extend(r, i.vegas.defaults.slideshow, s);
        if (r.backgrounds != j) {
            if (!s.step) {
                r.step = 0
            }
            if (!s.walk) {
                r.walk = function () {
                }
            }
            if (r.preload) {
                i.vegas("preload", r.backgrounds)
            }
        }
        j = r.backgrounds;
        h = r.delay;
        d = r.step;
        n = r.walk;
        clearInterval(b);
        if (!j.length) {
            return i.vegas
        }
        var t = function () {
            if (d < 0) {
                d = j.length - 1
            }
            if (d >= j.length || !j[d - 1]) {
                d = 0
            }
            var u = j[d++];
            u.walk = r.walk;
            if (typeof(u.fade) == "undefined") {
                u.fade = r.fade
            }
            if (u.fade > r.delay) {
                u.fade = r.delay
            }
            i.vegas(u)
        };
        t();
        if (!q) {
            p = false;
            i(".fullPageImage").trigger("vegasstart", [a.get(0), d - 1])
        }
        if (!p) {
            b = setInterval(t, r.delay)
        }
        return i.vegas
    }, next: function () {
        var q = d;
        if (d) {
            i.vegas("slideshow", {step: d}, true);
            i(".fullPageImage").trigger("vegasnext", [a.get(0), d - 1, q - 1])
        }
        return i.vegas
    }, previous: function () {
        var q = d;
        if (d) {
            i.vegas("slideshow", {step: d - 2}, true);
            i(".fullPageImage").trigger("vegasprevious", [a.get(0), d - 1, q - 1])
        }
        return i.vegas
    }, jump: function (q) {
        var r = d;
        if (d) {
            i.vegas("slideshow", {step: q}, true);
            i(".fullPageImage").trigger("vegasjump", [a.get(0), d - 1, r - 1])
        }
        return i.vegas
    }, stop: function () {
        var q = d;
        d = 0;
        p = null;
        clearInterval(b);
        i(".fullPageImage").trigger("vegasstop", [a.get(0), q - 1]);
        return i.vegas
    }, pause: function () {
        p = true;
        clearInterval(b);
        i(".fullPageImage").trigger("vegaspause", [a.get(0), d - 1]);
        return i.vegas
    }, get: function (q) {
        if (q == null || q == "background") {
            return a.get(0)
        }
        if (q == "overlay") {
            return o.get(0)
        }
        if (q == "step") {
            return d - 1
        }
        if (q == "paused") {
            return p
        }
    }, preload: function (t) {
        var r = [];
        for (var s in t) {
            if (t[s].src) {
                var q = document.createElement("img");
                q.src = t[s].src;
                r.push(q)
            }
        }
        return i.vegas
    }};

    function c(r, u) {
        var D = {align: "center", valign: "center"};
        i.extend(D, u);
        var x = i(".fullPageImage").width(), s = i(".fullPageImage").height(), v = r.width(), C = r.height(), t = s / x, A = C / v, w, q, B, z, y;
        if (t > A) {
            w = s / A;
            q = s
        } else {
            w = x;
            q = x * A
        }
        y = {width: w + "px", height: q + "px", top: "auto", bottom: "auto", left: "auto", right: "auto"};
        if (!isNaN(parseInt(D.valign))) {
            y.top = (0 - (q - s) / 100 * parseInt(D.valign)) + "px"
        } else {
            if (D.valign == "top") {
                y.top = 0
            } else {
                if (D.valign == "bottom") {
                    y.bottom = 0
                } else {
                    y.top = (s - q) / 2
                }
            }
        }
        if (!isNaN(parseInt(D.align))) {
            y.left = (0 - (w - x) / 100 * parseInt(D.align)) + "px"
        } else {
            if (D.align == "left") {
                y.left = 0
            } else {
                if (D.align == "right") {
                    y.right = 0
                } else {
                    y.left = (x - w) / 2
                }
            }
        }
        r.css(y)
    }

    function f() {
        m.prependTo(".fullPageImage").fadeIn()
    }

    function g() {
        m.fadeOut("fast", function () {
            i(this).remove()
        })
    }

    function k() {
        if (i(".fullPageImage").css("backgroundImage")) {
            return i(".fullPageImage").css("backgroundImage").replace(/url\("?(.*?)"?\)/i, "$1")
        }
    }

    i.vegas = function (q) {
        if (e[q]) {
            return e[q].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof q === "object" || !q) {
                return e.init.apply(this, arguments)
            } else {
                i.error("Method " + q + " does not exist")
            }
        }
    };
    i.vegas.defaults = {background: {}, slideshow: {}, overlay: {}}
        /*!
         * jQuery imagesLoaded plugin v1.0.3
         * http://github.com/desandro/imagesloaded
         *
         * MIT License. by Paul Irish et al.
         */
    ;
    i.fn.imagesLoadedForVegas = function (w) {
        var u = this, s = u.find("img").add(u.filter("img")), q = s.length, v = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

        function t() {
            w.call(u, s)
        }

        function r() {
            if (--q <= 0 && this.src !== v) {
                setTimeout(t);
                s.unbind("load error", r)
            }
        }

        if (!q) {
            setTimeout(t, 200)
        }
        s.bind("load error", r).each(function () {
            if (this.complete || this.complete === undefined) {
                var x = this.src;
                this.src = v;
                this.src = x
            }
        });
        return u
    }
})(jQuery);
var JSON;
if (!JSON) {
    JSON = {}
}
(function () {
    function f(n) {
        return n < 10 ? "0" + n : n
    }

    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
            case"string":
                return quote(value);
            case"number":
                return isFinite(value) ? String(value) : "null";
            case"boolean":
            case"null":
                return String(value);
            case"object":
                if (!value) {
                    return"null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
        }
    }

    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
/*! jQuery UI - v1.9.1 - 2012-11-20
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js, jquery.ui.effect.js
 * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return"area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function () {
            return e.css(this, "visibility") === "hidden"
        }).length
    }

    var n = 0, r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version)return;
    e.extend(e.ui, {version: "1.9.1", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({_focus: e.fn.focus, focus: function (t, n) {
        return typeof t == "number" ? this.each(function () {
            var r = this;
            setTimeout(function () {
                e(r).focus(), n && n.call(r)
            }, t)
        }) : this._focus.apply(this, arguments)
    }, scrollParent: function () {
        var t;
        return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0) : t = this.parents().filter(function () {
            return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    }, zIndex: function (n) {
        if (n !== t)return this.css("zIndex", n);
        if (this.length) {
            var r = e(this[0]), i, s;
            while (r.length && r[0] !== document) {
                i = r.css("position");
                if (i === "absolute" || i === "relative" || i === "fixed") {
                    s = parseInt(r.css("zIndex"), 10);
                    if (!isNaN(s) && s !== 0)return s
                }
                r = r.parent()
            }
        }
        return 0
    }, uniqueId: function () {
        return this.each(function () {
            this.id || (this.id = "ui-id-" + ++n)
        })
    }, removeUniqueId: function () {
        return this.each(function () {
            r.test(this.id) && e(this).removeAttr("id")
        })
    }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) {
        function u(t, n, r, s) {
            return e.each(i, function () {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }

        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], s = r.toLowerCase(), o = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
        e.fn["inner" + r] = function (n) {
            return n === t ? o["inner" + r].call(this) : this.each(function () {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function (t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (n) {
            return!!e.data(n, t)
        }
    }) : function (t, n, r) {
        return!!e.data(t, r[3])
    }, focusable: function (t) {
        return i(t, !isNaN(e.attr(t, "tabindex")))
    }, tabbable: function (t) {
        var n = e.attr(t, "tabindex"), r = isNaN(n);
        return(r || n >= 0) && i(t, !r)
    }}), e(function () {
        var t = document.body, n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {minHeight: "100px", height: "auto", padding: 0, borderWidth: 0}), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart"in n, t.removeChild(n).style.display = "none"
    }), function () {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = parseFloat(t[1], 10) === 6
    }(), e.fn.extend({disableSelection: function () {
        return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
            e.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), e.extend(e.ui, {plugin: {add: function (t, n, r) {
        var i, s = e.ui[t].prototype;
        for (i in r)s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
    }, call: function (e, t, n) {
        var r, i = e.plugins[t];
        if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)return;
        for (r = 0; r < i.length; r++)e.options[i[r][0]] && i[r][1].apply(e.element, n)
    }}, contains: e.contains, hasScroll: function (t, n) {
        if (e(t).css("overflow") === "hidden")return!1;
        var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1;
        return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
    }, isOverAxis: function (e, t, n) {
        return e > t && e < t + n
    }, isOver: function (t, n, r, i, s, o) {
        return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
    }})
})(jQuery);
(function (e, t) {
    var n = 0, r = Array.prototype.slice, i = e.cleanData;
    e.cleanData = function (t) {
        for (var n = 0, r; (r = t[n]) != null; n++)try {
            e(r).triggerHandler("remove")
        } catch (s) {
        }
        i(t)
    }, e.widget = function (t, n, r) {
        var i, s, o, u, a = t.split(".")[0];
        t = t.split(".")[1], i = a + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function (t) {
            return!!e.data(t, i)
        }, e[a] = e[a] || {}, s = e[a][t], o = e[a][t] = function (e, t) {
            if (!this._createWidget)return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {version: r.version, _proto: e.extend({}, r), _childConstructors: []}), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function (t, i) {
            e.isFunction(i) && (r[t] = function () {
                var e = function () {
                    return n.prototype[t].apply(this, arguments)
                }, r = function (e) {
                    return n.prototype[t].apply(this, e)
                };
                return function () {
                    var t = this._super, n = this._superApply, s;
                    return this._super = e, this._superApply = r, s = i.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }())
        }), o.prototype = e.widget.extend(u, {widgetEventPrefix: u.widgetEventPrefix || t}, r, {constructor: o, namespace: a, widgetName: t, widgetBaseClass: i, widgetFullName: i}), s ? (e.each(s._childConstructors, function (t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function (n) {
        var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
        for (; s < o; s++)for (u in i[s])a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function (n, i) {
        var s = i.prototype.widgetFullName;
        e.fn[n] = function (o) {
            var u = typeof o == "string", a = r.call(arguments, 1), f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function () {
                var r, i = e.data(this, s);
                if (!i)return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t)return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : new i(o, this)
            }), f
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (t, r) {
        r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(this.element, {remove: function (e) {
            e.target === r && this.destroy()
        }}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    }, _destroy: e.noop, widget: function () {
        return this.element
    }, option: function (n, r) {
        var i = n, s, o, u;
        if (arguments.length === 0)return e.widget.extend({}, this.options);
        if (typeof n == "string") {
            i = {}, s = n.split("."), n = s.shift();
            if (s.length) {
                o = i[n] = e.widget.extend({}, this.options[n]);
                for (u = 0; u < s.length - 1; u++)o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                n = s.pop();
                if (r === t)return o[n] === t ? null : o[n];
                o[n] = r
            } else {
                if (r === t)return this.options[n] === t ? null : this.options[n];
                i[n] = r
            }
        }
        return this._setOptions(i), this
    }, _setOptions: function (e) {
        var t;
        for (t in e)this._setOption(t, e[t]);
        return this
    }, _setOption: function (e, t) {
        return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _on: function (t, n) {
        var r, i = this;
        n ? (t = r = e(t), this.bindings = this.bindings.add(t)) : (n = t, t = this.element, r = this.widget()), e.each(n, function (n, s) {
            function o() {
                if (i.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))return;
                return(typeof s == "string" ? i[s] : s).apply(i, arguments)
            }

            typeof s != "string" && (o.guid = s.guid = s.guid || o.guid || e.guid++);
            var u = n.match(/^(\w+)\s*(.*)$/), a = u[1] + i.eventNamespace, f = u[2];
            f ? r.delegate(f, a, o) : t.bind(a, o)
        })
    }, _off: function (e, t) {
        t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    }, _delay: function (e, t) {
        function n() {
            return(typeof e == "string" ? r[e] : e).apply(r, arguments)
        }

        var r = this;
        return setTimeout(n, t || 0)
    }, _hoverable: function (t) {
        this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function (t) {
            e(t.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (t) {
            e(t.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (t) {
        this.focusable = this.focusable.add(t), this._on(t, {focusin: function (t) {
            e(t.currentTarget).addClass("ui-state-focus")
        }, focusout: function (t) {
            e(t.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (t, n, r) {
        var i, s, o = this.options[t];
        r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
        if (s)for (i in s)i in n || (n[i] = s[i]);
        return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
    }}, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, n) {
        e.Widget.prototype["_" + t] = function (r, i, s) {
            typeof i == "string" && (i = {effect: i});
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {duration: i}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function () {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
})(jQuery);
(function (e, t) {
    var n = !1;
    e(document).mouseup(function (e) {
        n = !1
    }), e.widget("ui.mouse", {version: "1.9.1", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
        var t = this;
        this.element.bind("mousedown." + this.widgetName,function (e) {
            return t._mouseDown(e)
        }).bind("click." + this.widgetName, function (n) {
            if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
        }), this.started = !1
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    }, _mouseDown: function (t) {
        if (n)return;
        this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
        if (!i || s || !this._mouseCapture(t))return!0;
        this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
            r.mouseDelayMet = !0
        }, this.options.delay));
        if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
            this._mouseStarted = this._mouseStart(t) !== !1;
            if (!this._mouseStarted)return t.preventDefault(), !0
        }
        return!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
            return r._mouseMove(e)
        }, this._mouseUpDelegate = function (e) {
            return r._mouseUp(e)
        }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
    }, _mouseMove: function (t) {
        return!e.ui.ie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
    }, _mouseUp: function (t) {
        return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
    }, _mouseDistanceMet: function (e) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    }, _mouseDelayMet: function (e) {
        return this.mouseDelayMet
    }, _mouseStart: function (e) {
    }, _mouseDrag: function (e) {
    }, _mouseStop: function (e) {
    }, _mouseCapture: function (e) {
        return!0
    }})
})(jQuery);
(function (e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {version: "1.9.1", widgetEventPrefix: "slide", options: {animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null}, _create: function () {
        var t, r, i = this.options, s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", u = [];
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && i.values.length !== 2 && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (i.range === "min" || i.range === "max" ? " ui-slider-range-" + i.range : ""))), r = i.values && i.values.length || 1;
        for (t = s.length; t < r; t++)u.push(o);
        this.handles = s.add(e(u.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
            e.preventDefault()
        }).mouseenter(function () {
            i.disabled || e(this).addClass("ui-state-hover")
        }).mouseleave(function () {
            e(this).removeClass("ui-state-hover")
        }).focus(function () {
            i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
        }).blur(function () {
            e(this).removeClass("ui-state-focus")
        }), this.handles.each(function (t) {
            e(this).data("ui-slider-handle-index", t)
        }), this._on(this.handles, {keydown: function (t) {
            var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
            switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                case e.ui.keyCode.END:
                case e.ui.keyCode.PAGE_UP:
                case e.ui.keyCode.PAGE_DOWN:
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    t.preventDefault();
                    if (!this._keySliding) {
                        this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                        if (r === !1)return
                    }
            }
            o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
            switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                    s = this._valueMin();
                    break;
                case e.ui.keyCode.END:
                    s = this._valueMax();
                    break;
                case e.ui.keyCode.PAGE_UP:
                    s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                    if (i === this._valueMax())return;
                    s = this._trimAlignValue(i + o);
                    break;
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (i === this._valueMin())return;
                    s = this._trimAlignValue(i - o)
            }
            this._slide(t, u, s)
        }, keyup: function (t) {
            var n = e(t.target).data("ui-slider-handle-index");
            this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
        }}), this._refreshValue(), this._animateOff = !1
    }, _destroy: function () {
        this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    }, _mouseCapture: function (t) {
        var n, r, i, s, o, u, a, f, l = this, c = this.options;
        return c.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), n = {x: t.pageX, y: t.pageY}, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
            var n = Math.abs(r - l.values(t));
            i > n && (i = n, s = e(this), o = t)
        }), c.range === !0 && this.values(1) === c.min && (o += 1, s = e(this.handles[o])), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = f ? {left: 0, top: 0} : {left: t.pageX - a.left - s.width() / 2, top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
    }, _mouseStart: function () {
        return!0
    }, _mouseDrag: function (e) {
        var t = {x: e.pageX, y: e.pageY}, n = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, n), !1
    }, _mouseStop: function (e) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    }, _detectOrientation: function () {
        this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
    }, _normValueFromMouse: function (e) {
        var t, n, r, i, s;
        return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
    }, _start: function (e, t) {
        var n = {handle: this.handles[t], value: this.value()};
        return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
    }, _slide: function (e, t, n) {
        var r, i, s;
        this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {handle: this.handles[t], value: n, values: i}), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {handle: this.handles[t], value: n}), s !== !1 && this.value(n))
    }, _stop: function (e, t) {
        var n = {handle: this.handles[t], value: this.value()};
        this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
    }, _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
            var n = {handle: this.handles[t], value: this.value()};
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
        }
    }, value: function (e) {
        if (arguments.length) {
            this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
            return
        }
        return this._value()
    }, values: function (t, n) {
        var r, i, s;
        if (arguments.length > 1) {
            this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
            return
        }
        if (!arguments.length)return this._values();
        if (!e.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(t) : this.value();
        r = this.options.values, i = arguments[0];
        for (s = 0; s < r.length; s += 1)r[s] = this._trimAlignValue(i[s]), this._change(null, s);
        this._refreshValue()
    }, _setOption: function (t, n) {
        var r, i = 0;
        e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
        switch (t) {
            case"disabled":
                n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case"orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case"value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case"values":
                this._animateOff = !0, this._refreshValue();
                for (r = 0; r < i; r += 1)this._change(null, r);
                this._animateOff = !1;
                break;
            case"min":
            case"max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1
        }
    }, _value: function () {
        var e = this.options.value;
        return e = this._trimAlignValue(e), e
    }, _values: function (e) {
        var t, n, r;
        if (arguments.length)return t = this.options.values[e], t = this._trimAlignValue(t), t;
        n = this.options.values.slice();
        for (r = 0; r < n.length; r += 1)n[r] = this._trimAlignValue(n[r]);
        return n
    }, _trimAlignValue: function (e) {
        if (e <= this._valueMin())return this._valueMin();
        if (e >= this._valueMax())return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1, n = (e - this._valueMin()) % t, r = e - n;
        return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
    }, _valueMin: function () {
        return this.options.min
    }, _valueMax: function () {
        return this.options.max
    }, _refreshValue: function () {
        var t, n, r, i, s, o = this.options.range, u = this.options, a = this, f = this._animateOff ? !1 : u.animate, l = {};
        this.options.values && this.options.values.length ? this.handles.each(function (r) {
            n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({left: n + "%"}, u.animate), r === 1 && a.range[f ? "animate" : "css"]({width: n - t + "%"}, {queue: !1, duration: u.animate})) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({bottom: n + "%"}, u.animate), r === 1 && a.range[f ? "animate" : "css"]({height: n - t + "%"}, {queue: !1, duration: u.animate}))), t = n
        }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({width: n + "%"}, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({width: 100 - n + "%"}, {queue: !1, duration: u.animate}), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({height: n + "%"}, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({height: 100 - n + "%"}, {queue: !1, duration: u.animate}))
    }})
})(jQuery);
jQuery.effects || function (e, t) {
    var n = e.uiBackCompat !== !1, r = "ui-effects-";
    e.effects = {effect: {}}, function (t, n) {
        function p(e, t, n) {
            var r = a[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }

        function d(e) {
            var n = o(), r = n._rgba = [];
            return e = e.toLowerCase(), h(s, function (t, i) {
                var s, o = i.re.exec(e), a = o && i.parse(o), f = i.space || "rgba";
                if (a)return s = n[f](a), n[u[f].cache] = s[u[f].cache], r = n._rgba = s._rgba, !1
            }), r.length ? (r.join() === "0,0,0,0" && t.extend(r, c.transparent), n) : c[e]
        }

        function v(e, t, n) {
            return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }

        var r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), i = /^([\-+])=\s*(\d+\.?\d*)/, s = [
            {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function (e) {
                return[e[1], e[2], e[3], e[4]]
            }},
            {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function (e) {
                return[e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }},
            {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                return[parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }},
            {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                return[parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }},
            {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (e) {
                return[e[1], e[2] / 100, e[3] / 100, e[4]]
            }}
        ], o = t.Color = function (e, n, r, i) {
            return new t.Color.fn.parse(e, n, r, i)
        }, u = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, a = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, f = o.support = {}, l = t("<p>")[0], c, h = t.each;
        l.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = l.style.backgroundColor.indexOf("rgba") > -1, h(u, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
        }), o.fn = t.extend(o.prototype, {parse: function (r, i, s, a) {
            if (r === n)return this._rgba = [null, null, null, null], this;
            if (r.jquery || r.nodeType)r = t(r).css(i), i = n;
            var f = this, l = t.type(r), v = this._rgba = [];
            i !== n && (r = [r, i, s, a], l = "array");
            if (l === "string")return this.parse(d(r) || c._default);
            if (l === "array")return h(u.rgba.props, function (e, t) {
                v[t.idx] = p(r[t.idx], t)
            }), this;
            if (l === "object")return r instanceof o ? h(u, function (e, t) {
                r[t.cache] && (f[t.cache] = r[t.cache].slice())
            }) : h(u, function (t, n) {
                var i = n.cache;
                h(n.props, function (e, t) {
                    if (!f[i] && n.to) {
                        if (e === "alpha" || r[e] == null)return;
                        f[i] = n.to(f._rgba)
                    }
                    f[i][t.idx] = p(r[e], t, !0)
                }), f[i] && e.inArray(null, f[i].slice(0, 3)) < 0 && (f[i][3] = 1, n.from && (f._rgba = n.from(f[i])))
            }), this
        }, is: function (e) {
            var t = o(e), n = !0, r = this;
            return h(u, function (e, i) {
                var s, o = t[i.cache];
                return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], h(i.props, function (e, t) {
                    if (o[t.idx] != null)return n = o[t.idx] === s[t.idx], n
                })), n
            }), n
        }, _space: function () {
            var e = [], t = this;
            return h(u, function (n, r) {
                t[r.cache] && e.push(n)
            }), e.pop()
        }, transition: function (e, t) {
            var n = o(e), r = n._space(), i = u[r], s = this.alpha() === 0 ? o("transparent") : this, f = s[i.cache] || i.to(s._rgba), l = f.slice();
            return n = n[i.cache], h(i.props, function (e, r) {
                var i = r.idx, s = f[i], o = n[i], u = a[r.type] || {};
                if (o === null)return;
                s === null ? l[i] = o : (u.mod && (o - s > u.mod / 2 ? s += u.mod : s - o > u.mod / 2 && (s -= u.mod)), l[i] = p((o - s) * t + s, r))
            }), this[r](l)
        }, blend: function (e) {
            if (this._rgba[3] === 1)return this;
            var n = this._rgba.slice(), r = n.pop(), i = o(e)._rgba;
            return o(t.map(n, function (e, t) {
                return(1 - r) * i[t] + r * e
            }))
        }, toRgbaString: function () {
            var e = "rgba(", n = t.map(this._rgba, function (e, t) {
                return e == null ? t > 2 ? 1 : 0 : e
            });
            return n[3] === 1 && (n.pop(), e = "rgb("), e + n.join() + ")"
        }, toHslaString: function () {
            var e = "hsla(", n = t.map(this.hsla(), function (e, t) {
                return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
            });
            return n[3] === 1 && (n.pop(), e = "hsl("), e + n.join() + ")"
        }, toHexString: function (e) {
            var n = this._rgba.slice(), r = n.pop();
            return e && n.push(~~(r * 255)), "#" + t.map(n,function (e) {
                return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
            }).join("")
        }, toString: function () {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }}), o.fn.parse.prototype = o.fn, u.hsla.to = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null)return[null, null, null, e[3]];
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }, u.hsla.from = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null)return[null, null, null, e[3]];
            var t = e[0] / 360, n = e[1], r = e[2], i = e[3], s = r <= .5 ? r * (1 + n) : r + n - r * n, o = 2 * r - s;
            return[Math.round(v(o, s, t + 1 / 3) * 255), Math.round(v(o, s, t) * 255), Math.round(v(o, s, t - 1 / 3) * 255), i]
        }, h(u, function (e, r) {
            var s = r.props, u = r.cache, a = r.to, f = r.from;
            o.fn[e] = function (e) {
                a && !this[u] && (this[u] = a(this._rgba));
                if (e === n)return this[u].slice();
                var r, i = t.type(e), l = i === "array" || i === "object" ? e : arguments, c = this[u].slice();
                return h(s, function (e, t) {
                    var n = l[i === "object" ? e : t.idx];
                    n == null && (n = c[t.idx]), c[t.idx] = p(n, t)
                }), f ? (r = o(f(c)), r[u] = c, r) : o(c)
            }, h(s, function (n, r) {
                if (o.fn[n])return;
                o.fn[n] = function (s) {
                    var o = t.type(s), u = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e, a = this[u](), f = a[r.idx], l;
                    return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = t.type(s)), s == null && r.empty ? this : (o === "string" && (l = i.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[r.idx] = s, this[u](a)))
                }
            })
        }), h(r, function (e, n) {
            t.cssHooks[n] = {set: function (e, r) {
                var i, s, u = "";
                if (t.type(r) !== "string" || (i = d(r))) {
                    r = o(i || r);
                    if (!f.rgba && r._rgba[3] !== 1) {
                        s = n === "backgroundColor" ? e.parentNode : e;
                        while ((u === "" || u === "transparent") && s && s.style)try {
                            u = t.css(s, "backgroundColor"), s = s.parentNode
                        } catch (a) {
                        }
                        r = r.blend(u && u !== "transparent" ? u : "_default")
                    }
                    r = r.toRgbaString()
                }
                try {
                    e.style[n] = r
                } catch (l) {
                }
            }}, t.fx.step[n] = function (e) {
                e.colorInit || (e.start = o(e.elem, n), e.end = o(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
            }
        }), t.cssHooks.borderColor = {expand: function (e) {
            var t = {};
            return h(["Top", "Right", "Bottom", "Left"], function (n, r) {
                t["border" + r + "Color"] = e
            }), t
        }}, c = t.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
    }(jQuery), function () {
        function i() {
            var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, n = {}, r, i;
            if (t && t.length && t[0] && t[t[0]]) {
                i = t.length;
                while (i--)r = t[i], typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
            } else for (r in t)typeof t[r] == "string" && (n[r] = t[r]);
            return n
        }

        function s(t, n) {
            var i = {}, s, o;
            for (s in n)o = n[s], t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
            return i
        }

        var n = ["add", "remove", "toggle"], r = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, n) {
            e.fx.step[n] = function (e) {
                if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr)jQuery.style(e.elem, n, e.end), e.setAttr = !0
            }
        }), e.effects.animateClass = function (t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function () {
                var r = e(this), o = r.attr("class") || "", u, f = a.children ? r.find("*").andSelf() : r;
                f = f.map(function () {
                    var t = e(this);
                    return{el: t, start: i.call(this)}
                }), u = function () {
                    e.each(n, function (e, n) {
                        t[n] && r[n + "Class"](t[n])
                    })
                }, u(), f = f.map(function () {
                    return this.end = i.call(this.el[0]), this.diff = s(this.start, this.end), this
                }), r.attr("class", o), f = f.map(function () {
                    var t = this, n = e.Deferred(), r = jQuery.extend({}, a, {queue: !1, complete: function () {
                        n.resolve(t)
                    }});
                    return this.el.animate(this.diff, r), n.promise()
                }), e.when.apply(e, f.get()).done(function () {
                    u(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), a.complete.call(r[0])
                })
            })
        }, e.fn.extend({_addClass: e.fn.addClass, addClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.call(this, {add: t}, n, r, i) : this._addClass(t)
        }, _removeClass: e.fn.removeClass, removeClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.call(this, {remove: t}, n, r, i) : this._removeClass(t)
        }, _toggleClass: e.fn.toggleClass, toggleClass: function (n, r, i, s, o) {
            return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {add: n} : {remove: n}, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {toggle: n}, r, i, s)
        }, switchClass: function (t, n, r, i, s) {
            return e.effects.animateClass.call(this, {add: n, remove: t}, r, i, s)
        }})
    }(), function () {
        function i(t, n, r, i) {
            e.isPlainObject(t) && (n = t, t = t.effect), t = {effect: t}, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
            if (typeof n == "number" || e.fx.speeds[n])i = r, r = n, n = {};
            return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
        }

        function s(t) {
            return!t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
        }

        e.extend(e.effects, {version: "1.9.1", save: function (e, t) {
            for (var n = 0; n < t.length; n++)t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
        }, restore: function (e, n) {
            var i, s;
            for (s = 0; s < n.length; s++)n[s] !== null && (i = e.data(r + n[s]), i === t && (i = ""), e.css(n[s], i))
        }, setMode: function (e, t) {
            return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
        }, getBaseline: function (e, t) {
            var n, r;
            switch (e[0]) {
                case"top":
                    n = 0;
                    break;
                case"middle":
                    n = .5;
                    break;
                case"bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
            }
            switch (e[1]) {
                case"left":
                    r = 0;
                    break;
                case"center":
                    r = .5;
                    break;
                case"right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
            }
            return{x: r, y: n}
        }, createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper"))return t.parent();
            var n = {width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float")}, r = e("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), i = {width: t.width(), height: t.height()}, s = document.activeElement;
            try {
                s.id
            } catch (o) {
                s = document.body
            }
            return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({position: "relative"}), t.css({position: "relative"})) : (e.extend(n, {position: t.css("position"), zIndex: t.css("z-index")}), e.each(["top", "left", "bottom", "right"], function (e, r) {
                n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
            }), t.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), t.css(i), r.css(n).show()
        }, removeWrapper: function (t) {
            var n = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
        }, setTransition: function (t, n, r, i) {
            return i = i || {}, e.each(n, function (e, n) {
                var s = t.cssUnit(n);
                s[0] > 0 && (i[n] = s[0] * r + s[1])
            }), i
        }}), e.fn.extend({effect: function () {
            function a(n) {
                function u() {
                    e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n()
                }

                var r = e(this), i = t.complete, s = t.mode;
                (r.is(":hidden") ? s === "hide" : s === "show") ? u() : o.call(r[0], t, u)
            }

            var t = i.apply(this, arguments), r = t.mode, s = t.queue, o = e.effects.effect[t.effect], u = !o && n && e.effects[t.effect];
            return e.fx.off || !o && !u ? r ? this[r](t.duration, t.complete) : this.each(function () {
                t.complete && t.complete.call(this)
            }) : o ? s === !1 ? this.each(a) : this.queue(s || "fx", a) : u.call(this, {options: t, duration: t.duration, callback: t.complete, mode: t.mode})
        }, _show: e.fn.show, show: function (e) {
            if (s(e))return this._show.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t.mode = "show", this.effect.call(this, t)
        }, _hide: e.fn.hide, hide: function (e) {
            if (s(e))return this._hide.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t.mode = "hide", this.effect.call(this, t)
        }, __toggle: e.fn.toggle, toggle: function (t) {
            if (s(t) || typeof t == "boolean" || e.isFunction(t))return this.__toggle.apply(this, arguments);
            var n = i.apply(this, arguments);
            return n.mode = "toggle", this.effect.call(this, n)
        }, cssUnit: function (t) {
            var n = this.css(t), r = [];
            return e.each(["em", "px", "%", "pt"], function (e, t) {
                n.indexOf(t) > 0 && (r = [parseFloat(n), t])
            }), r
        }})
    }(), function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
            t[n] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {Sine: function (e) {
            return 1 - Math.cos(e * Math.PI / 2)
        }, Circ: function (e) {
            return 1 - Math.sqrt(1 - e * e)
        }, Elastic: function (e) {
            return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
        }, Back: function (e) {
            return e * e * (3 * e - 2)
        }, Bounce: function (e) {
            var t, n = 4;
            while (e < ((t = Math.pow(2, --n)) - 1) / 11);
            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
        }}), e.each(t, function (t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function (e) {
                return 1 - n(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    }()
}(jQuery);
try {
    window.FB || (function (h) {
        var k = h, i = h.document;
        var f = h.setTimeout, g = h.setInterval;
        var c = 0;

        function a() {
        }

        var d, b;
        (function (m) {
            var l = {}, o = {}, n = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"];
            d = function (w, v) {
                if (o.hasOwnProperty(w)) {
                    return o[w]
                }
                if (!l.hasOwnProperty(w)) {
                    if (v) {
                        return null
                    }
                    throw new Error("Module " + w + " has not been defined")
                }
                var u = l[w], t = u.deps, s = t.length, r, q = [];
                for (var p = 0; p < s; p++) {
                    switch (t[p]) {
                        case"module":
                            r = u;
                            break;
                        case"exports":
                            r = u.exports;
                            break;
                        case"global":
                            r = m;
                            break;
                        case"require":
                            r = d;
                            break;
                        case"requireDynamic":
                            r = d;
                            break;
                        case"requireLazy":
                            r = null;
                            break;
                        default:
                            r = d(t[p])
                    }
                    q.push(r)
                }
                u.factory.apply(m, q);
                o[w] = u.exports;
                return u.exports
            };
            b = function (s, r, q, p) {
                switch (typeof q) {
                    case"function":
                        l[s] = {factory: q, deps: n.concat(r), exports: {}};
                        if (p === 3) {
                            d(s)
                        }
                        break;
                    case"object":
                        o[s] = q;
                        break;
                    default:
                        throw new TypeError("Wrong type for factory object")
                }
            }
        })(this);
        var j = function () {
            b("ES5ArrayPrototype", [], function (m, l, r, q, p, o) {
                var n = {};
                n.map = function (w, v) {
                    if (typeof w != "function") {
                        throw new TypeError()
                    }
                    var u, t = this.length, s = new Array(t);
                    for (u = 0; u < t; ++u) {
                        if (u in this) {
                            s[u] = w.call(v, this[u], u, this)
                        }
                    }
                    return s
                };
                n.forEach = function (t, s) {
                    n.map.call(this, t, s)
                };
                n.filter = function (x, w) {
                    if (typeof x != "function") {
                        throw new TypeError()
                    }
                    var v, u, t = this.length, s = [];
                    for (v = 0; v < t; ++v) {
                        if (v in this) {
                            u = this[v];
                            if (x.call(w, u, v, this)) {
                                s.push(u)
                            }
                        }
                    }
                    return s
                };
                n.every = function (w, v) {
                    if (typeof w != "function") {
                        throw new TypeError()
                    }
                    var u = new Object(this), t = u.length;
                    for (var s = 0; s < t; s++) {
                        if (s in u) {
                            if (!w.call(v, u[s], s, u)) {
                                return false
                            }
                        }
                    }
                    return true
                };
                n.some = function (w, v) {
                    if (typeof w != "function") {
                        throw new TypeError()
                    }
                    var u = new Object(this), t = u.length;
                    for (var s = 0; s < t; s++) {
                        if (s in u) {
                            if (w.call(v, u[s], s, u)) {
                                return true
                            }
                        }
                    }
                    return false
                };
                n.indexOf = function (u, t) {
                    var s = this.length;
                    t |= 0;
                    if (t < 0) {
                        t += s
                    }
                    for (; t < s; t++) {
                        if (t in this && this[t] === u) {
                            return t
                        }
                    }
                    return -1
                };
                p.exports = n
            });
            b("ES5FunctionPrototype", [], function (m, l, r, q, p, o) {
                var n = {};
                n.bind = function (w) {
                    if (typeof this != "function") {
                        throw new TypeError("Bind must be called on a function")
                    }
                    var v = this, u = Array.prototype.slice.call(arguments, 1);

                    function t() {
                        return v.apply(w, u.concat(Array.prototype.slice.call(arguments)))
                    }

                    t.displayName = "bound:" + (v.displayName || v.name || "(?)");
                    t.toString = function s() {
                        return"bound: " + v
                    };
                    return t
                };
                p.exports = n
            });
            b("ES5StringPrototype", [], function (m, l, r, q, p, o) {
                var n = {};
                n.trim = function () {
                    if (this == null) {
                        throw new TypeError("String.prototype.trim called on null or undefined")
                    }
                    return String.prototype.replace.call(this, /^\s+|\s+$/g, "")
                };
                p.exports = n
            });
            b("ES5Array", [], function (m, l, r, q, p, o) {
                var n = {};
                n.isArray = function (s) {
                    return Object.prototype.toString.call(s) == "[object Array]"
                };
                p.exports = n
            });
            b("ES5Object", [], function (m, l, r, q, p, o) {
                var n = {};
                n.create = function (u) {
                    var t = typeof u;
                    if (t != "object" && t != "function") {
                        throw new TypeError("Object prototype may only be a Object or null")
                    }
                    var s = new Function();
                    s.prototype = u;
                    return new s()
                };
                n.keys = function (x) {
                    var w = typeof x;
                    if (w != "object" && w != "function" || x === null) {
                        throw new TypeError("Object.keys called on non-object")
                    }
                    var v = [];
                    for (var u in x) {
                        if (Object.prototype.hasOwnProperty.call(x, u)) {
                            v.push(u)
                        }
                    }
                    var t = !({toString: true}).propertyIsEnumerable("toString"), s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "prototypeIsEnumerable", "constructor"];
                    if (t) {
                        for (var z = 0; z < s.length; z++) {
                            var y = s[z];
                            if (Object.prototype.hasOwnProperty.call(x, y)) {
                                v.push(y)
                            }
                        }
                    }
                    return v
                };
                p.exports = n
            });
            b("ES5Date", [], function (m, l, r, q, p, o) {
                var n = {};
                n.now = function () {
                    return new Date().getTime()
                };
                p.exports = n
            });
            b("JSON3", [], function (m, l, q, p, o, n) {
                (function () {
                    var X = {}.toString, W, V, U, T = o.exports = {}, S = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', R, Q, O, M, L, K, J, I, H, G, F, E, D, C, Y, A = new Date(-3509827334573292), N, Z, B;
                    try {
                        A = A.getUTCFullYear() == -109252 && A.getUTCMonth() === 0 && A.getUTCDate() == 1 && A.getUTCHours() == 10 && A.getUTCMinutes() == 37 && A.getUTCSeconds() == 6 && A.getUTCMilliseconds() == 708
                    } catch (P) {
                    }
                    if (!A) {
                        N = Math.floor;
                        Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        B = function (s, r) {
                            return Z[r] + 365 * (s - 1970) + N((s - 1969 + (r = +(r > 1))) / 4) - N((s - 1901 + r) / 100) + N((s - 1601 + r) / 400)
                        }
                    }
                    if (typeof JSON == "object" && JSON) {
                        T.stringify = JSON.stringify;
                        T.parse = JSON.parse
                    }
                    if ((R = typeof T.stringify == "function" && !B)) {
                        (A = function () {
                            return 1
                        }).toJSON = A;
                        try {
                            R = T.stringify(0) === "0" && T.stringify(new Number()) === "0" && T.stringify(new String()) == '""' && T.stringify(X) === U && T.stringify(U) === U && T.stringify() === U && T.stringify(A) === "1" && T.stringify([A]) == "[1]" && T.stringify([U]) == "[null]" && T.stringify(null) == "null" && T.stringify([U, X, null]) == "[null,null,null]" && T.stringify({result: [A, true, false, null, "\0\b\n\f\r\t"]}) == S && T.stringify(null, A) === "1" && T.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && T.stringify(new Date(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && T.stringify(new Date(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && T.stringify(new Date(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && T.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"'
                        } catch (P) {
                            R = false
                        }
                    }
                    if (typeof T.parse == "function") {
                        try {
                            if (T.parse("0") === 0 && !T.parse(false)) {
                                A = T.parse(S);
                                if ((K = A.A.length == 5 && A.A[0] == 1)) {
                                    try {
                                        K = !T.parse('"\t"')
                                    } catch (P) {
                                    }
                                    if (K) {
                                        try {
                                            K = T.parse("01") != 1
                                        } catch (P) {
                                        }
                                    }
                                }
                            }
                        } catch (P) {
                            K = false
                        }
                    }
                    A = S = null;
                    if (!R || !K) {
                        if (!(W = {}.hasOwnProperty)) {
                            W = function (t) {
                                var r = {}, s;
                                if ((r.__proto__ = null, r.__proto__ = {toString: 1}, r).toString != X) {
                                    W = function (u) {
                                        var v = this.__proto__, w = u in (this.__proto__ = null, this);
                                        this.__proto__ = v;
                                        return w
                                    }
                                } else {
                                    s = r.constructor;
                                    W = function (u) {
                                        var v = (this.constructor || s).prototype;
                                        return u in this && !(u in v && this[u] === v[u])
                                    }
                                }
                                r = null;
                                return W.call(this, t)
                            }
                        }
                        V = function (w, r) {
                            var s = 0, t, u, v, x;
                            (t = function () {
                                this.valueOf = 0
                            }).prototype.valueOf = 0;
                            u = new t();
                            for (v in u) {
                                if (W.call(u, v)) {
                                    s++
                                }
                            }
                            t = u = null;
                            if (!s) {
                                u = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                x = function (y, z) {
                                    var aa = X.call(y) == "[object Function]", ab, ac;
                                    for (ab in y) {
                                        if (!(aa && ab == "prototype") && W.call(y, ab)) {
                                            z(ab)
                                        }
                                    }
                                    for (ac = u.length; ab = u[--ac]; W.call(y, ab) && z(ab)) {
                                    }
                                }
                            } else {
                                if (s == 2) {
                                    x = function (y, z) {
                                        var aa = {}, ab = X.call(y) == "[object Function]", ac;
                                        for (ac in y) {
                                            if (!(ab && ac == "prototype") && !W.call(aa, ac) && (aa[ac] = 1) && W.call(y, ac)) {
                                                z(ac)
                                            }
                                        }
                                    }
                                } else {
                                    x = function (y, z) {
                                        var aa = X.call(y) == "[object Function]", ab, ac;
                                        for (ab in y) {
                                            if (!(aa && ab == "prototype") && W.call(y, ab) && !(ac = ab === "constructor")) {
                                                z(ab)
                                            }
                                        }
                                        if (ac || W.call(y, (ab = "constructor"))) {
                                            z(ab)
                                        }
                                    }
                                }
                            }
                            return x(w, r)
                        };
                        if (!R) {
                            Q = {"\\": "\\\\", '"': '\\"', "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t"};
                            O = function (s, r) {
                                return("000000" + (r || 0)).slice(-s)
                            };
                            M = function (u) {
                                var r = '"', s = 0, t;
                                for (; t = u.charAt(s); s++) {
                                    r += '\\"\b\f\n\r\t'.indexOf(t) > -1 ? Q[t] : t < " " ? "\\u00" + O(2, t.charCodeAt(0).toString(16)) : t
                                }
                                return r + '"'
                            };
                            L = function (ao, y, ah, r, z, ai, s) {
                                var aa = y[ao], aj, t, ac, ak, u, ad, al, v, ae, am, w, af, an, x, ag;
                                if (typeof aa == "object" && aa) {
                                    aj = X.call(aa);
                                    if (aj == "[object Date]" && !W.call(aa, "toJSON")) {
                                        if (aa > -1 / 0 && aa < 1 / 0) {
                                            if (B) {
                                                ak = N(aa / 86400000);
                                                for (t = N(ak / 365.2425) + 1970 - 1; B(t + 1, 0) <= ak; t++) {
                                                }
                                                for (ac = N((ak - B(t, 0)) / 30.42); B(t, ac + 1) <= ak; ac++) {
                                                }
                                                ak = 1 + ak - B(t, ac);
                                                u = (aa % 86400000 + 86400000) % 86400000;
                                                ad = N(u / 3600000) % 24;
                                                al = N(u / 60000) % 60;
                                                v = N(u / 1000) % 60;
                                                ae = u % 1000
                                            } else {
                                                t = aa.getUTCFullYear();
                                                ac = aa.getUTCMonth();
                                                ak = aa.getUTCDate();
                                                ad = aa.getUTCHours();
                                                al = aa.getUTCMinutes();
                                                v = aa.getUTCSeconds();
                                                ae = aa.getUTCMilliseconds()
                                            }
                                            aa = (t <= 0 || t >= 10000 ? (t < 0 ? "-" : "+") + O(6, t < 0 ? -t : t) : O(4, t)) + "-" + O(2, ac + 1) + "-" + O(2, ak) + "T" + O(2, ad) + ":" + O(2, al) + ":" + O(2, v) + "." + O(3, ae) + "Z"
                                        } else {
                                            aa = null
                                        }
                                    } else {
                                        if (typeof aa.toJSON == "function" && ((aj != "[object Number]" && aj != "[object String]" && aj != "[object Array]") || W.call(aa, "toJSON"))) {
                                            aa = aa.toJSON(ao)
                                        }
                                    }
                                }
                                if (ah) {
                                    aa = ah.call(y, ao, aa)
                                }
                                if (aa === null) {
                                    return"null"
                                }
                                aj = X.call(aa);
                                if (aj == "[object Boolean]") {
                                    return"" + aa
                                } else {
                                    if (aj == "[object Number]") {
                                        return aa > -1 / 0 && aa < 1 / 0 ? "" + aa : "null"
                                    } else {
                                        if (aj == "[object String]") {
                                            return M(aa)
                                        }
                                    }
                                }
                                if (typeof aa == "object") {
                                    for (an = s.length; an--;) {
                                        if (s[an] === aa) {
                                            throw TypeError()
                                        }
                                    }
                                    s.push(aa);
                                    am = [];
                                    x = ai;
                                    ai += z;
                                    if (aj == "[object Array]") {
                                        for (af = 0, an = aa.length; af < an; ag || (ag = true), af++) {
                                            w = L(af, aa, ah, r, z, ai, s);
                                            am.push(w === U ? "null" : w)
                                        }
                                        return ag ? (z ? "[\n" + ai + am.join(",\n" + ai) + "\n" + x + "]" : ("[" + am.join(",") + "]")) : "[]"
                                    } else {
                                        V(r || aa, function (ab) {
                                            var ap = L(ab, aa, ah, r, z, ai, s);
                                            if (ap !== U) {
                                                am.push(M(ab) + ":" + (z ? " " : "") + ap)
                                            }
                                            ag || (ag = true)
                                        });
                                        return ag ? (z ? "{\n" + ai + am.join(",\n" + ai) + "\n" + x + "}" : ("{" + am.join(",") + "}")) : "{}"
                                    }
                                    s.pop()
                                }
                            };
                            T.stringify = function (z, w, t) {
                                var y, v, s, x, u, r;
                                if (typeof w == "function" || typeof w == "object" && w) {
                                    if (X.call(w) == "[object Function]") {
                                        v = w
                                    } else {
                                        if (X.call(w) == "[object Array]") {
                                            s = {};
                                            for (x = 0, u = w.length; x < u; r = w[x++], ((X.call(r) == "[object String]" || X.call(r) == "[object Number]") && (s[r] = 1))) {
                                            }
                                        }
                                    }
                                }
                                if (t) {
                                    if (X.call(t) == "[object Number]") {
                                        if ((t -= t % 1) > 0) {
                                            for (y = "", t > 10 && (t = 10); y.length < t; y += " ") {
                                            }
                                        }
                                    } else {
                                        if (X.call(t) == "[object String]") {
                                            y = t.length <= 10 ? t : t.slice(0, 10)
                                        }
                                    }
                                }
                                return L("", (r = {}, r[""] = z, r), v, s, y, "", [])
                            }
                        }
                        if (!K) {
                            J = String.fromCharCode;
                            I = {"\\": "\\", '"': '"', "/": "/", b: "\b", t: "\t", n: "\n", f: "\f", r: "\r"};
                            H = function () {
                                C = Y = null;
                                throw SyntaxError()
                            };
                            G = function () {
                                var w = Y, r = w.length, s, t, u, v, x;
                                while (C < r) {
                                    s = w.charAt(C);
                                    if ("\t\r\n ".indexOf(s) > -1) {
                                        C++
                                    } else {
                                        if ("{}[]:,".indexOf(s) > -1) {
                                            C++;
                                            return s
                                        } else {
                                            if (s == '"') {
                                                for (t = "@", C++; C < r;) {
                                                    s = w.charAt(C);
                                                    if (s < " ") {
                                                        H()
                                                    } else {
                                                        if (s == "\\") {
                                                            s = w.charAt(++C);
                                                            if ('\\"/btnfr'.indexOf(s) > -1) {
                                                                t += I[s];
                                                                C++
                                                            } else {
                                                                if (s == "u") {
                                                                    u = ++C;
                                                                    for (v = C + 4; C < v; C++) {
                                                                        s = w.charAt(C);
                                                                        if (!(s >= "0" && s <= "9" || s >= "a" && s <= "f" || s >= "A" && s <= "F")) {
                                                                            H()
                                                                        }
                                                                    }
                                                                    t += J("0x" + w.slice(u, C))
                                                                } else {
                                                                    H()
                                                                }
                                                            }
                                                        } else {
                                                            if (s == '"') {
                                                                break
                                                            }
                                                            t += s;
                                                            C++
                                                        }
                                                    }
                                                }
                                                if (w.charAt(C) == '"') {
                                                    C++;
                                                    return t
                                                }
                                                H()
                                            } else {
                                                u = C;
                                                if (s == "-") {
                                                    x = true;
                                                    s = w.charAt(++C)
                                                }
                                                if (s >= "0" && s <= "9") {
                                                    if (s == "0" && (s = w.charAt(C + 1), s >= "0" && s <= "9")) {
                                                        H()
                                                    }
                                                    x = false;
                                                    for (; C < r && (s = w.charAt(C), s >= "0" && s <= "9"); C++) {
                                                    }
                                                    if (w.charAt(C) == ".") {
                                                        v = ++C;
                                                        for (; v < r && (s = w.charAt(v), s >= "0" && s <= "9"); v++) {
                                                        }
                                                        if (v == C) {
                                                            H()
                                                        }
                                                        C = v
                                                    }
                                                    s = w.charAt(C);
                                                    if (s == "e" || s == "E") {
                                                        s = w.charAt(++C);
                                                        if (s == "+" || s == "-") {
                                                            C++
                                                        }
                                                        for (v = C; v < r && (s = w.charAt(v), s >= "0" && s <= "9"); v++) {
                                                        }
                                                        if (v == C) {
                                                            H()
                                                        }
                                                        C = v
                                                    }
                                                    return +w.slice(u, C)
                                                }
                                                if (x) {
                                                    H()
                                                }
                                                if (w.slice(C, C + 4) == "true") {
                                                    C += 4;
                                                    return true
                                                } else {
                                                    if (w.slice(C, C + 5) == "false") {
                                                        C += 5;
                                                        return false
                                                    } else {
                                                        if (w.slice(C, C + 4) == "null") {
                                                            C += 4;
                                                            return null
                                                        }
                                                    }
                                                }
                                                H()
                                            }
                                        }
                                    }
                                }
                                return"$"
                            };
                            F = function (u) {
                                var r, s, t;
                                if (u == "$") {
                                    H()
                                }
                                if (typeof u == "string") {
                                    if (u.charAt(0) == "@") {
                                        return u.slice(1)
                                    }
                                    if (u == "[") {
                                        r = [];
                                        for (; ; s || (s = true)) {
                                            u = G();
                                            if (u == "]") {
                                                break
                                            }
                                            if (s) {
                                                if (u == ",") {
                                                    u = G();
                                                    if (u == "]") {
                                                        H()
                                                    }
                                                } else {
                                                    H()
                                                }
                                            }
                                            if (u == ",") {
                                                H()
                                            }
                                            r.push(F(u))
                                        }
                                        return r
                                    } else {
                                        if (u == "{") {
                                            r = {};
                                            for (; ; s || (s = true)) {
                                                u = G();
                                                if (u == "}") {
                                                    break
                                                }
                                                if (s) {
                                                    if (u == ",") {
                                                        u = G();
                                                        if (u == "}") {
                                                            H()
                                                        }
                                                    } else {
                                                        H()
                                                    }
                                                }
                                                if (u == "," || typeof u != "string" || u.charAt(0) != "@" || G() != ":") {
                                                    H()
                                                }
                                                r[u.slice(1)] = F(G())
                                            }
                                            return r
                                        }
                                    }
                                    H()
                                }
                                return u
                            };
                            D = function (u, r, s) {
                                var t = E(u, r, s);
                                if (t === U) {
                                    delete u[r]
                                } else {
                                    u[r] = t
                                }
                            };
                            E = function (v, r, s) {
                                var t = v[r], u;
                                if (typeof t == "object" && t) {
                                    if (X.call(t) == "[object Array]") {
                                        for (u = t.length; u--;) {
                                            D(t, u, s)
                                        }
                                    } else {
                                        V(t, function (w) {
                                            D(t, w, s)
                                        })
                                    }
                                }
                                return s.call(v, r, t)
                            };
                            T.parse = function (t, r) {
                                C = 0;
                                Y = t;
                                var s = F(G());
                                if (G() != "$") {
                                    H()
                                }
                                C = Y = null;
                                return r && X.call(r) == "[object Function]" ? E((A = {}, A[""] = s, A), "", r) : s
                            }
                        }
                    }
                }).call(this)
            });
            b("ES5", ["ES5ArrayPrototype", "ES5FunctionPrototype", "ES5StringPrototype", "ES5Array", "ES5Object", "ES5Date", "JSON3"], function (T, S, R, Q, P, O) {
                var N = S("ES5ArrayPrototype"), M = S("ES5FunctionPrototype"), L = S("ES5StringPrototype"), K = S("ES5Array"), J = S("ES5Object"), I = S("ES5Date"), H = S("JSON3"), G = Array.prototype.slice, F = Object.prototype.toString, E = {"JSON.stringify": H.stringify, "JSON.parse": H.parse}, D = {array: N, "function": M, string: L, Object: J, Array: K, Date: I};
                for (var C in D) {
                    if (!D.hasOwnProperty(C)) {
                        continue
                    }
                    var B = D[C], A = C === C.toLowerCase() ? h[C.replace(/^\w/, function (l) {
                        return l.toUpperCase()
                    })].prototype : h[C];
                    for (var z in B) {
                        if (!B.hasOwnProperty(z)) {
                            continue
                        }
                        var y = A[z];
                        E[C + "." + z] = y && /\{\s+\[native code\]\s\}/.test(y) ? y : B[z]
                    }
                }
                function x(l, q, o) {
                    var n = G.call(arguments, 3), p = o ? /\s(.*)\]/.exec(F.call(l).toLowerCase())[1] : l, m = E[p + "." + q] || l[q];
                    if (typeof m === "function") {
                        return m.apply(l, n)
                    }
                }

                P.exports = x
            });
            j = d("ES5");
            return j.apply(null, arguments)
        };
        b("sdk.RuntimeConfig", [], {locale: "en_US", rtl: false});
        b("UrlMapConfig", [], {www: "www.facebook.com", m: "m.facebook.com", connect: "connect.facebook.net", api_https: "api.facebook.com", api_read_https: "api-read.facebook.com", graph_https: "graph.facebook.com", fbcdn_http: "static.ak.fbcdn.net", fbcdn_https: "fbstatic-a.akamaihd.net", cdn_http: "static.ak.facebook.com", cdn_https: "s-static.ak.facebook.com"});
        b("XDConfig", [], {XdUrl: "connect/xd_arbiter.php?version=21", Flash: {path: "https://connect.facebook.net/rsrc.php/v1/yX/r/VpkNidONSDC.swf"}, useCdn: true});
        b("SDKConfig", [], {bustCache: true, tagCountLogRate: 0.01, errorHandling: {rate: 4}, usePluginPipe: true, api: {mode: "warn", whitelist: ["Canvas", "Canvas.Prefetcher", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Data", "Data.process", "Data.query", "Data.query:wait", "Data.waitOn", "Data.waitOn:wait", "Event", "Event.subscribe", "Event.unsubscribe", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.init", "Payment.setSize", "ThirdPartyProvider", "ThirdPartyProvider.init", "ThirdPartyProvider.sendData", "UA", "UA.nativeApp", "XFBML", "XFBML.RecommendationsBar", "XFBML.RecommendationsBar.markRead", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui", "ui:subscribe"]}, initSitevars: {enableMobileComments: 1, iframePermissions: {read_stream: false, manage_mailbox: false, manage_friendlists: false, read_mailbox: false, publish_checkins: true, status_update: true, photo_upload: true, video_upload: true, sms: false, create_event: true, rsvp_event: true, offline_access: true, email: true, xmpp_login: false, create_note: true, share_item: true, export_stream: false, publish_stream: true, publish_likes: true, ads_management: false, contact_email: true, access_private_data: false, read_insights: false, read_requests: false, read_friendlists: true, manage_pages: false, physical_login: false, manage_groups: false, read_deals: false}}});
        b("CssConfig", [], {rules: '.fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_invisible{display:none}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\\9;right:7px\\9}\n.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}\n.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}\n.fb_dialog_close_icon:hover{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif)}\n.fb_dialog_close_icon:active{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif)}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n/* \u0040noflip */\n.fb_dialog_top_left{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}\n/* \u0040noflip */\n.fb_dialog_top_right{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}\n/* \u0040noflip */\n.fb_dialog_bottom_left{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n/* \u0040noflip */\n.fb_dialog_bottom_right{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100\u0025}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100\u0025;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}\n.fb_dialog_content .dialog_title > span{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yd/r/Cou7n-nqK52.gif)\nno-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}\nbody.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100\u0025\n}\n.fb_dialog.fb_dialog_mobile.loading{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ya/r/3rhSv5V8j3o.gif)\nwhite no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}\n.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}\n#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}\n#fb-root #fb_dialog_ipad_overlay.hidden{display:none}\n.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}\n.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}\n.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025\n}\n.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#4966A6),\ncolor-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,\nrgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}\n.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}\n.fb_dialog_content .dialog_content{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/y9/r/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}\n.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}\n#fb_dialog_loader_close{float:left}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}\n.fb_iframe_widget iframe{position:absolute}\n.fb_iframe_widget_lift{z-index:1}\n.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify;vertical-align:text-bottom}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_fluid{display:inline}\n.fb_iframe_widget_fluid span{width:100\u0025}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/y9/r/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_button_simple,\n.fb_button_simple_rtl{background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yH/r/eIpbnVKI9lR.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}\n.fb_button_simple_rtl{background-position:right 0}\n.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}\n.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}\na.fb_button_simple:hover .fb_button_text,\na.fb_button_simple_rtl:hover .fb_button_text,\n.fb_button_simple:hover .fb_button_text,\n.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}\n.fb_button,\n.fb_button_rtl{background:#29447e url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/FGFbc80dUKj.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}\n.fb_button .fb_button_text,\n.fb_button_rtl .fb_button_text{background:#5f78ab url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/FGFbc80dUKj.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}\na.fb_button,\na.fb_button_rtl,\n.fb_button,\n.fb_button_rtl{text-decoration:none}\na.fb_button:active .fb_button_text,\na.fb_button_rtl:active .fb_button_text,\n.fb_button:active .fb_button_text,\n.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}\n.fb_button_xlarge,\n.fb_button_xlarge_rtl{background-position:left -60px;font-size:24px;line-height:30px}\n.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}\na.fb_button_xlarge:active{background-position:left -99px}\n.fb_button_xlarge_rtl{background-position:right -268px}\n.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}\na.fb_button_xlarge_rtl:active{background-position:right -307px}\n.fb_button_large,\n.fb_button_large_rtl{background-position:left -138px;font-size:13px;line-height:16px}\n.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}\na.fb_button_large:active{background-position:left -163px}\n.fb_button_large_rtl{background-position:right -346px}\n.fb_button_large_rtl .fb_button_text{margin-right:25px}\na.fb_button_large_rtl:active{background-position:right -371px}\n.fb_button_medium,\n.fb_button_medium_rtl{background-position:left -188px;font-size:11px;line-height:14px}\na.fb_button_medium:active{background-position:left -210px}\n.fb_button_medium_rtl{background-position:right -396px}\n.fb_button_text_rtl,\n.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}\na.fb_button_medium_rtl:active{background-position:right -418px}\n.fb_button_small,\n.fb_button_small_rtl{background-position:left -232px;font-size:10px;line-height:10px}\n.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}\na.fb_button_small:active,\n.fb_button_small:active{background-position:left -250px}\n.fb_button_small_rtl{background-position:right -440px}\n.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}\na.fb_button_small_rtl:active{background-position:right -458px}\n.fb_share_count_wrapper{position:relative;float:left}\n.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;text-align:center}\n.fb_share_count_inner{background:#e8ebf2;display:block}\n.fb_share_count_right{margin-left:-1px;display:inline-block}\n.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size:10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}\n.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size:22px;border:solid 1px #b0b9ec}\n.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yU/r/bSOHtKbCGYI.png)}\n.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yX/r/i_oIVTKMYsL.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}\n.fb_share_no_count{display:none}\n.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size:10px}\n.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size:11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}\n.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size:13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}\n.fb_share_count_hidden .fb_share_count_nub_top,\n.fb_share_count_hidden .fb_share_count_top,\n.fb_share_count_hidden .fb_share_count_nub_right,\n.fb_share_count_hidden .fb_share_count_right{visibility:hidden}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode=="CSS1Compat"? document.documentElement.scrollTop+"px":body.scrollTop+"px")}\n.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:"lucida grande", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50\u0025 50\u0025;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender\n.FB_Loader{margin-top:0}\n.fbpluginrecommendationsbarleft,\n.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}\n/* \u0040noflip */\n.fbpluginrecommendationsbarleft{left:10px}\n/* \u0040noflip */\n.fbpluginrecommendationsbarright{right:10px}', components: ["fb.css.base", "fb.css.dialog", "fb.css.iframewidget", "fb.css.button", "fb.css.sharebutton", "fb.css.connectbarwidget", "fb.css.edgecommentwidget", "fb.css.sendbuttonformwidget", "fb.css.plugin.recommendationsbar"]});
        b("CanvasPrefetcherConfig", [], {blacklist: [144959615576466], sampleRate: 500});
        b("PluginPipeConfig", [], {threshold: 0, enabledApps: {"209753825810663": 1, "187288694643718": 1}});
        b("ConnectBarConfig", [], {imgs: {buttonUrl: "rsrc.php/v2/yY/r/h_Y6u1wrZPW.png", missingProfileUrl: "rsrc.php/v2/yo/r/UlIqmHJn-SK.gif"}});
        b("ProfilePicConfig", [], {defPicMap: {pic: "rsrc.php/v1/yh/r/C5yt7Cqf3zU.jpg", pic_big: "rsrc.php/v2/yL/r/HsTZSDw4avx.gif", pic_big_with_logo: "rsrc.php/v2/y5/r/SRDCaeCL7hM.gif", pic_small: "rsrc.php/v1/yi/r/odA9sNLrE86.jpg", pic_small_with_logo: "rsrc.php/v2/yD/r/k1xiRXKnlGd.gif", pic_square: "rsrc.php/v2/yo/r/UlIqmHJn-SK.gif", pic_square_with_logo: "rsrc.php/v2/yX/r/9dYJBPDHXwZ.gif", pic_with_logo: "rsrc.php/v2/yu/r/fPPR9f2FJ3t.gif"}});
        b("ApiClientConfig", [], {FlashRequest: {swfUrl: "https://connect.facebook.net/rsrc.php/v1/yr/r/Sa8GHJqdqJn.swf"}});
        b("QueryString", [], function (u, t, s, r, q, p) {
            function o(w) {
                var v = [];
                j(j("Object", "keys", false, w), "forEach", true, function (x) {
                    var y = w[x];
                    if (typeof y === "undefined") {
                        return
                    }
                    if (y === null) {
                        v.push(x);
                        return
                    }
                    v.push(encodeURIComponent(x) + "=" + encodeURIComponent(y))
                });
                return v.join("&")
            }

            function n(x, w) {
                var v = {};
                if (x === "") {
                    return v
                }
                var B = x.split("&");
                for (var A = 0; A < B.length; A++) {
                    var z = B[A].split("=", 2), y = decodeURIComponent(z[0]);
                    if (w && v.hasOwnProperty(y)) {
                        throw new URIError("Duplicate key: " + y)
                    }
                    v[y] = z.length === 2 ? decodeURIComponent(z[1]) : null
                }
                return v
            }

            function m(w, v) {
                return w + (~j(w, "indexOf", true, "?") ? "&" : "?") + (typeof v === "string" ? v : l.encode(v))
            }

            var l = {encode: o, decode: n, appendToUrl: m};
            q.exports = l
        });
        b("copyProperties", [], function (m, l, r, q, p, o) {
            function n(C, B, A, z, y, x, w) {
                C = C || {};
                var v = [B, A, z, y, x], u = 0, t;
                while (v[u]) {
                    t = v[u++];
                    for (var s in t) {
                        C[s] = t[s]
                    }
                    if (t.hasOwnProperty && t.hasOwnProperty("toString") && (typeof t.toString != "undefined") && (C.toString !== t.toString)) {
                        C.toString = t.toString
                    }
                }
                return C
            }

            p.exports = n
        });
        b("ManagedError", [], function (m, l, r, q, p, o) {
            function n(t, s) {
                Error.prototype.constructor.call(this, t);
                this.message = t;
                this.innerError = s
            }

            n.prototype = new Error();
            n.prototype.constructor = n;
            p.exports = n
        });
        b("AssertionError", ["ManagedError"], function (m, l, s, r, q, p) {
            var o = l("ManagedError");

            function n(t) {
                o.prototype.constructor.apply(this, arguments)
            }

            n.prototype = new o();
            n.prototype.constructor = n;
            q.exports = n
        });
        b("sprintf", [], function (m, l, r, q, p, o) {
            function n(u, t) {
                t = Array.prototype.slice.call(arguments, 1);
                var s = 0;
                return u.replace(/%s/g, function (v) {
                    return t[s++]
                })
            }

            p.exports = n
        });
        b("Assert", ["AssertionError", "sprintf"], function (z, y, x, w, v, u) {
            var t = y("AssertionError"), s = y("sprintf");

            function r(m, l) {
                if (!m) {
                    throw new t(l)
                }
                return m
            }

            function q(C, B, A) {
                var m;
                if (B === undefined) {
                    m = "undefined"
                } else {
                    if (B === null) {
                        m = "null"
                    } else {
                        var l = Object.prototype.toString.call(B);
                        m = /\s(\w*)/.exec(l)[1].toLowerCase()
                    }
                }
                r(j(C, "indexOf", true, m) !== -1, A || s("Expression is of type %s, not %s", m, C));
                return B
            }

            function p(A, m, l) {
                r(m instanceof A, l || "Expression not instance of type");
                return m
            }

            function o(m, l) {
                n["is" + m] = l;
                n["maybe" + m] = function (B, A) {
                    if (B != null) {
                        l(B, A)
                    }
                }
            }

            var n = {isInstanceOf: p, isTrue: r, isTruthy: function (m, l) {
                return r(!!m, l)
            }, type: q, define: function (m, l) {
                m = m.substring(0, 1).toUpperCase() + m.substring(1).toLowerCase();
                o(m, function (B, A) {
                    r(l(B), A)
                })
            }};
            j(["Array", "Boolean", "Date", "Function", "Null", "Number", "Object", "Regexp", "String", "Undefined"], "forEach", true, function (l) {
                o(l, j(q, "bind", true, null, l.toLowerCase()))
            });
            v.exports = n
        });
        b("Type", ["copyProperties", "Assert"], function (x, w, v, u, t, s) {
            var r = w("copyProperties"), q = w("Assert");

            function p() {
                var l = this.__mixins;
                if (l) {
                    for (var y = 0; y < l.length; y++) {
                        l[y].apply(this, arguments)
                    }
                }
            }

            function o(l, z) {
                if (z instanceof l) {
                    return true
                }
                if (z instanceof p) {
                    for (var y = 0; y < z.__mixins.length; y++) {
                        if (z.__mixins[y] == l) {
                            return true
                        }
                    }
                }
                return false
            }

            function n(l, B) {
                var A = l.prototype;
                if (!j("Array", "isArray", false, B)) {
                    B = [B]
                }
                for (var z = 0; z < B.length; z++) {
                    var y = B[z];
                    if (typeof y == "function") {
                        A.__mixins.push(y);
                        y = y.prototype
                    }
                    j(j("Object", "keys", false, y), "forEach", true, function (C) {
                        A[C] = y[C]
                    })
                }
            }

            function m(l, B, A) {
                var z = B && B.hasOwnProperty("constructor") ? B.constructor : function () {
                    this.parent.apply(this, arguments)
                };
                q.isFunction(z);
                if (l && l.prototype instanceof p === false) {
                    throw new Error("parent type does not inherit from Type")
                }
                l = l || p;
                var y = new Function();
                y.prototype = l.prototype;
                z.prototype = new y();
                r(z.prototype, B);
                z.prototype.__mixins = l.prototype.__mixins ? Array.prototype.slice.call(l.prototype.__mixins) : [];
                if (A) {
                    n(z, A)
                }
                z.prototype.parent = function () {
                    this.parent = l.prototype.parent;
                    l.apply(this, arguments)
                };
                z.prototype.parentCall = function (C) {
                    return l.prototype[C].apply(this, Array.prototype.slice.call(arguments, 1))
                };
                z.extend = function (D, C) {
                    return m(this, D, C)
                };
                return z
            }

            r(p.prototype, {instanceOf: function (l) {
                return o(l, this)
            }});
            r(p, {extend: function (l, y) {
                return typeof l === "function" ? m.apply(null, arguments) : m(null, l, y)
            }, instanceOf: o});
            t.exports = p
        });
        b("ObservableMixin", [], function (m, l, r, q, p, o) {
            function n() {
                this.__observableEvents = {}
            }

            n.prototype = {inform: function (w) {
                var v = Array.prototype.slice.call(arguments, 1), u = Array.prototype.slice.call(this.getSubscribers(w));
                for (var t = 0; t < u.length; t++) {
                    if (u[t] === null) {
                        continue
                    }
                    try {
                        u[t].apply(this, v)
                    } catch (s) {
                        f(function () {
                            throw s
                        }, 0)
                    }
                }
                return this
            }, getSubscribers: function (s) {
                return this.__observableEvents[s] || (this.__observableEvents[s] = [])
            }, clearSubscribers: function (s) {
                if (s) {
                    this.__observableEvents[s] = []
                }
                return this
            }, clearAllSubscribers: function () {
                this.__observableEvents = {};
                return this
            }, subscribe: function (u, t) {
                var s = this.getSubscribers(u);
                s.push(t);
                return this
            }, unsubscribe: function (v, u) {
                var t = this.getSubscribers(v);
                for (var s = 0; s < t.length; s++) {
                    if (t[s] === u) {
                        t.splice(s, 1);
                        break
                    }
                }
                return this
            }, monitor: function (u, t) {
                if (!t()) {
                    var s = j(function (v) {
                        if (t.apply(t, arguments)) {
                            this.unsubscribe(u, s)
                        }
                    }, "bind", true, this);
                    this.subscribe(u, s)
                }
                return this
            }};
            p.exports = n
        });
        b("sdk.Model", ["Type", "ObservableMixin"], function (t, s, r, q, p, o) {
            var n = s("Type"), m = s("ObservableMixin"), l = n.extend({constructor: function (w) {
                this.parent();
                var v = {}, u = this;
                j(j("Object", "keys", false, w), "forEach", true, function (x) {
                    v[x] = w[x];
                    u["set" + x] = function (y) {
                        if (y === v[x]) {
                            return this
                        }
                        v[x] = y;
                        u.inform(x + ".change", y);
                        return u
                    };
                    u["get" + x] = function () {
                        return v[x]
                    }
                })
            }}, m);
            p.exports = l
        });
        b("sdk.Runtime", ["sdk.Model", "copyProperties", "sdk.RuntimeConfig"], function (v, u, t, s, r, q) {
            var p = u("sdk.Model"), o = t("sdk.RuntimeConfig"), n = u("copyProperties"), m = {UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4}, l = new p({AccessToken: "", ClientID: "", Environment: m.UNKNOWN, Initialized: false, Locale: o.locale, LoginStatus: undefined, Rtl: o.rtl, Scope: undefined, Secure: undefined, UseCookie: false, UserID: "", CookieUserID: ""});
            n(l, {ENVIRONMENTS: m, isEnvironment: function (x) {
                var w = this.getEnvironment();
                return(x | w) === w
            }});
            (function () {
                var w = /app_runner/.test(h.name) ? m.PAGETAB : /iframe_canvas/.test(h.name) ? m.CANVAS : m.UNKNOWN;
                if ((w | m.PAGETAB) === w) {
                    w = w | m.CANVAS
                }
                l.setEnvironment(w)
            })();
            r.exports = l
        });
        b("sdk.Cookie", ["QueryString", "sdk.Runtime"], function (x, w, v, u, t, s) {
            var r = w("QueryString"), q = w("sdk.Runtime"), p = null;

            function o(l, B, A) {
                l = l + q.getClientID();
                var z = p && p !== ".";
                if (z) {
                    i.cookie = l + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;";
                    i.cookie = l + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" + location.hostname + ";"
                }
                var y = new Date(A).toGMTString();
                i.cookie = l + "=" + B + (B && A === 0 ? "" : "; expires=" + y) + "; path=/" + (z ? "; domain=" + p : "")
            }

            function n(l) {
                l = l + q.getClientID();
                var y = new RegExp("\\b" + l + "=([^;]*)\\b");
                return y.test(i.cookie) ? RegExp.$1 : null
            }

            var m = {setDomain: function (l) {
                p = l;
                var z = r.encode({base_domain: p && p !== "." ? p : ""}), y = new Date();
                y.setFullYear(y.getFullYear() + 1);
                o("fbm_", z, y.getTime())
            }, getDomain: function () {
                return p
            }, loadMeta: function () {
                var l = n("fbm_");
                if (l) {
                    var y = r.decode(l);
                    if (!p) {
                        p = y.base_domain
                    }
                    return y
                }
            }, loadSignedRequest: function () {
                return n("fbsr_")
            }, setSignedRequestCookie: function (l, y) {
                if (!l) {
                    throw new Error("Value passed to Cookie.setSignedRequestCookie was empty.")
                }
                o("fbsr_", l, y)
            }, clearSignedRequestCookie: function () {
                o("fbsr_", "", 0)
            }, setRaw: o};
            t.exports = m
        });
        b("guid", [], function (m, l, r, q, p, o) {
            function n() {
                return"f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
            }

            p.exports = n
        });
        b("hasNamePropertyBug", ["guid"], function (u, t, s, r, q, p) {
            var o = t("guid"), n;

            function m() {
                var w = i.createElement("form"), v = w.appendChild(i.createElement("input"));
                v.name = o();
                n = v !== w.elements[v.name];
                w = v = null;
                return n
            }

            function l() {
                return typeof n === "undefined" ? m() : n
            }

            q.exports = l
        });
        b("wrapFunction", [], function (m, l, s, r, q, p) {
            var o = {};

            function n(v, u, t) {
                u = u || "default";
                return function () {
                    var w = u in o ? o[u](v, t) : v;
                    return w.apply(this, arguments)
                }
            }

            n.setWrapper = function (u, t) {
                t = t || "default";
                o[t] = u
            };
            q.exports = n
        });
        b("DOMEventListener", ["wrapFunction"], function (u, t, s, r, q, p) {
            var o = t("wrapFunction"), n, m;
            if (h.addEventListener) {
                n = function (x, w, v) {
                    v.wrapper = o(v, "entry", x + ":" + w);
                    x.addEventListener(w, v.wrapper, false)
                };
                m = function (x, w, v) {
                    x.removeEventListener(w, v.wrapper, false)
                }
            } else {
                if (h.attachEvent) {
                    n = function (x, w, v) {
                        v.wrapper = o(v, "entry", x + ":" + w);
                        x.attachEvent("on" + w, v.wrapper)
                    };
                    m = function (x, w, v) {
                        x.detachEvent("on" + w, v.wrapper)
                    }
                }
            }
            var l = {add: function (x, w, v) {
                n(x, w, v);
                return{remove: function () {
                    m(x, w, v);
                    x = null
                }}
            }, remove: m};
            q.exports = l
        });
        b("sdk.createIframe", ["copyProperties", "guid", "hasNamePropertyBug", "DOMEventListener"], function (v, u, t, s, r, q) {
            var p = u("copyProperties"), o = u("guid"), n = u("hasNamePropertyBug"), m = u("DOMEventListener");

            function l(C) {
                C = p({}, C);
                var B, A = C.name || o(), z = C.root, y = C.style || {border: "none"}, x = C.url, w = C.onload;
                if (n()) {
                    B = i.createElement('<iframe name="' + A + '"/>')
                } else {
                    B = i.createElement("iframe");
                    B.name = A
                }
                delete C.style;
                delete C.name;
                delete C.url;
                delete C.root;
                delete C.onload;
                var F = p({frameBorder: 0, allowTransparency: true, scrolling: "no"}, C);
                if (F.width) {
                    B.width = F.width + "px"
                }
                if (F.height) {
                    B.height = F.height + "px"
                }
                delete F.height;
                delete F.width;
                for (var E in F) {
                    if (F.hasOwnProperty(E)) {
                        B.setAttribute(E, F[E])
                    }
                }
                p(B.style, y);
                B.src = "javascript:false";
                z.appendChild(B);
                if (w) {
                    var D = m.add(B, "load", function () {
                        D.remove();
                        w()
                    })
                }
                B.src = x;
                return B
            }

            r.exports = l
        });
        b("DOMWrapper", [], function (t, s, r, q, p, o) {
            var n, m, l = {setRoot: function (u) {
                n = u
            }, getRoot: function () {
                return n || i.body
            }, setWindow: function (u) {
                m = u
            }, getWindow: function () {
                return m || k
            }};
            p.exports = l
        });
        b("UserAgent", [], function (T, S, R, Q, P, O) {
            var N = false, M, L, K, J, I, H, G, F, E, D, C, B, A, z;

            function y() {
                if (N) {
                    return
                }
                N = true;
                var l = navigator.userAgent, o = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(l), n = /(Mac OS X)|(Windows)|(Linux)/.exec(l);
                C = /\b(iPhone|iP[ao]d)/.exec(l);
                B = /\b(iP[ao]d)/.exec(l);
                E = /Android/i.exec(l);
                A = /FBAN\/\w+;/i.exec(l);
                z = /Mobile/i.exec(l);
                D = !!(/Win64/.exec(l));
                if (o) {
                    M = o[1] ? parseFloat(o[1]) : NaN;
                    if (M && i.documentMode) {
                        M = i.documentMode
                    }
                    L = o[2] ? parseFloat(o[2]) : NaN;
                    K = o[3] ? parseFloat(o[3]) : NaN;
                    J = o[4] ? parseFloat(o[4]) : NaN;
                    if (J) {
                        o = /(?:Chrome\/(\d+\.\d+))/.exec(l);
                        I = o && o[1] ? parseFloat(o[1]) : NaN
                    } else {
                        I = NaN
                    }
                } else {
                    M = L = K = I = J = NaN
                }
                if (n) {
                    if (n[1]) {
                        var m = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(l);
                        H = m ? parseFloat(m[1].replace("_", ".")) : true
                    } else {
                        H = false
                    }
                    G = !!n[2];
                    F = !!n[3]
                } else {
                    H = G = F = false
                }
            }

            var x = {ie: function () {
                return y() || M
            }, ie64: function () {
                return x.ie() && D
            }, firefox: function () {
                return y() || L
            }, opera: function () {
                return y() || K
            }, webkit: function () {
                return y() || J
            }, safari: function () {
                return x.webkit()
            }, chrome: function () {
                return y() || I
            }, windows: function () {
                return y() || G
            }, osx: function () {
                return y() || H
            }, linux: function () {
                return y() || F
            }, iphone: function () {
                return y() || C
            }, mobile: function () {
                return y() || (C || B || E || z)
            }, nativeApp: function () {
                return y() || A
            }, android: function () {
                return y() || E
            }, ipad: function () {
                return y() || B
            }};
            P.exports = x
        });
        b("sdk.getContextType", ["UserAgent", "sdk.Runtime"], function (t, s, r, q, p, o) {
            var n = s("UserAgent"), m = s("sdk.Runtime");

            function l() {
                if (n.nativeApp()) {
                    return 3
                }
                if (n.mobile()) {
                    return 2
                }
                if (m.isEnvironment(m.ENVIRONMENTS.CANVAS)) {
                    return 5
                }
                return 1
            }

            p.exports = l
        });
        b("Log", ["sprintf"], function (u, t, s, r, q, p) {
            var o = t("sprintf"), n = {DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0};

            function m(x, w) {
                var v = Array.prototype.slice.call(arguments, 2), z = o.apply(null, v), y = h.console;
                if (y && l.level >= w) {
                    y[x in y ? x : "log"](z)
                }
            }

            var l = {level: -1, Level: n, debug: j(m, "bind", true, null, "debug", n.DEBUG), info: j(m, "bind", true, null, "info", n.INFO), warn: j(m, "bind", true, null, "warn", n.WARNING), error: j(m, "bind", true, null, "error", n.ERROR)};
            q.exports = l
        });
        b("Base64", [], function (v, u, t, s, r, q) {
            var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

            function o(w) {
                w = (w.charCodeAt(0) << 16) | (w.charCodeAt(1) << 8) | w.charCodeAt(2);
                return String.fromCharCode(p.charCodeAt(w >>> 18), p.charCodeAt((w >>> 12) & 63), p.charCodeAt((w >>> 6) & 63), p.charCodeAt(w & 63))
            }

            var n = ">___?456789:;<=_______\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31______\32\33\34\35\36\37 !\"#$%&'()*+,-./0123";

            function m(w) {
                w = (n.charCodeAt(w.charCodeAt(0) - 43) << 18) | (n.charCodeAt(w.charCodeAt(1) - 43) << 12) | (n.charCodeAt(w.charCodeAt(2) - 43) << 6) | n.charCodeAt(w.charCodeAt(3) - 43);
                return String.fromCharCode(w >>> 16, (w >>> 8) & 255, w & 255)
            }

            var l = {encode: function (x) {
                x = unescape(encodeURI(x));
                var w = (x.length + 2) % 3;
                x = (x + "\0\0".slice(w)).replace(/[\s\S]{3}/g, o);
                return x.slice(0, x.length + w - 2) + "==".slice(w)
            }, decode: function (x) {
                x = x.replace(/[^A-Za-z0-9+\/]/g, "");
                var w = (x.length + 3) & 3;
                x = (x + "AAA".slice(w)).replace(/..../g, m);
                x = x.slice(0, x.length + w - 3);
                try {
                    return decodeURIComponent(escape(x))
                } catch (y) {
                    throw new Error("Not valid UTF-8")
                }
            }, encodeObject: function (w) {
                return l.encode(j("JSON", "stringify", false, w))
            }, decodeObject: function (w) {
                return j("JSON", "parse", false, l.decode(w))
            }, encodeNums: function (w) {
                return String.fromCharCode.apply(String, j(w, "map", true, function (x) {
                    return p.charCodeAt((x | -(x > 63)) & -(x > 0) & 63)
                }))
            }};
            r.exports = l
        });
        b("sdk.SignedRequest", ["Base64"], function (t, s, r, q, p, o) {
            var n = s("Base64");

            function m(v) {
                if (!v) {
                    return null
                }
                var u = v.split(".", 2)[1].replace(/\-/g, "+").replace(/\_/g, "/");
                return n.decodeObject(u)
            }

            var l = {parse: m};
            p.exports = l
        });
        b("UrlMap", ["UrlMapConfig"], function (m, l, s, r, q, p) {
            var o = l("UrlMapConfig"), n = {resolve: function (v, u) {
                var t = typeof u == "undefined" ? location.protocol.replace(":", "") : u ? "https" : "http";
                if (v in o) {
                    return t + "://" + o[v]
                }
                if (typeof u == "undefined" && v + "_" + t in o) {
                    return t + "://" + o[v + "_" + t]
                }
                if (u !== true && v + "_http" in o) {
                    return"http://" + o[v + "_http"]
                }
                if (u !== false && v + "_https" in o) {
                    return"https://" + o[v + "_https"]
                }
            }};
            q.exports = n
        });
        b("URL", ["Assert", "copyProperties", "QueryString", "Log"], function (F, E, D, C, B, A) {
            var z = E("Assert"), y = E("copyProperties"), x = E("QueryString"), w = E("Log"), v = new RegExp("((((\\w+):)?//)(.*?@)?([^~/?#:]+)(:(\\d+))?)?([^\\?$#]+)?(\\?([^$#]+))?(#([^$]+))?"), u = /[\0\\]/, t = /[^\w\-\.,;\/?:@=&%#$~+!*'\[\]()]+/g, s = /^[a-z0-9.][a-z0-9\-\.]+[a-z0-9.]$/, r = /\.facebook\.com$/;

            function q(n) {
                z.isString(n, "The passed argument was of invalid type.");
                if (u.test(n)) {
                    throw new URIError("The passed argument could not be parsed as a url.")
                }
                if (this instanceof q === false) {
                    return new q(n)
                }
                var m = n.replace(t,function (o) {
                    w.warn('Escaping unescaped character \\x%s from "%s"', o.charCodeAt(0).toString(16), n);
                    return encodeURIComponent(o)
                }).match(v);
                if (!n || !m) {
                    throw new URIError("The passed argument could not be parsed as a url.")
                }
                var l = !!location.hostname;
                this.setProtocol(m[4] || (l ? location.protocol.replace(/:/, "") : ""));
                this.setDomain(m[6] || location.hostname);
                this.setPort(m[8] || (l && !m[6] ? location.port : ""));
                this.setPath(m[9] || "");
                this.setSearch(m[11] || "");
                this.setFragment(m[13] || "");
                if (this._path.substring(0, 1) != "/") {
                    this._path = "/" + this._path
                }
                if (this._domain && !s.test(decodeURIComponent(this._domain.toLowerCase()))) {
                    w.error("Invalid characters found in domain name: %s", this._domain);
                    throw new URIError("Domain contained invalid characters.")
                }
            }

            y(q.prototype, {constructor: q, getProtocol: function () {
                return this._protocol
            }, setProtocol: function (l) {
                this._protocol = l;
                return this
            }, getDomain: function () {
                return this._domain
            }, setDomain: function (l) {
                this._domain = l;
                return this
            }, getPort: function () {
                return this._port
            }, setPort: function (l) {
                this._port = l;
                return this
            }, getPath: function () {
                return this._path
            }, setPath: function (l) {
                this._path = l;
                return this
            }, getSearch: function () {
                return this._search
            }, setSearch: function (l) {
                this._search = l;
                return this
            }, getFragment: function () {
                return this._fragment
            }, setFragment: function (l) {
                this._fragment = l;
                return this
            }, getParsedSearch: function () {
                return x.decode(this._search)
            }, getParsedFragment: function () {
                return x.decode(this._fragment)
            }, isFacebookURL: function () {
                return r.test(this._domain)
            }, toString: function () {
                return(this._protocol ? this._protocol + ":" : "") + (this._domain ? "//" + this._domain : "") + (this._port ? ":" + this._port : "") + this._path + (this._search ? "?" + this._search : "") + (this._fragment ? "#" + this._fragment : "")
            }, valueOf: function () {
                return this.toString()
            }});
            y(q, {getCurrent: function () {
                return new q(location.href)
            }, getReferrer: function () {
                return i.referrer ? new q(i.referrer) : null
            }});
            B.exports = q
        });
        b("sdk.domReady", [], function (v, u, t, s, r, q) {
            var p, o = "readyState" in i ? /loaded|complete/.test(i.readyState) : !!i.body;

            function n() {
                if (!p) {
                    return
                }
                var w;
                while (w = p.shift()) {
                    w()
                }
                p = null
            }

            function m(w) {
                if (p) {
                    p.push(w);
                    return
                } else {
                    w()
                }
            }

            if (!o) {
                p = [];
                if (i.addEventListener) {
                    i.addEventListener("DOMContentLoaded", n, false);
                    h.addEventListener("load", n, false)
                } else {
                    if (i.attachEvent) {
                        i.attachEvent("onreadystatechange", n);
                        h.attachEvent("onload", n)
                    }
                }
                if (i.documentElement.doScroll && h == h.top) {
                    var l = function () {
                        try {
                            i.documentElement.doScroll("left")
                        } catch (w) {
                            f(l, 0);
                            return
                        }
                        n()
                    };
                    l()
                }
            }
            r.exports = m
        }, 3);
        b("sdk.Content", ["sdk.domReady", "Log", "UserAgent"], function (x, w, v, u, t, s) {
            var r = w("sdk.domReady"), q = w("Log"), p = w("UserAgent"), o, n, m = {append: function (l, z) {
                if (!z) {
                    if (!o) {
                        o = z = i.getElementById("fb-root");
                        if (!z) {
                            q.warn('The "fb-root" div has not been created, auto-creating');
                            o = z = i.createElement("div");
                            z.id = "fb-root";
                            if (p.ie() || !i.body) {
                                r(function () {
                                    i.body.appendChild(z)
                                })
                            } else {
                                i.body.appendChild(z)
                            }
                        }
                        z.className += " fb_reset"
                    } else {
                        z = o
                    }
                }
                if (typeof l == "string") {
                    var y = i.createElement("div");
                    z.appendChild(y).innerHTML = l;
                    return y
                } else {
                    return z.appendChild(l)
                }
            }, appendHidden: function (l) {
                if (!z) {
                    var z = i.createElement("div"), y = z.style;
                    y.position = "absolute";
                    y.top = "-10000px";
                    y.width = y.height = 0;
                    z = m.append(z)
                }
                return m.append(l, z)
            }, submitToTarget: function (l, C) {
                var B = i.createElement("form");
                B.action = l.url;
                B.target = l.target;
                B.method = (C) ? "GET" : "POST";
                m.appendHidden(B);
                for (var A in l.params) {
                    if (l.params.hasOwnProperty(A)) {
                        var z = l.params[A];
                        if (z !== null && z !== undefined) {
                            var y = i.createElement("input");
                            y.name = A;
                            y.value = z;
                            B.appendChild(y)
                        }
                    }
                }
                B.submit();
                B.parentNode.removeChild(B)
            }};
            t.exports = m
        });
        b("sdk.Event", [], function (m, l, r, q, p, o) {
            var n = {subscribers: function () {
                if (!this._subscribersMap) {
                    this._subscribersMap = {}
                }
                return this._subscribersMap
            }, subscribe: function (u, t) {
                var s = this.subscribers();
                if (!s[u]) {
                    s[u] = [t]
                } else {
                    s[u].push(t)
                }
            }, unsubscribe: function (u, t) {
                var s = this.subscribers()[u];
                if (s) {
                    j(s, "forEach", true, function (w, v) {
                        if (w == t) {
                            s[v] = null
                        }
                    })
                }
            }, monitor: function (v, u) {
                if (!u()) {
                    var t = this, s = function () {
                        if (u.apply(u, arguments)) {
                            t.unsubscribe(v, s)
                        }
                    };
                    this.subscribe(v, s)
                }
            }, clear: function (s) {
                delete this.subscribers()[s]
            }, fire: function () {
                var u = Array.prototype.slice.call(arguments), t = u.shift(), s = this.subscribers()[t];
                if (s) {
                    j(s, "forEach", true, function (v) {
                        if (v) {
                            v.apply(this, u)
                        }
                    })
                }
            }};
            p.exports = n
        });
        b("Queue", ["copyProperties"], function (t, s, r, q, p, o) {
            var n = s("copyProperties"), m = {};

            function l(u) {
                this._opts = n({interval: 0, processor: null}, u);
                this._queue = [];
                this._stopped = true
            }

            n(l.prototype, {_dispatch: function (u) {
                if (this._stopped || this._queue.length === 0) {
                    return
                }
                if (!this._opts.processor) {
                    this._stopped = true;
                    throw new Error("No processor available")
                }
                if (this._opts.interval) {
                    this._opts.processor.call(this, this._queue.shift());
                    this._timeout = f(j(this._dispatch, "bind", true, this), this._opts.interval)
                } else {
                    while (this._queue.length) {
                        this._opts.processor.call(this, this._queue.shift())
                    }
                }
            }, enqueue: function (u) {
                if (this._opts.processor && !this._stopped) {
                    this._opts.processor.call(this, u)
                } else {
                    this._queue.push(u)
                }
                return this
            }, start: function (u) {
                if (u) {
                    this._opts.processor = u
                }
                this._stopped = false;
                this._dispatch();
                return this
            }, dispatch: function () {
                this._dispatch(true)
            }, stop: function (u) {
                this._stopped = true;
                if (u) {
                    clearTimeout(this._timeout)
                }
                return this
            }, merge: function (v, u) {
                this._queue[u ? "unshift" : "push"].apply(this._queue, v._queue);
                v._queue = [];
                this._dispatch();
                return this
            }, getLength: function () {
                return this._queue.length
            }});
            n(l, {get: function (w, v) {
                var u;
                if (w in m) {
                    u = m[w]
                } else {
                    u = m[w] = new l(v)
                }
                return u
            }, exists: function (u) {
                return u in m
            }, remove: function (u) {
                return delete m[u]
            }});
            p.exports = l
        });
        b("resolveURI", [], function (m, l, r, q, p, o) {
            function n(t) {
                if (!t) {
                    return h.location.href
                }
                t = t.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
                var s = i.createElement("div");
                s.innerHTML = '<a href="' + t + '"></a>';
                return s.firstChild.href
            }

            p.exports = n
        });
        b("resolveWindow", [], function (m, l, r, q, p, o) {
            function n(x) {
                var w = h, v = x.split(".");
                try {
                    for (var t = 0; t < v.length; t++) {
                        var s = v[t], y = /^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(s);
                        if (y) {
                            w = w.frames[y[1]]
                        } else {
                            if (s === "opener" || s === "parent" || s === "top") {
                                w = w[s]
                            } else {
                                return null
                            }
                        }
                    }
                } catch (u) {
                    return null
                }
                return w
            }

            p.exports = n
        });
        b("JSONRPC", ["copyProperties", "Log"], function (t, s, r, q, p, o) {
            var n = s("copyProperties"), m = s("Log");

            function l(u) {
                this._counter = 0;
                this._callbacks = {};
                this.remote = {};
                this.local = {};
                this._write = u
            }

            n(l.prototype, {stub: function (u) {
                this.remote[u] = j(function () {
                    var w = Array.prototype.slice.call(arguments), v = {jsonrpc: "2.0", method: u};
                    if (typeof w[w.length - 1] == "function") {
                        v.id = ++this._counter;
                        this._callbacks[v.id] = w.pop()
                    }
                    v.params = w;
                    this._write(j("JSON", "stringify", false, v), {method: u})
                }, "bind", true, this)
            }, read: function (C, B) {
                var A = j("JSON", "parse", false, C), z = A.id;
                if (!A.method) {
                    if (!this._callbacks[z]) {
                        m.warn("Could not find callback %s", z);
                        return
                    }
                    var y = this._callbacks[z];
                    delete this._callbacks[z];
                    delete A.id;
                    delete A.jsonrpc;
                    y(A);
                    return
                }
                var x = this, w = this.local[A.method], v;
                if (z) {
                    v = function (G, F) {
                        var E = {jsonrpc: "2.0", id: z};
                        E[G] = F;
                        f(function () {
                            x._write(j("JSON", "stringify", false, E), B)
                        }, 0)
                    }
                } else {
                    v = function () {
                    }
                }
                if (!w) {
                    m.error('Method "%s" has not been defined', A.method);
                    v("error", {code: -32601, message: "Method not found", data: A.method});
                    return
                }
                A.params.push(j(v, "bind", true, null, "result"));
                A.params.push(j(v, "bind", true, null, "error"));
                try {
                    var D = w.apply(B || null, A.params);
                    if (typeof D !== "undefined") {
                        v("result", D)
                    }
                } catch (u) {
                    m.error("Invokation of RPC method %s resulted in the error: %s", A.method, u.message);
                    v("error", {code: -32603, message: "Internal error", data: u.message})
                }
            }});
            p.exports = l
        });
        b("sdk.RPC", ["Assert", "JSONRPC", "Queue"], function (x, w, v, u, t, s) {
            var r = w("Assert"), q = w("JSONRPC"), p = w("Queue"), o = new p(), n = new q(function (l) {
                o.enqueue(l)
            }), m = {local: n.local, remote: n.remote, stub: j(n.stub, "bind", true, n), setInQueue: function (l) {
                r.isInstanceOf(p, l);
                l.start(function (y) {
                    n.read(y)
                })
            }, getOutQueue: function () {
                return o
            }};
            t.exports = m
        });
        b("emptyFunction", ["copyProperties"], function (t, s, r, q, p, o) {
            var n = s("copyProperties");

            function m(u) {
                return function () {
                    return u
                }
            }

            function l() {
            }

            n(l, {thatReturns: m, thatReturnsFalse: m(false), thatReturnsTrue: m(true), thatReturnsNull: m(null), thatReturnsThis: function () {
                return this
            }, thatReturnsArgument: function (u) {
                return u
            }, mustImplement: function (v, u) {
                return function () {
                }
            }});
            p.exports = l
        });
        b("Flash", ["DOMWrapper", "QueryString", "UserAgent", "copyProperties", "guid"], function (L, K, J, I, H, G) {
            var F = K("DOMWrapper"), E = K("QueryString"), D = K("UserAgent"), C = K("copyProperties"), B = K("guid"), A = {}, z, y = F.getWindow().document;

            function x(m) {
                var l = y.getElementById(m);
                if (l) {
                    l.parentNode.removeChild(l)
                }
                delete A[m]
            }

            function w() {
                for (var l in A) {
                    if (A.hasOwnProperty(l)) {
                        x(l)
                    }
                }
            }

            function v(l) {
                return l.replace(/\d+/g, function (m) {
                    return"000".substring(m.length) + m
                })
            }

            function u(l) {
                if (!z) {
                    if (D.ie() >= 9) {
                        h.attachEvent("onunload", w)
                    }
                    z = true
                }
                A[l] = l
            }

            var t = {embed: function (N, M, s, r) {
                var q = B();
                N = encodeURI(N);
                s = C({allowscriptaccess: "always", flashvars: r, movie: N}, s || {});
                if (typeof s.flashvars == "object") {
                    s.flashvars = E.encode(s.flashvars)
                }
                var p = [];
                for (var o in s) {
                    if (s.hasOwnProperty(o) && s[o]) {
                        p.push('<param name="' + encodeURI(o) + '" value="' + encodeURI(s[o]) + '">')
                    }
                }
                var l = y.createElement("div"), n = "<object " + (D.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + N + '" id="' + q + '">' + p.join("") + "</object>";
                l.innerHTML = n;
                var m = M.appendChild(l.firstChild);
                u(q);
                return m
            }, remove: x, getVersion: function () {
                var p = "Shockwave Flash", o = "application/x-shockwave-flash", n = "ShockwaveFlash.ShockwaveFlash", m;
                if (navigator.plugins && typeof navigator.plugins[p] == "object") {
                    var l = navigator.plugins[p].description;
                    if (l && navigator.mimeTypes && navigator.mimeTypes[o] && navigator.mimeTypes[o].enabledPlugin) {
                        m = l.match(/\d+/g)
                    }
                }
                if (!m) {
                    try {
                        m = (new ActiveXObject(n)).GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/);
                        m = Array.prototype.slice.call(m, 1)
                    } catch (q) {
                    }
                }
                return m
            }, checkMinVersion: function (m) {
                var l = t.getVersion();
                if (!l) {
                    return false
                }
                return v(l.join(".")) >= v(m)
            }, isAvailable: function () {
                return !!t.getVersion()
            }};
            H.exports = t
        });
        b("dotAccess", [], function (m, l, r, q, p, o) {
            function n(w, v, u) {
                var t = v.split(".");
                do {
                    var s = t.shift();
                    w = w[s] || u && (w[s] = {})
                } while (t.length && w);
                return w
            }

            p.exports = n
        });
        b("GlobalCallback", ["DOMWrapper", "dotAccess", "guid", "wrapFunction"], function (z, y, x, w, v, u) {
            var t = y("DOMWrapper"), s = y("dotAccess"), r = y("guid"), q = y("wrapFunction"), p, o, n = {setPrefix: function (l) {
                p = s(t.getWindow(), l, true);
                o = l
            }, create: function (A, m) {
                if (!p) {
                    this.setPrefix("__globalCallbacks")
                }
                var l = r();
                p[l] = q(A, "entry", m || "GlobalCallback");
                return o + "." + l
            }, remove: function (m) {
                var l = m.substring(o.length + 1);
                delete p[l]
            }};
            v.exports = n
        });
        b("XDM", ["DOMEventListener", "DOMWrapper", "emptyFunction", "Flash", "GlobalCallback", "guid", "Log", "UserAgent", "wrapFunction"], function (N, M, L, K, J, I) {
            var H = M("DOMEventListener"), G = M("DOMWrapper"), F = M("emptyFunction"), E = M("Flash"), D = M("GlobalCallback"), C = M("guid"), B = M("Log"), A = M("UserAgent"), z = M("wrapFunction"), y = {}, x = {transports: []}, w = G.getWindow();

            function v(o) {
                var n = {}, m = o.length, l = x.transports;
                while (m--) {
                    n[o[m]] = 1
                }
                m = l.length;
                while (m--) {
                    var q = l[m], p = y[q];
                    if (!n[q] && p.isAvailable()) {
                        return q
                    }
                }
            }

            var u = {register: function (m, l) {
                B.debug("Registering %s as XDM provider", m);
                x.transports.push(m);
                y[m] = l
            }, create: function (n) {
                if (!n.whenReady && !n.onMessage) {
                    B.error("An instance without whenReady or onMessage makes no sense");
                    throw new Error("An instance without whenReady or onMessage makes no sense")
                }
                if (!n.channel) {
                    B.warn("Missing channel name, selecting at random");
                    n.channel = C()
                }
                if (!n.whenReady) {
                    n.whenReady = F
                }
                if (!n.onMessage) {
                    n.onMessage = F
                }
                var m = n.transport || v(n.blacklist || []), l = y[m];
                if (l && l.isAvailable()) {
                    B.debug("%s is available", m);
                    l.init(n);
                    return m
                }
            }};
            u.register("fragment", (function () {
                var o = false, n, m = location.protocol + "//" + location.host;

                function l(r) {
                    var q = i.createElement("iframe");
                    q.src = "javascript:false";
                    var p = H.add(q, "load", function () {
                        p.remove();
                        f(function () {
                            q.parentNode.removeChild(q)
                        }, 5000)
                    });
                    n.appendChild(q);
                    q.src = r
                }

                return{isAvailable: function () {
                    return true
                }, init: function (q) {
                    B.debug("init fragment");
                    var p = {send: function (t, O, r, s) {
                        B.debug("sending to: %s (%s)", O + q.channelPath, s);
                        l(O + q.channelPath + t + "&xd_rel=parent.parent&relation=parent.parent&xd_origin=" + encodeURIComponent(m))
                    }};
                    if (o) {
                        q.whenReady(p);
                        return
                    }
                    n = q.root;
                    o = true;
                    q.whenReady(p)
                }}
            })());
            u.register("flash", (function () {
                var o = false, n, m = false, l = 15000, p;
                return{isAvailable: function () {
                    return E.checkMinVersion("8.0.24")
                }, init: function (s) {
                    B.debug("init flash: " + s.channel);
                    var r = {send: function (O, P, Q, R) {
                        B.debug("sending to: %s (%s)", P, R);
                        n.postMessage(O, P, R)
                    }};
                    if (o) {
                        s.whenReady(r);
                        return
                    }
                    var t = s.root.appendChild(w.document.createElement("div")), q = D.create(function () {
                        D.remove(q);
                        clearTimeout(p);
                        B.info("xdm.swf called the callback");
                        var O = D.create(function (P, Q) {
                            P = decodeURIComponent(P);
                            Q = decodeURIComponent(Q);
                            B.debug("received message %s from %s", P, Q);
                            s.onMessage(P, Q)
                        }, "xdm.swf:onMessage");
                        n.init(s.channel, O);
                        s.whenReady(r)
                    }, "xdm.swf:load");
                    n = E.embed(s.flashUrl, t, null, {protocol: location.protocol.replace(":", ""), host: location.host, callback: q, log: m});
                    p = f(function () {
                        B.warn("The Flash component did not load within %s ms - verify that the container is not set to hidden or invisible using CSS as this will cause some browsers to not load the components", l)
                    }, l);
                    o = true
                }}
            })());
            u.register("postmessage", (function () {
                var l = false;
                return{isAvailable: function () {
                    return !!w.postMessage
                }, init: function (o) {
                    B.debug("init postMessage: " + o.channel);
                    var n = "_FB_" + o.channel, m = {send: function (t, r, q, s) {
                        if (w === q) {
                            B.error("Invalid windowref, equal to window (self)");
                            throw new Error()
                        }
                        B.debug("sending to: %s (%s)", r, s);
                        var p = function () {
                            q.postMessage("_FB_" + s + t, r)
                        };
                        if (A.ie() == 8) {
                            f(p, 0)
                        } else {
                            p()
                        }
                    }};
                    if (l) {
                        o.whenReady(m);
                        return
                    }
                    H.add(w, "message", z(function (p) {
                        var r = p.data, q = p.origin || "native";
                        if (typeof r != "string") {
                            B.warn("Received message of type %s from %s, expected a string", typeof r, q);
                            return
                        }
                        B.debug("received message %s from %s", r, q);
                        if (r.substring(0, n.length) == n) {
                            r = r.substring(n.length)
                        }
                        o.onMessage(r, q)
                    }, "entry", "onMessage"));
                    o.whenReady(m);
                    l = true
                }}
            })());
            J.exports = u
        });
        b("sdk.XD", ["sdk.Content", "sdk.createIframe", "sdk.Event", "guid", "Log", "QueryString", "Queue", "resolveURI", "resolveWindow", "sdk.RPC", "sdk.Runtime", "UrlMap", "URL", "wrapFunction", "XDM", "XDConfig"], function (an, am, al, ak, aj, ai) {
            var ah = am("sdk.Content"), ag = am("sdk.createIframe"), af = am("sdk.Event"), ae = am("guid"), ad = am("Log"), ac = am("QueryString"), ab = am("Queue"), aa = am("resolveURI"), Z = am("resolveWindow"), Y = am("sdk.RPC"), X = am("sdk.Runtime"), W = am("UrlMap"), V = am("URL"), U = am("wrapFunction"), T = al("XDConfig"), S = am("XDM"), Q = new ab(), P = new ab(), N = new ab(), M, E, ao = ae(), J = ae(), F = location.protocol + "//" + location.host, A, K = false, G = "Facebook Cross Domain Communication Frame", B = {}, L = new ab();
            Y.setInQueue(L);
            function H(l) {
                ad.info("Remote XD can talk to facebook.com (%s)", l);
                X.setEnvironment(l === "canvas" ? X.ENVIRONMENTS.CANVAS : X.ENVIRONMENTS.PAGETAB)
            }

            function C(o, p) {
                if (!p) {
                    ad.error("No senderOrigin");
                    throw new Error()
                }
                var q = /^https?/.exec(p)[0];
                switch (o.xd_action) {
                    case"proxy_ready":
                        var l, m;
                        if (q == "https") {
                            l = N;
                            m = E
                        } else {
                            l = P;
                            m = M
                        }
                        if (o.registered) {
                            H(o.registered);
                            Q = l.merge(Q)
                        }
                        ad.info("Proxy ready, starting queue %s containing %s messages", q + "ProxyQueue", l.getLength());
                        l.start(function (r) {
                            A.send(typeof r === "string" ? r : ac.encode(r), p, m.contentWindow, J + "_" + q)
                        });
                        break;
                    case"plugin_ready":
                        ad.info("Plugin %s ready, protocol: %s", o.name, q);
                        B[o.name] = {protocol: q};
                        if (ab.exists(o.name)) {
                            var n = ab.get(o.name);
                            ad.debug("Enqueuing %s messages for %s in %s", n.getLength(), o.name, q + "ProxyQueue");
                            (q == "https" ? N : P).merge(n)
                        }
                        break
                }
                if (o.data) {
                    O(o.data, p)
                }
            }

            function O(m, n) {
                if (n && n !== "native" && !V(n).isFacebookURL()) {
                    return
                }
                if (typeof m == "string") {
                    if (/^FB_RPC:/.test(m)) {
                        L.enqueue(m.substring(7));
                        return
                    }
                    if (m.substring(0, 1) == "{") {
                        try {
                            m = j("JSON", "parse", false, m)
                        } catch (o) {
                            ad.warn("Failed to decode %s as JSON", m);
                            return
                        }
                    } else {
                        m = ac.decode(m)
                    }
                }
                if (!n) {
                    if (m.xd_sig == ao) {
                        n = m.xd_origin
                    }
                }
                if (m.xd_action) {
                    C(m, n);
                    return
                }
                if (m.access_token) {
                    X.setSecure(/^https/.test(F))
                }
                if (m.cb) {
                    var l = R._callbacks[m.cb];
                    if (!R._forever[m.cb]) {
                        delete R._callbacks[m.cb]
                    }
                    if (l) {
                        l(m)
                    }
                }
            }

            function I(l, m) {
                if (l == "facebook") {
                    m.relation = "parent.parent";
                    Q.enqueue(m)
                } else {
                    m.relation = 'parent.frames["' + l + '"]';
                    var n = B[l];
                    if (n) {
                        ad.debug("Enqueuing message for plugin %s in %s", l, n.protocol + "ProxyQueue");
                        (n.protocol == "https" ? N : P).enqueue(m)
                    } else {
                        ad.debug("Buffering message for plugin %s", l);
                        ab.get(l).enqueue(m)
                    }
                }
            }

            Y.getOutQueue().start(function (l) {
                I("facebook", "FB_RPC:" + l)
            });
            function D(n, o) {
                if (K) {
                    return
                }
                var p = n ? /\/\/.*?(\/[^#]*)/.exec(n)[1] : location.pathname + location.search;
                p += (~j(p, "indexOf", true, "?") ? "&" : "?") + "fb_xd_fragment#xd_sig=" + ao + "&";
                var l = ah.appendHidden(i.createElement("div")), m = S.create({root: l, channel: J, channelPath: "/" + T.XdUrl + "#", flashUrl: T.Flash.path, whenReady: function (r) {
                    A = r;
                    var s = {channel: J, origin: location.protocol + "//" + location.host, channel_path: p, transport: m, xd_name: o}, t = "/" + T.XdUrl + "#" + ac.encode(s), u = T.useCdn ? W.resolve("cdn", false) : "http://www.facebook.com", q = T.useCdn ? W.resolve("cdn", true) : "https://www.facebook.com";
                    if (X.getSecure() !== true) {
                        M = ag({url: u + t, name: "fb_xdm_frame_http", id: "fb_xdm_frame_http", root: l, "aria-hidden": true, title: G, "tab-index": -1})
                    }
                    E = ag({url: q + t, name: "fb_xdm_frame_https", id: "fb_xdm_frame_https", root: l, "aria-hidden": true, title: G, "tab-index": -1})
                }, onMessage: O});
                if (m === "fragment") {
                    h.FB_XD_onMessage = U(O, "entry", "XD:fragment")
                }
                K = true
            }

            var R = {rpc: Y, _callbacks: {}, _forever: {}, _channel: J, _origin: F, onMessage: O, recv: O, init: D, sendToFacebook: I, inform: function (m, n, o, l) {
                I("facebook", {method: m, params: j("JSON", "stringify", false, n || {}), behavior: l || "p", relation: o})
            }, handler: function (n, o, p, l) {
                var m = T.useCdn ? W.resolve("cdn", location.protocol == "https:") : location.protocol + "//www.facebook.com";
                return m + "/" + T.XdUrl + "#" + ac.encode({cb: this.registerCallback(n, p, l), origin: F + "/" + J, domain: location.hostname, relation: o || "opener"})
            }, registerCallback: function (l, m, n) {
                n = n || ae();
                if (m) {
                    R._forever[n] = true
                }
                R._callbacks[n] = l;
                return n
            }};
            (function () {
                var l = location.href.match(/[?&]fb_xd_fragment#(.*)$/);
                if (l) {
                    i.documentElement.style.display = "none";
                    var m = ac.decode(l[1]), n = Z(m.xd_rel);
                    ad.debug("Passing fragment based message: %s", l[1]);
                    n.FB_XD_onMessage(m);
                    i.open();
                    i.close()
                }
            })();
            af.subscribe("init:post", function (l) {
                D(l.channelUrl ? aa(l.channelUrl) : null, l.xdProxyName)
            });
            aj.exports = R
        });
        b("sdk.Auth", ["sdk.Cookie", "copyProperties", "sdk.createIframe", "DOMWrapper", "sdk.getContextType", "guid", "Log", "ObservableMixin", "QueryString", "sdk.Runtime", "sdk.SignedRequest", "UrlMap", "URL", "sdk.XD"], function (ac, ab, Z, Y, X, W) {
            var V = ab("sdk.Cookie"), U = ab("copyProperties"), T = ab("sdk.createIframe"), S = ab("DOMWrapper"), R = ab("sdk.getContextType"), Q = ab("guid"), P = ab("Log"), O = ab("ObservableMixin"), N = ab("QueryString"), L = ab("sdk.Runtime"), K = ab("sdk.SignedRequest"), J = ab("UrlMap"), I = ab("URL"), H = ab("sdk.XD"), G, F, E = new O();

            function D(w, s) {
                var o = L.getUserID(), v = "";
                if (w) {
                    if (w.userID) {
                        v = w.userID
                    } else {
                        if (w.signedRequest) {
                            var r = K.parse(w.signedRequest);
                            if (r && r.user_id) {
                                v = r.user_id
                            }
                        }
                    }
                }
                var n = L.getLoginStatus(), u = (n === "unknown" && w) || (L.getUseCookie() && L.getCookieUserID() !== v), q = o && !w, m = w && o && o != v, t = w != G, p = s != (n || "unknown");
                L.setLoginStatus(s);
                L.setAccessToken(w && w.accessToken || null);
                L.setUserID(v);
                G = w;
                var l = {authResponse: w, status: s};
                if (q || m) {
                    E.inform("logout", l)
                }
                if (u || m) {
                    E.inform("login", l)
                }
                if (t) {
                    E.inform("authresponse.change", l)
                }
                if (p) {
                    E.inform("status.change", l)
                }
                return l
            }

            function C() {
                return G
            }

            function B(l, m, n) {
                return function (s) {
                    var o;
                    if (s && s.access_token) {
                        var p = K.parse(s.signed_request);
                        m = {accessToken: s.access_token, userID: p.user_id, expiresIn: parseInt(s.expires_in, 10), signedRequest: s.signed_request};
                        if (L.getUseCookie()) {
                            var q = m.expiresIn === 0 ? 0 : j("Date", "now", false) + m.expiresIn * 1000, r = V.getDomain();
                            if (!r && s.base_domain) {
                                V.setDomain("." + s.base_domain)
                            }
                            V.setSignedRequestCookie(s.signed_request, q)
                        }
                        o = "connected";
                        D(m, o)
                    } else {
                        if (n === "logout" || n === "login_status") {
                            if (s.error && s.error === "not_authorized") {
                                o = "not_authorized"
                            } else {
                                o = "unknown"
                            }
                            D(null, o);
                            if (L.getUseCookie()) {
                                V.clearSignedRequestCookie()
                            }
                        }
                    }
                    if (s && s.https == 1) {
                        L.setSecure(true)
                    }
                    if (l) {
                        l({authResponse: m, status: L.getLoginStatus()})
                    }
                    return m
                }
            }

            function ad(l) {
                var m;
                if (F) {
                    clearTimeout(F);
                    F = null
                }
                var n = B(l, G, "login_status"), o = I(J.resolve("www", true) + "/dialog/oauth").setSearch(N.encode({client_id: L.getClientID(), response_type: "token,signed_request,code", display: "none", domain: location.hostname, origin: R(), redirect_uri: H.handler(function (p) {
                    m.parentNode.removeChild(m);
                    if (n(p)) {
                        F = f(function () {
                            ad(function () {
                            })
                        }, 1200000)
                    }
                }, "parent"), sdk: "joey"}));
                m = T({root: S.getRoot(), name: Q(), url: o.toString(), style: {display: "none"}})
            }

            var A;

            function M(l, m) {
                if (!L.getClientID()) {
                    P.warn("FB.getLoginStatus() called before calling FB.init().");
                    return
                }
                if (l) {
                    if (!m && A == "loaded") {
                        l({status: L.getLoginStatus(), authResponse: C()});
                        return
                    } else {
                        E.subscribe("FB.loginStatus", l)
                    }
                }
                if (!m && A == "loading") {
                    return
                }
                A = "loading";
                var n = function (o) {
                    A = "loaded";
                    E.inform("FB.loginStatus", o);
                    E.clearSubscribers("FB.loginStatus")
                };
                ad(n)
            }

            U(E, {getLoginStatus: M, fetchLoginStatus: ad, setAuthResponse: D, getAuthResponse: C, parseSignedRequest: K.parse, xdResponseWrapper: B});
            X.exports = E
        });
        b("hasArrayNature", [], function (m, l, r, q, p, o) {
            function n(s) {
                return(!!s && (typeof s == "object" || typeof s == "function") && ("length" in s) && !("setInterval" in s) && (Object.prototype.toString.call(s) === "[object Array]" || ("callee" in s) || ("item" in s)))
            }

            p.exports = n
        });
        b("createArrayFrom", ["hasArrayNature"], function (m, l, s, r, q, p) {
            var o = l("hasArrayNature");

            function n(v) {
                if (!o(v)) {
                    return[v]
                }
                if (v.item) {
                    var u = v.length, t = new Array(u);
                    while (u--) {
                        t[u] = v[u]
                    }
                    return t
                }
                return Array.prototype.slice.call(v)
            }

            q.exports = n
        });
        b("sdk.DOM", ["Assert", "createArrayFrom", "sdk.domReady", "UserAgent"], function (X, W, V, U, T, S) {
            var R = W("Assert"), Q = W("createArrayFrom"), P = W("sdk.domReady"), O = W("UserAgent"), N = {};

            function M(m, l) {
                var n = (m.getAttribute(l) || m.getAttribute(l.replace(/_/g, "-")) || m.getAttribute(l.replace(/-/g, "_")) || m.getAttribute(l.replace(/-/g, "")) || m.getAttribute(l.replace(/_/g, "")) || m.getAttribute("data-" + l) || m.getAttribute("data-" + l.replace(/_/g, "-")) || m.getAttribute("data-" + l.replace(/-/g, "_")) || m.getAttribute("data-" + l.replace(/-/g, "")) || m.getAttribute("data-" + l.replace(/_/g, "")));
                return n ? String(n) : null
            }

            function L(m, l) {
                var n = M(m, l);
                return n ? /^(true|1|yes|on)$/.test(n) : null
            }

            function K(m, l) {
                R.isTruthy(m, "element not specified");
                R.isString(l);
                try {
                    return String(m[l])
                } catch (n) {
                    throw new Error("Could not read property " + l + " : " + n.message)
                }
            }

            function J(m, l) {
                R.isTruthy(m, "element not specified");
                R.isString(l);
                try {
                    m.innerHTML = l
                } catch (n) {
                    throw new Error("Could not set innerHTML : " + n.message)
                }
            }

            function I(m, l) {
                R.isTruthy(m, "element not specified");
                R.isString(l);
                var n = " " + K(m, "className") + " ";
                return j(n, "indexOf", true, " " + l + " ") >= 0
            }

            function H(m, l) {
                R.isTruthy(m, "element not specified");
                R.isString(l);
                if (!I(m, l)) {
                    m.className = K(m, "className") + " " + l
                }
            }

            function G(m, l) {
                R.isTruthy(m, "element not specified");
                R.isString(l);
                var n = new RegExp("\\s*" + l, "g");
                m.className = j(K(m, "className").replace(n, ""), "trim", true)
            }

            function F(q, p, r) {
                R.isString(q);
                p = p || i.body;
                r = r || "*";
                if (p.querySelectorAll) {
                    return Q(p.querySelectorAll(r + "." + q))
                }
                var l = p.getElementsByTagName(r), m = [];
                for (var n = 0, o = l.length; n < o; n++) {
                    if (I(l[n], q)) {
                        m[m.length] = l[n]
                    }
                }
                return m
            }

            function E(n, m) {
                R.isTruthy(n, "element not specified");
                R.isString(m);
                m = m.replace(/-(\w)/g, function (p, q) {
                    return q.toUpperCase()
                });
                var o = n.currentStyle || i.defaultView.getComputedStyle(n, null), l = o[m];
                if (/backgroundPosition?/.test(m) && /top|left/.test(l)) {
                    l = "0%"
                }
                return l
            }

            function D(m, l, n) {
                R.isTruthy(m, "element not specified");
                R.isString(l);
                l = l.replace(/-(\w)/g, function (o, p) {
                    return p.toUpperCase()
                });
                m.style[l] = n
            }

            function C(q, p) {
                var r = true;
                for (var l = 0, m; m = p[l++];) {
                    if (!(m in N)) {
                        r = false;
                        N[m] = true
                    }
                }
                if (r) {
                    return
                }
                if (!O.ie()) {
                    var n = i.createElement("style");
                    n.type = "text/css";
                    n.textContent = q;
                    i.getElementsByTagName("head")[0].appendChild(n)
                } else {
                    try {
                        i.createStyleSheet().cssText = q
                    } catch (o) {
                        if (i.styleSheets[0]) {
                            i.styleSheets[0].cssText += q
                        }
                    }
                }
            }

            function B() {
                var l = (i.documentElement && i.compatMode == "CSS1Compat") ? i.documentElement : i.body;
                return{scrollTop: l.scrollTop || i.body.scrollTop, scrollLeft: l.scrollLeft || i.body.scrollLeft, width: h.innerWidth ? h.innerWidth : l.clientWidth, height: h.innerHeight ? h.innerHeight : l.clientHeight}
            }

            function A(m) {
                R.isTruthy(m, "element not specified");
                var l = 0, n = 0;
                do {
                    l += m.offsetLeft;
                    n += m.offsetTop
                } while (m = m.offsetParent);
                return{x: l, y: n}
            }

            var z = {containsCss: I, addCss: H, removeCss: G, getByClass: F, getStyle: E, setStyle: D, getAttr: M, getBoolAttr: L, getProp: K, html: J, addCssRules: C, getViewportInfo: B, getPosition: A, ready: P};
            T.exports = z
        });
        b("sdk.Scribe", ["UrlMap", "QueryString"], function (u, t, s, r, q, p) {
            var o = t("UrlMap"), n = t("QueryString");

            function m(w, v) {
                (new Image()).src = n.appendToUrl(o.resolve("www", true) + "/common/scribe_endpoint.php", {c: w, m: j("JSON", "stringify", false, v)})
            }

            var l = {log: m};
            q.exports = l
        });
        b("sdk.ErrorHandling", ["UserAgent", "sdk.Scribe", "sdk.Runtime", "wrapFunction", "ManagedError", "SDKConfig"], function (P, O, N, M, L, K) {
            var J = O("UserAgent"), I = O("sdk.Scribe"), H = N("SDKConfig"), G = O("sdk.Runtime"), F = O("wrapFunction"), E = O("ManagedError"), D = false, C = "";

            function B(m) {
                var l = m._originalError;
                delete m._originalError;
                I.log("jssdk_error", {appId: G.getClientID(), error: m.name || m.message, extra: m});
                throw l
            }

            function A(n) {
                var m = {line: n.lineNumber || n.line, message: n.message, name: n.name, script: n.fileName || n.sourceURL || n.script, stack: n.stackTrace || n.stack};
                m._originalError = n;
                if (J.chrome() && /([\w:\.\/]+\.js):(\d+)/.test(n.stack)) {
                    m.script = RegExp.$1;
                    m.line = parseInt(RegExp.$2, 10)
                }
                for (var l in m) {
                    (m[l] == null && delete m[l])
                }
                return m
            }

            function z(m, l) {
                return function () {
                    if (!D) {
                        return m.apply(this, arguments)
                    }
                    try {
                        C = l;
                        return m.apply(this, arguments)
                    } catch (n) {
                        if (n instanceof E) {
                            throw n
                        }
                        var p = A(n);
                        p.entry = l;
                        var o = j(Array.prototype.slice.call(arguments), "map", true, function (q) {
                            var r = Object.prototype.toString.call(q);
                            return(/^\[object (String|Number|Boolean|Object|Date)\]$/).test(r) ? q : q.toString()
                        });
                        p.args = j("JSON", "stringify", false, o).substring(0, 200);
                        B(p)
                    } finally {
                        C = ""
                    }
                }
            }

            function y(l) {
                if (!l.__wrapper) {
                    l.__wrapper = function () {
                        try {
                            return l.apply(this, arguments)
                        } catch (m) {
                            h.setTimeout(function () {
                                throw m
                            }, 0);
                            return false
                        }
                    }
                }
                return l.__wrapper
            }

            function x(m, l) {
                return function (n, p) {
                    var o = l + ":" + (C || "[global]") + ":" + (n.name || "[anonymous]" + (arguments.callee.caller.name ? "(" + arguments.callee.caller.name + ")" : ""));
                    return m(F(n, "entry", o), p)
                }
            }

            var w = H.errorHandling.rate;
            if (w && Math.floor(Math.random() * 100) + 1 <= w) {
                D = true
            }
            if (D) {
                f = x(f, "setTimeout");
                g = x(g, "setInterval");
                F.setWrapper(z, "entry")
            }
            var v = {guard: z, unguard: y};
            L.exports = v
        });
        b("sdk.Impressions", ["guid", "QueryString", "sdk.Runtime", "UrlMap"], function (x, w, v, u, t, s) {
            var r = w("guid"), q = w("QueryString"), p = w("sdk.Runtime"), o = w("UrlMap");

            function n(l) {
                var z = p.getClientID();
                if (!l.api_key && z) {
                    l.api_key = z
                }
                var y = new Image();
                y.src = q.appendToUrl(o.resolve("www", true) + "/impression.php/" + r() + "/", l)
            }

            var m = {log: function (l, y) {
                if (!y.source) {
                    y.source = "jssdk"
                }
                n({lid: l, payload: j("JSON", "stringify", false, y)})
            }, impression: n};
            t.exports = m
        });
        b("sdk.Insights", ["sdk.Impressions"], function (m, l, s, r, q, p) {
            var o = l("sdk.Impressions"), n = {TYPE: {NOTICE: "notice", WARNING: "warn", ERROR: "error"}, CATEGORY: {DEPRECATED: "deprecated", APIERROR: "apierror"}, log: function (w, v, u) {
                var t = {source: "jssdk", type: w, category: v, payload: u};
                o.log(113, t)
            }, impression: o.impression};
            q.exports = n
        });
        b("FB", ["sdk.Auth", "copyProperties", "dotAccess", "sdk.domReady", "sdk.DOM", "sdk.ErrorHandling", "sdk.Content", "DOMWrapper", "GlobalCallback", "sdk.Insights", "Log", "sdk.Runtime", "sdk.Scribe", "CssConfig", "SDKConfig"], function (ac, ab, Z, Y, X, W) {
            var V = ab("sdk.Auth"), U = ab("copyProperties"), T = Z("CssConfig"), S = ab("dotAccess"), R = ab("sdk.domReady"), Q = ab("sdk.DOM"), P = ab("sdk.ErrorHandling"), O = ab("sdk.Content"), N = ab("DOMWrapper"), L = ab("GlobalCallback"), K = ab("sdk.Insights"), J = ab("Log"), I = ab("sdk.Runtime"), H = ab("sdk.Scribe"), G = Z("SDKConfig"), F, E, D = S(G, "api.mode"), C = {};
            F = h.FB = {};
            var B = {};
            J.level = 1;
            L.setPrefix("FB.__globalCallbacks");
            var ad = i.createElement("div");
            N.setRoot(ad);
            R(function () {
                J.info("domReady");
                O.appendHidden(ad);
                if (T.rules) {
                    Q.addCssRules(T.rules, T.components)
                }
            });
            I.subscribe("AccessToken.change", function (l) {
                if (!l && I.getLoginStatus() === "connected") {
                    V.getLoginStatus(null, true)
                }
            });
            if (S(G, "api.whitelist.length")) {
                E = {};
                j(G.api.whitelist, "forEach", true, function (l) {
                    E[l] = 1
                })
            }
            function A(m, n, o, p) {
                var l;
                if (/^_/.test(o)) {
                    l = "hide"
                } else {
                    if (E && !E[n]) {
                        l = D
                    }
                }
                switch (l) {
                    case"hide":
                        return;
                    case"stub":
                        return function () {
                            J.warn("The method FB.%s has been removed from the JS SDK.", n)
                        };
                        break;
                    default:
                        return P.guard(function () {
                            if (l === "warn") {
                                J.warn("The method FB.%s is not officially supported by Facebook and access to it will soon be removed.", n);
                                if (!C.hasOwnProperty(n)) {
                                    K.log(K.TYPE.WARNING, K.CATEGORY.DEPRECATED, "FB." + n);
                                    H.log("jssdk_error", {appId: I.getClientID(), error: "Private method used", extra: {args: n}});
                                    C[n] = true
                                }
                            }
                            function r(y) {
                                if (j("Array", "isArray", false, y)) {
                                    return j(y, "map", true, r)
                                }
                                if (y && typeof y === "object" && y.__wrapped) {
                                    return y.__wrapped
                                }
                                return typeof y === "function" && /^function/.test(y.toString()) ? P.unguard(y) : y
                            }

                            var t = j(Array.prototype.slice.call(arguments), "map", true, r), v = m.apply(p, t), w, x = true;
                            if (v && typeof v === "object") {
                                var q = Function();
                                q.prototype = v;
                                w = new q();
                                w.__wrapped = v;
                                for (var s in v) {
                                    var u = v[s];
                                    if (typeof u !== "function" || s === "constructor") {
                                        continue
                                    }
                                    x = false;
                                    w[s] = A(u, n + ":" + s, s, v)
                                }
                            }
                            if (!x) {
                                return w
                            }
                            return x ? v : w
                        }, n)
                }
            }

            function M(l, m) {
                var n = l ? S(F, l, true) : F;
                j(j("Object", "keys", false, m), "forEach", true, function (r) {
                    var o = m[r];
                    if (typeof o === "function") {
                        var p = (l ? l + "." : "") + r, q = A(o, p, r, m);
                        if (q) {
                            n[r] = q
                        }
                    }
                })
            }

            I.setSecure((function () {
                var l = /iframe_canvas|app_runner/.test(h.name), m = /dialog/.test(h.name);
                if (location.protocol == "https:" && (h == top || !(l || m))) {
                    return true
                }
                if (/_fb_https?/.test(h.name)) {
                    return j(h.name, "indexOf", true, "_fb_https") != -1
                }
            })());
            U(B, {provide: M});
            X.exports = B
        });
        b("flattenObject", [], function (m, l, r, q, p, o) {
            function n(v) {
                var u = {};
                for (var t in v) {
                    if (v.hasOwnProperty(t)) {
                        var s = v[t];
                        if (null === s || undefined === s) {
                            continue
                        } else {
                            if (typeof s == "string") {
                                u[t] = s
                            } else {
                                u[t] = j("JSON", "stringify", false, s)
                            }
                        }
                    }
                }
                return u
            }

            p.exports = n
        });
        b("CORSRequest", ["wrapFunction", "QueryString"], function (v, u, t, s, r, q) {
            var p = u("wrapFunction"), o = u("QueryString");

            function n(x, w) {
                if (!k.XMLHttpRequest) {
                    return null
                }
                var D = new XMLHttpRequest(), C = function () {
                };
                if ("withCredentials" in D) {
                    D.open(x, w, true);
                    D.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                } else {
                    if (k.XDomainRequest) {
                        D = new XDomainRequest();
                        try {
                            D.open(x, w);
                            D.onprogress = D.ontimeout = C
                        } catch (B) {
                            return null
                        }
                    } else {
                        return null
                    }
                }
                var A = {send: function (E) {
                    D.send(E)
                }}, z = p(function () {
                    z = C;
                    if ("onload" in A) {
                        A.onload(D)
                    }
                }, "entry", "XMLHttpRequest:load"), y = p(function () {
                    y = C;
                    if ("onerror" in A) {
                        A.onerror(D)
                    }
                }, "entry", "XMLHttpRequest:error");
                D.onload = function () {
                    z()
                };
                D.onerror = function () {
                    y()
                };
                D.onreadystatechange = function () {
                    if (D.readyState == 4) {
                        if (D.status == 200) {
                            z()
                        } else {
                            y()
                        }
                    }
                };
                return A
            }

            function m(x, w, B, A) {
                B.suppress_http_code = 1;
                var z = o.encode(B);
                if (w != "post") {
                    x = o.appendToUrl(x, z);
                    z = ""
                }
                var y = n(w, x);
                if (!y) {
                    return false
                }
                y.onload = function (C) {
                    A(j("JSON", "parse", false, C.responseText))
                };
                y.onerror = function (C) {
                    if (C.responseText) {
                        A(j("JSON", "parse", false, C.responseText))
                    } else {
                        A({error: {type: "http", message: "unknown error", status: C.status}})
                    }
                };
                y.send(z);
                return true
            }

            var l = {execute: m};
            r.exports = l
        });
        b("FlashRequest", ["DOMWrapper", "Flash", "GlobalCallback", "QueryString", "Queue"], function (J, I, H, G, F, E) {
            var D = I("DOMWrapper"), C = I("Flash"), B = I("GlobalCallback"), A = I("QueryString"), z = I("Queue"), y, x = {}, w, v;

            function u() {
                if (!w) {
                    throw new Error("swfUrl has not been set")
                }
                var m = B.create(function () {
                    y.start(function (o) {
                        var n = v.execute(o.method, o.url, o.body);
                        if (!n) {
                            throw new Error("Could create request")
                        }
                        x[n] = o.callback
                    })
                }), l = B.create(function (q, p, o) {
                    var n;
                    try {
                        n = j("JSON", "parse", false, decodeURIComponent(o))
                    } catch (r) {
                        n = {error: {type: "SyntaxError", message: r.message, status: p, raw: o}}
                    }
                    x[q](n);
                    delete x[q]
                });
                v = C.embed(w, D.getRoot(), null, {log: false, initCallback: m, requestCallback: l})
            }

            function t(p, o, n, m) {
                n.suppress_http_code = 1;
                if (!n.method) {
                    n.method = o
                }
                var l = A.encode(n);
                if (o === "get" && p.length + l.length < 2000) {
                    p = A.appendToUrl(p, l);
                    l = ""
                } else {
                    o = "post"
                }
                if (!y) {
                    if (!C.isAvailable()) {
                        return false
                    }
                    y = new z();
                    u()
                }
                y.enqueue({method: o, url: p, body: l, callback: m});
                return true
            }

            var s = {setSwfUrl: function (l) {
                w = l
            }, execute: t};
            F.exports = s
        });
        b("JSONPRequest", ["DOMWrapper", "GlobalCallback", "QueryString"], function (v, u, t, s, r, q) {
            var p = u("DOMWrapper"), o = u("GlobalCallback"), n = u("QueryString");

            function m(x, w, C, B) {
                var A = i.createElement("script"), z = function (D) {
                    z = function () {
                    };
                    o.remove(C.callback);
                    B(D);
                    A.parentNode.removeChild(A)
                };
                C.callback = o.create(z);
                if (!C.method) {
                    C.method = w
                }
                x = n.appendToUrl(x, C);
                if (x.length > 2000) {
                    o.remove(C.callback);
                    return false
                }
                A.onerror = function () {
                    z({error: {type: "http", message: "unknown error"}})
                };
                var y = function () {
                    f(function () {
                        z({error: {type: "http", message: "unknown error"}})
                    }, 0)
                };
                if (A.addEventListener) {
                    A.addEventListener("load", y, false)
                } else {
                    A.onreadystatechange = function () {
                        if (/loaded|complete/.test(this.readyState)) {
                            y()
                        }
                    }
                }
                A.src = x;
                p.getRoot().appendChild(A);
                return true
            }

            var l = {execute: m};
            r.exports = l
        });
        b("ArgumentError", ["ManagedError"], function (m, l, s, r, q, p) {
            var o = l("ManagedError");

            function n(u, t) {
                o.prototype.constructor.apply(this, arguments)
            }

            n.prototype = new o();
            n.prototype.constructor = n;
            q.exports = n
        });
        b("ApiClient", ["copyProperties", "flattenObject", "sprintf", "CORSRequest", "FlashRequest", "JSONPRequest", "Log", "UrlMap", "URL", "ArgumentError", "Assert", "ApiClientConfig"], function (ab, Z, Y, X, W, V) {
            var U = Z("copyProperties"), T = Z("flattenObject"), S = Z("sprintf"), R = Z("CORSRequest"), Q = Z("FlashRequest"), P = Z("JSONPRequest"), O = Z("Log"), N = Z("UrlMap"), M = Z("URL"), L = Z("ArgumentError"), K = Z("Assert"), J = Z("ApiClientConfig"), I, H, G, F, E = {get: true, post: true, "delete": true, put: true}, D = {fql_query: true, fql_multiquery: true, friends_get: true, notifications_get: true, stream_get: true, users_getinfo: true};

            function C(o, u, r, n) {
                if (!r.access_token) {
                    r.access_token = I
                }
                r.pretty = 0;
                if (F) {
                    U(r, F)
                }
                r = T(r);
                if (!n) {
                    O.warn("No callback passed to the ApiClient for %s", o);
                    n = function () {
                    }
                }
                var t = {jsonp: P, cors: R, flash: Q}, q;
                if (r.transport) {
                    q = [r.transport];
                    delete r.transport
                } else {
                    q = ["jsonp", "cors", "flash"]
                }
                var m = function (w) {
                    var v = false;
                    if (H && w && typeof w == "object") {
                        if (w.error) {
                            if (w.error == "invalid_token" || (w.error.type == "OAuthException" && w.error.code == 190)) {
                                v = true
                            }
                        } else {
                            if (w.error_code) {
                                if (w.error_code == "190") {
                                    v = true
                                }
                            }
                        }
                        if (v) {
                            H()
                        }
                    }
                    n(w)
                };
                for (var s = 0; s < q.length; s++) {
                    var p = t[q[s]], l = U({}, r);
                    if (p.execute(o, u, l, m)) {
                        return
                    }
                }
                n({error: {type: "no-transport", message: "Could not find a usable transport for request"}})
            }

            function B(m) {
                K.isString(m, "Invalid path");
                var o, p = {};
                try {
                    o = new M(m)
                } catch (q) {
                    throw new L(q.message, q)
                }
                j(Array.prototype.slice.call(arguments, 1), "forEach", true, function (s) {
                    p[typeof s] = s
                });
                var r = (p.string || "get").toLowerCase(), l = U(p.object || {}, o.getParsedSearch()), n = p["function"];
                K.isTrue(r in E, S("Invalid method passed to ApiClient: %s", r));
                l.method = r;
                o = N.resolve("graph") + o.getPath();
                C(o, r == "get" ? "get" : "post", l, n)
            }

            function ac(l, m) {
                K.isObject(l);
                K.isString(l.method, "method missing");
                var n = l.method.toLowerCase().replace(".", "_");
                l.format = "json-strings";
                l.api_key = G;
                var o = n in D ? "api_read" : "api", p = N.resolve(o) + "/restserver.php";
                C(p, "get", l, m)
            }

            var A = {setAccessToken: function (l) {
                I = l
            }, setInvalidAccessTokenHandler: function (l) {
                H = l
            }, setClientID: function (l) {
                G = l
            }, setDefaultParams: function (l) {
                F = l
            }, rest: ac, graph: B};
            Q.setSwfUrl(J.FlashRequest.swfUrl);
            W.exports = A
        });
        b("sdk.api", ["ApiClient", "sdk.Runtime"], function (u, t, s, r, q, p) {
            var o = t("ApiClient"), n = t("sdk.Runtime"), m;
            n.subscribe("ClientID.change", function (v) {
                o.setClientID(v)
            });
            n.subscribe("AccessToken.change", function (v) {
                m = v;
                o.setAccessToken(v)
            });
            o.setDefaultParams({sdk: "joey"});
            o.setInvalidAccessTokenHandler(function () {
                if (m === n.getAccessToken()) {
                    n.setAccessToken(null)
                }
            });
            function l() {
                if (typeof arguments[0] === "string") {
                    o.graph.apply(o, arguments)
                } else {
                    o.rest.apply(o, arguments)
                }
            }

            q.exports = l
        });
        b("legacy:fb.api", ["FB", "sdk.api"], function (m, l, q, p) {
            var o = l("FB"), n = l("sdk.api");
            o.provide("", {api: n})
        }, 3);
        b("sdk.Canvas.Environment", ["sdk.RPC"], function (u, t, s, r, q, p) {
            var o = t("sdk.RPC");

            function n(v) {
                o.remote.getPageInfo(function (w) {
                    v(w.result)
                })
            }

            function m(w, v) {
                o.remote.scrollTo({x: w || 0, y: v || 0})
            }

            o.stub("getPageInfo");
            o.stub("scrollTo");
            var l = {getPageInfo: n, scrollTo: m};
            q.exports = l
        });
        b("sdk.Intl", ["Log"], function (v, u, t, s, r, q) {
            var p = u("Log"), o = ("[.!?\u3002\uFF01\uFF1F\u0964\u2026\u0EAF\u1801\u0E2F\uFF0E]");

            function n(w) {
                if (typeof w != "string") {
                    return false
                }
                return !!w.match(new RegExp(o + "[)\"'\u00BB\u0F3B\u0F3D\u2019\u201D\u203A\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3F\uFF07\uFF09\uFF3D\\s]*$"))
            }

            function m(x, w) {
                if (w !== undefined) {
                    if (typeof w != "object") {
                        p.error("The second arg to FB.Intl.tx() must be an Object for FB.Intl.tx(" + x + ", ...)")
                    } else {
                        var z;
                        for (var y in w) {
                            if (w.hasOwnProperty(y)) {
                                if (n(w[y])) {
                                    z = new RegExp("\\{" + y + "\\}" + o + "*", "g")
                                } else {
                                    z = new RegExp("\\{" + y + "\\}", "g")
                                }
                                x = x.replace(z, w[y])
                            }
                        }
                    }
                }
                return x
            }

            function l() {
                throw new Error("Placeholder function")
            }

            l._ = m;
            r.exports = {tx: l}
        });
        b("sdk.Dialog", ["sdk.Canvas.Environment", "sdk.Content", "sdk.DOM", "DOMEventListener", "sdk.Intl", "ObservableMixin", "sdk.Runtime", "Type", "UserAgent"], function (H, G, F, E, D, C) {
            var B = G("sdk.Canvas.Environment"), A = G("sdk.Content"), z = G("sdk.DOM"), y = G("DOMEventListener"), x = G("sdk.Intl"), w = G("ObservableMixin"), v = G("sdk.Runtime"), u = G("Type"), t = G("UserAgent"), s = u.extend({constructor: function (m, l) {
                this.parent();
                this.id = m;
                this.display = l;
                if (!r._dialogs) {
                    r._dialogs = {};
                    r._addOrientationHandler()
                }
                r._dialogs[m] = this
            }}, w), r = {newInstance: function (m, l) {
                return new s(m, l)
            }, _dialogs: null, _lastYOffset: 0, _loaderEl: null, _overlayEl: null, _stack: [], _active: null, get: function (l) {
                return r._dialogs[l]
            }, _findRoot: function (l) {
                while (l) {
                    if (z.containsCss(l, "fb_dialog")) {
                        return l
                    }
                    l = l.parentNode
                }
            }, _createWWWLoader: function (l) {
                l = l ? l : 460;
                return r.create({content: ('<div class="dialog_title">  <a id="fb_dialog_loader_close">    <div class="fb_dialog_close_icon"></div>  </a>  <span>Facebook</span>  <div style="clear:both;"></div></div><div class="dialog_content"></div><div class="dialog_footer"></div>'), width: l})
            }, _createMobileLoader: function () {
                var l = t.nativeApp() ? "" : ('<table>  <tbody>    <tr>      <td class="header_left">        <label class="touchable_button">          <input type="submit" value="' + x.tx._("Cancel") + '"            id="fb_dialog_loader_close"/>        </label>      </td>      <td class="header_center">        <div>' + x.tx._("Loading...") + '</div>      </td>      <td class="header_right">      </td>    </tr>  </tbody></table>');
                return r.create({classes: "loading" + (t.ipad() ? " centered" : ""), content: ('<div class="dialog_header">' + l + "</div>")})
            }, _restoreBodyPosition: function () {
                if (!t.ipad()) {
                    var l = i.getElementsByTagName("body")[0];
                    z.removeCss(l, "fb_hidden")
                }
            }, _showIPadOverlay: function () {
                if (!t.ipad()) {
                    return
                }
                if (!r._overlayEl) {
                    r._overlayEl = i.createElement("div");
                    r._overlayEl.setAttribute("id", "fb_dialog_ipad_overlay");
                    A.append(r._overlayEl, null)
                }
                r._overlayEl.className = ""
            }, _hideIPadOverlay: function () {
                if (t.ipad()) {
                    r._overlayEl.className = "hidden"
                }
            }, showLoader: function (o, n) {
                r._showIPadOverlay();
                if (!r._loaderEl) {
                    r._loaderEl = r._findRoot(t.mobile() ? r._createMobileLoader() : r._createWWWLoader(n))
                }
                if (!o) {
                    o = function () {
                    }
                }
                var m = i.getElementById("fb_dialog_loader_close");
                z.removeCss(m, "fb_hidden");
                m.onclick = function () {
                    r._hideLoader();
                    r._restoreBodyPosition();
                    r._hideIPadOverlay();
                    o()
                };
                var l = i.getElementById("fb_dialog_ipad_overlay");
                if (l) {
                    l.ontouchstart = m.onclick
                }
                r._makeActive(r._loaderEl)
            }, _hideLoader: function () {
                if (r._loaderEl && r._loaderEl == r._active) {
                    r._loaderEl.style.top = "-10000px"
                }
            }, _makeActive: function (l) {
                r._setDialogSizes();
                r._lowerActive();
                r._active = l;
                if (v.isEnvironment(v.ENVIRONMENTS.CANVAS)) {
                    B.getPageInfo(function (m) {
                        r._centerActive(m)
                    })
                }
                r._centerActive()
            }, _lowerActive: function () {
                if (!r._active) {
                    return
                }
                r._active.style.top = "-10000px";
                r._active = null
            }, _removeStacked: function (l) {
                r._stack = j(r._stack, "filter", true, function (m) {
                    return m != l
                })
            }, _centerActive: function (m) {
                var N = r._active;
                if (!N) {
                    return
                }
                var M = z.getViewportInfo(), L = parseInt(N.offsetWidth, 10), K = parseInt(N.offsetHeight, 10), J = M.scrollLeft + (M.width - L) / 2, I = (M.height - K) / 2.5;
                if (J < I) {
                    I = J
                }
                var q = M.height - K - I, p = (M.height - K) / 2;
                if (m) {
                    p = m.scrollTop - m.offsetTop + (m.clientHeight - K) / 2
                }
                if (p < I) {
                    p = I
                } else {
                    if (p > q) {
                        p = q
                    }
                }
                p += M.scrollTop;
                if (t.mobile()) {
                    var l = 100;
                    if (t.ipad()) {
                        l += (M.height - K) / 2
                    } else {
                        var o = i.getElementsByTagName("body")[0];
                        z.addCss(o, "fb_hidden");
                        J = 10000;
                        p = 10000
                    }
                    var n = z.getByClass("fb_dialog_padding", N);
                    if (n.length) {
                        n[0].style.height = l + "px"
                    }
                }
                N.style.left = (J > 0 ? J : 0) + "px";
                N.style.top = (p > 0 ? p : 0) + "px"
            }, _setDialogSizes: function () {
                if (!t.mobile() || t.ipad()) {
                    return
                }
                for (var m in r._dialogs) {
                    if (r._dialogs.hasOwnProperty(m)) {
                        var l = i.getElementById(m);
                        if (l) {
                            l.style.width = r.getDefaultSize().width + "px";
                            l.style.height = r.getDefaultSize().height + "px"
                        }
                    }
                }
            }, getDefaultSize: function () {
                if (t.mobile()) {
                    if (t.ipad()) {
                        return{width: 500, height: 590}
                    } else {
                        if (t.android()) {
                            return{width: screen.availWidth, height: screen.availHeight}
                        } else {
                            var n = h.innerWidth, m = h.innerHeight, l = n / m > 1.2;
                            return{width: n, height: Math.max(m, (l ? screen.width : screen.height))}
                        }
                    }
                }
                return{width: 575, height: 240}
            }, _handleOrientationChange: function (o) {
                if (t.android() && screen.availWidth == r._availScreenWidth) {
                    f(r._handleOrientationChange, 50);
                    return
                }
                r._availScreenWidth = screen.availWidth;
                if (t.ipad()) {
                    r._centerActive()
                } else {
                    var n = r.getDefaultSize().width;
                    for (var m in r._dialogs) {
                        if (r._dialogs.hasOwnProperty(m)) {
                            var l = i.getElementById(m);
                            if (l) {
                                l.style.width = n + "px"
                            }
                        }
                    }
                }
            }, _addOrientationHandler: function () {
                if (!t.mobile()) {
                    return
                }
                var l = "onorientationchange" in h ? "orientationchange" : "resize";
                r._availScreenWidth = screen.availWidth;
                y.add(h, l, r._handleOrientationChange)
            }, create: function (I) {
                I = I || {};
                var q = i.createElement("div"), p = i.createElement("div"), o = "fb_dialog";
                if (I.closeIcon && I.onClose) {
                    var n = i.createElement("a");
                    n.className = "fb_dialog_close_icon";
                    n.onclick = I.onClose;
                    q.appendChild(n)
                }
                o += " " + (I.classes || "");
                if (t.ie()) {
                    o += " fb_dialog_legacy";
                    j(["vert_left", "vert_right", "horiz_top", "horiz_bottom", "top_left", "top_right", "bottom_left", "bottom_right"], "forEach", true, function (K) {
                        var J = i.createElement("span");
                        J.className = "fb_dialog_" + K;
                        q.appendChild(J)
                    })
                } else {
                    o += t.mobile() ? " fb_dialog_mobile" : " fb_dialog_advanced"
                }
                if (I.content) {
                    A.append(I.content, p)
                }
                q.className = o;
                var m = parseInt(I.width, 10);
                if (!isNaN(m)) {
                    q.style.width = m + "px"
                }
                p.className = "fb_dialog_content";
                q.appendChild(p);
                if (t.mobile()) {
                    var l = i.createElement("div");
                    l.className = "fb_dialog_padding";
                    q.appendChild(l)
                }
                A.append(q);
                if (I.visible) {
                    r.show(q)
                }
                return p
            }, show: function (m) {
                var l = r._findRoot(m);
                if (l) {
                    r._removeStacked(l);
                    r._hideLoader();
                    r._makeActive(l);
                    r._stack.push(l);
                    if ("fbCallID" in m) {
                        r.get(m.fbCallID).inform("iframe_show")
                    }
                }
            }, hide: function (m) {
                var l = r._findRoot(m);
                r._hideLoader();
                if (l == r._active) {
                    r._lowerActive();
                    r._restoreBodyPosition();
                    r._hideIPadOverlay();
                    if ("fbCallID" in m) {
                        r.get(m.fbCallID).inform("iframe_hide")
                    }
                }
            }, remove: function (m) {
                m = r._findRoot(m);
                if (m) {
                    var l = r._active == m;
                    r._removeStacked(m);
                    if (l) {
                        r._hideLoader();
                        if (r._stack.length > 0) {
                            r.show(r._stack.pop())
                        } else {
                            r._lowerActive();
                            r._restoreBodyPosition();
                            r._hideIPadOverlay()
                        }
                    } else {
                        if (r._active === null && r._stack.length > 0) {
                            r.show(r._stack.pop())
                        }
                    }
                    f(function () {
                        m.parentNode.removeChild(m)
                    }, 3000)
                }
            }, isActive: function (m) {
                var l = r._findRoot(m);
                return l && l === r._active
            }};
            D.exports = r
        });
        b("sdk.Frictionless", ["sdk.Auth", "sdk.api", "sdk.Event", "sdk.Dialog"], function (v, u, t, s, r, q) {
            var p = u("sdk.Auth"), o = u("sdk.api"), n = u("sdk.Event"), m = u("sdk.Dialog"), l = {_allowedRecipients: {}, _useFrictionless: false, _updateRecipients: function () {
                l._allowedRecipients = {};
                o("/me/apprequestformerrecipients", function (w) {
                    if (!w || w.error) {
                        return
                    }
                    j(w.data, "forEach", true, function (x) {
                        l._allowedRecipients[x.recipient_id] = true
                    })
                })
            }, init: function () {
                l._useFrictionless = true;
                p.getLoginStatus(function (w) {
                    if (w.status == "connected") {
                        l._updateRecipients()
                    }
                });
                n.subscribe("auth.login", function (w) {
                    if (w.authResponse) {
                        l._updateRecipients()
                    }
                })
            }, _processRequestResponse: function (x, w) {
                return function (z) {
                    var y = z && z.updated_frictionless;
                    if (l._useFrictionless && y) {
                        l._updateRecipients()
                    }
                    if (z) {
                        if (!w && z.frictionless) {
                            m._hideLoader();
                            m._restoreBodyPosition();
                            m._hideIPadOverlay()
                        }
                        delete z.frictionless;
                        delete z.updated_frictionless
                    }
                    x && x(z)
                }
            }, isAllowed: function (x) {
                if (!x) {
                    return false
                }
                if (typeof x === "number") {
                    return x in l._allowedRecipients
                }
                if (typeof x === "string") {
                    x = x.split(",")
                }
                x = j(x, "map", true, function (z) {
                    return j(String(z), "trim", true)
                });
                var w = true, y = false;
                j(x, "forEach", true, function (z) {
                    w = w && z in l._allowedRecipients;
                    y = true
                });
                return w && y
            }};
            n.subscribe("init:post", function (w) {
                if (w.frictionlessRequests) {
                    l.init()
                }
            });
            r.exports = l
        });
        b("insertIframe", ["guid", "GlobalCallback"], function (t, s, r, q, p, o) {
            var n = s("guid"), m = s("GlobalCallback");

            function l(x) {
                x.id = x.id || n();
                x.name = x.name || n();
                var w = false, v = false, u = function () {
                    if (w && !v) {
                        v = true;
                        x.onload && x.onload(x.root.firstChild)
                    }
                }, A = m.create(u);
                if (i.attachEvent) {
                    var z = ('<iframe id="' + x.id + '" name="' + x.name + '"' + (x.title ? ' title="' + x.title + '"' : "") + (x.className ? ' class="' + x.className + '"' : "") + ' style="border:none;' + (x.width ? "width:" + x.width + "px;" : "") + (x.height ? "height:" + x.height + "px;" : "") + '" src="javascript:false;" frameborder="0" scrolling="no" allowtransparency="true" onload="' + A + '()"></iframe>');
                    x.root.innerHTML = ('<iframe src="javascript:false" frameborder="0" scrolling="no" style="height:1px"></iframe>');
                    w = true;
                    f(function () {
                        x.root.innerHTML = z;
                        x.root.firstChild.src = x.url;
                        x.onInsert && x.onInsert(x.root.firstChild)
                    }, 0)
                } else {
                    var y = i.createElement("iframe");
                    y.id = x.id;
                    y.name = x.name;
                    y.onload = u;
                    y.scrolling = "no";
                    y.style.border = "none";
                    y.style.overflow = "hidden";
                    if (x.title) {
                        y.title = x.title
                    }
                    if (x.className) {
                        y.className = x.className
                    }
                    if (x.height !== undefined) {
                        y.style.height = x.height + "px"
                    }
                    if (x.width !== undefined) {
                        if (x.width == "100%") {
                            y.style.width = x.width
                        } else {
                            y.style.width = x.width + "px"
                        }
                    }
                    x.root.appendChild(y);
                    w = true;
                    y.src = x.url;
                    x.onInsert && x.onInsert(y)
                }
            }

            p.exports = l
        });
        b("sdk.Native", ["copyProperties", "Log", "UserAgent"], function (v, u, t, s, r, q) {
            var p = u("copyProperties"), o = u("Log"), n = u("UserAgent"), m = "fbNativeReady", l = {onready: function (x) {
                if (!n.nativeApp()) {
                    o.error("FB.Native.onready only works when the page is rendered in a WebView of the native Facebook app. Test if this is the case calling FB.UA.nativeApp()");
                    return
                }
                if (h.__fbNative && !this.nativeReady) {
                    p(this, h.__fbNative)
                }
                if (this.nativeReady) {
                    x()
                } else {
                    var w = function (y) {
                        h.removeEventListener(m, w);
                        this.onready(x)
                    };
                    h.addEventListener(m, w, false)
                }
            }};
            r.exports = l
        });
        b("sdk.UIServer", ["sdk.Auth", "sdk.Content", "copyProperties", "sdk.Dialog", "sdk.DOM", "sdk.Event", "flattenObject", "sdk.Frictionless", "sdk.getContextType", "guid", "insertIframe", "Log", "sdk.Native", "QueryString", "resolveURI", "sdk.RPC", "sdk.Runtime", "UrlMap", "UserAgent", "sdk.XD"], function (ac, ab, Z, Y, X, W) {
            var V = ab("sdk.Auth"), U = ab("sdk.Content"), T = ab("copyProperties"), S = ab("sdk.Dialog"), R = ab("sdk.DOM"), Q = ab("sdk.Event"), P = ab("flattenObject"), O = ab("sdk.Frictionless"), N = ab("sdk.getContextType"), L = ab("guid"), K = ab("insertIframe"), J = ab("Log"), I = ab("sdk.Native"), H = ab("QueryString"), G = ab("resolveURI"), F = ab("sdk.RPC"), E = ab("sdk.Runtime"), D = ab("UrlMap"), C = ab("UserAgent"), B = ab("sdk.XD"), ad = {transform: function (l) {
                if (l.params.display === "touch" && l.params.access_token && h.postMessage) {
                    l.params.channel = M._xdChannelHandler(l.id, "parent");
                    if (!C.nativeApp()) {
                        l.params.in_iframe = 1
                    }
                    return l
                } else {
                    return M.genericTransform(l)
                }
            }, getXdRelation: function (l) {
                var m = l.display;
                if (m === "touch" && h.postMessage && l.in_iframe) {
                    return"parent"
                }
                return M.getXdRelation(l)
            }}, A = {"stream.share": {size: {width: 670, height: 340}, url: "sharer.php", transform: function (l) {
                if (!l.params.u) {
                    l.params.u = h.location.toString()
                }
                l.params.display = "popup";
                return l
            }}, apprequests: {transform: function (l) {
                l = ad.transform(l);
                l.params.frictionless = O && O._useFrictionless;
                if (l.params.frictionless) {
                    if (O.isAllowed(l.params.to)) {
                        l.params.display = "iframe";
                        l.params.in_iframe = true;
                        l.hideLoader = true
                    }
                    l.cb = O._processRequestResponse(l.cb, l.hideLoader)
                }
                return l
            }, getXdRelation: ad.getXdRelation}, feed: ad, "permissions.oauth": {url: "dialog/oauth", size: {width: (C.mobile() ? null : 440), height: (C.mobile() ? null : 183)}, transform: function (l) {
                if (!E.getClientID()) {
                    J.error("FB.login() called before FB.init().");
                    return
                }
                if (V.getAuthResponse() && !l.params.scope) {
                    J.error("FB.login() called when user is already connected.");
                    l.cb && l.cb({status: E.getLoginStatus(), authResponse: V.getAuthResponse()});
                    return
                }
                var m = l.cb, n = l.id;
                delete l.cb;
                if (l.params.display === "async") {
                    T(l.params, {client_id: E.getClientID(), origin: N(), response_type: "token,signed_request", domain: location.hostname});
                    l.cb = V.xdResponseWrapper(m, V.getAuthResponse(), "permissions.oauth")
                } else {
                    T(l.params, {client_id: E.getClientID(), redirect_uri: G(M.xdHandler(m, n, "opener", V.getAuthResponse(), "permissions.oauth")), origin: N(), response_type: "token,signed_request", domain: location.hostname})
                }
                return l
            }}, "auth.logout": {url: "logout.php", transform: function (l) {
                if (!E.getClientID()) {
                    J.error("FB.logout() called before calling FB.init().")
                } else {
                    if (!V.getAuthResponse()) {
                        J.error("FB.logout() called without an access token.")
                    } else {
                        l.params.next = M.xdHandler(l.cb, l.id, "parent", V.getAuthResponse(), "logout");
                        return l
                    }
                }
            }}, "login.status": {url: "dialog/oauth", transform: function (l) {
                var m = l.cb, n = l.id;
                delete l.cb;
                T(l.params, {client_id: E.getClientID(), redirect_uri: M.xdHandler(m, n, "parent", V.getAuthResponse(), "login_status"), origin: N(), response_type: "token,signed_request,code", domain: location.hostname});
                return l
            }}}, M = {Methods: A, _loadedNodes: {}, _defaultCb: {}, _resultToken: '"xxRESULTTOKENxx"', genericTransform: function (l) {
                if (l.params.display == "dialog" || l.params.display == "iframe") {
                    T(l.params, {display: "iframe", channel: M._xdChannelHandler(l.id, "parent.parent")}, true)
                }
                return l
            }, prepareCall: function (u, q) {
                var n = u.method.toLowerCase(), t = T({}, M.Methods[n]), p = L(), m = E.getSecure() || (n !== "auth.status" && n != "login.status");
                T(u, {app_id: E.getClientID(), locale: E.getLocale(), sdk: "joey", access_token: m && E.getAccessToken() || undefined});
                u.display = M.getDisplayMode(t, u);
                if (!t.url) {
                    t.url = "dialog/" + n
                }
                var s = {cb: q, id: p, size: t.size || M.getDefaultSize(), url: D.resolve(u.display == "touch" ? "m" : "www", m) + "/" + t.url, params: u, name: n, dialog: S.newInstance(p, u.display)}, o = t.transform ? t.transform : M.genericTransform;
                if (o) {
                    s = o(s);
                    if (!s) {
                        return
                    }
                }
                var l = t.getXdRelation || M.getXdRelation, r = l(s.params);
                if (!(s.id in M._defaultCb) && !("next" in s.params) && !("redirect_uri" in s.params)) {
                    s.params.next = M._xdResult(s.cb, s.id, r, true)
                }
                if (r === "parent") {
                    T(s.params, {channel_url: M._xdChannelHandler(p, "parent.parent")}, true)
                }
                s = M.prepareParams(s);
                return s
            }, prepareParams: function (l) {
                var m = l.params.method;
                if (l.params.display !== "async") {
                    delete l.params.method
                }
                l.params = P(l.params);
                var n = H.encode(l.params);
                if (!C.nativeApp() && M.urlTooLongForIE(l.url + "?" + n)) {
                    l.post = true
                } else {
                    if (n) {
                        l.url += "?" + n
                    }
                }
                return l
            }, urlTooLongForIE: function (l) {
                return l.length > 2000
            }, getDisplayMode: function (l, m) {
                if (m.display === "hidden" || m.display === "none") {
                    return m.display
                }
                var n = E.isEnvironment(E.ENVIRONMENTS.CANVAS) || E.isEnvironment(E.ENVIRONMENTS.PAGETAB);
                if (n && !m.display) {
                    return"async"
                }
                if (C.mobile() || m.display === "touch") {
                    return"touch"
                }
                if (!E.getAccessToken() && m.display == "dialog" && !l.loggedOutIframe) {
                    J.error('"dialog" mode can only be used when the user is connected.');
                    return"popup"
                }
                if (l.connectDisplay && !n) {
                    return l.connectDisplay
                }
                return m.display || (E.getAccessToken() ? "dialog" : "popup")
            }, getXdRelation: function (l) {
                var m = l.display;
                if (m === "popup" || m === "touch") {
                    return"opener"
                }
                if (m === "dialog" || m === "iframe" || m === "hidden" || m === "none") {
                    return"parent"
                }
                if (m === "async") {
                    return"parent.frames[" + h.name + "]"
                }
            }, popup: function (w) {
                var s = typeof h.screenX != "undefined" ? h.screenX : h.screenLeft, o = typeof h.screenY != "undefined" ? h.screenY : h.screenTop, v = typeof h.outerWidth != "undefined" ? h.outerWidth : i.documentElement.clientWidth, r = typeof h.outerHeight != "undefined" ? h.outerHeight : (i.documentElement.clientHeight - 22), n = C.mobile() ? null : w.size.width, u = C.mobile() ? null : w.size.height, q = (s < 0) ? h.screen.width + s : s, m = parseInt(q + ((v - n) / 2), 10), t = parseInt(o + ((r - u) / 2.5), 10), p = [];
                if (n !== null) {
                    p.push("width=" + n)
                }
                if (u !== null) {
                    p.push("height=" + u)
                }
                p.push("left=" + m);
                p.push("top=" + t);
                p.push("scrollbars=1");
                if (w.name == "permissions.request" || w.name == "permissions.oauth") {
                    p.push("location=1,toolbar=0")
                }
                p = p.join(",");
                var l;
                if (w.post) {
                    l = h.open("about:blank", w.id, p);
                    if (l) {
                        M.setLoadedNode(w, l, "popup");
                        U.submitToTarget({url: w.url, target: w.id, params: w.params})
                    }
                } else {
                    l = h.open(w.url, w.id, p);
                    if (l) {
                        M.setLoadedNode(w, l, "popup")
                    }
                }
                if (!l) {
                    return
                }
                if (w.id in M._defaultCb) {
                    M._popupMonitor()
                }
            }, setLoadedNode: function (l, m, n) {
                if (l.params && l.params.display != "popup") {
                    m.fbCallID = l.id
                }
                m = {node: m, type: n, fbCallID: l.id};
                M._loadedNodes[l.id] = m
            }, getLoadedNode: function (l) {
                var m = typeof l == "object" ? l.id : l, n = M._loadedNodes[m];
                return n ? n.node : null
            }, hidden: function (l) {
                l.className = "FB_UI_Hidden";
                l.root = U.appendHidden("");
                M._insertIframe(l)
            }, iframe: function (l) {
                l.className = "FB_UI_Dialog";
                var m = function () {
                    M._triggerDefault(l.id)
                };
                l.root = S.create({onClose: m, closeIcon: true, classes: (C.ipad() ? "centered" : "")});
                if (!l.hideLoader) {
                    S.showLoader(m, l.size.width)
                }
                R.addCss(l.root, "fb_dialog_iframe");
                M._insertIframe(l)
            }, touch: function (l) {
                if (l.params && l.params.in_iframe) {
                    if (l.ui_created) {
                        S.showLoader(function () {
                            M._triggerDefault(l.id)
                        }, 0)
                    } else {
                        M.iframe(l)
                    }
                } else {
                    if (C.nativeApp() && !l.ui_created) {
                        l.frame = l.id;
                        I.onready(function () {
                            M.setLoadedNode(l, I.open(l.url + "#cb=" + l.frameName), "native")
                        });
                        M._popupMonitor()
                    } else {
                        if (!l.ui_created) {
                            M.popup(l)
                        }
                    }
                }
            }, async: function (l) {
                l.params.redirect_uri = location.protocol + "//" + location.host + location.pathname;
                delete l.params.access_token;
                F.remote.showDialog(l.params, function (m) {
                    l.cb(m.result)
                })
            }, getDefaultSize: function () {
                return S.getDefaultSize()
            }, _insertIframe: function (l) {
                M._loadedNodes[l.id] = false;
                var m = function (n) {
                    if (l.id in M._loadedNodes) {
                        M.setLoadedNode(l, n, "iframe")
                    }
                };
                if (l.post) {
                    K({url: "about:blank", root: l.root, className: l.className, width: l.size.width, height: l.size.height, id: l.id, onInsert: m, onload: function (n) {
                        U.submitToTarget({url: l.url, target: n.name, params: l.params})
                    }})
                } else {
                    K({url: l.url, root: l.root, className: l.className, width: l.size.width, height: l.size.height, id: l.id, name: l.frameName, onInsert: m})
                }
            }, _handleResizeMessage: function (l, m) {
                var n = M.getLoadedNode(l);
                if (!n) {
                    return
                }
                if (m.height) {
                    n.style.height = m.height + "px"
                }
                if (m.width) {
                    n.style.width = m.width + "px"
                }
                B.inform("resize.ack", m || {}, "parent.frames[" + n.name + "]");
                if (!S.isActive(n)) {
                    S.show(n)
                }
            }, _triggerDefault: function (l) {
                M._xdRecv({frame: l}, M._defaultCb[l] || function () {
                })
            }, _popupMonitor: function () {
                var m;
                for (var n in M._loadedNodes) {
                    if (M._loadedNodes.hasOwnProperty(n) && n in M._defaultCb) {
                        var o = M._loadedNodes[n];
                        if (o.type != "popup" && o.type != "native") {
                            continue
                        }
                        var p = o.node;
                        try {
                            if (p.closed) {
                                M._triggerDefault(n)
                            } else {
                                m = true
                            }
                        } catch (l) {
                        }
                    }
                }
                if (m && !M._popupInterval) {
                    M._popupInterval = g(M._popupMonitor, 100)
                } else {
                    if (!m && M._popupInterval) {
                        clearInterval(M._popupInterval);
                        M._popupInterval = null
                    }
                }
            }, _xdChannelHandler: function (l, m) {
                return B.handler(function (o) {
                    var p = M.getLoadedNode(l);
                    if (!p) {
                        return
                    }
                    if (o.type == "resize") {
                        M._handleResizeMessage(l, o)
                    } else {
                        if (o.type == "hide") {
                            S.hide(p)
                        } else {
                            if (o.type == "rendered") {
                                var n = S._findRoot(p);
                                S.show(n)
                            } else {
                                if (o.type == "fireevent") {
                                    Q.fire(o.event)
                                }
                            }
                        }
                    }
                }, m, true, null)
            }, _xdNextHandler: function (l, m, n, o) {
                if (o) {
                    M._defaultCb[m] = l
                }
                return B.handler(function (p) {
                    M._xdRecv(p, l)
                }, n) + "&frame=" + m
            }, _xdRecv: function (m, n) {
                var o = M.getLoadedNode(m.frame);
                if (o) {
                    try {
                        if (R.containsCss(o, "FB_UI_Hidden")) {
                            f(function () {
                                o.parentNode.parentNode.removeChild(o.parentNode)
                            }, 3000)
                        } else {
                            if (R.containsCss(o, "FB_UI_Dialog")) {
                                S.remove(o)
                            }
                        }
                    } catch (p) {
                    }
                    try {
                        if (o.close) {
                            o.close();
                            if (/iPhone.*Version\/(5|6)/.test(navigator.userAgent) && RegExp.$1 !== "5") {
                                h.focus()
                            }
                            M._popupCount--
                        }
                    } catch (l) {
                    }
                }
                delete M._loadedNodes[m.frame];
                delete M._defaultCb[m.frame];
                n(m)
            }, _xdResult: function (l, m, n, o) {
                return(M._xdNextHandler(function (p) {
                    l && l(p.result && p.result != M._resultToken && j("JSON", "parse", false, p.result))
                }, m, n, o) + "&result=" + encodeURIComponent(M._resultToken))
            }, xdHandler: function (m, n, o, p, l) {
                return M._xdNextHandler(V.xdResponseWrapper(m, p, l), n, o, true)
            }};
            F.stub("showDialog");
            X.exports = M
        });
        b("sdk.ui", ["Assert", "copyProperties", "Log", "sdk.Runtime", "sdk.UIServer", "SDKConfig"], function (z, y, x, w, v, u) {
            var t = y("Assert"), s = y("copyProperties"), r = y("Log"), q = y("sdk.Runtime"), p = x("SDKConfig"), o = y("sdk.UIServer");

            function n(C, B) {
                t.isObject(C);
                t.maybeFunction(B);
                C = s({}, C);
                if (!C.method) {
                    r.error('"method" is a required parameter for FB.ui().');
                    return null
                }
                if (C.redirect_uri) {
                    r.warn("When using FB.ui, you should not specify a redirect_uri.");
                    delete C.redirect_uri
                }
                if ((C.method == "permissions.request" || C.method == "permissions.oauth") && (C.display == "iframe" || C.display == "dialog")) {
                    var A = "scope" in C ? C.scope : q.getScope();
                    if (A) {
                        var m = A.split(/\s|,/g);
                        for (var l = 0; l < m.length; l++) {
                            var G = j(m[l], "trim", true);
                            if (G && !p.initSitevars.iframePermissions[G]) {
                                C.display = "popup";
                                break
                            }
                        }
                    }
                }
                var F = o.prepareCall(C, B || function () {
                });
                if (!F) {
                    return null
                }
                var E = F.params.display;
                if (E === "dialog") {
                    E = "iframe"
                } else {
                    if (E === "none") {
                        E = "hidden"
                    }
                }
                var D = o[E];
                if (!D) {
                    r.error('"display" must be one of "popup", "dialog", "iframe", "touch", "async", "hidden", or "none"');
                    return null
                }
                D(F);
                return F.dialog
            }

            v.exports = n
        });
        b("legacy:fb.auth", ["sdk.Auth", "sdk.Cookie", "copyProperties", "sdk.Event", "FB", "Log", "sdk.Runtime", "sdk.SignedRequest", "sdk.ui"], function (z, y, x, w) {
            var v = y("sdk.Auth"), u = y("sdk.Cookie"), t = y("copyProperties"), s = y("sdk.Event"), r = y("FB"), q = y("Log"), p = y("sdk.Runtime"), o = y("sdk.SignedRequest"), n = y("sdk.ui");
            r.provide("", {getLoginStatus: function () {
                return v.getLoginStatus.apply(v, arguments)
            }, getAuthResponse: function () {
                return v.getAuthResponse()
            }, getAccessToken: function () {
                return p.getAccessToken() || null
            }, getUserID: function () {
                return p.getUserID() || p.getCookieUserID()
            }, login: function (A, m) {
                if (m && m.perms && !m.scope) {
                    m.scope = m.perms;
                    delete m.perms;
                    q.warn("OAuth2 specification states that 'perms' should now be called 'scope'.  Please update.")
                }
                var l = p.isEnvironment(p.ENVIRONMENTS.CANVAS) || p.isEnvironment(p.ENVIRONMENTS.PAGETAB);
                n(t({method: "permissions.oauth", display: l ? "async" : "popup", domain: location.hostname}, m || {}), A)
            }, logout: function (l) {
                n({method: "auth.logout", display: "hidden"}, l)
            }});
            v.subscribe("logout", j(s.fire, "bind", true, s, "auth.logout"));
            v.subscribe("login", j(s.fire, "bind", true, s, "auth.login"));
            v.subscribe("authresponse.change", j(s.fire, "bind", true, s, "auth.authResponseChange"));
            v.subscribe("status.change", j(s.fire, "bind", true, s, "auth.statusChange"));
            s.subscribe("init:post", function (B) {
                if (B.status) {
                    v.getLoginStatus()
                }
                if (p.getClientID()) {
                    if (B.authResponse) {
                        v.setAuthResponse(B.authResponse, "connected")
                    } else {
                        if (p.getUseCookie()) {
                            var A = u.loadSignedRequest(), m;
                            if (A) {
                                try {
                                    m = o.parse(A)
                                } catch (l) {
                                    u.clearSignedRequestCookie()
                                }
                                if (m && m.user_id) {
                                    p.setCookieUserID(m.user_id)
                                }
                            }
                            u.loadMeta()
                        }
                    }
                }
            })
        }, 3);
        b("sdk.Canvas.Flash", ["sdk.api", "sdk.RPC", "Log", "sdk.Runtime", "createArrayFrom"], function (H, G, F, E, D, C) {
            var B = G("sdk.api"), A = G("sdk.RPC"), z = G("Log"), y = G("sdk.Runtime"), x = G("createArrayFrom"), w = "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000", v = null;

            function u(l) {
                l.style.visibility = "hidden"
            }

            function t(l) {
                l.style.visibility = ""
            }

            function s(m) {
                z.info("hideFlashCallback called with %s", m.state);
                var l = h.document.getElementsByTagName("object");
                j(x(l), "forEach", true, function (q) {
                    if (q.type.toLowerCase() != "application/x-shockwave-flash" && (!q.classid || q.classid.toUpperCase() != w)) {
                        return
                    }
                    for (var p = 0; p < q.childNodes.length; p++) {
                        var o = q.childNodes[p];
                        if (/param/i.test(o.nodeName) && /wmode/i.test(o.name) && /opaque|transparent/i.test(o.value)) {
                            return
                        }
                    }
                    if (v) {
                        z.info("Calling developer specified callback");
                        var n = {state: m.state, elem: q};
                        v(n);
                        f(function () {
                            if (n.state == "opened") {
                                u(q)
                            } else {
                                t(q)
                            }
                        }, 200)
                    } else {
                        if (m.state == "opened") {
                            q._old_visibility = q.style.visibility;
                            q.style.visibility = "hidden"
                        } else {
                            if (m.state == "closed") {
                                q.style.visibility = q._old_visibility || "";
                                delete q._old_visibility
                            }
                        }
                    }
                    if (Math.random() <= 1 / 1000) {
                        B(y.getClientID() + "/occludespopups", "post", {})
                    }
                })
            }

            A.local.hideFlashObjects = function () {
                s({state: "opened"})
            };
            A.local.showFlashObjects = function () {
                s({state: "closed"})
            };
            var r = {_setHideFlashCallback: function (l) {
                v = l
            }, hideFlashElement: u, showFlashElement: t};
            D.exports = r
        });
        b("sdk.Canvas.IframeHandling", ["DOMWrapper", "sdk.RPC"], function (B, A, z, y, x, w) {
            var v = A("DOMWrapper"), u = A("sdk.RPC"), t = null, s;

            function r() {
                var C = v.getWindow().document, n = C.body, m = C.documentElement, l = Math.max(n.offsetTop, 0), H = Math.max(m.offsetTop, 0), G = n.scrollHeight + l, F = n.offsetHeight + l, E = m.scrollHeight + H, D = m.offsetHeight + H;
                return Math.max(G, F, E, D)
            }

            function q(D) {
                if (typeof D != "object") {
                    D = {}
                }
                var C = 0, n = 0;
                if (!D.height) {
                    D.height = r();
                    C = 16;
                    n = 4
                }
                if (!D.frame) {
                    D.frame = h.name || "iframe_canvas"
                }
                if (s) {
                    var m = s.height, l = D.height - m;
                    if (l <= n && l >= -C) {
                        return false
                    }
                }
                s = D;
                u.remote.setSize(D);
                return true
            }

            function p(m, l) {
                if (l === undefined && typeof m === "number") {
                    l = m;
                    m = true
                }
                if (m || m === undefined) {
                    if (t === null) {
                        t = g(function () {
                            q()
                        }, l || 100)
                    }
                    q()
                } else {
                    if (t !== null) {
                        clearInterval(t);
                        t = null
                    }
                }
            }

            u.stub("setSize");
            var o = {setSize: q, setAutoGrow: p};
            x.exports = o
        });
        b("sdk.Canvas.Navigation", ["sdk.RPC"], function (t, s, r, q, p, o) {
            var n = s("sdk.RPC");

            function m(u) {
                n.local.navigate = function (v) {
                    u({path: v})
                };
                n.remote.setNavigationEnabled(true)
            }

            n.stub("setNavigationEnabled");
            var l = {setUrlHandler: m};
            p.exports = l
        });
        b("sdk.Canvas.Tti", ["sdk.RPC", "sdk.Runtime"], function (z, y, x, w, v, u) {
            var t = y("sdk.RPC"), s = y("sdk.Runtime");

            function r(B, A) {
                var m = {appId: s.getClientID(), time: j("Date", "now", false), name: A}, l = [m];
                if (B) {
                    l.push(function (C) {
                        B(C.result)
                    })
                }
                t.remote.logTtiMessage.apply(null, l)
            }

            function q() {
                r(null, "StartIframeAppTtiTimer")
            }

            function p(l) {
                r(l, "StopIframeAppTtiTimer")
            }

            function o(l) {
                r(l, "RecordIframeAppTti")
            }

            t.stub("logTtiMessage");
            var n = {setDoneLoading: o, startTimer: q, stopTimer: p};
            v.exports = n
        });
        b("legacy:fb.canvas", ["Assert", "sdk.Canvas.Environment", "sdk.Event", "FB", "sdk.Canvas.Flash", "sdk.Canvas.IframeHandling", "Log", "sdk.Canvas.Navigation", "sdk.Runtime", "sdk.Canvas.Tti"], function (B, A, z, y) {
            var x = A("Assert"), w = A("sdk.Canvas.Environment"), v = A("sdk.Event"), u = A("FB"), t = A("sdk.Canvas.Flash"), s = A("sdk.Canvas.IframeHandling"), r = A("Log"), q = A("sdk.Canvas.Navigation"), p = A("sdk.Runtime"), o = A("sdk.Canvas.Tti");
            u.provide("Canvas", {setSize: function (l) {
                x.maybeObject(l, "Invalid argument");
                return s.setSize.apply(null, arguments)
            }, setAutoGrow: function () {
                return s.setAutoGrow.apply(null, arguments)
            }, getPageInfo: function (l) {
                x.isFunction(l, "Invalid argument");
                return w.getPageInfo.apply(null, arguments)
            }, scrollTo: function (m, l) {
                x.maybeNumber(m, "Invalid argument");
                x.maybeNumber(l, "Invalid argument");
                return w.scrollTo.apply(null, arguments)
            }, setDoneLoading: function (l) {
                x.maybeFunction(l, "Invalid argument");
                return o.setDoneLoading.apply(null, arguments)
            }, startTimer: function () {
                return o.startTimer.apply(null, arguments)
            }, stopTimer: function (l) {
                x.maybeFunction(l, "Invalid argument");
                return o.stopTimer.apply(null, arguments)
            }, getHash: function (l) {
                x.isFunction(l, "Invalid argument");
                return q.getHash.apply(null, arguments)
            }, setHash: function (l) {
                x.isString(l, "Invalid argument");
                return q.setHash.apply(null, arguments)
            }, setUrlHandler: function (l) {
                x.isFunction(l, "Invalid argument");
                return q.setUrlHandler.apply(null, arguments)
            }});
            u.provide("CanvasInsights", {setDoneLoading: function (l) {
                r.warn("Deprecated: use FB.Canvas.setDoneLoading");
                x.maybeFunction(l, "Invalid argument");
                return o.setDoneLoading.apply(null, arguments)
            }});
            v.subscribe("init:post", function (l) {
                if (p.isEnvironment(p.ENVIRONMENTS.CANVAS)) {
                    t._setHideFlashCallback(l.hideFlashCallback)
                }
            })
        }, 3);
        b("sdk.Canvas.Prefetcher", ["sdk.api", "createArrayFrom", "sdk.Runtime", "CanvasPrefetcherConfig"], function (N, M, L, K, J, I) {
            var H = M("sdk.api"), G = M("createArrayFrom"), F = L("CanvasPrefetcherConfig"), E = M("sdk.Runtime"), D = {AUTOMATIC: 0, MANUAL: 1}, C = F.sampleRate, B = F.blacklist, A = D.AUTOMATIC, z = [];

            function y() {
                var l = {object: "data", link: "href", script: "src"};
                if (A == D.AUTOMATIC) {
                    j(j("Object", "keys", false, l), "forEach", true, function (n) {
                        var m = l[n];
                        j(G(i.getElementsByTagName(n)), "forEach", true, function (o) {
                            if (o[m]) {
                                z.push(o[m])
                            }
                        })
                    })
                }
                if (z.length === 0) {
                    return
                }
                H(E.getClientID() + "/staticresources", "post", {urls: j("JSON", "stringify", false, z), is_https: location.protocol === "https:"});
                z = []
            }

            function x() {
                if (!E.isEnvironment(E.ENVIRONMENTS.CANVAS) || !E.getClientID() || !C) {
                    return
                }
                if (Math.random() > 1 / C || B == "*" || ~j(B, "indexOf", true, E.getClientID())) {
                    return
                }
                f(y, 30000)
            }

            function w(l) {
                A = l
            }

            function v(l) {
                z.push(l)
            }

            var u = {COLLECT_AUTOMATIC: D.AUTOMATIC, COLLECT_MANUAL: D.MANUAL, addStaticResource: v, setCollectionMode: w, _maybeSample: x};
            J.exports = u
        });
        b("legacy:fb.canvas.prefetcher", ["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"], function (m, l, s, r) {
            var q = l("FB"), p = l("sdk.Canvas.Prefetcher"), o = l("sdk.Event"), n = l("sdk.Runtime");
            q.provide("Canvas.Prefetcher", p);
            o.subscribe("init:post", function (t) {
                if (n.isEnvironment(n.ENVIRONMENTS.CANVAS)) {
                    p._maybeSample()
                }
            })
        }, 3);
        b("legacy:fb.compat.ui", ["copyProperties", "FB", "Log", "sdk.ui", "sdk.UIServer"], function (t, s, r, q) {
            var p = s("copyProperties"), o = s("FB"), n = s("Log"), m = s("sdk.ui"), l = s("sdk.UIServer");
            o.provide("", {share: function (u) {
                n.error("share() has been deprecated. Please use FB.ui() instead.");
                m({display: "popup", method: "stream.share", u: u})
            }, publish: function (v, u) {
                n.error("publish() has been deprecated. Please use FB.ui() instead.");
                v = v || {};
                m(p({display: "popup", method: "stream.publish", preview: 1}, v || {}), u)
            }, addFriend: function (v, u) {
                n.error("addFriend() has been deprecated. Please use FB.ui() instead.");
                m({display: "popup", id: v, method: "friend.add"}, u)
            }});
            l.Methods["auth.login"] = l.Methods["permissions.request"]
        }, 3);
        b("mergeArrays", [], function (m, l, r, q, p, o) {
            function n(u, t) {
                for (var s = 0; s < t.length; s++) {
                    if (j(u, "indexOf", true, t[s]) < 0) {
                        u.push(t[s])
                    }
                }
                return u
            }

            p.exports = n
        });
        b("format", [], function (m, l, r, q, p, o) {
            function n(t, s) {
                s = Array.prototype.slice.call(arguments, 1);
                return t.replace(/\{(\d+)\}/g, function (w, v) {
                    var u = s[Number(v)];
                    return(u === null || u === undefined) ? "" : u.toString()
                })
            }

            p.exports = n
        });
        b("safeEval", [], function (m, l, r, q, p, o) {
            function n(t, s) {
                if (t === null || typeof t === "undefined") {
                    return
                }
                if (typeof t !== "string") {
                    return t
                }
                if (/^\w+$/.test(t) && typeof h[t] === "function") {
                    return h[t].apply(null, s || [])
                }
                return Function('return eval("' + t.replace(/"/g, '\\"') + '");').apply(null, s || [])
            }

            p.exports = n
        });
        b("sdk.Waitable", ["sdk.Model"], function (m, l, s, r, q, p) {
            var o = l("sdk.Model"), n = o.extend({constructor: function () {
                this.parent({Value: undefined})
            }, error: function (t) {
                this.inform("error", t)
            }, wait: function (u, t) {
                if (t) {
                    this.subscribe("error", t)
                }
                this.monitor("Value.change", j(function () {
                    var v = this.getValue();
                    if (v !== undefined) {
                        this.value = v;
                        u(v);
                        return true
                    }
                }, "bind", true, this))
            }});
            q.exports = n
        });
        b("sdk.Query", ["format", "safeEval", "Type", "sdk.Waitable"], function (D, C, B, A, z, y) {
            var x = C("format"), w = C("safeEval"), v = C("Type"), u = C("sdk.Waitable");

            function t(l) {
                return j(l.split(","), "map", true, function (m) {
                    return j(m, "trim", true)
                })
            }

            function s(E) {
                var o = (/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(E), n, m, l = "unknown";
                if (o) {
                    m = o[2];
                    if (/^(["'])(?:\\?.)*?\1$/.test(m)) {
                        m = w(m);
                        l = "index"
                    } else {
                        if (/^\d+\.?\d*$/.test(m)) {
                            l = "index"
                        }
                    }
                }
                if (l == "index") {
                    n = {type: "index", key: o[1], value: m}
                } else {
                    n = {type: "unknown", value: E}
                }
                return n
            }

            function r(l) {
                return typeof l === "string" ? j("JSON", "stringify", false, l) : l
            }

            var q = 1, p = u.extend({constructor: function () {
                this.parent();
                this.name = "v_" + q++
            }, hasDependency: function (l) {
                if (arguments.length) {
                    this._hasDependency = l
                }
                return !!this._hasDependency
            }, parse: function (o) {
                var n = x.apply(null, o), m = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(n);
                this.fields = t(m[1]);
                this.table = m[2];
                this.where = s(m[3]);
                for (var l = 1; l < o.length; l++) {
                    if (v.instanceOf(p, o[l])) {
                        o[l].hasDependency(true)
                    }
                }
                return this
            }, toFql: function () {
                var l = "select " + this.fields.join(",") + " from " + this.table + " where ";
                switch (this.where.type) {
                    case"unknown":
                        l += this.where.value;
                        break;
                    case"index":
                        l += this.where.key + "=" + r(this.where.value);
                        break;
                    case"in":
                        if (this.where.value.length == 1) {
                            l += this.where.key + "=" + r(this.where.value[0])
                        } else {
                            l += this.where.key + " in (" + j(this.where.value, "map", true, r).join(",") + ")"
                        }
                        break
                }
                return l
            }, toString: function () {
                return"#" + this.name
            }});
            z.exports = p
        });
        b("sdk.Data", ["sdk.api", "sdk.ErrorHandling", "mergeArrays", "sdk.Query", "safeEval", "sdk.Waitable"], function (z, y, x, w, v, u) {
            var t = y("sdk.api"), s = y("sdk.ErrorHandling"), r = y("mergeArrays"), q = y("sdk.Query"), p = y("safeEval"), o = y("sdk.Waitable"), n = {query: function (A, m) {
                var l = new q().parse(Array.prototype.slice.call(arguments));
                n.queue.push(l);
                n._waitToProcess();
                return l
            }, waitOn: function (C, B) {
                var A = new o(), m = C.length;
                if (typeof(B) == "string") {
                    var l = B;
                    B = s.unguard(function () {
                        return p(l)
                    })
                }
                j(C, "forEach", true, function (D) {
                    D.monitor("Value.change", function () {
                        var F = false;
                        if (n._getValue(D) !== undefined) {
                            D.value = D.getValue();
                            m--;
                            F = true
                        }
                        if (m === 0) {
                            var E = B(j(C, "map", true, n._getValue));
                            A.setValue(E !== undefined ? E : true)
                        }
                        return F
                    })
                });
                return A
            }, process: function (l) {
                n._process(l)
            }, _getValue: function (l) {
                return l instanceof o ? l.getValue() : l
            }, _selectByIndex: function (C, B, A, m) {
                var l = new q();
                l.fields = C;
                l.table = B;
                l.where = {type: "index", key: A, value: m};
                n.queue.push(l);
                n._waitToProcess();
                return l
            }, _waitToProcess: function () {
                if (n.timer < 0) {
                    n.timer = f(function () {
                        n._process()
                    }, 10)
                }
            }, _process: function (E) {
                n.timer = -1;
                var D = {}, C = n.queue;
                if (!C.length) {
                    return
                }
                n.queue = [];
                for (var B = 0; B < C.length; B++) {
                    var A = C[B];
                    if (A.where.type == "index" && !A.hasDependency()) {
                        n._mergeIndexQuery(A, D)
                    } else {
                        D[A.name] = A
                    }
                }
                var m = {q: {}};
                for (var l in D) {
                    if (D.hasOwnProperty(l)) {
                        m.q[l] = D[l].toFql()
                    }
                }
                if (E) {
                    m.access_token = E
                }
                t("/fql", "GET", m, function (F) {
                    if (F.error) {
                        j(j("Object", "keys", false, D), "forEach", true, function (G) {
                            D[G].error(new Error(F.error.message))
                        })
                    } else {
                        j(F.data, "forEach", true, function (G) {
                            D[G.name].setValue(G.fql_result_set)
                        })
                    }
                })
            }, _mergeIndexQuery: function (D, C) {
                var B = D.where.key, A = D.where.value, m = "index_" + D.table + "_" + B, l = C[m];
                if (!l) {
                    l = C[m] = new q();
                    l.fields = [B];
                    l.table = D.table;
                    l.where = {type: "in", key: B, value: []}
                }
                r(l.fields, D.fields);
                r(l.where.value, [A]);
                l.wait(function (E) {
                    D.setValue(j(E, "filter", true, function (F) {
                        return F[B] == A
                    }))
                })
            }, timer: -1, queue: []};
            v.exports = n
        });
        b("legacy:fb.data", ["FB", "sdk.Data"], function (m, l, q, p) {
            var o = l("FB"), n = l("sdk.Data");
            o.provide("Data", n)
        }, 3);
        b("legacy:fb.event", ["FB", "sdk.Event"], function (m, l, q, p) {
            var o = l("FB"), n = l("sdk.Event");
            o.provide("Event", n);
            o.provide("EventProvider", n)
        }, 3);
        b("legacy:fb.frictionless", ["FB", "sdk.Frictionless"], function (m, l, q, p) {
            var o = l("FB"), n = l("sdk.Frictionless");
            o.provide("Frictionless", n)
        }, 3);
        b("sdk.init", ["sdk.Cookie", "copyProperties", "createArrayFrom", "sdk.ErrorHandling", "sdk.Event", "Log", "QueryString", "sdk.Runtime", "wrapFunction"], function (F, E, D, C, B, A) {
            var z = E("sdk.Cookie"), y = E("copyProperties"), x = E("createArrayFrom"), w = E("sdk.ErrorHandling"), v = E("sdk.Event"), u = E("Log"), t = E("QueryString"), s = E("sdk.Runtime"), r = E("wrapFunction");

            function q(m) {
                if (s.getInitialized()) {
                    u.warn("FB.init has already been called - this could indicate a problem")
                }
                if (/number|string/.test(typeof m)) {
                    u.warn("FB.init called with invalid parameters");
                    m = {apiKey: m}
                }
                m = y({logging: true, status: true}, m || {});
                var l = m.appId || m.apiKey;
                if (/number|string/.test(typeof l)) {
                    s.setClientID(l.toString())
                }
                if ("scope" in m) {
                    s.setScope(m.scope)
                }
                if (m.cookie) {
                    s.setUseCookie(true);
                    if (typeof m.cookie === "string") {
                        z.setDomain(m.cookie)
                    }
                }
                s.setInitialized(true);
                v.fire("init:post", m)
            }

            f(function () {
                var l = /(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;
                j(x(i.getElementsByTagName("script")), "forEach", true, function (G) {
                    if (G.src) {
                        var p = l.exec(G.src);
                        if (p) {
                            var o = t.decode(p[2]);
                            for (var n in o) {
                                if (o.hasOwnProperty(n)) {
                                    var m = o[n];
                                    if (m == "0") {
                                        o[n] = 0
                                    }
                                }
                            }
                            q(o)
                        }
                    }
                });
                if (h.fbAsyncInit && !h.fbAsyncInit.hasRun) {
                    h.fbAsyncInit.hasRun = true;
                    w.unguard(h.fbAsyncInit)()
                }
            }, 0);
            B.exports = q
        });
        b("legacy:fb.init", ["FB", "sdk.init"], function (m, l, q, p) {
            var o = l("FB"), n = l("sdk.init");
            o.provide("", {init: n})
        }, 3);
        b("legacy:fb.json", ["FB", "ManagedError"], function (m, l, q, p) {
            var o = l("FB"), n = l("ManagedError");
            o.provide("JSON", {stringify: function (s) {
                try {
                    return j("JSON", "stringify", false, s)
                } catch (r) {
                    throw new n(r.message, r)
                }
            }, parse: function (s) {
                try {
                    return j("JSON", "parse", false, s)
                } catch (r) {
                    throw new n(r.message, r)
                }
            }})
        }, 3);
        b("legacy:fb.pay", ["FB", "copyProperties", "sdk.Runtime", "sdk.UIServer", "sdk.XD"], function (u, t, s, r) {
            t("FB");
            var q = t("copyProperties"), p = t("sdk.Runtime"), o = t("sdk.UIServer"), n = t("sdk.XD"), m = {error_code: 1383001, error_message: "An unknown error caused the dialog to be closed"}, l = function (v) {
                return function (w) {
                    v(w && w.response ? j("JSON", "parse", false, w.response) : m)
                }
            };
            q(o.Methods, {"pay.prompt": {transform: function (w) {
                var v = n.handler(l(w.cb), "parent.frames[" + (h.name || "iframe_canvas") + "]");
                w.params.channel = v;
                n.inform("Pay.Prompt", w.params)
            }}, pay: {size: {width: 555, height: 120}, connectDisplay: "popup", transform: function (w) {
                w.cb = l(w.cb);
                if (!p.isEnvironment(p.ENVIRONMENTS.CANVAS)) {
                    w.params.order_info = j("JSON", "stringify", false, w.params.order_info);
                    return w
                }
                var v = n.handler(w.cb, "parent.frames[" + (h.name || "iframe_canvas") + "]");
                w.params.channel = v;
                w.params.uiserver = true;
                n.inform("Pay.Prompt", w.params)
            }}})
        }, 3);
        b("legacy:fb.ua", ["FB", "UserAgent"], function (m, l, q, p) {
            var o = l("FB"), n = l("UserAgent");
            o.provide("UA", {nativeApp: n.nativeApp})
        }, 3);
        b("legacy:fb.ui", ["FB", "sdk.ui"], function (m, l, q, p) {
            var o = l("FB"), n = l("sdk.ui");
            o.provide("", {ui: n})
        }, 3);
        b("Miny", [], function (z, y, x, w, v, u) {
            var t = "Miny1", s = {encode: [], decode: {}}, r = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");

            function q(A) {
                for (var m = s.encode.length; m < A; m++) {
                    var l = m.toString(32).split("");
                    l[l.length - 1] = r[parseInt(l[l.length - 1], 32)];
                    l = l.join("");
                    s.encode[m] = l;
                    s.decode[l] = m
                }
                return s
            }

            function p(E) {
                var D = E.match(/\w+|\W+/g), C = {};
                for (var B = 0; B < D.length; B++) {
                    C[D[B]] = (C[D[B]] || 0) + 1
                }
                var A = j("Object", "keys", false, C);
                A.sort(function (G, F) {
                    return C[G] < C[F] ? 1 : (C[F] < C[G] ? -1 : 0)
                });
                var m = q(A.length).encode;
                for (B = 0; B < A.length; B++) {
                    C[A[B]] = m[B]
                }
                var l = [];
                for (B = 0; B < D.length; B++) {
                    l[B] = C[D[B]]
                }
                for (B = 0; B < A.length; B++) {
                    A[B] = A[B].replace(/'~'/g, "\\~")
                }
                return[t, A.length].concat(A).concat(l.join("")).join("~")
            }

            function o(F) {
                var E = F.split("~");
                if (E.shift() != t) {
                    throw new Error("Not a Miny stream")
                }
                var D = parseInt(E.shift(), 10), C = E.pop();
                C = C.match(/[0-9a-v]*[\-w-zA-Z_]/g);
                var B = E, A = q(D).decode, m = [];
                for (var l = 0; l < C.length; l++) {
                    m[l] = B[A[C[l]]]
                }
                return m.join("")
            }

            var n = {encode: p, decode: o};
            v.exports = n
        });
        b("sdk.feature", ["SDKConfig"], function (m, l, s, r, q, p) {
            var o = s("SDKConfig");

            function n(u, t) {
                if (o.features && u in o.features) {
                    return o.features[u]
                }
                return typeof t !== "undefined" ? t : null
            }

            q.exports = n
        });
        b("runOnce", [], function (m, l, r, q, p, o) {
            function n(u) {
                var t, s;
                return function () {
                    if (!t) {
                        t = true;
                        s = u()
                    }
                    return s
                }
            }

            p.exports = n
        });
        b("XFBML", ["Assert", "copyProperties", "createArrayFrom", "sdk.DOM", "sdk.feature", "sdk.Impressions", "Log", "ObservableMixin", "runOnce", "UserAgent", "SDKConfig"], function (ab, Z, Y, X, W, V) {
            var U = Z("Assert"), T = Z("copyProperties"), S = Z("createArrayFrom"), R = Z("sdk.DOM"), Q = Z("sdk.feature"), P = Z("sdk.Impressions"), O = Z("Log"), N = Z("ObservableMixin"), M = Z("runOnce"), L = Y("SDKConfig"), K = Z("UserAgent"), J = {}, I = {}, H = 0, G = new N();

            function F(l, m) {
                return l[m] + ""
            }

            function E(l) {
                return l.scopeName ? (l.scopeName + ":" + l.nodeName) : ""
            }

            function D(l) {
                return J[F(l, "nodeName").toLowerCase()] || J[E(l).toLowerCase()]
            }

            function C(l) {
                var m = j(j(F(l, "className"), "trim", true).split(/\s+/), "filter", true, function (n) {
                    return I.hasOwnProperty(n)
                });
                if (m.length === 0) {
                    return undefined
                }
                if (!l.childNodes || l.childNodes.length === 0 || (l.childNodes.length == 1 && l.childNodes[0].nodeType == 3) || l.getAttribute("fb-xfbml-state")) {
                    return I[m[0]]
                }
            }

            function B(l) {
                var m = {};
                j(S(l.attributes), "forEach", true, function (n) {
                    m[F(n, "name")] = F(n, "value")
                });
                return m
            }

            function ac(m, o, q) {
                U.isTrue(m && m.nodeType && m.nodeType === 1 && !!m.getElementsByTagName, "Invalid DOM node passed to FB.XFBML.parse()");
                U.isFunction(o, "Invalid callback passed to FB.XFBML.parse()");
                var r = ++H;
                O.info("XFBML Parsing Start %s", r);
                var s = 1, l = 0, n = function () {
                    s--;
                    if (s === 0) {
                        O.info("XFBML Parsing Finish %s, %s tags found", r, l);
                        o();
                        G.inform("render", r, l)
                    }
                    U.isTrue(s >= 0, "onrender() has been called too many times")
                };
                j(S(m.getElementsByTagName("*")), "forEach", true, function (w) {
                    if (!q && w.getAttribute("fb-xfbml-state")) {
                        return
                    }
                    if (w.nodeType !== 1) {
                        return
                    }
                    var y = C(w), z = B(w);
                    if (!y) {
                        y = D(w);
                        if (!y) {
                            return
                        }
                        if (Q("convert_xfbml", true) && K.ie() < 9) {
                            var t = w;
                            w = i.createElement("div");
                            R.addCss(w, y.xmlns + "-" + y.localName);
                            j(S(t.childNodes), "forEach", true, function (aa) {
                                w.appendChild(aa)
                            });
                            for (var u in z) {
                                if (z.hasOwnProperty(u)) {
                                    w.setAttribute(u, z[u])
                                }
                            }
                            t.parentNode.replaceChild(w, t)
                        }
                    }
                    s++;
                    l++;
                    var v = new y.ctor(w, y.xmlns, y.localName, z);
                    v.subscribe("render", M(function () {
                        w.setAttribute("fb-xfbml-state", "rendered");
                        n()
                    }));
                    var x = function () {
                        if (w.getAttribute("fb-xfbml-state") == "parsed") {
                            G.subscribe("render.queue", x)
                        } else {
                            w.setAttribute("fb-xfbml-state", "parsed");
                            v.process()
                        }
                    };
                    x()
                });
                G.inform("parse", r, l);
                var p = 30000;
                f(function () {
                    if (s > 0) {
                        O.warn("%s tags failed to render in %s ms", s, p)
                    }
                }, p);
                n()
            }

            G.subscribe("render", function () {
                var l = G.getSubscribers("render.queue");
                G.clearSubscribers("render.queue");
                j(l, "forEach", true, function (m) {
                    m()
                })
            });
            T(G, {registerTag: function (l) {
                var m = l.xmlns + ":" + l.localName;
                U.isUndefined(J[m], m + " already registered");
                J[m] = l;
                I[l.xmlns + "-" + l.localName] = l
            }, parse: function (l, m) {
                ac(l || i.body, m || function () {
                }, true)
            }, parseNew: function () {
                ac(i.body, function () {
                }, false)
            }});
            var A = function (l, m) {
                if (Math.random() < L.tagCountLogRate) {
                    f(j(P.log, "bind", true, null, 102, {tag_count: m}), 5000)
                }
                G.unsubscribe("parse", A)
            };
            G.subscribe("parse", A);
            W.exports = G
        });
        b("PluginPipe", ["sdk.Content", "copyProperties", "guid", "insertIframe", "Miny", "ObservableMixin", "sdk.Runtime", "UrlMap", "UserAgent", "XFBML", "PluginPipeConfig", "SDKConfig"], function (V, U, T, S, R, Q) {
            var P = U("sdk.Content"), O = U("copyProperties"), N = U("guid"), M = U("insertIframe"), L = U("Miny"), K = U("ObservableMixin"), J = T("PluginPipeConfig"), I = U("sdk.Runtime"), H = T("SDKConfig"), G = U("UrlMap"), F = U("UserAgent"), E = U("XFBML"), D = new K(), C = J.threshold, B = [];

            function A() {
                return !!(H.usePluginPipe && I.getSecure() !== undefined && (F.chrome() || F.firefox()) && J.enabledApps[I.getClientID()])
            }

            function z() {
                var n = B;
                B = [];
                if (n.length <= C) {
                    j(n, "forEach", true, function (o) {
                        M(o.config)
                    });
                    return
                }
                var m = n.length + 1;

                function l() {
                    m--;
                    if (m === 0) {
                        y(n)
                    }
                }

                j(n, "forEach", true, function (q) {
                    var o = {};
                    for (var p in q.config) {
                        o[p] = q.config[p]
                    }
                    o.url = G.resolve("www", I.getSecure()) + "/plugins/plugin_pipe_shell.php";
                    o.onload = l;
                    M(o)
                });
                l()
            }

            E.subscribe("parse", z);
            function y(r) {
                var p = i.createElement("span");
                P.appendHidden(p);
                var o = {};
                j(r, "forEach", true, function (s) {
                    o[s.config.name] = {plugin: s.tag, params: s.params}
                });
                var q = j("JSON", "stringify", false, o), l = L.encode(q);
                j(r, "forEach", true, function (s) {
                    var t = i.getElementsByName(s.config.name)[0];
                    t.onload = s.config.onload
                });
                var m = G.resolve("www", I.getSecure()) + "/plugins/pipe.php", n = N();
                M({url: "about:blank", root: p, name: n, className: "fb_hidden fb_invisible", onload: function () {
                    P.submitToTarget({url: m, target: n, params: {plugins: l.length < q.length ? l : q}})
                }})
            }

            O(D, {add: function (m) {
                var l = A();
                l && B.push({config: m._config, tag: m._tag, params: m._params});
                return l
            }});
            R.exports = D
        });
        b("IframePlugin", ["sdk.Auth", "sdk.createIframe", "sdk.DOM", "sdk.Event", "guid", "Log", "ObservableMixin", "PluginPipe", "QueryString", "resolveURI", "sdk.Runtime", "Type", "UrlMap", "sdk.XD"], function (ab, Z, Y, X, W, V) {
            var U = Z("sdk.Auth"), T = Z("sdk.createIframe"), S = Z("sdk.DOM"), R = Z("sdk.Event"), Q = Z("guid"), P = Z("Log"), O = Z("ObservableMixin"), N = Z("PluginPipe"), M = Z("QueryString"), L = Z("resolveURI"), K = Z("sdk.Runtime"), J = Z("Type"), I = Z("UrlMap"), H = Z("sdk.XD"), G = {skin: "string", font: "string", width: "px", height: "px", ref: "string", color_scheme: "string"};

            function F(l, m, n) {
                if (m || m === 0) {
                    l.style.width = m + "px"
                }
                if (n || n === 0) {
                    l.style.height = n + "px"
                }
            }

            function E(l) {
                return function (m) {
                    var n = {width: m.width, height: m.height, pluginID: l};
                    R.fire("xfbml.resize", n)
                }
            }

            var D = {string: function (l) {
                return l
            }, bool: function (l) {
                return l ? (/^(?:true|1|yes|on)$/i).test(l) : undefined
            }, url: function (l) {
                return L(l)
            }, url_maybe: function (l) {
                return l ? L(l) : l
            }, hostname: function (l) {
                return l || h.location.hostname
            }, px: function (l) {
                return(/^(\d+)(?:px)?$/).test(l) ? parseInt(RegExp.$1, 10) : undefined
            }, text: function (l) {
                return l
            }};

            function C(l, m) {
                var n = l[m] || l[m.replace(/_/g, "-")] || l[m.replace(/_/g, "")] || l["data-" + m] || l["data-" + m.replace(/_/g, "-")] || l["data-" + m.replace(/_/g, "")] || undefined;
                return n
            }

            function B(l, m, n, o) {
                j(j("Object", "keys", false, l), "forEach", true, function (p) {
                    if (l[p] == "text" && !n[p]) {
                        n[p] = m.textContent || m.innerText || "";
                        m.setAttribute(p, n[p])
                    }
                    o[p] = D[l[p]](C(n, p))
                })
            }

            function ac(l) {
                return l || l === "0" || l === 0 ? parseInt(l, 10) : undefined
            }

            var A = J.extend({constructor: function (o, v, r, n) {
                this.parent();
                r = r.replace(/-/g, "_");
                var u = C(n, "plugin_id");
                this.subscribe("xd.resize", E(u));
                this.subscribe("xd.resize.flow", E(u));
                this.subscribe("xd.resize.flow", j(function (w) {
                    F(this._config.root, ac(w.width), ac(w.height));
                    this.updateLift();
                    clearTimeout(this._timeoutID)
                }, "bind", true, this));
                this.subscribe("xd.resize", j(function (w) {
                    F(this._config.root, ac(w.width), ac(w.height));
                    F(this._iframe, ac(w.width), ac(w.height));
                    this.updateLift();
                    clearTimeout(this._timeoutID)
                }, "bind", true, this));
                this.subscribe("xd.resize.iframe", j(function (w) {
                    F(this._iframe, ac(w.width), ac(w.height));
                    this.updateLift();
                    clearTimeout(this._timeoutID)
                }, "bind", true, this));
                var q = K.getSecure() || h.location.protocol == "https:", m = I.resolve("www", q) + "/plugins/" + r + ".php?", t = {};
                B(this.getParams(), o, n, t);
                B(G, o, n, t);
                t.app_id = K.getClientID();
                t.locale = K.getLocale();
                t.sdk = "joey";
                var p = j(function (w) {
                    this.inform("xd." + w.type, w)
                }, "bind", true, this);
                t.channel = H.handler(p, "parent.parent", true);
                S.addCss(o, "fb_iframe_widget");
                var l = Q();
                this.subscribe("xd.verify", function (w) {
                    H.sendToFacebook(l, {method: "xd/verify", params: j("JSON", "stringify", false, w.token)})
                });
                this.subscribe("xd.refreshLoginStatus", j(U.getLoginStatus, "bind", true, U, j(this.inform, "bind", true, this, "login.status"), true));
                var s = i.createElement("span");
                s.style.width = "0px";
                s.style.height = "0px";
                this._element = o;
                this._ns = v;
                this._tag = r;
                this._params = t;
                this._config = {root: s, url: m + M.encode(t), name: l, width: t.width || 1000, height: t.height || 1000, onload: j(function () {
                    this.inform("render")
                }, "bind", true, this)}
            }, process: function () {
                this._element.innerHTML = "";
                this._element.appendChild(this._config.root);
                this._timeoutID = f(j(function () {
                    this._iframe && F(this._iframe, 0, 0);
                    P.warn("%s:%s failed to resize in 45s", this._ns, this._tag)
                }, "bind", true, this), 45 * 1000);
                if (!N.add(this)) {
                    this._iframe = T(this._config)
                }
            }, updateLift: function () {
                var l = this._iframe.style.width === this._config.root.style.width && this._iframe.style.height === this._config.root.style.height;
                S[l ? "removeCss" : "addCss"](this._iframe, "fb_iframe_widget_lift")
            }}, O);
            A.getVal = C;
            A.withParams = function (l) {
                return A.extend({getParams: function () {
                    return l
                }})
            };
            W.exports = A
        });
        b("PluginTags", [], function (m, l, r, q, p, o) {
            var n = {activity: {border_color: "string", filter: "string", action: "string", max_age: "string", linktarget: "string", header: "bool", recommendations: "bool", site: "hostname"}, create_event_button: {}, degrees: {href: "url", limit_profile_visibility: "bool"}, facepile: {href: "string", action: "string", size: "string", max_rows: "string", show_count: "bool"}, friendpile: {href: "string", action: "string", size: "string", max_rows: "string"}, follow: {href: "url", layout: "string", show_faces: "bool"}, open_graph: {href: "url", layout: "string", show_faces: "bool", action_type: "string", action_properties: "string"}, open_graph_preview: {href: "url", action_type: "string", action_properties: "string"}, page_events: {href: "url"}, privacy_selector: {}, recommendations: {border_color: "string", filter: "string", action: "string", max_age: "string", linktarget: "string", header: "bool", site: "hostname"}, share_button: {href: "url", type: "string"}, shared_activity: {header: "bool"}, send_to_mobile: {max_rows: "string", show_faces: "bool", size: "string"}, subscribe: {href: "url", layout: "string", show_faces: "bool"}, want: {href: "url", layout: "string", show_faces: "bool"}};
            p.exports = n
        });
        b("sdk.Arbiter", [], function (m, l, r, q, p, o) {
            var n = {BEHAVIOR_EVENT: "e", BEHAVIOR_PERSISTENT: "p", BEHAVIOR_STATE: "s"};
            p.exports = n
        });
        b("sdk.XFBML.Element", ["sdk.DOM", "Type", "ObservableMixin"], function (u, t, s, r, q, p) {
            var o = t("sdk.DOM"), n = t("Type"), m = t("ObservableMixin"), l = n.extend({constructor: function (v) {
                this.parent();
                this.dom = v
            }, fire: function () {
                this.inform.apply(this, arguments)
            }, getAttribute: function (x, w, v) {
                var y = o.getAttr(this.dom, x);
                return y ? v ? v(y) : y : w
            }, _getBoolAttribute: function (x, w) {
                var v = o.getBoolAttr(this.dom, x);
                return v === null ? w : v
            }, _getPxAttribute: function (w, v) {
                return this.getAttribute(w, v, function (x) {
                    var y = parseInt(x.replace("px", ""), 10);
                    if (isNaN(y)) {
                        return v
                    } else {
                        return y
                    }
                })
            }, _getAttributeFromList: function (x, w, v) {
                return this.getAttribute(x, w, function (y) {
                    y = y.toLowerCase();
                    return(j(v, "indexOf", true, y) > -1) ? y : w
                })
            }, isValid: function () {
                for (var v = this.dom; v; v = v.parentNode) {
                    if (v == i.body) {
                        return true
                    }
                }
            }, clear: function () {
                o.html(this.dom, "")
            }}, m);
            q.exports = l
        });
        b("sdk.XFBML.IframeWidget", ["sdk.Arbiter", "sdk.Auth", "sdk.Content", "copyProperties", "sdk.DOM", "sdk.Event", "sdk.XFBML.Element", "guid", "insertIframe", "QueryString", "sdk.Runtime", "sdk.ui", "UrlMap", "sdk.XD"], function (Z, Y, X, W, V, U) {
            var T = Y("sdk.Arbiter"), S = Y("sdk.Auth"), R = Y("sdk.Content"), Q = Y("copyProperties"), P = Y("sdk.DOM"), O = Y("sdk.Event"), N = Y("sdk.XFBML.Element"), M = Y("guid"), L = Y("insertIframe"), K = Y("QueryString"), J = Y("sdk.Runtime"), I = Y("sdk.ui"), H = Y("UrlMap"), G = Y("sdk.XD"), F = N.extend({_iframeName: null, _showLoader: true, _refreshOnAuthChange: false, _allowReProcess: false, _fetchPreCachedLoader: false, _visibleAfter: "load", _widgetPipeEnabled: false, _borderReset: false, _repositioned: false, getUrlBits: function () {
                throw new Error("Inheriting class needs to implement getUrlBits().")
            }, setupAndValidate: function () {
                return true
            }, oneTimeSetup: function () {
            }, getSize: function () {
            }, getIframeName: function () {
                return this._iframeName
            }, getIframeTitle: function () {
            }, getChannelUrl: function () {
                if (!this._channelUrl) {
                    var l = this;
                    this._channelUrl = G.handler(function (m) {
                        l.fire("xd." + m.type, m)
                    }, "parent.parent", true)
                }
                return this._channelUrl
            }, getIframeNode: function () {
                return this.dom.getElementsByTagName("iframe")[0]
            }, arbiterInform: function (l, m, n) {
                G.sendToFacebook(this.getIframeName(), {method: l, params: j("JSON", "stringify", false, m || {}), behavior: n || T.BEHAVIOR_PERSISTENT})
            }, _arbiterInform: function (m, n, o) {
                var l = 'parent.frames["' + this.getIframeNode().name + '"]';
                G.inform(m, n, l, o)
            }, getDefaultWebDomain: function () {
                return H.resolve("www")
            }, process: function (m) {
                if (this._done) {
                    if (!this._allowReProcess && !m) {
                        return
                    }
                    this.clear()
                } else {
                    this._oneTimeSetup()
                }
                this._done = true;
                this._iframeName = this.getIframeName() || this._iframeName || M();
                if (!this.setupAndValidate()) {
                    this.fire("render");
                    return
                }
                if (this._showLoader) {
                    this._addLoader()
                }
                P.addCss(this.dom, "fb_iframe_widget");
                if (this._visibleAfter != "immediate") {
                    P.addCss(this.dom, "fb_hide_iframes")
                } else {
                    this.subscribe("iframe.onload", j(this.fire, "bind", true, this, "render"))
                }
                var n = this.getSize() || {}, l = this.getFullyQualifiedURL();
                if (n.width == "100%") {
                    P.addCss(this.dom, "fb_iframe_widget_fluid")
                }
                this.clear();
                L({url: l, root: this.dom.appendChild(i.createElement("span")), name: this._iframeName, title: this.getIframeTitle(), className: J.getRtl() ? "fb_rtl" : "fb_ltr", height: n.height, width: n.width, onload: j(this.fire, "bind", true, this, "iframe.onload")});
                this._resizeFlow(n);
                this.loaded = false;
                this.subscribe("iframe.onload", j(function () {
                    this.loaded = true
                }, "bind", true, this))
            }, generateWidgetPipeIframeName: function () {
                E++;
                return"fb_iframe_" + E
            }, getFullyQualifiedURL: function () {
                var l = this._getURL();
                l += "?" + K.encode(this._getQS());
                if (l.length > 2000) {
                    l = "about:blank";
                    var m = j(function () {
                        this._postRequest();
                        this.unsubscribe("iframe.onload", m)
                    }, "bind", true, this);
                    this.subscribe("iframe.onload", m)
                }
                return l
            }, _getWidgetPipeShell: function () {
                return H.resolve("www") + "/common/widget_pipe_shell.php"
            }, _oneTimeSetup: function () {
                this.subscribe("xd.resize", j(this._handleResizeMsg, "bind", true, this));
                this.subscribe("xd.resize", j(this._bubbleResizeEvent, "bind", true, this));
                this.subscribe("xd.resize.iframe", j(this._resizeIframe, "bind", true, this));
                this.subscribe("xd.resize.flow", j(this._resizeFlow, "bind", true, this));
                this.subscribe("xd.resize.flow", j(this._bubbleResizeEvent, "bind", true, this));
                this.subscribe("xd.refreshLoginStatus", function () {
                    S.getLoginStatus(function () {
                    }, true)
                });
                this.subscribe("xd.logout", function () {
                    I({method: "auth.logout", display: "hidden"}, function () {
                    })
                });
                if (this._refreshOnAuthChange) {
                    this._setupAuthRefresh()
                }
                if (this._visibleAfter == "load") {
                    this.subscribe("iframe.onload", j(this._makeVisible, "bind", true, this))
                }
                this.subscribe("xd.verify", j(function (l) {
                    this.arbiterInform("xd/verify", l.token)
                }, "bind", true, this));
                this.oneTimeSetup()
            }, _makeVisible: function () {
                this._removeLoader();
                P.removeCss(this.dom, "fb_hide_iframes");
                this.fire("render")
            }, _setupAuthRefresh: function () {
                S.getLoginStatus(j(function (l) {
                    var m = l.status;
                    O.subscribe("auth.statusChange", j(function (n) {
                        if (!this.isValid()) {
                            return
                        }
                        if (m == "unknown" || n.status == "unknown") {
                            this.process(true)
                        }
                        m = n.status
                    }, "bind", true, this))
                }, "bind", true, this))
            }, _handleResizeMsg: function (l) {
                if (!this.isValid()) {
                    return
                }
                this._resizeIframe(l);
                this._resizeFlow(l);
                if (!this._borderReset) {
                    this.getIframeNode().style.border = "none";
                    this._borderReset = true
                }
                this._makeVisible()
            }, _bubbleResizeEvent: function (l) {
                var m = {height: l.height, width: l.width, pluginID: this.getAttribute("plugin-id")};
                O.fire("xfbml.resize", m)
            }, _resizeIframe: function (l) {
                var m = this.getIframeNode();
                if (l.reposition === "true") {
                    this._repositionIframe(l)
                }
                l.height && (m.style.height = l.height + "px");
                l.width && (m.style.width = l.width + "px");
                this._updateIframeZIndex()
            }, _resizeFlow: function (l) {
                var m = this.dom.getElementsByTagName("span")[0];
                l.height && (m.style.height = l.height + "px");
                l.width && (m.style.width = l.width + "px");
                this._updateIframeZIndex()
            }, _updateIframeZIndex: function () {
                var n = this.dom.getElementsByTagName("span")[0], o = this.getIframeNode(), l = o.style.height === n.style.height && o.style.width === n.style.width, m = l ? "removeCss" : "addCss";
                P[m](o, "fb_iframe_widget_lift")
            }, _repositionIframe: function (p) {
                var q = this.getIframeNode(), l = parseInt(P.getStyle(q, "width"), 10), m = P.getPosition(q).x, n = P.getViewportInfo().width, o = parseInt(p.width, 10);
                if (m + o > n && m > o) {
                    q.style.left = l - o + "px";
                    this.arbiterInform("xd/reposition", {type: "horizontal"});
                    this._repositioned = true
                } else {
                    if (this._repositioned) {
                        q.style.left = "0px";
                        this.arbiterInform("xd/reposition", {type: "restore"});
                        this._repositioned = false
                    }
                }
            }, _addLoader: function () {
                if (!this._loaderDiv) {
                    P.addCss(this.dom, "fb_iframe_widget_loader");
                    this._loaderDiv = i.createElement("div");
                    this._loaderDiv.className = "FB_Loader";
                    this.dom.appendChild(this._loaderDiv)
                }
            }, _removeLoader: function () {
                if (this._loaderDiv) {
                    P.removeCss(this.dom, "fb_iframe_widget_loader");
                    if (this._loaderDiv.parentNode) {
                        this._loaderDiv.parentNode.removeChild(this._loaderDiv)
                    }
                    this._loaderDiv = null
                }
            }, _getQS: function () {
                return Q({api_key: J.getClientID(), locale: J.getLocale(), sdk: "joey", ref: this.getAttribute("ref")}, this.getUrlBits().params)
            }, _getURL: function () {
                var l = this.getDefaultWebDomain(), m = "";
                return l + "/plugins/" + m + this.getUrlBits().name + ".php"
            }, _postRequest: function () {
                R.submitToTarget({url: this._getURL(), target: this.getIframeNode().name, params: this._getQS()})
            }}), E = 0, D = null, C = {};

            function B() {
                var m = {};
                for (var n in C) {
                    var l = C[n];
                    m[n] = {widget: l.getUrlBits().name, params: l._getQS()}
                }
                return m
            }

            function A() {
                if (!D) {
                    return
                }
                var o = B(), p = {widget_pipe: j("JSON", "stringify", false, o), href: h.location, site: location.hostname, channel: D.getChannelUrl(), api_key: J.getClientID(), locale: J.getLocale(), sdk: "joey"}, l = M(), m = D.dom, n = m.appendChild(i.createElement("span"));
                L({url: "about:blank", root: n, name: l, className: "fb_hidden fb_invisible", onload: function () {
                    R.submitToTarget({url: H.resolve("www") + "plugins/pipe/", target: l, params: p}, 1)
                }})
            }

            V.exports = F
        });
        b("sdk.XFBML.Comments", ["sdk.Event", "sdk.XFBML.IframeWidget", "QueryString", "sdk.Runtime", "UrlMap", "UserAgent", "SDKConfig"], function (B, A, z, y, x, w) {
            var v = A("sdk.Event"), u = A("sdk.XFBML.IframeWidget"), t = A("QueryString"), s = A("sdk.Runtime"), r = z("SDKConfig"), q = A("UrlMap"), p = A("UserAgent"), o = u.extend({_visibleAfter: "immediate", _refreshOnAuthChange: true, setupAndValidate: function () {
                var n = {channel_url: this.getChannelUrl(), colorscheme: this.getAttribute("colorscheme"), numposts: this.getAttribute("num-posts", 10), width: this._getPxAttribute("width", 550), href: this.getAttribute("href"), permalink: this.getAttribute("permalink"), publish_feed: this.getAttribute("publish_feed"), order_by: this.getAttribute("order_by"), mobile: this._getBoolAttribute("mobile")};
                if (r.initSitevars.enableMobileComments && p.mobile() && n.mobile !== false) {
                    n.mobile = true;
                    delete n.width
                }
                if (!n.href) {
                    n.migrated = this.getAttribute("migrated");
                    n.xid = this.getAttribute("xid");
                    n.title = this.getAttribute("title", i.title);
                    n.url = this.getAttribute("url", i.URL);
                    n.quiet = this.getAttribute("quiet");
                    n.reverse = this.getAttribute("reverse");
                    n.simple = this.getAttribute("simple");
                    n.css = this.getAttribute("css");
                    n.notify = this.getAttribute("notify");
                    if (!n.xid) {
                        var m = j(i.URL, "indexOf", true, "#");
                        if (m > 0) {
                            n.xid = encodeURIComponent(i.URL.substring(0, m))
                        } else {
                            n.xid = encodeURIComponent(i.URL)
                        }
                    }
                    if (n.migrated) {
                        n.href = q.resolve("www") + "/plugins/comments_v1.php?app_id=" + s.getClientID() + "&xid=" + encodeURIComponent(n.xid) + "&url=" + encodeURIComponent(n.url)
                    }
                } else {
                    var l = this.getAttribute("fb_comment_id");
                    if (!l) {
                        l = t.decode(i.URL.substring(j(i.URL, "indexOf", true, "?") + 1)).fb_comment_id;
                        if (l && j(l, "indexOf", true, "#") > 0) {
                            l = l.substring(0, j(l, "indexOf", true, "#"))
                        }
                    }
                    if (l) {
                        n.fb_comment_id = l;
                        this.subscribe("render", j(function () {
                            if (!h.location.hash) {
                                h.location.hash = this.getIframeNode().id
                            }
                        }, "bind", true, this))
                    }
                }
                this._attr = n;
                return true
            }, oneTimeSetup: function () {
                this.subscribe("xd.addComment", j(this._handleCommentMsg, "bind", true, this));
                this.subscribe("xd.commentCreated", j(this._handleCommentCreatedMsg, "bind", true, this));
                this.subscribe("xd.commentRemoved", j(this._handleCommentRemovedMsg, "bind", true, this))
            }, getSize: function () {
                if (this._attr.mobile) {
                    return{width: "100%", height: 160}
                }
                return{width: this._attr.width, height: 160}
            }, getUrlBits: function () {
                return{name: "comments", params: this._attr}
            }, getDefaultWebDomain: function () {
                return q.resolve(this._attr.mobile ? "m" : "www", true)
            }, _handleCommentMsg: function (l) {
                if (!this.isValid()) {
                    return
                }
                v.fire("comments.add", {post: l.post, user: l.user, widget: this})
            }, _handleCommentCreatedMsg: function (m) {
                if (!this.isValid()) {
                    return
                }
                var l = {href: m.href, commentID: m.commentID, parentCommentID: m.parentCommentID};
                v.fire("comment.create", l)
            }, _handleCommentRemovedMsg: function (m) {
                if (!this.isValid()) {
                    return
                }
                var l = {href: m.href, commentID: m.commentID};
                v.fire("comment.remove", l)
            }});
            x.exports = o
        });
        b("sdk.XFBML.CommentsCount", ["sdk.Data", "sdk.DOM", "sdk.XFBML.Element", "sprintf"], function (v, u, t, s, r, q) {
            var p = u("sdk.Data"), o = u("sdk.DOM"), n = u("sdk.XFBML.Element"), m = u("sprintf"), l = n.extend({process: function () {
                o.addCss(this.dom, "fb_comments_count_zero");
                var w = this.getAttribute("href", h.location.href);
                p._selectByIndex(["commentsbox_count"], "link_stat", "url", w).wait(j(function (x) {
                    var y = x[0].commentsbox_count;
                    o.html(this.dom, m('<span class="fb_comments_count">%s</span>', y));
                    if (y > 0) {
                        o.removeCss(this.dom, "fb_comments_count_zero")
                    }
                    this.fire("render")
                }, "bind", true, this))
            }});
            r.exports = l
        });
        b("sdk.Anim", ["sdk.DOM"], function (m, l, s, r, q, p) {
            var o = l("sdk.DOM"), n = {ate: function (B, A, z, y) {
                z = !isNaN(parseFloat(z)) && z >= 0 ? z : 750;
                var x = 40, w = {}, v = {}, u = null, t = g(j(function () {
                    if (!u) {
                        u = j("Date", "now", false)
                    }
                    var G = 1;
                    if (z != 0) {
                        G = Math.min((j("Date", "now", false) - u) / z, 1)
                    }
                    for (var F in A) {
                        if (A.hasOwnProperty(F)) {
                            var E = A[F];
                            if (!w[F]) {
                                var D = o.getStyle(B, F);
                                if (D === false) {
                                    return
                                }
                                w[F] = this._parseCSS(D + "")
                            }
                            if (!v[F]) {
                                v[F] = this._parseCSS(E.toString())
                            }
                            var C = "";
                            j(w[F], "forEach", true, function (I, H) {
                                if (isNaN(v[F][H].numPart) && v[F][H].textPart == "?") {
                                    C = I.numPart + I.textPart
                                } else {
                                    if (isNaN(I.numPart)) {
                                        C = I.textPart
                                    } else {
                                        C += (I.numPart + Math.ceil((v[F][H].numPart - I.numPart) * Math.sin(Math.PI / 2 * G))) + v[F][H].textPart + " "
                                    }
                                }
                            });
                            o.setStyle(B, F, C)
                        }
                    }
                    if (G == 1) {
                        clearInterval(t);
                        if (y) {
                            y(B)
                        }
                    }
                }, "bind", true, this), x)
            }, _parseCSS: function (u) {
                var t = [];
                j(u.split(" "), "forEach", true, function (w) {
                    var v = parseInt(w, 10);
                    t.push({numPart: v, textPart: w.replace(v, "")})
                });
                return t
            }};
            q.exports = n
        });
        b("escapeHTML", [], function (t, s, r, q, p, o) {
            var n = /[&<>"'\/]/g, m = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;", "/": "&#x2F;"};

            function l(u) {
                return u.replace(n, function (v) {
                    return m[v]
                })
            }

            p.exports = l
        });
        b("sdk.Helper", ["sdk.ErrorHandling", "sdk.Event", "safeEval", "UrlMap"], function (v, u, t, s, r, q) {
            var p = u("sdk.ErrorHandling"), o = u("sdk.Event"), n = u("safeEval"), m = u("UrlMap"), l = {isUser: function (w) {
                return w < 2200000000 || (w >= 100000000000000 && w <= 100099999989999) || (w >= 89000000000000 && w <= 89999999999999)
            }, upperCaseFirstChar: function (w) {
                if (w.length > 0) {
                    return w.substr(0, 1).toUpperCase() + w.substr(1)
                } else {
                    return w
                }
            }, getProfileLink: function (x, w, y) {
                y = y || (x ? m.resolve("www") + "/profile.php?id=" + x.uid : null);
                if (y) {
                    w = '<a class="fb_link" href="' + y + '">' + w + "</a>"
                }
                return w
            }, invokeHandler: function (x, w, y) {
                if (x) {
                    if (typeof x === "string") {
                        p.unguard(n)(x, y)
                    } else {
                        if (x.apply) {
                            p.unguard(x).apply(w, y || [])
                        }
                    }
                }
            }, fireEvent: function (x, w) {
                var y = w._attr.href;
                w.fire(x, y);
                o.fire(x, y, w)
            }, executeFunctionByName: function (x) {
                var w = Array.prototype.slice.call(arguments, 1), B = x.split("."), A = B.pop(), z = h;
                for (var y = 0; y < B.length; y++) {
                    z = z[B[y]]
                }
                return z[A].apply(this, w)
            }};
            r.exports = l
        });
        b("sdk.XFBML.ConnectBar", ["sdk.Anim", "sdk.api", "sdk.Auth", "createArrayFrom", "sdk.Data", "sdk.DOM", "sdk.XFBML.Element", "escapeHTML", "sdk.Event", "format", "sdk.Helper", "sdk.Insights", "sdk.Intl", "sdk.Runtime", "UrlMap", "UserAgent", "ConnectBarConfig"], function (V, U, T, S, R, Q) {
            var P = U("sdk.Anim"), O = U("sdk.api"), N = U("sdk.Auth"), M = U("createArrayFrom"), L = T("ConnectBarConfig"), K = U("sdk.Data"), J = U("sdk.DOM"), I = U("sdk.XFBML.Element"), H = U("escapeHTML"), G = U("sdk.Event"), F = U("format"), E = U("sdk.Helper"), D = U("sdk.Insights"), C = U("sdk.Intl"), B = U("sdk.Runtime"), A = U("UrlMap"), z = U("UserAgent"), y = I.extend({_initialHeight: null, _initTopMargin: 0, _picFieldName: "pic_square", _page: null, _displayed: false, _notDisplayed: false, _container: null, _animationSpeed: 0, process: function () {
                N.getLoginStatus(j(function (l) {
                    G.monitor("auth.statusChange", j(function () {
                        if (this.isValid() && B.getLoginStatus() == "connected") {
                            this._uid = B.getUserID();
                            O({method: "Connect.shouldShowConnectBar"}, j(function (m) {
                                if (m != 2) {
                                    this._animationSpeed = (m == 0) ? 750 : 0;
                                    this._showBar()
                                } else {
                                    this._noRender()
                                }
                            }, "bind", true, this))
                        } else {
                            this._noRender()
                        }
                        return false
                    }, "bind", true, this))
                }, "bind", true, this))
            }, _showBar: function () {
                var m = K._selectByIndex(["first_name", "profile_url", this._picFieldName], "user", "uid", this._uid), l = K._selectByIndex(["display_name"], "application", "api_key", B.getClientID());
                K.waitOn([m, l], j(function (n) {
                    n[0][0].site_name = n[1][0].display_name;
                    if (!this._displayed) {
                        this._displayed = true;
                        this._notDisplayed = false;
                        this._renderConnectBar(n[0][0]);
                        this.fire("render");
                        D.impression({lid: 104, name: "widget_load"});
                        this.fire("connectbar.ondisplay");
                        G.fire("connectbar.ondisplay", this);
                        E.invokeHandler(this.getAttribute("on-display"), this)
                    }
                }, "bind", true, this))
            }, _noRender: function () {
                if (this._displayed) {
                    this._displayed = false;
                    this._closeConnectBar()
                }
                if (!this._notDisplayed) {
                    this._notDisplayed = true;
                    this.fire("render");
                    this.fire("connectbar.onnotdisplay");
                    G.fire("connectbar.onnotdisplay", this);
                    E.invokeHandler(this.getAttribute("on-not-display"), this)
                }
            }, _renderConnectBar: function (p) {
                var n = i.createElement("div"), m = i.createElement("div");
                n.className = "fb_connect_bar";
                m.className = "fb_reset fb_connect_bar_container";
                m.appendChild(n);
                i.body.appendChild(m);
                this._container = m;
                this._initialHeight = Math.round(parseFloat(J.getStyle(m, "height")) + parseFloat(J.getStyle(m, "borderBottomWidth")));
                J.html(n, F('<div class="fb_buttons"><a href="#" class="fb_bar_close"><img src="{1}" alt="{2}" title="{2}"/></a></div><a href="{7}" class="fb_profile" target="_blank"><img src="{3}" alt="{4}" title="{4}"/></a>{5} <span><a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; <a href="#" class="fb_no_thanks">{0}</a></span>', C.tx._("No Thanks"), A.resolve("fbcdn") + "/" + L.imgs.buttonUrl, C.tx._("Close"), p[this._picFieldName] || A.resolve("fbcdn") + "/" + L.imgs.missingProfileUrl, H(p.first_name), C.tx._("Hi {firstName}. \u003Cstrong>{siteName}\u003C/strong> is using Facebook to personalize your experience.", {firstName: H(p.first_name), siteName: H(p.site_name)}), C.tx._("Learn More"), p.profile_url, A.resolve("www") + "/sitetour/connect.php"));
                j(M(n.getElementsByTagName("a")), "forEach", true, function (q) {
                    q.onclick = j(this._clickHandler, "bind", true, this)
                }, this);
                this._page = i.body;
                var o = 0;
                if (this._page.parentNode) {
                    o = Math.round((parseFloat(J.getStyle(this._page.parentNode, "height")) - parseFloat(J.getStyle(this._page, "height"))) / 2)
                } else {
                    o = parseInt(J.getStyle(this._page, "marginTop"), 10)
                }
                o = isNaN(o) ? 0 : o;
                this._initTopMargin = o;
                if (!h.XMLHttpRequest) {
                    m.className += " fb_connect_bar_container_ie6"
                } else {
                    m.style.top = (-1 * this._initialHeight) + "px";
                    P.ate(m, {top: "0px"}, this._animationSpeed)
                }
                var l = {marginTop: this._initTopMargin + this._initialHeight + "px"};
                if (z.ie()) {
                    l.backgroundPositionY = this._initialHeight + "px"
                } else {
                    l.backgroundPosition = "? " + this._initialHeight + "px"
                }
                P.ate(this._page, l, this._animationSpeed)
            }, _clickHandler: function (m) {
                m = m || h.event;
                var l = m.target || m.srcElement;
                while (l.nodeName != "A") {
                    l = l.parentNode
                }
                switch (l.className) {
                    case"fb_bar_close":
                        O({method: "Connect.connectBarMarkAcknowledged"});
                        D.impression({lid: 104, name: "widget_user_closed"});
                        this._closeConnectBar();
                        break;
                    case"fb_learn_more":
                    case"fb_profile":
                        h.open(l.href);
                        break;
                    case"fb_no_thanks":
                        this._closeConnectBar();
                        O({method: "Connect.connectBarMarkAcknowledged"});
                        D.impression({lid: 104, name: "widget_user_no_thanks"});
                        O({method: "auth.revokeAuthorization", block: true}, j(function () {
                            this.fire("connectbar.ondeauth");
                            G.fire("connectbar.ondeauth", this);
                            E.invokeHandler(this.getAttribute("on-deauth"), this);
                            if (this._getBoolAttribute("auto-refresh", true)) {
                                h.location.reload()
                            }
                        }, "bind", true, this));
                        break
                }
                return false
            }, _closeConnectBar: function () {
                this._notDisplayed = true;
                var m = {marginTop: this._initTopMargin + "px"};
                if (z.ie()) {
                    m.backgroundPositionY = "0px"
                } else {
                    m.backgroundPosition = "? 0px"
                }
                var l = (this._animationSpeed == 0) ? 0 : 300;
                P.ate(this._page, m, l);
                P.ate(this._container, {top: (-1 * this._initialHeight) + "px"}, l, function (n) {
                    n.parentNode.removeChild(n)
                });
                this.fire("connectbar.onclose");
                G.fire("connectbar.onclose", this);
                E.invokeHandler(this.getAttribute("on-close"), this)
            }});
            R.exports = y
        });
        b("sdk.XFBML.EdgeCommentWidget", ["sdk.XFBML.IframeWidget", "sdk.DOM"], function (u, t, s, r, q, p) {
            var o = t("sdk.XFBML.IframeWidget"), n = t("sdk.DOM"), m = 10000, l = o.extend({constructor: function (v) {
                this.parent(v.commentNode);
                this._iframeWidth = v.width + 1;
                this._iframeHeight = v.height;
                this._attr = {master_frame_name: v.masterFrameName, offsetX: v.relativeWidthOffset - v.paddingLeft};
                this.dom = v.commentNode;
                this.dom.style.top = v.relativeHeightOffset + "px";
                this.dom.style.left = v.relativeWidthOffset + "px";
                this.dom.style.zIndex = m++;
                n.addCss(this.dom, "fb_edge_comment_widget")
            }, _visibleAfter: "load", _showLoader: false, getSize: function () {
                return{width: this._iframeWidth, height: this._iframeHeight}
            }, getUrlBits: function () {
                return{name: "comment_widget_shell", params: this._attr}
            }});
            q.exports = l
        });
        b("sdk.XFBML.EdgeWidget", ["sdk.XFBML.IframeWidget", "sdk.XFBML.EdgeCommentWidget", "sdk.DOM", "sdk.Helper", "sdk.Runtime"], function (x, w, v, u, t, s) {
            var r = w("sdk.XFBML.IframeWidget"), q = w("sdk.XFBML.EdgeCommentWidget"), p = w("sdk.DOM"), o = w("sdk.Helper"), n = w("sdk.Runtime"), m = r.extend({_visibleAfter: "immediate", _showLoader: false, _rootPadding: null, setupAndValidate: function () {
                p.addCss(this.dom, "fb_edge_widget_with_comment");
                this._attr = {channel_url: this.getChannelUrl(), debug: this._getBoolAttribute("debug"), href: this.getAttribute("href", h.location.href), is_permalink: this._getBoolAttribute("is-permalink"), node_type: this.getAttribute("node-type", "link"), width: this._getWidgetWidth(), font: this.getAttribute("font"), layout: this._getLayout(), colorscheme: this.getAttribute("color-scheme", "light"), action: this.getAttribute("action"), ref: this.getAttribute("ref"), show_faces: this._shouldShowFaces(), no_resize: this._getBoolAttribute("no_resize"), send: this._getBoolAttribute("send"), url_map: this.getAttribute("url_map"), extended_social_context: this._getBoolAttribute("extended_social_context", false)};
                this._rootPadding = {left: parseFloat(p.getStyle(this.dom, "paddingLeft")), top: parseFloat(p.getStyle(this.dom, "paddingTop"))};
                return true
            }, oneTimeSetup: function () {
                this.subscribe("xd.authPrompted", j(this._onAuthPrompt, "bind", true, this));
                this.subscribe("xd.edgeCreated", j(this._onEdgeCreate, "bind", true, this));
                this.subscribe("xd.edgeRemoved", j(this._onEdgeRemove, "bind", true, this));
                this.subscribe("xd.presentEdgeCommentDialog", j(this._handleEdgeCommentDialogPresentation, "bind", true, this));
                this.subscribe("xd.dismissEdgeCommentDialog", j(this._handleEdgeCommentDialogDismissal, "bind", true, this));
                this.subscribe("xd.hideEdgeCommentDialog", j(this._handleEdgeCommentDialogHide, "bind", true, this));
                this.subscribe("xd.showEdgeCommentDialog", j(this._handleEdgeCommentDialogShow, "bind", true, this))
            }, getSize: function () {
                return{width: this._getWidgetWidth(), height: this._getWidgetHeight()}
            }, _getWidgetHeight: function () {
                var l = this._getLayout(), B = this._shouldShowFaces() ? "show" : "hide", A = this._getBoolAttribute("send"), z = 65 + (A ? 25 : 0), y = {standard: {show: 80, hide: 35}, box_count: {show: z, hide: z}, button_count: {show: 21, hide: 21}, simple: {show: 20, hide: 20}};
                return y[l][B]
            }, _getWidgetWidth: function () {
                var C = this._getLayout(), B = this._getBoolAttribute("send"), A = this._shouldShowFaces() ? "show" : "hide", z = (this.getAttribute("action") === "recommend"), y = (z ? 265 : 225) + (B ? 60 : 0), l = (z ? 130 : 90) + (B ? 60 : 0), I = this.getAttribute("action") === "recommend" ? 100 : 55, H = this.getAttribute("action") === "recommend" ? 90 : 50, G = {standard: {show: 450, hide: 450}, box_count: {show: I, hide: I}, button_count: {show: l, hide: l}, simple: {show: H, hide: H}}, F = G[C][A], E = this._getPxAttribute("width", F), D = {standard: {min: y, max: 900}, box_count: {min: I, max: 900}, button_count: {min: l, max: 900}, simple: {min: 49, max: 900}};
                if (E < D[C].min) {
                    E = D[C].min
                } else {
                    if (E > D[C].max) {
                        E = D[C].max
                    }
                }
                return E
            }, _getLayout: function () {
                return this._getAttributeFromList("layout", "standard", ["standard", "button_count", "box_count", "simple"])
            }, _shouldShowFaces: function () {
                return this._getLayout() === "standard" && this._getBoolAttribute("show-faces", true)
            }, _handleEdgeCommentDialogPresentation: function (l) {
                if (!this.isValid()) {
                    return
                }
                var y = i.createElement("span");
                this._commentSlave = this._createEdgeCommentWidget(l, y);
                this.dom.appendChild(y);
                this._commentSlave.process();
                this._commentWidgetNode = y
            }, _createEdgeCommentWidget: function (l, z) {
                var y = {commentNode: z, externalUrl: l.externalURL, masterFrameName: l.masterFrameName, layout: this._getLayout(), relativeHeightOffset: this._getHeightOffset(l), relativeWidthOffset: this._getWidthOffset(l), anchorTargetX: parseFloat(l["query[anchorTargetX]"]) + this._rootPadding.left, anchorTargetY: parseFloat(l["query[anchorTargetY]"]) + this._rootPadding.top, width: parseFloat(l.width), height: parseFloat(l.height), paddingLeft: this._rootPadding.left};
                return new q(y)
            }, _getHeightOffset: function (l) {
                return parseFloat(l["anchorGeometry[y]"]) + parseFloat(l["anchorPosition[y]"]) + this._rootPadding.top
            }, _getWidthOffset: function (l) {
                var D = parseFloat(l["anchorPosition[x]"]) + this._rootPadding.left, C = p.getPosition(this.dom).x, B = this.dom.offsetWidth, A = p.getViewportInfo().width, z = parseFloat(l.width), y = false;
                if (n.getRtl()) {
                    y = z < C
                } else {
                    if ((C + z) > A) {
                        y = true
                    }
                }
                if (y) {
                    D += parseFloat(l["anchorGeometry[x]"]) - z
                }
                return D
            }, _getCommonEdgeCommentWidgetOpts: function (l, y) {
                return{colorscheme: this._attr.colorscheme, commentNode: y, controllerID: l.controllerID, nodeImageURL: l.nodeImageURL, nodeRef: this._attr.ref, nodeTitle: l.nodeTitle, nodeURL: l.nodeURL, nodeSummary: l.nodeSummary, width: parseFloat(l.width), height: parseFloat(l.height), relativeHeightOffset: this._getHeightOffset(l), relativeWidthOffset: this._getWidthOffset(l), error: l.error, siderender: l.siderender, extended_social_context: l.extended_social_context, anchorTargetX: parseFloat(l["query[anchorTargetX]"]) + this._rootPadding.left, anchorTargetY: parseFloat(l["query[anchorTargetY]"]) + this._rootPadding.top}
            }, _handleEdgeCommentDialogDismissal: function (l) {
                if (this._commentWidgetNode) {
                    this.dom.removeChild(this._commentWidgetNode);
                    delete this._commentWidgetNode
                }
            }, _handleEdgeCommentDialogHide: function () {
                if (this._commentWidgetNode) {
                    this._commentWidgetNode.style.display = "none"
                }
            }, _handleEdgeCommentDialogShow: function () {
                if (this._commentWidgetNode) {
                    this._commentWidgetNode.style.display = "block"
                }
            }, _fireEventAndInvokeHandler: function (l, y) {
                o.fireEvent(l, this);
                o.invokeHandler(this.getAttribute(y), this, [this._attr.href])
            }, _onEdgeCreate: function () {
                this._fireEventAndInvokeHandler("edge.create", "on-create")
            }, _onEdgeRemove: function () {
                this._fireEventAndInvokeHandler("edge.remove", "on-remove")
            }, _onAuthPrompt: function () {
                this._fireEventAndInvokeHandler("auth.prompt", "on-prompt")
            }});
            t.exports = m
        });
        b("sdk.XFBML.LikeBox", ["sdk.XFBML.EdgeWidget", "sdk.Helper", "Log", "sdk.Runtime"], function (v, u, t, s, r, q) {
            var p = u("sdk.XFBML.EdgeWidget"), o = u("sdk.Helper"), n = u("Log"), m = u("sdk.Runtime"), l = p.extend({_visibleAfter: "load", setupAndValidate: function () {
                this._attr = {channel: this.getChannelUrl(), api_key: m.getClientID(), connections: this.getAttribute("connections"), css: this.getAttribute("css"), height: this.getAttribute("height"), id: this.getAttribute("profile-id"), header: this._getBoolAttribute("header", true), name: this.getAttribute("name"), show_faces: this._getBoolAttribute("show-faces", true), stream: this._getBoolAttribute("stream", true), width: this._getPxAttribute("width", 300), href: this.getAttribute("href"), colorscheme: this.getAttribute("colorscheme", "light"), border_color: this.getAttribute("border_color"), show_border: this._getBoolAttribute("show-border", true)};
                if (this._getBoolAttribute("force_wall", false)) {
                    this._attr.force_wall = true
                }
                if (this._attr.connections === "0") {
                    this._attr.show_faces = false
                } else {
                    if (this._attr.connections) {
                        this._attr.show_faces = true
                    }
                }
                if (!this._attr.id && !this._attr.name && !this._attr.href) {
                    n.error('<fb:like-box> requires one of the "id" or "name" attributes.');
                    return false
                }
                var w = this._attr.height;
                if (!w) {
                    if (!this._attr.show_faces && !this._attr.stream) {
                        w = 62
                    } else {
                        w = 95;
                        if (this._attr.show_faces) {
                            w += 163
                        }
                        if (this._attr.stream) {
                            w += 300
                        }
                        if (this._attr.header && this._attr.header !== "0") {
                            w += 32
                        }
                    }
                }
                this._attr.height = w;
                this.subscribe("xd.likeboxLiked", j(this._onLiked, "bind", true, this));
                this.subscribe("xd.likeboxUnliked", j(this._onUnliked, "bind", true, this));
                return true
            }, getSize: function () {
                return{width: this._attr.width, height: this._attr.height}
            }, getUrlBits: function () {
                return{name: "likebox", params: this._attr}
            }, _onLiked: function () {
                o.fireEvent("edge.create", this)
            }, _onUnliked: function () {
                o.fireEvent("edge.remove", this)
            }});
            r.exports = l
        });
        b("sdk.XFBML.SendButtonFormWidget", ["sdk.XFBML.EdgeCommentWidget", "sdk.DOM", "sdk.Event"], function (u, t, s, r, q, p) {
            var o = t("sdk.XFBML.EdgeCommentWidget"), n = t("sdk.DOM"), m = t("sdk.Event"), l = o.extend({constructor: function (v) {
                this.parent(v);
                n.addCss(this.dom, "fb_send_button_form_widget");
                n.addCss(this.dom, v.colorscheme);
                n.addCss(this.dom, (typeof v.siderender != "undefined" && v.siderender) ? "siderender" : "");
                this._attr.nodeImageURL = v.nodeImageURL;
                this._attr.nodeRef = v.nodeRef;
                this._attr.nodeTitle = v.nodeTitle;
                this._attr.nodeURL = v.nodeURL;
                this._attr.nodeSummary = v.nodeSummary;
                this._attr.offsetX = v.relativeWidthOffset;
                this._attr.offsetY = v.relativeHeightOffset;
                this._attr.anchorTargetX = v.anchorTargetX;
                this._attr.anchorTargetY = v.anchorTargetY;
                this._attr.channel = this.getChannelUrl();
                this._attr.controllerID = v.controllerID;
                this._attr.colorscheme = v.colorscheme;
                this._attr.error = v.error;
                this._attr.siderender = v.siderender;
                this._attr.extended_social_context = v.extended_social_context
            }, _showLoader: true, getUrlBits: function () {
                return{name: "send_button_form_shell", params: this._attr}
            }, oneTimeSetup: function () {
                this.subscribe("xd.messageSent", j(this._onMessageSent, "bind", true, this))
            }, _onMessageSent: function () {
                m.fire("message.send", this._attr.nodeURL, this)
            }});
            q.exports = l
        });
        b("sdk.XFBML.Like", ["sdk.XFBML.EdgeWidget", "sdk.XFBML.SendButtonFormWidget"], function (t, s, r, q, p, o) {
            var n = s("sdk.XFBML.EdgeWidget"), m = s("sdk.XFBML.SendButtonFormWidget"), l = n.extend({getUrlBits: function () {
                return{name: "like", params: this._attr}
            }, _createEdgeCommentWidget: function (w, v) {
                if ("send" in this._attr && "widget_type" in w && w.widget_type == "send") {
                    var u = this._getCommonEdgeCommentWidgetOpts(w, v);
                    return new m(u)
                } else {
                    return this.parentCall("_createEdgeCommentWidget", w, v)
                }
            }, getIframeTitle: function () {
                return"Like this content on Facebook."
            }});
            p.exports = l
        });
        b("sdk.XFBML.LiveStream", ["sdk.XFBML.IframeWidget"], function (m, l, s, r, q, p) {
            var o = l("sdk.XFBML.IframeWidget"), n = o.extend({_visibleAfter: "load", setupAndValidate: function () {
                this._attr = {app_id: this.getAttribute("event-app-id"), href: this.getAttribute("href", h.location.href), height: this._getPxAttribute("height", 500), hideFriendsTab: this.getAttribute("hide-friends-tab"), redesigned: this._getBoolAttribute("redesigned-stream"), width: this._getPxAttribute("width", 400), xid: this.getAttribute("xid", "default"), always_post_to_friends: this._getBoolAttribute("always-post-to-friends"), via_url: this.getAttribute("via_url")};
                return true
            }, getSize: function () {
                return{width: this._attr.width, height: this._attr.height}
            }, getUrlBits: function () {
                var t = this._attr.redesigned ? "live_stream_box" : "livefeed";
                if (this._getBoolAttribute("modern", false)) {
                    t = "live_stream"
                }
                return{name: t, params: this._attr}
            }});
            q.exports = n
        });
        b("sdk.XFBML.LoginButton", ["sdk.Helper", "IframePlugin"], function (t, s, r, q, p, o) {
            var n = s("sdk.Helper"), m = s("IframePlugin"), l = m.extend({constructor: function (x, w, v, u) {
                this.parent(x, w, v, u);
                var y = m.getVal(u, "on_login");
                if (y) {
                    this.subscribe("login.status", function (z) {
                        n.invokeHandler(y, null, [z])
                    })
                }
            }, getParams: function () {
                return{scope: "string", perms: "string", size: "string", login_text: "text", show_faces: "bool", max_rows: "string", show_login_face: "bool", registration_url: "url_maybe", auto_logout_link: "bool", one_click: "bool"}
            }});
            p.exports = l
        });
        b("sdk.XFBML.Name", ["copyProperties", "sdk.Data", "escapeHTML", "sdk.Event", "sdk.XFBML.Element", "sdk.Helper", "Log", "sdk.Runtime"], function (D, C, B, A, z, y) {
            var x = C("copyProperties"), w = C("sdk.Data"), v = C("escapeHTML"), u = C("sdk.Event"), t = C("sdk.XFBML.Element"), s = C("sdk.Helper"), r = C("Log"), q = C("sdk.Runtime"), p = t.extend({process: function () {
                x(this, {_uid: this.getAttribute("uid"), _firstnameonly: this._getBoolAttribute("first-name-only"), _lastnameonly: this._getBoolAttribute("last-name-only"), _possessive: this._getBoolAttribute("possessive"), _reflexive: this._getBoolAttribute("reflexive"), _objective: this._getBoolAttribute("objective"), _linked: this._getBoolAttribute("linked", true), _subjectId: this.getAttribute("subject-id")});
                if (!this._uid) {
                    r.error('"uid" is a required attribute for <fb:name>');
                    this.fire("render");
                    return
                }
                var m = [];
                if (this._firstnameonly) {
                    m.push("first_name")
                } else {
                    if (this._lastnameonly) {
                        m.push("last_name")
                    } else {
                        m.push("name")
                    }
                }
                if (this._subjectId) {
                    m.push("sex");
                    if (this._subjectId == q.getUserID()) {
                        this._reflexive = true
                    }
                }
                var l;
                u.monitor("auth.statusChange", j(function () {
                    if (!this.isValid()) {
                        this.fire("render");
                        return true
                    }
                    if (!this._uid || this._uid == "loggedinuser") {
                        this._uid = q.getUserID()
                    }
                    if (!this._uid) {
                        return
                    }
                    if (s.isUser(this._uid)) {
                        l = w._selectByIndex(m, "user", "uid", this._uid)
                    } else {
                        l = w._selectByIndex(["name", "id"], "profile", "id", this._uid)
                    }
                    l.wait(j(function (n) {
                        if (this._subjectId == this._uid) {
                            this._renderPronoun(n[0])
                        } else {
                            this._renderOther(n[0])
                        }
                        this.fire("render")
                    }, "bind", true, this))
                }, "bind", true, this))
            }, _renderPronoun: function (n) {
                var m = "", l = this._objective;
                if (this._subjectId) {
                    l = true;
                    if (this._subjectId === this._uid) {
                        this._reflexive = true
                    }
                }
                if (this._uid == q.getUserID() && this._getBoolAttribute("use-you", true)) {
                    if (this._possessive) {
                        if (this._reflexive) {
                            m = "your own"
                        } else {
                            m = "your"
                        }
                    } else {
                        if (this._reflexive) {
                            m = "yourself"
                        } else {
                            m = "you"
                        }
                    }
                } else {
                    switch (n.sex) {
                        case"male":
                            if (this._possessive) {
                                m = this._reflexive ? "his own" : "his"
                            } else {
                                if (this._reflexive) {
                                    m = "himself"
                                } else {
                                    if (l) {
                                        m = "him"
                                    } else {
                                        m = "he"
                                    }
                                }
                            }
                            break;
                        case"female":
                            if (this._possessive) {
                                m = this._reflexive ? "her own" : "her"
                            } else {
                                if (this._reflexive) {
                                    m = "herself"
                                } else {
                                    if (l) {
                                        m = "her"
                                    } else {
                                        m = "she"
                                    }
                                }
                            }
                            break;
                        default:
                            if (this._getBoolAttribute("use-they", true)) {
                                if (this._possessive) {
                                    if (this._reflexive) {
                                        m = "their own"
                                    } else {
                                        m = "their"
                                    }
                                } else {
                                    if (this._reflexive) {
                                        m = "themselves"
                                    } else {
                                        if (l) {
                                            m = "them"
                                        } else {
                                            m = "they"
                                        }
                                    }
                                }
                            } else {
                                if (this._possessive) {
                                    if (this._reflexive) {
                                        m = "his/her own"
                                    } else {
                                        m = "his/her"
                                    }
                                } else {
                                    if (this._reflexive) {
                                        m = "himself/herself"
                                    } else {
                                        if (l) {
                                            m = "him/her"
                                        } else {
                                            m = "he/she"
                                        }
                                    }
                                }
                            }
                            break
                    }
                }
                if (this._getBoolAttribute("capitalize", false)) {
                    m = s.upperCaseFirstChar(m)
                }
                this.dom.innerHTML = m
            }, _renderOther: function (n) {
                var m = "", l = "";
                if (this._uid == q.getUserID() && this._getBoolAttribute("use-you", true)) {
                    if (this._reflexive) {
                        if (this._possessive) {
                            m = "your own"
                        } else {
                            m = "yourself"
                        }
                    } else {
                        if (this._possessive) {
                            m = "your"
                        } else {
                            m = "you"
                        }
                    }
                } else {
                    if (n) {
                        if (null === n.first_name) {
                            n.first_name = ""
                        }
                        if (null === n.last_name) {
                            n.last_name = ""
                        }
                        if (this._firstnameonly && n.first_name !== undefined) {
                            m = v(n.first_name)
                        } else {
                            if (this._lastnameonly && n.last_name !== undefined) {
                                m = v(n.last_name)
                            }
                        }
                        if (!m) {
                            m = v(n.name)
                        }
                        if (m !== "" && this._possessive) {
                            m += "'s"
                        }
                    }
                }
                if (!m) {
                    m = v(this.getAttribute("if-cant-see", "Facebook User"))
                }
                if (m) {
                    if (this._getBoolAttribute("capitalize", false)) {
                        m = s.upperCaseFirstChar(m)
                    }
                    if (n && this._linked) {
                        l = s.getProfileLink(n, m, this.getAttribute("href", null))
                    } else {
                        l = m
                    }
                }
                this.dom.innerHTML = l
            }});
            z.exports = p
        });
        b("sdk.XFBML.ProfilePic", ["sdk.Data", "sdk.DOM", "escapeHTML", "sdk.XFBML.Element", "sdk.Event", "format", "sdk.Helper", "sdk.Runtime", "UrlMap", "ProfilePicConfig"], function (J, I, H, G, F, E) {
            var D = I("sdk.Data"), C = I("sdk.DOM"), B = I("escapeHTML"), A = H("ProfilePicConfig"), z = I("sdk.XFBML.Element"), y = I("sdk.Event"), x = I("format"), w = I("sdk.Helper"), v = I("sdk.Runtime"), u = I("UrlMap"), t = {n: "pic_big", normal: "pic_big", q: "pic_square", s: "pic", small: "pic", square: "pic_square", t: "pic_small", thumb: "pic_small"}, s = z.extend({process: function () {
                var q = this.getAttribute("size", "thumb"), p = t[q], o = this._getPxAttribute("width"), n = this._getPxAttribute("height"), m = this.dom.style, l = this.getAttribute("uid");
                if (this._getBoolAttribute("facebook-logo")) {
                    p += "_with_logo"
                }
                if (o) {
                    o = o + "px";
                    m.width = o
                }
                if (n) {
                    n = n + "px";
                    m.height = n
                }
                var r = j(function (N) {
                    var M = N ? N[0] : null, O = M ? M[p] : null;
                    if (!O) {
                        O = u.resolve("fbcdn") + "/" + A.defPicMap[p]
                    }
                    var K = ((o ? "width:" + o + ";" : "") + (n ? "height:" + o + ";" : "")), L = x('<img src="{0}" alt="{1}" title="{1}" style="{2}" class="{3}" />', O, M ? B(M.name) : "", K, this.dom.className);
                    if (this._getBoolAttribute("linked", true)) {
                        L = w.getProfileLink(M, L, this.getAttribute("href", null))
                    }
                    this.dom.innerHTML = L;
                    C.addCss(this.dom, "fb_profile_pic_rendered");
                    this.fire("render")
                }, "bind", true, this);
                y.monitor("auth.statusChange", j(function () {
                    if (!this.isValid()) {
                        this.fire("render");
                        return true
                    }
                    if (this.getAttribute("uid", null) == "loggedinuser") {
                        l = v.getUserID()
                    }
                    if (v.getLoginStatus() !== "unknown" && l) {
                        D._selectByIndex(["name", p], w.isUser(l) ? "user" : "profile", w.isUser(l) ? "uid" : "id", l).wait(r)
                    } else {
                        r()
                    }
                }, "bind", true, this))
            }});
            F.exports = s
        });
        b("sdk.XFBML.RecommendationsBar", ["sdk.Arbiter", "DOMEventListener", "sdk.Event", "sdk.XFBML.IframeWidget", "resolveURI", "sdk.Runtime"], function (z, y, x, w, v, u) {
            var t = y("sdk.Arbiter"), s = y("DOMEventListener"), r = y("sdk.Event"), q = y("sdk.XFBML.IframeWidget"), p = y("resolveURI"), o = y("sdk.Runtime"), n = q.extend({getUrlBits: function () {
                return{name: "recommendations_bar", params: this._attr}
            }, setupAndValidate: function () {
                function C(I, H) {
                    var L = 0, K = null;

                    function J() {
                        H();
                        K = null;
                        L = j("Date", "now", false)
                    }

                    return function () {
                        if (!K) {
                            var M = j("Date", "now", false);
                            if (M - L < I) {
                                K = f(J, I - (M - L))
                            } else {
                                J()
                            }
                        }
                        return true
                    }
                }

                function B(I) {
                    if (I.match(/^\d+(?:\.\d+)?%$/)) {
                        var H = Math.min(Math.max(parseInt(I, 10), 0), 100);
                        I = H / 100
                    } else {
                        if (I != "manual" && I != "onvisible") {
                            I = "onvisible"
                        }
                    }
                    return I
                }

                function A(H) {
                    return Math.max(parseInt(H, 10) || 30, 10)
                }

                function m(H) {
                    if (H == "left" || H == "right") {
                        return H
                    }
                    return o.getRtl() ? "left" : "right"
                }

                this._attr = {channel: this.getChannelUrl(), api_key: o.getClientID(), font: this.getAttribute("font"), colorscheme: this.getAttribute("colorscheme"), href: p(this.getAttribute("href")), side: m(this.getAttribute("side")), site: this.getAttribute("site"), action: this.getAttribute("action"), ref: this.getAttribute("ref"), max_age: this.getAttribute("max_age"), trigger: B(this.getAttribute("trigger", "")), read_time: A(this.getAttribute("read_time")), num_recommendations: parseInt(this.getAttribute("num_recommendations"), 10) || 2};
                this._showLoader = false;
                this.subscribe("iframe.onload", j(function () {
                    var H = this.dom.children[0];
                    H.className = "fbpluginrecommendationsbar" + this._attr.side
                }, "bind", true, this));
                var l = j(function () {
                    s.remove(h, "scroll", l);
                    s.remove(i.documentElement, "click", l);
                    s.remove(i.documentElement, "mousemove", l);
                    f(j(this.arbiterInform, "bind", true, this, "platform/plugins/recommendations_bar/action", null, t.BEHAVIOR_STATE), this._attr.read_time * 1000);
                    return true
                }, "bind", true, this);
                s.add(h, "scroll", l);
                s.add(i.documentElement, "click", l);
                s.add(i.documentElement, "mousemove", l);
                if (this._attr.trigger == "manual") {
                    var G = j(function (H) {
                        if (H == this._attr.href) {
                            r.unsubscribe("xfbml.recommendationsbar.read", G);
                            this.arbiterInform("platform/plugins/recommendations_bar/trigger", null, t.BEHAVIOR_STATE)
                        }
                        return true
                    }, "bind", true, this);
                    r.subscribe("xfbml.recommendationsbar.read", G)
                } else {
                    var F = C(500, j(function () {
                        if (this.calculateVisibility()) {
                            s.remove(h, "scroll", F);
                            s.remove(h, "resize", F);
                            this.arbiterInform("platform/plugins/recommendations_bar/trigger", null, t.BEHAVIOR_STATE)
                        }
                        return true
                    }, "bind", true, this));
                    s.add(h, "scroll", F);
                    s.add(h, "resize", F);
                    F()
                }
                this.visible = false;
                var E = C(500, j(function () {
                    if (!this.visible && this.calculateVisibility()) {
                        this.visible = true;
                        this.arbiterInform("platform/plugins/recommendations_bar/visible")
                    } else {
                        if (this.visible && !this.calculateVisibility()) {
                            this.visible = false;
                            this.arbiterInform("platform/plugins/recommendations_bar/invisible")
                        }
                    }
                    return true
                }, "bind", true, this));
                s.add(h, "scroll", E);
                s.add(h, "resize", E);
                E();
                this.focused = true;
                var D = j(function () {
                    this.focused = !this.focused;
                    return true
                }, "bind", true, this);
                s.add(h, "blur", D);
                s.add(h, "focus", D);
                this.resize_running = false;
                this.animate = false;
                this.subscribe("xd.signal_animation", j(function () {
                    this.animate = true
                }, "bind", true, this));
                return true
            }, getSize: function () {
                return{height: 25, width: (this._attr.action == "recommend" ? 140 : 96)}
            }, calculateVisibility: function () {
                var B = i.documentElement.clientHeight;
                if (!this.focused && h.console && h.console.firebug) {
                    return this.visible
                }
                switch (this._attr.trigger) {
                    case"manual":
                        return false;
                    case"onvisible":
                        var A = this.dom.getBoundingClientRect().top;
                        return A <= B;
                    default:
                        var m = h.pageYOffset || i.body.scrollTop, l = i.documentElement.scrollHeight;
                        return(m + B) / l >= this._attr.trigger
                }
            }});
            v.exports = n
        });
        b("sdk.XFBML.Registration", ["sdk.Auth", "sdk.Helper", "sdk.XFBML.IframeWidget", "sdk.Runtime", "UrlMap"], function (x, w, v, u, t, s) {
            var r = w("sdk.Auth"), q = w("sdk.Helper"), p = w("sdk.XFBML.IframeWidget"), o = w("sdk.Runtime"), n = w("UrlMap"), m = p.extend({_visibleAfter: "immediate", _baseHeight: 167, _fieldHeight: 28, _skinnyWidth: 520, _skinnyBaseHeight: 173, _skinnyFieldHeight: 52, setupAndValidate: function () {
                this._attr = {action: this.getAttribute("action"), border_color: this.getAttribute("border-color"), channel_url: this.getChannelUrl(), client_id: o.getClientID(), fb_only: this._getBoolAttribute("fb-only", false), fb_register: this._getBoolAttribute("fb-register", false), fields: this.getAttribute("fields"), height: this._getPxAttribute("height"), redirect_uri: this.getAttribute("redirect-uri", h.location.href), no_footer: this._getBoolAttribute("no-footer"), no_header: this._getBoolAttribute("no-header"), onvalidate: this.getAttribute("onvalidate"), width: this._getPxAttribute("width", 600), target: this.getAttribute("target")};
                if (this._attr.onvalidate) {
                    this.subscribe("xd.validate", j(function (l) {
                        var A = j("JSON", "parse", false, l.value), z = j(function (B) {
                            this.arbiterInform("Registration.Validation", {errors: B, id: l.id})
                        }, "bind", true, this), y = q.executeFunctionByName(this._attr.onvalidate, A, z);
                        if (y) {
                            z(y)
                        }
                    }, "bind", true, this))
                }
                this.subscribe("xd.authLogin", j(this._onAuthLogin, "bind", true, this));
                this.subscribe("xd.authLogout", j(this._onAuthLogout, "bind", true, this));
                return true
            }, getSize: function () {
                return{width: this._attr.width, height: this._getHeight()}
            }, _getHeight: function () {
                if (this._attr.height) {
                    return this._attr.height
                }
                var l;
                if (!this._attr.fields) {
                    l = ["name"]
                } else {
                    try {
                        l = j("JSON", "parse", false, this._attr.fields)
                    } catch (y) {
                        l = this._attr.fields.split(/,/)
                    }
                }
                if (this._attr.width < this._skinnyWidth) {
                    return this._skinnyBaseHeight + l.length * this._skinnyFieldHeight
                } else {
                    return this._baseHeight + l.length * this._fieldHeight
                }
            }, getUrlBits: function () {
                return{name: "registration", params: this._attr}
            }, getDefaultWebDomain: function () {
                return n.resolve("www", true)
            }, _onAuthLogin: function () {
                if (!r.getAuthResponse()) {
                    r.getLoginStatus()
                }
                q.fireEvent("auth.login", this)
            }, _onAuthLogout: function () {
                if (!r.getAuthResponse()) {
                    r.getLoginStatus()
                }
                q.fireEvent("auth.logout", this)
            }});
            t.exports = m
        });
        b("sdk.XFBML.Send", ["sdk.DOM", "sdk.XFBML.EdgeWidget", "sdk.Runtime", "sdk.XFBML.SendButtonFormWidget"], function (v, u, t, s, r, q) {
            var p = u("sdk.DOM"), o = u("sdk.XFBML.EdgeWidget"), n = u("sdk.Runtime"), m = u("sdk.XFBML.SendButtonFormWidget"), l = o.extend({setupAndValidate: function () {
                p.addCss(this.dom, "fb_edge_widget_with_comment");
                this._attr = {channel: this.getChannelUrl(), api_key: n.getClientID(), font: this.getAttribute("font"), colorscheme: this.getAttribute("colorscheme", "light"), href: this.getAttribute("href", h.location.href), ref: this.getAttribute("ref"), extended_social_context: this.getAttribute("extended_social_context", false)};
                this._rootPadding = {left: parseFloat(p.getStyle(this.dom, "paddingLeft")), top: parseFloat(p.getStyle(this.dom, "paddingTop"))};
                return true
            }, getUrlBits: function () {
                return{name: "send", params: this._attr}
            }, _createEdgeCommentWidget: function (x, w) {
                var y = this._getCommonEdgeCommentWidgetOpts(x, w);
                return new m(y)
            }, getSize: function () {
                return{width: 80, height: 25}
            }});
            r.exports = l
        });
        b("sdk.XFBML.SocialContext", ["sdk.Event", "sdk.XFBML.IframeWidget"], function (t, s, r, q, p, o) {
            var n = s("sdk.Event"), m = s("sdk.XFBML.IframeWidget"), l = m.extend({setupAndValidate: function () {
                var u = this.getAttribute("size", "small");
                this._attr = {channel: this.getChannelUrl(), width: this._getPxAttribute("width", 400), height: this._getPxAttribute("height", 100), ref: this.getAttribute("ref"), size: this.getAttribute("size"), keywords: this.getAttribute("keywords"), urls: this.getAttribute("urls"), object_id: this.getAttribute("object_id")};
                this.subscribe("xd.social_context_stats", j(this._bubbleSocialContextStats, "bind", true, this));
                return true
            }, _bubbleSocialContextStats: function (v) {
                var u = {pluginID: this.getAttribute("plugin-id"), socialContextPageIDs: j("JSON", "parse", false, v.social_context_page_ids)};
                n.fire("xfbml.social_context_stats", u)
            }, getSize: function () {
                return{width: this._attr.width, height: this._attr.height}
            }, getUrlBits: function () {
                return{name: "social_context", params: this._attr}
            }});
            p.exports = l
        });
        b("legacy:fb.xfbml", ["Assert", "sdk.domReady", "sdk.Event", "FB", "IframePlugin", "PluginTags", "wrapFunction", "XFBML", "sdk.XFBML.Comments", "sdk.XFBML.CommentsCount", "sdk.XFBML.ConnectBar", "sdk.XFBML.LikeBox", "sdk.XFBML.Like", "sdk.XFBML.LiveStream", "sdk.XFBML.LoginButton", "sdk.XFBML.Name", "sdk.XFBML.ProfilePic", "sdk.XFBML.RecommendationsBar", "sdk.XFBML.Registration", "sdk.XFBML.Send", "sdk.XFBML.SocialContext"], function (B, A, z, y) {
            var x = A("Assert"), w = A("sdk.domReady"), v = A("sdk.Event"), u = A("FB"), t = A("IframePlugin"), s = A("PluginTags"), r = A("wrapFunction"), q = A("XFBML"), p = {comments: A("sdk.XFBML.Comments"), comments_count: A("sdk.XFBML.CommentsCount"), connect_bar: A("sdk.XFBML.ConnectBar"), fan: A("sdk.XFBML.LikeBox"), like: A("sdk.XFBML.Like"), like_box: A("sdk.XFBML.LikeBox"), live_stream: A("sdk.XFBML.LiveStream"), login_button: A("sdk.XFBML.LoginButton"), name: A("sdk.XFBML.Name"), profile_pic: A("sdk.XFBML.ProfilePic"), recommendations_bar: A("sdk.XFBML.RecommendationsBar"), registration: A("sdk.XFBML.Registration"), send: A("sdk.XFBML.Send"), social_context: A("sdk.XFBML.SocialContext")};
            j(j("Object", "keys", false, s), "forEach", true, function (l) {
                q.registerTag({xmlns: "fb", localName: l.replace(/_/g, "-"), ctor: t.withParams(s[l])})
            });
            j(j("Object", "keys", false, p), "forEach", true, function (l) {
                q.registerTag({xmlns: "fb", localName: l.replace(/_/g, "-"), ctor: p[l]})
            });
            u.provide("XFBML", {parse: function (l) {
                x.maybeXfbml(l, "Invalid argument");
                if (l && l.nodeType === 9) {
                    l = l.body
                }
                return q.parse.apply(null, arguments)
            }});
            u.provide("XFBML.RecommendationsBar", {markRead: function (l) {
                v.fire("xfbml.recommendationsbar.read", l || h.location.href)
            }});
            q.subscribe("parse", j(v.fire, "bind", true, v, "xfbml.parse"));
            q.subscribe("render", j(v.fire, "bind", true, v, "xfbml.render"));
            v.subscribe("init:post", function (l) {
                if (l.xfbml) {
                    f(r(j(w, "bind", true, null, q.parse), "entry", "init:post:xfbml.parse"), 0)
                }
            });
            x.define("Xfbml", function (l) {
                return(l.nodeType === 1 || l.nodeType === 9) && typeof l.nodeName === "string"
            });
            try {
                if (i.namespaces && !i.namespaces.item.fb) {
                    i.namespaces.add("fb")
                }
            } catch (o) {
            }
        }, 3);
        void (0)
    }).call({}, window.inDapIF ? parent.window : window)
} catch (e) {
    new Image().src = "http://www.facebook.com/common/scribe_endpoint.php?c=jssdk_error&m=" + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","message":"' + e.message + '"}}')
}
;
var gvt = {};
gvt.FbGlobal = {};
gvt.giveterGlobal = {};
gvt.TwGlobal = {};
gvt.calendar = {};
gvt.loggedInUsername = $.cookie("user_name_usr");
gvt.loggedInUserId = $.cookie("user_id_usr");
gvt.feature = {mandatoryLogin: false};
gvt.cookieDomain = cookieDomain;
var showContinueScreen;
$(window).load(function () {
    var a = (new Date()).getTime();
    var b = a - startTime;
    sendSaveActivityAjax("page loaded", b)
});
function updateCookieVars() {
    gvt.loggedInUsername = $.cookie("user_name_usr");
    gvt.loggedInUserId = $.cookie("user_id_usr");
    gvt.FbGlobal.accessToken = $.cookie("fbAccessToken");
    gvt.FbGlobal.fbId = $.cookie("fbLoginID");
    if (gvt.loggedInUsername !== null) {
        gvt.loggedInUsername = gvt.loggedInUsername.replace(/"/g, "")
    }
}
updateCookieVars();
$(document).ready(function () {
    var b = (new Date()).getTime();
    var d = b - startTime;
    sendSaveActivityAjax("page ready", d);
    if (!gvt.feature.mandatoryLogin) {
        redirectUrl("", false)
    }
    $("input, textarea").placeholder();
    $(".dropdown-toggle").dropdown();
    $(".hide-js").hide();
    var c = false;
    var a = "";
    showContinueScreen = false;
    gvt.FbGlobal.sortable = [];
    var e = $(document).height();
    $("#grid").css("height", e + "px");
    $("#grid").toggle();
    $(".grid-button").click(function () {
        $("#grid").toggle()
    });
    $(".lazy").each(function () {
        $(this).attr("src", $(this).data("original")).load(function () {
            $(this).removeClass("thumb")
        })
    });
    var f = 0;
    $(".slider-control.right").unbind("click").click(function () {
        if (f >= -2380) {
            $(".ft-vendor-logo-inner-container").animate({left: "-=100px"}, 100);
            f = f - 100
        }
    });
    $(".slider-control.left").unbind("click").click(function () {
        if (f <= -100) {
            $(".ft-vendor-logo-inner-container").animate({left: "+=100px"}, 100);
            f = f + 100
        }
    });
    if (gvt.loggedInUserId !== null && gvt.loggedInUserId !== "") {
        $(".login-header-container").hide();
        $(".usernameGlobal").text(gvt.loggedInUsername);
        $(".logged-in-header-container").show();
        redirectUrl("", false)
    }
    $("#signupFormGlobal input[name=email]").blur(function () {
        if ($("#signupFormGlobal input[name=email]").val() === "" || !isValidEmailAddress($("#signupFormGlobal input[name=email]").val())) {
            $("#emailErrorText").text("Not a valid email").hide().fadeIn(300)
        } else {
            $("#emailErrorText").fadeOut(300, function () {
                $(this).text("")
            })
        }
    });
    $("#signupFormGlobal input[name=email]").focus(function () {
        $("#emailErrorText").fadeOut(300, function () {
            $(this).text("")
        })
    });
    $("#signupFormGlobal input[name=password]").blur(function () {
        if ($("#signupFormGlobal input[name=password]").val() === "") {
            $("#passwordErrorText").text("Please Enter a password").hide().fadeIn(300)
        } else {
            $("#passwordErrorText").fadeOut(300, function () {
                $(this).text("")
            })
        }
    });
    $("#signupFormGlobal input[name=password]").focus(function () {
        $("#passwordErrorText").fadeOut(300, function () {
            $(this).text("")
        })
    });
    $("#signupFormGlobal input[name=fullName]").blur(function () {
        if ($("#signupFormGlobal input[name=fullName]").val() === "") {
            $("#fullNameErrorText").text("Please Enter a name").hide().fadeIn(300)
        } else {
            $("#fullNameErrorText").fadeOut(300, function () {
                $(this).text("")
            })
        }
    });
    $("#signupFormGlobal input[name=fullName]").focus(function () {
        $("#fullNameErrorText").fadeOut(300, function () {
            $(this).text("")
        })
    });
    $("#signupFormGlobal select[name=sex]").blur(function () {
        if ($("#signupFormGlobal select[name=sex]").val() == 0) {
            $("#sexErrorText").text("Enter a gender").hide().fadeIn(300)
        } else {
            $("#sexErrorText").fadeOut(300, function () {
                $(this).text("")
            })
        }
    });
    $("#signupFormGlobal select[name=sex]").focus(function () {
        $("#sexErrorText").fadeOut(300, function () {
            $(this).text("")
        })
    });
    $("#signupFormGlobal input[name=mobileNum]").blur(function () {
        if (!isValidMobileNum($("#signupFormGlobal input[name=mobileNum]").val())) {
            $("#mobileNumErrorText").text("Enter valid number").hide().fadeIn(300)
        } else {
            $("#mobileNumErrorText").fadeOut(300, function () {
                $(this).text("")
            })
        }
    });
    $("#signupFormGlobal input[name=mobileNum]").focus(function () {
        $("#mobileNumErrorText").fadeOut(300, function () {
            $(this).text("")
        })
    });
    $("#loginFormGlobal input[name=email]").blur(function () {
        if ($("#loginFormGlobal input[name=email]").val() === "" || !isValidEmailAddress($("#loginFormGlobal input[name=email]").val())) {
            $("#loginEmailErrorText").text("Not a valid email").hide().fadeIn(300)
        } else {
            $("#loginEmailErrorText").fadeOut(300, function () {
                $(this).text("")
            })
        }
    });
    $("#loginFormGlobal input[name=email]").focus(function () {
        $("#loginEmailErrorText").fadeOut(300, function () {
            $(this).text("")
        })
    });
    $("#loginFormGlobal input[name=password]").blur(function () {
        if ($("#loginFormGlobal input[name=password]").val() === "") {
            $("#loginPassErrorText").text("Please Enter a password").hide().fadeIn(300)
        } else {
            $("#loginPassErrorText").fadeOut(300, function () {
                $(this).text("")
            })
        }
    });
    $("#loginFormGlobal input[name=password]").focus(function () {
        $("#loginPassErrorText").fadeOut(300, function () {
            $(this).text("")
        })
    });
    $("#header .abt-header-text").mouseenter(function () {
        $(this).find("i").addClass("icon-orange")
    });
    $("#header .abt-header-text").mouseleave(function () {
        $(this).find("i").removeClass("icon-orange")
    });
    $("#loginLinkGlobal").click(function () {
        resetLoginModal()
    });
    $(".show-signup-form").click(function () {
        resetLoginModal();
        $("#loginContainer").hide();
        $("#signupContainer").show()
    });
    $(".fp-link").click(function () {
        $("#loginContainer").hide();
        $("#fp-email-nf").hide();
        $("#fp-reset-error").hide();
        $("#forgot-email").val($("#loginFormGlobal input[name=email]").val());
        $("#forgotPassContainer").show()
    });
    $(".back-login").click(function () {
        $("#forgotPassContainer").hide();
        $("#loginContainer").show()
    });
    $("#forgot-pass-form").submit(function () {
        var g = $("#forgot-email").val();
        if (isValidEmailAddress(g) && g !== "") {
            $(".login-modal-loader").show();
            gvt.resetPassword(g)
        }
        return false
    });
    $(".login-link-header").click(function () {
        showLoginModal("", redirectUrl, $(this), false, "login")
    });
    $(".signup-button-header").click(function () {
        showLoginModal("", redirectUrl, $(this), false, "signup")
    });
    $(".loggedin-option-logout").unbind("click").click(gvt.logout);
    $("#search").submit(function () {
        if ($.trim($("#searchQuery").val()) === "") {
            return false
        }
    });
    $("#searchHeader").submit(function () {
        if ($.trim($("#searchQueryHeader").val()) === "") {
            return false
        }
    });
    $(".search-icon-header").click(function () {
        $("#searchHeader").submit()
    });
    $(".search-icon").click(function () {
        $("#search").submit()
    });
    $("#loginHelp").mouseenter(function () {
        $(".login-info-tooltip").stop().fadeIn(200)
    });
    $("#loginHelp").mouseleave(function () {
        $(".login-info-tooltip").stop().fadeOut(200)
    });
    $("#myModal").on("hidden", function () {
        $(".title-info").hide();
        $(".modal-container").hide()
    });
    $(".showcase-feedback").click(function () {
        $(".feedback-modal").modal("show")
    });
    $(".log-action").click(function () {
        logAction($(this))
    });
    $(".log-activity").click(logActivity);
    $(".fb-like-link").unbind("click").click(function () {
        var h = encodeURIComponent("http://www.giveter.com");
        var g = "https://www.facebook.com/sharer/sharer.php?u=" + h;
        window.open(g, "name", "height=350,width=700");
        sendSaveActionAjax("fbLikeResults Share", tagged_product_id)
    })
});
function logAction(a) {
    var c, b;
    if (a.data("log") !== "" && a.data("log") !== undefined) {
        c = a.data("log")
    } else {
        c = a.attr("key")
    }
    if (a.data("pid") !== "" && a.data("pid") !== undefined) {
        b = a.data("pid")
    } else {
        b = a.attr("pid")
    }
    sendSaveActionAjax(c, b)
}
function logActivity() {
    var b, a;
    if ($(this).data("activity") !== "" && $(this).data("activity") !== undefined) {
        b = $(this).data("activity")
    }
    if ($(this).data("pid") !== "" && $(this).data("pid") !== undefined) {
        a = $(this).data("pid")
    }
    sendSaveActivityAjax(b, a)
}
function validateSuForm() {
    if ($("#signupFormGlobal input[name=fullName]").val() === "") {
        gvt.giveterGlobal.hasErrors = true;
        errorText = "Please Enter a name";
        $("#fullNameErrorText").text(errorText);
        return
    }
    $("#fullNameErrorText").text("");
    if (!isValidEmailAddress($("#signupFormGlobal input[name=email]").val())) {
        gvt.giveterGlobal.hasErrors = true;
        errorText = "Not a valid email";
        $("#emailErrorText").text(errorText);
        return
    }
    $("#emailErrorText").text("");
    if ($("#signupFormGlobal input[name=password]").val() === "") {
        gvt.giveterGlobal.hasErrors = true;
        errorText = "Please Enter a password";
        $("#passwordErrorText").text(errorText);
        return
    }
    $("#passwordErrorText").text("");
    if ($("#signupFormGlobal select[name=sex]").val() == 0) {
        gvt.giveterGlobal.hasErrors = true;
        errorText = "Enter a gender";
        $("#sexErrorText").text(errorText);
        return
    }
    $("#sexErrorText").text("");
    if (!isValidMobileNum($("#signupFormGlobal input[name=mobileNum]").val())) {
        gvt.giveterGlobal.hasErrors = true;
        errorText = "Enter valid number";
        $("#mobileNumErrorText").text(errorText);
        return
    }
    $("#mobileNumErrorText").text("");
    gvt.giveterGlobal.hasErrors = false;
    errorText = "";
    return
}
function isValidLoginForm() {
    if ($("#loginFormGlobal input[name=email]").val() === "" || !isValidEmailAddress($("#loginFormGlobal input[name=email]").val()) || $("#loginFormGlobal input[name=password]").val() === "") {
        return false
    } else {
        return true
    }
}
function isValidDate(a) {
    var b = new RegExp(/([\d]{2})\/([\d]{2})\/([\d]{4})/);
    return b.test(a)
}
function isValidEmailAddress(b) {
    var a = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return a.test(b)
}
function isValidMobileNum(a) {
    if (a !== "") {
        return true
    } else {
        return false
    }
}
function showLoginModal(d, e, b, f, a) {
    $(".modal-container").hide();
    updateCookieVars();
    if (gvt.loggedInUserId !== null && gvt.loggedInUserId !== "") {
        gvt.onLogIn(e, b)
    }
    resetLoginModal();
    if (a !== "" && a !== undefined) {
        if (a == "login") {
            $("#signupContainer").hide();
            $("#loginContainer").show()
        } else {
            if (a == "signup") {
                $("#loginContainer").hide();
                $("#signupContainer").show()
            }
        }
    }
    $("#myModal").modal("show");
    showContinueScreen = f;
    if (d !== null && d !== "" && d !== "undefined" && d !== undefined) {
        $("#myModal .first").text(d)
    }
    $("#loginFormGlobal").unbind("submit").submit(function () {
        gvt.giveterGlobal.giveterLogin(e, b);
        return false
    });
    $("#signupFormGlobal").unbind("submit").submit(function () {
        gvt.giveterGlobal.giveterSignup(e, b);
        return false
    });
    $(".facebookLoginGlobal").unbind("facebookLoginGlobalClick").click(function c() {
        gvt.FbGlobal.facebookLogin(e, b)
    })
}
function resetLoginModal() {
    $("#signupContainer").hide();
    $("#forgotPassContainer").hide();
    $("#fb-remind-container").hide();
    $("#signup-fp-container").hide();
    $("#login-nf-container").hide();
    $(".pass-mismatch").hide();
    $(".json-error").hide();
    $("#reset-confirmation-container").hide();
    $("#loginContainer").show();
    $(".login-loader").hide()
}
function redirectUrl(c, b) {
    if ($(".product-know-more").length) {
        $(".product-know-more").parent("a").attr("href", "/redirectPage/" + $(".product-know-more").attr("pid"))
    }
    if ($(".buy-btn-js").length) {
        var a = [];
        if ($(".buy-btn-js").length) {
            $(".buy-btn-js").each(function () {
                $(this).parent("a").attr("href", "/redirectPage/" + $(this).attr("pid"))
            })
        }
        if ($(".redirect-vendor").length) {
            $(".redirect-vendor").each(function () {
                $(this).parent("a").attr("href", "/redirectPage/" + $(this).attr("pid"))
            })
        }
        if (showContinueScreen) {
            showContinue(c);
            showContinueScreen = false
        } else {
            if (b) {
                gvt.calendar.showCalendarModal()
            }
            hideModal()
        }
    } else {
        hideModal()
    }
}
gvt.calendar.showCalendarModal = function () {
    var l = {};
    var g = "";
    var h = "Birthday";
    $.each(selectedFilters, function (m, o) {
        if (selectedFilters[m] === true) {
            var n = allFiltersToKey[m];
            n = parseInt(n, 10);
            for (i = 0; i < allFiltersCategories.rel.length; i++) {
                if (allFiltersCategories.rel[i] === n) {
                    g = m
                }
            }
            for (j = 0; j < allFiltersCategories.oca.length; j++) {
                if (allFiltersCategories.oca[j] === n) {
                    h = m
                }
            }
        }
    });
    if (document.location.pathname.match("delivery-(.*)-day")) {
        var e = parseInt(document.location.pathname.match("delivery-(.*)-day")[1], 10);
        var k = new Date();
        k.setDate(k.getDate() + e);
        var b = k.getMonth() + 1;
        var d = k.getDate() + "/" + b;
        l.date = d
    }
    if (g !== "") {
        var c = g.split(":")[1];
        if ("Him" === c || "Her" === c || "Couple" === c || "Both" === c) {
            if ("Both" === c) {
            } else {
            }
        } else {
            g = c
        }
        l.relationship = g
    }
    if ("Couple" === c || h === "Wedding" || "Both" === c) {
        h = "Anniversary"
    }
    if (h === "Anniversary" || h === "Birthday") {
        l.occasion = h
    }
    var a = $.cookie("calendarRel");
    if (l.relationship === a) {
        $("#myModal").modal("hide")
    } else {
        $(".modal-container").hide();
        $("#calendar-container").show();
        $("#calendar-container .calendar-card-container").html(gvt.calendar.generateCldOptionContainer(l, false));
        var f = $.cookie("user_name_usr");
        if (f) {
            f = f.split(" ")[0];
            f = f.replace('"', "")
        }
        $("#calendar-container .text-container .username").html(f);
        $("#myModal").modal("show");
        gvt.calendar.bindEvents();
        $("#calendar-container").trigger("calEvent")
    }
};
function showContinue(b) {
    var d = b.data("ven");
    var a = b.data("vl");
    var c;
    if (b.data("pid") !== "" && b.data("pid") !== undefined) {
        c = b.data("pid")
    } else {
        c = b.attr("pid")
    }
    $("#continue-container .username").text(gvt.loggedInUsername.split(" ")[0]);
    $("#continue-container .vendor").html(d);
    $("#continue-container .vendor-logo").attr("src", a);
    $(".modal-container").hide();
    $("#continue-container").show();
    $("#continue-container .continue-button").attr("href", "/redirectPage/" + b.attr("pid"));
    $("#continue-container .continue-button").unbind("click").click(function () {
        _gaq.push(["_trackEvent", "Product", "toVendorLogin", d]);
        sendSaveActionAjax("continued to vendor", c);
        gvt.calendar.showCalendarModal()
    })
}
function hideModal() {
    $("#myModal").modal("hide")
}
function sendSaveActionAjax(b, a) {
    if (a === undefined || a === "") {
        a = 0
    }
    if (typeof(searchString) === "undefined") {
        searchString = ""
    }
    $.ajax({url: "/ajax/saveAction", cache: "false", dataType: "json", data: "actionString=" + b + "&searchString=" + encodeURIComponent(searchString) + "&productID=" + a})
}
function sendSaveActivityAjax(b, a) {
    if (typeof(a) === "undefined") {
        a = 0
    }
    if (typeof(searchString) === "undefined") {
        searchString = ""
    }
    $.ajax({url: "/ajax/saveActivity", cache: "false", dataType: "json", data: "actionString=" + b + "&actionParams=" + searchString + "-" + a})
};
var countMax;
var shortlistedProductsArray;
var giftsForProductDetailHeight;
$(document).ready(function () {
    countMax = $(".shortlist-container").find(".sl-thumb-r").length;
    var l = 1200;
    $(".sht-tw-icon").unbind("click").click(function () {
        var i = "I want your suggestions on the shortlist I have created.";
        gvt.TwGlobal.share(i, document.location.href)
    });
    $(".sht-fb-icon").unbind("click").click(function () {
        var i = "I want your suggestions on the shortlist I have created.";
        gvt.FbGlobal.share(i, document.location.href)
    });
    var d, g;
    if ($(".shortlist-container").length) {
        var b = $(".shortlist-container").parent();
        var c = $(window).width();
        if (c > l) {
            $(".shortlist-container").show();
            $("#shortlistblock").hide();
            $(".history-container").show();
            $(".history-container-top").hide();
            d = $(".shortlist-container").offset().top - 10 - 50;
            if ($(".history-container")) {
                h = $(".history-container").outerHeight() + 10
            }
            g = b.offset().top + b.outerHeight() - h - 70 - 241
        } else {
            $(".shortlist-container").hide();
            $("#shortlistblock").show();
            $(".history-container").hide();
            $(".history-container-top").show()
        }
        giftsForProductDetailHeight = $(".prd-detail-container").outerHeight() + 35;
        var h = 0;
        d = $(".shortlist-container").offset().top - 10 - 50;
        if ($(".history-container")) {
            h = $(".history-container").outerHeight() + 10
        }
        g = b.offset().top + b.outerHeight() - h - 70 - 241;
        $(document).scroll(function (i) {
            if ($(".prd-detail-container").is(":visible")) {
                scBottomOffsetFinal = g + giftsForProductDetailHeight
            } else {
                scBottomOffsetFinal = g
            }
            if ($(this).scrollTop() > d) {
                $(".shortlist-container").removeClass("sl-ini");
                $(".shortlist-container").removeClass("sl-ini-giftsfor");
                $(".shortlist-container").removeClass("sl-fixed-bottom");
                $(".shortlist-container").addClass("sl-fixed-top");
                $(".history-container").removeClass("his-ini");
                $(".history-container").removeClass("his-ini-giftsfor");
                $(".history-container").removeClass("his-fixed-bottom");
                $(".history-container").addClass("his-fixed-top")
            }
            if ($(this).scrollTop() < d) {
                $(".shortlist-container").removeClass("sl-fixed-top");
                $(".shortlist-container").removeClass("temp-bottom");
                $(".history-container").removeClass("his-fixed-top");
                $(".history-container").removeClass("his-fixed-bottom");
                if (location.pathname.indexOf("giftsfor") != -1 && location.pathname.indexOf("top20") == -1) {
                    $(".shortlist-container").addClass("sl-ini-giftsfor");
                    $(".history-container").addClass("his-ini-giftsfor")
                } else {
                    $(".shortlist-container").addClass("sl-ini");
                    $(".history-container").addClass("his-ini")
                }
            }
            if ($(this).scrollTop() > scBottomOffsetFinal) {
                $(".shortlist-container").removeClass("sl-fixed-top");
                $(".shortlist-container").removeClass("sl-ini");
                $(".shortlist-container").removeClass("sl-ini-giftsfor");
                $(".shortlist-container").addClass("sl-fixed-bottom");
                $(".history-container").removeClass("his-ini");
                $(".history-container").removeClass("his-ini-giftsfor");
                $(".history-container").removeClass("his-fixed-top");
                $(".history-container").addClass("his-fixed-bottom")
            }
        });
        $(window).resize(function () {
            if ($(window).width() > l) {
                $("#shortlistblock").hide();
                $(".shortlist-container").show();
                $(".history-container").show();
                $(".history-container-top").hide();
                d = $(".shortlist-container").offset().top - 10 - 50;
                if ($(".history-container")) {
                    h = $(".history-container").outerHeight() + 10
                }
                g = b.offset().top + b.outerHeight() - h - 70 - 241
            } else {
                $(".shortlist-container").hide();
                $("#shortlistblock").show();
                $(".history-container").hide();
                $(".history-container-top").show()
            }
        })
    }
    var j = $.cookie("userCart");
    var f = $.cookie("userCartId");
    if (j != null) {
        j = j.replace(/"/g, "")
    }
    if (j != null && j != "") {
        shortlistedProductsArray = j.split(",");
        var k = shortlistedProductsArray.length;
        $(".sl-icon").addClass("select");
        for (var e = k - 1; e >= 0; e--) {
            if ((e - (k - 1)) < countMax) {
                $(".sl-thumb-r").each(function () {
                    if (!$.trim($(this).html()).length) {
                        var i = '<div class="sl-prod-remove remove-r"><img class="close-icon" src="/public/images/buttons/close-icon.png"></div>';
                        i += '<img src="' + imagePath + shortlistedProductsArray[e] + '_1_b3.jpeg">';
                        $(this).html(i);
                        $(this).addClass("sl-thumb-r-added");
                        $(this).attr("pid", shortlistedProductsArray[e]);
                        return false
                    }
                });
                $(".sl-thumb-t").each(function () {
                    if (!$.trim($(this).html()).length) {
                        var i = '<div class="sl-prod-remove remove-t"><img class="close-icon" src="/public/images/buttons/close-icon.png"></div>';
                        i += '<img src="' + imagePath + shortlistedProductsArray[e] + '_1_b3.jpeg">';
                        $(this).html(i);
                        $(this).addClass("sl-thumb-t-added");
                        $(this).attr("pid", shortlistedProductsArray[e]);
                        return false
                    }
                })
            }
            $(".prd-btn[pid=" + shortlistedProductsArray[e] + "]").find(".prd-btn-icon").removeClass("shortlist-icon").addClass("shortlist-icon-added");
            $(".prd-btn[pid=" + shortlistedProductsArray[e] + "]").find(".shortlist-txt").html("Shortlisted");
            $("#shotlistStar_" + shortlistedProductsArray[e]).css("display", "block");
            $("#shortlist_" + shortlistedProductsArray[e]).removeClass("plus");
            $("#shortlist_" + shortlistedProductsArray[e]).addClass("minus")
        }
    }
    if (f != null) {
        $(".sl-view-all, .sl-first-row, .shortlist-info, .sl-thumb-t-added, .sl-thumb-r-added").unbind("click").click(function () {
            gotoShortlist(f)
        })
    }
    var a = "";
    if (k > 1) {
        a = k + " gifts"
    } else {
        if (k == 1) {
            a = k + " gift"
        } else {
            a = "No gift";
            $(".sl-view-all").removeClass("sl-view-all").addClass("sl-view-all-inactive");
            $(".sl-view-all-inactive").unbind("click");
            $(".sl-first-row, .shortlist-info").unbind("click")
        }
    }
    a += " shortlisted";
    $(".sl-text").text(a);
    $("#shortlistText").text(a);
    $(".sl-prod-remove").unbind("click").click(removeProductClickHandler);
    $(".shortlistIcon, .shortlist-icon-text").click(function (m) {
        var n = $(this).attr("id");
        var i = n.split("_")[1];
        if ($(this).hasClass("plus") || $(this).hasClass("shortlist-icon-text")) {
            _gaq.push(["_trackEvent", "shortList", "add"]);
            addProductToShortlist(i)
        } else {
            _gaq.push(["_trackEvent", "shortList", "remove"]);
            removeProductFromShortlist(i)
        }
        m.preventDefault()
    })
});
function addProductToShortlist(a) {
    updateShortlistDisplay("Added", a);
    $.ajax({url: "/ajax/shortlistProduct", cache: false, type: "POST", dataType: "json", data: "id=" + a, complete: function (b) {
        var c = jQuery.parseJSON(b.responseText);
        if (c.products[a] != null) {
            updateShortlist("Added", c)
        }
    }})
}
function removeProductFromShortlist(a) {
    $.ajax({url: "/ajax/removeFromshortlist", cache: false, type: "POST", dataType: "json", data: "id=" + a, complete: function (b) {
        var c = jQuery.parseJSON(b.responseText);
        if (c.products[a] == null) {
            updateShortlist("Removed", c);
            updateShortlistDisplay("Removed", a)
        }
    }})
}
function updateShortlistDisplay(a, b) {
    if (a == "Added") {
        $(".shortlist-container").animate({borderLeftColor: "#fa7d00", borderTopColor: "#fa7d00", borderRightColor: "#fa7d00", borderBottomColor: "#fa7d00"}, 200, function () {
            $(".shortlist-container").delay(600).animate({borderLeftColor: "#ccc", borderTopColor: "#ccc", borderRightColor: "#ccc", borderBottomColor: "#ccc"}, 200)
        });
        $("#shortlist_" + b).removeClass("plus");
        $("#shortlist_" + b).addClass("minus");
        $("#shortlistStart_" + b).removeClass("shortlist-icon").addClass("shortlist-icon-added");
        $("#shotlistStar_" + b).css("display", "block");
        $(".prd-similar-product").each(function () {
            $(this).find("#shotlistStarSimilar_" + b).css("display", "block")
        });
        var c = '<div pid="' + b + '" class="sl-thumb-r sl-thumb-r-added">';
        c += '<div class="sl-prod-remove remove-r"><img class="close-icon" src="/public/images/buttons/close-icon.png"></div>';
        c += '<img src="' + imagePath + b + '_1_b3.jpeg">';
        c += "</div>";
        $(".shortlist-container .sl-thumb-r:first").before(c);
        $(".shortlist-container .sl-thumb-r:last").remove();
        var c = '<div pid="' + b + '" class="sl-thumb-t sl-thumb-t-added">';
        c += '<div class="sl-prod-remove remove-t"><img class="close-icon" src="/public/images/buttons/close-icon.png"></div>';
        c += '<img src="' + imagePath + b + '_1_b3.jpeg"></div>';
        $("#shortlist-box .sl-thumb-t:first").before(c);
        $("#shortlist-box .sl-thumb-t:last").remove();
        $(".sl-prod-remove").unbind("click").click(removeProductClickHandler)
    } else {
        if (a == "Removed") {
            $(".shortlist-container").animate({borderLeftColor: "#7167ae", borderTopColor: "#7167ae", borderRightColor: "#7167ae", borderBottomColor: "#7167ae"}, 200, function () {
                $(".shortlist-container").delay(600).animate({borderLeftColor: "#ccc", borderTopColor: "#ccc", borderRightColor: "#ccc", borderBottomColor: "#ccc"}, 200)
            });
            $("#shortlist-box").children("#sl_" + b).remove();
            $("#shortlist_" + b).removeClass("minus");
            $("#shortlist_" + b).addClass("plus");
            $("#shortlistStar_" + b).removeClass("shortlist-icon-added").addClass("shortlist-icon");
            $("#shotlistStar_" + b).css("display", "none");
            $(".prd-similar-product").each(function () {
                $(this).find("#shotlistStarSimilar_" + b).css("display", "none")
            });
            $(".sl-thumb-r").each(function () {
                if ($(this).attr("pid") == b) {
                    $(this).remove();
                    if (shortlistedProductsArray && shortlistedProductsArray.length >= countMax) {
                        var d = '<div pid="' + shortlistedProductsArray[shortlistedProductsArray.length - countMax] + '" class="sl-thumb-r sl-thumb-r-added">';
                        d += '<div class="sl-prod-remove remove-r"><img class="close-icon" src="/public/images/buttons/close-icon.png"></div>';
                        d += '<img src="' + imagePath + shortlistedProductsArray[shortlistedProductsArray.length - countMax] + '_1_b3.jpeg">';
                        d += "</div>";
                        $(".shortlist-container .sl-view-all").before(d)
                    } else {
                        $(".shortlist-container .sl-view-all-inactive").before('<div class="sl-thumb-r" ></div>');
                        $(".shortlist-container .sl-view-all").before('<div class="sl-thumb-r" ></div>')
                    }
                    return false
                }
            });
            $(".sl-thumb-t").each(function () {
                if ($(this).attr("pid") == b) {
                    $(this).remove();
                    if (shortlistedProductsArray && shortlistedProductsArray.length >= countMax) {
                        var d = '<div pid="' + b + '" class="sl-thumb-t sl-thumb-t-added">';
                        d += '<div class="sl-prod-remove remove-t"><img class="close-icon" src="/public/images/buttons/close-icon.png"></div>';
                        d += '<img src="' + imagePath + shortlistedProductsArray[countMax - 1] + '_1_b3.jpeg"></div>';
                        $("#shortlist-box .sl-view-all").before(d)
                    } else {
                        $("#shortlist-box .sl-view-all-inactive").before('<div class="sl-thumb-t" ></div>');
                        $("#shortlist-box .sl-view-all").before('<div class="sl-thumb-t" ></div>')
                    }
                    return false
                }
            })
        }
    }
}
function updateShortlist(b, d) {
    if (b == "Added") {
        var c = 0;
        for (var e in d.products) {
            c++
        }
        var f = $.cookie("userCart");
        var a = $.cookie("userCartId");
        if (f != null) {
            f = f.replace(/"/g, "")
        }
        if (f != null && f != "") {
            shortlistedProductsArray = f.split(",")
        } else {
            shortlistedProductsArray = null
        }
        var g = "";
        if (c != null && c != "") {
            if (c < 2) {
                g = c + " gift shortlisted"
            } else {
                g = c + " gifts shortlisted"
            }
            $("#shortlistText").text(g);
            $(".sl-text").text(g);
            $("#shortlistText").text(g);
            $(".sl-view-all-inactive").removeClass("sl-view-all-inactive").addClass("sl-view-all")
        }
        $(".sl-icon").addClass("select");
        $(".sl-view-all, .sl-first-row, .shortlist-info, .sl-thumb-t-added, .sl-thumb-r-added").unbind("click").click(function () {
            gotoShortlist(d.cartId)
        })
    } else {
        if (b == "Removed") {
            var c = 0;
            for (var e in d.products) {
                c++
            }
            var f = $.cookie("userCart");
            var a = $.cookie("userCartId");
            if (f != null) {
                f = f.replace(/"/g, "")
            }
            if (f != null && f != "") {
                shortlistedProductsArray = f.split(",")
            } else {
                shortlistedProductsArray = null
            }
            var g = "";
            if (c != null && c != "") {
                if (c < 2) {
                    g = c + " gift shortlisted"
                } else {
                    g = c + " gifts shortlisted"
                }
                $("#shortlistText").text(g);
                $(".sl-text").text(g);
                $("#shortlistText").text(g);
                $(".sl-view-all-inactive").removeClass("sl-view-all-inactive").addClass("sl-view-all")
            }
            if (c == 0 || c == null) {
                $("#shortlistText").text("No gifts shortlisted");
                $(".sl-text").text("No gifts shortlisted");
                $("#shortlistText").text("No gifts shortlisted");
                $(".sl-view-all").removeClass("sl-view-all").addClass("sl-view-all-inactive");
                $(".sl-first-row, .shortlist-info").unbind("click");
                $(".sl-view-all-inactive, .sl-view-all, .sl-first-row, .shortlist-info, .sl-thumb-t-added, .sl-thumb-r-added").unbind("click");
                $(".sl-icon").removeClass("select")
            } else {
                $("#shortlistText").text(g);
                $(".sl-text").text(g);
                $("#shortlistText").text(g);
                $(".sl-view-all-inactive").removeClass("sl-view-all-inactive").addClass("sl-view-all")
            }
        }
    }
}
function removeProductClickHandler(b) {
    var a = $(this).parent().attr("pid");
    removeProductFromShortlist(a);
    b.stopPropagation()
}
function gotoShortlist(a) {
    window.location = "http://" + document.location.host + "/shortlist/" + a
}
function isShortlist(b) {
    var a = $.cookie("userCart");
    if (a && a.indexOf(b) > -1) {
        return(true)
    } else {
        return(false)
    }
}
function shortlistHandler(c) {
    var d = c.children(".prd-btn-icon");
    var a = c.children(".prd-btn-txt");
    var b = c.attr("pid");
    if (d.hasClass("shortlist-icon")) {
        _gaq.push(["_trackEvent", "shortList", "add"]);
        addProductToShortlist(b);
        $(".prd-btn[pid=" + b + "]").children(".prd-btn-icon").removeClass("shortlist-icon").addClass("shortlist-icon-added");
        $(".prd-btn[pid=" + b + "]").children(".prd-btn-txt").text("Shortlisted");
        $(".gift-container[pid=" + b + "]").slideDown();
        $(".gift-container-notshortlisted[pid=" + b + "]").hide()
    } else {
        _gaq.push(["_trackEvent", "shortList", "remove"]);
        removeProductFromShortlist(b);
        $(".prd-btn[pid=" + b + "]").children(".prd-btn-icon").removeClass("shortlist-icon-added").addClass("shortlist-icon");
        $(".prd-btn[pid=" + b + "]").children(".prd-btn-txt").text("Add to shortlist");
        $(".gift-container-notshortlisted[pid=" + b + "]").show();
        $(".gift-container[pid=" + b + "]").slideUp()
    }
}
function updateHistory(b) {
    $(".history-container").animate({borderLeftColor: "#fa7d00", borderTopColor: "#fa7d00", borderRightColor: "#fa7d00", borderBottomColor: "#fa7d00"}, 200, function () {
        $(".history-container").delay(600).animate({borderLeftColor: "#ccc", borderTopColor: "#ccc", borderRightColor: "#ccc", borderBottomColor: "#ccc"}, 200)
    });
    var a = 0;
    $(".his-thumb-r").each(function () {
        if ($(this).attr("pid") == b && a == 0) {
            $(this).remove();
            a = 1;
            return
        }
    });
    if (a == 0) {
        $(".history-container .his-thumb-r:last").remove()
    }
    a = 0;
    $(".his-thumb-t").each(function () {
        if ($(this).attr("pid") == b && a == 0) {
            $(this).remove();
            a = 1;
            return
        }
    });
    if (a == 0) {
        $(".history-container-top .his-thumb-t:last").remove()
    }
    var c = '<div pid="' + b + '" class="his-thumb-r his-thumb-r-added">';
    c += '<img src="' + imagePath + b + '_1_b3.jpeg">';
    c += "</div>";
    $(".history-container .his-thumb-r:first").before(c);
    var c = '<div pid="' + b + '" class="his-thumb-t his-thumb-t-added">';
    c += '<img src="' + imagePath + b + '_1_b3.jpeg">';
    c += "</div>";
    $(".history-container-top .his-thumb-t:first").before(c);
    $(".his-view-all-inactive").removeClass("his-view-all-inactive").addClass("his-view-all");
    $(".his-view-all").html('<a href="/history">view all ></a>');
    $(".history-container-link").attr("href", "/history")
};
var allFilters;
var allFiltersToKey = {};
var allFiltersCategories;
var filtersInvalid;
var selectedFilters = {};
var selectedCats = {};
var selectedSubCats = {};
var query = "";
var uid = "";
var deliveryDay = -1;
var prevRel = "";
var upperRange, lowerRange, priceRange, priceRangeFromJson;
var currentUrlSuffix = "", selectedDateString = "";
var dateDiff = "", deliveryUrl = "";
var todayDate = new Date(), tommorrowDate = new Date();
filters = {};
var selectedFiltersFromJson;
gvt.cityListKeys = {};
gvt.cityList = [];
var filterTitle = {age: "Recepient Age", rel: "Relationship with recipient", oca: "Occasion for gift", mod: "In mood for", per: "Recepient's personality", pri: "Price Range"};
jQuery(document).ready(function () {
    if ($("#filterData") && $("#filterData").length) {
        if ($("#filter-super-container") && $("#filter-super-container").length) {
            var a = $("#filter-super-container").offset().top;
            $(".filter-sc-sticky").html($("#filter-super-container").html());
            $(document).scroll(function (n) {
                if ($(this).scrollTop() > a) {
                    $(".filter-sc-sticky-wrapper").show()
                }
                if ($(this).scrollTop() < a) {
                    $(".filter-sc-sticky-wrapper").hide()
                }
            })
        }
        $(".date-cal-icon").click(function () {
            _gaq.push(["_trackEvent", "Filter", "DateClick"]);
            $(".datepicker-input").datepicker("show")
        });
        $(".discover-gifts").click(function () {
            var o = "";
            var q = 0;
            for (var p in allFiltersCategories) {
                for (var n in allFiltersCategories[p]) {
                    if (selectedFilters[allFilters[allFiltersCategories[p][n]]] === true) {
                        q++;
                        if (o === "") {
                            o = allFilters[allFiltersCategories[p][n]]
                        } else {
                            o += "_" + allFilters[allFiltersCategories[p][n]]
                        }
                    }
                }
            }
            if (o === "") {
                o = "all"
            }
            action = "GoH";
            if ($(this).hasClass("ganal-gfor")) {
                action = "GoG"
            }
            _gaq.push(["_trackEvent", "Filter", action, o, q])
        });
        if (document.location.pathname.match("delivery-(.*)-day")) {
            $(".reset-date").show();
            var d = parseInt(document.location.pathname.match("delivery-(.*)-day")[1]);
            var k = new Date();
            k.setDate(k.getDate() + d);
            var b = k.getMonth() + 1;
            var c = k.getDate() + "-" + b + "-" + k.getFullYear();
            $(".datepicker-input").val(c)
        } else {
            if ($(".datepicker-input").val() != "Date") {
                $(".datepicker-input").val("Date")
            }
        }
        tommorrowDate.setDate(todayDate.getDate() + 1);
        var f = "";
        var i;
        if (todayDate.getHours() > gvt.SAME_DAY_DELIVERY_TIME) {
            i = false;
            f = tommorrowDate.getDate() + "-" + parseInt(tommorrowDate.getMonth() + 1) + "-" + tommorrowDate.getFullYear()
        } else {
            $(".options-same-day").show();
            $(".options-next-day").hide();
            i = "linked";
            f = todayDate.getDate() + "-" + parseInt(todayDate.getMonth() + 1) + "-" + todayDate.getFullYear()
        }
        $(".datepicker-input").datepicker({format: "dd-mm-yyyy", todayBtn: i, startDate: f, autoclose: true}).on("changeDate", function (n) {
            selectedDateString = $(".datepicker-input").val().split("-");
            selectedDate = new Date();
            selectedDate.setDate(selectedDateString[0]);
            selectedDate.setMonth(selectedDateString[1] - 1);
            selectedDate.setFullYear(selectedDateString[2]);
            dateDiff = Math.round((selectedDate - todayDate) / (1000 * 60 * 60 * 24));
            deliveryDay = dateDiff;
            _gaq.push(["_trackEvent", "Filter", "DateSelect", "day", dateDiff]);
            $(".date-loader").fadeIn(200);
            window.location = "http://" + document.location.host + "/giftsfor/" + getUrlSuffix()
        });
        $(".reset-date").click(function () {
            $(".date-loader").fadeIn(200);
            _gaq.push(["_trackEvent", "Filter", "DateClear"]);
            deliveryDay = -1;
            window.location = "http://" + document.location.host + "/giftsfor/" + getUrlSuffix()
        });
        if ($("#filterData") && $("#filterData").length) {
            selectedFilters = {};
            var g = jQuery.parseJSON($("#filterData").html());
            allFilters = g.allFilters;
            allFiltersCategories = g.allFilterCategories;
            filtersInvalid = g.filtersInvalid;
            selectedFiltersFromJson = g.selectedFilters;
            selectedCats = g.selectedCats;
            selectedSubCats = g.selectedSubCats;
            queryFromJson = g.query;
            uid = g.uid;
            deliveryDay = g.deliveryDay;
            priceRangeFromJson = g.range;
            if (priceRangeFromJson !== undefined) {
                lowerRange = priceRangeFromJson.split("-")[0];
                upperRange = priceRangeFromJson.split("-")[1]
            }
            for (var j in allFilters) {
                allFiltersToKey[allFilters[j]] = j
            }
            for (var j in selectedFiltersFromJson) {
                selectedFilters[selectedFiltersFromJson[j]] = true
            }
            var m = getFilters("rel", "");
            for (var j in m) {
                if (selectedFilters[m[j]] === true) {
                    prevRel = m[j]
                }
            }
            gvt.cityListKeys = allFiltersCategories.loc;
            for (var j in gvt.cityListKeys) {
                gvt.cityList.push(allFilters[gvt.cityListKeys[j]])
            }
        }
        $(".option-block").each(optionBlockEach);
        var h = "your loved ones";
        var e = "like";
        if ($(".option-block[key=rel]").children("p").html() != $(".option-block[key=rel]").attr("name") && $(".option-block[key=rel]").length) {
            h = "your " + $(".option-block[key=rel]").children("p").html().toLowerCase();
            e = "likes"
        }
        $(".fb-likes-rel").text(h);
        $(".like-likes").text(e);
        if ($("#filterData") && $("#filterData").length) {
            populateFbLikesModal("rel");
            populateFbLikesModal("age")
        }
        $(document).click(function () {
            $(".o-val-block:hidden").hide();
            $(".f-val-block, .f-val-block-rel, .o-val-block").slideUp("slow");
            if ($(".fil-city-list").is(":visible")) {
                $(".fil-city-list").fadeOut(200)
            }
            if ($(".fb-feature-friends-container").is(":visible")) {
                $(".fb-feature-friends-container").fadeOut(200)
            }
        });
        $(".f-each-rel").click(function (s) {
            $(".f-val-block").slideUp("fast");
            if ($(".f-val-block-rel").is(":visible")) {
                $(".f-val-block-rel").slideUp("slow")
            } else {
                $(".f-val-block-rel").slideDown("slow");
                _gaq.push(["_trackEvent", "Filter", "dropDownH", "rel"]);
                var o = [];
                for (var p in selectedFilters) {
                    if (selectedFilters[p] === true) {
                        o.push(p)
                    }
                }
                var n = getFilters("rel", "");
                var r = getFilters("rel", o);
                var t = {};
                $(".f-val-sub-in").hide();
                $(".f-val-rel").hide();
                for (var p in r) {
                    var q = "";
                    if (r !== undefined || r !== null || r !== "undefined") {
                        q = r[p].split(":");
                        $('div[id="' + q[0] + '"]').show();
                        $('div[id="' + r[p] + '"]').show()
                    }
                }
                $(".f-val-sub-in").unbind("click");
                $(".f-val-sub-in").bind("click", optionsValClick)
            }
            s.stopPropagation();
            discoverGifts()
        });
        $(".f-each").click(function (s) {
            var p = $(this).attr("key");
            if ($(".f-val-block[key=" + p + "]").is(":visible")) {
                $(".f-val-block[key=" + p + "]").slideUp("slow")
            } else {
                $(".f-val-block-rel").slideUp("fast");
                $(".f-val-block").slideUp();
                var q = [];
                for (var r in selectedFilters) {
                    if (selectedFilters[r] === true) {
                        q.push(r)
                    }
                }
                var o = getFilters($(this).attr("key"), q);
                $(".f-val-inner").html("");
                var n = "";
                for (var r in o) {
                    if (selectedFilters[o[r]] === true) {
                        n = n + '<div class="f-val f-left " key="' + $(this).attr("key") + '" id="' + o[r] + '"><span class = "select-hover f-selected">' + o[r] + '<span class="remove">&nbsp;x</span></span></div>'
                    } else {
                        n = n + '<div class="f-val f-left" key="' + $(this).attr("key") + '" id="' + o[r] + '"><span class = "select-hover">' + o[r] + '<span class="remove">&nbsp;x</span></span></div>'
                    }
                }
                $(".f-val-inner").html(n);
                $(".f-val-block").slideDown("slow");
                _gaq.push(["_trackEvent", "Filter", "dropDownH", p])
            }
            discoverGifts();
            $(".f-val").unbind("click").bind("click", optionsValClick);
            s.stopPropagation()
        });
        $(".refresh-image").click(function () {
            selectedFilters = {};
            selectedCats = {};
            selectedSubCats = {};
            query = "";
            priceRange = "";
            priceRangeFromJson = "";
            $(".option-block").each(optionBlockEach);
            $(".o-val-block").slideUp("slow")
        });
        $(".o-val-block").click(function (n) {
            n.stopPropagation()
        });
        openFilterBox = function (s, t) {
            var s = s;
            var u = $(s).attr("key");
            if ($(".o-val-block[key=" + u + "]").is(":visible")) {
                $(".o-val-block[key=" + u + "]:hidden").hide();
                $(".o-val-block[key=" + u + "]").slideUp("slow")
            } else {
                $(".o-val-block").attr("key", u);
                var o = [];
                for (var w in selectedFilters) {
                    if (selectedFilters[w] === true) {
                        o.push(w)
                    }
                }
                var x = getFilters($(s).attr("key"), o);
                var r = getFilters($(s).attr("key"), "");
                $(".o-val-block-inner").html("");
                var p = "";
                var q = 0;
                for (var w in x) {
                    var v = getFilterDisplayText(x[w]);
                    if (selectedFilters[x[w]] === true) {
                        p = p + '<div class="o-val" key="' + $(s).attr("key") + '" name="' + v + '" id="' + x[w] + '"><span class="f-selected">' + getRuppeeSymbol(v) + '<span class="remove">&nbsp;x</span></span></div>'
                    } else {
                        p = p + '<div class="o-val" key="' + $(s).attr("key") + '" name="' + v + '" id="' + x[w] + '"><span>' + getRuppeeSymbol(v) + '<span class="remove">&nbsp;x</span></span></div>'
                    }
                    q++
                }
                for (var w in r) {
                    var v = getFilterDisplayText(r[w]);
                    if (!allFiltersToKey[x[w]]) {
                        p = p + '<div class="o-val" key="' + $(s).attr("key") + '" name="' + v + '" id="' + r[w] + '"><span class="f-inactive">' + getRuppeeSymbol(v) + "</span></div>"
                    }
                }
                var n = 0;
                for (var w in r) {
                    n++
                }
                if (u == "pri") {
                    p = p + '<div class="slider-container"><span class="amount"></span><div class="slider-range"></div><div class="price-info"><span class="f-left">zero</span><span class="f-right">Priceless</span></div></div>'
                }
                $(".o-val-block-inner").html(p);
                if (u == "pri") {
                    initSlider()
                }
                discoverGifts();
                $(".o-val-block").slideDown("slow");
                $(".o-val").unbind("click").bind("click", optionsValClick);
                $(".f-inactive").unbind("click").click(function (y) {
                    $(".reset-info-tooltip").stop(true, true).animate({opacity: "0.6"}, "slow").delay(1000).animate({opacity: "0"}, "slow");
                    y.stopPropagation();
                    return false
                });
                $(".all-f").unbind("click").bind("click", showAll);
                _gaq.push(["_trackEvent", "Filter", "dropDown", u])
            }
            if (t) {
                t.stopPropagation()
            }
        };
        $(".option-block").click(function (n) {
            openFilterBox(this, n)
        });
        $(".options-val").click(function () {
            $(".options-box").hide()
        });
        $("#clearFilters").click(function () {
            $(".filter").children().removeProp("selected")
        });
        $(".f-val-sub-in").unbind("click");
        $(".f-val-sub-in").bind("click", optionsValClick);
        $(".f-val").unbind("click");
        $(".f-val").bind("click", optionsValClick);
        $(".fil-city-input").focus(function () {
            $(".fil-city-list").fadeIn(200)
        }).blur(function () {
            $(".fil-city-list").fadeOut(200)
        });
        $(".fil-city-list, .fil-city-input").click(function (n) {
            n.stopPropagation()
        });
        for (var j in gvt.cityList) {
            gvt.cityList[j] = $.trim(gvt.cityList[j]);
            $(".fil-city-list").append('<div class="fil-city-each" key="' + gvt.cityList[j] + '">' + gvt.cityList[j] + "</div>")
        }
        $(".fil-city-each").click(function () {
            $(".fil-city-input").val($(this).attr("key"));
            $(".fil-city-list").fadeOut(200);
            $(".fil-city-loader").fadeIn(200);
            window.location = "http://" + document.location.host + "/giftsfor/" + getUrlSuffix()
        });
        $(".fil-reset-city").click(function () {
            $(".fil-city-loader").fadeIn(200);
            window.location = "http://" + document.location.host + "/giftsfor/" + getUrlSuffix()
        });
        $(".fil-city-input").keyup(function () {
            l($(".fil-city-input").val())
        });
        function l(o) {
            if (o != "") {
                $(".fil-city-each").hide();
                for (var n in gvt.cityList) {
                    if (gvt.cityList[n].toLowerCase().search(o.toLowerCase()) >= 0) {
                        $(".fil-city-each[key='" + gvt.cityList[n] + "']").show()
                    }
                }
            } else {
                $(".fil-city-each").show()
            }
        }
    } else {
        $("#filter-super-container").hide()
    }
    $(".clear-block").click(function (r) {
        var p = $(this).attr("key");
        if (p == "pri") {
            priceRange = "";
            priceRangeFromJson = "";
            initSlider()
        }
        var n = getFilters(p, "");
        for (var q in n) {
            selectedFilters[n[q]] = false;
            var o = n[q];
            if ($('[id="' + o + '"]').children("span").hasClass("f-selected")) {
                $('[id="' + o + '"]').children("span").removeClass("f-selected")
            }
        }
        for (var q in allFiltersCategories[p]) {
            if (allFilters[allFiltersCategories[p][q]] != $(this).attr("id")) {
                var o = allFilters[allFiltersCategories[p][q]];
                selectedFilters[allFilters[allFiltersCategories[p][q]]] = false
            }
        }
        $(".option-block[key=" + p + "]").children("p").removeClass("selected");
        $(".option-block[key=" + p + "]").children("p").text($(".option-block[key=" + p + "]").attr("name"));
        $(".option-block[key=" + p + "]").children("img").show();
        $(".option-block[key=" + p + "]").children(".clear-block").hide();
        $(".f-each[key=" + p + "]").children("p").removeClass("selected");
        $(".f-each[key=" + p + "]").children("p").text($(".f-each[key=" + p + "]").attr("name"));
        $(".f-each[key=" + p + "]").children("img").show();
        $(".f-each[key=" + p + "]").children(".clear-block").hide();
        $(".f-each-rel[key=" + p + "]").children("p").removeClass("selected");
        $(".f-each-rel[key=" + p + "]").children("p").text($(".f-each-rel[key=" + p + "]").attr("name"));
        $(".f-each-rel[key=" + p + "]").children("img").show();
        $(".f-each-rel[key=" + p + "]").children(".clear-block").hide();
        discoverGifts();
        r.stopPropagation()
    })
});
function initSlider() {
    if (priceRange !== undefined && priceRange !== "") {
        lowerRange = priceRange.split("-")[0];
        upperRange = priceRange.split("-")[1]
    } else {
        if (priceRangeFromJson !== undefined && priceRangeFromJson !== "") {
            lowerRange = priceRangeFromJson.split("-")[0];
            upperRange = priceRangeFromJson.split("-")[1]
        } else {
            upperRange = 10000;
            lowerRange = 0
        }
    }
    $(".slider-range").slider({range: true, min: 0, max: 10000, step: 100, values: [lowerRange, upperRange], slide: function (b, c) {
        priceRange = c.values[0] + "-" + c.values[1];
        upperRange = c.values[1];
        lowerRange = c.values[0];
        var a = "";
        if (upperRange >= 10000) {
            a = 'Starting &nbsp;<span class="WebRupee">Rs </span>' + lowerRange
        } else {
            a = '<span class="WebRupee">Rs </span>' + lowerRange + ' - <span class="WebRupee">Rs </span>' + upperRange
        }
        $(".amount").html(a);
        $(".option-block[key=pri]").children("p").html(a);
        $(".option-block[key=pri]").children("p").addClass("selected");
        $(".option-block[key=pri]").children("img").hide();
        $(".option-block[key=pri]").children(".clear-block").show();
        $(".o-val[key=pri]").children().removeClass("f-selected");
        $(".o-val[key=pri]").each(function () {
            selectedFilters[($(this).attr("id"))] = false
        });
        discoverGifts();
        if (lowerRange === 0 && upperRange === 10000) {
            $(".option-block[key=pri]").children("p").removeClass("selected");
            $(".option-block[key=pri]").children("p").text($(".option-block[key=pri]").attr("name"));
            $(".option-block[key=pri]").children("img").show();
            $(".option-block[key=pri]").children(".clear-block").hide()
        }
    }});
    $(".amount").html("Select Range")
}
function optionsValClick() {
    var c = $(this).attr("key");
    if (c == "pri") {
        priceRange = "";
        priceRangeFromJson = "";
        initSlider()
    }
    if ($(".option-block[key=" + c + "]").attr("optiontype") != "multi") {
        for (var f in allFiltersCategories[c]) {
            if (allFilters[allFiltersCategories[c][f]] != $(this).attr("id")) {
                var b = allFilters[allFiltersCategories[c][f]];
                selectedFilters[allFilters[allFiltersCategories[c][f]]] = false;
                if ($('[id="' + b + '"]').children("span").hasClass("f-selected")) {
                    $('[id="' + b + '"]').children("span").removeClass("f-selected")
                }
            }
        }
    }
    if (selectedFilters[($(this).attr("id"))] === true) {
        selectedFilters[($(this).attr("id"))] = false;
        $(this).children("span").removeClass("f-selected")
    } else {
        selectedFilters[($(this).attr("id"))] = true;
        $(this).children("span").addClass("f-selected");
        _gaq.push(["_trackEvent", "Filter", "setFilter", ($(this).attr("id"))])
    }
    var a = "";
    if ($(this).attr("id") == "Young Married") {
        a = "Married"
    } else {
        if ($(this).attr("id") == "Middle Aged") {
            a = "Middle"
        } else {
            a = $(this).attr("id").split("(")[0]
        }
    }
    if ($('[id="' + $(this).attr("id") + '"]').children("span").hasClass("f-selected")) {
        $(".f-each[key=" + c + "]").children("p").text(a)
    } else {
        $(".f-each[key=" + c + "]").children("p").text($(".f-each[key=" + c + "]").attr("name"))
    }
    if ($(".f-each-rel[key=" + c + "]").children("p").text()) {
        if ($('[id="' + $(this).attr("id") + '"]').children("span").hasClass("f-selected")) {
            var a = "";
            if ($(this).attr("id") == "Young Married") {
                a = "Married"
            } else {
                if ($(this).attr("id") == "Middle Aged") {
                    a = "Middle"
                } else {
                    a = $(this).attr("name").split("(")[0]
                }
            }
            $(".f-each-rel[key=" + c + "]").children("p").text(a)
        } else {
            $(".f-each-rel[key=" + c + "]").children("p").text($(".f-each-rel[key=" + c + "]").attr("name"))
        }
    }
    var e = 0;
    var g = "";
    for (var f in allFiltersCategories[$(this).attr("key")]) {
        if (selectedFilters[allFilters[allFiltersCategories[$(this).attr("key")][f]]] === true) {
            e++;
            g = allFilters[allFiltersCategories[$(this).attr("key")][f]]
        }
    }
    var d = 1;
    if (e === 0) {
        $(".option-block[key=" + c + "]").children("p").removeClass("selected");
        $(".option-block[key=" + c + "]").children("p").text($(".option-block[key=" + c + "]").attr("name"));
        d = 0
    } else {
        if (e == 1) {
            $(".option-block[key=" + c + "]").children("p").addClass("selected");
            a = "";
            if (g == "Young Married") {
                a = "Married"
            } else {
                if (g == "Middle Aged") {
                    a = "Middle"
                } else {
                    a = g.split("(")[0]
                }
            }
            $(".option-block[key=" + c + "]").children("p").html(getFilterDisplayText(getRuppeeSymbol(a)))
        } else {
            $(".option-block[key=" + c + "]").children("p").addClass("selected");
            $(".option-block[key=" + c + "]").children("p").text("Multiple")
        }
    }
    if (d != 0) {
        $(".option-block[key=" + c + "]").children("img").hide();
        $(".option-block[key=" + c + "]").children(".clear-block").show();
        $(".f-each[key=" + c + "]").children("img").hide();
        $(".f-each[key=" + c + "]").children(".clear-block").show();
        $(".f-each-rel[key=" + c + "]").children("img").hide();
        $(".f-each-rel[key=" + c + "]").children(".clear-block").show()
    } else {
        $(".option-block[key=" + c + "]").children("img").show();
        $(".option-block[key=" + c + "]").children(".clear-block").hide();
        $(".f-each[key=" + c + "]").children("img").show();
        $(".f-each[key=" + c + "]").children(".clear-block").hide();
        $(".f-each-rel[key=" + c + "]").children("img").show();
        $(".f-each-rel[key=" + c + "]").children(".clear-block").hide()
    }
    $(".f-val-block").hide();
    $(".f-val-block-rel").hide();
    $(".go-info-tooltip").stop(true, true).show().animate({opacity: "0.6"}, "slow").delay(1000).fadeOut("slow");
    discoverGifts()
}
function getFilters(e, c) {
    var f = allFiltersCategories[e];
    var a = {};
    for (var d in c) {
        for (var b in filtersInvalid[allFiltersToKey[c[d]]]) {
            a[filtersInvalid[allFiltersToKey[c[d]]][b]] = -1
        }
    }
    var g = {};
    for (var d in f) {
        if (a[f[d]] != -1) {
            g[f[d]] = allFilters[f[d]]
        }
    }
    return g
}
function optionBlockEach() {
    var b = [];
    var c = $(this).attr("key");
    for (var f in allFiltersCategories[c]) {
        if (selectedFilters[allFilters[allFiltersCategories[c][f]]] === true) {
            b.push(allFilters[allFiltersCategories[c][f]])
        }
    }
    var d = 1;
    if (b.length == 1) {
        $(this).children("p").addClass("selected");
        if (c === "pri" && priceRangeFromJson !== undefined) {
            var e = "";
            if (upperRange >= 10000) {
                e = 'Starting &nbsp;<span class="WebRupee">Rs </span>' + lowerRange
            } else {
                e = '<span class="WebRupee">Rs </span>' + lowerRange + ' - <span class="WebRupee">Rs </span>' + upperRange
            }
            $(this).children("p").html(e)
        } else {
            var a = "";
            if (getRuppeeSymbol(b[0]) == "Young Married") {
                a = "Married"
            } else {
                if (getRuppeeSymbol(b[0]) == "Middle Aged") {
                    a = "Middle"
                } else {
                    a = getRuppeeSymbol(b[0]).split("(")[0]
                }
            }
            $(this).children("p").html(getFilterDisplayText(a))
        }
    } else {
        if (c === "pri" && priceRangeFromJson !== undefined && priceRangeFromJson !== "") {
            var e = "";
            if (upperRange >= 10000) {
                e = 'Starting &nbsp;<span class="WebRupee">Rs </span>' + lowerRange
            } else {
                e = '<span class="WebRupee">Rs </span>' + lowerRange + ' - <span class="WebRupee">Rs </span>' + upperRange
            }
            $(this).children("p").html(e);
            $(this).children("p").addClass("selected")
        } else {
            if (b.length > 1) {
                $(this).children("p").addClass("selected");
                $(this).children("p").text("Multiple")
            } else {
                $(this).children("p").removeClass("selected");
                $(this).children("p").text($(this).attr("name"));
                d = 0
            }
        }
    }
    if (d != 0) {
        $(this).children("img").hide();
        $(this).children(".clear-block").show()
    } else {
        $(this).children("img").show();
        $(this).children(".clear-block").hide()
    }
    discoverGifts()
}
function showAll() {
    var f = $(this).attr("key");
    selectedFilters = {};
    $(".option-block").each(optionBlockEach);
    var b = [];
    for (var h in selectedFilters) {
        if (selectedFilters[h] === true) {
            b.push(h)
        }
    }
    var i = getFilters($(this).attr("key"), "");
    var e = getFilters($(this).attr("key"), "");
    $(".o-val-block-inner").html("");
    var c = "";
    var d = 0;
    for (var h in i) {
        var g = getFilterDisplayText(i[h]);
        if (selectedFilters[i[h]] === true) {
            c = c + '<div class="o-val" key="' + $(this).attr("key") + '" name="' + i[h] + '" id="' + i[h] + '"><span class="f-selected">' + g + "</span></div>"
        } else {
            c = c + '<div class="o-val" key="' + $(this).attr("key") + '" name="' + i[h] + '" id="' + i[h] + '"><span>' + g + "</span></div>"
        }
        d++
    }
    var a = 0;
    for (var h in e) {
        a++
    }
    if (a != d) {
        c = c + '<div class="all-f" key="' + f + '" ><p>All</p></div>'
    }
    $(".o-val-block-inner").html(c);
    $(".o-val").unbind("click").bind("click", optionsValClick);
    $(".all-f").unbind("click").bind("click", showAll);
    discoverGifts()
}
function populateFbLikesModal(c) {
    var b = getFilters(c, "");
    var d = [];
    var a = '<ul class="drop-down" >';
    for (var e in selectedFilters) {
        if (selectedFilters[e] === true) {
            d.push(e)
        }
    }
    for (var e in b) {
        var f = getFilterDisplayText(b[e]);
        a = a + '<li key="' + b[e] + '" >' + f + "</li>"
    }
    a = a + "</ul>";
    $(".fb-likes-three").find("." + c + "-drop").append(a);
    for (var e in b) {
        if (selectedFilters[b[e]] === true) {
            var f = getFilterDisplayText(b[e]);
            $("." + c + "-drop").children("span").attr("key", b[e]);
            $("." + c + "-drop").children("span").text(f)
        }
    }
}
function getUrlSuffix() {
    var e = "";
    var b = {};
    for (var g in allFiltersCategories) {
        e = "";
        for (var d in allFiltersCategories[g]) {
            if (selectedFilters[allFilters[allFiltersCategories[g][d]]] === true) {
                if (e === "") {
                    e = allFilters[allFiltersCategories[g][d]]
                } else {
                    e += "_" + allFilters[allFiltersCategories[g][d]]
                }
            }
        }
        b[g] = e
    }
    var a = (b.rel.split("(")[0]) + "/" + (b.oca.split("(")[0]) + "/" + (b.mod.split("(")[0]) + "/" + (b.per.split("(")[0]) + "/" + (b.age.split("(")[0]) + "/" + (b.loc.split("(")[0]) + "/";
    if (b.pri !== null && b.pri !== "") {
        a += (b.pri.split("(")[0]) + "/"
    } else {
        if (priceRange !== null && priceRange !== "0-10000" && priceRange !== "" && priceRange !== undefined) {
            a += lowerRange + "-" + upperRange + "/"
        }
    }
    if (deliveryDay > -1) {
        a += "delivery-" + deliveryDay + "-day/"
    }
    a = a.replace(/[\/]+/g, "/");
    a = a.replace(/^\//, "");
    a = a.replace(/\/$/, "");
    if ($("#filterData") && $("#filterData").length) {
        var c = getFilters("rel", "");
        var f = "";
        for (var g in c) {
            if (selectedFilters[c[g]] === true) {
                f = c[g]
            }
        }
        if ((uid !== "" && uid !== null) && f === prevRel) {
            a += "?uid=" + uid
        }
    }
    return a
}
function discoverGifts() {
    $(".discover-link,.view-all-link").attr("href", "http://" + document.location.host + "/giftsfor/" + getUrlSuffix())
}
function getFilterDisplayText(b) {
    if (b === undefined || b === null || b === "undefined") {
        return""
    }
    var a = b.split(":")[b.split(":").length - 1];
    if (b == "Friend:Her") {
        a = "Friend(Her)"
    } else {
        if (b == "Friend:Him") {
            a = "Friend(Him)"
        } else {
            if (b == "Friend:Couple") {
                a = "Friend(Couple)"
            } else {
                if (b == "Colleague:Her") {
                    a = "Colleague(Her)"
                } else {
                    if (b == "Colleague:Him") {
                        a = "Colleague(Him)"
                    } else {
                        if (b == "Colleague:Couple") {
                            a = "Colleague(Couple)"
                        } else {
                            if (b == "Children:Couple") {
                                a = "Children(Couple)"
                            } else {
                                if (b == "Sibling:Couple") {
                                    a = "Sibling(Couple)"
                                } else {
                                    if (b == "Parents:Both") {
                                        a = "Parents(Couple)"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return(a)
}
function getRuppeeSymbol(a) {
    if (a === undefined || a === null || a === "undefined") {
        return""
    }
    filterDisplayText = a;
    if (a.indexOf("Around-") != -1) {
        filterDisplayText = '<span class="WebRupee">Rs </span>' + a.split("-")[a.split(".").length] + "-ish"
    }
    return(filterDisplayText)
};
var secondFetch = false;
gvt.FbGlobal.fbFriendsError = false;
gvt.FbGlobal.userFriends = {};
gvt.SUCCESS_RESPONSE = "700";
gvt.ERROR_RESPONSE = "600";
gvt.PASS_MISMATCH_ERROR = "610";
gvt.EMAIL_NOT_FOUND_ERROR = "611";
gvt.MERGE_ACCOUNT_NOTIFICATION = "612";
gvt.FB_USER_EXISTS_ERROR = "620";
gvt.EMAIL_EXISTS_ERROR = "621";
gvt.SAME_DAY_DELIVERY_TIME = 11;
gvt.giveterGlobal.hasErrors = false;
$(document).ready(function () {
    if (gvt.loggedInUserId !== null && gvt.loggedInUserId !== "") {
        loggedIn = true;
        gvt.FbGlobal.isvalidAccessToken(gvt.FbGlobal.getUserFriends, "")
    }
});
var nextFunction, element;
function sendLoginAjax(a, d, c, b) {
    $.ajax({url: a, cache: false, type: "POST", dataType: "json", data: d, complete: function (e) {
        var f = jQuery.parseJSON(e.responseText);
        $(".login-loader").hide();
        if (f.gsc === gvt.SUCCESS_RESPONSE) {
            gvt.onLogIn(c, b, f)
        } else {
            gvt.loginErrorHandler(f, d, c)
        }
    }})
}
gvt.FbGlobal.facebookLogin = function (b, a) {
    FB.login(function (c) {
        if (c.authResponse) {
            gvt.FbGlobal.accessToken = c.authResponse.accessToken;
            FB.api("/me", function (d) {
                gvt.FbGlobal.fbId = d.id;
                sendLoginAjax("/ajax/facebookLogin", "accessToken=" + gvt.FbGlobal.accessToken + "&userData=" + encodeURIComponent(JSON.stringify(d)), b, a)
            })
        }
    }, {scope: "email,user_birthday,user_relationships,user_photos,friends_photos,friends_birthday,user_likes,friends_likes,user_interests,friends_interests,user_location,friends_location,read_stream"})
};
gvt.FbGlobal.getUserFriends = function (c, b, a) {
    if (!gvt.FbGlobal.sortable.length) {
        $.ajax({url: "/ajax/getFacebookFriends", cache: false, type: "POST", data: "accessToken=" + gvt.FbGlobal.accessToken + "&fbId=" + gvt.FbGlobal.fbId, dataType: "json", complete: function (d) {
            if (d.responseText === "error") {
                gvt.FbGlobal.sortable = [];
                if (secondFetch === false) {
                    gvt.FbGlobal.getUserFriends(c, b);
                    secondFetch = true
                } else {
                    gvt.FbGlobal.fbFriendsError = true;
                    if (b !== "" && b !== null) {
                        b()
                    }
                }
            } else {
                jsonResponse = jQuery.parseJSON(d.responseText);
                gvt.FbGlobal.userFriends = jsonResponse;
                if (jsonResponse !== null) {
                    gvt.FbGlobal.sortable = [];
                    for (var e in jsonResponse) {
                        if (e !== null) {
                            gvt.FbGlobal.sortable.push([e])
                        }
                    }
                    $("body").trigger("fetchedFbFriends", a);
                    if (c !== "" && c !== null && c !== undefined) {
                        c(gvt.FbGlobal.sortable)
                    }
                } else {
                    gvt.FbGlobal.fbFriendsError = true;
                    gvt.FbGlobal.sortable = [];
                    if (b !== "" && b !== null && c !== undefined) {
                        b()
                    }
                }
            }
        }})
    } else {
        if (c !== "" && c !== null && c !== undefined) {
            c(gvt.FbGlobal.sortable)
        }
    }
};
gvt.FbGlobal.isvalidAccessToken = function (b, a) {
    if (gvt.FbGlobal.accessToken !== undefined && gvt.FbGlobal.accessToken !== null) {
        $.ajax({url: "https://graph.facebook.com/me?access_token=" + gvt.FbGlobal.accessToken, cache: false, type: "GET", complete: function (c) {
            var d = jQuery.parseJSON(c.responseText);
            if (d !== null && d.hasOwnProperty("error")) {
                gvt.FbGlobal.getAccessToken(b, a)
            } else {
                $("body").trigger("fbTokenValid");
                if (b !== "" && b !== null) {
                    b()
                }
            }
        }})
    } else {
        $.ajax({url: "/ajax/isFbUser", cache: false, data: "userId=" + gvt.loggedInUserId, type: "GET", complete: function (d) {
            var c = jQuery.parseJSON(d.responseText);
            if (c.gsc === gvt.SUCCESS_RESPONSE) {
                gvt.FbGlobal.getAccessToken(b, a)
            } else {
                if (a !== "" && a !== null) {
                    a()
                }
            }
        }})
    }
};
gvt.FbGlobal.getAccessToken = function (b, a) {
    FB.getLoginStatus(function (c) {
        if (c.status === "connected") {
            if (gvt.FbGlobal.fbId !== c.authResponse.userID) {
                $.removeCookie("fbLoginID", {path: "/", domain: gvt.cookieDomain});
                $.removeCookie("fbAccessToken", {path: "/", domain: gvt.cookieDomain});
                if (a !== "" && a !== null) {
                    a()
                }
            } else {
                gvt.FbGlobal.fbId = c.authResponse.userID;
                $.cookie("fbLoginID", gvt.FbGlobal.fbId, {path: "/", domain: gvt.cookieDomain});
                gvt.FbGlobal.accessToken = c.authResponse.accessToken;
                $.cookie("fbAccessToken", gvt.FbGlobal.accessToken, {path: "/", domain: gvt.cookieDomain});
                if (b !== "" && b !== null) {
                    $("body").trigger("fbTokenValid");
                    b()
                }
            }
        } else {
            if (c.status === "not_authorized") {
                if (a !== "" && a !== null) {
                    a()
                }
            } else {
                if (a !== "" && a !== null) {
                    a()
                }
            }
        }
    })
};
gvt.giveterGlobal.giveterLogin = function (c, b) {
    if (isValidLoginForm()) {
        var a = createLoginJson();
        $(".login-loader").show();
        sendLoginAjax("/ajax/giveterLogin", "userData=" + encodeURIComponent(JSON.stringify(a)), c, b)
    }
};
gvt.giveterGlobal.giveterSignup = function (c, b) {
    validateSuForm();
    if (!gvt.giveterGlobal.hasErrors) {
        var a = createSignupJson();
        $(".login-loader").show();
        sendLoginAjax("/ajax/register", "userData=" + encodeURIComponent(JSON.stringify(a)), c, b)
    }
};
function createSignupJson() {
    var a = {name: $("#signupFormGlobal input[name=fullName]").val(), email: $("#signupFormGlobal input[name=email]").val(), gender: $("#signupFormGlobal select[name=sex]").val(), mobile: $("#signupFormGlobal input[name=mobileNum]").val(), password: $("#signupFormGlobal input[name=password]").val()};
    return a
}
function createLoginJson() {
    var a = {email: $("#loginFormGlobal input[name=email]").val(), password: $("#loginFormGlobal input[name=password]").val()};
    return a
}
gvt.logout = function () {
    $.ajax({url: "/ajax/logout", cache: false, type: "POST", complete: function () {
        gvt.onLogOut()
    }})
};
gvt.onLogOut = function () {
    location.reload()
};
gvt.onLogIn = function (nextFunction, element, jsonResponse) {
    updateCookieVars();
    $(".login-header-container").hide();
    $(".usernameGlobal").text(gvt.loggedInUsername);
    $(".logged-in-header-container").show();
    $(".fb-likes-username").html(gvt.loggedInUsername);
    $(".tag-friends-username").html(gvt.loggedInUsername);
    if (jsonResponse !== undefined && jsonResponse !== "") {
        $(".merge-notify-modal .merge-email-container").text(jsonResponse.user.email)
    }
    if (nextFunction !== "" && nextFunction !== undefined) {
        eval(nextFunction)(element)
    }
};
gvt.loginErrorHandler = function (a, c, b) {
    if (a.gsc === gvt.FB_USER_EXISTS_ERROR) {
        if ($("#signupContainer").is(":visible")) {
            updateLoginModal("signup", "fb-remind-container")
        } else {
            if ($("#loginContainer").is(":visible")) {
                updateLoginModal("login", "fb-remind-container")
            }
        }
    } else {
        if (a.gsc === gvt.EMAIL_EXISTS_ERROR) {
            if ($("#signupContainer").is(":visible")) {
                updateLoginModal("signup", "signup-fp-container")
            } else {
                if ($("#loginContainer").is(":visible")) {
                    updateLoginModal("login", "signup-fp-container")
                }
            }
        } else {
            if (a.gsc === gvt.EMAIL_NOT_FOUND_ERROR) {
                updateLoginModal("login", "login-nf-container")
            } else {
                if (a.gsc === gvt.PASS_MISMATCH_ERROR) {
                    $(".pass-mismatch").fadeIn(300)
                } else {
                    if (a.gsc === gvt.ERROR_RESPONSE) {
                        $(".json-error").fadeIn(300)
                    } else {
                        if (a.gsc === gvt.MERGE_ACCOUNT_NOTIFICATION) {
                            $(".merge-notify-modal .username").text(a.newUser.name);
                            $(".merge-notify-modal").modal({backdrop: false});
                            $(".merge-submit").unbind("click").click(function () {
                                sendMergeAjax(a.oldUser.id, c, b)
                            });
                            $(".merge-cancel").unbind("click").click(function () {
                                sendCancelMergeAjax(c, b)
                            })
                        }
                    }
                }
            }
        }
    }
};
function sendMergeAjax(a, c, b) {
    $.ajax({url: "/ajax/mergeAccount", cache: false, type: "POST", data: "userId=" + a + "&" + c, dataType: "json", complete: function (d) {
        var e = jQuery.parseJSON(d.responseText);
        if (e.gsc === gvt.SUCCESS_RESPONSE) {
            $(".merge-notify-modal").modal("hide");
            gvt.onLogIn(b, "", "")
        }
    }})
}
function sendCancelMergeAjax(b, a) {
    $.ajax({url: "/ajax/cancelMerge", cache: false, type: "POST", data: b, dataType: "json", complete: function (c) {
        var d = jQuery.parseJSON(c.responseText);
        if (d.gsc === gvt.SUCCESS_RESPONSE) {
            $(".merge-notify-modal").modal("hide");
            gvt.onLogIn(a, "", "")
        }
    }})
}
function deleteAllCookies() {
    $.cookie("user_id_usr", null);
    $.cookie("user_name_usr", null);
    $.cookie("fbLoginID", null)
}
function updateLoginModal(b, a) {
    $("#" + b + "Container").hide();
    $("#" + a).show();
    $(".back-link").text("Back to " + b);
    $(".back-link").unbind("click").click(function () {
        $("#" + a).hide();
        $("#" + b + "Container").show()
    });
    var c = $("#" + b + "FormGlobal input[name=email]").val();
    $(".reset-pass-link").unbind("click").click(function () {
        $(".login-modal-loader").show();
        gvt.resetPassword(c)
    })
}
gvt.resetPassword = function (a) {
    $.ajax({url: "/ajax/resetPasswordRequest", cache: false, data: "email=" + a, dataType: "json", complete: function (b) {
        var c = jQuery.parseJSON(b.responseText);
        gvt.resetPassResponseHandler(c.gsc)
    }})
};
gvt.resetPassResponseHandler = function (a) {
    $(".login-modal-loader").hide();
    if (a === gvt.SUCCESS_RESPONSE) {
        $("#forgotPassContainer").hide();
        $("#signup-fp-container").hide();
        $("#fb-remind-container").hide();
        $("#reset-confirmation-container").show()
    } else {
        if (a === gvt.EMAIL_NOT_FOUND_ERROR) {
            $("#fp-email-nf").hide().fadeIn(200)
        } else {
            if (a === gvt.ERROR_RESPONSE) {
                $("#fp-reset-error").hide().fadeIn(200)
            }
        }
    }
};
$(document).ready(function () {
    tagged_product_id = $(".image-large").attr("pid");
    tagged_product_image = "/public/images/products/" + tagged_product_id + "_1_70x70.jpeg";
    var a = $.cookie("user_id_usr");
    $("#sgSuperContainer").click(function (b) {
        _gaq.push(["_trackEvent", "Product", "SimilarProductClick"])
    });
    $(document).scroll(function (b) {
        $(".similar-products-notification").fadeOut(300)
    });
    $(".p-image").click(function () {
        thumbnailClick($(this))
    });
    $(".shortlist-btn").unbind("click").click(function () {
        shortlistHandler($(this))
    });
    $(".date-input-container").click(function () {
        _gaq.push(["_trackEvent", "Product", "tooLateDate"])
    });
    $(".product-details .tag-friends-link").click(function () {
        tagFriends.initiate()
    });
    $(".product-know-more").click(function () {
        var b = $("#logo-vendor").attr("key");
        _gaq.push(["_trackEvent", "Product", "knowMore", b])
    });
    $(".buy-btn-js, .product-know-more").click(function () {
        var b = $("#logo-vendor").attr("key");
        buyButtonClick(b, "Product", $(this))
    });
    gvt.FbGlobal.share = function (d, c) {
        c = encodeURIComponent(c);
        var b = "https://www.facebook.com/sharer/sharer.php?u=" + c;
        window.open(b, "name", "height=350,width=700");
        sendSaveActionAjax("facebookShare", tagged_product_id)
    };
    gvt.TwGlobal.share = function (e, c) {
        var d = encodeURIComponent(e);
        c = encodeURIComponent(c);
        var b = "http://twitter.com/intent/tweet?text=" + d + "&url=" + c + "&via=givetergifts";
        window.open(b, "name", "height=350,width=700");
        sendSaveActionAjax("twitterShare", tagged_product_id)
    };
    $(".shr-twitter").click(function () {
        gvt.TwGlobal.share("Check out this gift I discovered on giveter.com", document.location.href)
    });
    $(".shr-facebook").click(function () {
        gvt.FbGlobal.share("", document.location.href)
    });
    $(".shr-pinterest").click(function () {
        var d = encodeURIComponent(document.location.href);
        var c = encodeURIComponent("http://giveter.com" + $(".product-thumbnails .p-image img").attr("path"));
        var b = "http://pinterest.com/pin/create/button/?url=" + d + "&media=" + c + "&description=Liked this gift on giveter.com";
        window.open(b, "name", "height=350,width=700");
        sendSaveActionAjax("pinterestShare", tagged_product_id)
    });
    $(".oos-view").click(function () {
        if ($(".product-details").is(":hidden")) {
            $(".product-details").removeClass("hidden");
            $(".product-details").hide();
            $(".oos-container").fadeOut(300, function () {
                $(".product-details").fadeIn(300)
            })
        } else {
            $(".product-details").fadeOut(300, function () {
                $(".oosEmail-error-text").hide();
                $(".oos-container").fadeIn(300)
            })
        }
    });
    $(".oos-notify-form input[name=email]").focus(function () {
        $(".oosEmail-error-text").fadeOut(300)
    });
    pid = tagged_product_id;
    if (isShortlist(pid)) {
        $(".shortlist-icon").removeClass("shortlist-icon").addClass("shortlist-icon-added");
        $(".shortlist-txt").html("Shortlisted")
    }
    $(".oos-notify-form").submit(function () {
        var c = $(this).children("input[name=email]").val();
        var d = $(this).children("input[name=name]").val();
        var b = $(this).attr("key");
        if (c == "" || !isValidEmailAddress(c)) {
            $(".oosEmail-error-text").fadeIn(300)
        } else {
            $(".oos-form-loader").show();
            $.ajax({url: "/ajax/oosNotify", cache: false, type: "POST", data: "email=" + c + "&username=" + d + "&productId=" + b, complete: function () {
                $(".oos-form-title").fadeOut(300);
                $(".oos-notify-form").fadeOut(300, function () {
                    $(".oos-form-title").text("You will be notified when this product is availabe").fadeIn(300)
                })
            }})
        }
        return false
    })
});
function thumbnailClick(c) {
    var b = c.attr("pid");
    var d = c.children("img");
    var a = $(".image-large[pid=" + b + "]").children("img");
    _gaq.push(["_trackEvent", "Product", "thumbNail"]);
    if (a.attr("src").split("/")[a.attr("src").split("/").length - 1] != d.attr("path").split("/")[d.attr("path").split("/").length - 1]) {
        $(".imgLoading").show();
        a.attr("src", d.attr("path"));
        a.unbind("load").load(function () {
            $(".imgLoading").hide()
        });
        $(".selectThumb").each(function () {
            $(this).removeClass("selectThumb")
        });
        c.addClass("selectThumb")
    }
}
function buyButtonClick(c, b, a) {
    if (gvt.feature.mandatoryLogin) {
        if (gvt.loggedInUserId === null || gvt.loggedInUserId === "") {
            $(".title-info").show();
            _gaq.push(["_trackEvent", b, "giftItClick", c]);
            showLoginModal("", function () {
                redirectUrl(a)
            }, a, true, "login")
        } else {
            _gaq.push(["_trackEvent", b, "toVendorDirect", c]);
            gvt.calendar.showCalendarModal()
        }
    } else {
        _gaq.push(["_trackEvent", b, "toVendorDirect", c]);
        if (1 == 1) {
            gvt.calendar.showCalendarModal()
        }
    }
};
$(document).ready(function () {
    var k = 0;
    var q = 0;
    var l;
    var f = "back";
    var g = "";
    var c = "";
    var i = "";
    var t = "";
    var r = "360px";
    var o = "370px";
    var j = parseInt($(".body-container").css("marginLeft")) + 360 + "px";
    var d = "835px";
    if (location.pathname == "/olympics") {
        n()
    }
    var u = setInterval(function () {
        h()
    }, 12000);

    function n() {
        var x = 0;
        for (var w = 0; w < 15; w++) {
            for (var v = 0; v < 10; v++) {
                if ($.trim($("#thumbnailBlock" + x).html()).length == 0) {
                    k = $("#thumbnailBlock" + x).offset().left;
                    q = $("#thumbnailBlock" + x).offset().top;
                    l = x;
                    return
                }
                x++
            }
        }
    }

    if (location.pathname == "/olympics") {
        p()
    }
    function p() {
        $(".hide.thumb-img").each(function (v) {
            $(this).css({"max-width": "200px", "max-height": "200px", width: "50px", "z-index": "10"});
            $(this).delay(10000 * (v + 1)).hide().fadeIn(500).animate({maxWidth: "100%", maxHeight: "100%"}, 1500)
        })
    }

    $(".facebook-login-olympics").click(function () {
        facebookLogin(m, "")
    });
    function m() {
        $(".user-logged-in").children("span").text(storedUsername.replace(/"/g, "").split(" ")[0]);
        $.ajax({url: "/ajax/getOlympicGifts", cache: false, dataType: "json", complete: function (v) {
            if (v.responseText.split("_")[0] > 0) {
                var w = v.responseText.split("_")[1];
                $(".t-front").append('<div class="user-image abs" key="postedImage" ><img src="/public/images/FBOlympicImages/' + w + '.jpeg"></div>');
                $(".user-image[key=postedImage]").css({left: r, top: o, width: "72px", height: "70px", lineHeight: "69px", marginTop: "0px", marginRight: "0px"});
                if ($(".t-back").is(":visible")) {
                    $(".user-image[key=postedImage]").hide()
                }
                $(".already-posted").children("span").text(storedUsername.replace(/"/g, "").split(" ")[0]);
                $(".steps").fadeOut(300, function () {
                    $(".already-posted").hide().fadeIn(300)
                })
            } else {
                e()
            }
        }})
    }

    function e() {
        var v;
        $.ajax({url: "https://graph.facebook.com/" + fbLoginID + "/albums?access_token=" + fbAccessToken, cache: false, dataType: "json", complete: function (w) {
            w = jQuery.parseJSON(w.responseText);
            for (var x in w.data) {
                if (w.data[x].name == "Profile Pictures" && w.data[x].type == "profile") {
                    v = w.data[x].id;
                    break
                }
            }
            a(v)
        }})
    }

    function a(v) {
        $.ajax({url: "https://graph.facebook.com/" + v + "/photos?access_token=" + fbAccessToken + "&limit=0", cache: false, dataType: "json", complete: function (w) {
            w = jQuery.parseJSON(w.responseText);
            $(".profile-pics").html("");
            for (var x in w.data) {
                $(".profile-pics").append('<div class="user-image" ><img key="' + w.data[x].id + '" src="' + w.data[x].picture + '"></div>')
            }
            $(".steps").fadeOut(300, function () {
                $(".user-logged-in").fadeIn(400)
            });
            $(".user-image").unbind("click").click(s)
        }})
    }

    function s() {
        $(".post-msg").fadeOut(300);
        t = $(this).children("img").attr("src");
        var w = $(this).children("img").attr("key");
        var y = $(this).offset().left;
        var v = $(this).offset().top;
        if (f == "back") {
            $(".user-image[key=" + c + "]").remove();
            $(".profile-pics").append('<div class="user-image abs" key="' + w + 'thumbnailBack"><img src="' + $(this).children("img").attr("src") + '"></div>');
            $(".user-image[key=" + w + "thumbnailBack]").css({left: y});
            $(".user-image[key=" + w + "thumbnailBack]").css({top: v})
        } else {
            $(".user-image[key=" + i + "]").remove();
            $(".profile-pics").append('<div class="user-image abs" key="' + w + 'thumbnailFront"><img src="' + $(this).children("img").attr("src") + '"></div>');
            $(".user-image[key=" + w + "thumbnailFront]").css({left: y});
            $(".user-image[key=" + w + "thumbnailFront]").css({top: v})
        }
        if (f == "back") {
            if (c != "") {
                $(function () {
                    $(".user-image[key=" + w + "thumbnailBack]").animate({left: k, top: q, width: "23px", height: "23px", lineHeight: "20px", marginTop: "0px", marginRight: "0px"}, 1500, function () {
                        $(".post-msg").hide().fadeIn(300)
                    })
                })
            } else {
                $(".user-image[key=" + w + "thumbnailBack]").animate({left: k, top: q, width: "23px", height: "23px", lineHeight: "20px", marginTop: "0px", marginRight: "0px"}, 1500, function () {
                    $(".post-msg").hide().fadeIn(300)
                })
            }
            var x = $(".user-image[key=" + w + "thumbnailBack]").detach();
            x.appendTo("body");
            c = w + "thumbnailBack";
            if (i != "") {
                $(".user-image[key=" + i + "]").html("");
                $(".user-image[key=" + i + "]").html("<img src='" + t + "'>")
            } else {
                $("body").append('<div class="user-image abs" key="' + w + 'thumbnailFront"><img src="' + $(this).children("img").attr("src") + '"></div>');
                $(".user-image[key=" + w + "thumbnailFront]").css({left: j, top: d, width: "72px", height: "70px", lineHeight: "69px", marginTop: "0px", marginRight: "0px"});
                i = w + "thumbnailFront";
                $(".user-image[key=" + w + "thumbnailFront]").hide()
            }
        } else {
            if (i != "") {
                $(function () {
                    $(".user-image[key=" + w + "thumbnailFront]").animate({left: j, top: d, width: "72px", height: "70px", lineHeight: "69px", marginTop: "0px", marginRight: "0px"}, 1500, function () {
                        $(".post-msg").hide().fadeIn(300)
                    })
                })
            } else {
                $(".user-image[key=" + w + "thumbnailFront]").animate({left: j, top: d, width: "72px", height: "70px", lineHeight: "69px", marginTop: "0px", marginRight: "0px"}, 1500, function () {
                    $(".post-msg").hide().fadeIn(300)
                })
            }
            var x = $(".user-image[key=" + w + "thumbnailFront]").detach();
            x.appendTo("body");
            i = w + "thumbnailFront";
            if (c != "") {
                $(".user-image[key=" + c + "]").html("");
                $(".user-image[key=" + c + "]").html("<img src='" + t + "'>")
            } else {
                $("body").append('<div class="user-image abs" key="' + w + 'thumbnailBack"><img src="' + $(this).children("img").attr("src") + '"></div>');
                $(".user-image[key=" + w + "thumbnailBack]").css({left: k, top: q, width: "23px", height: "23px", lineHeight: "20px", marginTop: "0px", marginRight: "0px"});
                c = w + "thumbnailBack";
                $(".user-image[key=" + w + "thumbnailBack]").hide()
            }
        }
    }

    function h() {
        if ($(".t-front").is(":visible")) {
            $(".user-image[key=postedImage]").fadeOut(1000);
            $(".user-image[key=" + i + "]").fadeOut(1000);
            $(".t-front").fadeOut(1000, function () {
                $(".t-back").fadeIn(1000);
                $(".user-image[key=" + c + "]").fadeIn(1000)
            });
            f = "back"
        } else {
            $(".user-image[key=" + c + "]").fadeOut(1000);
            $(".t-back").fadeOut(1000, function () {
                $(".t-front").fadeIn(1000);
                $(".user-image[key=postedImage]").fadeIn(500);
                $(".user-image[key=" + i + "]").fadeIn(1000)
            });
            f = "front"
        }
    }

    $("#thumbFront").click(function () {
        $(".user-image[key=" + c + "]").fadeOut(300);
        $(".t-back").fadeOut(300, function () {
            $(".t-front").fadeIn(300);
            $(".user-image[key=postedImage]").fadeIn(300);
            $(".user-image[key=" + i + "]").fadeIn(300)
        });
        f = "front"
    });
    $("#thumbBack").click(function () {
        $(".user-image[key=postedImage]").fadeOut(300);
        $(".user-image[key=" + i + "]").fadeOut(300);
        $(".t-front").fadeOut(300, function () {
            $(".t-back").fadeIn(300);
            $(".user-image[key=" + c + "]").fadeIn(300)
        });
        f = "back"
    });
    $(".flip-icon").click(function () {
        if ($(".t-front").is(":visible")) {
            $(".user-image[key=postedImage]").fadeOut(300);
            $(".user-image[key=" + i + "]").fadeOut(300);
            $(".t-front").fadeOut(300, function () {
                $(".t-back").fadeIn(300);
                $(".user-image[key=" + c + "]").fadeIn(300)
            });
            f = "back"
        } else {
            $(".user-image[key=" + c + "]").fadeOut(300);
            $(".t-back").fadeOut(300, function () {
                $(".t-front").fadeIn(300);
                $(".user-image[key=" + i + "]").fadeIn(300);
                $(".user-image[key=postedImage]").fadeIn(300)
            });
            f = "front"
        }
    });
    $("#fbPostButton").click(function () {
        if ($.trim($("#fbPostMsg").val()) == "") {
            $("#errorFbMsg").hide().fadeIn(200)
        } else {
            if ($(this).data("processing") == true) {
                return
            }
            $(this).data("processing", true);
            b()
        }
    });
    $("#fbPostMsg").focus(function () {
        $("#errorFbMsg").fadeOut(200)
    });
    function b() {
        var v = $("#fbPostMsg").val();
        $.ajax({url: "/ajax/olympicgift?accessToken=" + fbAccessToken + "&message=" + v + "&imageURL=" + t, cache: false, dataType: "json", complete: function (w) {
            $(".already-posted").children("span").text(storedUsername.replace(/"/g, "").split(" ")[0]);
            $(".user-logged-in").fadeOut(300, function () {
                $(".already-posted").hide().fadeIn(300)
            })
        }})
    }
});
$(document).ready(function () {
    var e = [];
    var d = [];
    tagFriends = {};
    var h = false;
    tagFriends.initiate = function () {
        sendSaveActionAjax("taggingTry", tagged_product_id);
        if (gvt.FbGlobal.accessToken !== "") {
            c();
            b();
            $(".tag-friends-modal").modal("show")
        } else {
            $(".tag-friends-modal").modal("show")
        }
    };
    $(".gift-container .tag-friends-link").click(function () {
        if (!h) {
            var j = $(this).parents(".gift-container");
            tagged_product_id = $(j).find(".image a").attr("id");
            tagged_product_image = $(j).find(".image img").attr("src");
            tagFriends.initiate();
            h = true
        }
    });
    $(".fb-connect-button").click(function () {
        gvt.FbGlobal.facebookLogin(b, "")
    });
    $(".post-tag-button").unbind("click").click(function () {
        if ($("#tagFriendPostMsg").val() === "") {
            $(".tag-error-msg").html("Please enter a message to share").fadeIn(200)
        } else {
            if (!d.length) {
                $(".tag-error-msg").html("You have not tagged any of your friends").fadeIn(200)
            } else {
                $(".continue-button").unbind("click").click(function () {
                    $(".tag-friends-modal").modal("hide")
                });
                var k = "https://www.facebook.com/" + gvt.FbGlobal.fbId;
                $(".view-post-tag-button a").attr("href", k);
                var j = $("#tagFriendPostMsg").val();
                $(".tag-friends-two .lower-block").append('<img class="tag-loader" src="/public/images/buttons/ajax-loader-fb.gif">');
                a(j)
            }
        }
    });
    function b() {
        gvt.FbGlobal.getUserFriends(f)
    }

    function f(k) {
        h = false;
        e = k;
        $(".tag-friends-three .user, .tag-friends-two .user").prepend('<img src="http://graph.facebook.com/' + gvt.FbGlobal.fbId + '/picture" class="user-image">');
        $(".fb-login-block").append('<img class="tag-loader" src="/public/images/buttons/ajax-loader-fb.gif">');
        for (var j in e) {
            $(".tag-friends-all").append('<div class="friend-each blockx5 friend-each-width last clearfix" name="' + jsonResponse[e[j][0]]["n"] + '" uid="' + e[j][0] + '" ><div class="fb-thumbnail blockx1 f-left clearfix" ><img src="https://graph.facebook.com/' + e[j][0] + '/picture" title="' + jsonResponse[e[j][0]]["n"] + '"/></div><div class="name f-left" >' + jsonResponse[e[j][0]]["n"] + "</div></div>")
        }
        $(".tag-friends-one").hide();
        $(".tag-friends-two .post-img").html('<img src = "' + tagged_product_image + '">');
        $(".tag-friends-two").show();
        $("input[type='text']").keyup(function () {
            $(".tag-error-msg").hide();
            g($("#tagFriendSearch").val())
        })
    }

    function g(l) {
        var j = "";
        if (l !== "") {
            $(".friend-each").hide();
            for (var k in e) {
                if (jsonResponse[e[k][0]]["n"]) {
                    if (jsonResponse[e[k][0]]["n"].toLowerCase().search(l) >= 0) {
                        $("[uid='" + e[k][0] + "']").show()
                    }
                }
            }
        } else {
            $(".friend-each").hide()
        }
        $(".friend-each").unbind("click").click(function () {
            i($(this).attr("name"), $(this).attr("key"), $(this).attr("uid"))
        })
    }

    function i(j, l, k) {
        g("");
        $("#tagFriendSearch").val("");
        $("#tagFriendSearch").attr("placeholder", "add more");
        d.push(k);
        var n = '<div class="tag" id="' + k + '"><p>' + j + '</p><img src="/public/images/buttons/close-button.png" class="remove-tag-button"></div>';
        $("#tag-friends-input").prepend(n);
        $(".remove-tag-button").unbind("click").click(function () {
            $(this).parent().remove();
            var o = $(this).parent().attr("id");
            var p = o;
            e.push([p]);
            for (var p in d) {
                if (d[p] == o) {
                    d.splice(p, 1)
                }
            }
        });
        for (var m in e) {
            if (e[m][0] == k) {
                e.splice(m, 1)
            }
        }
    }

    function c() {
        $(".tag-friends-three").hide();
        for (var j in d) {
            e.push([d[j]])
        }
        $(".tag-loader").remove();
        d = [];
        $("#tagFriendPostMsg").val("");
        $("#tagFriendSearch").val("");
        $(".user-image").remove();
        $("#tag-friends-input .tag").remove();
        $("#tagFriendSearch").attr("placeholder", "start typing a friend's name")
    }

    function a(k) {
        var j = d.join("_");
        $.ajax({url: "/ajax/postTagFriend", cache: false, type: "GET", data: "accessToken=" + gvt.FbGlobal.accessToken + "&productID=" + tagged_product_id + "&user_ID=" + gvt.FbGlobal.fbId + "&friendFBID=" + j + "&message=" + k + "&searchString=" + searchString, dataType: "json", complete: function (l) {
            if (l.responseText == "done") {
                $(".tag-friends-two").hide();
                $(".tag-friends-three").show()
            } else {
                alert("some error occurred")
            }
        }})
    }
});
$(document).ready(function () {
    $(".filters-suggested").unbind("click").click(function (c) {
        var b = $(this);
        openFilterBox(b, c)
    });
    $(".gift-container-tooltip .category").tooltip({title: "View similar products", placement: "left", trigger: "manual"});
    $(".gift-container-tooltip").mouseenter(function () {
        var b = $(this).find(".category");
        b.tooltip("show");
        b.children("a").addClass("category-hover")
    }).mouseleave(function () {
        var b = $(this).find(".category");
        b.tooltip("hide");
        b.children("a").removeClass("category-hover")
    });
    $(".category-link").click(function () {
        _gaq.push(["_trackEvent", "gFor", "catClick"])
    });
    if ($(".spd-container") && $(".spd-container").length) {
        var a = $(".spd-container").css("height");
        $(document).scroll(function (b) {
            if ($(".spd-toggle").hasClass("spd-auto")) {
                $(".spd-text").animate({height: "210px"}, {duration: 300});
                $(".spd-toggle").removeClass("spd-auto");
                $(".spd-toggle").addClass("spd-more")
            }
        });
        $(".spd-toggle").unbind("click").click(function () {
            if ($(".spd-toggle").hasClass("spd-less")) {
                $(".spd-text").animate({height: "210px"}, {duration: 300});
                $(".spd-toggle").removeClass("spd-less");
                $(".spd-toggle").addClass("spd-more");
                $(".spd-toggle").text("+ Read More")
            } else {
                if ($(".spd-toggle").hasClass("spd-more")) {
                    $(".spd-text").animate({height: a}, {duration: 300});
                    $(".spd-toggle").removeClass("spd-more");
                    $(".spd-toggle").addClass("spd-less");
                    $(".spd-toggle").text("- Read Less")
                }
            }
        })
    }
    $(".open-prd").click(function (d) {
        d.preventDefault();
        $(".prd-arrow-up").hide();
        var b = $(this);
        var c = {pid: b.data("pid"), vl: b.data("vendorlogo"), v: b.data("vendor"), p: b.data("price"), t: b.data("title"), sd: b.data("sd"), ad: b.find(".about-data").text(), ip: b.data("imagepath"), td: b.find(".thumbnail-data").text(), cc: b.data("catc"), c: b.data("cat"), cl: b.data("lcat"), sc: b.data("subcat"), scc: b.data("subcatc"), scl: b.data("lscat"), rp: b.data("rprice"), rpl: b.data("lrp"), mb: b.data("mb"), co: parseInt(b.data("cod")), em: parseInt(b.data("emi")), url: b.find(".redirect-link").attr("href")};
        openProductInline(c, b);
        d.stopPropagation()
    });
    $(".open-prd").mouseenter(function () {
        if (!isShortlist($(this).data("pid"))) {
            $("#shortlistIconWhite_" + $(this).data("pid")).show()
        }
    });
    $(".open-prd").mouseleave(function () {
        $("#shortlistIconWhite_" + $(this).data("pid")).hide()
    });
    $(".shortlistIconWhite").click(function (c) {
        c.preventDefault();
        c.stopPropagation();
        _gaq.push(["_trackEvent", "shortList", "add"]);
        var b = $(this).attr("pid");
        addProductToShortlist(b);
        $("#shortlistIconWhite_" + $(this).attr("pid")).hide()
    });
    $(".shotlistStar").click(function (c) {
        c.preventDefault();
        c.stopPropagation();
        _gaq.push(["_trackEvent", "shortList", "remove"]);
        var b = $(this).attr("pid");
        removeProductFromShortlist(b);
        $("#shortlistIconWhite_" + $(this).attr("pid")).show()
    });
    $(document).click(function () {
        $(".prd-arrow-up").fadeOut(50);
        $(".gift-bucket-row .prd-detail-container").slideUp(300, function () {
            $(".gift-bucket-row .prd-detail-container").remove();
            $(".gift-bucket-row .gift-bucket-row-border").show();
            $(".gift-bucket-row  .prd-similar-block").removeClass("prd-similar-active")
        })
    })
});
var similarWindowArray = [];
var xhr;
function drawSimilar(b, d, e, c, a) {
    if (c === undefined) {
        c = true
    }
    if (c) {
        $(".prd-similar-thumbnail-container").hide();
        similarWindowArray = [];
        $(".prd-similar-thumbs").html("");
        $(".prd-similar-loading ").show();
        if (xhr) {
            xhr.abort()
        }
        xhr = $.ajax({url: "/ajax/similar", cache: false, type: "POST", data: "fc=" + b + "&fsc=" + d + "&start=0&number=13", complete: function (f) {
            var g = jQuery.parseJSON(f.responseText);
            $.each(g.data, function (h, j) {
                similarWindowArray.push(j)
            });
            $(".prd-similar-all").attr("start", 0);
            showSimilarThumbs(a)
        }})
    }
    $(".similar-heading-link").html('<a href="/giftsfor/' + b + '">' + e + "</a>")
}
function showSimilarThumbs(a) {
    $(".prd-similar-thumbs").html("");
    var d = 0;
    var c = 0;
    if (d + 10 < similarWindowArray.length) {
        end = d + 10
    } else {
        end = similarWindowArray.length
    }
    for (i = d; i < end; i++) {
        var b = similarWindowArray[i];
        if (b.pid != a) {
            productString = '<div class="prd-similar-thumb log-action log-activity" id="' + i + '" data-pid="' + b.pid + '" data-log="giftsforProductClicked" data-activity="Web/product"><img src="' + b.ip.replace(".jpeg", "_70x70.jpeg") + '"></div>';
            $(".prd-similar-thumbs").append(productString);
            c = 1
        } else {
            if (similarWindowArray.length > 10) {
                end = 11
            }
        }
    }
    if (c == 1) {
        $(".prd-similar-thumbnail-container").show()
    }
    $(".prd-similar-thumb").unbind("click").click(function () {
        $(".prd-similar-thumb").removeClass("prd-thumb-active");
        $(this).addClass("prd-thumb-active");
        index = parseInt($(this).attr("id"));
        productJSON = similarWindowArray[index];
        _gaq.push(["_trackEvent", "gFor", "similar-block", "product-open"]);
        openProductInline(productJSON, "", false);
        logAction($(this))
    })
}
function setSimilar() {
    $(".prd-similar-all").html("");
    $(".prd-similar-loading ").hide();
    var b = parseInt($(".prd-similar-all").attr("start"));
    if (b + 8 < similarWindowArray.length) {
        end = b + 8
    } else {
        end = similarWindowArray.length
    }
    for (i = b; i < end; i++) {
        var a = similarWindowArray[i];
        productString = '<div class="prd-similar-product gift-container-blockx2" id="' + i + '"><div class="image"><img src="' + a.ip.replace(".jpeg", "_b3.jpeg") + '"><div class="price"><p><span class="WebRupee">Rs.</span>' + parseInt(a.p) + '</p></div><div class="shotlistStar"id="shotlistStarSimilar_' + a.pid + '"><i class="icon-star"></i></div></div><div class="desc"><div class="title">' + a.t + "</div></div></div>";
        $(".prd-similar-all").append(productString);
        $(".prd-similar-product").each(function () {
            if (isShortlist(a.pid)) {
                $(this).find("#shotlistStarSimilar_" + a.pid).css("display", "block")
            }
        })
    }
    $(".prd-similar-product").unbind("click").click(function () {
        index = parseInt($(this).attr("id"));
        productJSON = similarWindowArray[index];
        _gaq.push(["_trackEvent", "gFor", "similar-block", "product-open"]);
        openProductInline(productJSON, "")
    });
    if (similarWindowArray.length >= b + 7) {
        $(".prd-similar-next").unbind("click").click(function () {
            _gaq.push(["_trackEvent", "gFor", "similar-block", "next"]);
            $(".prd-similar-all").attr("start", b + 8);
            setSimilar()
        });
        $(".prd-similar-next").removeClass("grey").addClass("black")
    } else {
        $(".prd-similar-next").removeClass("black").addClass("grey");
        $(".prd-similar-next").unbind("click")
    }
    if (similarWindowArray.length > 0 && b > 0) {
        $(".prd-similar-prev").unbind("click").click(function () {
            _gaq.push(["_trackEvent", "gFor", "similar-block", "prev"]);
            $(".prd-similar-all").attr("start", b - 8);
            setSimilar()
        });
        $(".prd-similar-prev").removeClass("grey").addClass("black")
    } else {
        $(".prd-similar-prev").unbind("click");
        $(".prd-similar-prev").removeClass("black").addClass("grey")
    }
}
function openProductInline(d, c, l) {
    if (l === undefined) {
        l = true
    }
    $(".prd-detail").show();
    var b;
    var m = false;
    var t, f, k;
    $(".prd-similar-container").hide();
    var e = d.td.split(",");
    if (c !== undefined && c !== "") {
        b = c.closest(".gift-bucket-row");
        if ($(".gift-bucket-row .prd-detail-container") && $(".gift-bucket-row .prd-detail-container").attr("id") == d.pid) {
            $(".prd-arrow-up").fadeOut(50);
            $(".gift-bucket-row .prd-detail-container").slideUp(300, function () {
                $(".gift-bucket-row .prd-detail-container").remove();
                b.find(".gift-bucket-row-border").show()
            });
            $(".gift-bucket-row  .prd-similar-block").removeClass("prd-similar-active");
            return
        }
        $(".gift-bucket-row .prd-detail-container").each(function () {
            if (!$(this).is(b.find(".prd-detail-container"))) {
                $(this).remove()
            } else {
                m = true
            }
        });
        if (!m) {
            b.append($(".prd-detail-structure").html())
        }
        b.find(".gift-bucket-row-border").hide();
        if (b.find(".prd-detail-container").is(":visible")) {
            c.find(".prd-arrow-up").show();
            $(".gift-bucket-row .prd-detail-container").show()
        } else {
            c.find(".prd-arrow-up").fadeIn(500);
            $(".gift-bucket-row .prd-detail-container").slideDown(300, function () {
            });
            var q = $(window).scrollTop();
            var h = $(".gift-bucket-row .prd-detail-container").offset().top;
            var p = 390;
            var r = $(window).height();
            var v = q + (h + p - q) - r + 50;
            if (v > 100 || v < -100) {
                $(window).scrollTop(v)
            }
        }
        $(".similar-thumb-title").html("");
        $(".similar-thumb-title").append("<span>Similar products: </span>");
        if (d.c != "" && d.c != "miscellaneous") {
            catCountText = "";
            if (d.cc > 0) {
                catCountText = "(" + d.cc + ")"
            }
            var n = '<a class="orange-link category-link" title="Similar gifts in ' + d.c + '" href="/giftsfor/' + d.cl + '">' + d.c + catCountText + "</a>";
            $(".similar-thumb-title").append(n)
        }
        if (d.sc != "" && d.sc != "miscellaneous") {
            catCountText = "";
            if (d.scc > 0) {
                catCountText = "(" + d.scc + ")"
            }
            var n = ' > <a class="orange-link category-link" title="Similar gifts in ' + d.sc + '" href="/giftsfor/' + d.scl + '">' + d.sc + catCountText + "</a>";
            $(".similar-thumb-title").append(n)
        }
    }
    updateHistory(d.pid);
    $(".gift-bucket-row .prd-detail-container").attr("id", d.pid);
    $(".prd-vendor-info").unbind("click").click(logAction);
    $(".gift-bucket-row .redirect-vendor").attr("data-pid", d.pid);
    if (d.c == "personalized" || d.sc == "personalized") {
        $(".prd-btn-buy .prd-btn-txt").html("Customize Now")
    } else {
        $(".prd-btn-buy .prd-btn-txt").html("Know More")
    }
    $(".gift-bucket-row .buy-btn-js").attr("pid", d.pid);
    $(".gift-bucket-row .shortlist-btn").attr("pid", d.pid);
    if (d.mb < 4) {
        d.mb = 4
    }
    $(".gift-bucket-row .prd-image-large").html('<img src="' + $.trim(e[0].replace(".jpeg", "_b" + d.mb + ".jpeg")) + '">');
    $(".gift-bucket-row .prd-image-large").attr("pid", d.pid);
    $(".gift-bucket-row .redirect-vendor").attr("pid", d.pid);
    $(".gift-bucket-row .prd-buy-button").attr("pid", d.pid);
    $(".gift-bucket-row .prd-title").parent().attr("href", d.url);
    $(".gift-bucket-row .prd-title").text(d.t);
    if (parseInt(d.sd) < 0) {
        $(".gift-bucket-row .prd-shipping-val").hide()
    } else {
        if (parseInt(d.sd) == 0) {
            $(".gift-bucket-row .prd-shipping-val").text("same day")
        } else {
            $(".gift-bucket-row .prd-shipping-val").text(d.sd + " days")
        }
        if ($(".gift-bucket-row .prd-shipping-val").is(":hidden")) {
            $(".gift-bucket-row .prd-shipping-val").show()
        }
    }
    $(".gift-bucket-row .prd-about").text(d.ad);
    $(".gift-bucket-row .prd-price").text(parseInt(d.p));
    $(".gift-bucket-row .shortlist-icon").attr("id", "shortlistStar_" + d.pid);
    if (isShortlist(d.pid)) {
        $(".gift-bucket-row .shortlist-icon").removeClass("shortlist-icon").addClass("shortlist-icon-added");
        $(".shortlist-txt").html("Shortlisted")
    } else {
        $(".shortlist-txt").html("Add to shortlist");
        $(".gift-bucket-row .shortlist-icon-added").removeClass("shortlist-icon-added").addClass("shortlist-icon")
    }
    $(".shortlist-btn").unbind("click").click(function (x) {
        x.preventDefault();
        x.stopPropagation();
        shortlistHandler($(this))
    });
    _gaq.push(["_trackEvent", "gFor", "productOpen", d.v]);
    var a;
    var o;
    if ((d.co) == 1) {
        a = '<span class="normal">COD</span>'
    } else {
        a = '<span class="text-strike-through">COD</span>'
    }
    if ((d.em) == 1) {
        o = '<span class="normal">EMI</span>'
    } else {
        o = '<span class="text-strike-through">EMI</span>'
    }
    var u = a + " / " + o + " / Net Banking / Credit card / Debit card";
    $(".gift-bucket-row .delivery-options").html(u);
    $(".gift-bucket-row .prd-thumbnail-container").html("");
    for (var s = 0; s < e.length && s < 5; s++) {
        var w;
        var g = "";
        if (s == 0) {
            g = " selectThumb"
        }
        w = '<div class="prd-thumbnail' + g + ' p-image" pid="' + d.pid + '"><img src="' + $.trim(e[s]).replace(".jpeg", "_70x70.jpeg") + '" path="' + $.trim(e[s]).replace(".jpeg", "_b" + d.mb + ".jpeg") + '"></div>';
        $(".gift-bucket-row .prd-thumbnail-container").append(w)
    }
    $(".gift-bucket-row .prd-know-more").addClass("product-know-more");
    $(".info-btn").parent("a").attr("href", d.url);
    if (d.vl !== undefined && d.vl !== "") {
        $(".prd-vendor-logo").html('<img src="' + d.vl + '">');
        $(".logo").attr("src", d.vl)
    }
    $(".gift-bucket-row .buy-btn-js").attr("data-vl", d.vl);
    $(".gift-bucket-row .buy-btn-js").attr("data-ven", d.v);
    $(".p-image").unbind("click").click(function () {
        thumbnailClick($(this))
    });
    $(".buy-btn-js").unbind("click").click(function () {
        buyButtonClick(d.v, "gFor", $(this));
        logAction($(this))
    });
    $(".prd-detail-close").unbind("click").click(function () {
        $(".prd-arrow-up").fadeOut(50);
        $(".gift-bucket-row .prd-detail-container").slideUp(300, function () {
            $(".gift-bucket-row .prd-detail-container").remove();
            b.find(".gift-bucket-row-border").show()
        });
        $(".gift-bucket-row  .prd-similar-block").removeClass("prd-similar-active")
    });
    if (!gvt.feature.mandatoryLogin) {
        redirectUrl("", false)
    } else {
        if (gvt.loggedInUserId !== null && gvt.loggedInUserId !== "") {
            redirectUrl("", false)
        }
    }
    $(".prd-vendor-info").unbind("click").click(function () {
        _gaq.push(["_trackEvent", "gFor", "more-info", d.v]);
        buyButtonClick(d.v, "gFor", $(this))
    });
    var j = d.scl;
    if (d.sc === "miscellaneous") {
        j = ""
    }
    drawSimilar(d.cl, j, "Gifts in " + d.sc + "", l, d.pid);
    $(".prd-detail-container").unbind("click").click(function (x) {
        x.stopPropagation()
    })
};
$(document).ready(function () {
    var e = [];
    var b = "";
    $(".fb-login-info").click(function (f) {
        f.stopPropagation()
    });
    $(".fb-likes-state, .change-user, .fb-button, .fbl-try-again").unbind("click").click(function () {
        c()
    });
    $(".fbl-top-bar, .fbl-try-now, .fb-nlighter-try-button").unbind("click").click(function () {
        if ($(".fb-likes-sc").is(":visible")) {
            $(".fb-likes-sc").slideUp("slow")
        } else {
            $(".fb-likes-sc").slideDown("slow")
        }
    });
    $(".fb-likes-modal").on("shown", function () {
        $(".fb-likes-state, .change-user, .fb-button").unbind("click")
    });
    $(".fb-likes-modal").on("hidden", function () {
        $(".fb-likes-state, .change-user, .fb-button").unbind("click").click(function () {
            c()
        })
    });
    $(".fb-like-message-close").unbind("click").click(function () {
        $(".fb-likes-sc").slideUp()
    });
    function a() {
        $(".fb-likes-load").hide();
        $(".fb-likes-error").show()
    }

    $(".rel-drop").click(function (f) {
        $(".age-drop").children("ul").hide();
        $(".fbl-rel-et").fadeOut(200);
        if ($(this).children("ul").is(":visible")) {
            $(this).removeClass("clicked");
            $(this).children("ul").hide()
        } else {
            $(this).addClass("clicked");
            $(this).children("ul").show()
        }
        f.stopPropagation()
    });
    $(".age-drop").click(function (f) {
        $(".rel-drop").children("ul").hide();
        $(".fbl-age-et").fadeOut(200);
        if ($(this).children("ul").is(":visible")) {
            $(this).removeClass("clicked");
            $(this).children("ul").hide()
        } else {
            $(this).addClass("clicked");
            $(this).children("ul").show()
        }
        f.stopPropagation()
    });
    $("div.rel-drop ul.drop-down").children("li").click(function () {
        $(".rel-drop").children("span").text($(this).text());
        $(".rel-drop").children("span").attr("key", $(this).attr("key"))
    });
    $("div.age-drop ul.drop-down").children("li").click(function () {
        $(".age-drop").children("span").text($(this).text());
        $(".age-drop").children("span").attr("key", $(this).attr("key"))
    });
    $("body").click(function () {
        $("ul.drop-down").hide();
        $(".age-drop").removeClass("clicked");
        $(".rel-drop").removeClass("clicked")
    });
    $("#fb-likes-input").click(function () {
        $("#fbLikesSearch").focus();
        $("#fbLikesSearch").keyup(function () {
            if ($("#fbLikesSearch").val() != b) {
                $(".fbl-go-button").fadeOut(200)
            }
        })
    });
    $(".fbl-find-gifts").click(function () {
        if ($(".rel-drop").children("span").text() == "Select") {
            $(".fbl-rel-et").fadeIn(200);
            return
        }
        if ($(".age-drop").children("span").text() == "Select") {
            $(".fbl-age-et").fadeIn(200);
            return
        }
        $(".fb-likes-load-final").fadeIn(200);
        var f = $(".rel-drop").children("span").attr("key");
        var g = $(".age-drop").children("span").attr("key").split("(")[0];
        _gaq.push(["_trackEvent", "FBRec", "FindGift"]);
        $("#fblForm").attr("action", "/giftsfor/" + f + "/" + g + "?uid=" + $("#fblForm").attr("key"));
        $("#fblForm").submit()
    });
    $(".back-modal-button").click(function () {
        $(".fb-likes-three").hide();
        $(".fb-likes-two").show()
    });
    function c() {
        _gaq.push(["_trackEvent", "FBRec", "ButtonClick"]);
        if (gvt.FbGlobal.sortable && gvt.FbGlobal.sortable.length && !gvt.FbGlobal.fbFriendsError) {
            if (!$(".fbl-friend-each") || !$(".fbl-friend-each").length) {
                initFbLikesModal()
            }
            $(".fb-likes-modal").modal("show")
        } else {
            if (!gvt.FbGlobal.fbFriendsError) {
                $(".fb-likes-modal").modal("show");
                gvt.FbGlobal.facebookLogin(d, "")
            } else {
                resetFbLikesModal();
                $(".fb-likes-modal").modal("show");
                gvt.FbGlobal.facebookLogin(d, "")
            }
        }
    }

    $(".fb-likes-modal").on("shown", function () {
        $(".fb-likes-all").slideDown(500)
    });
    $(".fb-likes-modal").on("hide", function () {
        $(".fb-likes-all").hide()
    });
    function d() {
        gvt.FbGlobal.getUserFriends(fillFriends, a);
        $(".fb-likes-two").find(".user").children("img").remove();
        $(".fb-likes-three").find(".user").children("img").remove();
        $(".fb-likes-three .user, .fb-likes-two .user").prepend('<img src="http://graph.facebook.com/' + gvt.FbGlobal.fbId + '/picture" class="user-image">');
        _gaq.push(["_trackEvent", "FBRec", "findFreind"])
    }
});
function initFbLikesModal() {
    _gaq.push(["_trackEvent", "FBRec", "findFreind"]);
    $(".fb-likes-username").html(gvt.loggedInUsername);
    fillFriends();
    $(".fb-likes-two").find(".user").children("img").remove();
    $(".fb-likes-three").find(".user").children("img").remove();
    $(".fb-likes-three .user, .fb-likes-two .user").prepend('<img src="http://graph.facebook.com/' + gvt.FbGlobal.fbId + '/picture" class="user-image">')
}
function resetFbLikesModal() {
    $(".fb-likes-two").find(".user").children("img").remove();
    $(".fb-likes-three").find(".user").children("img").remove();
    $(".fb-likes-error").hide();
    $(".fb-likes-load").show();
    $(".fb-likes-three").hide();
    $(".fb-likes-two").show();
    $(".fbLikesSearch").val("")
}
function fillFriends(b) {
    sortable = b;
    if (b == "" || b == null) {
        sortable = gvt.FbGlobal.sortable
    }
    $("#fbLikesSearch").keyup(function () {
        find($("#fbLikesSearch").val())
    });
    if (!$(".fbl-friend-each") || !$(".fbl-friend-each").length) {
        var a = "";
        for (var c in sortable) {
            a += '<div class="fbl-friend-each last clearfix" key="' + jsonResponse[sortable[c][0]]["a"] + '" name="' + jsonResponse[sortable[c][0]]["n"] + '" uid="' + sortable[c][0] + '" ><div class="fb-thumbnail blockx1 f-left clearfix" ><img src="https://graph.facebook.com/' + sortable[c][0] + '/picture" title="' + jsonResponse[sortable[c][0]]["n"] + '"/></div><div class="name f-left" >' + jsonResponse[sortable[c][0]]["n"] + '</div><div class="et" ></div></div>'
        }
        $(".fb-likes-all").append(a);
        $(".fbl-friend-each").unbind("click").click(function () {
            likeBasedSearch($(this).attr("uid"), $(this).attr("key"))
        })
    }
    $(".fb-likes-load").hide()
}
function likeBasedSearch(b, a) {
    recipientName = $(".fbl-friend-each[uid=" + b + "]").attr("name");
    $("#fbLikesSearch").val(recipientName);
    $(".fbl-go-button").fadeIn(200);
    _gaq.push(["_trackEvent", "FBRec", "friendSelect"]);
    $(".fbl-go-button").unbind("click").click(function (g) {
        _gaq.push(["_trackEvent", "FBRec", "go"]);
        g.stopPropagation();
        $(".fb-likes-two").hide();
        $(".fbl-recipient").text(recipientName.split(" ")[0]);
        $(".fb-likes-three").show();
        var e = $("<input>").attr("type", "hidden").attr("name", "accessToken").val(gvt.FbGlobal.accessToken);
        $("#fblForm").append(e);
        $("#fblForm").attr("key", b);
        if (a != "na") {
            $(".age-drop").children("span").text(a);
            $(".age-drop").children("span").attr("key", a)
        } else {
            var d = getFilters("age", "");
            var c = false;
            for (var f in d) {
                if (selectedFilters[d[f]] === true) {
                    var h = getFilterDisplayText(d[f]);
                    $(".age-drop").children("span").attr("key", d[f]);
                    $(".age-drop").children("span").text(h);
                    c = true
                }
            }
            if (!c) {
                $(".age-drop").children("span").text("Select");
                $(".age-drop").children("span").attr("key", "")
            }
        }
    })
}
function find(c) {
    var a = "";
    if (c !== "") {
        $(".fbl-friend-each").hide();
        for (var b in sortable) {
            if (jsonResponse[sortable[b][0]]["n"]) {
                if (jsonResponse[sortable[b][0]]["n"].toLowerCase().search(c.toLowerCase()) >= 0) {
                    $(".fbl-friend-each[uid='" + sortable[b][0] + "']").show()
                }
            }
        }
    } else {
        $(".fbl-friend-each").show()
    }
};
$(document).ready(function () {
    var c = false;

    function d() {
        c = true;
        g.imagesLoaded(function () {
            g.masonry({itemSelector: ".story", columnWidth: 390, gutterWidth: 10, isAnimated: true})
        })
    }

    var g = $(".section");
    $(".abt-menu li").unbind("click").click(function () {
        e(this)
    });
    $(".abt-expand").toggle(function () {
        $(this).parent().animate({height: "100%"}, 500);
        $(this).text("- Collapse")
    }, function () {
        $(this).parent().animate({height: "11.5em"}, 500);
        $(this).text("+ Read More")
    });
    var f = window.location.hash;
    f = f.split("#")[1];
    if (f === "press" || f === "jobs" || f === "team") {
        var b = $(".abt-menu ." + f);
        e(b);
        $(".abt-stories-container").hide().delay(100).fadeIn("slow")
    } else {
        d();
        $(".abt-stories-container").show()
    }
    $(document).scroll(function (h) {
        $el = $(".abt-menu");
        if ($(this).scrollTop() > 181 && !$el.hasClass("fixed-top")) {
            $(".abt-menu").addClass("fixed-top")
        }
        if ($(this).scrollTop() < 181 && $el.hasClass("fixed-top")) {
            $(".abt-menu").removeClass("fixed-top")
        }
    });
    function a(h) {
        $(".story").each(function () {
            if (!$(this).hasClass(h)) {
                if (!$(this).hasClass("divider")) {
                    $(this).animate({opacity: 0}, 200, function () {
                        $(this).hide()
                    })
                }
            } else {
                if (h === "story") {
                } else {
                    $(this).addClass("highlight")
                }
                if (!($(this).hasClass("jobs") && h === "story")) {
                    $(this).show();
                    $(this).animate({opacity: 1}, 200)
                }
            }
        })
    }

    function e(i) {
        var j = $(i).attr("class").split(/\s+/);
        var h = j[0];
        $("html, body").animate({scrollTop: $(".abt-header-title").offset().top}, "slow");
        $(".abt-menu li").each(function () {
            $(this).removeClass("selected")
        });
        $(i).addClass("selected");
        if (h === "about") {
            h = "story";
            $(".story").removeClass("highlight");
            $(".abt-header-title").children("h1").text("The giveter footprints");
            $(".divider").show()
        }
        if (h === "team") {
            $(".abt-header-title").children("h1").text("Giveter Team");
            $(".divider").hide()
        }
        if (h === "press") {
            $(".abt-header-title").children("h1").text("Giveter in Press");
            $(".divider").show()
        }
        if (h === "jobs") {
            $(".abt-header-title").children("h1").text("Do what you love and do it in style");
            $(".divider").hide()
        }
        a(h);
        if (h === "story") {
            d()
        } else {
            if (c) {
                g.masonry("destroy");
                c = false
            }
        }
    }
});
$(document).ready(function () {
    $("#resetPassForm").submit(function () {
        if (a()) {
            var c = b();
            $.ajax({url: "ajax/resetPasswordComplete", cahce: "false", datatype: "json", data: "resetJson=" + encodeURIComponent(JSON.stringify(c)), complete: function (e) {
                var d = jQuery.parseJSON(e.responseText);
                if (d.gsc == gvt.SUCCESS_RESPONSE) {
                    window.location = "http://" + document.location.host
                } else {
                    alert("Some error occured. Please try again.")
                }
            }})
        }
        return false
    });
    function b() {
        var c = {password: $("#resetPassForm input[name=password]").val(), confirmPassword: $("#resetPassForm input[name=confirm-password]").val(), resetId: $("#resetPassForm").attr("key")};
        return c
    }

    $("#resetPassForm input[name=password]").blur(function () {
        if ($("#resetPassForm input[name=password]").val() === "") {
            $("#rst-pass-error").hide().fadeIn(300)
        } else {
            $("#rst-pass-error").fadeOut(300)
        }
    });
    $("#resetPassForm input[name=password]").focus(function () {
        $("#rst-pass-error").fadeOut(300)
    });
    $("#resetPassForm input[name=confirm-password]").blur(function () {
        if ($("#resetPassForm input[name=confirm-password]").val() === "" || $("#resetPassForm input[name=confirm-password]").val() != $("#resetPassForm input[name=password]").val()) {
            $("#rst-cnf-pass-error").hide().fadeIn(300)
        } else {
            $("#rst-cnf-pass-error").fadeOut(300)
        }
    });
    $("#resetPassForm input[name=confirm-password]").focus(function () {
        $("#rst-cnf-pass-error").fadeOut(300)
    });
    function a() {
        if ($("#resetPassForm input[name=password]").val() == "" || $("#resetPassForm input[name=confirm-password]").val() == "" || $("#resetPassForm input[name=confirm-password]").val() != $("#resetPassForm input[name=password]").val()) {
            return false
        } else {
            return true
        }
    }
});
(function (a) {
    a.fn.jqPuzzle = function (h, g) {
        var j = {rows: 4, cols: 4, hole: 16, shuffle: false, numbers: true, language: "en", control: {shufflePieces: true, confirmShuffle: true, toggleOriginal: true, toggleNumbers: true, counter: true, timer: true, pauseTimer: false}, success: {fadeOriginal: true, callback: undefined, callbackTimeout: 300}, animation: {shuffleRounds: 3, shuffleSpeed: 800, slidingSpeed: 200, fadeOriginalSpeed: 600}, style: {gridSize: 2, overlap: true, backgroundOpacity: 0.1}};
        var q = {en: {shuffleLabel: "Shuffle", toggleOriginalLabel: "Original", toggleNumbersLabel: "Numbers", confirmShuffleMessage: "Do you really want to shuffle?", movesLabel: "moves", secondsLabel: "seconds"}, fr: {shuffleLabel: "Mélanger", toggleOriginalLabel: "Original", toggleNumbersLabel: "Nombres", confirmShuffleMessage: "Veux-tu vraiment mélanger?", movesLabel: "mouvements", secondsLabel: "secondes"}, de: {shuffleLabel: "Mischen", toggleOriginalLabel: "Original", toggleNumbersLabel: "Nummern", confirmShuffleMessage: "Willst du wirklich mischen?", movesLabel: "Züge", secondsLabel: "Sekunden"}, pt: {shuffleLabel: "Embaralhar", toggleOriginalLabel: "Original", toggleNumbersLabel: "Numeros", confirmShuffleMessage: "Tem certeza que deseja reembralhar?", movesLabel: "movimentos", secondsLabel: "segundos"}};
        if (h && !h.hole && (h.rows || h.cols)) {
            h.hole = (h.rows || j.rows) * (h.cols || j.cols)
        }
        h = a.extend(true, {}, j, h);
        g = a.extend((q[h.language] || q[j.language]), g);
        var r = h.rows, m = h.cols, c = h.hole;
        var l = h.control, p = h.success, i = h.animation, d = h.style;
        if (r < 3 || r > 9) {
            r = j.rows
        }
        if (m < 3 || m > 9) {
            m = j.rows
        }
        if ((c > (r * m)) || (c < 1)) {
            c = r * m
        }
        c--;
        if (i.slidingSpeed < 1) {
            i.slidingSpeed = 1
        }
        if (i.shuffleSpeed < 1) {
            i.shuffleSpeed = 1
        }
        if (i.fadeOriginalSpeed < 1) {
            i.fadeOriginalSpeed = 1
        }
        if (i.shuffleRounds < 1) {
            i.shuffleRounds = 1
        }
        var n = function (u) {
            for (var s = 0; s < u.length; s++) {
                var t = (s < c) ? s : s + 1;
                if (u.eq(s).attr("current") != t) {
                    return false
                }
            }
            return true
        };
        var b = function (u) {
            var v = 1;
            for (var t = 1; t <= (r * m - 1); t++) {
                for (var s = (t + 1); s <= (r * m); s++) {
                    v *= ((u[t - 1] - u[s - 1]) / (t - s))
                }
            }
            return Math.round(v) == 1
        };
        var f = function (t, s) {
            return parseInt(t) * m + parseInt(s)
        };
        var k = function (s) {
            return{row: (Math.floor(s / m)), col: (s % m)}
        };
        var e = function (s) {
            var t = s.css("border-left-width");
            if (s.css("border-left-style") != "none") {
                switch (t) {
                    case"thin":
                        return 2;
                    case"medium":
                        return 4;
                    case"thick":
                        return 6;
                    default:
                        return parseInt(t) || 0
                }
            }
            return 0
        };
        var o = function (s, z) {
            var u;
            var v;
            var t = 0;
            var w;
            var x = function () {
                y(new Date().getTime());
                w = setTimeout(x, s)
            };
            var y = function (A) {
                z(A - t - u)
            };
            this.start = function () {
                if (u) {
                    return false
                }
                u = new Date().getTime();
                x()
            };
            this.stop = function () {
                if (!u) {
                    return false
                }
                clearTimeout(w);
                var A = new Date().getTime();
                if (v) {
                    t += A - v
                }
                y(A);
                u = v = undefined;
                t = 0
            };
            this.pause = function () {
                if (!u || v) {
                    return false
                }
                clearTimeout(w);
                v = new Date().getTime()
            };
            this.resume = function () {
                if (!v) {
                    return false
                }
                t += new Date().getTime() - v;
                v = undefined;
                x()
            }
        };
        return this.filter("img").each(function () {
            var y = a(this);
            var D = false;
            var s = 0;
            var C = 0;
            var A;
            var t = h.shuffle;
            var u;
            var x = c;
            var B = a("<div/>").addClass("jqp-piece");
            var E = a("<div/>").addClass("jqp-wrapper").append(B);
            var z = a("<div/>").attr("class", y.attr("class") || "").addClass("jqPuzzle").append(E);
            y.replaceWith(z);
            z.attr("id", y.attr("id") || "");
            var w = {gui: {border: e(z), padding: {left: parseInt(z.css("padding-left")) || 0, right: parseInt(z.css("padding-right")) || 0, top: parseInt(z.css("padding-top")) || 0, bottom: parseInt(z.css("padding-bottom")) || 0}}, wrapper: {border: e(E), padding: parseInt(E.css("padding-left")) || 0}, piece: {border: e(B)}};
            z.removeAttr("id");
            z.replaceWith(y);
            y.one("load", function () {
                var au = (d.gridSize === 0 && d.overlap);
                var ak = m * (2 * w.piece.border) + (m - 1) * d.gridSize;
                var aq = r * (2 * w.piece.border) + (r - 1) * d.gridSize;
                if (au) {
                    ak -= (m - 1) * w.piece.border;
                    aq -= (r - 1) * w.piece.border
                }
                y.css({width: "auto", height: "auto", visibility: "visible"});
                var F = Math.floor((y.width() - ak) / m);
                var H = Math.floor((y.height() - aq) / r);
                if (F < 30 || H < 30) {
                    return false
                }
                var S = m * F + ak;
                var M = r * H + aq;
                var ag = y.attr("src");
                var G = F + 2 * w.piece.border + d.gridSize;
                var V = H + 2 * w.piece.border + d.gridSize;
                var T = {piece: a.boxModel ? 0 : 2 * w.piece.border, wrapper: a.boxModel ? 0 : 2 * (w.wrapper.border + w.wrapper.padding), gui: {width: a.boxModel ? 0 : 2 * w.gui.border + w.gui.padding.left + w.gui.padding.right, height: a.boxModel ? 0 : 2 * w.gui.border + w.gui.padding.top + w.gui.padding.bottom}};
                var O = function (ax, av) {
                    var aw = {left: w.wrapper.padding + av * G, top: w.wrapper.padding + ax * V};
                    if (au) {
                        aw.left -= av * w.piece.border;
                        aw.top -= ax * w.piece.border
                    }
                    return aw
                };
                var ad = function (aF, av) {
                    if (av) {
                        if (K.is(".jqp-disabled")) {
                            return false
                        }
                        if (D) {
                            return false
                        }
                        if (l.confirmShuffle && (s > 0) && !window.confirm(g.confirmShuffleMessage)) {
                            return false
                        }
                        D = true;
                        if (A) {
                            Y.removeClass("jqp-solved");
                            W.fadeTo(i.fadeOriginalSpeed, d.backgroundOpacity, function () {
                                W.remove().prependTo(L);
                                Q.removeClass("jqp-disabled")
                            })
                        }
                    }
                    if (u) {
                        u.stop()
                    }
                    A = false;
                    t = true;
                    s = 0;
                    C = 0;
                    if (N) {
                        N.removeClass("jqp-disabled")
                    }
                    if (am) {
                        am.val(s)
                    }
                    if (J) {
                        J.val(C)
                    }
                    var az = [];
                    var aA = 0;
                    while (aA < aF) {
                        var aH = [];
                        for (var ay = 0; ay < r * m; ay++) {
                            aH[ay] = ay
                        }
                        aH.splice(c, 1);
                        az[aA] = [];
                        for (var ay = 0; ay < r * m; ay++) {
                            if (ay == c) {
                                az[aA][ay] = c;
                                continue
                            }
                            var aD = Math.floor(Math.random() * aH.length);
                            az[aA][ay] = aH[aD];
                            aH.splice(aD, 1)
                        }
                        if (((aA + 1) < aF) || b(az[aA])) {
                            aA++
                        }
                    }
                    var aB = 0;
                    for (var aA = 0; aA < aF; aA++) {
                        var aE = ((aA + 1) == aF);
                        for (var ay = 0; ay < az[aA].length; ay++) {
                            if (ay == c) {
                                if (aE) {
                                    x = c
                                }
                                continue
                            }
                            var aw = az[aA][ay];
                            if (aw > c) {
                                aw -= 1
                            }
                            var aG = at.eq(aw);
                            var aC = k(ay);
                            var ax = O(aC.row, aC.col);
                            if (aE) {
                                aG.attr("current", ay.toString())
                            }
                            if (av === undefined) {
                                aG.css({left: ax.left, top: ax.top})
                            } else {
                                aG.animate({left: ax.left, top: ax.top}, av, null, function () {
                                    aB++;
                                    if (aB == i.shuffleRounds * (r * m - 1)) {
                                        D = false;
                                        aB = 0
                                    }
                                })
                            }
                        }
                    }
                };
                var L = a("<div/>").addClass("jqp-wrapper").css({width: S + T.wrapper, height: M + T.wrapper, borderWidth: w.wrapper.border, padding: w.wrapper.padding, margin: 0, position: "relative", overflow: "hidden", display: "block", visibility: "inherit"});
                var ar = a("<div/>").addClass("jqp-piece").css({width: F + T.piece, height: H + T.piece, backgroundImage: "url(" + ag + ")", borderWidth: w.piece.border, margin: 0, padding: 0, position: "absolute", overflow: "hidden", display: "block", visibility: "inherit", cursor: "default"}).append(a("<span/>"));
                var at = a([]);
                for (var an = 0; an < r; an++) {
                    for (var al = 0; al < m; al++) {
                        var Z = f(an, al);
                        if (Z == c) {
                            continue
                        }
                        var ae = O(an, al);
                        var R = -1 * (al * G + w.piece.border);
                        var P = -1 * (an * V + w.piece.border);
                        if (au) {
                            R += al * w.piece.border;
                            P += an * w.piece.border
                        }
                        at = at.add(ar.clone().css({left: ae.left, top: ae.top, backgroundPosition: (R + "px " + P + "px")}).attr("current", String(Z)).appendTo(L).children().text(Z + 1).end())
                    }
                }
                if (h.shuffle) {
                    ad(1)
                }
                var W = a("<div/>").css({width: S, height: M, left: w.wrapper.padding, top: w.wrapper.padding, backgroundImage: "url(" + ag + ")", borderWidth: 0, margin: 0, padding: 0, position: "absolute", opacity: d.backgroundOpacity}).prependTo(L);
                var aj = a("<div/>").addClass("jqp-controls").css({visibility: "inherit", display: "block", position: "static"});
                var K, ah, U;
                var X = a("<a/>").css("cursor", "default");
                if (l.shufflePieces) {
                    K = X.clone().text(g.shuffleLabel).appendTo(aj)
                }
                if (l.toggleOriginal) {
                    ah = X.clone().text(g.toggleOriginalLabel).appendTo(aj)
                }
                if (l.toggleNumbers) {
                    U = X.clone().text(g.toggleNumbersLabel).appendTo(aj);
                    if (h.numbers) {
                        U.addClass("jqp-toggle")
                    }
                }
                var Q = aj.children();
                var N, am, J;
                if (l.counter || l.timer) {
                    N = a("<span/>").css("cursor", "default").appendTo(aj);
                    var af = a("<input/>").val(0).css({width: "5ex", cursor: "default"}).attr("readonly", "readonly");
                    if (l.counter) {
                        am = af.clone().appendTo(N).after(g.movesLabel + " ")
                    }
                    if (l.timer) {
                        J = af.clone().appendTo(N).after(g.secondsLabel)
                    }
                    if (!h.shuffle) {
                        N.addClass("jqp-disabled")
                    }
                }
                var I = a("<a/>").text("jqPuzzle").attr("href", "http://www.2meter3.de/jqPuzzle/").css({"float": "right", fontFamily: "Verdana, Arial, Helvetica, sans-serif", fontSize: "9px", lineHeight: "12px", textDecoration: "none", color: "#FFFFFF", backgroundColor: "#777777", backgroundImage: "none", borderBottom: "1px dotted #FFFFFF", padding: "1px 3px 2px", marginRight: w.wrapper.border, position: "static", display: "inline", visibility: "inherit"});
                var ao = a("<div/>").css({width: S + 2 * (w.wrapper.padding + w.wrapper.border), position: "absolute", display: "block", visibility: "inherit", margin: "0px", padding: "0px", backgroundColor: "transparent"}).append(I).append(aj);
                var Y = a("<div/>").attr("class", y.attr("class") || "").addClass("jqPuzzle").css({width: S + 2 * (w.wrapper.padding + w.wrapper.border) + T.gui.width, height: M + 2 * (w.wrapper.padding + w.wrapper.border) + T.gui.height, textAlign: "left", overflow: "hidden", display: "block"}).append(L).append(ao);
                y.replaceWith(Y);
                var ac = y.attr("id");
                if (ac) {
                    Y.attr("id", ac)
                }
                if (!h.numbers) {
                    at.children().hide()
                }
                if (N) {
                    N.children("input").val(0)
                }
                var ai = Y.height();
                var aa = ao.height();
                Y.height(Y.height() + ao.height());
                if (a.browser.msie) {
                    Y[0].onselectstart = function () {
                        return false
                    }
                } else {
                    Y.mousedown(function () {
                        return false
                    })
                }
                Q.mousedown(function () {
                    if (!a(this).is(".jqp-disabled")) {
                        a(this).addClass("jqp-down")
                    }
                });
                Q.mouseout(function () {
                    a(this).removeClass("jqp-down")
                });
                Q.mouseup(function () {
                    a(this).removeClass("jqp-down")
                });
                at.click(function () {
                    if (D) {
                        return false
                    }
                    if (A) {
                        return false
                    }
                    D = true;
                    var av = a(this);
                    var ay = av.attr("current");
                    var ax = k(ay);
                    var aw = k(x);
                    if (Math.abs(ax.row - aw.row) + Math.abs(ax.col - aw.col) != 1) {
                        D = false;
                        return false
                    }
                    var az = O(aw.row, aw.col);
                    av.attr("current", String(x));
                    x = ay;
                    if (t) {
                        s++
                    }
                    if (am) {
                        am.val(s)
                    }
                    if (s == 1) {
                        if (!u) {
                            u = new o(333, function (aA) {
                                C = Math.floor(aA / 1000);
                                if (J) {
                                    J.val(C)
                                }
                            })
                        }
                        u.start()
                    }
                    av.animate({left: az.left, top: az.top}, i.slidingSpeed, null, function () {
                        if (t) {
                            A = n(at);
                            if (A) {
                                if (u) {
                                    u.stop()
                                }
                                t = false;
                                Y.addClass("jqp-solved");
                                window.setTimeout(ap, 100)
                            } else {
                                D = false
                            }
                        } else {
                            D = false
                        }
                    })
                });
                if (l.shufflePieces) {
                    K.click(function () {
                        ad(i.shuffleRounds, i.shuffleSpeed)
                    })
                }
                if (l.toggleOriginal) {
                    ah.click(function () {
                        if (ah.is(".jqp-disabled")) {
                            return false
                        }
                        if (D) {
                            return false
                        }
                        D = true;
                        if (ah.is(".jqp-toggle")) {
                            if (l.shufflePieces) {
                                K.removeClass("jqp-disabled")
                            }
                            if (l.toggleNumbers) {
                                U.removeClass("jqp-disabled")
                            }
                            ah.removeClass("jqp-toggle");
                            W.fadeTo(i.fadeOriginalSpeed, d.backgroundOpacity, function () {
                                a(this).prependTo(L);
                                if (l.pauseTimer && u) {
                                    u.resume()
                                }
                                D = false
                            })
                        } else {
                            if (l.shufflePieces) {
                                K.addClass("jqp-disabled")
                            }
                            if (l.toggleNumbers) {
                                U.addClass("jqp-disabled")
                            }
                            ah.addClass("jqp-toggle");
                            if (l.pauseTimer && u) {
                                u.pause()
                            }
                            W.appendTo(L).fadeTo(i.fadeOriginalSpeed, 1, function () {
                                D = false
                            })
                        }
                        return false
                    })
                }
                if (l.toggleNumbers) {
                    U.click(function () {
                        if (U.is(".jqp-disabled")) {
                            return false
                        }
                        if (U.is(".jqp-toggle")) {
                            U.removeClass("jqp-toggle");
                            at.children().hide()
                        } else {
                            U.addClass("jqp-toggle");
                            at.children().show()
                        }
                    })
                }
                var ap = function () {
                    if (p.fadeOriginal) {
                        if (l.toggleOriginal) {
                            ah.addClass("jqp-disabled")
                        }
                        if (l.toggleNumbers) {
                            U.addClass("jqp-disabled")
                        }
                        W.appendTo(L).fadeTo(i.fadeOriginalSpeed, 1, function () {
                            D = false;
                            ab()
                        })
                    } else {
                        D = false;
                        ab()
                    }
                };
                var ab = function () {
                    if (a.isFunction(p.callback)) {
                        setTimeout(function () {
                            p.callback({moves: s, seconds: C})
                        }, p.callbackTimeout)
                    }
                }
            });
            var v = setInterval(function () {
                if (y[0].complete) {
                    clearInterval(v);
                    y.trigger("load")
                }
            }, 333)
        }).end()
    };
    a(document).ready(function () {
        a("img.jqPuzzle").each(function () {
            var d = /\bjqp(-[a-z]{2})?-r(\d)-c(\d)(-h(\d+))?(-s(\d+))?(-[A-Z]+)?\b/;
            var b = d.exec(this.className);
            var c;
            if (b) {
                c = {rows: parseInt(b[2]), cols: parseInt(b[3]), hole: parseInt(b[5]) || null, shuffle: b[8] && b[8].indexOf("S") != -1, numbers: b[8] ? b[8].indexOf("N") == -1 : true, language: b[1] && b[1].substring(1)};
                if (b[7]) {
                    c.animation = {};
                    c.animation.shuffleRounds = parseInt(b[7])
                }
                if (b[8] && b[8].search(/[ABCDE]/) != -1) {
                    c.control = {};
                    c.control.shufflePieces = b[8].indexOf("A") == -1;
                    c.control.toggleOriginal = b[8].indexOf("B") == -1;
                    c.control.toggleNumbers = b[8].indexOf("C") == -1;
                    c.control.counter = b[8].indexOf("D") == -1;
                    c.control.timer = b[8].indexOf("E") == -1
                }
            }
            a(this).jqPuzzle(c)
        })
    })
})(jQuery);
var lastCalRequest = "";
var focusElement = null;
$(document).ready(function () {
    idObject = {};
    finalObject = [];
    var aa = {};
    var u = {};
    var ai = 0;
    var w = false;
    var ad = 0;
    var p = 0;
    var f = {};
    var S = "";
    var n = null;
    var A = null;
    var a = "";
    var M = "";
    var aj = false;
    var l = null;
    var T = 0;
    var B = {};
    var ac = {};
    var ah = false;
    var e = false;
    var N = true;
    var ae = true;
    var ag = false;
    var i = false;
    var o = [
        {name: "Mom", relationship: "Mother", occasion: "Birthday"},
        {name: "Dad", relationship: "Father", occasion: "Birthday"},
        {name: "Mom and Dad", relationship: "Parents:Both", occasion: "Anniversary"},
        {name: "Your better half", relationship: "Husband", occasion: "Birthday"},
        {name: "Your Girlfriend's name", relationship: "Friend:Her", occasion: "Birthday"},
        {name: "Brother", relationship: "Brother", occasion: "Birthday"},
        {name: "Sister", relationship: "Sister", occasion: "Birthday"}
    ];
    gvt.calendar.generateCldOptionContainer = function (aD, av) {
        defaultName = "";
        defaultRel = "relationship";
        defaultDate = "";
        defaultOccassion = "occasion";
        p++;
        var ay = p;
        if (aD !== null && aD !== undefined) {
            if (!aD.name) {
                aD.name = defaultName
            }
            if (!aD.relationship) {
                aD.relationship = defaultRel
            }
            if (!aD.date) {
                aD.date = defaultDate
            }
            if (!aD.occasion) {
                aD.occasion = defaultOccassion
            }
            if (aD.key > -1) {
                ay = aD.key
            }
        } else {
            aD = {name: defaultName, relationship: defaultRel, date: defaultDate, occasion: defaultOccassion, key: p}
        }
        var az = '<img src="">';
        if (aD.id !== "undefined" && aD.id !== null && aD.id !== "" && aD.id !== undefined) {
            az = '<img src="https://graph.facebook.com/' + aD.id + '/picture?type=large&width=70&height=70">'
        } else {
            if (aD.occasion === "Birthday") {
                az = '<img src="/public/images/buttons/birthday.png">'
            }
            if (aD.occasion === "Anniversary") {
                az = '<img src="/public/images/buttons/anniversary.png">'
            }
        }
        var aw = '<div class="cld-option-pic">' + az + "</div>";
        var at = '<div class="cld-option-name"><input class="cld-name-input" type="text" value="' + aD.name + '" placeholder="Name of the person"></div>';
        var au = '<div class="cld-option-rel"><div class="dropdown-button"><div class="dropdown-button-text">' + aD.relationship + '</div><div class="dropdown-button-icon"><i class="icon-chevron-down"></i></div><ul class="cld-dropdown-menu " role="menu">' + a + "</ul></div></div>";
        var ar = '<div class="cld-option-date"><input class="cld-date-input" type="text" readonly value="' + aD.date + '" placeholder="Enter the date"><span class="cld-date-selector"><img src="/public/images/buttons/calendar-icon-new.png" alt=""></span></div>';
        var ap = '<div class="cld-option-oca"><div class="dropdown-button"><div class="dropdown-button-text">' + aD.occasion + '</div><div class="dropdown-button-icon"><i class="icon-chevron-down"></i></div><ul class="cld-dropdown-menu" role="menu"><li class="cld-dropdown-oca">Birthday</li><li class="cld-dropdown-oca">Anniversary</li></ul></div></div>';
        var ax = '<div class="cld-option-remove"><i class="icon-remove"></i></div>';
        var aB = '<div class="cld-option-success"><i class="icon-ok icon-white"></i></div>';
        var aC = '<div class="cld-option-fail"><i class="icon-ban-circle icon-white"></i></div>';
        var aA = '<div class="cld-option-suggest"><div class="cld-suggest-text">Also add <span>Anniversary</span></div></div>';
        var aq = "";
        if (av) {
            aq = '<div class="cld-option-container default" data-id="' + aD.id + '" data-key="' + ay + '">' + aw + at + au + ap + ar + ax + aB + aC + aA + "</div>"
        } else {
            aq = '<div class="cld-option-container" data-id="' + aD.id + '" data-key="' + ay + '">' + aw + at + au + ap + ar + ax + aB + aC + aA + "</div>"
        }
        return aq
    };
    gvt.calendar.bindEvents = function () {
        $("body").unbind("click").click(function (ap) {
            if (!$(ap.target).hasClass("cld-name-input") || $(ap.target).hasClass("fb-friend-suggest-sc") || $(ap.target).hasClass("fb-name-suggest-tooltip")) {
                if (n !== null) {
                    n = n.detach()
                }
                $(".cld-dropdown-menu").slideUp("fast");
                $(".fb-name-suggest-tooltip").fadeOut("fast");
                $(".rmd-fb-friend-suggest").hide()
            }
        });
        $(".cld-option-suggest").unbind("click").click(function () {
            var aq = $(this).parents(".cld-option-container");
            var ap = ak(aq);
            ap.date = "";
            ap.occasion = "Anniversary";
            W(ap, "", true)
        });
        $(".cld-name-input").unbind("click").click(function () {
            af(this)
        });
        $(".cld-option-remove").unbind("click").click(function () {
            var ap = $(this).parents(".cld-option-container");
            m(ap, 0);
            ap.fadeOut("slow")
        });
        $(".cld-name-input, .cld-date-input").unbind("blur").blur(function () {
            an(this)
        });
        $(".cld-date-input").unbind("changeDate");
        $(".cld-date-selector").unbind("click").click(function () {
            $(this).parent().find(".cld-date-input").datepicker("show")
        });
        $(".cld-date-input").datepicker({format: "dd/mm", startView: 1, autoclose: true}).on("changeDate", function () {
            an(this)
        });
        $(".dropdown-button").unbind("click").click(function (ap) {
            if ($(this).find(".cld-dropdown-menu").is(":visible")) {
                $(this).find(".cld-dropdown-menu").slideUp("fast")
            } else {
                $(this).find(".cld-dropdown-menu").slideDown("fast")
            }
            ap.stopPropagation()
        });
        $(".cld-dropdown-oca").unbind("click").click(function (ap) {
            $(this).parents(".dropdown-button").find(".dropdown-button-text").html($(this).html());
            $(this).parent().slideUp("fast");
            an(this);
            ap.stopPropagation()
        });
        $(".cld-name-input").unbind("focus").focus(function () {
            if (aj) {
                if (n) {
                    n.detach()
                }
                n = $(S).appendTo($(this).parent());
                if ($(this).val() !== "") {
                    v($(this).val())
                }
                A = this;
                $(this).keyup(function () {
                    v($(this).val())
                });
                $(".fbl-friend-each").unbind("click").click(function (ap) {
                    d(this)
                })
            } else {
                console.log("not logged in")
            }
        });
        $("#cld-rmd-search").unbind("focus").focus(function () {
            if (aj) {
                $(this).keyup(function () {
                    c($(this).val())
                });
                if ($(this).val() !== "") {
                    c($(this).val())
                }
                $(".fbl-friend-each").unbind("click").click(function (ar) {
                    var aq = $(this).attr("data-id");
                    var ap = y(aq);
                    W(ap);
                    $(".rmd-fb-friend-suggest").hide()
                })
            } else {
            }
        });
        $("#calendar-container .cancel-card-save-msg").unbind("click").click(function () {
            var ap = $("#calendar-container .cld-option-container");
            m(ap, 0);
            $("#myModal").modal("hide")
        });
        $("#calendar-container").on("calEvent", function () {
            var ap = $("#calendar-container .cld-option-container");
            an(ap)
        });
        $("body").on("cardAdded", function () {
            $("#calendar-container .not-added").hide();
            $("#calendar-container .added").fadeIn("slow");
            $("#calendar-container .save-button").hide();
            $("#calendar-container .view-calendar-button").fadeIn("slow");
            var ap = $("#calendar-container .cld-option-container");
            var aq = $(ap).find(".cld-option-rel .dropdown-button-text").text();
            $.cookie("calendarRel", aq, {path: "/", domain: gvt.cookieDomain})
        });
        $("#calendar-container .save-button").unbind("click").click(function () {
            var ap = $("#calendar-container .cld-option-container");
            an(ap);
            if (am(ap)) {
                $("#calendar-container .not-added").hide();
                $("#calendar-container .added").fadeIn("slow");
                $("#calendar-container .save-button").hide();
                $("#calendar-container .view-calendar-button").fadeIn("slow")
            }
        })
    };
    function af(ap) {
        if (!aj) {
            Y = Y.detach();
            Y = $(O).insertBefore(ap);
            Y.fadeIn("slow");
            Y.unbind("click").click(function () {
                $(this).fadeOut("slow");
                gvt.FbGlobal.facebookLogin(F, ap)
            })
        }
    }

    function G() {
        $(".cld-error-message").fadeOut("slow");
        $(".cld-save-button").remove();
        $(".cld-title p").text("Sorting your calendar to show you the upcoming birthdays.");
        $(".cld-title").append('<img class="ajax-loader" src="/public/images/buttons/cal-ajax-loader.gif">');
        $(".cld-title").fadeIn("slow");
        $.ajax({url: "/ajax/finalizeCalendar", cache: false, type: "POST", dataType: "json", complete: function (au) {
            if (au.responseText === "700") {
            }
        }});
        var ar = [];
        $(".cld-option-container").each(function () {
            if (!$(this).hasClass("cld-add-card")) {
                var au = ak(this);
                ar.push(au);
                $(this).fadeOut("slow").remove()
            }
        });
        ar.sort(function (av, au) {
            aDate = av.date.split("/");
            bDate = au.date.split("/");
            av = new Date("", aDate[1] - 1, aDate[0]);
            au = new Date("", bDate[1] - 1, bDate[0]);
            return av > au ? 1 : av < au ? -1 : 0
        });
        var aq = new Date().getUTCMonth();
        var at = new Date().getUTCDate();
        var ap = new Date("", aq, at);
        $.each(ar, function (au, av) {
            var aw = av.date.split("/");
            aw = new Date("", aw[1] - 1, aw[0]);
            if (aw >= ap) {
                W(av, "", true)
            } else {
                W(av, "end", true)
            }
        });
        $(".cld-title").fadeOut("slow");
        $(".cld-title p").text("Congratulations! Your calendar has been saved and we will remind you a week before one of these occasions");
        $(".cld-title img").remove();
        $(".cld-title").fadeIn("slow");
        $(".cld-share-message").fadeIn("slow")
    }

    function ak(ap) {
        var aq = {};
        aq.name = $(ap).find(".cld-name-input").val();
        aq.date = $(ap).find(".cld-date-input").val();
        aq.pic = $(ap).find(".cld-option-pic img").attr("src");
        aq.occasion = $(ap).find(".cld-option-oca .dropdown-button-text").html();
        aq.relationship = $(ap).find(".cld-option-rel .dropdown-button-text").html();
        aq.id = $(ap).attr("data-id");
        aq.key = $(ap).attr("data-key");
        return aq
    }

    function ao() {
        var ap = true;
        $(".cld-option-container").each(function () {
            if (!$(this).hasClass("pass") && !$(this).hasClass("cld-add-card")) {
                ap = false;
                $(".cld-save-button").hide();
                $(".cld-title").hide();
                $(".cld-error-message").fadeIn("slow");
                var aq = ak(this);
                var ar = $(this).detach();
                W(aq)
            }
        });
        if (ap) {
            G()
        }
    }

    function D(aq) {
        var ap = true;
        $(aq).find(".cld-option-container").each(function () {
            if (!$(this).hasClass("pass")) {
                ap = am(this, true);
                if (ap === false) {
                    ap = false
                } else {
                    if (ap === true) {
                        addConnection(this);
                        $(this).addClass("pass")
                    } else {
                    }
                }
            }
        });
        return ap
    }

    function am(at, av) {
        var ar = $(at).find(".cld-name-input").val();
        if (ar === "" || ar === null || ar === undefined) {
            $(at).find(".cld-name-input").addClass("fail");
            ar = false
        } else {
            $(at).find(".cld-name-input").removeClass("fail");
            ar = true
        }
        var aq = $(at).find(".cld-date-input").val();
        if (aq === "" || aq === null || aq === undefined) {
            $(at).find(".cld-date-input").addClass("fail");
            aq = false;
            Q(at)
        } else {
            $(at).find(".cld-date-input").removeClass("fail");
            aq = true;
            H(at)
        }
        var aw = $(at).find(".cld-option-rel .dropdown-button-text").html();
        if (aw !== "" && aw !== null && aw !== "relationship") {
            $(at).find(".cld-option-rel .dropdown-button-text").removeClass("fail");
            aw = true
        } else {
            $(at).find(".cld-option-rel .dropdown-button-text").addClass("fail");
            aw = false
        }
        var ap = $(at).find(".cld-option-oca .dropdown-button-text").html();
        if (ap !== "" && ap !== null && ap !== "occasion") {
            $(at).find(".cld-option-oca .dropdown-button-text").removeClass("fail");
            var au = $(at).attr("data-id");
            if (au === undefined || au === null || au === "" || au === "undefined") {
                if (ap === "Anniversary") {
                    profilePic = "/public/images/buttons/anniversary.png"
                } else {
                    profilePic = "/public/images/buttons/birthday.png"
                }
                $(at).find(".cld-option-pic img").attr("src", profilePic)
            }
            ap = true
        } else {
            $(at).find(".cld-option-oca .dropdown-button-text").addClass("fail");
            ap = false
        }
        if (ar && aq && aw && ap) {
            return true
        } else {
            return false
        }
    }

    gvt.calendar.generateFilterJson = function J() {
        if ($("#filterData") && $("#filterData").length) {
            var ap = "";
            var aq = jQuery.parseJSON($("#filterData").html());
            $.each(aq.allFilterCategories, function (at, av) {
                var ar = [];
                for (counter = 0; counter < av.length; counter++) {
                    var aw = aq.allFilters[av[counter]];
                    ar.push(aw);
                    if (at === "rel") {
                        var ax = aw.split(":")[0];
                        var au = aw.split(":")[1];
                        if (au === "Couple" || au === "Both" || ax === "Friend" || ax === "Colleague") {
                            a = a + '<li class="cld-dropdown-oca">' + aw + "</li>"
                        } else {
                            a = a + '<li class="cld-dropdown-oca">' + aw.split(":")[1] + "</li>"
                        }
                    }
                }
                B[at] = ar
            });
            if (!i) {
                E()
            }
        }
    };
    function R() {
        aj = true;
        g();
        gvt.calendar.bindEvents()
    }

    function g() {
        ad = 0;
        h();
        if (N) {
            L();
            b()
        }
        r(al);
        z(al);
        gvt.calendar.bindEvents()
    }

    function h() {
        sortable = gvt.FbGlobal.sortable;
        if (S === "") {
            for (var ap in sortable) {
                S += '<div class="fbl-friend-each last clearfix" key="' + jsonResponse[sortable[ap][0]]["a"] + '" name="' + jsonResponse[sortable[ap][0]]["n"] + '" data-id="' + sortable[ap][0] + '" ><div class="name f-left" >' + jsonResponse[sortable[ap][0]]["n"] + '</div><div class="et" ></div></div>'
            }
        }
        S = '<div class="fb-friend-suggest-sc"><div class="cld-title"><p>Suggestions</p></div><div class="fb-friend-suggest-inner">' + S + "</div></div>";
        $(".rmd-fb-friend-suggest").append(S)
    }

    function W(ar, aq, au) {
        var at = "";
        var av = ar.relationship;
        if (au) {
            at = gvt.calendar.generateCldOptionContainer(ar, true)
        } else {
            at = gvt.calendar.generateCldOptionContainer(ar)
        }
        var ap = "";
        if (aq === "end") {
            ap = $(at).appendTo(".cld-calendar-cards-container")
        } else {
            ap = $(at).insertAfter(".cld-calendar-cards-container .cld-add-card")
        }
        if (!au) {
            an(ap)
        }
        gvt.calendar.bindEvents()
    }

    function v(au, aq) {
        var ap = "";
        var at = false;
        if (aq === undefined || aq === "" || aq === null) {
            aq = ".fbl-friend-each"
        }
        if (au !== "") {
            $(aq).hide();
            for (var ar in sortable) {
                if (jsonResponse[sortable[ar][0]]["n"]) {
                    if (jsonResponse[sortable[ar][0]]["n"].toLowerCase().search(au.toLowerCase()) >= 0) {
                        $(aq + "[data-id='" + sortable[ar][0] + "']").show();
                        at = true
                    }
                }
            }
            if (n !== undefined && n !== null && n !== "") {
                if (!at) {
                    n.hide()
                } else {
                    n.show()
                }
            }
        } else {
            $(aq).show()
        }
    }

    function c(ar) {
        var aq = false;
        if (ar !== "") {
            $(".rmd-fb-friend-suggest").show();
            $(".cld-rmd").find(".fbl-friend-each").hide();
            for (var ap in sortable) {
                if (jsonResponse[sortable[ap][0]]["n"]) {
                    if (jsonResponse[sortable[ap][0]]["n"].toLowerCase().search(ar.toLowerCase()) >= 0) {
                        $(".cld-rmd").find(".fbl-friend-each[data-id='" + sortable[ap][0] + "']").show();
                        aq = true
                    }
                }
            }
            if (!aq) {
                $(".rmd-fb-friend-suggest").hide()
            } else {
                $(".rmd-fb-friend-suggest").show()
            }
        } else {
            $(".cld-rmd").find(".fbl-friend-each").show()
        }
    }

    function m(ar, au) {
        if ($(ar).hasClass("cld-option-container")) {
            cardContainer = $(ar)
        } else {
            cardContainer = $(ar).parents(".cld-option-container")
        }
        var ax = $(cardContainer).attr("data-key");
        var aq = $(cardContainer).attr("data-cal");
        var aw = $(cardContainer).attr("data-id");
        var at = {};
        if (aq < 1 || aq === undefined || aq === "undefined") {
            aq = -1
        }
        $('.cld-rmd-frd-container[data-id="' + aw + '"]').fadeOut("slow");
        if (au === 0 && au !== undefined) {
            au = 0
        } else {
            au = 1
        }
        if (!f[ax]) {
            at.name = $(cardContainer).find(".cld-name-input").val();
            at.date = $(cardContainer).find(".cld-date-input").val();
            at.relationship = $(cardContainer).find(".cld-option-rel .dropdown-button-text").html();
            at.occasion = $(cardContainer).find(".cld-option-oca .dropdown-button-text").html();
            at.id = $(cardContainer).attr("data-id");
            var ap = at.relationship;
            var av = "calendarString=[" + JSON.stringify(at) + "]&calId=" + aq + "&valid=" + au + "&accessToken=" + gvt.FbGlobal.accessToken;
            if (av != lastCalRequest) {
                $.ajax({url: "/ajax/updateCalendar", cache: false, type: "POST", dataType: "json", data: av, context: cardContainer, complete: function (ay) {
                    if (ay.responseText === "600") {
                        M = ar
                    } else {
                        if (ay.responseText > 0) {
                            finalObject.push(at);
                            $(this).find(".cld-option-fail").hide();
                            $(this).find(".cld-option-success").stop().slideDown("slow");
                            $(".cld-save-button").fadeIn("slow");
                            $(this).addClass("pass");
                            $(this).attr("data-cal", ay.responseText);
                            $("body").trigger("cardAdded")
                        } else {
                            M = ar
                        }
                    }
                }})
            }
            lastCalRequest = av
        }
    }

    function d(at) {
        var ax = $(at).attr("data-id");
        var au = "relationship";
        if ($(at).attr("data-rel")) {
            au = $(at).attr("data-rel")
        }
        $(at).fadeOut("slow");
        var ap = jsonResponse[ax]["n"];
        var av = jsonResponse[ax]["g"];
        var aq = "Birthday";
        var ar = "";
        if (av == "m") {
            au = "Friend:Him"
        }
        if (av == "f") {
            au = "Friend:Her"
        }
        if (jsonResponse[ax]["b"] !== "" && jsonResponse[ax]["b"] !== null && jsonResponse[ax]["b"] !== undefined) {
            ar = jsonResponse[ax]["b"];
            ar = ar.split("/");
            ar = ar[1] + "/" + ar[0]
        }
        var aw = $(at).parents(".cld-option-container").attr("data-key");
        var ay = {id: ax, name: ap, relationship: au, occasion: aq, date: ar, key: aw};
        s(ay)
    }

    function s(ap) {
        var ar = $('".cld-option-container[data-key="' + ap.key + '"]"');
        if (ap.name !== null && ap.name !== "" && ap.name !== undefined && ap.name !== "undefined") {
            $(ar).find(".cld-name-input").val(ap.name)
        }
        if (ap.id !== null) {
            ar.attr("data-id", ap.id);
            var aq = "https://graph.facebook.com/" + ap.id + "/picture?type=large&width=70&height=70";
            $(ar).find(".cld-option-pic img").attr("src", aq)
        }
        if (ap.date !== null && ap.date !== "" && ap.date !== undefined && ap.date !== "undefined") {
            $(ar).find(".cld-date-input").val(ap.date)
        } else {
            $(ar).find(".cld-date-input").attr("value", "")
        }
        if (ap.occasion !== null && ap.occasion !== "" && ap.occasion !== undefined && ap.occasion !== "undefined") {
            $(ar).find(".cld-option-oca .dropdown-button-text").html(ap.occasion)
        }
        if (ap.relationship !== null && ap.relationship !== "" && ap.relationship !== undefined && ap.relationship !== "undefined") {
            $(ar).find(".cld-option-rel .dropdown-button-text").html(ap.relationship)
        }
        an(ar)
    }

    function P(ar) {
        var aq = $(ar).attr("data-id");
        var at = "relationship";
        if ($(ar).attr("data-rel")) {
            at = $(ar).attr("data-rel")
        }
        $(ar).fadeOut("slow");
        var ap = y(aq, at);
        W(ap)
    }

    function L(aq) {
        var ap = 0;
        N = false;
        FB.api("/me/family&access_token=" + gvt.FbGlobal.accessToken, function (ar) {
            $.each(ar.data, function (au, av) {
                ap++;
                var aw = av.relationship.charAt(0).toUpperCase() + av.relationship.slice(1);
                var ax = av.id;
                var at = y(ax, aw);
                W(at, "end")
            });
            $(".cld-family-count-container").html(ap);
            $(".cld-calendar-family-notification").slideDown("slow").delay(3000).slideUp("slow")
        })
    }

    function b(ap) {
        FB.api("/me?access_token=" + gvt.FbGlobal.accessToken, function (ar) {
            var aw = "";
            var au = "";
            var aq = "";
            if (ar.significant_other) {
                aw = ar.significant_other.id;
                aq = ar.relationship_status
            }
            var av = ar.gender;
            if (aq === "Married") {
                if (av === "male") {
                    var at = y(aw, "wife");
                    W(at)
                }
                if (av === "female") {
                    var at = y(aw, "husband");
                    W(at)
                }
            }
        })
    }

    function z(ap) {
        FB.api("/me/photos/uploaded?limit=200&access_token=" + gvt.FbGlobal.accessToken, function (aq) {
            k(aq);
            ap()
        })
    }

    function r(ap) {
        FB.api("/me/feed?limit=500&access_token=" + gvt.FbGlobal.accessToken, function (aq) {
            k(aq);
            ap()
        })
    }

    function k(ap) {
        if (!ap || !ap.data) {
            return
        }
        $.each(ap.data, function (ar, at) {
            if (at.comments && at.comments.data) {
                $.each(at.comments.data, function (av, aw) {
                    if (aw.from) {
                        var au = aw.from.id;
                        C(au, at)
                    }
                })
            }
            if (at.story_tags && at.story_tags) {
                $.each(at.story_tags, function (aw, au) {
                    var av = au[0].id;
                    C(av, at)
                })
            }
            if (at.message_tags && at.message_tags) {
                $.each(at.message_tags, function (aw, au) {
                    var av = au[0].id;
                    C(av, at)
                })
            }
            if (at.tags && at.tags.data) {
                $.each(at.tags.data, function (aw, au) {
                    var av = au.id;
                    if (av) {
                        C(av, at)
                    }
                })
            }
            if (at.from) {
                var aq = at.from.id;
                C(aq, at)
            }
        })
    }

    function C(ap, aq) {
        var ar = 1;
        ap = ap.toString();
        if (l !== null && ap === l) {
            ar = T * 0.5;
            T = ar
        } else {
            ar = 1;
            T = 1;
            l = ap
        }
        if (!u[ap]) {
            if (!idObject[ap]) {
                idObject[ap] = 1
            } else {
                idObject[ap] += ar
            }
        }
    }

    function al() {
        var ax = [];
        ad++;
        if (ad == 2) {
            for (var aq in idObject) {
                if (idObject != null && idObject.hasOwnProperty(aq)) {
                    ax.push({key: aq, value: idObject[aq]})
                }
            }
            ax.sort(function (az, ay) {
                return ay.value - az.value
            });
            var av = 0;
            var at = 0;
            var ap = "";
            while (at < ax.length) {
                if (jsonResponse[ax[at].key] !== undefined && u[ax[at].key] !== false) {
                    av++;
                    var aw = "";
                    var au = jsonResponse[ax[at].key]["g"];
                    var ar = "";
                    if (au === "m") {
                        aw = x(ax[at].key, "Friend:Him")
                    } else {
                        if (au === "f") {
                            aw = x(ax[at].key, "Friend:Her")
                        } else {
                            aw = x(ax[at].key)
                        }
                    }
                    ap += aw
                }
                at++
            }
            $(".cld-rmd-inner .cld-rmd-blocks-container").append(ap);
            $(".cld-rmd-inner .cld-rmd-fetching-container").hide();
            $(".cld-rmd-suggest-login").hide();
            $(".cld-rmd-text").fadeIn("slow");
            $(".cld-rmd-navigator").fadeIn("slow");
            $(".cld-rmd-frd-container").unbind("click").click(function () {
                P(this)
            })
        }
    }

    function F(ap) {
        var aq = null;
        if (ap != null) {
            aq = ap
        } else {
            aq = $(".cld-name-input")
        }
        console.log("hereinitname");
        j(aq)
    }

    function j(ar) {
        console.log("hereinit");
        $(".modal-container").hide();
        $("#calendar-container").show();
        $(".cld-about-container .cld-about-inner").fadeOut("slow");
        $(".cld-rmd").show();
        var at = $.cookie("fbLoginID");
        var ap = $.cookie("user_name_usr");
        var aq = $.cookie("user_id_usr");
        gvt.calendar.bindEvents();
        if (aq !== "" && aq !== null && aq !== undefined && aq !== "undefined" && !ah) {
            $.ajax({url: "/ajax/getCalendar", cache: false, type: "POST", dataType: "json", data: "userID=" + aq, complete: function (au) {
                if (au.responseText !== undefined && au.responseText !== "" && au.responseText !== null && au.responseText !== "600" && au.responseText !== 600 && au.responseText !== "undefined") {
                    var av = jQuery.parseJSON(au.responseText);
                    $(".cld-calendar-cards-container .default").remove();
                    $.each(av, function (ax, ay) {
                        var aw = {};
                        aw.name = ay.name;
                        aw.id = ay.fbID;
                        aw.relationship = ay.relationship;
                        aw.occasion = ay.occasion;
                        aw.date = ay.day + "/" + ay.month;
                        W(aw, "", true);
                        ah = true;
                        N = false
                    });
                    Z(ar);
                    $(".cld-title p").text("Here is your calendar, you can modify existing entries or also add new ones")
                } else {
                    Z(ar)
                }
            }})
        } else {
            Z(ar)
        }
        if (M !== "") {
            an(M);
            M = ""
        }
    }

    function Z(ar) {
        var au = $.cookie("fbLoginID");
        var ap = $.cookie("user_name_usr");
        var aq = $.cookie("user_id_usr");
        $(".cld-option-container").each(function () {
            if (!$(this).hasClass("cld-add-card")) {
                var av = ak(this);
                if (av.id !== "" && av.id !== null && av.id !== undefined && av.id !== "undefined") {
                    u[av.id] = false
                }
            }
        });
        if (au !== "" && au !== null && au !== undefined && au !== "undefined") {
            if (!ag) {
                if (ar) {
                    console.log("no friends");
                    gvt.FbGlobal.getUserFriends(null, null, ar)
                } else {
                    gvt.FbGlobal.getUserFriends()
                }
            } else {
                R();
                if (ar) {
                    console.log("freinds");
                    ar.focus()
                }
            }
            $(".cld-rmd-suggest-login").hide();
            $(".cld-rmd-fetching-container").fadeIn("slow")
        } else {
            if (ap !== "" && ap !== null && ap !== undefined && ap !== "undefined") {
                var at = $.cookie("user_name_usr");
                at = at.split(" ")[0];
                at = at.replace('"', "");
                $(".cld-rmd-name-placeholder").html(at);
                $(".cld-rmd-suggest-login").fadeIn("slow");
                $(".cld-rmd-fetching-container").fadeOut("slow")
            } else {
            }
        }
    }

    function E() {
        if (!i) {
            $.each(o, function (ap, aq) {
                W(aq, "", true)
            })
        }
    }

    function V(ar) {
        var aq = $.cookie("user_name_usr");
        var av = $.cookie("fbLoginID");
        var ap = $.cookie("user_name_usr");
        if (ap !== "" && ap !== null && ap !== undefined && ap !== "undefined" && !aj) {
            var at = $.cookie("user_name_usr");
            at = at.split(" ")[0];
            at = at.replace('"', "");
            $(".cld-about-container .cld-about-inner").hide();
            $(".cld-rmd-name-placeholder").html(at);
            $(".cld-rmd").fadeIn("slow");
            if (!$(".cld-rmd-fetching-container").is(":visible")) {
                $(".cld-rmd-suggest-login").fadeIn("slow")
            }
        }
        if (aq === "" || aq === null) {
            var au = "You need to Login to be able to save your calendar";
            M = ar;
            showLoginModal(au, j)
        } else {
            return true
        }
    }

    function an(ar, at) {
        var aq = "";
        if ($(ar).hasClass("cld-option-container")) {
            aq = $(ar)
        } else {
            aq = $(ar).parents(".cld-option-container")
        }
        $(aq).find(".cld-option-success").slideUp("fast");
        var ap = am(aq, false);
        if (ap && V(ar)) {
            m(aq);
            $(aq).removeClass("fail");
            if ($(aq).find(".cld-option-oca .dropdown-button-text").html() === "Birthday") {
                $(aq).find(".cld-option-suggest .cld-suggest-text span").text("Anniversary");
                $(aq).find(".cld-option-suggest").slideDown("slow").delay("3000").slideUp("slow")
            }
            if ($(aq).find(".cld-option-oca .dropdown-button-text").html() === "Anniversary") {
                $(aq).find(".cld-option-suggest .cld-suggest-text span").text("Birthday");
                $(aq).find(".cld-option-suggest").slideDown("slow").delay("3000").slideUp("slow")
            }
        } else {
            $(aq).find(".cld-option-success").hide();
            $(aq).find(".cld-option-fail").slideDown("fast");
            $(aq).addClass("fail")
        }
    }

    function y(aw, av) {
        if (!av) {
            av = ""
        }
        u[aw] = true;
        var at = jsonResponse[aw]["n"];
        var ar = "";
        if (jsonResponse[aw]["b"] !== "" && jsonResponse[aw]["b"] !== null && jsonResponse[aw]["b"] !== undefined) {
            ar = jsonResponse[aw]["b"];
            ar = ar.split("/");
            ar = ar[1] + "/" + ar[0]
        }
        var aq = "Birthday";
        var au = "https://graph.facebook.com/" + aw + "/picture?type=large&width=70&height=70";
        var ap = {id: aw, name: at, relationship: av, date: ar, occasion: aq, profilePic: au};
        return ap
    }

    function x(ar, aq) {
        if (!aq) {
            aq = ""
        }
        var ap = y(ar, aq);
        html = '<div class="cld-rmd-frd-container" data-id="' + ap.id + '" data-rel="' + ap.relationship + '"><div class="cld-rmd-pic"><img src="' + ap.profilePic + '"></div><div class="cld-rmd-name">' + ap.name + "</div></div>";
        return html
    }

    (function t() {
        if ($(".cld-calendar-count") && $(".cld-calendar-count").length) {
            p = $(".cld-calendar-count").html();
            if (p < 0) {
                gvt.calendar.bindEvents()
            } else {
                N = false;
                ah = true;
                ae = false;
                gvt.calendar.bindEvents();
                $(".cld-title p").text("Here is your calendar, you can modify existing entries or also add new ones")
            }
        }
        i = $(".cld-calendar-finalize").html();
        if (i === "true" || i === true) {
            i = true
        } else {
            i = false
        }
        $("body").on("fetchedFbFriends", function (aq, ap) {
            ag = true;
            if (ap) {
                console.log(ap);
                F(ap)
            } else {
                console.log("true");
                j()
            }
        });
        gvt.calendar.generateFilterJson()
    })();
    $(".cld-fb-login").unbind("click").click(function () {
        gvt.FbGlobal.facebookLogin(j)
    });
    $(".cld-giveter-login").unbind("click").click(function () {
        showLoginModal("", j)
    });
    $(".cld-add-card").unbind("click").click(function () {
        $(this).after(gvt.calendar.generateCldOptionContainer());
        gvt.calendar.bindEvents()
    });
    $(".cld-login-button").unbind("click").click(function () {
        showLoginModal("", j, $(this))
    });
    $(".cld-save-button").unbind("click").click(function () {
        ao()
    });
    $(".cld-button-yes").unbind("click").click(function () {
        $(".cld-option-container.fail").hide().remove();
        $(".cld-error-message").fadeOut("slow");
        G()
    });
    var U = 0;
    $(".cld-rmd-navigator .cld-rmd-nav-next").unbind("click").click(function () {
        $(".cld-rmd-inner .cld-rmd-blocks-container").animate({"margin-top": "-=435px"}, 100)
    });
    $(".cld-rmd-navigator .cld-rmd-nav-prev").unbind("click").click(function () {
        $(".cld-rmd-inner .cld-rmd-blocks-container").animate({"margin-top": "+=435px"}, 100)
    });
    $(".shr-twitter").unbind("click").click(function () {
        gvt.TwGlobal.unbind("click").share("Check out this gift I discovered on giveter.com", document.location.href)
    });
    $(".shr-facebook").click(function () {
        gvt.FbGlobal.share("", document.location.href)
    });
    $(".shr-twitter").tooltip({animation: true, html: false, placement: "bottom", selector: false, title: "share on twitter", trigger: "hover"});
    $(".shr-pinterest").tooltip({animation: true, html: false, placement: "bottom", selector: false, title: "share on pinterest", trigger: "hover"});
    $(".shr-facebook").tooltip({animation: true, html: false, placement: "bottom", selector: false, title: "share on facebook", trigger: "hover"});
    $(".sht-mail-icon").tooltip({animation: true, html: false, placement: "bottom", selector: false, title: "share via email", trigger: "hover"});
    var O = '<div class="fb-name-suggest-tooltip"><div class="tooltip-text"><img src="/public/images/buttons/fb-white-nobg.png">Recommend from facebook</div><div class="tooltip-arrow"></div></div>';
    var Y = $(O);

    function I(au) {
        gvt.calendar.wandBirthday = [];
        gvt.calendar.wandAnniversary = [];
        gvt.calendar.birthdayCtr = 0;
        gvt.calendar.anniversaryCtr = 0;
        var ap = $(au).attr("data-id");
        var at = "";
        var ar = "";
        var av = "";
        var aq = $(au).find(".cld-name-input").val();
        if (aq !== undefined && aq !== "") {
            aq = aq.split(" ")[0]
        }
        $(".fb-wand-container").html("");
        $(".fb-wand-modal-loader").show();
        $(".fb-wand-modal").modal("show");
        $.ajax({url: "/ajax/getImpDates", cache: false, type: "POST", data: "accessToken=" + gvt.FbGlobal.accessToken + "&fbID=" + gvt.FbGlobal.fbId + "&fbIDF=" + ap, dataType: "json", complete: function (ax) {
            var aB = jQuery.parseJSON(ax.responseText);
            av += '<div class="fb-wand-title" >Posts on ' + aq + "'s Timeline by others</div>";
            for (var aD in aB) {
                if (aB.hasOwnProperty(aD) && aB[aD].hasOwnProperty("data")) {
                    ar = aB[aD]["data"]["key"].split("_")[0];
                    var ay = ar.split("/")[0];
                    var aF = ab(ay);
                    ar = ar.split("/")[1];
                    var aC = parseInt(ay) + 1;
                    var aA = ar + "/" + aC;
                    at = aB[aD]["data"]["key"].split("_")[1];
                    if (at == "1") {
                        at = "birthday"
                    }
                    if (at == "2") {
                        at = "anniversary"
                    }
                    av += '<div class="post-container" ><div class="post-date" >' + ar + "<br>" + aF + '</div><div class="post-inner-container" ><div class="post-info" ><div class="post-info-text" >' + aB[aD]["c"] + " people wished " + aq + " for his " + at + '</div><div class="wand-add-date" key=' + aA + " >Add to calendar</div></div>";
                    if (at == "birthday") {
                        av += '<div class="post-each" ><div class="post-image post-image-b" ></div><div class="post-data" ><div class="post-message post-message-b" ></div></div><div class="post-nav"><div class="prev prev-b"><i class="icon-arrow-left"></i></div><div class="next next-b"><i class="icon-arrow-right"></i></div></div>';
                        "</div>"
                    } else {
                        if (at == "anniversary") {
                            av += '<div class="post-each" ><div class="post-image post-image-a" ></div><div class="post-data" ><div class="post-message post-message-a" ></div></div><div class="post-nav"><div class="prev prev-a"><i class="icon-arrow-left"></i></div><div class="next next-a"><i class="icon-arrow-right"></i></div></div>';
                            "</div>"
                        }
                    }
                    av += "</div></div>";
                    for (var aE in aB[aD]["data"]["strm"]) {
                        if (at == "birthday") {
                            var az = {};
                            az.uid = aB[aD]["data"]["strm"][aE]["actor_id"];
                            az.msg = aB[aD]["data"]["strm"][aE]["message"];
                            gvt.calendar.wandBirthday[gvt.calendar.birthdayCtr++] = az
                        } else {
                            if (at == "anniversary") {
                                var aw = {};
                                aw.uid = aB[aD]["data"]["strm"][aE]["actor_id"];
                                aw.msg = aB[aD]["data"]["strm"][aE]["message"];
                                gvt.calendar.wandAnniversary[gvt.calendar.anniversaryCtr++] = aw
                            }
                        }
                    }
                }
            }
            $(".fb-wand-container").html(av);
            $(".next-a, .prev-a").unbind("click").click(function () {
                K(parseInt($(this).attr("key")))
            });
            $(".next-b, .prev-b").unbind("click").click(function () {
                X(parseInt($(this).attr("key")))
            });
            $(".wand-add-date").unbind("click").click(function () {
                q(au, $(this).attr("key"))
            });
            if (gvt.calendar.wandBirthday && gvt.calendar.wandBirthday.length > 0) {
                X(0)
            }
            if (gvt.calendar.wandAnniversary && gvt.calendar.wandAnniversary.length > 0) {
                K(0)
            }
            $(".fb-wand-modal-loader").hide()
        }})
    }

    function X(ap) {
        if (ap == 0) {
            $(".prev-b").hide()
        }
        if (ap > 0) {
            $(".prev-b").show()
        }
        if (ap == gvt.calendar.birthdayCtr - 1) {
            $(".next-b").hide()
        }
        if (ap < gvt.calendar.birthdayCtr - 1) {
            $(".next-b").show()
        }
        $(".next-b").attr("key", parseInt(ap + 1));
        $(".prev-b").attr("key", parseInt(ap - 1));
        $(".post-image-b").html('<img src="http://graph.facebook.com/' + gvt.calendar.wandBirthday[ap].uid + '/picture">');
        $(".post-message-b").text(gvt.calendar.wandBirthday[ap].msg)
    }

    function K(ap) {
        if (ap == 0) {
            $(".prev-a").hide()
        }
        if (ap > 0) {
            $(".prev-a").show()
        }
        if (ap == gvt.calendar.anniversaryCtr - 1) {
            $(".next-a").hide()
        }
        if (ap < gvt.calendar.anniversaryCtr - 1) {
            $(".next-a").show()
        }
        $(".next-a").attr("key", parseInt(ap + 1));
        $(".prev-a").attr("key", parseInt(ap - 1));
        $(".post-image-a").html('<img src="http://graph.facebook.com/' + gvt.calendar.wandAnniversary[ap].uid + '/picture">');
        $(".post-message-a").text(gvt.calendar.wandAnniversary[ap].msg)
    }

    function ab(ap) {
        if (ap == "11") {
            return"Dec"
        } else {
            if (ap == "10") {
                return"Nov"
            } else {
                if (ap == "9") {
                    return"Oct"
                } else {
                    if (ap == "8") {
                        return"Sep"
                    } else {
                        if (ap == "7") {
                            return"Aug"
                        } else {
                            if (ap == "6") {
                                return"Jul"
                            } else {
                                if (ap == "5") {
                                    return"Jun"
                                } else {
                                    if (ap == "4") {
                                        return"May"
                                    } else {
                                        if (ap == "3") {
                                            return"Apr"
                                        } else {
                                            if (ap == "2") {
                                                return"Mar"
                                            } else {
                                                if (ap == "1") {
                                                    return"Feb"
                                                } else {
                                                    if (ap == "0") {
                                                        return"Jan"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function Q(au) {
        var ap = $(au).attr("data-id");
        if (gvt.FbGlobal.fbId === null || gvt.FbGlobal.fbId === undefined || gvt.FbGlobal.fbId === "") {
            return
        }
        if (ap === null || ap === undefined || ap === "" || ap === "undefined") {
            return
        }
        var at = $(au).find(".cld-name-input").val();
        if (at === "" || at === null || at === undefined) {
            return
        }
        var av = "";
        var ar = $(au).find(".cld-option-oca .dropdown-button-text").html();
        if (ar !== "" && ar !== null && ar !== "occasion") {
            av = ar
        } else {
            av = "birthday"
        }
        var aq = '<div class="cld-wand-container" ><div class="cld-wand">Find ' + av + '<i class="icon-search"></i></div></div>';
        $(au).append(aq);
        $(".cld-wand-container").unbind("click").click(function () {
            I($(this).parent())
        })
    }

    function H(ap) {
        $(ap).find(".cld-wand-container").remove()
    }

    function q(ap, aq) {
        $(ap).find(".cld-date-input").val(aq);
        an(ap);
        $(".fb-wand-modal").modal("hide")
    }
});
$(document).ready(function () {
    if ($(".fullPageImage") && $(".fullPageImage").length) {
        $(".fullPageImage").html("");
        $(function () {
            $.vegas({src: "/public/images/background/background-latest.jpg", loading: false})
        })
    }
    if ($(".hm-sc") && $(".hm-sc").length) {
    }
    if ($(".hpd-container") && $(".hpd-container").length) {
        var a = $(".hpd-container").css("height");
        $(document).scroll(function (g) {
            if ($(".hpd-toggle").hasClass("hpd-auto")) {
                $(".hpd-container").animate({height: "310px"}, {duration: 300});
                $(".hpd-toggle").removeClass("hpd-auto");
                $(".hpd-toggle").addClass("hpd-more")
            }
        });
        $(".hpd-toggle").unbind("click").click(function () {
            if ($(".hpd-toggle").hasClass("hpd-less")) {
                $(".hpd-container").animate({height: "310px"}, {duration: 300});
                $(".hpd-toggle").removeClass("hpd-less");
                $(".hpd-toggle").addClass("hpd-more");
                $(".hpd-toggle").text("+ Read More")
            } else {
                if ($(".hpd-toggle").hasClass("hpd-more")) {
                    $(".hpd-container").animate({height: a}, {duration: 300});
                    $(".hpd-toggle").removeClass("hpd-more");
                    $(".hpd-toggle").addClass("hpd-less");
                    $(".hpd-toggle").text("- Read Less")
                }
            }
        })
    }
    $(".fb-feature-recipient-name").unbind("click").click(function (g) {
        g.stopPropagation()
    });
    $(".fb-feature-recipient-name").focus(function (g) {
        $(".fb-feature-friends-container").fadeIn(200)
    }).blur(function () {
    });
    $(".fb-feature-recipient-name").keyup(function () {
        d($(".fb-feature-recipient-name").val())
    });
    function e() {
        $(".fb-feature-initial").hide();
        $(".fb-feature-final").show();
        b();
        f()
    }

    $("body").on("fetchedFbFriends", function () {
        e()
    });
    $(".fb-nlighter-button").click(function () {
        gvt.FbGlobal.facebookLogin(function () {
            gvt.FbGlobal.getUserFriends(e)
        })
    });
    function c(g, i) {
        resetFbLikesModal();
        initFbLikesModal();
        $(".fb-likes-load").hide();
        $(".fb-likes-one, .fb-likes-two").hide();
        $(".fbl-recipient").text(g.split(" ")[0]);
        $(".fb-likes-three").show();
        var h = $("<input>").attr("type", "hidden").attr("name", "accessToken").val(gvt.FbGlobal.accessToken);
        $("#fblForm").append(h);
        $("#fblForm").attr("key", i);
        $(".fb-likes-modal").modal("show")
    }

    function b() {
        $.ajax({url: "/ajax/getFriendsBdays", cache: false, type: "POST", dataType: "json", complete: function (g) {
            var h = jQuery.parseJSON(g.responseText);
            var k = "";
            var j = 0;
            for (var i in h) {
                k += '<div class="fb-upcoming-each" data-uid="' + h[i].myHashMap.fbid + '" name="' + h[i].myHashMap.name + '" ><img src="http://graph.facebook.com/' + h[i].myHashMap.fbid + '/picture"></div>';
                j++;
                if (j == 12) {
                    break
                }
            }
            $(".fb-feature-upcoming-container").html(k);
            $(".fb-plugin-custom").fadeOut(200, function () {
                $(".fb-feature-upcoming-container").fadeIn(200)
            });
            $(".fb-upcoming-each").unbind("click").click(function () {
                c($(this).attr("name"), $(this).data("uid"))
            })
        }})
    }

    function f() {
        var i = gvt.FbGlobal.userFriends;
        var g = "";
        for (var h in i) {
            g += '<div class="fb-feature-friend-each last" name="' + i[h]["n"] + '" data-uid="' + h + '" name="' + i[h]["n"] + '" ><div class="name" >' + i[h]["n"] + "</div></div>"
        }
        $(".fb-feature-friends-container").html(g);
        $(".fb-feature-friend-each").unbind("click").click(function () {
            $(".fb-feature-recipient-name").val($(this).attr("name"));
            c($(this).attr("name"), $(this).data("uid"))
        })
    }

    function d(h) {
        var i = gvt.FbGlobal.userFriends;
        if (h == "") {
            $(".fb-feature-friend-each").show();
            return
        }
        $(".fb-feature-friend-each").hide();
        for (var g in i) {
            if (i[g]["n"]) {
                if (i[g]["n"].toLowerCase().search(h.toLowerCase()) >= 0) {
                    $(".fb-feature-friend-each[data-uid='" + g + "']").show()
                }
            }
        }
    }

    $(".showcase-feature").click(function () {
        _gaq.push(["_trackEvent", "homePageFeature", ($(this).data("log"))])
    })
});
$(document).ready(function () {
    $(".datepicker-ven").datepicker({format: "yyyy-mm-dd"})
});
function feedbackForm() {
    $(".feedback-form").submit(function () {
        if ($(".feedback-form input[name=feedback-name-input]").val() === "") {
            $(".feed-error-name").css("display", "block")
        }
        if ($(".feedback-form input[name=feedback-email-input]").val() === "" || !isValidEmailAddress($(".feedback-form input[name=feedback-email-input]").val())) {
            $(".feed-error-email").css("display", "block")
        }
        if ($(".feedback-form textarea[name=feedback-textarea]").val() === "") {
            $(".feed-error-text").css("display", "block")
        }
        var c = encodeURIComponent($(this).children("input[name=feedback-email-input]").val());
        var b = encodeURIComponent($(this).children("input[name=feedback-name-input]").val());
        var a = encodeURIComponent($(this).children("textarea[name=feedback-textarea]").val());
        if (($(".feedback-form input[name=feedback-name-input]").val() !== "") && ($(".feedback-form input[name=feedback-email-input]").val() !== "" || !isValidEmailAddress($(".feedback-form input[name=feedback-email-input]").val())) && ($(".feedback-form textarea[name=feedback-textarea]").val() !== "")) {
            $(".feedback-form").hide();
            $(".feed-ajax-loader").show();
            $.ajax({url: "/ajax/saveFeedback", cache: false, type: "POST", data: "n=" + b + "&e=" + c + "&f=" + a, complete: function () {
                $(".feed-ajax-loader").hide();
                $(".feedback-reply").show()
            }})
        }
        $(".feedback-form").unbind("submit").submit(function () {
            return false
        });
        return false
    });
    $("input[name=feedback-name-input]").focus(function () {
        $(".feed-error-name").css("display", "none")
    });
    $("input[name=feedback-email-input]").focus(function () {
        $(".feed-error-email").css("display", "none")
    });
    $("textarea[name=feedback-textarea]").focus(function () {
        $(".feed-error-text").css("display", "none")
    })
};
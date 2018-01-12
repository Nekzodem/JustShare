function import$(t, e) {
    var i = {}.hasOwnProperty;
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return t
}
var slice$ = [].slice;
! function() {
    var t, e, i, r;
    return t = {
        head: function(t) {
            return '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="' + t + '">'
        },
        wrap: function(t) {
            return "data:image/svg+xml;base64," + btoa(t)
        },
        gradient: function(t, e) {
            var i, r, a, l, n, h, s, d, o, u;
            for (null == t && (t = 45), null == e && (e = 1), i = slice$.call(arguments, 2), r = [this.head("0 0 100 100")], a = 4 * i.length + 1, t = t * Math.PI / 180, l = Math.pow(Math.cos(t), 2), n = Math.sqrt(l - Math.pow(l, 2)), t > .25 * Math.PI && (n = Math.pow(Math.sin(t), 2), l = Math.sqrt(n - Math.pow(n, 2))), h = 100 * l, s = 100 * n, r.push('<defs><linearGradient id="gradient" x1="0" x2="' + l + '" y1="0" y2="' + n + '">'), d = 0; a > d; ++d) o = d, u = 100 * o / (a - 1), r.push('<stop offset="' + u + '%" stop-color="' + i[o % i.length] + '"/>');
            return r.push(['</linearGradient></defs>\n<rect x="0" y="0" width="400" height="400" fill="url(#gradient)">\n<animateTransform attributeName="transform" type="translate" from="-' + h + ",-" + s + '"\nto="0,0" dur="' + e + 's" repeatCount="indefinite"/></rect></svg>'].join("")), this.wrap(r.join(""))
        },
        stripe: function(t, e, i) {
            var r, a;
            return null == t && (t = "#b4b4b4"), null == e && (e = "#e6e6e6"), null == i && (i = 1), r = [this.head("0 0 100 100")], r = r.concat(['<rect fill="' + e + '" width="100" height="100"/>', "<g><g>", function() {
                var e, i = [];
                for (e = 0; 13 > e; ++e) a = e, i.push('<polygon fill="' + t + '" ' + ('points="' + (-90 + 20 * a) + ",100 " + (-100 + 20 * a) + ",") + ("100 " + (-60 + 20 * a) + ",0 " + (-50 + 20 * a) + ',0 "/>'));
                return i
            }().join(""), '</g><animateTransform attributeName="transform" type="translate" ', 'from="0,0" to="20,0" dur="' + i + 's" repeatCount="indefinite"/></g></svg>'].join("")), this.wrap(r)
        },
        bubble: function(t, e, i, r, a, l) {
            var n, h, s, d, o, u, f;
            for (null == t && (t = "#39d"), null == e && (e = "#9cf"), null == i && (i = 15), null == r && (r = 1), null == a && (a = 6), null == l && (l = 1), n = [this.head("0 0 200 200"), '<rect x="0" y="0" width="200" height="200" fill="' + t + '"/>'], h = 0; i > h; ++h) s = h, d = -(s / i) * r, o = 184 * Math.random() + 8, u = (.7 * Math.random() + .3) * a, f = r * (1 + .5 * Math.random()), n.push(['<circle cx="' + o + '" cy="0" r="' + u + '" fill="none" stroke="' + e + '" stroke-width="' + l + '">', '<animate attributeName="cy" values="190;-10" times="0;1" ', 'dur="' + f + 's" begin="' + d + 's" repeatCount="indefinite"/>', "</circle>", '<circle cx="' + o + '" cy="0" r="' + u + '" fill="none" stroke="' + e + '" stroke-width="' + l + '">', '<animate attributeName="cy" values="390;190" times="0;1" ', 'dur="' + f + 's" begin="' + d + 's" repeatCount="indefinite"/>', "</circle>"].join(""));
            return this.wrap(n.join("") + "</svg>")
        }
    }, e = {
        queue: {},
        running: !1,
        main: function(t) {
            var e, i, r, a, l, n, h = this;
            e = !1, i = [];
            for (r in a = this.queue) l = a[r], n = l(t), n || i.push(l), e = e || n;
            for (r in a = this.queue) l = a[r], i.indexOf(l) >= 0 && delete this.queue[r];
            return e ? requestAnimationFrame(function(t) {
                return h.main(t)
            }) : this.running = !1
        },
        add: function(t, e) {
            var i = this;
            return this.queue[t] || (this.queue[t] = e), this.running ? void 0 : (this.running = !0, requestAnimationFrame(function(t) {
                return i.main(t)
            }))
        }
    }, i = {
        rainbow: {
            type: "stroke",
            path: "M10 10L90 10",
            stroke: "data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)"
        },
        energy: {
            type: "fill",
            path: "M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",
            stroke: "#f00",
            fill: "data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)",
            "fill-dir": "ltr",
            "fill-background": "#444",
            "fill-background-extrude": 1
        },
        stripe: {
            type: "fill",
            path: "M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",
            stroke: "#f00",
            fill: "data:ldbar/res,stripe(#25b,#58e,1)",
            "fill-dir": "ltr",
            "fill-background": "#ddd",
            "fill-background-extrude": 1
        },
        text: {
            type: "fill",
            img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20"><text x="35" y="10" text-anchor="middle" dominant-baseline="central" font-family="arial">LOADING</text></svg>',
            "fill-background-extrude": 1.3,
            "pattern-size": 100,
            "fill-dir": "ltr",
            "img-size": "70,20"
        },
        line: {
            type: "stroke",
            path: "M10 10L90 10",
            stroke: "#25b",
            "stroke-width": 3,
            "stroke-trail": "#ddd",
            "stroke-trail-width": 1
        },
        fan: {
            type: "stroke",
            path: "M10 90A40 40 0 0 1 90 90",
            "fill-dir": "btt",
            fill: "#25b",
            "fill-background": "#ddd",
            "fill-background-extrude": 3,
            "stroke-dir": "normal",
            stroke: "#25b",
            "stroke-width": "3",
            "stroke-trail": "#ddd",
            "stroke-trail-width": .5
        },
        circle: {
            type: "stroke",
            path: "M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10",
            "fill-dir": "btt",
            fill: "#25b",
            "fill-background": "#ddd",
            "fill-background-extrude": 3,
            "stroke-dir": "normal",
            stroke: "#25b",
            "stroke-width": "3",
            "stroke-trail": "#ddd",
            "stroke-trail-width": .5
        },
        bubble: {
            type: "fill",
            path: "M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10",
            "fill-dir": "btt",
            fill: "data:ldbar/res,bubble(#39d,#cef)",
            "pattern-size": "150",
            "fill-background": "#ddd",
            "fill-background-extrude": 2,
            "stroke-dir": "normal",
            stroke: "#25b",
            "stroke-width": "3",
            "stroke-trail": "#ddd",
            "stroke-trail-width": .5
        }
    }, window.ldBar = r = function(r, a) {
        var l, n, h, s, d, o, u, f, c, g, p, w, m, k, b, x, y, v, M, A, q, C, S, B, L = this;
        return null == a && (a = {}), l = {
            xlink: "http://www.w3.org/1999/xlink"
        }, n = "string" == typeof r ? document.querySelector(r) : r, (h = n.ldBar) ? h : (s = n.getAttribute("class") || "", ~s.indexOf("ldBar") || n.setAttribute("class", s + " ldBar"), d = "ldBar-" + Math.random().toString(16).substring(2), d = {
            key: d,
            clip: d + "-clip",
            filter: d + "-filter",
            pattern: d + "-pattern",
            mask: d + "-mask",
            maskPath: d + "-mask-path"
        }, o = function(t, e) {
            var i, r;
            t = u(t);
            for (i in e) r = e[i], "attr" !== i && t.appendChild(o(i, r || {}));
            return t.attrs(e.attr || {}), t
        }, u = function(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }, f = document.body.__proto__.__proto__.__proto__, f.text = function(t) {
            return this.appendChild(document.createTextNode(t))
        }, f.attrs = function(t) {
            var e, i, r, a = [];
            for (e in t) i = t[e], r = /([^:]+):([^:]+)/.exec(e), a.push(r && l[r[1]] ? this.setAttributeNS(l[r[1]], e, i) : this.setAttribute(e, i));
            return a
        }, f.styles = function(t) {
            var e, i, r = [];
            for (e in t) i = t[e], r.push(this.style[e] = i);
            return r
        }, f.append = function(t) {
            var e;
            return this.appendChild(e = document.createElementNS("http://www.w3.og/2000/svg", t))
        }, f.attr = function(t, e) {
            return null != e ? this.setAttribute(t, e) : this.getAttribute(t)
        }, c = {
            type: "stroke",
            img: "",
            path: "M10 10L90 10",
            "fill-dir": "btt",
            fill: "#25b",
            "fill-background": "#ddd",
            "fill-background-extrude": 3,
            "pattern-size": null,
            "stroke-dir": "normal",
            stroke: "#25b",
            "stroke-width": "3",
            "stroke-trail": "#ddd",
            "stroke-trail-width": .5,
            duration: 1,
            easing: "linear",
            value: 0,
            "img-size": null
        }, c.preset = n.attr("data-preset") || a.preset, null != c.preset && import$(c, i[c.preset]), function() {
            var t, e = [];
            for (g in t = c) p = t[g], e.push({
                k: g,
                v: p
            });
            return e
        }().map(function(t) {
            return [t.k, n.attr("data-" + t.k)]
        }).filter(function(t) {
            return t[1]
        }).map(function(t) {
            return c[t[0]] = t[1]
        }), c.img && (c.path = null), import$(c, a), w = "stroke" === c.type, m = function(e) {
            var i, r;
            return i = /data:ldbar\/res,([^()]+)\(([^)]+)\)/, r = i.exec(e), r ? r = t[r[1]].apply(t, r[2].split(",")) : e
        }, c.fill = m(c.fill), c.stroke = m(c.stroke), k = {
            attr: {
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                preserveAspectRatio: "xMidYMid",
                width: "100%",
                height: "100%"
            },
            defs: {
                filter: {
                    attr: {
                        id: d.filter,
                        x: -1,
                        y: -1,
                        width: 3,
                        height: 3
                    },
                    feMorphology: {
                        attr: {
                            operator: +c["fill-background-extrude"] >= 0 ? "dilate" : "erode",
                            radius: Math.abs(+c["fill-background-extrude"])
                        }
                    },
                    feColorMatrix: {
                        attr: {
                            values: "0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0",
                            result: "cm"
                        }
                    }
                },
                mask: {
                    attr: {
                        id: d.mask
                    },
                    image: {
                        attr: {
                            "xlink:href": c.img,
                            filter: "url(#" + d.filter + ")",
                            x: 0,
                            y: 0,
                            width: 100,
                            height: 100,
                            preserveAspectRatio: "xMidYMid"
                        }
                    }
                },
                g: {
                    mask: {
                        attr: {
                            id: d.maskPath
                        },
                        path: {
                            attr: {
                                d: c.path || "",
                                fill: "#fff",
                                stroke: "#fff",
                                filter: "url(#" + d.filter + ")"
                            }
                        }
                    }
                },
                clipPath: {
                    attr: {
                        id: d.clip
                    },
                    rect: {
                        attr: {
                            "class": "mask",
                            fill: "#000"
                        }
                    }
                },
                pattern: {
                    attr: {
                        id: d.pattern,
                        patternUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 300,
                        height: 300
                    },
                    image: {
                        attr: {
                            x: 0,
                            y: 0,
                            width: 300,
                            height: 300
                        }
                    }
                }
            }
        }, b = o("svg", k), x = document.createElement("div"), x.setAttribute("class", "ldBar-label"), n.appendChild(b), n.appendChild(x), y = [0, 0], v = 0, this.fit = function() {
            var t, e, i;
            return t = y[1].getBBox(), e = 1.5 * Math.max.apply(null, ["stroke-width", "stroke-trail-width", "fill-background-extrude"].map(function(t) {
                return c[t]
            })), b.attrs({
                viewBox: [t.x - e, t.y - e, t.width + 2 * e, t.height + 2 * e].join(" ")
            }), n.style.width || n.styles({
                width: t.width + 2 * e + "px"
            }), n.style.height || n.styles({
                height: t.height + 2 * e + "px"
            }), i = y[0].querySelector("rect"), i ? i.attrs({
                x: t.x - e,
                y: t.y - e,
                width: t.width + 2 * e,
                height: t.height + 2 * e
            }) : void 0
        }, c.path ? (y[0] = w ? o("g", {
            path: {
                attr: {
                    d: c.path,
                    fill: "none",
                    "class": "baseline"
                }
            }
        }) : o("g", {
            rect: {
                attr: {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    mask: "url(#" + d.maskPath + ")",
                    fill: c["fill-background"],
                    "class": "frame"
                }
            }
        }), b.appendChild(y[0]), y[1] = o("g", {
            path: {
                attr: {
                    d: c.path,
                    "class": w ? "mainline" : "solid",
                    "clip-path": "fill" === c.type ? "url(#" + d.clip + ")" : ""
                }
            }
        }), b.appendChild(y[1]), M = y[0].querySelector(w ? "path" : "rect"), A = y[1].querySelector("path"), w && A.attrs({
            fill: "none"
        }), q = b.querySelector("pattern image"), C = new Image, C.addEventListener("load", function() {
            var t, e;
            return t = (e = c["pattern-size"]) ? {
                width: +e,
                height: +e
            } : C.width && C.height ? {
                width: C.width,
                height: C.height
            } : {
                width: 300,
                height: 300
            }, b.querySelector("pattern").attrs({
                width: t.width,
                height: t.height
            }), q.attrs({
                width: t.width,
                height: t.height
            })
        }), /.+\..+|^data:/.exec(w ? c.stroke : c.fill) && (C.src = w ? c.stroke : c.fill, q.attrs({
            "xlink:href": C.src
        })), w && (M.attrs({
            stroke: c["stroke-trail"],
            "stroke-width": c["stroke-trail-width"]
        }), A.attrs({
            "stroke-width": c["stroke-width"],
            stroke: /.+\..+|^data:/.exec(c.stroke) ? "url(#" + d.pattern + ")" : c.stroke
        })), c.fill && !w && A.attrs({
            fill: /.+\..+|^data:/.exec(c.fill) ? "url(#" + d.pattern + ")" : c.fill
        }), v = A.getTotalLength(), this.fit(), this.inited = !0) : c.img && (c["img-size"] ? (S = c["img-size"].split(","), B = {
            width: +S[0],
            height: +S[1]
        }) : B = {
            width: 100,
            height: 100
        }, y[0] = o("g", {
            rect: {
                attr: {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    mask: "url(#" + d.mask + ")",
                    fill: c["fill-background"]
                }
            }
        }), b.querySelector("mask image").attrs({
            width: B.width,
            height: B.height
        }), y[1] = o("g", {
            image: {
                attr: {
                    width: B.width,
                    height: B.height,
                    x: 0,
                    y: 0,
                    preserveAspectRatio: "xMidYMid",
                    "clip-path": "fill" === c.type ? "url(#" + d.clip + ")" : "",
                    "xlink:href": c.img,
                    "class": "solid"
                }
            }
        }), C = new Image, C.addEventListener("load", function() {
            var t, e;
            return c["img-size"] ? (t = c["img-size"].split(","), e = {
                width: +t[0],
                height: +t[1]
            }) : e = C.width && C.height ? {
                width: C.width,
                height: C.height
            } : {
                width: 100,
                height: 100
            }, b.querySelector("mask image").attrs({
                width: e.width,
                height: e.height
            }), y[1].querySelector("image").attrs({
                width: e.width,
                height: e.height
            }), L.fit(), L.set(void 0, !1), L.inited = !0
        }), C.src = c.img, b.appendChild(y[0]), b.appendChild(y[1])), b.attrs({
            width: "100%",
            height: "100%"
        }), this.transition = {
            value: {
                src: 0,
                des: 0
            },
            time: {},
            ease: function(t, e, i, r) {
                return t /= .5 * r, 1 > t ? .5 * i * t * t + e : (t -= 1, .5 * -i * (t * (t - 2) - 1) + e)
            },
            handler: function(t) {
                var e, i, r, a, l, n, h, s, d;
                return null == this.time.src && (this.time.src = t), e = [this.value.des - this.value.src, .001 * (t - this.time.src), +c.duration || 1], i = e[0], r = e[1], a = e[2], x.textContent = l = Math.round(this.ease(r, this.value.src, i, a)), w ? (n = A, h = {
                    "stroke-dasharray": "reverse" === c["stroke-dir"] ? "0 " + v * (100 - l) * .01 + " " + v * l * .01 + " 0" : .01 * l * v + " " + (.01 * (100 - l) * v + 1)
                }) : (s = y[1].getBBox(), d = c["fill-dir"], h = "btt" !== d && d ? "ttb" === d ? {
                    y: s.y,
                    height: s.height * l * .01,
                    x: s.x,
                    width: s.width
                } : "ltr" === d ? {
                    y: s.y,
                    height: s.height,
                    x: s.x,
                    width: s.width * l * .01
                } : "rtl" === d ? {
                    y: s.y,
                    height: s.height,
                    x: s.x + s.width * (100 - l) * .01,
                    width: s.width * l * .01
                } : void 0 : {
                    y: s.y + s.height * (100 - l) * .01,
                    height: s.height * l * .01,
                    x: s.x,
                    width: s.width
                }, n = b.querySelector("rect")), n.attrs(h), r >= a ? (delete this.time.src, !1) : !0
            },
            start: function(t, i, r) {
                var a, l = this;
                return a = this.value, a.src = t, a.des = i, !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length), r && (n.offsetWidth || n.offsetHeight || n.getClientRects().length) ? e.add(d.key, function(t) {
                    return l.handler(t)
                }) : (this.time.src = 0, void this.handler(1e3))
            }
        }, this.set = function(t, e) {
            var i, r;
            return null == e && (e = !0), i = this.value || 0, null != t ? this.value = t : t = this.value, r = this.value, this.transition.start(i, r, e)
        }, this.set(+c.value || 0, !1), this)
    }, window.addEventListener("load", function() {
        return Array.from(document.querySelectorAll(".ldBar")).forEach(function(t) {
            return t.ldBar = new r(t)
        })
    }, !1)
}();
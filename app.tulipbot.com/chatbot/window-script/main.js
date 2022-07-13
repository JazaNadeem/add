(this.webpackJsonplauncher = this.webpackJsonplauncher || []).push([
    [0],
    [, , , function(e, n) {
        e.exports = {
            CDN_URL: BASE_URL + "/chatbot/",
            API_URL: BASE_URL + "/api/bot"
        }
    }, , , , , , function(e, n, t) {
        e.exports = t(16)
    }, , , , , function(e, n, t) {}, function(e, n, t) {}, function(e, n, t) {
        "use strict";
        t.r(n);
        var i = t(0),
            o = t.n(i),
            a = t(5),
            r = t.n(a),
            c = (t(14), t(1)),
            s = t(2),
            u = t(7),
            l = t(6),
            d = t(8),
            w = (t(15), t(3)),
            p = t.n(w),
            g = function(e) {
                function n(e) {
                    var t;
                    Object(c.a)(this, n), (t = Object(u.a)(this, Object(l.a)(n).call(this, e))).state = {
                        text: "...",
                        image: "",
                        theme: "",
                        position: "",
                        render: !0
                    }, window.bp_icon = o.a.createRef(), t.tulipbotWindow = null;
                    var i = function() {
                        function e() {
                            Object(c.a)(this, e)
                        }
                        return Object(s.a)(e, [{
                            key: "closeWindow",
                            value: function() {
                                var e = window.bp_frame.current;
                                e.style.display = "none", e.style.opacity = "0";
                                var n = window.bp_icon.current;
                                n.style.visibility = "visible", n.style.opacity = "1"
                            }
                        }, {
                            key: "openWindow",
                            value: function() {
                                var e = window.bp_icon.current;
                                e.style.visibility = "hidden", e.style.opacity = "0";
                                var n = window.bp_frame.current;
                                n.style.display = "block", n.style.opacity = "1", window.bp_frame.current.contentWindow.postMessage({
                                    origin: "TulipBot",
                                    action: "start"
                                }, "*")
                            }
                        }, {
                            key: "isWindowOpen",
                            value: function() {
                                return "block" === window.bp_frame.current.style.display
                            }
                        }, {
                            key: "isWindowClose",
                            value: function() {
                                return "block" !== window.bp_frame.current.style.display
                            }
                        }]), e
                    }();
                    return window.TulipBot = i, window.addEventListener("message", (function(e) {
                        var n = new window.TulipBot;

                        function t() {
                            n.openWindow()
                        }
                        var i = e.data;
                        if ("TulipBot" === i.origin && "rendered" === i.action) {
                            var o = window.bp_icon.current;
                            if (o.style.visibility = "visible", o.style.opacity = "1", localStorage.getItem("bp-user-close")) switch (window.tulipBotWindowData.data.open_after_close) {
                                case "never":
                                    break;
                                case "always":
                                    setTimeout((function() {
                                        t()
                                    }), 1e3 * window.tulipBotWindowData.data.auto_trigger);
                                    break;
                                case "seconds":
                                    setTimeout((function() {
                                        t()
                                    }), 1e3 * parseInt(String(window.tulipBotWindowData.data.open_after_close_delay), 10));
                                    break;
                                default:
                                    console.log()
                            } else setTimeout((function() {
                                t()
                            }), 1e3 * window.tulipBotWindowData.data.auto_trigger)
                        }
                    })), t
                }
                return Object(d.a)(n, e), Object(s.a)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.tulipbotWindow = new window.TulipBot, fetch(p.a.API_URL + "?apikey=" + localStorage.getItem("FBLjW2EuA2SvucFcfPgp"), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                //                                "X-TULIPBOT-API": localStorage.getItem("FBLjW2EuA2SvucFcfPgp"),
                                //                                "X-PAGE-URL": String(window.location.href)
                            }
                        }).then((function(e) {
                            return e.json()
                        })).then((function(n) {
                            window.tulipBotWindowData = n;
                            var t = n.data;
                            if (!n.data) throw new Error(n.message);
                            e.setState({
                                text: t.action_message,
                                theme: t.theme_color,
                                image: t.avatar,
                                position: t.position,
                                render: !0
                            }), window.postMessage({
                                origin: "TulipBot",
                                action: "position",
                                position: t.position
                            }, "*");
                            var i = window.bp_frame.current;
                            i.setAttribute("class", String(window.tulipBotWindowData.data.position)), i.style.height = (n.data.height || 500) + "px", i.style.width = (n.data.width || 360) + "px";
                            var o = window.bp_frame.current.contentWindow.document;
                            o.open(), fetch(p.a.CDN_URL + "?key=" + localStorage.getItem("FBLjW2EuA2SvucFcfPgp")).then((function(e) {
                                return e.text()
                            })).then((function(e) {
                                o.write(e), o.close()
                            }))
                        })).catch((function(e) {
                            console.log("%c".concat(e.message, " (https://www.tulipbot.com)"), "color: red; font-weight: bold; font-size: ".concat("20px", ";"))
                        }))
                    }
                }, {
                    key: "openWindow",
                    value: function() {
                        this.tulipbotWindow.openWindow()
                    }
                }, {
                    key: "renderBlank",
                    value: function() {
                        return o.a.createElement("div", null)
                    }
                }, {
                    key: "renderComponent",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            onClick: function() {
                                return e.openWindow()
                            },
                            ref: window.bp_icon,
                            id: "tulipbot-launcher-12",
                            className: "tulipbot-" + this.state.position
                        }, o.a.createElement("div", {
                            className: "tulipbot-launcherImage-12"
                        }, this.state.text.trim() ? o.a.createElement("div", {
                            className: "tulipbot-launcher-text-12"
                        }, o.a.createElement("span", null, this.state.text)) : "", o.a.createElement("span", {
                            className: "tulipbot-launcher-image-12",
                            style: {
                                background: this.state.theme
                            }
                        }, o.a.createElement("img", {
                            src: this.state.image,
                            alt: ""
                        }))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.render ? this.renderComponent() : this.renderBlank()
                    }
                }]), n
            }(o.a.Component);
        window.bp_frame = o.a.createRef(), r.a.render(o.a.createElement("div", {
            className: "TulipBot-chat"
        }, o.a.createElement(g, null), o.a.createElement("iframe", {
            title: "TulipBot",
            src: "about:blank",
            id: "TulipBot-messenger",
            allowFullScreen: !0,
            name: "TulipBot",
            scrolling: "no",
            ref: window.bp_frame
        })), document.querySelector("tulipbot-root"))
    }],
    [
        [9, 1, 2]
    ]
]);
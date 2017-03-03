"use strict";
$(function() {
    function t(t, a) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbaicaijiatitle",
            success: function(n) {
                var e = template("bcjTitle", n);
                t.html(e);
                for (var c = t.find(".ul-wapper .tabs li"), s = 0, r = 0; r < c.length; r++) s += $(c[r]).width();
                var l = $(window).width();
                l < 768 && t.find(".ul-wapper .tabs").css("width", s + 38), $(c[a || 0]).addClass("active"), i(t.find(".ul-wapper .tabs"), a)
            }
        })
    }

    function i(t, i) {
        function a(t) { t.css("transition", "all 0.2s") }

        function n(t, i) { t.css("transform", "translateX(" + i + "px)") }
        for (var e = t.width(), c = t.parent().width(), s = 50, r = 0, l = c - e, d = 0 + s, u = l - 50, o = 0, f = 0, h = 0, p = 0, w = t.find("li"), v = 0; v < i; v++) p -= $(w[v]).width();
        p < l ? p = l : p > r && (p = r), a(t), n(t, p), t[0].addEventListener("touchstart", function(t) { o = t.touches[0].clientX }), t[0].addEventListener("touchmove", function(i) { f = i.touches[0].clientX, h = f - o, p + h > u && p + h < d && (a(t), n(t, p + h)) }), t[0].addEventListener("touchend", function(i) { p + h > r ? (p = r, a(t), n(t, p)) : p + h < l ? (p = l, a(t), n(t, p)) : p += h })
    }

    function a(t, i, a) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbaicaijiaproduct",
            data: { titleid: i || 0 },
            success: function(i) {
                var a = template("bcjProductList", i);
                t.html(a)
            }
        })
    }
    t($(".bcj-title"), $.getUrlParam("titleid")), a($(".bcj-list"), $.getUrlParam("titleid"))
});
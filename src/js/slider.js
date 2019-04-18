$(document).ready(function() {
    var a, i = $(".slider"),
        n = $(".slide__bg"),
        o = 0,
        l = 0,
        d = $(".slide").length - 1,
        c = !1,
        s = 500,
        e = 6e3,
        t = $(".slider-pagi");

    function r() {
        a = setTimeout(function() {
            d < ++l && (l = 0), u()
        }, e)
    }

    function u(e) {
        e || (c = !0, $(".slider-control").removeClass("inactive"), l || $(".slider-control.left").addClass("inactive"), l === d && $(".slider-control.right").addClass("inactive"), i.addClass("animating"), i.css("top"), $(".slide").removeClass("active"), $(".slide-" + l).addClass("active"), setTimeout(function() {
            i.removeClass("animating"), c = !1
        }, s)), window.clearTimeout(a), $(".slider-pagi__elem").removeClass("active"), $(".slider-pagi__elem-" + l).addClass("active"), i.css("transform", "translate3d(" + 100 * -l + "%,0,0)"), n.css("transform", "translate3d(" + 50 * l + "%,0,0)"), o = 0, r()
    }

    function m() {
        c || (0 < l && l--, u())
    }

    function f() {
        c || (l < d && l++, u())
    }! function() {
        for (var e = 0; e < d + 1; e++) {
            var a = $("<li class='slider-pagi__elem'></li>");
            a.addClass("slider-pagi__elem-" + e).data("page", e), e || a.addClass("active"), t.append(a)
        }
    }(), r(), $(document).on("mousedown touchstart", ".slider", function(e) {
        if (!c) {
            window.clearTimeout(a);
            var s = e.pageX || e.originalEvent.touches[0].pageX,
                t = $(window).width();
            o = 0, $(document).on("mousemove touchmove", function(e) {
                var a = e.pageX || e.originalEvent.touches[0].pageX;
                o = (s - a) / t * 70, (!l && o < 0 || l === d && 0 < o) && (o /= 2), i.css("transform", "translate3d(" + (100 * -l - o) + "%,0,0)"), n.css("transform", "translate3d(" + (50 * l + o / 2) + "%,0,0)")
            })
        }
    }), $(document).on("mouseup touchend", function(e) {
        $(document).off("mousemove touchmove"), c || (o ? -8 < o && o < 8 ? u() : (o <= -8 && m(), 8 <= o && f()) : u(!0))
    }), $(document).on("click", ".slider-control", function() {
        $(this).hasClass("left") ? m() : f()
    }), $(document).on("click", ".slider-pagi__elem", function() {
        l = $(this).data("page"), u()
    })
});
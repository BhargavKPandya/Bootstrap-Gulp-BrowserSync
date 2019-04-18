! function(e) {
    e("a[href*=\\#]:not([href=\\#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            e(this);
            var a = e(this.hash);
            if (headerHeight = e(".primary-header").height(), (a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length) return e("html,body").animate({
                scrollTop: a.offset().top - headerHeight
            }, 600), !1
        }
    })
}(jQuery);
var sections = $("section"),
    nav = $("nav"),
    nav_height = $(".primary-header").height(),
    nav_brand = $(".navbar-brand");
$(window).on("scroll", function() {
    var t = $(this).scrollTop();
    sections.each(function() {
        var a = $(this).offset().top - nav_height,
            e = a + $(this).outerHeight();
        a <= t && t <= e && (nav.find("a").removeClass("active"), sections.removeClass("active"), $(this).addClass("active"), nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active"))
    })
}), $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide")
});
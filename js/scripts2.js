(function() {

var sections = $(".section"),
    container = $(".container-fluid.main");

$.fn.scrollToSection = function() {

    this.first().parent().addClass("active");

    return this.on("click", function(e) {
        e.preventDefault();

        var that = $(this),
            targetId = that.attr("href") || that.data("sectionLink");

        if(!targetId) return;

        var target = $(targetId);

        container.scrollTo(target, 600, function() {
            container.css("height", target.outerHeight());
        });

        sections.filter(".active").removeClass("active");
        target.addClass("active");

        // Zmien aktywny przycisk
        var link = $("nav.navbar").find("a[href='" + targetId + "']");

        link.parent().siblings(".active").removeClass("active");
        link.parent().addClass("active");

    });

};

$.fn.setSectionHeight = function() {

    this.css("min-height", $(window).height() - $("nav.navbar").outerHeight() - $("footer.nav").outerHeight());

    this.find(".container").flexVerticalCenter({
        cssAttribute:'padding-top'
    });

    container.css({
        height: sections.filter(".active").outerHeight(),
        overflow: "hidden"
    });

};

$(window)
    .on("load", function() {

        sections.setSectionHeight();

    })
    .on("resize", function() {

        sections.setSectionHeight();

        container.scrollTo(sections.filter(".active"), 0);

    });

sections.first().addClass("active");
sections.setSectionHeight();
$("#mainNav").find("a").scrollToSection();
$("[data-section-link]").scrollToSection();



})();
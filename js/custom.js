$(document).ready(function () {

    // scroll to top button script

    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $('.scroll-to-top').addClass('show');
        } else {
            $('.scroll-to-top').removeClass('show');
        }
        $('.chart').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $('.chart').easyPieChart({
                    lineWidth: 6,
                    lineCap: 'square',
                    barColor: "#FF9C1B",
                    scaleColor: '#FF9C1B',
                    trackColor: '#444',
                    easing: 'easeOutBounce',
                    animate: 2500,
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
        });
    });

    $('.scroll-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(".my-work").slice(0, 6).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".my-work:hidden").slice(0, 3).slideDown(500);
        if ($(".my-work:hidden").length == 0) {
            $("#loadMore").text("No More").addClass("noMore");
        }
    });

});

new WOW().init();
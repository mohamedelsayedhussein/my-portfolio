$(document).ready(function () {

    // scroll to top button script

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
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
                    barColor: "#22a7f0",
                    scaleColor: '#22a7f0',
                    trackColor: '#555',
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

    new WOW().init();
});
$(document).ready(function () {

    // scroll to top button script

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.scroll-to-top').addClass('show');
        } else {
            $('.scroll-to-top').removeClass('show');
        }
    });

    $('.scroll-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});
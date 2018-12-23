$(".navbarscroll").removeClass("navbarscroll");
$(".logo_small").removeClass("logo_small");

$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        $('.navbar-full').toggleClass("navbarscroll", (height > 100));
        $('.logo').toggleClass("logo_small", (height > 100));
    });

//    $('.navbar-full, .navbarscroll').on('scroll', function () {
//        $(this).toggleClass('navbar-full navbarscroll');
//    });
});
$(document).ready(function () {

//    navbar
    $('.menu').click(function () {
        $(this).toggleClass('menu-clicked');
        $('.sidebar').toggleClass('show-sidebar hide-sidebar');
    });


});
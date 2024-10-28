$(function () {

    $('.popup_on').click(function () {
        $('.popup').show();
    })

    $('.popup_off').click(function () {
        $('.popup').hide();
    })



    $('header nav').mouseenter(function () {
        $('.sub').stop().slideDown();
        $('.nav_back').stop().slideDown();
    })

    $('header nav').mouseleave(function () {
        $('.sub').stop().slideUp();
        $('.nav_back').stop().slideUp();
    })

    $('.sub').mouseenter(function () {
        $(this).parents('li').children('a').addClass('on')
    })

    $('.sub').mouseleave(function () {
        $(this).parents('li').children('a').removeClass('on')
    })



    $('.gall ul li>a>img').mouseenter(function () {
        $(this).css('opacity', '0.5');
    })

    $('.gall ul li>a>img').mouseleave(function () {
        $(this).css('opacity', '1');
    })


    var s = 0;
    function slide() {

        if (s < 2) {
            s++;
        } else {
            s = 0;
        }
        $('.slide ul li').fadeOut();
        $('.slide ul li').eq(s).fadeIn();

    }
    setInterval(slide, 2000);
})
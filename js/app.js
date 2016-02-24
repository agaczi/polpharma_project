/**
 * Created by Agata on 19.02.2016.
 */
$(document).ready(function () {


    $('.notUnderline').click(function () {
        if ($('.active').length) {
            $('.active').not($(this)).removeClass('active').addClass('notUnderline');
        }
        $(this).addClass('active');
    });


    $('.notUnderline, .clickHamburger').click(function () {
        $('#changingContent').html($(this).html());
    });


    function setMenu() {
        if ($(window).width() < 996) {
            $('.hamburger').hide();
            $('.menuBtn').show();
        } else {
            $('.hamburger').show();
            $('.menuBtn').hide();
            $('.mobileMenu').hide();
        }
    }

    function setClick() {
        $('.menuBtn').on('click', function () {
            $('.mobileMenu').toggle();
        });
    }

    setMenu();

    $(window).on('resize', function () {
        setMenu();
    });
    setClick();

});

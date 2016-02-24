/**
 * Created by Agata on 19.02.2016.
 */
$(document).ready(function() {


// -------- // HAMBURGER MENU // -------- //

    function setMenu() {
        if ($(window).width() < 915) {
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

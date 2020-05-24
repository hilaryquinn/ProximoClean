$(document).ready( function() {
    $('#mobilenavicon').click(function (e) {
        e.preventDefault();
        $('ul.section_list').slideToggle();
    });
    $('a#back-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
    });
});
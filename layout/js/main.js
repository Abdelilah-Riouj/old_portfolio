$(document).ready(function() {
    "use strict";
    $('.join .card-header-tabs span').click(function() {
        $(this).addClass('active').parent().siblings().children('span').removeClass('active');
        $('.card-body .' + $(this).data('class')).fadeIn().siblings().fadeOut();
    });
});
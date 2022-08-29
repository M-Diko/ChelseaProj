
/*function to fix navigation bar at top*/

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
        $('header').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header').removeClass('visible-title');
    }
});

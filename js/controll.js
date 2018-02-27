
$(function () {
     $("#gallery").owlCarousel({
        items:4,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause: true,
        nav:true,
        navText: ["<span class='fas fa-angle-left'></span>","<span class='fas fa-angle-right'></span>"],
        dots:false
    });
});
$(function () {
    $("#carts").owlCarousel({
        items:1,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause: true,
        nav:true,
        navText: ["<span class='fas fa-angle-left'></span>","<span class='fas fa-angle-right'></span>"],
        dots:false
    });
});

$(function(){
  $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    animateOut: 'fadeOut',
    animatein: 'fadeOut',
    smartSpeed:450,
    dots:true
});

})

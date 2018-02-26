
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


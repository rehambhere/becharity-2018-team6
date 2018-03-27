//show back to top button
$(function () {
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollButton.fadeIn() : scrollButton.fadeOut();
        ;

    });
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0

        }, 600);
    });
})

/* =========================================
            preloade
============================================ */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(100).fadeOut();
});

/* =========================================
          cause-graph-fill
============================================ */
$(function () {
   $(".cause-graph-fill").each(function () {
      $(this).animate({
          height:$(this).attr('aria-valuenow')+ "%"
      },8000)
   });

})


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
     $("#testemonial").owlCarousel({
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

});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-top')) {

        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-top')) {

        var dropdowns = document.getElementsByClassName("dropdown-content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


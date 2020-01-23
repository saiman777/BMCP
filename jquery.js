$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var owl = $('.sliderWrapper');
owl.owlCarousel();
// Go to the next item
$('.nxtBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prvBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

///////////////////////////////////////////Navbar transparent jquery///////////////////////////////////
$(document).ready(function() {
    $(window).scroll(function() {
    if($(document).scrollTop() > 10) {
        $('.nav').addClass('shrink');
    }
    else {
    $('.nav').removeClass('shrink');
    }
  });
});

              


     

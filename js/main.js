(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    //SPINNER NEW
    
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
        return false;
    });


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

// Facts counter new
const carousel = document.querySelector('#header-carousel');
const bsCarousel = new bootstrap.Carousel(carousel, {
  interval: 5000,
  ride: 'carousel',
  wrap: true
});

  // Custom carousel loop
  carousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = carousel.querySelector('.carousel-item.active');
    const items = carousel.querySelectorAll('.carousel-item');
    const lastItem = items[items.length - 1];

    if (activeItem === lastItem) {
      // Go back to first slide
      setTimeout(() => {
        bsCarousel.to(0);
      }, 5000); // wait 5 seconds before restarting
    }
  });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);




//footer


document.getElementById("copyright-year").textContent = new Date().getFullYear();
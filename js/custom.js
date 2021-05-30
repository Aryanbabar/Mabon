$(function(){

  // brand-slider;
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    prevArrow:'.left-arrow',
    nextArrow:'.right-arrow',
    fade:true,
    speed: 3000,
  });

  // wow js;
  new WOW().init();

  // venubox;
  $('.venobox').venobox();

  // mixit-up;
  var containerEl = document.querySelector('.port-slider');
  var mixer = mixitup(containerEl);

  //counterup;
  $('.counter').counterUp({
    delay: 5,
    time: 500,
  });



  // testimonials slider;
  $('.testi-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 4000,
    prevArrow:'.testi-left-arrow',
    nextArrow:'.testi-right-arrow',
    // speed: 1000,
  });



  // brand-slider;
  $('.client-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });

});


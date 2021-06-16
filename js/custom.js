$(function(){
  // back-to-top;
  $('.back-to-top').click(function(){
    $('html,body').animate({scrollTop:0},1500);
  });
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 300){
        $('.back-to-top').fadeIn(500);
    }
    else {
        $('.back-to-top').fadeOut(500);
    }
  });

  //animation scroll js;
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 90
              }, 1500);
              return false;
          }
      }
  });

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

  // team-slider;
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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

// blog-slider;
// $('.blog-slider').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   arrows: false,
//   autoplaySpeed: 3000,
//   responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 420,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
// });


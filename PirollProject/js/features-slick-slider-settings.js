$(document).ready(function(){
  $('.features-slider').slick({
  infinite: true,
  speed:300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
      	prevArrow:'<button type="button" class="features-prev features-arrow"></button>',
      	nextArrow:'<button type="button" class="features-next features-arrow"></button>',
      	autoplay:true,
  		autoplaySpeed:1700,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
      	prevArrow:'<button type="button" class="features-prev features-arrow"></button>',
      	nextArrow:'<button type="button" class="features-next features-arrow"></button>',
      	autoplay:true,
        autoplaySpeed:1000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  });
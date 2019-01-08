(function () {
	let toggler = document.querySelector(".header .navbar-toggle");
	toggler.addEventListener("click", function () {
		toggler.classList.toggle("active");
		$(".header .header__top__navbar").fadeToggle(200);
		$(".header .header__top .form__search").fadeOut(200);
	});
	let togglerSearch = document.querySelector(".header .header__top .func .search");
	togglerSearch.addEventListener("click", function () {
		$(".header .header__top .form__search").fadeToggle(200);
		toggler.classList.remove("active");
		$(".header .header__top__navbar").fadeOut(200);
	});
	
	$(document).ready(function() {
		$('.header__slider .slider').slick({
  infinite: true,
  speed:600,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow:'<button type="button" class="header__prev header__arrow"></button>',
  nextArrow:'<button type="button" class="header__next header__arrow"></button>',
  autoplay: true,
  responsive: [
    {
      breakpoint: 640,
      settings: {
      		dots: false,
			arrows: false
      }
    }]
		});
	});
}())
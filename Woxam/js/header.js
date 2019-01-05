let HEADER = {}; // object of Header
HEADER.link = document.querySelector(".header .header-bottom"); // header's link
HEADER.slider = document.querySelector(".header .header-bottom .slider"); // slider's link
HEADER.countSlides = HEADER.slider.children.length;
HEADER.switchers = document.querySelector(".header .header-switchers"); // switchers's link
HEADER.navbarToggle = document.querySelector(".toggle-navbar"); // link of burger
HEADER.navbarActive = true; // state of navigation bar
HEADER.currentSlide = 1;
HEADER.lastSlide = null;
HEADER.msSlider = 3000;
HEADER.stopSlide = false;
window.onload = function() {
	SliderWork(HEADER.msSlider); // start work of slider
	HEADER.navbarToggle.addEventListener("click", toggleNav, false); // add click of navigation bar
}
function toggleNav() {
	let navbar = $(".navbar");

	if(HEADER.navbarActive) {
		HEADER.navbarActive = false;
		navbar.fadeIn().css("display","flex");
	}
	else {
		HEADER.navbarActive = true;
		navbar.fadeOut();	
	} // toggle burger-menu
}
function switchSlideClick(event) {
	let target = event.target;
	if(!target.classList.contains("switch") && target.getAttribute("slide") != HEADER.currentSlide)
		return false;
	HEADER.lastSlide = HEADER.currentSlide;
	HEADER.currentSlide = target.getAttribute("slide");
	HEADER.slider.children[HEADER.lastSlide-1].classList.remove("active");
	HEADER.slider.children[HEADER.currentSlide-1].classList.add("active");
	HEADER.switchers.children[HEADER.lastSlide-1].classList.remove("active");
	HEADER.switchers.children[HEADER.currentSlide-1].classList.add("active");
	HEADER.stopSlide = true;
	let time = setTimeout(function() {
		HEADER.stopSlide = false;
	}, HEADER.msSlider) // slide change state, when someone click
}
function switchSlide(obj) {
	if(HEADER.stopSlide)
		return false;
	obj.lastSlide = obj.currentSlide;
	obj.currentSlide++;
	if(obj.currentSlide > obj.countSlides)
		obj.currentSlide = 1;
	obj.slider.children[obj.lastSlide-1].classList.remove("active");
	obj.slider.children[obj.currentSlide-1].classList.add("active");
	obj.switchers.children[obj.lastSlide-1].classList.remove("active");
	obj.switchers.children[obj.currentSlide-1].classList.add("active");	 // slide change state every HEADER.msSlider seconds
}
function SliderWork(ms) {
	for(let i = 0; i < HEADER.countSlides; i++) { // add switchers which depend on count of slides
		let sw = document.createElement("div");
		sw.classList.add("switch");
		sw.setAttribute("slide", i+1);
		HEADER.switchers.appendChild(sw);
	}
	if(!HEADER.slider.children[0].classList.contains("active")) // check for availability class "Active" of the first slide
		HEADER.slider.children[0].classList.add("active");

	HEADER.switchers.children[0].classList.add("active"); // add class "Active" to the first element of switchers's group
	HEADER.switchers.addEventListener("click", switchSlideClick);
	headerSliderWorkingAuto = setInterval(switchSlide, ms, HEADER); // function of work of the header's slider
}



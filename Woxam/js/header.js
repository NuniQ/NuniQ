(function () {
	let toggler = document.querySelector(".header .navbar-toggle");
	toggler.addEventListener("click", function () {
		toggler.classList.toggle("active");
		$(".header .header__top__navbar").fadeToggle(200);
	});
}())
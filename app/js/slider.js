let slider = document.querySelector(".slider-wrapper");
let width  = document.querySelector(".slider").offsetWidth;

let controller = document.querySelector(".slider-controller");
let btns = document.querySelector(".slider-controller").children;


let mgleft = width+4;

controller.addEventListener("click",function (event) {
	target = event.target;
	if(!target.hasAttribute("data-slider"))
		return 0;
	let slideNow = target.getAttribute("data-slider");
	slideNow = slideNow[slideNow.length-1];
	let left = (-1)*(mgleft*(slideNow-1));
	console.log(slideNow);
	slider.style.marginLeft = left+"px"; 
},false);
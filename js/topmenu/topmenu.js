(function ($) {

	/* Se déclenche au chargement de la page */
	$(document).ready(function (){

/***************** Slide-In du menu ******************/
$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

	});

}(window.jQuery || window.$));

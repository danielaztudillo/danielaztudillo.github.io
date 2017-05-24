(function(){

	$('#navbar-example,#menu').find('li a').click(function(){
		var a = $(this).attr('href');
		if(a[0]=="#" ){
			if($(a).length>0)
				var h = $(a).offset().top+1;


			if(h>0){

				$('html,body').animate({scrollTop:h},450);
				$('.header-section').addClass('off').removeClass('woff').removeAttr('style');
				$('#menu').removeClass('in');
				k=0;
			}

			return false;
		}
	});
})();
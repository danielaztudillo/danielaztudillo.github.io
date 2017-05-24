(function($) {
 "use strict";

	var slider = new MasterSlider();
 
    // adds Arrows navigation control to the slider.
    // slider.control('arrows');
    slider.control('bullets');
 
     slider.setup('masterslider' , {
         width:1400,    // slider standard width
         height:810,   // slider standard height
         space:1,
         layout:'fullwidth',
         loop:true,
         preload:0,
         autoplay:true
    });

         

 

	var slider = new MasterSlider();
		slider.setup('masterslider3' , {
			width:396,
			height:528,
			speed:27,
			preload:0,
			loop:true,
			autoplay:true
		});
		slider.control('arrows');	
		slider.control('bullets',{autohide:false});	

		
		$('#myTab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});

	//	SyntaxHighlighter.all();
	

	var slider = new MasterSlider();
 
    // adds Arrows navigation control to the slider.
    // slider.control('arrows');
    slider.control('bullets');
 
     slider.setup('masterslider9' , {
         width:1400,    // slider standard width
         height:900,   // slider standard height
         space:1,
         layout:'fullwidth',
         loop:true,
         preload:0,
         autoplay:true,
		 view:'fade',
		 overPause: false
    });
	




	
})(jQuery);
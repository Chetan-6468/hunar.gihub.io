
(function($) {
    "use strict";
     $(document).on('ready', function() {	
	
		/*===============================
			Search Form JS
		=================================*/
		$('.search-area .icon').on( "click", function(){
			$('.search-area').toggleClass('active');
		});		
		
		/*===============================
			Mobile Menu JS
		=================================*/
		$('.menu').slicknav({
			prependTo:".mobile-menu",
			duration: 600,
			closeOnClick:true,
		});
		

		/*================================
			Nice Select JS
		==================================*/ 
		$('select').niceSelect();
		
		
		/*================================
			Course Single Slider JS
		==================================*/ 
		$('.course-single-gallery').owlCarousel({
			items:1,
			autoplay:true,
			loop:false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			smartSpeed: 500,
			merge:true,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false
		});
	
		
		/*================================
			Events Slider JS
		==================================*/
		$('.event-gallery').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:3500,
			smartSpeed: 600,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			margin:0,
			loop:true,
			merge:true,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});	
		
		/*================================
			Circle JS
		==================================*/
		$('.circle').circleProgress({
			fill: {
				color: '#05C46B'
			}
		})
		
		
		
		/*================================
			ScrollUp JS
		==================================*/
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			animation: 'fade',           // Fade, slide, none
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			easing: 'easeInOutQuart',
			scrollText: ["<i class='fa fa-home'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		});
	
	});
		
		/*================================
			Preloader JS
		==================================*/
		$(window).on('load', function() {
				$('.book_preload').fadeOut('slow', function(){
				$(this).remove();
			});
		});
})(jQuery);
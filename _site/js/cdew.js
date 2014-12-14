$(document).ready(function(){
	
	// BACK TO TOP

	// checks for static back up links and removes them if they exist

	if ( $('.back-up-static')[0] ) {
		$('.back-up-static').hide(); 
	}

	// inserts dynamic back up link in for JS enabled

	$('footer').append( 
		'<a href="javascript:void(0)" class="back-to-top round-nav-button" id="back-top" title="Back to top"><span class="hidden-accessible">Back to top</span><i class="icon-arrow-up"></i> </a>');
		
	// hide the back-up link initially, fade in on scroll. 
	$('#back-top').hide();

	//Check to see if the window is top if not then display button

	$(window).scroll(function(){
		if ($(this).scrollTop() > 150) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	
// Would like to add something to the effect of, if time since last scroll > a few seconds, make the button disappear.
// Then, if the user scrolls again, the button reappears. 

// animate the action going back to top

	$('.back-to-top').click(function () {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 'slow');
	});
		
}); // end document ready

// Google Analytics Tracking Code

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37731185-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


	
//end



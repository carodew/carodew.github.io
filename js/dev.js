// collect all the links on the index page into one array. 

var href = "";
var hrefs = [];

$(document).ready ( function () {
	$('.project-thumbnail').each ( function () {
		href = $(this).attr('href');
		hrefs.push( href );
	});
	console.log (hrefs);

});

// image resize 

var imgLarge = true; 

ImageResize = function() {
	if ( imgLarge ) {
		$(this).animate( {width: '50%'} );
		imgLarge = false;
	} else {
		$(this).animate( {width: '100%' } );
		imgLarge = true;
	}

};

$('.resizable').click( ImageResize );
	
	 // $(function(){
        // $('.resizable').click(function(){
			// $(this).toggleClass('img-resized'); 
        // });
    // });

//var projectLinks = [];


// $( '.project-thumbnail').each(function( index ) {
  // $(this).attr("href");
//   
// });
// 
// Pseudo code: 
//for every a link with class project thumbnail on the homepage
// get the value of the href attribute
// and put it in an array in order. 

// then when the page filename = array[i], put array[i + 1] in the next link
// and put array[i - 1] in the previous links. 

// this won't work because it's a diff page. I think, but there's probably a solution somewhere. 

// collect all the project target URLs on the index page and put them into an array.


// create the prev/next navigation
// 
// var prevLink = " ";
// var nextLink = " ";
// var prevNextLinks = '<div class="prev-next-container"><a class="previous" id="previous" href="' + prevLink +'" >Previous</a><a class="next" id="next" href="'+ nextLink + '">Next</a></div>';
// 
// // ADD the next link to the page and animate them. 
// 
// 
// $(document).ready(function(){
	// // probably want to put an if statement here, if '#main' exists, do this. Change #main to #project-main so it doesn't do this on the about and index pages. 
	// $('#main' ).append( prevNextLinks ); // add the prev/next navigation to the page
// 
	// $('#previous').mouseenter(function(){
		// $(this).animate({left: '-=10px'}, 500);
	// });
	// $('#previous').mouseleave(function(){
		// $(this).animate({left:'+=10px'}, 500);
	// });
	// $('#next').mouseenter(function(){
		// $(this).animate({right:'-=10px'}, 500);
	// });
	// $('#next').mouseleave(function(){
		// $(this).animate({right:'+=10px'}, 500);
	// });
// });
// 
// });
//$('what we will insert it to' ).append('<a class="next" href="variable" >Next</a>' );

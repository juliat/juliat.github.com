 //Executes your code when the DOM is ready.  Acts the same as $(document).ready().

$(function() {

  // lightboxing
  $(function () {
    $('.images a, a[rel="lightbox"]').fluidbox();
	});

  /*
  function updatePagingNav() {
		minID = 1;
		maxID = $('.homepage-portfolio-item').length;
	  nextID = parseInt(this.id) + 1;
	  prevID = parseInt(this.id) - 1;
	  prev = $('#previous');
	  next = $('#next');
	  if (this.id > minID) {
	  	prev.prop("href", "#"+prevID);
	  	prev.removeClass('hidden');
	  } else {
	  		prev.addClass('hidden');
	  }
	  if (this.id < maxID) {
	  	next.prop("href", "#"+nextID);
	  	next.removeClass('hidden');
	  } else {
	  	next.addClass('hidden');
	  }
  }
  // waypoints for the homepage
	$('.homepage-portfolio-item').waypoint(
		function(direction) {
			updatePagingNav();
		},
		{ offset: 10% }
	);
	$('#previous').on('hover', updatePagingNav);
	*/

	// Email obfuscator script 2.1 by Tim Williams, University of Arizona
	// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
	// This code is freeware provided these four comment lines remain intact
	// A wizard to generate this code is at http://www.jottings.com/obfuscator/
	(function(){
	  coded = "R4C76CS@JH67C.ILH"
	  key = "WI9RYGKsMdklgXtyh8ra2pivEQAbCJFSmeUo6wu7qOB10VcnjHNDLPT4xf35zZ"
	  shift=coded.length
	  link=""
	  for (i=0; i<coded.length; i++) {
	    if (key.indexOf(coded.charAt(i))==-1) {
	      ltr = coded.charAt(i)
	      link += (ltr)
	    }
	    else {
	      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
	      link += (key.charAt(ltr))
	    }
	  }
	  emailLink = $('#nospammail').attr('href', 'mailto:'+link);
	}());
});
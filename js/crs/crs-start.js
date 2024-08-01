(function($) {

	  
	
    /********************* 
	slick tabs
	*********************/
	  $('.jim').slick({
		dots: false,
        infinite: true,
        speed: 500,
        fade: !0,
        cssEase: 'linear',
        mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
        autoplay: false,
		autoplaySpeed: 8000,
        draggable: false,
		arrows: false,
		responsive: [
	    {
		breakpoint: 1024,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
        infinite: true
		          }
        },
        {
		breakpoint: 768,
		settings: {
        draggable: true,
		          }
		},
		{
		breakpoint: 600,
		settings: {
        slidesToShow: 1,
        draggable: true,
		slidesToScroll: 1
			      }
		},
		{
		breakpoint: 480,
		settings: {
        slidesToShow: 1,
        draggable: true,
		slidesToScroll: 1
		          }
		}
	
			      ]
        });
				  
				/*****************************************************************************
				Use of 'slickGoTo' ..to navigate to an item on click
				https://gist.github.com/galdiolo/4b73c81925f659320b5a#gistcomment-2922553
				*****************************************************************************/
				$('.nav_item').on('click', (function(e){
				e.preventDefault(); 
				var slideIndex = $(this).index(); 
				console.log(slideIndex); 
				$( '.jim' ).slick('slickGoTo', slideIndex, false); 
				}
				));
		
    /*********************
	highlight.js
	*********************/
    hljs.highlightAll();
	
    /*********************
	Typewriter animation with Highlight.js
	*********************/
	//Below
	var target = document.getElementById('code');

	// Highlight the code
	hljs.highlightElement(target);

	// Get all the child nodes
	var children = Object.values(document.getElementById('code').childNodes);

	// Empty the target
	target.innerText = '';

	// And start the animation from the first node
	type(0);

	function type(i) {
		// Little helper
		function randomNumber(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		}

		// Make the content visible
		if (i === 0) {
			target.style.visibility = 'visible';
		}

		// When we've displayed all the nodes
		// Just start over
		if (i >= children.length) {
			i = 0;
			target.innerText = '';
		}

		// Append each node to the target code placeholder
		// And scroll that div if the code scrolls past it
		if (children.hasOwnProperty(i)) {
			target.appendChild(children[i]);

			target.scrollTop = target.scrollHeight;
		}

		// Step to the next node
		i++;

		// Repeat the process
		// after a variable amount of time
		setTimeout(function () {
			type(i);
		}, randomNumber(200, 500));
	}


    /*********************
	add/remove class on wcic_tabs links
	*********************/
	jQuery(".wcic_tabs a").on("click", function() {
	  jQuery(this).addClass('active').siblings().removeClass('active');
	});
	
	
})(jQuery);
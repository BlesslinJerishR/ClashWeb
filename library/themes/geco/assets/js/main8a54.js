(function ($) {
"use strict";

/*=============================================
    =    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	// mainSlider();
	textAnimation();
	aosAnimation();
	wowAnimation();
	widgetTitle();
	qtyIncDecBtn();
});


/*=============================================
    =          Menu Bottom Line			      =
=============================================*/
// function menu_bottom_line_active() {
// 	var off = $('#mobile-menu > ul > li.show').offset(),
// 		left = off.left,
// 		right = $(window).width() - left - $('#mobile-menu > ul > li.show').width() + $('#mobile-menu > ul > li.show').width();

// 	$('<style>.navbar-wrap > ul > li.show > a::after{width:' + right + 'px;}</style>').appendTo("head");
// }

// menu_bottom_line_active();

// Menu bottom line
function menu_bottom_line() {

	$("#mobile-menu > ul > li").mouseover(function () {

		if ($("#mobile-menu > ul > li").hasClass("active")) {
			$(this).removeClass('active');
		}

		$(this).addClass('active');

		var off = $('#mobile-menu > ul > li.active').offset(),
			left = off.left,
			right = $(window).width() - left - $('#mobile-menu > ul > li.active').width() + $('#mobile-menu > ul > li.active').width();

		$('<style>.navbar-wrap > ul > li.active > a::after,.navbar-wrap > ul > li:hover > a::after{width:' + right + 'px;}</style>').appendTo("head");
	});

	$("#mobile-menu > ul > li").mouseleave(function () {
		$(this).removeClass('active');
	});

}

menu_bottom_line();


/*=============================================
    =    		Mobile Menu			      =
=============================================*/
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


/*=============================================
    =     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
	} else {
		$("#sticky-header").addClass("sticky-menu");
	}
});


/*=============================================
    =    		Brand Active		      =
=============================================*/
$('.brand-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});



/*=============================================
    =    		Product Active		      =
=============================================*/
$('.product-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});



/*=============================================
    =    		Testimonial Active		     =
=============================================*/
$('.testimonial-active').owlCarousel({
	loop: true,
	margin: 0,
	items: 1,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			center: false,
		},
		575: {
			items: 1,
			center: false,
		},
		768: {
			items: 1,
			center: false,
		},
		992: {
			items: 1,
			center: false,
		},
		1200: {
			items: 1
		},
	}
})


/*=============================================
    =    		Latest Games		      =
=============================================*/
$('.latest-games-active').owlCarousel({
	loop: true,
	margin: 30,
	items: 3,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			center: false,
			nav: false,
		},
		575: {
			items: 1,
			center: false,
		},
		768: {
			items: 2,
			center: false,
		},
		992: {
			items: 3,
			center: false,
		},
		1200: {
			items: 3
		},
	}
})


/*=============================================
    =    		Text Animation		      =
=============================================*/
function textAnimation() {
	$('.tlt').textillate({
		in: {
			delayScale: 4,
			delay: 40,
			callback: function () { }
		},
	});
}


/*=============================================
    =      Released Game Active 	      =
=============================================*/
$('.released-game-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: true,
	asNavFor: '.released-game-nav',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				dots: false,
			}
		},
	]
});
$('.released-game-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.released-game-active',
	dots: false,
	arrows: false,
	centerMode: false,
	centerPadding: '0px',
	vertical: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: false,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				vertical: false,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
	]
});

const relatedProductSlider = $('.related-product-active');
relatedProductSlider.slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	slidesToShow: relatedProductSlider.data('col'),
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});

/*=============================================
    =    		New Released Game Active		      =
=============================================*/
$('.new-released-game-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});

/*=============================================
    =    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
    =    		Isotope	Active  	      =
=============================================*/
$('.tournament-active,.featured-active').imagesLoaded( function() {
	var $grid = $('.tournament-active,.featured-active').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		columnWidth: 1,
	  }
	});
	// filter items on button click
	$('.tournament-menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});

//for menu active class
$('.tournament-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/*=============================================
    =    		 Aos Active  	         =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true
	});
}


/*=============================================
    =    		Odometer Active  	       =
=============================================*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});


/*=============================================
    =    		 Countdown  	         =
=============================================*/
$('[data-countdown]').each(function () {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function (event) {
		$this.html(event.strftime('<div class="time-count"><span>%D</span>Days</div><div class="time-count"><span>%H</span>Hrs</div><div class="time-count"><span>%M</span>Mins</div><div class="time-count"><span>%S</span>Secs</div>'));
	});
});


/*=============================================
    =    		 Scroll Up  	         =
=============================================*/
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300',
	topSpeed: 300,
	animation: 'fade',
	animationInSpeed: 200,
	animationOutSpeed: 200,
	scrollText: '<i class="fas fa-caret-up"></i>',
	activeOverlay: false,
});


/*=============================================
    =    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}

/*=============================================
    =    	Widget Title Coloring        =
=============================================*/
function widgetTitle() {
	let widgetTitles = document.querySelectorAll('.sidebar-widget-title h4, .breadcrumb-content h2, .woocommerce h3, .related-games-title h4, .section-title h2, .latest-match-area h3, .featured-game-area h4');
	widgetTitles.forEach( title => {
		if(title.childNodes.length < 2 ) {
			let words = title.textContent.split(' ');
			let startIndex = Math.ceil(words.length / 2);
			if((words.length / 2) >= 1) {
				words[startIndex] = '<span>' + words[startIndex];
				words[words.length -1] = words[words.length - 1] + '</span>';
				title.innerHTML = words.join(' ');
			}
		} 
	
	});
}

function qtyIncDecBtn() {
	let fields = document.querySelectorAll('.quantity input[type=number]');
	fields.forEach( field => {
		const plus = document.createElement('div');
		const minus = document.createElement('div');
		plus.classList = "plus";
		plus.innerHTML = '<button type="button"><i class="fas fa-plus"></i></button>';
		minus.classList = "minus";
		minus.innerHTML = '<button type="button"><i class="fas fa-minus"></i></button>';
		field.parentNode.prepend(minus);
		field.parentNode.append(plus);
		if ( field.value == '' ) {
			field.setAttribute('value', 0);
		}
		minus.addEventListener( 'click', (e)=> {
			if (field.value > 1) {
				field.value = parseFloat(field.value) - 1;
				field.setAttribute('value', parseFloat(field.value) );
			}
		});
		plus.addEventListener( 'click', (e)=> {
			field.value = parseFloat(field.value) + 1;
			field.setAttribute('value', parseFloat(field.value));
		});
	});



}



})(jQuery);
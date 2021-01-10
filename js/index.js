/* global $,alert*/
$(function () {
	'use strict';
	bsCustomFileInput.init();
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	$(function(){$('header .carousel h1').css('top',Math.abs($("header .carousel").height() - $('header .carousel h1').height()) / 2);});
	$('header .carousel,header .carousel .carousel-item').height( $(window).height() - ($('nav.navbar').innerHeight() + $('.upper-nav').innerHeight()));
	$('.testemonial .carousel,header .carousel .carousel-item').height( $(window).height());
	$(window).on('resize',()=>{
		$('header .carousel,header .carousel .carousel-item').height( $(window).height() - ($('nav.navbar').innerHeight() + $('.upper-nav').innerHeight()));
		$('header .carousel h1').css('top',Math.abs($("header .carousel").height() - $('header .carousel h1').height()) / 2);
		$('.testemonial .carousel,header .carousel .carousel-item').height( $(window).height());
	})
	$('header .carousel,.testemonial .carousel').carousel({
		interval: 3500,
		pause:false
	});
	// $('.feather-work ul li').on('click',function(){
	// 	$(this).siblings().removeClass('active').end().addClass('active');
	// 	if($(this).data('class') == ".all")
	// 		$('.feather-work .galary img').css('opacity', 1);
	// 	else{
	// 		$('.feather-work .galary img').css('opacity', 0.5);
	// 		$('.feather-work img' + $(this).data('class')).css('opacity', 1);
	// 	}
	// })
	// $('.feather-work ul li').on('click',function(){
	// 	$(this).siblings().removeClass('active').end().addClass('active');
	// 	if($(this).data('class') == ".all")
	// 		$('.feather-work .galary img').parent().fadeIn(1000);
	// 	else{
	// 		$('.feather-work .galary img').parent().fadeOut(500);
	// 		$('.feather-work img' + $(this).data('class')).parent().fadeIn(1000);
	// 	}
	// })
	$('.feather-work ul li').on('click',function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		if($(this).data('class') == ".all"){
			$('.feather-work .galary img').parent().css('transform','scale(1)');
			$('.feather-work .galary img').parent().css('opacity', 1);
			setTimeout(()=>{
				$('.feather-work .galary img').parent().css('display', 'block');
			},800)
		}
		else{
			$('.feather-work .galary img').parent().css('transform','scale(0)');
			setTimeout(()=>{
				$('.feather-work .galary img').parent().css('opacity', 0);
			},500)
			setTimeout(()=>{
				$('.feather-work .galary img').parent().css('display', 'none');
			},800)
			$('.feather-work img' + $(this).data('class')).parent().css('transform','scale(1)');
			setTimeout(()=>{
				$('.feather-work img' + $(this).data('class')).parent().css('opacity',1);
			},500)
			setTimeout(()=>{
				$('.feather-work img' + $(this).data('class')).parent().css('display', 'block');
			},800)
		}
	});
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > ($('.customer').offset().top + $('.customer').outerHeight() - $(window).height())){
			$('.customer .counter').each(function() {
				var $this = $(this), countTo = $this.attr('data-count');
				$({ countNum: $this.text()}).animate({
				  countNum: countTo
				},{
				  duration: 3000,
				  easing:'linear',
				  step: function() {
					$this.text(Math.floor(this.countNum));
				  },
				  complete: function() {
					$this.text(this.countNum);
					//alert('finished');
				  }
				});  
			}); 
		}
	 });
	 $('nav.navbar ul.navbar-nav li.active').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('body').offset().top
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.work').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#pricing').offset().top
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.about').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#about').offset().top -150
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.blog').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#reviews').offset().top -45
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.contact').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#contact').offset().top
		}, 1000);
	});

	let currentDate = new Date();
	document.getElementById('current-year').textContent = currentDate.getFullYear();
});
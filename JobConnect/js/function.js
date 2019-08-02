/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE
--------------------------------------*/
"use strict";
jQuery(document).on('ready', function() {
	/*--------------------------------------
			MOBILE MENU
	--------------------------------------*/
	function collapseMenu(){
		jQuery('.at-navigation ul li.menu-item-has-children, .at-navigation ul li.menu-item-has-mega-menu').prepend('<span class="at-dropdowarrow"><i class="fa fa-angle-down"></i></span>');
		jQuery('.at-navigation ul li.menu-item-has-children span, .at-navigation ul li.menu-item-has-mega-menu span').on('click', function() {
			jQuery(this).parent('li').toggleClass('at-open');
			jQuery(this).next().next().slideToggle(300);
		});
	}
	collapseMenu();
	/*--------------------------------------
			MEGA MENU
	--------------------------------------*/
	jQuery(function ($) {
		function hoverIn() {
			var a = jQuery(this);
			var nav = a.closest('.at-navigation');
			var mega = a.find('.mega-menu');
			var offset = rightSide(nav) - leftSide(a);
			mega.width(Math.min(rightSide(nav), columns(mega)*230));
			mega.css('left', Math.min(0, offset - mega.width()));
		}
		function hoverOut() {}
		function columns(mega) {
			var columns = 0;
			mega.children('.mega-menu-row').each(function () {
				columns = Math.max(columns, jQuery(this).children('.mega-menu-col').length);
			});
			return columns;
		}
		function leftSide(elem) {
			return elem.offset().left;
		}
		function rightSide(elem) {
			return elem.offset().left + elem.width();
		}
		jQuery('.menu-item-has-mega-menu').hover(hoverIn, hoverOut);
	});
	/*--------------------------------------
			THEME ACCORDION
	--------------------------------------*/
	if(jQuery('.at-panelheading').length > 0){
		var _tg_panelheading = jQuery('.at-panelheading');
		_tg_panelheading.on('click',function () {
			jQuery('.panel-heading').removeClass('at-active');
			jQuery(this).parents('.panel-heading').addClass('at-active');
			jQuery('.panel').removeClass('at-active');
			jQuery(this).parent().addClass('at-active');
		});
	}
	jQuery('.panel-collapse').on('show.bs.collapse', function () {
		jQuery(this).siblings('.panel-heading').addClass('at-active');
	});
	jQuery('.panel-collapse').on('hide.bs.collapse', function () {
		jQuery(this).siblings('.panel-heading').removeClass('at-active');
	});
	/* -------------------------------------
			HOME SLIDER V ONE
	-------------------------------------- */

	if(jQuery('#at-homeslidervfour').length > 0){
		var mySlider = jQuery('#at-homeslidervfour').pogoSlider({
			autoplay: false,
			responsive: true,
			targetHeight: 445,
			generateNav: false,
			pauseOnHover: false,
			displayProgess: false,
			autoplayTimeout: 6000,
		}).data('plugin_pogoSlider');
	}
	/* -------------------------------------
			WHAT WE DO SLIDER
	-------------------------------------- */
	if(jQuery('#at-whatwedoslider').length > 0){
		jQuery('#at-whatwedoslider').owlCarousel({
			items: 2,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			autoplay: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 2, },
			}
		});
	}
	/* -------------------------------------
			WHAT WE DO SLIDER
	-------------------------------------- */
	if(jQuery('#at-servicesslider').length > 0){
		jQuery('#at-servicesslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			autoplay: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 3, },
			}
		});
	}
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	if(jQuery('#at-testimonialslider').length > 0){
		jQuery('#at-testimonialslider').owlCarousel({
			items: 2,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			autoplay: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 2, },
			}
		});
	}

	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	if(jQuery('#at-testimonial3gridslider').length > 0){
		jQuery('#at-testimonial3gridslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			center: true,
			autoplay: true,
			onTranslated : counter,
			onInitialized  : counter,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 3, },
			}
		});
		function counter(event) {
			var totalItems = jQuery('.at-testimonial3gridslider .owl-item:not(.cloned)').length;
			var currentIndex = jQuery('.at-testimonial3gridslider .owl-item.center').index() - 2;
			jQuery('.at-textimonialscounter').html('<span>0'+currentIndex+'</span><span>0'+totalItems+'</span>');
		}
	}
	/*--------------------------------------
			COUNTER
	--------------------------------------*/
	if(jQuery('#at-counters').length > 0){
		var _tg_counters = jQuery('#at-counters');
		_tg_counters.appear(function () {
			jQuery('.at-scounter > h3').countTo()
		});
	}
	if(jQuery('#at-happycustomers').length > 0){
		var _at_happycustomers = jQuery('#at-happycustomers');
		_at_happycustomers.appear(function () {
			jQuery('.at-happycustomercounter > h3').countTo()
		});
	}
	/*--------------------------------------
			PROGRESS BAR
	--------------------------------------*/
	if(jQuery('#at-ourskill').length > 0){
		var _tg_ourskill = jQuery('#at-ourskill');
		_tg_ourskill.appear(function () {
			jQuery('.skill-holder').each(function () {
				jQuery(this).find('.skill-bar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	}
	/* -------------------------------------
			ADDRESS SLIDER
	-------------------------------------- */
	if (jQuery('#at-testimonialsingleslide').length > 0) {
		jQuery('#at-testimonialsingleslide').owlCarousel({
			items: 1,
			nav: false,
			loop: true,
			dots: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
		});
	}
	/* -------------------------------------
			TEAM MEMBERS SLIDER
	-------------------------------------- */
	if(jQuery('#at-teamslider').length > 0){
		jQuery('#at-teamslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: false,
			center: true,
			autoplay: true,
			onTranslated : counter,
			onInitialized  : counter,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 3, },
			}
		});
		function counter(event) {
			var totalItems = jQuery('#at-teamslider .owl-item:not(.cloned)').length;
			var currentIndex = jQuery('#at-teamslider .owl-item.center').index() - 2;
			jQuery('.at-teamslidercounter').html('<span>0'+currentIndex+'</span><span>0'+totalItems+'</span>');
		}
	}
	/* -------------------------------------
			STICK IN PARENT
	-------------------------------------- */
	if(jQuery('#at-sidebar').length > 0){
		var _at_sidebar = jQuery("#at-sidebar");
		_at_sidebar.stick_in_parent();
	}
	jQuery('.at-sidebar .at-widgetlinking ul li a').on('click', function() {
		jQuery('.at-sidebar .at-widgetlinking ul li').removeClass('at-active');
		jQuery(this).parent('li').addClass('at-active');
	});
	/* -------------------------------------
			HEADER FIXED
	-------------------------------------- */
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("at-header").style.top = "0";
			document.getElementById("at-header").classList.remove("nav-up")
		} else {
			document.getElementById("at-header").style.top = "-80px";
			document.getElementById("at-header").classList.add("nav-up")
		}
		prevScrollpos = currentScrollPos;
	}
});
/* -------------------------------------
		HEADER FIXED
-------------------------------------- */
jQuery(window).scroll(function(){
	var sticky = jQuery('header#at-header'),
	scroll = jQuery(window).scrollTop();
	if (scroll >= 50) sticky.addClass('at-headerbgwhite');
	else sticky.removeClass('at-headerbgwhite');
});

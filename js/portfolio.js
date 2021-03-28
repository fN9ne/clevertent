/*include('../js#libs/libs/imagesloaded.pkgd.min.js');
include('../js#libs/libs/isotope.pkgd.min.js');
include('../js#libs/libs/packery-mode.pkgd.min.js');*/
$(document).ready(function() {
	let work = $('.work');
	if ($(window).width() >= 992) {
		work.hover(function() {
			$('.portfolio__wrapper').toggleClass('_dark');
			$(this).toggleClass('_active');
		});
	}
	/* isotope */
	/*$('.portfolio__wrapper').imagesLoaded(function() {
		$('.portfolio__wrapper').isotope({
			itemSelector: '.work',
			layoutMode: 'packery',
		});
	});*/
	/* filter */
	let filter_item = $('.portfolio-filter__item');
	filter_item.click(function() {
		filter_item.removeClass('_current');
		$(this).addClass('_current');
		let filter = $(this).attr('data-filter');
		if (filter == "clear") {
			work.removeClass('_hidden');
		} else {
			work.addClass('_hidden');
			$(`.work[data-category='${filter}']`).removeClass('_hidden');
		}
	});
});
$(document).ready(function() {
	new fullpage('#fullpage', {
		scrollingSpeed: 300,
		autoScrolling: true,
		anchors: ['transparent', 'classic', 'spherical', 'pagoda', 'star', 'additional-equipment'],
		navigation: true,
		navigationPosition: 'left',
		scrollBar: true,
		overflowScroll: true,
		normalScrollElements: '.burger__content',
		afterLoad: function() {
			if (!$('body').hasClass('fp-viewing-transparent')) {
				$('header').addClass('_bg');
			} else {
				$('header').removeClass('_bg');
			}
			if ($('body').hasClass('fp-viewing-additional-equipment')) {
				$('#fp-nav').addClass('_black');
			} else {
				$('#fp-nav').removeClass('_black');
			}
			/* element menu highlight */
			itemHighlight();
		},
		afterRender: function() {
			// history.pushState('', document.title, window.location.pathname);
			setTimeout(() => {
				itemHighlight();
			}, 250);
		},
	});
	function itemHighlight() {
		let current = $('body').attr('class');
		current = current.substring(current.indexOf('fp-viewing-') + 'fp-viewing-'.length, current.length);
		$('.header-menu__item').removeClass('_current');
		$(`.header-menu__item a[href="/#${current}"]`).closest('.header-menu__item').addClass('_current');
	}
});
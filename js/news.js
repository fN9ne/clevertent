$(document).ready(function() {
	function listHeight() {
		if ($(window).width() >= 1280) {
			let height = $('.news__general').css('height');
			$('.news__container').css('height', height);
		}
	};
	$(window).on('load resize', listHeight);
	/* change news */
	$('.news__item').click(function(e) {
		if ($(this).closest('.news__general').length == 0) {
			$('.news__item').removeClass('_main').appendTo('.news__optional-list');	
			$(this).addClass('_main').appendTo('.news__general-wrapper');
			listHeight();
		}
	});
});
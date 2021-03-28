$(document).ready(function() {
	let select = $('.catalog-filter-select');
	for (let i = 0; i < select.length; i++) {
		let sel = select.eq(i);
		let current = select.find('.catalog-filter-select__current');
		let list = select.find('.catalog-filter-select__list');
		let item = list.find('.catalog-filter-select__item');
		current.click(function() {
			sel.toggleClass('_active');
		});
		item.click(function() {
			sel.removeClass('_active');
			list.append(current.find('li'));
			current.append($(this));
		});
	}
	$(document).click(function(e) {
		if (!e.target.closest('.catalog-filter-select')) select.removeClass('_active');
	});
	/* mobile filter */
	$('.catalog__filter-btn').click(function() {
		$(this).toggleClass('_active');
		$('.catalog-filter').toggleClass('_active');
	});
});
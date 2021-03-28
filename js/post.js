$(document).ready(function() {
	let video = $('#video');
	let videoDOM = video[0];
	let play = $('.single__play');
	play.click(function() {
		videoDOM.volume = 0.3;
		videoDOM.play();
		play.fadeOut(300);
		video.attr('controls', '');
	});
});
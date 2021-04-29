$(document).ready(function(){
	$('nav a').on('click', function(e){
		e.preventDefault(); //отменяем стандартное поведение

		let href = $(this).attr('href');
		let headerHeight = $('.header').height();
		console.log(headerHeight);
		let offset = $(href).offset().top - headerHeight;

		$('body,html').animate({
			scrollTop: offset,
		}, 850);
	});
	$('.to-top').on('click', function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, 850);
	});
});
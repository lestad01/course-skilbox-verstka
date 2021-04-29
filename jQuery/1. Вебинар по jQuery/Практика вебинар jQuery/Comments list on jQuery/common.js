$(document).ready(function(){

	function initialState (){
		if (localStorage.getItem('comments') == null){
			$('.comments__none').show();
		} else {
			$('.comments__none').hide();
			$('.comments__list').html(localStorage.getItem('comments'));
		}
	}
	initialState();

	function addToStorage(){
		let content = $('.comments__list').html();
		console.log(content);

		localStorage.setItem('comments', content);
	}

	function addComment (){
		let name = $('input').val(),
			text = $('textarea').val(),
			date = new Date().toLocaleString();
		if (name.length !== 0 && text.length !== 0){
			$('input').removeClass('error');
			$('textarea').removeClass('error');

			$('.comments__none').hide(); //hide - скрывать

			$('.comments__list').append(`
				<div class="comments__item">
					<button class="comments__delete"></button>
					<div class="comments__author">${name}</div>
					<div class="comments__text">${text}</div>
					<div class="comments__date">${date}</div>
				</div>
			`);
			name = $('input').val('');
			text = $('textarea').val('');

			addToStorage();

		} else {
			$('input').addClass('error');
			$('textarea').addClass('error');
		}
	}

	function deleteComment (item){
		item.remove();
		let items = $('.comments__item');
		addToStorage();
		console.log(items.length);
		if (items.length == 0){
			$('.comments__none').show();
			localStorage.removeItem('comments');
		}
	}

	$('.comments__add').on('click', addComment);

	$('body').on('click', '.comments__delete', function(e){
		e.preventDefault();

		let item = $(this).parents('.comments__item');

		deleteComment(item);
		
	});

});
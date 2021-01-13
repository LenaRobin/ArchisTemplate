document.addEventListener("DOMContentLoaded", function(){

	// Desktop menu & background layer behavior
	var background = document.querySelector('.background');
	var layer = document.querySelector('.layers');

	console.log(background);

	background.addEventListener("mouseenter", function(){
		layer.classList.add('layers--move--hint');
	});

	background.addEventListener("mouseleave", function(){
		layer.classList.remove('layers--move--hint');
	});

	background.addEventListener("click", function(){
		layer.classList.add('layers--move--aside');
	});

	layer.addEventListener("click", function(){
		layer.classList.remove('layers--move--aside');
	});

	layer.addEventListener("mouseenter", function(){
		layer.classList.add('layers--move--hintback');
	});

	layer.addEventListener("mouseleave", function(){
		layer.classList.remove('layers--move--hintback');
	});


	// Filters opening
	var open = document.querySelector('.button__open');
	var panel = document.querySelector('.filter__panel');

	open.addEventListener('click', function(){
		panel.classList.add('filter__panel--open');
	});

});

document.addEventListener('DOMContentLoaded', function() {

	const sidebar = document.querySelector('.sidebar'),
	container = document.querySelector('.sidebar__container'),
	burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		sidebar.classList.toggle('sidebar--active');
		container.classList.toggle('sidebar__container--active');
	});

});
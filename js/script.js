document.addEventListener('DOMContentLoaded', function() {

	const sidebar = document.querySelector('.sidebar'),
	container = document.querySelector('#sidebar__container'),
	sidebarItem = document.querySelectorAll('.sidebar__item'),
	burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		sidebar.classList.toggle('sidebar--active');
		container.classList.toggle('sidebar__container--active');
	});


	sidebar.onclick = function (e) {
/* 		if (e.target.className != container) {
			sidebar.classList.toggle('sidebar--active');
			container.classList.toggle('sidebar__container--active');
			console.log(true);
		}; */

		const withinContainer = e.composedPath().includes(container);
		if ( ! withinContainer ) {
			sidebar.classList.toggle('sidebar--active');
			container.classList.toggle('sidebar__container--active');
		}
		sidebarItem.forEach(item => {
			item.addEventListener('click', () => {
				sidebar.classList.toggle('sidebar--active');
				container.classList.toggle('sidebar__container--active');
			});
		});
	};



/* 	sidebarItem.forEach(item => {
		item.addEventListener('click', () => {
			sidebar.classList.toggle('sidebar--active');
			container.classList.toggle('sidebar__container--active');
		});
	}); */

});
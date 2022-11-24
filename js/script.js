document.addEventListener('DOMContentLoaded', function() {

	const sidebar = document.querySelector('.sidebar'),
	container = document.querySelector('.sidebar__container'),
	sidebarItem = document.querySelectorAll('.sidebar__item'),
	burger = document.querySelector('.burger'),
	header = document.querySelector('.header'),
	promo = document.querySelector('.promo');
	document.querySelector('#scroll').addEventListener('click', scrollToElement);

	burger.addEventListener('click', () => {
		sidebar.classList.toggle('sidebar--active');
		container.classList.toggle('sidebar__container--active');
	});

	sidebar.onclick = function (e) {
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

	function scrollToElement(e) {
		promo.scrollIntoView(true);
	}

	showHeaderScroll = () =>{
		const currentScroll = window.pageYOffset; 
		let elementID = 'main';
		const elementOffsetTop = document.getElementById(elementID).offsetTop;
	
		if ( currentScroll > elementOffsetTop && header.className != 'header--stiky'){
			header.classList.add('header--stiky');
		} else {
			header.classList.remove('header--stiky');
		}
	};
	window.addEventListener('scroll', showHeaderScroll);
});
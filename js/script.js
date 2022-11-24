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
	
		if ( currentScroll > elementOffsetTop && header.className != 'header--fixed'){
			header.classList.add('header--fixed');
		} else {
			header.classList.remove('header--fixed');
		}
	};
	window.addEventListener('scroll', showHeaderScroll);


	const theory = document.querySelector('.price--theory'),
	practice = document.querySelector('.price--practice'),
	vip = document.querySelector('.price--vip'),
	eur = document.querySelector('#eur'),
	usd = document.querySelector('#usd'),
	uah = document.querySelector('#uah'),
	rub = document.querySelector('#rub');


	const price = {
		theoryRub: "",
		practiceRub: "",
		vipRub: ""
	};

	const valute = {
		EUR: "",
		USD: "",
		UAH: ""
	};

	axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
		.then((res) => {
			valute.EUR = res.data.Valute.EUR.Value;
			valute.USD = res.data.Valute.USD.Value;
			valute.UAH = res.data.Valute.UAH.Value;
			price.theoryRub = parseInt(theory.textContent);
			price.practiceRub = parseInt(practice.textContent);
			price.vipRub = parseInt(vip.textContent);
	});

	eur.addEventListener('click', () => {
		theory.textContent = Math.ceil(price.theoryRub / valute.EUR) + eur.textContent;
		practice.textContent = Math.ceil(price.practiceRub / valute.EUR) + eur.textContent;
		vip.textContent = Math.ceil(price.vipRub / valute.EUR) + eur.textContent;
	});

	usd.addEventListener('click', () => {
		theory.textContent = Math.ceil(price.theoryRub / valute.USD) + usd.textContent;
		practice.textContent = Math.ceil(price.practiceRub / valute.USD) + usd.textContent;
		vip.textContent = Math.ceil(price.vipRub / valute.USD) + usd.textContent;
	});

	uah.addEventListener('click', () => {
		theory.textContent = Math.ceil(price.theoryRub / (valute.UAH) * 10) + uah.textContent;
		practice.textContent = Math.ceil(price.practiceRub / (valute.UAH) * 10) + uah.textContent;
		vip.textContent = Math.ceil(price.vipRub / (valute.UAH) * 10) + uah.textContent;
	});

	rub.addEventListener('click', () => {
		theory.textContent = price.theoryRub + rub.textContent;
		practice.textContent = price.practiceRub + rub.textContent;
		vip.textContent = price.vipRub + rub.textContent;
	});
});
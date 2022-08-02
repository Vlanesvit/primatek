
/* ====================================
Инициализация слайдера в блоке rs-project
==================================== */
function initProjectSliders() {
	if (document.querySelector('.rs-project__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-project__slider', {
			// // Автопрокрутка
			// autoplay: {
			// 	// Пауза между прокруткой
			// 	delay: 10000,
			// 	// Закончить на последнем слайде
			// 	stopOnLastSlide: false,
			// 	// Отключить после ручного переключения
			// 	disableOnInteraction: false,
			// },
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,
			// Скорость смены слайдов
			speed: 800,
			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			navigation: {
				nextEl: '.rs-project__button-next',
				prevEl: '.rs-project__button-prev',
			},

			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 15,
					centeredSlides: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,

				},
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,

				},
				1140: {
					slidesPerView: 2.5,
					spaceBetween: 30,
					centeredSlides: false,

				},
				1480: {
					slidesPerView: 3.164,
					spaceBetween: 60,
					centeredSlides: false,

				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initProjectSliders();
});


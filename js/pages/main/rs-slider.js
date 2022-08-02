
/* ====================================
Инициализация слайдера в блоке rs-slider
==================================== */
function initMainSliders() {
	if (document.querySelector('.rs-slider-img__slider') && document.querySelector('.rs-slider-text__slider')) {
		// Перечень слайдеров
		const sliderImg = new Swiper('.rs-slider-img__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 10000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},
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
		});

		const sliderText = new Swiper('.rs-slider-text__slider', {
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
			// Отступ между слайдами
			spaceBetween: 12,
			// Вертикальный слайдер
			// direction: 'vertical',
			slidesPerView: 1,
			watchSlidesVisibility: true
		});

		// Связка слайдеров
		sliderText.controller.control = sliderImg;
		sliderImg.controller.control = sliderText;
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initMainSliders();
});



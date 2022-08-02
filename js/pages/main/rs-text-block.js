
/* ====================================
Инициализация слайдера в блоке rs-text-block
==================================== */
function initTextBlockSliders() {
	if (document.querySelector('.rs-text-block__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-text-block__slider', {
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

			slidesPerView: 1,
			spaceBetween: 0,

			navigation: {
				nextEl: '.rs-text-block__button-next',
				prevEl: '.rs-text-block__button-prev',
			},

			pagination: {
				el: '.rs-text-block__pagination',
				clickable: true,
				dynamicBullets: true,
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initTextBlockSliders();
});



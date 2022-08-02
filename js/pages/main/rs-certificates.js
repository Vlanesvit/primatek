/* ====================================
Инициализация галереи
==================================== */
/*
data-gallery - блок галереи 
data-gallery-item - блок с картинкой
data-src - ссылка на картинку 
*/
if (document.querySelector('[data-gallery]')) {
	const galleries = document.querySelectorAll('[data-gallery]');
	if (galleries.length) {
		let galleyItems = [];
		galleries.forEach(gallery => {
			galleyItems.push({
				gallery,
				galleryClass: lightGallery(gallery, {
					plugins: [lgZoom],
					licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
					selector: '[data-gallery-item]',
					// Скорость
					speed: 800,
					// Отключить кнопку Скачать
					download: false,
					// Надпись под фото (Вывод атрибута alt у img)
					appendSubHtmlTo: false,
				})
			})
		});
	}
}

/* ====================================
Инициализация слайдера в блоке rs-certificates
==================================== */
function initCertificateSliders() {
	if (document.querySelector('.rs-certificates__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-certificates__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 5000,
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
			simulateTouch: false,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			pagination: {
				el: '.rs-certificates__pagination',
				clickable: true,
				dynamicBullets: true,

			},

			slidesPerView: 5,
			spaceBetween: 30,
			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10,
					centeredSlides: false,
				},
				540: {
					slidesPerView: 2,
					centeredSlides: false,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
					centeredSlides: false,

				},
				992: {
					slidesPerView: 4,
					spaceBetween: 30,
					centeredSlides: false,

				},
				1450: {
					slidesPerView: 5,
					spaceBetween: 30,
					centeredSlides: false,

				},
			}

		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initCertificateSliders();
});


/* ====================================
Инициализация слайдера в блоке products__slider
==================================== */
function initCatalogSliders() {
	if (document.querySelector('.products__slider')) {
		const productSliders = document.querySelectorAll('.products__slider');
		productSliders.forEach(productSlider => {
			'use strict';
			const breakpoint = window.matchMedia('(min-width:1025px)');
			let catalogSlider;
			const breakpointChecker = function () {
				if (breakpoint.matches === true) {
					if (catalogSlider !== undefined) catalogSlider.destroy(true, true);
					return;
				} else if (breakpoint.matches === false) {
					return enableSwiper();
				}
			};

			const enableSwiper = function () {
				catalogSlider = new Swiper(productSlider, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 7000,
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
					// Курсор перетаскивания
					grabCursor: true,
					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,

					// Пагинация
					pagination: {
						el: '.products__pagination',
						clickable: true,
						dynamicBullets: true,
					},

					// Брейкпоинты(адаптив)
					// Шрина экрана
					breakpoints: {
						320: {
							slidesPerView: 1.5,
							spaceBetween: 15,
							centeredSlides: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
							centeredSlides: false,
						},
					},
				});
			};

			breakpoint.addListener(breakpointChecker);
			breakpointChecker();
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initCatalogSliders();
});

/* ====================================
Открытие модальных окон фильтров
==================================== */
function modalSorting() {
	const filterBtnShow = document.getElementById('catalog-filter-show');
	const categoryBtnShow = document.getElementById('catalog-category-show');
	const filter = document.querySelector('.rs-catalog .filters');
	const category = document.querySelector('.rs-catalog .category');
	const modalSorting = [filter, category];

	filterBtnShow.addEventListener('click', function () {
		filter.classList.add('_modal-show')
		document.body.classList.add('lock');
	})

	categoryBtnShow.addEventListener('click', function () {
		category.classList.add('_modal-show')
	})

	modalSorting.forEach((modal) => {
		modal.addEventListener('click', function (e) {
			const modalTarget = e.target;
			// Делегирование события
			if (
				modalTarget.classList.contains('overlay') ||
				modalTarget.classList.contains('modal-close')
			) {
				modal.classList.remove('_modal-show');
				document.body.classList.remove('lock');
			}
		})
	});
}
if (document.querySelector('.rs-catalog .filters') && document.querySelector('.rs-catalog .category')) {
	modalSorting()
}

/* ====================================
Подсчет активных фильтров и отчистка
==================================== */
function filterClear() {
	const filter = document.querySelector('.rs-catalog .filters');
	const filterBtnShow = document.getElementById('catalog-filter-show');
	const clearBtn = document.getElementById('catalog-filter-clear');
	const inputs = filter.querySelectorAll('input');

	clearBtn.addEventListener('click', function () {
		inputs.forEach(input => {
			input.checked = false;
			filterBtnShow.querySelector('span').innerHTML = '0';
		});
	})

	inputs.forEach(input => {
		input.addEventListener('input', function () {
			const checkedFilter = filter.querySelectorAll('input:checked');
			let numCheckedFilter = checkedFilter.length;
			filterBtnShow.querySelector('span').innerHTML = numCheckedFilter
		})
	});
}
if (document.querySelector('.rs-catalog .filters')) {
	filterClear();
}

/* ====================================
Подсчет активных категорий и отчистка
==================================== */
function categoryClear() {
	const category = document.querySelector('.rs-catalog .category');
	const categoryBtnShow = document.getElementById('catalog-category-show');
	const clearBtn = document.getElementById('catalog-category-clear');
	const inputs = category.querySelectorAll('input');

	clearBtn.addEventListener('click', function () {
		inputs.forEach(input => {
			input.checked = false;
			categoryBtnShow.querySelector('span').innerHTML = '0';
		});
	})

	inputs.forEach(input => {
		input.addEventListener('input', function () {
			const checkedCategory = category.querySelectorAll('input:checked');
			let numCheckedCategory = checkedCategory.length;
			categoryBtnShow.querySelector('span').innerHTML = numCheckedCategory
		})
	});
}
if (document.querySelector('.rs-catalog .category')) {
	categoryClear();
}


/* ====================================
Отчистка фильтров (десктоп)
==================================== */
function deskFiltersClear() {
	const mainForm = document.querySelector('.main-sort-form');
	const inputs = mainForm.querySelectorAll('input');
	const clearBtn = mainForm.querySelector('.rs-catalog__forms_clear > button')

	const mobFilterShowBtn = document.getElementById('catalog-filter-show');
	const mobCategoryShowBtn = document.getElementById('catalog-category-show');

	clearBtn.addEventListener('click', function () {
		inputs.forEach(input => {
			input.checked = false;
			mobFilterShowBtn.querySelector('span').innerHTML = '0';
			mobCategoryShowBtn.querySelector('span').innerHTML = '0';
		});
	})
}
if (document.querySelector('.main-sort-form')) {
	deskFiltersClear();
}

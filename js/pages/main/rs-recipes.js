
/* ====================================
Открытие модальных окон фильтров
==================================== */
function modalSorting() {
	const filterBtnShow = document.getElementById('recipes-filter-show');
	const categoryBtnShow = document.getElementById('recipes-category-show');
	const filter = document.querySelector('.rs-recipes .filters');
	const category = document.querySelector('.rs-recipes .category');
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
if (document.querySelector('.rs-recipes .filters') && document.querySelector('.rs-recipes .category')) {
	modalSorting()
}

/* ====================================
Подсчет активных фильтров и отчистка
==================================== */
function filterClear() {
	const filter = document.querySelector('.rs-recipes .filters');
	const filterBtnShow = document.getElementById('recipes-filter-show');
	const clearBtn = document.getElementById('recipes-filter-clear');
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
if (document.querySelector('.rs-recipes .filters')) {
	filterClear();
}
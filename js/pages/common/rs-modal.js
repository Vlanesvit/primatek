/* ====================================
Модальные окна
==================================== */
/*
Для модального окна даем класс modal__block и id c названием окна
Для кнопки пишем атрибут data-modal-open со значением id вызываемого модального окна
Чтобы закрыть попап нужно дать класс modal-off нужной кнопке

Например:
<button class="btn" data-modal-open="modal-feedback">Оставьте заявку</button>

<div class="modal__block" id="modal-feedback">
	<button class="modal-off">Закрыть</button>
	...
</div>
*/
function modal() {
	const modalBtnsOpen = document.querySelectorAll('[data-modal-open]');
	const modalBlocks = document.querySelectorAll('.modal__block');

	// Ищем модальные окна по методу dataset и id, даем класс _modal-show
	modalBtnsOpen.forEach(function (modalBtnOpen) {
		modalBtnOpen.addEventListener('click', function (e) {
			e.preventDefault();
			document.body.classList.add('lock');
			// Ищем кнопку по атрибуту dataset
			const modalId = this.dataset.modalOpen;
			// Ищем модальное окно по атрибуту кнопки, что мы нашли, и по id
			const modal = document.querySelector('#' + modalId);
			modal.classList.add('_modal-show');

		});
	});

	// Закрываем открытые модальные окна по оверлею и кнопке
	modalBlocks.forEach(function (modalBlock) {
		modalBlock.addEventListener('click', function (e) {
			const modalTarget = e.target;
			// Делегирование события
			if (
				modalTarget.classList.contains('overlay') ||
				modalTarget.classList.contains('modal-off')
			) {
				modalBlock.classList.remove('_modal-show');
				document.body.classList.remove('lock');
			}
		});
	});
}
if (document.querySelector('.modal__block')) {
	modal()
}


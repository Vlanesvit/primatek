/* ====================================
Табы
==================================== */
const tabServices = () => {
	const contactBlock = document.querySelectorAll('.rs-services');

	contactBlock.forEach(contact => {
		// Кнопка
		const tabsHandlesElems = contact.querySelectorAll('[data-tabs-handler]');
		// Контент
		const tabsContentElems = contact.querySelectorAll('[data-tabs-field]');

		for (const tabElem of tabsHandlesElems) {
			tabElem.addEventListener('click', () => {
				// Удаление у всех кнопок активного класса
				tabsHandlesElems.forEach((tabItem) => {
					tabItem.classList.remove('_tab-active');
				});

				// Активный класс нажатой кнопке
				tabElem.classList.add('_tab-active');

				// Сравнение значения дата-атрибутов и переключение, если значения схожи
				tabsContentElems.forEach((tabContent) => {
					if (tabContent.dataset.tabsField === tabElem.dataset.tabsHandler) {
						tabContent.classList.add('_content-active');
					} else {
						tabContent.classList.remove('_content-active');
					}
				});
			});
		}
	});

}
if (document.querySelector('.rs-services [data-tabs-handler]') && document.querySelector('.rs-services [data-tabs-field]')) {
	tabServices()
}
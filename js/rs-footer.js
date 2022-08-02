function map(n) {
	ymaps.ready(init);
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			controls: [],
			center: [59.568387, 30.146158],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 15
		});

		let myPlacemark = new ymaps.Placemark([59.568387, 30.146158], {
		}, {
			// Опции.
			balloonContentHeader: 'Mistoun',
			balloonContentBody: 'Москва, Николоямская 40с1',
			balloonContentFooter: '+ 7(495) 507-54 - 90',
			hasBalloon: true,
			hideIconOnBalloonOpen: true,

			// hasBalloon: false,
			// hideIconOnBalloonOpen: false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/footer/pin.svg',
			// Размеры метки.
			iconImageSize: [370, 175],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-370, -175],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [0, 0],
		});
		myMap.geoObjects.add(myPlacemark);
	}
}
map()

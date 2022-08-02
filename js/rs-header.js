/* ====================================
Мобильное меню
==================================== */
const burger = () => {
	const mobileMenu = document.querySelectorAll('.menu');

	mobileMenu.forEach(menu => {
		const burgerBtn = menu.querySelector('.menu__icon');
		const burgerMenuBody = menu.querySelector('.menu__body');

		if (burgerBtn) {
			burgerBtn.addEventListener('click', function () {
				// Показать меню
				burgerBtn.classList.toggle('_icon-open');
				burgerMenuBody.classList.toggle('_menu-active');
			});
		}
	});
}
if (document.querySelectorAll('.menu')) {
	burger()
}

/* ====================================
Появление фиксированной шапки
==================================== */
const fixHeader = document.getElementById('fix-header');

window.addEventListener('scroll', function () {
	fixHeader.classList.toggle('_header-fix-show', window.scrollY > 200)
});


/* ====================================
Якорный скролл к блоку
==================================== */
function smoothScroll() {
	const smoothLink = document.querySelectorAll('.smooth-link > a');
	smoothLink.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const IdBlock = e.target.getAttribute('href').substr(1);
			document.getElementById(IdBlock).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});
}
if (document.querySelector('.smooth-link > a')) {
	smoothScroll()
}

function headerNavigation() {
	const contentBlocks = document.querySelectorAll('.smooth-block');
	const sidebarLinks = document.querySelectorAll('.smooth-link');

	/* ====================================
	Поместить ссылку при скролле к блоку
	==================================== */
	function markLink() {
		contentBlocks.forEach(block => {
			let top = window.scrollY;
			let offset = block.offsetTop - 300;
			let heightBlock = block.offsetHeight;
			let IdBlock = block.getAttribute('id');

			if (top >= offset && top < offset + heightBlock) {
				sidebarLinks.forEach(link => {
					link.classList.remove('current_menu_item');
					document.querySelector('.smooth-link > a[href*=' + IdBlock + ']').closest('.smooth-link').classList.add('current_menu_item');
				});
			} else {
				sidebarLinks.forEach(link => {
					document.querySelector('.smooth-link > a[href*=' + IdBlock + ']').closest('.smooth-link').classList.remove('current_menu_item');
				});
			}
		});
	}
	window.addEventListener('scroll', markLink)
	window.addEventListener('load', markLink)
}
if (document.querySelector('.smooth-link') && document.querySelector('.smooth-block')) {
	headerNavigation()
}



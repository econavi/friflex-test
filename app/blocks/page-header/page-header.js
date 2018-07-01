let classSwitcher = 'js-menu-toggle';
let classSwitcherActive = 'menu-switcher_is-active';
let classMenu = 'js-menu';
let classMenuIsSowed = 'page-header__nav_is-showed';

let switcher = document.querySelector(`.${classSwitcher}`);
let menu = document.querySelector(`.${classMenu}`);

switcher.addEventListener('click', switcherHundler);

function switcherHundler() {
	switcher.classList.toggle(classSwitcherActive);
	menu.classList.toggle(classMenuIsSowed)

	if(menu.classList.contains(classMenuIsSowed)) {
		switcher.style.position = 'fixed';
		document.body.style.overflow = 'hidden';
	} else {
		switcher.style.position = 'relative';
		document.body.style.overflow = '';
	}
}

function cl(data) {
	console.log(data);
}
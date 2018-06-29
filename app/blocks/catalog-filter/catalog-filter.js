// Слайдер
//
// 1. открывать фильтр по клику на заголовок
//	  при этом, любой другой открытый фильтр - закрывается
//
// 2. закрывать открытый фильтр по клику на его заголовок
//
// 3. закрывать фильтр после клика по зоне выбора select, если пункт был не кативен
//
//
//  Фильтр
//
// 1. По клику на заголовок фильтра меняем его состояние
//
// 2. В активном состоянии ставим обработчик на пункты выбора
//
// 3. При клике, пункт становится активным, если не был таким


let classFilterActive = 'catalog-filter_is-active';
let classOptionActive = 'catalog-filter__option_is-active';
let classTitle = 'js-catalog-filter-title';
let classOptionsList = 'js-catalog-filter-options-list';

let targetTitles = document.querySelectorAll(`.${classTitle}`);
let optionsLists = document.querySelectorAll(`.${classOptionsList}`);
let targetFilter;

for(let i = 0; i < targetTitles.length; i++) {
	targetTitles[i].addEventListener('click', hundlerClickTitle);
}

for(let i = 0; i < optionsLists.length; i++) {
	optionsLists[i].addEventListener('click', hundlerClickOptionsLists);
}

// кликнули по загаловку фильтра
function hundlerClickTitle(e) {
	// вернем фильтр
	targetFilter = e.target.parentElement;

	// если фильтр не активен
	if(!targetFilter.classList.contains(classFilterActive)) {
		// добавим ему класс classFilterActive
		targetFilter.classList.add(classFilterActive);
	}
	
	// иначе
	else {
		// удалим класс classFilterActive
		targetFilter.classList.remove(classFilterActive);
	}	
}

function hundlerClickOptionsLists(e) {
	let targetOption = e.target;
	let targetOptionsList = targetOption.parentElement;
	let childrenOptionsList = targetOptionsList.children;

	
	for(let i = 0; i < childrenOptionsList.length; i++) {
		if(childrenOptionsList[i].classList.contains(classOptionActive)) {
			childrenOptionsList[i].classList.remove(classOptionActive);
		}
	} 
	targetOption.classList.add(classOptionActive);
	targetFilter.classList.remove('js-accordion_active');
	targetFilter.classList.remove(classFilterActive);
	targetFilter.lastElementChild.style.height = null;

}

function cl(data) {
	console.log(data)
}




/*
let classFilterActive = 'catalog-filter_is-active';
let classOptionActive = 'catalog-filter__option_is-active';
let classTitle = 'js-catalog-filter-title';
let classOptionsList = 'js-catalog-filter-options-list';

let targetTitles = document.querySelectorAll(`.${classTitle}`);
let optionsLists = document.querySelectorAll(`.${classOptionsList}`);
let targetFilter;

for(let i = 0; i < targetTitles.length; i++) {
	targetTitles[i].addEventListener('click', hundlerClickTitle);
}

for(let i = 0; i < optionsLists.length; i++) {
	optionsLists[i].addEventListener('click', hundlerClickOptionsLists);
}

// кликнули по загаловку фильтра
function hundlerClickTitle(e) {
	// вернем фильтр
	targetFilter = e.target.parentElement;

	// если фильтр не активен
	if(!targetFilter.classList.contains(classFilterActive)) {
		// добавим ему класс classFilterActive
		targetFilter.classList.add(classFilterActive);
	}
	
	// иначе
	else {
		// удалим класс classFilterActive
		targetFilter.classList.remove(classFilterActive);
	}	
}

function hundlerClickOptionsLists(e) {
	let targetOption = e.target;
	let targetOptionsList = targetOption.parentElement;
	let childrenOptionsList = targetOptionsList.children;

	
	for(let i = 0; i < childrenOptionsList.length; i++) {
		if(childrenOptionsList[i].classList.contains(classOptionActive)) {
			childrenOptionsList[i].classList.remove(classOptionActive);
		}
	} 
	targetOption.classList.add(classOptionActive);
	targetFilter.classList.remove('js-accordion_active');
	targetFilter.classList.remove(classFilterActive);
	targetFilter.lastElementChild.style.height = null;

}
*/
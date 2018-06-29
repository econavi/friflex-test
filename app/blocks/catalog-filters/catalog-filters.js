
let class_filters = 'js-catalog-filters';
let class_filter = 'catalog-filter';
let class_filter_isActive = 'catalog-filter_is-active';
let class_filterSwitcher = 'catalog-filter__header';
let class_filterSwitcher_isActive = 'catalog-filter__header_is-active';
let class_filterContent = 'catalog-filter__content';
let class_filterOptionsList = 'catalog-filter__options-list';
let class_filterOption = 'catalog-filter__option';
let class_filterOption_isActive = 'catalog-filter__option_is-active';

let filters = document.querySelector(`.${class_filters}`);

let parentTargetFilter;
let targetFilter;
let targetFilterIsActive;
let targetContent;
let targetOption;
let targetOptionIsActive;

let closeFilterAfterSelect = true; // если необходимо закрывать фильтр, после выбора одного из пунктов

filters.addEventListener('click', filtersClickHundler);

function filtersClickHundler(e) {
	e.preventDefault();
	
	// проверим на целевой клик
	let clickIsTarget = findElem(e.target, this, class_filterSwitcher);
	
	// если клик был целевым
	if(clickIsTarget) {
		// получим сам фильтр, его состояние, родителя и контентную часть
		targetFilter = findElem(e.target, this, class_filter);
		targetFilterIsActive = targetFilter.classList.contains(class_filter_isActive);
		targetContent = (function() {
							let result;
							let childrenElems = targetFilter.children;
							for(let i = 0; i < childrenElems.length; i++) {
								let elem = childrenElems[i];
								if(elem.classList.contains(class_filterContent)) {
									return result = elem;
								} 
							}
							// если контентная часть не нашлась
							cl(`В разметке отсутствует ${class_filterContent}`);
						})();

		// Начало оброботки
		if(!targetFilterIsActive) { // если фильтр не активен
			removeActiveFilters();
			openFilter(); // открываем фильтр
			// ставим обработчик клика по контентной области фильтра
			targetContent.addEventListener('click', contentClickHundler);
		
		} else { // иначе
			closeFilter(); // закрываем фильтр
			// удаляем обработчик клика по контентной области фильтра
			targetContent.removeEventListener('click', contentClickHundler);
		}
	}
} // END-filtersClickHundler
	
// Обработчик клика по контентной области фильтра
function contentClickHundler(e) {
	// ждём клик по пункту выбора
	// будем менять состояние у всех пунктов
	// и при необходимости закрывать фильтр
	e.preventDefault();
	
	// проверим на целевой клик
	targetOption = findElem(e.target, this, class_filterOption);

	// если клик целевой
	if(targetOption) {
		// проверим и вернем состояние
		targetOptionIsActive = targetOption.classList.contains(class_filterOption_isActive);

		// если целевой пункт не активен
		if(!targetOptionIsActive) {
			// переназначим состояние:
			// ранее активный пункт отменим
			let allOptions = findElem(targetOption, this, class_filterOptionsList).children;
			for(let i = 0; i < allOptions.length; i++) {
				if(allOptions[i].classList.contains(class_filterOption_isActive)) {
					allOptions[i].classList.remove(class_filterOption_isActive);
				}
			}
			// целевой пункт активируем
			targetOption.classList.add(class_filterOption_isActive);

			// если нужно закрыть фильтр
			if(closeFilterAfterSelect) {
				closeFilter(); // закрываем фильтр
				// удаляем обработчик клика по контентной области фильтра
				targetContent.removeEventListener('click', contentClickHundler);
			}
		}
	}
} // END-contentClickHundler

function openFilter() {
	targetFilter.classList.add(class_filter_isActive);
	targetContent.style.height = targetContent.scrollHeight + 'px';
}

function closeFilter() {
	targetFilter.classList.remove(class_filter_isActive);
	targetContent.style.height = null;
}

function removeActiveFilters() {
	let items = filters.children;
	for(let i = 0; i < items.length; i++) {
		let item = items[i].firstElementChild;
		if(item.classList.contains(class_filter_isActive)) {
			item.classList.remove(class_filter_isActive);
			item.lastElementChild.style.height = null;
		}
	}
};

// Функция ищет и возвращает элемент с нужным классом, поднимаясь вверх по родительским элементам
function findElem(from, to, className) {
	let elem;
	outer: while(from != to) {
		// проверяем, есть ли нужный класс у элемента
		for(let i = 0; i < from.classList.length; i++) {
			if(from.classList[i] == null) {continue}
			if(from.classList[i] == className) {
				elem = from;
				break outer;
			}
		}
		// если класс не найден, переходим к следующему родительскому элементу и повторяем проверку
		from = from.parentElement;
	}
	// если элемент не найден, вернем false
	return (elem) ? elem : false 
}

// Вывод в консоль
function cl(data) {
	console.log(data);
}



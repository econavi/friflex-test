# Базовый шаблон проекта.

## На борту:

- `gulp 4.0` - Gulp.js
- `gulp-pug` - шаблонизатор PUG (Jade)
- `gulp-stylus` - препроцессор для CSS
- `stylint` - проверка качества Stylus кода
- `rupture` - примеси медиа-запросов Rupture для Stylus
- `gulp-group-css-media-queries` - группировка стилей по media-queries
- `autoprefixer-stylus` - подстановка вендорских префиксов в CSS
- `gulp-csso` - минификация CSS
- `webpack-stream` - сборка JavaScript
- `babel` - транспайлер ES2015
- `eslint` - проверка JavaScript на качество кода с подсказками
- `gulp-sourcemaps` - генератор карт исходного кода для удобной отладки
- `gulp-plumber` - отслеживает ошибки при сборке проекта
- `browser-sync` - сервер и синхронное тестирование сайта в браузерах
- `gulp-svg-sprite` - генератор SVG-спрайтов и CSS переменных
- `gulp.spritesmith-multi` - генератор растровых спрайтов и CSS переменных
- `gulp-image` - оптимизация изображений PNG, JPEG, GIF, SVG
- `jquery` - библиотека jQuery


## Перед началом работы

Для работы шаблона необходимо установить `nodejs`

- [Установка Nodejs](https://nodejs.org/en/)


## Установка шаблона

``` sh
$ git clone https://github.com/econavi/project-template.git project-name
$ cd project-name
$ npm install
```

По окончанию выполнения будут установлены все необходимые пакеты.


## Задачи Gulp

- `$ gulp dev` - запуск шаблона для разработки с отслеживанием изменений
- `$ npm run public` - полная сборка проекта на production
- `$ gulp html` - компиляция Pug
- `$ gulp styles` - компиляция Stylus
- `$ gulp scripts` - сборка JS
- `$ gulp images` - сжатие и копирование изображений в папку `public/`
- `$ gulp fonts` - копирование шрифтов в папку `public/`
- `$ gulp misc` - копирования файлов типа `robots.txt` и т.п., в корень проекта
- `$ gulp iconsPng` - сборка спрайта для PNG иконок
- `$ gulp iconsSvg` - сборка спрайта для SVG иконок
- `$ gulp clean` - очистка папки `pablic/`
- `$ gulp server` - запуск локального сервера с автоматической перезагрузкой браузера 
- `$ gulp watch` - запуск отслеживания изменнений в файлах
- `$ gulp build` - полная сборка проекта


## Структура папок и файлов:
```
├── app/                         # Исходники
│   ├── assets/                  # Статические файлы для копирования в `public/`
│   │       ├── fonts/           # Файлы со шрифтами
│   │       ├── img/             # Растровая и векторная графика
│   │       │   ├── content/     # Изображения для контента
│   │       │   ├── favicons/    # Набор favicons для проекта
│   │       │   └── general/     # Изображения для стилизации
│   │       └── misc/            # Общие файлы, которые будут перемещены в корень собранного проекта
│   ├── blocks/                  # Блоки
│   │   └── block/               # Блок
│   │       ├── block.pug        # Разметка блока
│   │       ├── block.js         # Скрипт блока
│   │       └── block.styl       # Стили блока
│   ├── icons/                   # Наборы иконок для спрайтов
│   │   ├── png/                 # PNG иконки для генерации растрового спрайта
│   │   └── svg/                 # SVG иконки для генерации векторного спрайта
│   ├── pug/                     # Файлы с разметкой
│   │   ├── pages/               # Разметка страниц
│   │   │   ├── lev1/            # Страницы первого уровня вложенности (опционально)
│   │   │   │   └── lev2/        # Страницы второго уровня вложенности (опционально)
│   │   │   └── index.pug        # Разметка главной страницы
│   │   └── templates/           # Шаблоны разметки
│   │       └── default/         # Папка с шаблоном по умолчанию
│   │           ├── head.pug     # <head> шаблона
│   │           └── template.pug # Шаблон
│   ├── scripts/                 # Скрипты
│   │   └── app.js               # Главный скрипт
│   └── styles/                  # Стили
│       ├── helpers/             # Помощники
│       │   ├── base.styl        # Базовые стили проекта
│       │   ├── fonts.styl       # Подключение шрифтов
│       │   ├── mixins.styl      # Примеси
│       │   ├── normalize.styl   # Сброс стилей и фиксы
│       │   ├── svg-size.styl    # Переменные с размерами SVG спрайта (автосборка)
│       │   └── variables.styl   # Переменные
│       ├── sprites/             # Переменные с размерами PNG спрайтов (автосборка)
│       └── app.styl             # Главный стилевой файл
├── public/                      # Сборка проекта для паблика (автогенерация)
│   ├── assets/                  # Статические файлы для копирования в папку `public/`
│   │       ├── fonts/           # Шрифты
│   │       └── img/             # Изображения
│   │           ├── content/     # Изображения для контента
│   │           ├── favicons/    # Набор favicons для проекта
│   │           ├── general/     # Изображения для стилизации
│   │           └── sprite/      # Спрайты
│   ├── lev1/                    # Страницы первого уровня вложенности (опционально)
│   │   └── lev2/                # Страницы второго уровня вложенности (опционально)
│   ├── scripts/                 # Скрипты
│   ├── styles/                  # Стили
│   ├── index.html               # Главная страница
│   └── ...                      # Файлы типа `.htaccess`, `robots.txt` и пр.
├── tasks/                       # Задачи для Gulp
├── .eslintrc                    # Конфигурация проверки JavaScript в ESLint
├── .gitignore                   # Список исключённых файлов из Git
├── browserlist                  # Список версий браузеров для Autoprefixer
├── gulpfile.js                  # Файл для запуска задач Gulp
├── package.json                 # Список модулей и прочей информации
├── png-sprite-template          # Шаблон для сборки PNG спрайта
├── readme.md                    # Документация шаблона
└── svg-sprite-template          # Шаблон для сборки SVG спрайта
```

## Принципы работы

После запуска шаблона командой `$ gulp dev` или просто `$ gulp` (по умолчанию), происходит сборка проекта с отслеживанием изменений всех файлов в каталоге `app/`, на всех уровнях вложенности.

В дальнейшем вся разработка должна осуществляться в каталоге `app/`.

### HTML разметка страниц

Для HTML разметки, в проекте применяется шаблонизатор [Pug (бывший Jade)](https://pugjs.org), главным преимуществом которого, является возможность создавать шаблоны для целых разделов или отдельных страниц внутри проекта.

Все страницы и их шаблоны размещены в папках `app/pug/pages/` и `app/pug/templates/` соответственно. 

Структура страниц и их шаблонов имеет следующий вид:

```
pug/
├── pages/
│   ├── lev1/index.pug
│   │   └── lev2/index.pug
│   └── index.pug
│
└── templates/
    └── default/
        ├── head.pug
        └── template.pug
```

По умолчанию, в папке `templates/` расположен единственный шаблон `default/`.  
Шаблонов может быть любое количество.  
Рекомендуется под каждый шаблон заводить отдельную папку.

Шаблон `default/` содержит внутри себя два файла:

- `head.pug` - элемент `<head>` содержащий метаданные, линки на файлы со стилями и т.п.
- `template.pug` - сам шаблон, в который подключаются элемент <head>, скрипты и прочие неизменные блоки, необходимые для каждой страницы сайта, такие как header, footer, sidebar, menu и пр.

Если в каких-либо подключенных блоках на проекте нет необходимости, они либо комментируются, либо удаляются из соответствующих строк кода внутри `template.pug`.

Папка `pages/` содержит саму структуру сайта и располагает в себе:

- `index.pug` - файл для главной страницы.
- `lev1/index.pug` - раздел первого уровня вложенности от главной страницы.
- `lev2/index.pug` - раздел второго уровня вложенности от главной страницы (расположен внутри `lev1/`).

Структура сайта может иметь любое количество уровней вложенности.

Разделы `lev1/` и `lev2/` должны быть переименованы под соответствующие нужды или удалены вовсе, например, если разрабатывается SPA.

Каждая страница сайта должна содержать минимально-необходимый набор строк кода, а именно: 

- подключаемый шаблон
- относительный путь до корня сайта
- заголовок страницы
- описание страницы (по желанию)
- блок с основным контентом

На примерах:

    /* Для главной страницы `pages/index.pug` */

    extends ../templates/default/template.pug
    block head  
        - var path = '';  
        - var pageTitle = 'Главная страница';  
        - var pageDescription = 'Описание главной страницы';  
    block content  
        ...


    /* Для страницы `pages/lev1/index.pug` */
    
    extends ../../templates/default/template.pug
    block head  
        - var path = '../';  
        - var pageTitle = 'Раздел первого уровня';  
        - var pageDescription = 'Описание раздела первого уровня';  
    block content  
        ...


    /* Для страницы `pages/lev1/lev2/index.pug` */

    extends ../../../templates/default/template.pug
    block head  
        - var path = '../../';  
        - var pageTitle = 'Раздел второго уровня';  
        - var pageDescription = 'Описание раздела второго уровня';  
    block content  
        ... 

При запуске шаблона `$ gulp dev` или сборки проекта на production `$ npm run public`, все страницы из папки `app/pug/pages/` будут скомпилированы в HTML код и размещены в папке `public/`, сохраняя свою файловую структуру.

При запущенном шаблоне, любое изменение `.pug` файлов, внутри папки `app/,` приведет к немедленной перекомпиляции в папке `public/`.




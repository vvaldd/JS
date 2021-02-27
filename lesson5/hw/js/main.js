// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag  || "No Title";
//     this.action = action || "No action";
//     this.attrs = attrs || "None";
// };

// let titleA = "<a>";
// let actA = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы. Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку.В качестве значения атрибута href используется адрес документа(URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход.Адрес ссылки может быть абсолютным и относительным.Абсолютные адреса работают везде и всюду независимо от имени сайта или веб - страницы, где прописана ссылка.Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.";
// let atrA = [
//     {titleOfAttr : "accesskey", actionOfAttr : "Активация ссылки с помощью комбинации клавиш."},
//     {titleOfAttr : "coords", actionOfAttr : "Устанавливает координаты активной области."},
//     {titleOfAttr : "download", actionOfAttr : "Предлагает скачать указанный по ссылке файл."},
//     {titleOfAttr : "href", actionOfAttr : "Задает адрес документа, на который следует перейти. "},
//     {titleOfAttr : "hreflang", actionOfAttr : "Идентифицирует язык текста по ссылке."},
//     {titleOfAttr : "name", actionOfAttr : "Устанавливает имя якоря внутри документа."},
//     {titleOfAttr : "rel", actionOfAttr : "Отношения между ссылаемым и текущим документами."},
//     {titleOfAttr : "rev", actionOfAttr : "Отношения между текущим и ссылаемым документами."},
//     {titleOfAttr : "shape", actionOfAttr : "Задает форму активной области ссылки для изображений."},
//     {titleOfAttr : "tabindex", actionOfAttr : "АОпределяет последовательность перехода между ссылками при нажатии на кнопку Tab."},
//     {titleOfAttr : "target", actionOfAttr : "Имя окна или фрейма, куда браузер будет загружать документ."},
//     {titleOfAttr : "title", actionOfAttr : "Добавляет всплывающую подсказку к тексту ссылки."},
//     {titleOfAttr : "type", actionOfAttr : "Указывает MIME-тип документа, на который ведёт ссылка."},
// ];
// console.log(new Tag(titleA, actA, atrA));

// let titleDiv = "<div>";
// let actDiv = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора. Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.";
// let atrDiv = [
//     {titleOfAttr : "align", actionOfAttr : "Задает выравнивание содержимого тега <div>. "},
//     {titleOfAttr : "title", actionOfAttr : "Добавляет всплывающую подсказку к содержимому. "},
// ];
// console.log(new Tag(titleDiv, actDiv, atrDiv));

// let titleH1 = "<h1>";
// let actH1 = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.";
// let atrH1 = [
//     {titleOfAttr : "aline", actionOfAttr : "Определяет выравнивание заголовка. "},
// ];
// console.log(new Tag(titleH1, actH1, atrH1));

// let titleSpan = "<span>";
// let actSpan = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.";
// console.log(new Tag(titleSpan, actSpan));

// let titleInput = "<input>";
// let actInput = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript. Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.";
// let atrInput = [
//     {titleOfAttr : "accept", actionOfAttr : "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//     {titleOfAttr : "accesskey", actionOfAttr : "Переход к элементу с помощью комбинации клавиш. "},
//     {titleOfAttr : "align", actionOfAttr : "Определяет выравнивание изображения. "},
//     {titleOfAttr : "alt", actionOfAttr : "Альтернативный текст для кнопки с изображением."},
//     {titleOfAttr : "autocomplete", actionOfAttr : "Включает или отключает автозаполнение."},
//     {titleOfAttr : "autofocus", actionOfAttr : "Устанавливает фокус в поле формы."},
//     {titleOfAttr : "border", actionOfAttr : "Толщина рамки вокруг изображения." },
//     {titleOfAttr : "checked", actionOfAttr : "Предварительно активированный переключатель или флажок." },
//     {titleOfAttr : "disabled", actionOfAttr : "Блокирует доступ и изменение элемента."},
//     {titleOfAttr : "form", actionOfAttr : "Связывает поле с формой по её идентификатору."},
//     {titleOfAttr : "formaction", actionOfAttr : "Определяет адрес обработчика формы."},
//     {titleOfAttr : "formenctype", actionOfAttr : "Устанавливает способ кодирования данных формы при их отправке на сервер."},
//     {titleOfAttr : "formmethod", actionOfAttr : "Сообщает браузеру каким методом следует передавать данные формы на сервер."},
//     {titleOfAttr : "formnovalidate", actionOfAttr : "Отменяет встроенную проверку данных на корректность."},
//     {titleOfAttr : "formtarget", actionOfAttr : "Определяет окно или фрейм в которое будет загружаться результат, возвращаемый обработчиком формы."},
//     {titleOfAttr : "list", actionOfAttr : "Указывает на список вариантов, которые можно выбирать при вводе текста."},
//     {titleOfAttr : "max", actionOfAttr : "Верхнее значение для ввода числа или даты."},
//     {titleOfAttr : "maxlength", actionOfAttr : "Максимальное количество символов разрешенных в тексте."},
//     {titleOfAttr : "min", actionOfAttr : "Нижнее значение для ввода числа или даты."},
//     {titleOfAttr : "multiple", actionOfAttr : "Позволяет загрузить несколько файлов одновременно."},
//     {titleOfAttr : "name", actionOfAttr : "Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать."},
//     {titleOfAttr : "pattern", actionOfAttr : "Устанавливает шаблон ввода."},
//     {titleOfAttr : "placeholder", actionOfAttr : "Выводит одсказывающий текст."},
//     {titleOfAttr : "readonly", actionOfAttr : "Устанавливает, что поле не может изменяться пользователем."},
//     {titleOfAttr : "required", actionOfAttr : "Обязательное для заполнения поле."},
//     {titleOfAttr : "size", actionOfAttr : "Ширина текстового поля."},
//     {titleOfAttr : "src", actionOfAttr : "Адрес графического файла для поля с изображением."},
//     {titleOfAttr : "step", actionOfAttr : "Шаг приращения для числовых полей."},
//     {titleOfAttr : "tabindex", actionOfAttr : "Определяет порядок перехода между элементами с помощью клавиши Tab."},
//     {titleOfAttr : "type", actionOfAttr : "Сообщает браузеру, к какому типу относится элемент формы."},
//     {titleOfAttr : "value", actionOfAttr : "Значение элемента."},
// ];
// console.log(new Tag(titleInput, actInput, atrInput));

// let titleForm = "<form>";
// let actForm = "Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна. ";
// console.log(new Tag(titleForm, actForm));

// let titleOption = "<option>";
// let actOption = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.";
// let atrOption = [
//     {titleOfAttr : "disabled", actionOfAttr : "Заблокировать для доступа элемент списка."},
//     {titleOfAttr : "label", actionOfAttr : "Указание метки пункта списка."},
//     {titleOfAttr : "selected", actionOfAttr : "Заранее устанавливает определенный пункт списка выделенным."},
//     {titleOfAttr : "value", actionOfAttr : "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."},
// ];
// console.log(new Tag(titleOption, actOption, atrOption));

// let titleSelect = "<select>";
// let actSelect = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.";
// let atrSelect = [
//     {titleOfAttr : "accesskey", actionOfAttr : "Позволяет перейти к списку с помощью некоторого сочетания клавиш."},
//     {titleOfAttr : "autofocus", actionOfAttr : "Устанавливает, что список получает фокус после загрузки страницы."},
//     {titleOfAttr : "disabled", actionOfAttr : "Блокирует доступ и изменение элемента."},
//     {titleOfAttr : "form", actionOfAttr : "Связывает список с формой."},
//     {titleOfAttr : "multiple", actionOfAttr : "Позволяет одновременно выбирать сразу несколько элементов списка."},
//     {titleOfAttr : "name", actionOfAttr : "Имя элемента для отправки на сервер или обращения через скрипты."},
//     {titleOfAttr : "required", actionOfAttr : "Список обязателен для выбора перед отправкой формы."},
//     {titleOfAttr : "size", actionOfAttr : "Количество отображаемых строк списка."},
//     {titleOfAttr : "tabindex", actionOfAttr : "Определяет последовательность перехода между элементами при нажатии на клавишу Tab."},
// ];
// console.log(new Tag(titleSelect, actSelect, atrSelect));

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// class Tag{
//     constructor (titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag  || "No Title";
//         this.action = action || "No action";
//         this.attrs = attrs || "None";
//     };
// };

// let titleA = "<a>";
// let actA = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы. Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку.В качестве значения атрибута href используется адрес документа(URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход.Адрес ссылки может быть абсолютным и относительным.Абсолютные адреса работают везде и всюду независимо от имени сайта или веб - страницы, где прописана ссылка.Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.";
// let atrA = [
//     {titleOfAttr : "accesskey", actionOfAttr : "Активация ссылки с помощью комбинации клавиш."},
//     {titleOfAttr : "coords", actionOfAttr : "Устанавливает координаты активной области."},
//     {titleOfAttr : "download", actionOfAttr : "Предлагает скачать указанный по ссылке файл."},
//     {titleOfAttr : "href", actionOfAttr : "Задает адрес документа, на который следует перейти. "},
//     {titleOfAttr : "hreflang", actionOfAttr : "Идентифицирует язык текста по ссылке."},
//     {titleOfAttr : "name", actionOfAttr : "Устанавливает имя якоря внутри документа."},
//     {titleOfAttr : "rel", actionOfAttr : "Отношения между ссылаемым и текущим документами."},
//     {titleOfAttr : "rev", actionOfAttr : "Отношения между текущим и ссылаемым документами."},
//     {titleOfAttr : "shape", actionOfAttr : "Задает форму активной области ссылки для изображений."},
//     {titleOfAttr : "tabindex", actionOfAttr : "АОпределяет последовательность перехода между ссылками при нажатии на кнопку Tab."},
//     {titleOfAttr : "target", actionOfAttr : "Имя окна или фрейма, куда браузер будет загружать документ."},
//     {titleOfAttr : "title", actionOfAttr : "Добавляет всплывающую подсказку к тексту ссылки."},
//     {titleOfAttr : "type", actionOfAttr : "Указывает MIME-тип документа, на который ведёт ссылка."},
// ];
// console.log(new Tag(titleA, actA, atrA));

// let titleDiv = "<div>";
// let actDiv = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора. Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.";
// let atrDiv = [
//     {titleOfAttr : "align", actionOfAttr : "Задает выравнивание содержимого тега <div>. "},
//     {titleOfAttr : "title", actionOfAttr : "Добавляет всплывающую подсказку к содержимому. "},
// ];
// console.log(new Tag(titleDiv, actDiv, atrDiv));

// let titleH1 = "<h1>";
// let actH1 = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.";
// let atrH1 = [
//     {titleOfAttr : "aline", actionOfAttr : "Определяет выравнивание заголовка. "},
// ];
// console.log(new Tag(titleH1, actH1, atrH1));

// let titleSpan = "<span>";
// let actSpan = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.";
// console.log(new Tag(titleSpan, actSpan));

// let titleInput = "<input>";
// let actInput = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript. Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.";
// let atrInput = [
//     {titleOfAttr : "accept", actionOfAttr : "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//     {titleOfAttr : "accesskey", actionOfAttr : "Переход к элементу с помощью комбинации клавиш. "},
//     {titleOfAttr : "align", actionOfAttr : "Определяет выравнивание изображения. "},
//     {titleOfAttr : "alt", actionOfAttr : "Альтернативный текст для кнопки с изображением."},
//     {titleOfAttr : "autocomplete", actionOfAttr : "Включает или отключает автозаполнение."},
//     {titleOfAttr : "autofocus", actionOfAttr : "Устанавливает фокус в поле формы."},
//     {titleOfAttr : "border", actionOfAttr : "Толщина рамки вокруг изображения." },
//     {titleOfAttr : "checked", actionOfAttr : "Предварительно активированный переключатель или флажок." },
//     {titleOfAttr : "disabled", actionOfAttr : "Блокирует доступ и изменение элемента."},
//     {titleOfAttr : "form", actionOfAttr : "Связывает поле с формой по её идентификатору."},
//     {titleOfAttr : "formaction", actionOfAttr : "Определяет адрес обработчика формы."},
//     {titleOfAttr : "formenctype", actionOfAttr : "Устанавливает способ кодирования данных формы при их отправке на сервер."},
//     {titleOfAttr : "formmethod", actionOfAttr : "Сообщает браузеру каким методом следует передавать данные формы на сервер."},
//     {titleOfAttr : "formnovalidate", actionOfAttr : "Отменяет встроенную проверку данных на корректность."},
//     {titleOfAttr : "formtarget", actionOfAttr : "Определяет окно или фрейм в которое будет загружаться результат, возвращаемый обработчиком формы."},
//     {titleOfAttr : "list", actionOfAttr : "Указывает на список вариантов, которые можно выбирать при вводе текста."},
//     {titleOfAttr : "max", actionOfAttr : "Верхнее значение для ввода числа или даты."},
//     {titleOfAttr : "maxlength", actionOfAttr : "Максимальное количество символов разрешенных в тексте."},
//     {titleOfAttr : "min", actionOfAttr : "Нижнее значение для ввода числа или даты."},
//     {titleOfAttr : "multiple", actionOfAttr : "Позволяет загрузить несколько файлов одновременно."},
//     {titleOfAttr : "name", actionOfAttr : "Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать."},
//     {titleOfAttr : "pattern", actionOfAttr : "Устанавливает шаблон ввода."},
//     {titleOfAttr : "placeholder", actionOfAttr : "Выводит одсказывающий текст."},
//     {titleOfAttr : "readonly", actionOfAttr : "Устанавливает, что поле не может изменяться пользователем."},
//     {titleOfAttr : "required", actionOfAttr : "Обязательное для заполнения поле."},
//     {titleOfAttr : "size", actionOfAttr : "Ширина текстового поля."},
//     {titleOfAttr : "src", actionOfAttr : "Адрес графического файла для поля с изображением."},
//     {titleOfAttr : "step", actionOfAttr : "Шаг приращения для числовых полей."},
//     {titleOfAttr : "tabindex", actionOfAttr : "Определяет порядок перехода между элементами с помощью клавиши Tab."},
//     {titleOfAttr : "type", actionOfAttr : "Сообщает браузеру, к какому типу относится элемент формы."},
//     {titleOfAttr : "value", actionOfAttr : "Значение элемента."},
// ];
// console.log(new Tag(titleInput, actInput, atrInput));

// let titleForm = "<form>";
// let actForm = "Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна. ";
// console.log(new Tag(titleForm, actForm));

// let titleOption = "<option>";
// let actOption = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.";
// let atrOption = [
//     {titleOfAttr : "disabled", actionOfAttr : "Заблокировать для доступа элемент списка."},
//     {titleOfAttr : "label", actionOfAttr : "Указание метки пункта списка."},
//     {titleOfAttr : "selected", actionOfAttr : "Заранее устанавливает определенный пункт списка выделенным."},
//     {titleOfAttr : "value", actionOfAttr : "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."},
// ];
// console.log(new Tag(titleOption, actOption, atrOption));

// let titleSelect = "<select>";
// let actSelect = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.";
// let atrSelect = [
//     {titleOfAttr : "accesskey", actionOfAttr : "Позволяет перейти к списку с помощью некоторого сочетания клавиш."},
//     {titleOfAttr : "autofocus", actionOfAttr : "Устанавливает, что список получает фокус после загрузки страницы."},
//     {titleOfAttr : "disabled", actionOfAttr : "Блокирует доступ и изменение элемента."},
//     {titleOfAttr : "form", actionOfAttr : "Связывает список с формой."},
//     {titleOfAttr : "multiple", actionOfAttr : "Позволяет одновременно выбирать сразу несколько элементов списка."},
//     {titleOfAttr : "name", actionOfAttr : "Имя элемента для отправки на сервер или обращения через скрипты."},
//     {titleOfAttr : "required", actionOfAttr : "Список обязателен для выбора перед отправкой формы."},
//     {titleOfAttr : "size", actionOfAttr : "Количество отображаемых строк списка."},
//     {titleOfAttr : "tabindex", actionOfAttr : "Определяет последовательность перехода между элементами при нажатии на клавишу Tab."},
// ];
// console.log(new Tag(titleSelect, actSelect, atrSelect));






// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model : "auto", manufacturer : "Suzuki", year_release : 2020, max_speed : 230, engine_volume : 2.0,
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     },
//     info() {
//         if(this.driver){
//             console.log(`car info: ${this.model}, ${this.manufacturer}, ${this.year_release}, ${this.max_speed}, ${this.engine_volume}, ${this.driver.name}, ${this.driver.range}`);
//         } else {
//             console.log(`car info: ${this.model}, ${this.manufacturer}, ${this.year_release}, ${this.max_speed}, ${this.engine_volume}`);
//         }
//     },
//     increaseMaxSpeed(newSpeed) {
//         this.max_speed += newSpeed;
//     },
//     changeYear(newValue) {
//         this.year_release = newValue;
//         },
//     addDriver(driver) {
//         car.driver = driver || "None";
//         }
// };
// car.info();
// car.drive();
// car.increaseMaxSpeed(50);
// car.drive();
// car.changeYear(2030);
// car.info(car.addDriver({name : "vasya", age : 21, range: "master"}));




// ==============================================
// CLASS

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model,
//     manufacturer,
//     year_release,
//     max_speed,
//     engine_volume)
//     {
//     this.model = model || "Kalina";
//     this.manufacturer = manufacturer || "VAZ";
//     this.year_release = year_release || 2011;
//     this.max_speed = max_speed || 160;
//     this.engine_volume = engine_volume || 1.4;

//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     };

//     this.info = function () {
//         if(this.driver){
//             console.log(`
//             model :${this.model}
//             manufacturer :${this.manufacturer}
//             year_release :${this.year_release}
//             max_speed :${this.max_speed}
//             engine_volume :${this.engine_volume}
//             driver :${this.driver.range}
//             `);
//         } else {
//             console.log(`
//             model :${this.model}
//             manufacturer :${this.manufacturer}
//             year_release :${this.year_release}
//             max_speed :${this.max_speed}
//             engine_volume :${this.engine_volume}
//             `);
//         };
//     };

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.max_speed += newSpeed;
//     };

//     this.changeYear = function(newValue) {
//         this.year_release = newValue;
//     };
//     this.addDriver = function(driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car("sx4", "Suzuki", 2017, 200, 1.6);

// car.info();
// car.drive();
// car.increaseMaxSpeed(50);
// car.drive();
// car.changeYear(2030);
// car.info(car.addDriver({name : "vasya", age : 21, range: "master"}));


// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor (model,
//             manufacturer,
//             year_release,
//             max_speed,
//             engine_volume){
//                 this.model = model || "Kalina";
//                 this.manufacturer = manufacturer || "VAZ";
//                 this.year_release = year_release || 2011;
//                 this.max_speed = max_speed || 160;
//                 this.engine_volume = engine_volume || 1.4;

//                 this.drive = function() {
//                     console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//                 };

//                 this.info = function () {
//                     if(this.driver){
//                         console.log(`
//                         model :${this.model}
//                         manufacturer :${this.manufacturer}
//                         year_release :${this.year_release}
//                         max_speed :${this.max_speed}
//                         engine_volume :${this.engine_volume}
//                         driver :${this.driver.range}
//                         `);
//                     } else {
//                         console.log(`
//                         model :${this.model}
//                         manufacturer :${this.manufacturer}
//                         year_release :${this.year_release}
//                         max_speed :${this.max_speed}
//                         engine_volume :${this.engine_volume}
//                         `);
//                     };
//                 };

//                 this.increaseMaxSpeed  = function(newSpeed) {
//                     this.max_speed += newSpeed;
//                 };

//                 this.changeYear = function(newValue){
//                     this.year_release = newValue;
//                 };
                
//                 this.addDriver = function(driver){
//                     this.driver = driver;
//                 };
//     };
// };
// let car = new Car();
// car.info();
// car.drive();
// car.increaseMaxSpeed(50);
// car.drive();
// car.changeYear(2030);
// car.info(car.addDriver({name : "vasya", age : 21, range: "master"}));


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Cinderella {
//     constructor (name, age, foot_size){
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//         };
// };

// let c1 = new Cinderella("Vaselina", 23, 40);
// let c2 = new Cinderella("Masha", 20, 37);
// let c3 = new Cinderella("Nina", 24, 44);
// let c4 = new Cinderella("Katya", 21, 37);
// let c5 = new Cinderella("Ruslana", 25, 39);
// let c6 = new Cinderella("Sasha", 22, 38);
// let c7 = new Cinderella("Helena", 26, 34);
// let c8 = new Cinderella("Dasha", 23, 35);
// let c9 = new Cinderella("Olya", 19, 36);
// let c10 = new Cinderella("Rita", 21, 34);
// let cArray = [c1,c2,c3, c4, c5, c6, c7, c8, c9, c10];

// class Prince  {
//     constructor (name, age, shoe_size){
//         this.name = name;
//         this.age = age;
//         this.choes_size = shoe_size;
//         let shoe = null;
//             for(const item of cArray) {
//                 if(item.foot_size === shoe_size) {
//                     shoe = item;
                    
//                 if(shoe) {
//                     console.log(`Мой туфля твой ${shoe.name}`);
                     
//                 } else {console.log(`Не повезло`);
//                 };
//             };
//         };    
//     };
// };
// let prince = new Prince ("Kolyan", 35, 44);


// ==============================================



// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// class Chubaka {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//         };
// }

// class Cinderella extends Chubaka{
//     constructor (name, age, foot_size){
//         super(name, age);
//         this.foot_size = foot_size;
//         };
// };

// let c1 = new Cinderella("Vaselina", 23, 40);
// let c2 = new Cinderella("Masha", 20, 37);
// let c3 = new Cinderella("Nina", 24, 44);
// let c4 = new Cinderella("Katya", 21, 37);
// let c5 = new Cinderella("Ruslana", 25, 35);
// let c6 = new Cinderella("Sasha", 22, 38);
// let c7 = new Cinderella("Helena", 26, 34);
// let c8 = new Cinderella("Dasha", 23, 35);
// let c9 = new Cinderella("Olya", 19, 36);
// let c10 = new Cinderella("Rita", 21, 34);
// let cArray = [c1,c2,c3, c4, c5, c6, c7, c8, c9, c10];

// class Prince extends Chubaka {
//     constructor (name, age, shoe_size){
//         super(name, age);
//         this.choes_size = shoe_size;

//         this.yes = function (array){
//             let shoe = null;
//             for(const item of array) {
//                 if(item.foot_size === shoe_size) {
//                     shoe = item;
//                     };
//             };
//             if(shoe) {
//                 console.log(`Мой туфля твой ${shoe.name}`);
//             } else {
//                 console.log(`Не повезло`);
//             };    
//         };
//     };
// };
// let prince = new Prince ("Kolyan", 35, 41);
// prince.yes(cArray);
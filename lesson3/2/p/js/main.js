//- є сторінка rules.html.
//Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let h2 = document.getElementsByTagName("h2");
// let id = document.getElementById("content");
// let ul = document.createElement("ul");
// for (let i of h2){
//     let li = document.createElement("li");
//     li.innerText = i.textContent;
//     ul.appendChild(li);
// }
// id.appendChild(ul);


//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

/*let rules = [
    {title: 'Первое правило Бойцовского клуба.', body: 'Никому не рассказывать о Бойцовском клубе.'},
    {title: 'Второе правило Бойцовского клуба.', body: 'Никогда никому не рассказывать о Бойцовском клубе.'},
    {title: 'Третье правило Бойцовского клуба.', body: 'В схватке участвуют только двое.'},
    {title: 'Четвертое правило Бойцовского клуба.', body: 'Не более одного поединка за один раз.'},
    {title: 'Пятое правило Бойцовского клуба.', body: 'Бойцы сражаются без обуви и голые по пояс.'},
    {title: 'Шестое правило Бойцовского клуба.', body: 'Поединок продолжается столько, сколько потребуется.'},
    {title: 'Седьмое правило Бойцовского клуба.', body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'},
    {title: 'Восьмое и последнее правило Бойцовского клуба.', body: 'Новичок обязан принять бой.'},
];
let wrap = document.createElement("div");
wrap.id = ("wrap");
for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    div.className = `rules rule${i+1}`
    h2.innerText = rule.title;
    p.innerText = rule.body;
    div.appendChild(h2);
    div.appendChild(p);
    wrap.appendChild(div);
}
document.body.appendChild(wrap);
*/ 
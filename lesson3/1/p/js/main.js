//Взяти файл template_2.html та працювати в ньому
//- Напишіть код, який :
//-- змінює колір тексту елемнту з ід main_header на будь-який інший
/*let idHeader = document.getElementById("main_header");
idHeader.style.color = "red";*/

//-- робить шириниу елементу ul 400 пікселів
/*let tagUl = document.getElementsByTagName("ul");
    for (let w of tagUl) {
    w.style.width = "400px";
    }*/

//-- робить шириниу всіх елементів з класом linkList шириною 50%
/*let classLink = document.getElementsByClassName("linkList");
    for (let c of classLink) {
        c.style.width = "50%";
    }*/

//-- отримує текст який зберігається в елементі з класом listElement2
/*let lE = document.getElementsByClassName("listElement2");
    for (let t of lE) {
        console.log(t.innerText);
    }*/

//-- отримує всі елементи li та змінює ім колір фону на сірий
/*let tagLi = document.getElementsByTagName("li");
    for (let c of tagLi) {
    c.style.background = "grey";
    }*/

//-- отримує всі елементи 'a' та додає їм клас anchor
/*let tagA = document.getElementsByTagName("a");
    for (let cl of tagA) {
    cl.classList.add("anchor");
    }*/

    
//-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
/*let tagA = document.getElementsByTagName("a");
    for (let a of tagA) {
        if(a.innerText === "link3")  {
            a.style.fontSize = "40px";
        }
    }*/

//-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*let tagA = document.getElementsByTagName("a");
    for (let a of tagA) {
        a.classList.add("element_XXX");
        a.innerText = "XXX";
    }*/
    
//-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*let p = prompt("Какой цвет по душе?");
let tagS = document.getElementsByClassName("sub-header");
    for (let s of tagS) {
        s.style.background = p;
    }*/


//-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
/*let p = prompt("Какой цвет по душе?");
let tagS = document.getElementsByClassName("sub-header");
    for (let s of tagS) {
        if(s.innerText === "content 2 segment") s.style.color = p;
    }*/

//-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*let p = prompt("Was ist das?");
let tagC = document.getElementsByClassName("content_1");
    for (let c of tagC) {
        c.innerText = p;
    }*/

//-- отримати елементи p та змінити їм paddin на довільне значення
/*let tagP = document.getElementsByTagName("p");
    for (let p of tagP) {
    p.style.padding = "20px";
    }*/

//-- отримати елементи з класом text2 та змінити їм текст на довільне значення*/
/*let tagT = document.getElementsByClassName("text2");
    for (let t of tagT) {
        t.innerText = "Scooter";
    }*/
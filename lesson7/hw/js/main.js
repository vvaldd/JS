// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let target = document.getElementById("target");
// target.onclick = function(){
//         let text = document.getElementById("text");
//         text.style.display == 'none' ? text.style.display = 'block' : text.style.display = 'none'
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let target = document.getElementById("target");
// target.onclick = function(){
//     target.hidden = true;
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let btnAge = document.getElementById("btnAge");
// btnAge.onclick = () => {
//     let inp = document.getElementById("inP");
//     inp.value< 18 ? alert("Вам меньше 18 лет") : console.log("Все окейно");
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// let comment = [
//     {title : 'lorem', body:'1 lorem ipsum dolo sit ameti'},
//     {title : 'lorem2', body:'2 lorem ipsum dolo sit ameti'},
//     {title : 'lorem3', body:'3 lorem ipsum dolo sit ameti'},
//     {title : 'lorem4', body:'4 lorem ipsum dolo sit ameti'},
//     {title : 'lorem5', body:'5 lorem ipsum dolo sit ameti'},
//     {title : 'lorem6', body:'6 lorem ipsum dolo sit ameti'},
//     {title : 'lorem7', body:'7 lorem ipsum dolo sit ameti'},
//     {title : 'lorem8', body:'8 lorem ipsum dolo sit ameti'},
//     {title : 'lorem9', body:'9 lorem ipsum dolo sit ameti'},
// ];

// // Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comm = function(array) {
//     let div = document.createElement("div");
//     array.forEach(element => {

//             let titleP = document.createElement("h2");
//             let bodyP = document.createElement("p");
//             let button = document.createElement("button");

//             button.innerText = "Hide text";
//             titleP.innerText = element.title;
//             bodyP.innerText = element.body;

//             button.onclick = () => {
//                 bodyP.hidden
//                     ? bodyP.hidden = false
//                     : bodyP.hidden = true;
//             };

//             div.appendChild(titleP);
//             div.appendChild(bodyP);
//             div.appendChild(button);
//     });
//     document.body.appendChild(div);
// }
// comm(comment);

// - Создайте меню, которое раскрывается/сворачивается при клике

// let div = document.createElement("div");
// let menu = () => {
//     let button = document.createElement("button");
//     let menuUl = document.createElement("ul");
//     let menuL1 = document.createElement("li");
//     let menuL2 = document.createElement("li");
//     let menuL3 = document.createElement("li");
    
//     button.innerText = "Скрыть/Показать меню";
//     menuUl.innerText = "Меню";
//     menuL1.innerText = "Первые блюда";
//     menuL2.innerText = "Гарнир";
//     menuL3.innerText = "Десерт";
    

//     button.onclick = () => {
//         menuUl.hidden
//             ? menuUl.hidden = false
//                 : menuUl.hidden = true;
//     };

//     div.appendChild(button);
//     div.appendChild(menuUl);
//     menuUl.appendChild(menuL1);
//     menuUl.appendChild(menuL2);
//     menuUl.appendChild(menuL3);
    
// };
// document.body.appendChild(div);
// menu();

// PROCESSING- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btnGo = document.getElementById("btn");
// let in1 = document.getElementById("name1");
// let in2 = document.getElementById("age1");
// let in3 = document.getElementById("name1_2");
// let in4 = document.getElementById("age1_2");
// btnGo.onclick = () => {
//     // let inputs = document.getElementsByTagName("input");
//     // let name = inputs[0].value;
//     // let age = inputs[1].value;
//     // let user = {name, age};
//     // console.log(in1.value);
//     // console.log(in2.value);
//     // console.log(in3.value);
//     // console.log(in4.value);
   
// }




// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let div = document.createElement("div");
let btnGo = document.getElementById("btn");
let inR = document.getElementById("inR");
let inC = document.getElementById("inC");
let inT = document.getElementById("inT");
console.log(inR.value, inC.value, inT.value);


btnGo.onclick = (inR, inC, inT) => {
    let table = document.createElement("table");

        for (let i = 0; i < inR.value; i++){
            let tr = document.createElement("tr");
            for (let j = 0; j < inC.value; i++){
                let td = document.createElement("td");
                td.innerText = inT;
                tr.appendChild(td);
            };
            table.appendChild(tr);
        };
    
    div.appendChild(table);
}
document.body.appendChild(div);





// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// !!!!!!

// let arrayMat = ["хрень", "одух", "идиот", "кретин", "придурок"];
// let btnGo = document.getElementById("go");
// btnGo.addEventListener("click", () => {
//     let word = document.getElementsByTagName("input");
//     console.log(word[0].value);
//     return word[0].value;
    
//     // arrayMat.forEach(element => { console.log(elemet.value);
//     // element.value === word[0].value.toLowerCase() ? alert("Не ругайся!") : alert("Проверка пройдена");

//     // });
// })

// btnGo.addEventListener ("click", arrayMat.forEach(value => {
//     if(value === word[0].value){
//         alert("Не ругайся!")
//     } else {
//         alert("Проверка пройдена");
//     }
// }));

    


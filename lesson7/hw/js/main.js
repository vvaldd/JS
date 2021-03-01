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


// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// !!!!!!

let arrayMat = ["хрень", "одух", "идиот", "кретин", "придурок"];
let btnGo = document.getElementById("go");
btnGo.addEventListener("click", () => {
    let word = document.getElementsByTagName("input");
    console.log(word[0].value);
    return word[0].value;
    
    // arrayMat.forEach(element => { console.log(elemet.value);
    // element.value === word[0].value.toLowerCase() ? alert("Не ругайся!") : alert("Проверка пройдена");

    // });
})

btnGo.addEventListener ("click", arrayMat.forEach(value => {
    if(value === word[0].value){
        alert("Не ругайся!")
    } else {
        alert("Проверка пройдена");
    }
}));
    


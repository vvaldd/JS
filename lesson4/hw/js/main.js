

// - створити функцію яка виводить масив

/*let array = [1,2,3,4,5,6];
function arrayVision(mass){
    //console.log(mass);
    for (let arr of mass) {
        console.log(arr);
    }
}
//arrayVision(array)

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function arrayRandom(length, min, max){
    let array = [];
    for(let i = 0; i < length; i++){
        array.push(Math.floor(Math.random()*(max-min)+min));
    }
    return array;
}
const array1 = arrayRandom(10, 10, 100);
arrayVision(array1);*/

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
/*function returnMin(a, b, c,){
    let min;
    a > b ? min = b : min = a;
    min > c ? min = c : "";
    return min;
}
const Min = returnMin(5, 11, 15);
console.log(Min);*/

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
/*function returnMax(a, b, c,){
    let max;
    if(a >= b && a >= c) max = a;
    if(b >= a && b >= c) max = b;
    if(c >= b && c >= a) max = c;
    return max;
}
const Max = returnMax(5, 44, 15);
console.log(Max);*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
/*function MaxMin () {
    let min = arguments[0]; //я так понял где то "под капотом" js сам определяет где больший или меньший аргумент?
    let max = arguments[0];
    for (let arg of arguments){
        if (arg > max) max = arg;
        if (arg < min) min = arg;
    }
    console.log(max);
    return(min);
}
const Min = MaxMin(16, 10, 11, 45, 23);
console.log(Min);*/

// - створити функцію яка виводить масив
// function array(){
//     let arr = [];
//     for(let i = 0; i <5; i++){
//         arr.push(i);
//     }
//     console.log(arr);
// }
// array()

// - створити функцію яка повертає найбільше число з масиву
/*function Max(value) {
    let max = value[0];
    for (let i of value) {
        if (i > max) max = i;
    }
    return(max);
}
const array = Max([12, 15, 11, 7, 33, 45, 93, 77]);
console.log(array);*/


// - створити функцію яка повертає найменьше число з масиву
/*function Min(value) {
    let min = value[0];
    for (let i of value) {
        if (i < min) min = i;
    }
    return(min);
}
const array = Min([12, 15, 11, 7, 33, 45, 93, 77]);
console.log(array);*/

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function arrayPlus(value) {
//     let zero = 0;
//     for (let i of value) {
//         zero += i;
//     }
//     return(zero);
// }
// const result = arrayPlus([12, 15, 11, 7, 33, 45, 93, 77]);
// console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*function arrayPlus(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum += value[i];
    }
    return(sum/value.length);
}
const result = arrayPlus([12, 15, 11, 7, 33, 45, 93, 77]);
console.log(result);*/


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
/*let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];*/
/*function returnArray (valueObj) {
    let zero = 0;
    for (const i of valueObj){
        if(typeof i === "object"){
            zero++;
        }
    }
    return(zero);

}
const result = returnArray(users);
console.log(result)*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

/*function returnArray (valueObj) {
    let zero = 0;
    for (const i of valueObj){
        if(typeof i === "object"){
            for (let key in i){
                zero++;
            }
        }
    }
    return(zero);
}
const result = returnArray(users);
console.log(result)*/

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function arrPlus (arr1, arr2) {
//     let arr3 = [];
    
//     for (let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i]+arr2[i]);//вот тут не понятно почему итерируем только 1 массив?
//     }
//     return(arr3);
// }
// const result = arrPlus([5, 10, 15, 20], [10, 15, 20, 25]);
// console.log(result)



// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

/*let arrayFun = [5, 10, 15, 20, 25, 30];
function arrayI(arr, index){ //тут на входе под индексом функция принимает именно index массива, а не какую то другую переменную?
    let array = [...arr];
    let temp = array[index];
    console.log(array);
    array[index] = array[index+1];
    console.log(array);
    array[index+1] = temp;
    
    return(array)
}
const result = arrayI(arrayFun, 3);
console.log(result)*/


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function zeroNumber (array){
//     let arr = [...array];
//     for (let i = arr.length-1; i >=0; i--){// 
//         if (arr[i] === 0) {
//             arr.splice(i, 1);
//             arr.push(0);
//         }
//     }
//     return(arr);
// }
// console.log(zeroNumber([1,0,6,0,3]));
// console.log(zeroNumber([0,1,2,3,4]));
// console.log(zeroNumber([0,0,1,0]));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function createDE() {
//     let value = document.createElement("div");
//     value.innerText = "Hello owu";
//     document.body.appendChild(value);

// }

// createDE();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function createDE2(tag, txt) {
//         let value = document.createElement(tag);
//         value.innerText = txt;
//         document.body.appendChild(value);
    
//     }
    
// createDE2("h2", "Welcome");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars2 = [
    {model : "auto", age  : 2000, power : 1000, color : "red"},
    {model : "auto2", age  : 2002, power : 1500, color : "blue"}, 
    {model : "auto3", age  : 2004, power : 1600, color : "green"},
    {model : "auto4", age  : 2006, power : 2100, color : "gold"},
    {model : "auto5", age  : 2008, power : 2300, color : "grey"},
    {model : "auto6", age  : 2010, power : 2500, color : "silver"},
    {model : "auto7", age  : 2012, power : 3000, color : "skyblue"},
    {model : "auto8", age  : 2014, power : 4000, color : "#3298f2"},
    {model : "auto9", age  : 2016, power : 21000, color : "#333333"},
    {model : "auto10", age  : 2018, power : 3500, color : "#ff9638"}
];

// function cars (array, id) {
//     const div = document.createElement(id);
//     const ul = document.createElement("ul");
//     for (let car of array) {
        
//         const li = document.createElement("li");
//         li.innerText = `Car : ${car.model} ${car.age}`;
//         ul.appendChild(li);
//     }
//     div.appendChild(ul);
//     document.body.appendChild(div);
// }

// cars(cars2, "list");

// Для кожної властивості створити всередені блока автомоблія свій блок

// function cars (array, id) {
//     const div = document.createElement(id);
    

//     for (let car of array) {
//         const h2 = document.createElement("h2");
//         const p = document.createElement("p");
//         const p2 = document.createElement("p");
//         const p3 = document.createElement("p");

//         h2.innerText = `Car : ${car.model}`;
//         p.innerText = `age : ${car.age}`;
//         p2.innerText = `power : ${car.power}`;
//         p3.innerText = `color : ${car.color}`;

//         div.appendChild(h2);
//         div.appendChild(p);
//         div.appendChild(p2);
//         div.appendChild(p3);
//     }
    
//     document.body.appendChild(div);
// }

// cars(cars2, "cars");


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// function union (arr, arr2) {
//     for (let user of arr){
//         for (let city of arr2){
//             user.id === city.user_id ? user.adress = city : "";
//         };
//     };
//     console.log(usersWithId);
// }
// union (usersWithId, citiesWithId)


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {title: 'Первое правило Бойцовского клуба.', body: 'Никому не рассказывать о Бойцовском клубе.'},
//     {title: 'Второе правило Бойцовского клуба.', body: 'Никогда никому не рассказывать о Бойцовском клубе.'},
//     {title: 'Третье правило Бойцовского клуба.', body: 'В схватке участвуют только двое.'},
//     {title: 'Четвертое правило Бойцовского клуба.', body: 'Не более одного поединка за один раз.'},
//     {title: 'Пятое правило Бойцовского клуба.', body: 'Бойцы сражаются без обуви и голые по пояс.'},
//     {title: 'Шестое правило Бойцовского клуба.', body: 'Поединок продолжается столько, сколько потребуется.'},
//     {title: 'Седьмое правило Бойцовского клуба.', body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'},
//     {title: 'Восьмое и последнее правило Бойцовского клуба.', body: 'Новичок обязан принять бой.'},
// ];

// function rulesWrap (arr) {
//     let wrap = document.createElement("div");
//     wrap.id = ("wrap");
//     for (let i = 0; i < arr.length; i++) {
//         let rule = arr[i];
//         let div = document.createElement("div");
//         let h2 = document.createElement("h2");
//         let p = document.createElement("p");
        
//         div.className = `rules rule${i+1}`
//         h2.innerText = rule.title;
//         p.innerText = rule.body;
        
//         div.appendChild(h2);
//         div.appendChild(p);
//         wrap.appendChild(div);
//     }
//     document.body.appendChild(wrap);
// }
// rulesWrap(rules);


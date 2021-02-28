// - создать массив с 20 числами.
let array = [34, 26, 88, 43, 56, 21, 67, 94, 47, 990, 384, 931, 24, 3, 400, 82, 21, 7, 15, 20];

// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// console.log(array);
// array.sort ((a, b)=>a-b);
// console.log(array);
// array.sort ((a, b)=>b-a);
// console.log(array);

// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// let array3 = array.filter(function (value){
//         if(value % 3 === 0){
//             return value;
//         };
// });
// console.log(array3);

// let array10 = array.filter(value => {
//     if(value % 10 === 0) {
//         return value;
//     };
// });
// console.log(array10);

// -- перебрать (проитерировать) массив при помощи foreach()
//array.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let mapResult = array.map((item) => {
//     item = item*3;
//     return item;
// });
// console.log(mapResult);


// - создать массив со словами на 15-20 элементов.



// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//et arrayWord = ["was", "write", "the", "huge", "bill", "confront", "intention", "let", "nursery", "version", "practical", "election", "delicate", "Venus", "text", "lineage", "writer", "price", "store", "adopt"];

// -- отсортировать его по алфавиту в восходящем порядке.
// arrayWord.sort((a,b) => {
//     if (a.toLowerCase() > b.toLowerCase()) {
//     return 1;
//     };
//     if (a.toLowerCase() < b.toLowerCase()) {
//     return -1;
//     };
//     return 0;
// });
// console.log(arrayWord);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// arrayWord.sort((a,b) => {
//     if (a.toLowerCase() > b.toLowerCase()) {
//         return -1;
//     };
//     if (a.toLowerCase() < b.toLowerCase()) {
//         return 1;
//     };
//     return 0;
//     });
// console.log(arrayWord);

// -- отфильтровать слова длиной менее 4х символов
// let filterAW = arrayWord.filter((value) => value.length < 4);
// console.log(filterAW);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let arrayMap = arrayWord.map((item) =>{
//     item += "!";
//     return item;
// });
// console.log(arrayMap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortUsers);
// let sortUsersB = users.sort((a, b) => b.age - a.age);
// console.log(sortUsersB);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortUsers = users.sort((a,b) => {
//         if (a.name.length > b.name.length) {
//             return 1;
//         };
//         if (a.name.length < b.name.length) {
//             return -1;
//         };
//         return 0;
// });
// console.log(sortUsers);

// let sortUsers = users.sort((a,b) => {
//     if (a.name.length > b.name.length) {
//         return -1;
//     };
//     if (a.name.length < b.name.length) {
//         return 1;
//     };
//     return 0;
// });
// console.log(sortUsers);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let mapUsers = users.map((item, index) => {
//     item.id = index;
//     return item;
// });
// console.log(mapUsers);

// - відсортувати його за індентифікатором
// let mapUsers = users
//     .map((item, index) => {item.id = index; return item;})
//     .sort((a, b) => a.id - b.id)
// console.log(mapUsers);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator(a,b, callbackFn) {
//     return callbackFn (a, b);
// };

// console.log(calculator(30, 40, (a,b)=> a * b));

// // -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculatorTrhee(a,b,c, callback) {
//     return callback (a, b, c);
// };
// console.log(calculatorTrhee(30, 40, 300, (a, b, c,) => a * b + c));

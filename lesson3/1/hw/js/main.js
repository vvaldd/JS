/*-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу*/
/*let dog = {
    nickname : "boss",
    color : "black",
    age : 4,
    paw : 4,
    tail : "yes"
}*/
/*let man = {
    name : "Ferod",
    height : 1.8,
    age : 24,
    weigth : 78,
    eyes : "green",
}*/
/*let car = {
    carBrand : "Ford",
    color : "skyblue",
    engine : 1.4,
    fuel : "diesel",
    class : "sedan",
}*/
/*let apartment = {
    room : 4,
    floor  : 3,
    area : 124,
    heating  : "yes",
    condition : "new",
}*/
/*let book = {
    title : "Book",
    author : "man",
    genre : "Trash",
    hero : "dog",
    spoiler  : "everybody died",
}*/

/*-- Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів*/
/*let arrayDog = ["dog", "dog2", "dog3", "gav", "gav2"];
let arrayMan = ["Derek", "Vova", "Sveta", "Sasha", "Lena"];
let arrayCar = ["bmw", "suzuki", "opel", "zaz", "mazda"];
console.log(arrayDog);
console.log(arrayMan);
console.log(arrayCar);*/

/*-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка*/
/*let house = {
    floor : 2,
    room : 5,
    colorRoom : ["red", "yellow", "blue", "white", "skyblue"],
    veranda : "yes",
    price : 45000,
}*/
/*let driver = {
    name : "Lol",
    height : 1.8,
    age : 24,
    weigth : 78,
    category : ["A1", "C", "C1", "B2"],
}*/
/*let toy = {
    color : ["red", "blue", "yellow"],
    height : 25,
    age : "3+",
    weigth : 1,
    category : "car",
}*/
/*let table  = {
    model : "Arizona",
    height : 0.9,
    color : ["oak", "alder", "nut "],
    weigth : 11,
    category : "kitchen ",
}*/
/*let handbag  = {
    model : "lalaluz",
    material : "dermis",
    color : ["black ", "кув", "nut "],
    weigth : 0.2,
    category : "clutch ",
}*/

/*Дан массив:
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни*/
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
			];
    console.log(users[0].status);
    console.log(users[4].status);
    console.log(users[users.length-2].name);
    console.log(users[2].name);
    console.log(users[6].age);
    console.log(users[3].age, users[[users.length-2]].age,);
    console.log(users[4].age, users[4].name);
    console.log(users[5].age, users[5].status);
*/

/*-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :*/

/*- отримує текст з параграфа з id "content"*/
/*let content = document.getElementById("content");
console.log(content);*/
/*let content = document.getElementsByTagName("p");
console.log(content);*/

/*- отримує текст з блоку з id "rules"*/
/*let rules = document.getElementById("rules");
console.log(rules);*/

/*- замініть текст параграфа з id 'content' на будь-який інший*/
/*let content = document.getElementById("content");
content.innerText = "замініть текст параграфа з id 'content' на будь-який інший";*/

/*- замініть текст параграфа з id 'rules' на будь-який інший*/
/*let rules = document.getElementById("rules");
rules.innerText = "замініть текст параграфа з id 'rules' на будь-який інший";*/

/*- змініть кожному елементу колір фону на червоний*/
/*let content = document.getElementById("content");
content.style.background = "red";
let rules = document.getElementById("rules");
rules.style.background = "red";*/

/*- змініть кожному елементу колір тексту на синій*/
/*let content = document.getElementById("content");
content.style.background = "blue";
let rules = document.getElementById("rules");
rules.style.background = "blue";*/

/*- отримати весь список класів елемента з id=rules і вивести їх в console.log*/
/*let rules = document.getElementById("rules");
console.log(rules.classList);*/

/*- отримати всі елементи з класом fc_rules*/
/*let fcrules = document.getElementsByClassName("fc_rules");
console.log(fcrules);*/

/*- поміняти колір тексту у всіх елементів fc_rules на червоний*/
/*let fcrules = document.getElementsByClassName("fc_rules");
for (let color of fcrules) {
    color.style.background = "red";
}*/

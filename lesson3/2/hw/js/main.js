//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

/*let dog = {nickname : "boss", paw : 4, tail : "yes"}
let man = {name : "Ferod", age : 24, eyes : "green"}
let car = {carBrand : "Ford", fuel : "diesel", class : "sedan"}
let apartment = {room : 4, floor : 3, area : 124}
let book = {title : "Book", author : "man", genre : "Trash"}*/

//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
/*let dog2 = {nickname : "boss", paw : ["левая", "правая", "передняя", "задняя"], owner : { name : "Vasya", age: 22}}
let man2 = {name : "Ferod", skills : ["js", "java", "python"], wife : {age : 21, work : "yes"}}
let car2 = {carBrand : "Ford", fuel : ["diesel", "gas", "hybrid"], color : {sedan : "blue", hatchback : "red"}}
let apartment2 = { room : {livingRoom : "yes"}, floor : [3, 4, 5], area : 124}
let book2 = {title : "Book", author : {name : "Calipso"}, genre : ["триллер", "детектив", "ужос"]}*/

//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
/*for (let key in dog){console.log(key);};
for (let key in man){console.log(key);};
for (let key in car){console.log(key);};
for (let key in apartment){console.log(key);};
for (let key in book){console.log(key);};*/

/*let allkey = [];
    for (let key in dog2){ allkey.push(key);};
console.log(allkey);
let allkey2 = [];
    for (let key in man2){allkey2.push(key);};
console.log(allkey2);
let allkey3 = [];
    for (let key in car2){allkey3.push(key);};
console.log(allkey3);
let allkey4 = [];
    for (let key in apartment2){allkey4.push(key);};
console.log(allkey4);
let allkey5 = [];
    for (let key in book2){allkey5.push(key);};
console.log(allkey5);*/
/*for (let key in book2.author){ //абсолютно все ключи через костыль
    for (let key2 in book2){
        console.log(key2);}
    console.log(key);
};*/


//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
/*let keyDog = Object.keys(dog);
console.log(keyDog);
let keyMan = Object.keys(man);
console.log(keyMan);
let keyCar = Object.keys(car);
console.log(keyCar);
let keyApartment = Object.keys(apartment);
console.log(keyApartment);
let keyBook = Object.keys(book);
console.log(keyBook);
let keyDog2 = Object.keys(dog2);
console.log(keyDog2);
let keyMan2 = Object.keys(man2);
console.log(keyMan2);
let keyCar2 = Object.keys(car2);
console.log(keyCar2);
let keyApartment2 = Object.keys(apartment2);
console.log(keyApartment2);
let keyBook2 = Object.keys(book2);
console.log(keyBook2);*/

//- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [
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
]

//- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [
    {name : "Мечта", population : 5040, country : "Украина", region : "набокулежанщина"},
    {name : "У моря", population : 873453, country : "Португалия", region : "для курящих"}, 
    {name : "В гамаке", population : 2045304, country : "Словакия", region : "мест нет"},
    {name : "Лежачий камень", population : 752, country : "Украина", region : "здесь был 'укажите имя'"},
    {name : "Бокал пива", population : 457567, country : "Там где нас нет", region : "хороший"},
    {name : "В руке", population : 4589565, country : "Германия", region : "могло быть и лучше"},
    {name : "Ясный день", population : 2454512, country : "Украина", region : "неплохой"},
    {name : "Лед", population : 12701, country : "Где трава зеленее", region : "лучше предыдущего"},
    {name : "Креветки и крабы", population : 7807, country : "Польша", region : "фантазия слабая"},
    {name : "ОК", population : 45674, country : "Украина", region : "у меня"}
]

//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
/*let cars2 = [
    {model : "auto", age  : 2000, power : 1000, color : "red", driver : {name : "Ivan", age : 56, gender : "male", experience : 10}},
    {model : "auto2", age  : 2002, power : 1500, color : "blue", driver : {name : "Katya", age : 26, gender : "female", experience : 0}}, 
    {model : "auto3", age  : 2004, power : 1600, color : "green", driver : {name : "Kolya", age : 21, gender : "male", experience : 1}},
    {model : "auto4", age  : 2006, power : 2100, color : "gold", driver : {name : "Olya", age : 28, gender : "female", experience : 8}},
    {model : "auto5", age  : 2008, power : 2300, color : "grey", driver : {name : "Anna", age : 22, gender : "female", experience : 3}},
    {model : "auto6", age  : 2010, power : 2500, color : "silver", driver : {name : "Ruslan", age : 30, gender : "male", experience : 10}},
    {model : "auto7", age  : 2012, power : 3000, color : "skyblue", driver : {name : "Ivan", age : 56, gender : "male", experience : 10}},
    {model : "auto8", age  : 2014, power : 4000, color : "#3298f2", driver : {name : "Vasya", age : 33, gender : "male", experience : 11}},
    {model : "auto9", age  : 2016, power : 21000, color : "#333333", driver : {name : "Ivan", age : 27, gender : "male", experience : 2}},
    {model : "auto10", age  : 2018, power : 3500, color : "#ff9638", driver : {name : "Dima", age : 45, gender : "male", experience : 26}}
]
*/
//- проитерировать каждый массив из задания 5,6,7 при помощи while.
/*let c = 0;
let c2 = 0;
let c3 = 0;
while (const c < cars.length) {
    console.log(cars[c]);
    c++;
}
while (const c2 < cities.length) {
    console.log(cities[c2]);
    c2++;
}
while (const c3 < cars2.length) {
    console.log(cars2[c3]);
    c3++;
}*/

//- проитерировать каждый массив из задания 5,6,7 при помощи for .
/*for (let c = 0; c < cars.length; c++) {
    console.log(cars[c]);
}
for (let c2 = 0; c2 < cities.length; c2++) {
    console.log(cities[c2]);
}
for (let c3 = 0; c3 < cars2.length; c3++) {
    console.log(cars2[c3]);
}*/

//- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/*for (let c of cars) {
    console.log(c);
}
for (let c2 of cities) {
    console.log(c2);
}
for (let c3 of cars2) {
    console.log(c3);
}*/
//!!!не пойму почему в for of логаем переменную, а в while и for переменную с указанием массива


//- взять объекты из задания 1 и превратить каждый в json.
/*let jsDog = JSON.stringify(dog);
let jsMan = JSON.stringify(man);
let jsCar = JSON.stringify(car);
let jsApartment = JSON.stringify(apartment);
let jsBook = JSON.stringify(book);
console.log(jsDog);
console.log(jsMan);
console.log(jsCar);
console.log(jsApartment);
console.log(jsBook);*/

//- взять json из задания 11 и превратить их обратно в объекты.
/*let jpDog = JSON.parse(jsDog);
let jpMan = JSON.parse(jsMan);
let jpCar = JSON.parse(jsCar);
let jpApartment = JSON.parse(jsApartment);
let jpBook = JSON.parse(jsBook);
console.log(jpDog);
console.log(jpMan);
console.log(jpCar);
console.log(jpApartment);
console.log(jpBook);*/

//- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
/*for (let j of cars){
    let jCars = j;
    console.log(JSON.stringify(jCars));
}

//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (let j of cities){
    let jCities = j;
    console.log(JSON.stringify(jCities));
}
//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let copy = [];
for (let j of cars){
    let jsCars = j;
    copy.push(JSON.parse(JSON.stringify(jsCars)));
}
console.log(copy);*/

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
/*let users = [
    {name : "vasya", age : 33, skills : ["java", "js", "python"]},
    {name : "petya", age : 27, skills : ["js", "python"]},
    {name : "kolya", age : 42, skills : ["java", "js"]},
    {name : "serg", age : 31, skills : ["java", "python"]},
    {name : "borya", age : 29, skills : ["java", "js", "python"]},
];
for (const user of users) {
    console.log(user.name);
    for (const s of user.skills) {
        console.log(s);
    };
};*/
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
/*let users = [
    {name : "vasya", age : 33, skills : ["java", "js", "python"]},
    {name : "petya", age : 27, skills : ["js", "python"]},
    {name : "kolya", age : 42, skills : ["java", "js"]},
    {name : "serg", age : 31, skills : ["java", "python"]},
    {name : "borya", age : 29, skills : ["java", "js", "python"]},
];
let skill = [];
for (const user of users) {
    for (const s of user.skills) {
        skill.push(s);
    };
};
console.log(skill);*/
//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
/*let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    for (let o of users[i].skills) {
        console.log(o);
    }
}*/
//
//
//
/*let users = [
    {name: 'vasya', age: 31, status: false, address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}},
    {name: 'petya', age: 30, status: true, address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}},
    {name: 'kolya', age: 29, status: true, address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}},
    {name: 'olya', age: 28, status: false, address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}},
    {name: 'max', age: 30, status: true, address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}},
    {name: 'anya', age: 31, status: false, address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}},
    {name: 'oleg', age: 28, status: false, address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}},
    {name: 'andrey', age: 29, status: true, address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}},
    {name: 'masha', age: 30, status: true, address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}},
    {name: 'olya', age: 31, status: false, address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}},
    {name: 'max', age: 31, status: true, address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}}
];*/

//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/*let addres = [];
    for (const user of users) {
            addres.push(user.address);
    };
console.log("адреса :", addres);*/

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
/*for (let user of users) {
    let divka = document.createElement("div");
    divka.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country}`;
    document.body.appendChild(divka);
}*/

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
/*for (let user of users) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    let address = "";
        for(address1 in user.address){
            address = address + " " + user.address[address1]
        };
    h2.innerText = user.name;
    p2.innerText = user.age;
    p3.innerText = user.status;
    p4.innerText = address;

    div.appendChild(h2);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    document.body.appendChild(div);
}*/

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
/*for (let user of users) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let h31 = document.createElement("h3");
    let h32 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let d1 = document.createElement("div");
    let d2 = document.createElement("div");
    let d3 = document.createElement("div");
    let d4 = document.createElement("div");
  
    h2.innerText = user.name;
    h31.innerText = user.age;
    h32.innerText = user.status;
    h4.innerText = "address :";
    d1.innerText = user.address.city;
    d2.innerText = user.address.country;
    d3.innerText = user.address.street;
    d4.innerText = user.address.houseNumber;

    div.appendChild(h2);
    div.appendChild(h31);
    div.appendChild(h32);
    div.appendChild(h4);
    h4.appendChild(d1);
    h4.appendChild(d2);
    h4.appendChild(d3);
    h4.appendChild(d4);

    document.body.appendChild(div);
}*/


//- Дано 2 масиви з рівною кількістю об'єктів.
//let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
/*for (let user of usersWithId){
    for (let city of citiesWithId){
        user.id === city.user_id ? user.adress = city : "";
    };
};
console.log(usersWithId);*/

//Записати цей об'єкт в новий масив
/*let save = [];
for (let user of usersWithId){
    for (let city of citiesWithId){
        user.id === city.user_id ? user.adress = city : "";
        
    };
};
save.push(usersWithId);
console.log(save);*/

//
//- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//document.getElementById або document.getElementsByClassName або document.getElementsByTagName

/*let id = document.getElementById("main_header");
console.log(id.textContent);*/

/*let classR = document.getElementsByClassName("text_segment text2");
for (let c of classR) {
    console.log(c.textContent);
}*/

/*let tagN = document.getElementsByTagName("p");
for (let t of tagN) {
    console.log(t.textContent);
}*/

//- змінити цей текст використовуючи селектори id, class,  tag
/*let id = document.getElementById("main_header");
id.innerText = "змінити цей текст використовуючи селектор id";

let classR = document.getElementsByClassName("sub-header");
for (let c of classR) {
    c.innerText = "змінити цей текст використовуючи селектор class";
}

let tagN = document.getElementsByTagName("p");
for (let t of tagN) {
    t.innerText = "змінити цей текст використовуючи селектор tag";
}*/


//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
/*let id = document.getElementById("main_header");
id.style.height = "100px";
id.style.width = "500px";

let classR = document.getElementsByClassName("sub-header");
for (let c of classR) {
    c.style.height = "50px";
    c.style.width = "500px";
}

let tagN = document.getElementsByTagName("p");
for (let t of tagN) {
    t.style.height = "200px";
    t.style.width = "500px";
}*/

//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
/*let table = document.createElement("table");
let tr = document.createElement("tr");
let td1 = document.createElement("td1");
let td2 = document.createElement("td2");
let td3 = document.createElement("td3");

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

table.appendChild(tr);

document.body.appendChild(table);*/

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
/*let table = document.createElement("table");
for (let i = 0; i < 10; i++){
    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td1");
    let td2 = document.createElement("td2");
    let td3 = document.createElement("td3");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);
};

document.body.appendChild(table);/*

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

/*let table = document.createElement("table");
for (let i = 0; i < 10; i++){
    let tr = document.createElement("tr");
    for (let i = 0; i < 5; i++){
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);*/

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

/*let n = prompt("кількість рядів");
let m = prompt("кількість ячейок");
let table = document.createElement("table");
for (let i = 0; i < n; i++){
    let tr = document.createElement("tr");
    for (let i = 0; i < m; i++){
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);*/


//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
/*const classN = document.getElementsByTagName("*");
for (let c of classN) {
    if(c.getAttribute("class")){
        console.log(c);
    };
}*/

// - знайти всі параграфи ,та змінити текст на hello oktenweb!
/*const p = document.getElementsByTagName("p");
for (let i of p) {
    i.innerText = "hello oktenweb!";
}*/

// - знайти всі div та змінити ім колір на червоний
/*const d = document.getElementsByTagName("div");
for (let i of d) {
    i.style.color = "red";//i.style.background = "red";
}*/
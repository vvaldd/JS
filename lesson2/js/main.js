/*-створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу*/
/*let number = [10, 20, 30, 40, 50];
let string = ['sky', 'mew', 'go', 'armed', 'so'];
let combo = ['lao', 45, 12, true, 'false'];
    console.log(number, string, combo);*/

/*Створити пустий масив.
Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
Вивести в консоль*/
/*let clear = [];
clear[0] = 'str';
clear[1] = 12;
clear[2] = true;
clear.push(999);
    console.log(clear);*/

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
/*for (let i = 0; i < 10; i++) {
    document.write('<div>test</div>');
    document.write('<hr>');
}*/
/*for (let i = 0; i < 10; i++) {
    document.write('<div>test '+i+'</div>');
    document.write('<hr>');
}*/

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/
/*let i = 0;
while (i < 20) {
    document.write('<h1>test</h1>');
    i++;
}*/
/*let j = 0;
while (j < 20) {
    document.write(`<h1>test ${j}</h1>`);
    j++;
}*/

/*Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/
/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
    console.log(numbers[i]);
}*/

/*Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
/*let words = ['idea', 'identity', 'ill', 'illegal', 'imagine', 'important', 'intend', 'interesting', 'irritable', 'item'];
for (let word of words) {
    console.log(word);
}*/
    
/*Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
/*let combo = ['idea', false, 234, true, 'identity', 'imagine', 426, 345, true, 12];
for (let i = 0; i < combo.length; i++) {
    console.log(combo[i]);
}*/
    
/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/
/*let combo = ['idea', false, 234, true, 'identity', 'imagine', 426, 345, true, 12];   
for (let i = 0; i < combo.length; i++) {
    typeof combo[i] === 'boolean' ? console.log(combo[i]) : ''; //попробовал оператора =)
}
for (let i of combo) {
    if (typeof i === 'number'){
        console.log(i);
    }
}
for (let i of combo) {
    if (typeof i === 'string'){
    console.log(i);
    }
}*/

/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/
/*let mass = [];
mass[0] = NaN;
mass[3] = 'str';
mass[4] = true;
mass[10] = undefined;
mass[8] = 123;
mass[45] = false;
mass[11] = 32;
mass[9] = 'ruta';
mass[1] = 'pay';
mass [15] = 'arrow';
console.log(mass);*/

/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
/*for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
    document.write('<br>');
}*/

/*for (let h = 0; h < 100; h++) {
    console.log(h);
    document.write(h);
    document.write('<br>');
}*/
/*for (let r = 0; r < 200; r +=2){
    console.log(r);
    document.write(r);
    document.write('<br>');
}*/

/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
/*for (let i = 0; i <100; i++) {
    i%2 === 0 ? console.log(i) : ""; //классная штука
}*/
/*for (let i = 0; i < 100; i++) {
    if(i%2 === 0) {
        console.log(i);
    }
}*/
/*for (let i = 0; i < 100; i++) {
    i%2 !== 0 ? console.log(i) : "";
}*/

/*Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)*/
/*for (let i = 0; i < 2; i++) {
    for (let o = 0; o < 60; o++) {
        console.log(i, o);
    }
}*/
/*for (let i = 0; i < 2; i++) {
    for (let o = 0; o < 60; o++) {
        for (let p = 0; p < 60; p++) {
            console.log(i, o, p)
        }
    }
}*/

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/
/*let mass = [ 'a', 'b', 'c'];
let mass2 = [];
for (let i = 0; i < mass.length; i++) {
    mass2 = mass2 + mass[i];
}
console.log(mass2);*/
/*let mass = [ 'a', 'b', 'c'];
let mass2 = [];
let i = 0;
while (i < mass.length) {
    mass2 = mass2 + mass[i];
    i++;
}
console.log(mass2);*/
/*let mass = [ 'a', 'b', 'c'];
let mass2 = [];
for (let i of mass) {
    mass2 = mass2 + i;
}
console.log(mass2);*/








    
    





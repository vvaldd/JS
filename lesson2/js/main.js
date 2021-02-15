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
/*for (let h = 0; h < 2; h++) {
    for (let m = 0; m < 60; m++) {
        console.log('hour :', h, 'min :', m);
    }
}*/
/*for (let h = 0; h < 2; h++) {
    for (let m = 0; m < 60; m++) {
        for (let s = 0; s < 60; s++) {
            console.log('hour :', h, 'min :', m, 'sek :', s);
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

/*- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.*/
/*let abc = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    abc.push(i);
}
console.log(abc);*/
/*let mass = [1, 2, 3];
let mass2 = mass.reverse(); //!!!не понял как с обратным циклом создать новый массив
console.log(mass2);*/
/*let mass = [1, 2, 3];
for (let i = 4; i <= 6; i++) {
    mass.push(i);
}
console.log(mass);*/
/*let mass = [1, 2, 3];
for (let i = 6; i >= 4; i--) {
    mass.unshift(i);
}
console.log(mass);*/

/*- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()*/
/*let mass = ['js', 'css', 'jq'];
let shMass = mass.shift();
console.log(shMass);*/
/*let mass = ['js', 'css', 'jq'];
let popMass = mass.pop();
console.log(popMass);*/




/*- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
/*let mass= [1, 2, 3, 4, 5];
console.log(mass.slice(3));*/
/*let mass= [1, 2, 3, 4, 5];
console.log(mass.slice(0, 2));*/
/*let mass= [1, 2, 3, 4, 5];
mass.splice(1, 2);
console.log(mass);*/
/*let mass= [1, 2, 3, 4, 5];
mass.splice(3, 0, 'a', 'b', 'c');
console.log(mass);*/
/*let mass= [1, 2, 3, 4, 5];
mass.splice(1, 0, 'a', 'b');
mass.splice(6, 0, 'c');
mass.splice(8, 0, 'e');
console.log(mass);*/

/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/
/*let mass = [10, 21, 54, 12, 30, 55, 112 , 56, 34 , 33];
for (let i = 0; i < mass.length; i++) {
    i%2 ===0 ? console.log(mass[i]) : "";
}*/
/*let mass = [10, 21, 54, 12, 30, 55, 112 , 56, 34 , 33];
let mass2 = [];
for (let i of mass) {
    mass2.push(i);
}
console.log(mass2);*/
/*let mass = [10, 21, 54, 12, 30, 55, 112 , 56, 34 , 33];
let mass2 = [];
for (let i = 0; i < mass.length; i++) {
    mass2[i]=(mass[i]);
}
console.log(mass2);*/

/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:*/

/*1. перебрати його циклом while*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < mass.length) {
    console.log(mass[i]);
    i++;
}*/

/*2. перебрати його циклом for*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < mass.length) {
    console.log(mass[i]);
    i++;
}*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < mass.length; i++) {
    console.log(mass[i]);
}*/

/*3. перебрати циклом while та вивести  числа тільки з непарним індексом*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < mass.length) {
    mass[i]%2 !== 0 ? console.log(mass[i]) : "";
    i++;
}*/

/*4. перебрати циклом for та вивести  числа тільки з непарним індексом*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < mass.length; i++) {
    if (mass[i]%2 !== 0) {
        console.log(mass[i]);
    }
}*/

/*5. перебрати циклом while та вивести  числа тільки парні  значення*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < mass.length) {
    mass[i]%2 === 0 ? console.log(mass[i]) : "";
    i++;
}*/

/*6. перебрати циклом for та вивести  числа тільки парні  значення*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < mass.length; i++) {
    if (mass[i]%2 === 0) {
        console.log(mass[i]);
    }
}*/

/*7. замінити кожне число кратне 3 на слово "okten"*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
console.log(mass);
for (let i = 0; i < mass.length; i++) {
    mass[i]%3 === 0 ? mass[i] = 'okten' : "";
}
console.log(mass);*/

/*8. вивести масив в зворотньому порядку.*/
/*let mass = [2,17,13,6,22,31,45,66,100,-18];
for (let i = mass.length - 1; i >= 0; i--) {
    console.log(mass[i]);
}*/

/*створити пустий масив та :
1. заповнити його 50 парними числами за допомоги циклу.
2. заповнити його 50 непарними числами за допомоги циклу.
/*let mass = [];
for (let i = 0; i < 100; i++) {
    if (i%2 === 0) {
        mass[i] = i;
        console.log(mass[i]);
    }
}*/
/*let mass = [];
let i = 0;
while (i < 100) {
    if (i%2 !== 0) {
        mass[i] = i;
        console.log(mass[i]);
        
    }
    i++;
}*/

/*3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
 диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)*/
/*let mass = [];
for (let i = 0; i < 10; i++) {
    mass[i] = Math.floor(Math.random()*732-8)+8;
}
console.log(mass);/*

/*3.1. вывести на консоль  каждый третий елемент*/

/*for (let i = 2; i < 10; i+=3) {
    console.log(mass[i]);
}*/

/*3.2. вывести на консоль  каждый третий елемент
 но при условии что его значение является парным.*/

/*for (let i = 2; i < 10; i+=3) {
    mass[i]%2 === 0 ? console.log(mass[i]) : "";
}*/

/*3.3. вывести на консоль  каждый третий елемент
 но при условии что он имеет парное значение и
 записать их в другой массив.*/

/*let mass2 = [];
for (let i = 2; i < 10; i+=3) {
    mass[i]%2 === 0 ? mass2.push(mass[i]) : "";
}
console.log(mass2);*/

/*3.5. Вывести каждый елемент массива у которого соседний с права элемент - парный
for (let i = 0; i < mass.length; i++) {
    mass[i+1]%2 === 0 ? console.log(mass[i]) : "";
}*/

/*4. масив з числами [100,250,50,168,120,345,188]
Які характеризують вартість окремої покупки. обрахувати середній чек.*/

/*let mass = [100,250,50,168,120,345,188];
let sa = 0;
for (let i = 0; i < mass.length; i++) {
    sa += mass[i];
}
let mass2 = sa / mass.length;
console.log(mass2);*/

/*5. створити масив з рандомними значеннями
помножити всі його елементи на 5 та перемістити їх в інший масив.*/
/*let mass = [];
let mass2 = [];
for (let i = 0; i < 10; i++) {
    mass[i] = Math.floor(Math.random()*100-10)+10;
}
console.log(mass);
for (let i = 0; i < mass.length; i++) {
    mass2[i] = mass[i]*5;
}
console.log(mass2);*/

/*4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
 додати його в інший масив.*/

/*let combo = ['idea', false, 234, true, 'identity', 'imagine', 426, 345, true, 12];
let number = [];
console.log(combo);
for (let i = 0; i < combo.length; i++) {
    typeof combo[i] === 'number' ? number.push(combo[i]) : "";
}
console.log(number);*/
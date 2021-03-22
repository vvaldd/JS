// lesson
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(value => {return value.json();})
//     .then(value => {
//         for (const user of value) {
//             let target = document.createElement("div")
            
//             let p = document.createElement("p");
//             p.classList.add("item");
//             p.innerText = user.id + " " + user.name + " - ";
//             target.appendChild(p);
//             let a = document.createElement("a");
//             a.innerText = "details";
//             a.href = `userpage.html?data=${JSON.stringify(user)}`
//             p.appendChild(a);
//             document.body.appendChild(target);
//         }
//     });

// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => console.log(value))

//  За допомогою document.createElement вивести їх в браузер. 
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         value.forEach(element => {
//             let target = document.createElement("div")
//             let p = document.createElement("p");
//             target.appendChild(p);
//             p.innerText = element.name;
//             document.body.appendChild(target);
//     });
// })

//  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
        
//         value.map(user => {

//             let target = document.createElement("div")
//             let h = document.createElement("h3");
//             let p = document.createElement("p");
//             let p2 = document.createElement("p");
//             let p3 = document.createElement("p");
            
//             let UA = user.address
//             console.log(UA);

//             h.innerText = user.name;
//             p.innerText = user.email;
//             p2.innerText = user.username;
//             p3.innerText = user.company.name;
                        
//             target.appendChild(h);
//             target.appendChild(p);
//             target.appendChild(p2);
//             target.appendChild(p3);
            
//             document.body.appendChild(target);
//         });
    
//     })

// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value=> value.json())
//     .then(value=> console.log(value))

// За допомогою document.createElement вивести їх в браузер. 
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value=> value.json())
    .then(value=> 
            value.forEach(element => {
                let target = document.createElement("div")
                let p = document.createElement("p");
                target.appendChild(p);
                p.innerText = element.title;
                document.body.appendChild(target);
            }
        )
    )

// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// -при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту


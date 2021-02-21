

//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// let wrap = document.createElement("div");
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(u=> u.json())
//     .then(users => {
//             for (let user of users) {
//             let id = document.createElement("div");
//             let name = document.createElement("h2");
//             let phone = document.createElement("p");
//             let username = document.createElement("p");

//             id.innerHTML = `${user.id}`
//             name.innerHTML = `${user.name}`
//             phone.innerHTML = `${user.phone}`
//             username.innerHTML = `${user.username}`
            
//             wrap.appendChild(id);
//             wrap.appendChild(name);
//             wrap.appendChild(phone);
//             wrap.appendChild(username);

//         }
//     })
// document.body.appendChild(wrap);

//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
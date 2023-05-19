/* async function displayHello() {
    console.log("Hello");
}
displayHello()
// Hello
// Promise {<fulfilled>: undefined}
 */

//////////////////////

/* function whatsYourFavorite() {
    let fav = "Javascript";
    return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite()
    .then(displaySubject)
    .then(console.log);

// Hello, Javascript */


/* 
async function whatsYourFavorite() {
    let fav = "Javascript";
    return fav;
}

async function displaySubject(subject) {
    return `Hello, ${subject}`;
}

whatsYourFavorite()
    .then(displaySubject)
    .then(console.log);
// Hello, Javascript 
*/


/* 
async function whatsYourFavorite() {
    let fav = "Javascript";
    return fav;
}

async function displaySubject(subject) {
    return `Hello, ${subject}`
}

async function init() {
    const response = await whatsYourFavorite(); 
    const result = await displaySubject(response);
    console.log(result);
}

init(); // Hello, Javascript 
*/

/////////////////////


/*
 fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users)); 
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
*/

/* 
async function init() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
}
init();
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] 
*/

/* 
async function init() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    display(users);
}

function display(users) {
    const result = document.querySelector("#result");
    let string ="";
    users.forEach(user => {
        string += `<ul>
                        <li>${user.name}</li>
                        <li>${user.username}</li>
                        <li>${user.email}</li>
                    </ul>`;
    });
    result.innerHTML = string;
}
init(); // 화면에 JSON 항목들을 출력함. 
*/


async function init() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    display(users);
}

function display(users) {
    const result = document.querySelector("#result");
    let string ="";
    users.forEach(user => {
        string += `<table>
                        <tr>
                            <th>이름</th>
                            <td>${user.name}</td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>${user.username}</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>${user.email}</td>
                        </tr>
                    </table>
        `;
    });
    result.innerHTML = string;
}
init(); 
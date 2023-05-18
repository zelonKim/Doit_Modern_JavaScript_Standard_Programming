/*
 function displayA() {
    console.log("A")
}

function displayB() {
    setTimeout(()=>console.log("B"), 3000);
}

function displayC() {
    console.log("C")
}

displayA()
displayB()
displayC()
// A
// C
// (3초후) B
// 중간에 시간이 많이 걸리는 소스가 있을 경우, 다음에 있는 소스를 먼저 실행함.
 */

/* 
function displayA() {
    console.log("A")
}

// 함수 안에 다른 함수를 넣어 비동기 처리를 함.
function displayB(cb) {
    setTimeout(()=>{console.log("B"), cb()},3000);
}

function displayC() {
    console.log("C")
}

displayA();
displayB(displayC);
// A
// (3초후) B
// (3초후) C 
*/

/* 
function order(coffee, callback) {
    console.log(`${coffee} 주문 접수`);
    setTimeout(()=> { callback(coffee)}, 3000)
}
function display(result) {
    console.log(`${result} 준비 완료`)
}

order("아메리카노", display)
// 아메리카노 주문 접수
// (3초후) 아메리카노 준비 완료
*/


/*
 const pizza = new Promise((resolve, reject) => {

}) 
*/


/* 
let likePizza = true;
const pizza = new Promise((resolve, reject) => {
    if(likePizza)
        resolve('피자를 좋아합니다.');
    else
        reject('피자를 싫어합니다.');
}); 

pizza
    .then(result=> console.log(result))
    .catch(err => console.log(err))
//피자를 좋아합니다. 
*/

/* 
let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    if(likePizza)
        resolve('피자를 좋아합니다.');
    else
        reject('피자를 싫어합니다.');
}); 

pizza
    .then(result=> console.log(result))
    .catch(err => console.log(err))
// 피자를 싫어합니다. 
*/

/* 
let likePizza = true;
const pizza = new Promise((resolve, reject) => {
    if(likePizza)
        resolve('피자를 좋아합니다.');
    else
        reject('피자를 싫어합니다.');
}); 

pizza
    .then(result => console.log(result)) // 피자를 좋아합니다.
    .catch(err => console.log(err)) 
    .finally(()=> console.log('완료')); // 완료
*/

/* let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    if(likePizza)
        resolve('피자를 좋아합니다.');
    else
        reject('피자를 싫어합니다.');
}); 

pizza
    .then(result => console.log(result))
    .catch(err => console.log(err)) // 피자를 싫어합니다.
    .finally(()=> console.log('완료')); // 완료 */


/*
 const order = new Promise((resolve, reject) => {
    let coffee = prompt("어떤 커피를 주문하시겠습니까?");
    if (coffee != null && coffee != "") {
        document.querySelector(".start").innerText = `${coffee} 주문 접수`,
        setTimeout(()=> {resolve(coffee)}, 3000);
        } else {
            reject("커피를 주문하지 않았습니다.")
        }
    });

function display(result) {
    document.querySelector(".end").innerText = `${result} 준비 완료`;
}

function showErr(err) {
    console.log(err);
}

order
    .then(display)
    .catch(showErr);

// 입력: 아메리카노   // 출력: 아메리카노 주문 접수
                    //  출력: (3초후) 아메리카노 준비 완료
                    
// 입력: "" // 출력: 커피를 주문하지 않았습니다. 
*/

/* const pizza = () => {
    return new Promise((resolve, reject) => {
        resolve("피자를 주문합니다.");
    });
};

const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("피자 도우 준비");
        }, 3000);
    });
};

const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("토핑 완료");
        }, 1000);
    });
};

const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("굽기 완료");
        }, 2000);
    });
};

pizza()
    .then(result => step1(result)) 
    .then(result => step2(result))
    .then(result => step3(result))
    .then(result => console.log(result))
    .then(()=> console.log("피자가 준비되었습니다."))
 */
/* result를 생략하고 다음과 같이 써도 됨.
pizza()
    .then(step1) 
    .then(step2)
    .then(step3)
    .then(console.log)
    .then(()=> console.log("피자가 준비되었습니다."))
*/

// 피자를 주문합니다.
// (3초후) 피자 도우 준비
// (4초후) 토핑 완료
// (6초후) 굽기 완료
// (6초후) 피자가 준비되었습니다.


/* 
let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json")
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let students = JSON.parse(xhr.responseText);
        renderHTML(students);
    }
}

function renderHTML(contents) {
    let output =" ";
    for (let content of contents) {
        output += `
            <h2>${content.name}</h2>
            <ul>
                <li> 전공: ${content.major} </li>
                <li> 학년: ${content.grade} </li>
            </ul>
            <hr>
            `;
    }
    document.getElementById("result").innerHTML = output;
} 
*/


fetch('student.json')
    .then(response => console.log(response.json()))
    /* .then(json => {
        let output = '';
        json.forEach(student => {
            output += `
            <h2>${student.name}</h2>
            <ul>
                <li>전공: ${student.major}</li>
                <li>학년: ${student.grade}</li>
            </ul>
            <hr>
            `;
        });
        document.querySelector('#result').innerHTML = output;
    })
    .catch(error => console.log(error))  */
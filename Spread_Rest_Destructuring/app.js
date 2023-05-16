/* 
let str = "hello"

console.log(str.__proto__) // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
*/

/* 
function counting(str, ch) {
    let count = 0;

    for (let i=0; i<str.length; i++) {
        if(str[i] === ch)
            count += 1;
    }
    return count
}

const string = prompt("문자열을 입력하세요");
const letter = prompt("어떤 문자를 체크하시겠습니까?");

const result = counting(string, letter);
document.write(`${string}에는 ${letter}가 ${result}개 있습니다.`) 
*/

/* 
function addNum(...numbers) {
    let sum = 0;

    for (let number of numbers)
        sum += number;
    
        return sum;
}

console.log(addNum(1,2)); // 3
console.log(addNum(1,2,3,4,5)); // 15 
*/

/* 
const animal = ["bird", "cat"]
const fruits = ["apple", "orange", "cherry"]
console.log([...animal, ...fruits]) // ['bird', 'cat', 'apple', 'orange', 'cherry']
console.log(animal.concat(fruits)) // ['bird', 'cat', 'apple', 'orange', 'cherry']
*/

/* 
const fruits = ["apple","orange","cherry"]
const favorite = [...fruits]
favorite[1] = "grape"

console.log(favorite) // ['apple', 'grape', 'cherry']
console.log(fruits) // ['apple', 'orange', 'cherry'] 
*/

/* 
const book = {
    title:"모던 자바스크립트 정석",
    pages: 500
}
book.published data= "2022-01" // 오류 발생
book["published data"] = "2022-01" // 정상 실행 
*/

/* 
function fn() {
    return "result";
}

const obj = {
    [fn()]: "함수 키"
}
console.log(obj) // {result: '함수 키'} 
*/


/* 
function add(a,b) {
    return a + b;
}
const obj = {
    [add(10,20)]: "계산식 키"
}
console.log(obj) // {30: '계산식 키'} 
*/

/*
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}
let user1 = makeUser("백두산", 20)
console.log(user1) // {name: '백두산', age: 20} 
*/


/* 
function makeUser(name, age) {
    return {
        name,
        age
    }
}
let user1 = makeUser("백두산", 20)
console.log(user1) // {name: '백두산', age: 20} 
*/

/*
const fruits = ["사과", "복숭아"]
let apple = fruits[0]
let peach = fruits[1]
console.log(apple) // 사과
console.log(peach) // 복숭아 
*/

/* let [apple, peach] = ["사과", "복숭아"]
console.log(apple)  // 사과
console.log(peach)  // 복숭아  */

/* let fruits = ["사과", "복숭아"]
let [apple, peach] = fruits
console.log(apple)  // 사과
console.log(peach)  // 복숭아   */

/* let [member1, member2] = []
console.log(member1) // undefined
console.log(member2) // undefined */

/* let [spring, ,fall, ] = ["봄","여름","가을","겨울"]
console.log(spring) // 봄
console.log(fall) // 가을 */

/* 
let [teacher, ...student] = ["kim", "lee", "park", "choi"]
console.log(teacher) // kim
console.log(student) // ['lee', 'park', 'choi'] 
*/

/* const member = {
    name: "kim",
    age: 25
}

let {name, age} = member
console.log(name); // kim
console.log(age); // 25 */



/* let {name, age} = {name: "kim", age: 25}
console.log(name); // kim
console.log(age);  // 25 */

/* const member = {
    name: "kim",
    age: 25
}

let {name: userName, age} = member
console.log(userName); // kim
console.log(name) //  */


const student = {
    name: "도레미",
    score: {
        history: 85,
        science: 94
    },
    friends : ["kim","lee","park"]
}

let {
    name,
    score: {
        history,
        science
    },
    friends: [f1, f2, f3]
} = student

console.log(name) // 도레미
console.log(history) // 85
console.log(f1) // kim


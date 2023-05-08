/*
function calcSum() { // 함수 선언
    let sum = 0
    for(let i = 1; i <= 10; i++){
        sum += i;
    }
    console.log(`1부터 10까지 더하면 ${sum}입니다.`); // 1부터 10까지 더하면 55입니다.
}

calcSum(); // 함수 호출
*/

/*
function sum(a, b) {
    let result = a + b;
    console.log(`두 수의 합: ${result}`) // 두 수의 합: 30
}

sum(10,20)
*/

/*
function calcSum(n) { 
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`); // 1부터 5까지 더하면 15입니다.
}

calcSum(5); 
*/

/*
function calcSum(n) { 
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum; // 결과값을 함수를 호출했던 곳으로 다시 넘겨줌.
}

let num = parseInt(prompt("몇까지 더할까요?"));
document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);// 1부터 10까지 더하면 55입니다. 
*/

/*
function multiple(a, b, c) {
    return a * b + c;
}

console.log(multiple(2, 4, 8)) // 16
console.log(multiple(2, 4)) // NaN
*/

/*
function multiple(a, b, c=12) {
    return a * b + c;
}
console.log(multiple(2, 4, 8)) // 16
console.log(multiple()) // 20
*/

/*
let sum = function(a, b) {
    return a + b;
}
console.log(sum(10,20)) // 30
*/

/*
(function(a,b) {
    let sum = a + b;
    console.log(sum)
} (10, 20)); // 30
*/

/*
let hi = function() {
    return "안녕하세요?";
}
console.log(hi()) // 안녕하세요?
*/

/*
let hi = () => {return "안녕하세요?";}
console.log(hi()) // 안녕하세요?
*/

/*
let hi = function(user) {
    console.log(`${user}님, 안녕하세요?`);
}

hi("홍길동"); // 홍길동님, 안녕하세요?
*/

/*
let hi = user => console.log(`${user}님, 안녕하세요?`);

hi("홍길동"); // 홍길동님, 안녕하세요?
*/

/*
let sum = (a, b) => a + b;

console.log(sum(10, 20)) // 30
*/



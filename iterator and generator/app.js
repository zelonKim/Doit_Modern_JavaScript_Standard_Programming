/* 
let hi = "hello"

for (let ch of hi) {
    console.log(ch) 
}
// h
// e
// l
// l
// o 
*/

/* 
let chArray = [...hi]
console.log(chArray) // ['h', 'e', 'l', 'l', 'o']

let [ch1, ch2] = hi
console.log(ch1) // h
console.log(ch2) // e

let arr = [1,2,3,4,5]
let it = arr[Symbol.iterator]()
console.log(it) // Array Iterator {}

console.log(it.next()) // {value: 1, done: false}
console.log(it.next()) // {value: 2, done: false}
console.log(it.next()) // {value: 3, done: false}
console.log(it.next()) // {value: 4, done: false}
console.log(it.next()) // {value: 5, done: false}
console.log(it.next()) // {value: undefined, done: true}
 */


/*
 function fnc() {
 console.log("1");
 console.log("2");
 console.log("3");
}
fnc() // 함수 안의 명령을 한꺼번에 실행함.
// 1
// 2
// 3
*/

/* 
function* gen() {
    yield "1";
    yield "2";
    yield "3";
   }
gen() // 함수 안의 명령을 yield문까지 실행하고 멈춤.

let g1 = gen() // 제너레이터 함수로 객체를 만듦.

console.log(g1) // gen {<suspended>} // 객체가 시작하기 전의 대기상태임.
console.log(g1.next()) // {value: '1', done: false}
console.log(g1.next()) // {value: '2', done: false}
console.log(g1.next()) // {value: '3', done: false}
console.log(g1.next()) // {value: undefined, done: true}
console.log(g1) // gen {<closed>} // 객체가 끝까지 도착해서 모두 처리되었음.
*/

/* 
let g2 = gen()
for (let i of g2) console.log(i)
// 1
// 2
// 3 
*/


/*  
let g3 = gen()
console.log(g3.next()) // {value: '1', done: false}
for(let i of g3) console.log(i) 
// 2
// 3
 */


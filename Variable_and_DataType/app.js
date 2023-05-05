/*
console.log('I'm studying now.')
console.log('I\'m studying now.')
*/

/*
let name = "김성진"
let classRoom=201
console.log(name+"님, " + classRoom + "호 강의실로 오세요")
console.log(`${name}님, ${classRoom}호 강의실로 오세요.`) 


console.log(name + "님, " + "\n    " + classRoom + "호 강의실로 오세요")

console.log(
	`${name}님, 
	${classRoom}호 강의실로 오세요.`)
*/

/*
const name = prompt("이름을 입력하세요")
console.log(`${name}님, 
            반갑습니다.`)
*/

/*
let userName
console.log(userName) 
*/

/*
let age
console.log(age)
*/

/*
let age = null;
console.log(age)
*/


/*
let notebook = {
    size: "middle",
    price: 120,
    brand: "intel",
    color: "navy",
    gameAvailable: false
}

console.log(notebook)
console.log(notebook.brand)
console.log(notebook.color)
*/

/*
let doitBook = {
	title: "모던 자바스크립트 프로그래밍", // string 타입
	pubDate: "2022-12-06", // string 타입
	pages: 634, // number 타입
	finished: true // Boolean 타입
}

console.log(doitBook) // 출력: {title: '모던 자바스크립트 프로그래밍', pubDate: '2022-12-06', pages: 634, finished: true}
console.log(doitBook.title) // 출력: 모던 자바스크립트 프로그래밍
*/

/*
let doitBook = ["모던 자바스크립트 프로그래밍", "2022-12-06", 634, true]
console.log(doitBook[0]) // 출력: 모던 자바스크립트 프로그래밍
*/

/*
let fruits = ['banana', 'apple', 'orange']
console.log(fruits)  // 출력: ['banana', 'apple', 'orange']
*/

/*
let fruits = ['banana', 'apple', 'orange']
console.log(fruits.length) // 출력: 3
console.log(fruits[1])
*/

/*
let var1 = Symbol()
let var2 = Symbol()
console.log(var1 === var2) // 출력: false
*/

/*
let id = Symbol() // id를 심벌로 지정함.
const member = {
    name: "kim",
    [id]: 12345 // 심벌을 객체의 키로 지정할 때는 대괄호 []안에 표현함.
}
console.log(member) // 출력: {name: 'kim', Symbol(): 12345}
console.log(member[id]) // 심벌 키에 접근할때도 마침표 대신 대괄호 []를 사용함. // 출력: 12345

member.id = 6789
console.log(member) // 출력: {name: 'kim', id: 6789, Symbol(): 12345}
console.log(member[id])  // 출력: 12345
*/

/*
const member = {
    name: "kim",
    id: 12345 
}
console.log(member) // 출력: {name: 'kim', id: 12345}
console.log(member.id) // 출력: 12345

member.id = 6789
console.log(member) // 출력: {name: 'kim', id: 6789}
console.log(member.id) // 출력: 6789
*/

let id = Symbol('아이디') 
const member = {
    name: "kim",
    [id]: 12345 
}
console.log(member) //{name: 'kim', Symbol(아이디): 12345}
console.log(member[id]) // 12345

member.id = 6789
console.log(member) // {name: 'kim', id: 6789, Symbol(아이디): 12345}
console.log(member[id]) // 12345
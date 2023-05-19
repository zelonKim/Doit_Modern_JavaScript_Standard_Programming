/* 
let regexp = /\d{3}/
regexp.test("123") // true
regexp.test("hello") // false
*/

/* 
let regexp = new RegExp(/\d{3}/)
regexp.test("123") // true
regexp.test("hello") // false
*/

/* 
let regexp = /\d{3}/
regexp.exec("123")  // ['123', index: 0, input: '123', groups: undefined]
regexp.exec("hello") // null
*/

/*
let str = "ES2015 is powerful"
str.match(/ES2015/) // ['ES2015', index: 0, input: 'ES2015 is powerful', groups: undefined]
str.match(/React/) // null 
*/

/* 
let str = "ES2015 is powerful"
str.replace(/ES2015/,"ES2023") // 'ES2023 is powerful'
str.replace(/React/,"JS") // 'ES2015 is powerful'
*/

/*
let str = "ES2015 is powerful"
/es/.test(str) // false
/es/i.test(str) // true 
*/

/* 
let str = "ES2015 is powerful"
str.match(/ES\d/) // ['ES2', index: 0, input: 'ES2015 is powerful', groups: undefined]
*/

/*
 let str = "ES2015 is powerful"
str.match(/ES\d\d\d\d/) // ['ES2015', index: 0, input: 'ES2015 is powerful', groups: undefined]
 */

/*
 let greeting = "Hello, everyone"
/^H/.test(greeting) // true (문자열이 H로 시작하는지 체크함.)
/^R/.test(greeting) // false (문자열이 R로 시작하는지 체크함.)

/one$/.test(greeting) // true (문자열이 one으로 끝나는지 체크함.)
/two$/.test(greeting) // false (문자열이 two로 끝나는지 체크함.)

"ES2015".match(/[^0-9]/g) //['E', 'S'] // 0-9사이의 숫자가 아닌 것을 모두 찾음. 
*/

/*
 let str = "Goooooogle"
str.match(/o/) // ['o', index: 1, input: 'gooooooogle', groups: undefined]
str.match(/o/g) // ['o', 'o', 'o', 'o', 'o', 'o']

str.match(/o{2}/) // ['oo', index: 1, input: 'Gooooooogle', groups: undefined]
str.match(/o{2,}/) // ['oooooo', index: 1, input: 'Goooooogle', groups: undefined]
str.match(/o{2,4}/) // ['oooo', index: 1, input: 'Goooooogle', groups: undefined]
*/



/*
num = 20
console.log(typeof(num)) // number

num = "John"
console.log(typeof(num)) // string
*/

/*
ten = "10" // string
twenty = 20 // number


console.log(twenty + ten) // 2010 (twenty가 string타입으로 변환됨.)
console.log(twenty - ten) // 10  (ten이 number타입으로 변환됨.)
console.log(twenty * ten) // 200 (ten이 number타입으로 변환됨.)
console.log(twenty / ten) // 2 (ten이 number타입으로 변환됨.)
*/

/*
a = Number(true)
console.log(a) // 출력: 1

b = Number(false)
console.log(b) // 출력:0

c = "10"
console.log(c) // 출력: 10
console.log(typeof(c)) // 출력: string

c = Number("10")
console.log(c) // 출력: 10
console.log(typeof(c)) // 출력: number

d = Number(null)
console.log(d) // 출력: 0
console.log(typeof(d))  // 출력: number

e = Number(undefined)
console.log(e) // 출력: NaN
console.log(typeof(e)) // 출력: number

f = Number(09)
console.log(f) // 출력: 9
console.log(typeof(f))  // 출력: number

g = Number(0.90)
console.log(g) // 출력:0.9
console.log(typeof(g))  // 출력: number

i = Number('')
console.log(i) // 출력: 0
console.log(typeof(i))  // 출력: number

j = Number('pizza')
console.log(j) // 출력: NaN
console.log(typeof(j))  // 출력: number
*/

/*
let input = prompt("숫자를 입력하세요") // 입력: 20
console.log(typeof(input))  // 출력: string
console.log(input+10) // 출력: 2010

let numInput = parseInt(input)
console.log(typeof(numInput)) // 출력: number
console.log(numInput+10) // 출력: 30
*/

/*
let input = prompt("숫자를 입력하세요") // 입력: 36.5

let intInput = parseInt(input)
console.log(typeof(intInput)) // 출력: number
console.log(intInput + 10) // 출력: 46


let floatInput = parseFloat(input)
console.log(typeof(floatInput)) // 출력: number
console.log(floatInput + 10) // 출력: 46.5
*/

/*
num = 100
isEmpty = true

a = num.toString() 
console.log(a) // 100
console.log(typeof(a)) //string

b = num.toString(2)
console.log(b) // 1100100
console.log(typeof(b)) //string

c = num.toString(8)
console.log(c) // 144
console.log(typeof(c)) //string

d = num.toString(16)
console.log(d) // 64
console.log(typeof(d)) //string

e = isEmpty.toString()
console.log(e) // true
console.log(typeof(e)) //string

f = null.toString()
console.log(f) // 오류 발생

g = undefined.toString()
console.log(g) // 오류 발생
*/


/*
num = 100
isEmpty = true

a = String(num) 
console.log(a) // 100
console.log(typeof(a)) // string

b = String(isEmpty)
console.log(b) // true
console.log(typeof(b)) // string

c = String(null)
console.log(c) // null
console.log(typeof(c)) // string

d = String(undefined)
console.log(d) // undefined
console.log(typeof(d)) // string
*/

/*
let input2 = true;
console.log(typeof(input2)) // boolean

input2 = input2+""

console.log(input2) // true
console.log(typeof(input2)) // string
*/

/*
let input2 = true;
console.log(typeof(input2)) // boolean

input2 = +input2

console.log(input2) // 1
console.log(typeof(input2)) // number
*/

a = Boolean(0)
console.log(a) // false

b = Boolean(10)
console.log(b) // true

h = Boolean(-10)
console.log(h) // true

c = Boolean('')
console.log(c) // false

d = Boolean(' ')
console.log(d) // true

e = Boolean('hello')
console.log(e) // true

f = Boolean(undefined)
console.log(f) // false

g = Boolean(null)
console.log(g) // false

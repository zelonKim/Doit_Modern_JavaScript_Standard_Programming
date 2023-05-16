/*
 let bag = new Map()
bag.set("color","red").set("size","tall").set(1234,"num")
console.log(bag) // Map(3) {'color' => 'red', 'size' => 'tall', 1234 => 'num'}
console.log(bag.size) // 3
console.log(bag.get("color")) // red 
console.log(bag.has("color")) // true 
*/

let myCup = new Map([
    ["color", "white"],
    ["haveHandle", true],
    ["material", "ceramic"],
    ["capacity", "300ml"]
])
/* 
console.log(myCup.keys()) // MapIterator {'color', 'haveHandle', 'material', 'capacity'}

for (let key of myCup.keys()) {
    console.log(key)
} 
// color
// haveHandle
// material
// capacity
*/

/* 
console.log(myCup.values()) // MapIterator {'white', true, 'ceramic', '300ml'}

for (let value of myCup.values()) {
    console.log(value)
}
// white
// true
// ceramic
// 300ml  
*/

/* 
console.log(myCup.entries()) // MapIterator {'color' => 'white', 'haveHandle' => true, 'material' => 'ceramic', 'capacity' => '300ml'}

for (let entry of myCup.entries()) {
    console.log(entry)
}  
// ['color', 'white']
// ['haveHandle', true]
// ['material', 'ceramic']
// ['capacity', '300ml'] 
*/



/* 
let set1 = new Set()
console.log(set1.add("one")) // Set(1) {'one'}
console.log(set1.add("two")) // Set(2) {'one', 'two'}
*/

/* 
let set2 = new Set(["one","two","two","two"])
console.log(set2) // Set(2) {'one', 'two'} 
*/

/* 
let students = new Set();

students.add("도레미")
students.add("백두산")
students.add("도레미")

console.log(students.values()) // SetIterator {'도레미', '백두산'}


for (let value of students.values()) {
    console.log(value)
}
// 도레미
// 백두산 
*/

const member1 = ["HTML","CSS"];
const member2 = ["CSS","JS","REACT"]
const member3 = ["JS","TS"]

const subjects = [...member1, ...member2, ...member3];
console.log(subjects) // ['HTML', 'CSS', 'CSS', 'JS', 'REACT', 'JS', 'TS']


const resultList = new Set();
subjects.forEach(subject => {
    resultList.add(subject);
});
console.log(resultList) // {'HTML', 'CSS', 'JS', 'REACT', 'TS'}





/* 
let numbers = [1,2,3,4,5]
let result = numbers.reduce((total, current) => total + current, 0);
console.log(result) // 15 (0+1+2+3+4+5)
*/


/* 
let numbers = [1,2,3,4,5]
let result = numbers.reduce((total, current, index) => total + current + index, 0);
console.log(result) // 25 
*/

/* 
let numbers = [1,2,3,4,5]
let newNumbers = numbers.map(number => number * 2);
console.log(newNumbers); // [2, 4, 6, 8, 10] 
*/

/* 
let numbers = [1,2,3,4,5]
let newNumbers2 = numbers.map((number, index) => index + (number * 3))
console.log(newNumbers2); // [3, 7, 11, 15, 19]
*/

/* 
let scores = [90, 35, 64, 88, 45, 92]
highScores = scores.filter(score => score >= 85)
console.log(highScores) // [90, 88, 92] 
*/

let scores = [90, 35, 64, 88, 45, 92]
let highScores2 = scores.filter((score, index) => { 
    if(score >= 85){
        console.log(`index: ${index}, score: ${score}`);
        return score;
    }
});
// index: 0, score: 90
// index: 3, score: 88
// index: 5, score: 92

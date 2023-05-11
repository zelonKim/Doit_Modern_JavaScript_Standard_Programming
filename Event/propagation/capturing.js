/* const elements = document.querySelectorAll('*'); // 모든 요소를 가져옴.

for(let element of elements) {
    element.addEventListener("click", e => 
    console.log(`${e.target.tagName}, ${e.currentTarget.tagName}`)) // 디폴트값은 버블링임.
}  */


const elements = document.querySelectorAll('*'); // 모든 요소를 가져옴.

for(let element of elements) {
    element.addEventListener("click", e => 
    console.log(`${e.target.tagName}, ${e.currentTarget.tagName}`), true)
} // 세번째 매개변수를 true로 지정하여 캡처링으로 바꿔줌.
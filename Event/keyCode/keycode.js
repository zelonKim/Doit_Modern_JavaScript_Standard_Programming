const body = document.body
const result = document.querySelector("#result");

body.addEventListener("keydown", (e) => {
  result.innerText = `${e.code}, ${e.key}`; 
}); 
// 입력: a  // 출력: KeyA, a
// 입력: 1  // 출력: Numpad1, 1
// 입력: ,  // 출력: Comma, ,



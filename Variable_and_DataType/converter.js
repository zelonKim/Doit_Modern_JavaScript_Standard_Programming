let temperF = parseFloat(prompt("화씨 온도를 입력하세요"))
let temperC = (temperF - 32) / 1.8
temperC = temperC.toFixed(1) // 소수점 첫째 자리까지만 표기함.
document.write(`섭씨 온도로는 ${temperC}도 입니다.`)
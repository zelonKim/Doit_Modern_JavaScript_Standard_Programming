const btn = document.querySelector("#bttn")

btn.addEventListener("click", () => {
    const word = document.querySelector("#word").value // 입력된 값을 얻어옴. 
    const result = document.querySelector("#result"); // 결과값을 표시할 영역을 얻어옴. 
    let count = word.length; // 입력된 값의 길이를 구함.

    result.innerText = `${count}` // 결과값을 표시할 영역에 입력된 값의 길이를 출력함.
})
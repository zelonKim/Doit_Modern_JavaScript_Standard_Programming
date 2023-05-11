const buttons = document.querySelectorAll("p > span"); // 모든 삭제 버튼 <span>&cross;</span>을 가져옴.

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove(this);
  });
}
const items = document.querySelectorAll("li") // 모든 <li> 항목을 가져옴.

for(item of items) { 
    item.addEventListener("click", function () {
       this.parentNode.removeChild(this) // this는 해당 이벤트(click)가 발생한 요소(item)를 의미함.
    })
}
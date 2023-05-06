/*
console.log(document.querySelector("#desc").innerText) // 이름 : 도레미

console.log(document.querySelector("#desc").innerHTML) 
//  <p class="user">이름      :     도레미</p>
//  <p class="user" style="display:none">주소     :     somewhere</p>
//  <p class="user" style="display:none">연락처     :     1234-5678</p>

console.log(document.querySelector("#desc").textContent) 
//  이름      :     도레미
//  주소     :     somewhere
//  연락처     :     1234-5678
*/

document.querySelector("#desc").innerText = "이름: 김성진"

document.querySelector("#desc").textContent = "이름: 김성진"  

document.querySelector("#desc").innerHTML = "이름: <b>김성진</b>"







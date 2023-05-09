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


/*
const title = document.querySelector("#title");
const userName = document.querySelector("#desc p"); 
const pfImage = document.querySelector("#profile img");

title.onclick = () => title.innerText = "프로필"; // My Profile을 클릭하면 "프로필"로 바뀜.
userName.onclick = () => userName.innerHTML = `이름: <b>민들레</b>`; // 이름 : 도레미를 클릭하면 이름: <b>민들레</b>로 바뀜. 
pfImage.onclick = () => pfImage.src = 'pf2.png'; // 프로필 이미지를 클릭하면 사진이 바뀜.
*/


/* 
const title = document.querySelector("#title");

title.onclick = () => title.style.backgroundColor = "green";
// My Profile을 클릭하면 배경색이 초록색으로 바뀜.
 */


/* 
const title = document.querySelector("#title");

title.onclick = () => title.style.color = "green";
// My Profile을 클릭하면 글자색이 초록색으로 바뀜.
 */


/* 
const name = document.querySelector("#desc p")

name.onclick = () => name.style.color = "red"
// 이름: 도레미를 클릭하면 글자색이 빨간색으로 바뀜. 
*/



/*
 const userName = document.querySelector("#desc p"); 

console.log(userName) // <p class="user deco">이름      :     도레미</p>
console.log(userName.classList) // ['user', 'deco']
 */

/* 
const title = document.querySelector("#title")

title.onclick = () => {
    title.classList.add("deco"); // My Profile을 클릭했을 때  deco클래스 스타일을 추가함.
} 
*/

/* 
const title = document.querySelector("#title");

title.onclick = () => {
    if(!title.classList.contains("deco")) {
        title.classList.add("deco");
    } else {
        title.classList.remove("deco");
    }
} 
*/

/* 
const title = document.querySelector("#title");

title.onclick = () => {
    title.classList.toggle("deco");
} 
*/





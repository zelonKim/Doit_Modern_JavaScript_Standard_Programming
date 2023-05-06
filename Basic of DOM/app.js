/*
console.log(document.querySelector("h1")) // 태그명이 h1인 요소를 가져옴. ->  <h1>My Profile</h1>
console.log(document.querySelector(".user")) // 클래스명이 user인 요소를 가져옴.  ->  <p class="user">이름 : 도레미</p>
console.log(document.querySelector("#profile")) // id가 profile인 요소를 가져옴.  ->  <div id="profile">

console.log(document.querySelector("img")) // 태그명이 img인 요소를 가져옴. ->  <img src="pf.png" alt="도레미">
console.log(document.querySelector("#profile img")) // 아이디명이 profile인 상위요소 중 태그명이 img인 하위요소를 가져옴. ->  <img src="pf.png" alt="도레미">
console.log(document.querySelector("#profile p"))  // 아이디명이 profile인 상위요소 중 태그명이 p인 하위요소를 가져옴.  ->  <p class="user">이름 : 도레미</p>
console.log(document.querySelector("#profile > p")) // 아이디명이 profile인 상위요소 중 태그명이 p인 자식 레벨 요소를 가져옴. -> null
console.log(document.querySelector("#desc img")) // 아이디명이 desc인 상위요소 중 태그명이 img인 하위요소를 가져옴.  -> null
console.log(document.querySelector("#desc p"))  // 아이디명이 desc인 상위요소 중 태그명이 p인 하위요소를 가져옴.  ->  <p class="user">이름 : 도레미</p>
*/

/*
console.log(document.querySelectorAll(".user")) // 클래스명이 user인 요소를 모두 가져옴.  ->  NodeList(3) [p.user, p.user, p.user]
console.log(document.querySelectorAll(".user")[2]) // <p class="user">연락처 : 1234-5678</p>
*/

console.log(document.getElementById("profile")) // 아이디명이 profile인 요소를 가져옴. ->  <div id="profile">
console.log(document.getElementsByClassName("user")) // 클래스명이 user인 요소들을 가져옴.  ->  HTMLCollection(3) [p.user, p.user, p.user]
console.log(document.getElementsByTagName("p")) // 태그명이 p인 요소들을 가져옴.  ->  HTMLCollection(3) [p.user, p.user, p.user]

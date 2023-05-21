/* 
let people = ["kim","lee","park"]
localStorage.setItem("student", JSON.stringify(people))
// 키(key): student
// 값(value): ["kim","lee","park"] 
*/


/* 
let people = ["kim","lee","park","kang"]
localStorage.setItem("student", JSON.stringify(people))
// 키(key): student
// 값(value): ["kim","lee","park","kang"]
*/

/* 
let people = ["kim","lee","park","kang"]
localStorage.setItem("job seeker", JSON.stringify(people))
// 키(key): student  /  job seeker
// 값(value): ["kim","lee","park","kang"]  /  ["kim","lee","park","kang"]
*/

// localStorage.length // 2

/////////////


/* 
localStorage.getItem("student") // ["kim","lee","park","kang"]
localStorage.getItem("parents") // null
localData = JSON.parse(localStorage.getItem("student")) // ['kim', 'lee', 'park', 'kang']
*/

//////////////

// localStorage.key(0) // 'student'
// localStorage.key(1) // 'job seeker'

//////////////


// localStorage.removeItem("student")
// localStorage.removeItem("job seeker")

/////////

// localStorage.clear()

///////////////////////////

/* 
let students = ["kim","lee","park"]
localStorage.setItem("students", JSON.stringify(students));

let localData;
if(localStorage.getItem("students") === null) {
    localData = [];
} else {
    localData = JSON.parse(localStorage.getItem("students"))
}

localData.push("Choi")
localStorage.setItem("students", JSON.stringify(localData))
console.log(localData) // ['kim', 'lee', 'park', 'Choi']
 */

///////////////////


const getLocation = document.getElementById('getLocation');
getLocation.addEventListener('click', function(e) {
    e.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
    
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    let watchId = navigator.geolocation.watchPosition(showPosition,errorPosition,options)

    setTimeout(function() {
        navigator.geolocation.clearWatch(watchId);
    }, 30000);

} else {
    alert('not supply geolocation')
}
})

function showPosition(position) {
    document.querySelector("#result").innerHTML = `
    <b>위도:</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}
    `
};

function errorPosition(err) {
    alert(err.message);
}

///////////////
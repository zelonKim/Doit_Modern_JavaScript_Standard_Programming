/* 
console.log("시작");
add();
console.log("실행 중");
console.log("끝");
// 시작
// 오류 발생 (add is not defined)
   * 소스에서 오류가 발생하면 그 다음에 오는 소스는 아예 실행되지 않음. (프로그램이 중단됨.)
*/


/* 
try {
    console.log("시작");
    add();
    console.log("실행 중"); // 실행되지 않음.
} catch(err) {
    console.log(err);
}
console.log("끝");
// 시작
// ReferenceError: add is not defined (출력)
// 끝  
*/

/* 
try {
    console.log("시작");
    add();
    console.log("실행 중"); 
} catch(err) {
    console.log(err.name); // 에러의 이름을 출력함.
}
console.log("끝");
// 시작
// ReferenceError
// 끝 
*/

/*
 try {
    console.log("시작");
    add();
    console.log("실행 중"); 
} catch(err) {
    console.log(err.message); // 에러의 메시지를 출력함.
}
console.log("끝");
// 시작
// add is not defined
// 끝  
*/

//////////////////////


/*
let json = '{"garde": 3, "age": 25}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw "사용자 이름이 없습니다.";
    }
} catch (err) {
    console.log(err);
}
// 사용자 이름이 없습니다. 
*/


/* 
let json = '{"garde": 3, "age": 25}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw "사용자 이름이 없습니다.";
    }
} catch (err) {
    console.log(err.name);
}
// undefined 
*/

/* 
let json = '{"garde": 3, "age": 25}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw "사용자 이름이 없습니다.";
    }
} catch (err) {
    console.log(err.message);
}
// undefined 
*/


////////////////

/*
let json = '{"grade":3, "age": 25}';

try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new Error("사용자 이름이 없습니다.");
    }
} catch (err) {
    console.log(err);
}
// Error: 사용자 이름이 없습니다. at app.js:73:15 
*/

/* 
let json = '{"grade":3, "age": 25}';

try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new Error("사용자 이름이 없습니다.");
    }
} catch (err) {
    console.log(err.name);
}
// Error 
*/

/* 
let json = '{"grade":3, "age": 25}';

try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new Error("사용자 이름이 없습니다.");
    }
} catch (err) {
    console.log(err.message);
}
// 사용자 이름이 없습니다. 
*/
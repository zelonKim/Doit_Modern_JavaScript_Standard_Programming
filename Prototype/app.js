/* 
const Book = function(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function () {
        this.done === false ? str="읽는 중" : str="다 읽음";
        return str;
    }
}

const book1 = new Book("웹 표준의 정석", 648, false)
console.log(book1) // [[Prototype]]: Object 
*/

/* 
const Book = function(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
}

Book.prototype.finish = function () {
    this.done === false ? str="읽는 중" : str="다 읽음";
    return str;
}

const book1 = new Book("웹 표준의 정석", 648, false);
const book2 = new Book("모던 자바스크립트", 360, true); 

book1.finish() // '읽는 중'
book2.finish() // '다 읽음' 
*/


/* 
function Book(title, price) {
    this.title = title;
    this.price = price;
}
Book.prototype.buy = function() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
}

const book1 = new Book("abcde", 10000);
book1.buy(); // abcde을 10000원에 구매하였습니다. 



function Textbook(title, price, major) {
    Book.call(this, title, price);
    this.major = major;
}
Textbook.prototype.buyTextbook = function() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`)
}

Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("알고리즘", 50000, "컴퓨터 공학");
book2.buyTextbook(); // 컴퓨터 공학 전공서적, 알고리즘을 구매했습니다.
book2.buy(); // 알고리즘을 50000원에 구매하였습니다. (프로토타입을 타고 올라가 Book 객체의 메서드를 사용함.)
*/



class BookC {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    buy() {
        console.log(`${this.title}를 ${this.price}원에 구매하였습니다.`);
    }
}
const book1 = new BookC("자료구조", 15000);
book1.buy(); // 자료구조을 15000원에 구매하였습니다.



class TextBookC extends BookC {
    constructor(title, price, major) {
        super(title, price);
        this.major = major;
    }
    buyTextbook() {
        console.log(`${this.major} 전공서적, ${this.title}를 구매했습니다.`);
    }
}

const book2 = new TextBookC("인공지능의 원리", 30000, "AI");
book2.buyTextbook(); // AI 전공서적, 인공지능의 원리를 구매했습니다.
book2.buy(); // 인공지능의 원리를 30000원에 구매하였습니다.
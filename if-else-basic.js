var menuNum = 2;
var menu;

// if문
if (menuNum > 1) {
  menu = '짬뽕';
}
console.log(menu); // 짬뽕

// if/else문
if (menuNum > 1) {
  menu = '짬뽕';
} else {
  menu = '짜장';
}
console.log(menu); // 짬뽕

// if/else if문
if (menuNum > 1) {
  menu = '짬뽕';
} else if (menuNum < 1) {
  menu = '탕수육';
} else {
  menu = '짜장';
}
console.log(menu); // 짬뽕


// if/else문 -> 삼항 조건 연산자
var menuNum = 2;
var menu = menuNum > 1 ? '짬뽕' : '짜장';
console.log(menu); // 짬뽕

// if/else if -> 삼항 조건 연산자
var menuNum = 2;
var menu = menuNum ? (menuNum > 1 ? '짬뽕' : '탕수육') : '짜장';
console.log(menu); // 짬뽕
const hello = document.querySelector('.hello-statement')
console.log(hello);
const helloStatement =["xin chào","Ngày mới vui vẻ","chào mừng đến trang web của lập","Welcome","Hello !","Ngày mới an lành", "vui vẻ nhé!","Hi!","Chào buổi sáng"];
var a= Math.floor(Math.random(helloStatement.length-2)*10);
if(a <0 || a>= helloStatement.length){
    a= helloStatement.length-1;
} 

hello.insertAdjacentHTML("afterbegin",`<span>${helloStatement[a]}</span>`)
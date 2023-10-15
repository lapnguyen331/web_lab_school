console.log("hehe");
const con = document.querySelector('#container')
console.log(con);
const arrayColor = [`red`,'yellow','pink','gray','black','orange','blue',"White","Red","Lime","Blue","Yellow","Cyan","Aqua","Magenta","Silver","Gray","Maroon","Olive","Green","Purple","Teal","Navy"];
let indexcolor =0;
for (let index = 0; index <= 60; index++) {
    if(indexcolor == arrayColor.length){
        indexcolor = 0;
    }
    var em = `<button class="but" style="height: 40px;width: 50px;margin-left:10px;background-color:${arrayColor[indexcolor]}">${index}</button>`
    if(indexcolor == 4){
        em = `<button class="but" style="height: 40px;width: 50px;margin-left:10px;background-color:${arrayColor[indexcolor]};color:white">${index}</button>`
    }
    console.log(em);
    con.insertAdjacentHTML("afterbegin",em);
    indexcolor+=1;
}
var hehe1 = document.querySelector('body');
var hehe2 = document.getElementsByClassName('but')
console.log(hehe2);
for (let index = 0; index < hehe2.length; index++) {
    hehe2[index].onclick = function(){
        hehe1.style.backgroundColor = hehe2[index].style.backgroundColor;
    };
}
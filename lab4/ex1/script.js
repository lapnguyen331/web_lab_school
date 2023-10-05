console.log("hehe");
const con = document.querySelector('#container')
console.log(con);
const arrayColor = [`red`,'yellow','pink','gray','black','orange','blue',"Black","White","Red","Lime","Blue","Yellow","Cyan","Aqua","Magenta","Silver","Gray","Maroon","Olive","Green","Purple","Teal","Navy"];
for (let index = 0; index < arrayColor.length; index++) {
    let em = `<button class="but" style="height: 40px;width: 50px;margin-left:10px;background-color:${arrayColor[index]}">${arrayColor.length-index}</button>`
    console.log(em);
    con.insertAdjacentHTML("afterbegin",em);
}
var hehe1 = document.querySelector('body');
var hehe2 = document.getElementsByClassName('but')
console.log(hehe2);
for (let index = 0; index < hehe2.length; index++) {
    hehe2[index].onclick = function(){
        hehe1.style.backgroundColor = hehe2[index].style.backgroundColor;
    };
}
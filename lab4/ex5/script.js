const roatecomponent = document.querySelector('.image')
var dege =0
setInterval(()=>{
    dege+=15
    rotateImage(dege);
},2000);


function rotateImage(degree){
    roatecomponent.style.transform = `rotate(${degree}deg)`
    console.log(degree);
}
console.log("heehe");
const solve = document.querySelector('.solve-but');
const debai = document.querySelector('.debai')
const result = document.querySelector('.result')
var a1=1;
var b1=-1;
var c1= 0;
var em;
debai.insertAdjacentText("beforeend",` ${a1}x^2 + ${b1}x + ${c1} =0`)
solve.onclick = function(){
    result.insertAdjacentHTML("beforeend", countresult(a1,b1,c1));
}
function countresult(a,b,c){
    if(a == 0){
        if(b == 0){
            return em ='<span>phương trình vô nghiệm</span>'
        }
        else{
            return em=`<span>phương trình có 1 nghiệm: x=${-c/b}</span>`; 
        }
    }
    let delta = Math.pow(b,2)-(4*a*c);
    console.log(delta);
     if(delta == 0){
        return em=`<span>phương trình có nghiệm kép: x1=x2=${-b/(a*2)}</span>`;
    }
    else if(delta > 0){
        return em=`<span>phương trình có 2 nghiệm: x1=${(-b + Math.sqrt(delta))/(2*a)} ; x2=${(-b - Math.sqrt(delta)/(2*a))} </span>`;
    }
    else if(delta < 0){
        return em ='<span>phương trình vô nghiệm</span>';
    }
    
}
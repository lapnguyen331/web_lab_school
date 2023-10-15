const container =document.querySelector('#container')
let locateArray;


// let maxXLocation =${'#container'}.width();
let maxYLocation =800;
//  console.log(maxXLocation);
//  console.log(maxYLocation);


for (let index = 0; index < 600; index++) {
    // let x= getRandomInt(0,maxXLocation)
    // let y = getRandomInt(0,maxYLocation)
    
    // console.log(x+","+y);
    container.insertAdjacentHTML("afterbegin",`<button class="but-${index}" style="position:relative;top:20px;left:20px/*;margin-top:10px;margin-left:10px;*/;background-color:blue;color: azure;border-top:20px;border-left:20px;font-size: 14px;font-weight: 700;">${index}</button>`)


    
}
function getLocateButton(){
    
   

}
function getRandomInt(min,max) {
    return  Math.floor(Math.random()*(max-min+1)+min);

}


// for (let index = 0; index < 70){
//     let em =getRandomInt()
// }

    

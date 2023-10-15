const email = document.querySelector("#mail"); //have @
const pass = document.querySelector("#pass"); //0-8 kí tự, ko dc bỏ trống
const day = document.querySelector("#day");
const month = document.querySelector("#month"); //if <10 have 0 input . >10
const year = document.querySelector("#year"); //ony 4 char
const cardnum = document.querySelector("#cardnum"); //not empty
const cardCVC = document.querySelector("#cardCVC");
const term = document.querySelector("#termprivacy"); //check tick

//account

//email
 function checkEmail() {
  console.log(email);
  let data = email.value;
  let account = document.querySelector(".email");
  if (!validateEmail(data)) {
  account.style.display = "block";
  }
  else {    
    account.style.display = "none";
  }
};
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//password
function passValid(){
    let data = pass.value;
    let passVal = document.querySelector('.pass')
    
    if(data == ""){
        passVal.style.display="block"
        passVal.insertAdjacentText('afterbegin','*Vui lòng không để trống')
    } 
    else if(data.length < 5 || data.length >8 ){
        passVal.style.display="block"
        passVal.innerHTML=""
        passVal.insertAdjacentText('afterbegin','*Vui lòng nhập mật khẩu từ 6 đến 8 kí tự')
    }
    else{
        passVal.style.display="none"
    }
}
//date
function dateValid(){
    let daydata = day.value;
    let dayval = document.querySelector('.day')
    let monthdata = month.value
    let yeardata = year.value
}
//
function cardNumValid(){
    let cardNumdata = cardnum.value
    let cardVal = document.querySelector('.cardNum')
    
    if (isNaN(cardNumdata)) {
        cardVal.style.display="block"
        cardVal.insertAdjacentText('afterbegin',"*Vui lòng nhập số card")
      
    } else {
        cardVal.style.display= "none"
    }
}
function cardCVCValid(){
    let cardCdata = cardCVC.value
    let cardCVal = document.querySelector('.cardCNum')
    
    if (isNaN(cardCdata)) {
        cardCVal.style.display="block"
        cardCVal.insertAdjacentText('afterbegin',"*Vui lòng nhập số card")
      
    } else {
        cardVal.style.display= "none"
    }
}
function checkTermValid(){ 
    let termVal = document.querySelector('.Termnum')
    if(term.checked){
        termVal.style.display ="none"
    }else{
        termVal.style.display ="block"
    }
}


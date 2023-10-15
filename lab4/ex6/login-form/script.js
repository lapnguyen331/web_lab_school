const username = document.querySelector('.usernameinput')
const password = document.querySelector('.password')
const uservalid =document.querySelector('.uservalid')
const passvalid =document.querySelector('.passvalid')
const sign = document.querySelector('.signin-but')
username.onchange = function(){
    checkValidUsername();
    console.log("user");
}
password.onchange = function(){
    checkValidPassWord();
    console.log("pass");
}
sign.onclick = function(){
    var check =false;
    check=checkValidPassWord();
    check =checkValidUsername();
}
function checkValidUsername(){
    var userdat = username.value;
    if(userdat ==""){
        uservalid.style.display ="block"
        uservalid.innerHTML="*Không được bỏ trống "
        return false;
    }
    else{
        uservalid.style.display="none";
        return true;
    }
}
function checkValidPassWord(){
    var passworddat = password.value;
    if(passworddat == ""){
        passvalid.style.display ="block"
        passvalid.innerHTML="*Không dược bỏ trống"
        return false;

    }
    else if(0 < passworddat.length && passworddat.length < 8){
        passvalid.style.display ="block"
        passvalid.innerHTML ="*Vui lòng nhập đủ 8 kí tự" 
        return false;

    }
    else{
        passvalid.style.display="none"
        return true;

    }
}
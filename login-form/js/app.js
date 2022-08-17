
let passwords = document.getElementById("password");
let passwordStrength = document.getElementsByClassName("box");
let lowCase = document.querySelector(".lower-case");
let uppCase = document.querySelector(".upper-case");
let number = document.querySelector(".number");
let specialChar = document.querySelector(".special-character");
let eightChar = document.querySelector(".eight-character");
let box = document.querySelector(".box");


// --------------------------------First Name---------------------------------------------------//
let fname = document.querySelector("#first-name");
function checkFname(){
   if(fname.value.length <= 3){
     document.querySelector(".alert-fname").setAttribute("style","display:block");
     document.querySelector("#first-name").setAttribute("style","border:2px solid red");
     document.querySelector(".ok-fname").setAttribute("style","display:none");
     document.querySelector(".fname-short-remark").setAttribute("style","display:block;color:red;");
     document.querySelector(".fname-long-remark").setAttribute("style","display:none;color:red;");
   }else if(fname.value.length >= 12){
    document.querySelector(".alert-fname").setAttribute("style","display:block");
     document.querySelector("#first-name").setAttribute("style","border:2px solid red");
     document.querySelector(".ok-fname").setAttribute("style","display:none");
     document.querySelector(".fname-short-remark").setAttribute("style","display:none");
     document.querySelector(".fname-long-remark").setAttribute("style","display:block;color:red;");
     
   }else{
    document.querySelector(".ok-fname").setAttribute("style","display:block");
     document.querySelector("#first-name").setAttribute("style","border:2px solid green");
     document.querySelector(".alert-fname").setAttribute("style","display:none");
     document.querySelector(".fname-short-remark").setAttribute("style","display:none");
     document.querySelector(".fname-long-remark").setAttribute("style","display:none");
     
   }
}

//----------------------------------Last Name---------------------------------------------------//

let lname = document.querySelector("#last-name");
function checkLname(){
   if(lname.value.length <= 3){
     document.querySelector(".alert-lname").setAttribute("style","display:block");
     document.querySelector("#last-name").setAttribute("style","border:2px solid red");
     document.querySelector(".ok-lname").setAttribute("style","display:none");
     document.querySelector(".lname-short-remark").setAttribute("style","display:block;color:red;");
     document.querySelector(".lname-long-remark").setAttribute("style","display:none;color:red;");
   }else if(lname.value.length >= 12){
    document.querySelector(".alert-lname").setAttribute("style","display:block");
     document.querySelector("#last-name").setAttribute("style","border:2px solid red");
     document.querySelector(".ok-lname").setAttribute("style","display:none");
     document.querySelector(".lname-short-remark").setAttribute("style","display:none");
     document.querySelector(".lname-long-remark").setAttribute("style","display:block;color:red;");
   }else{
    document.querySelector(".ok-lname").setAttribute("style","display:block");
     document.querySelector("#last-name").setAttribute("style","border:2px solid green");
     document.querySelector(".alert-lname").setAttribute("style","display:none");
     document.querySelector(".lname-short-remark").setAttribute("style","display:none");
     document.querySelector(".lname-long-remark").setAttribute("style","display:none");
   }
}

//-----------------------------------email------------------------------------------------------//
   let mail = document.querySelector("#email");
function checkEmail(){
    let email = document.querySelector("#email").value;
    if(email.indexOf("@") <= 0){
        document.querySelector(".email-remark").setAttribute("style","display:block;color:red;");
        document.querySelector(".ok-email").setAttribute("style","display:none");
        document.querySelector(".alert-email").setAttribute("style","display:block");
        document.querySelector("#email").setAttribute("style","border:2px solid red");
    }else if(email.charAt(email.length-4) !='.' && email.charAt(email.length-3) !='.'){
        document.querySelector(".email-remark").setAttribute("style","display:block;color:red;");
        document.querySelector(".ok-email").setAttribute("style","display:none");
        document.querySelector(".alert-email").setAttribute("style","display:block");
        document.querySelector("#email").setAttribute("style","border:2px solid red");
    }else{
        document.querySelector(".email-remark").setAttribute("style","display:none");
        document.querySelector(".ok-email").setAttribute("style","display:block");
        document.querySelector(".alert-email").setAttribute("style","display:none");
        document.querySelector("#email").setAttribute("style","border:2px solid green");
    }

    }



//-------------------------------------password-------------------------------------------------//
let reExpWeak = /[a-z]/;
let upperCase = /[A-Z]/;
let reExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,,_,~,-,(,)]/;


function press(){
    let pass = passwords;
    checkStrength(pass);
}

function checkStrength(password){
    
    
    // if(password.value.length <=8 && (password.value.match(reExpWeak) && password.value.match(upperCase)))no=4;
    // if(password.value.length <= 6 && password.value.match(reExpMedium))no=5;
    // if(password.value.length <=2 && password.value.match(regExpStrong))no=6;
    if(password.value.length <=3 && (password.value.match(reExpWeak) || password.value.match(reExpMedium) || password.value.match(regExpStrong)))no=1;
    if(password.value.length >=6 &&(password.value.match(reExpWeak) && password.value.match(reExpMedium) || (password.value.match(reExpMedium) && password.value.match(regExpStrong)) || (password.value.match(regExpStrong) && password.value.match(reExpWeak))))no=2;
    if(password.value.length > 6 && password.value.match(reExpWeak) && password.value.match(reExpMedium) && password.value.match(regExpStrong))no=3;
    // if(password.value.match(reExpWeak))no=4;
    // if(password.value.match(upperCase))no=5;
    // if(password.value.match(reExpMedium))no=6;
    // if(password.value.match(regExpStrong))no=7;
    if(password.value.length >= 8)no=8;
    if(password.value == "")no=9;

    if(no == 1){
        box.classList.add("box-failed");
        box.classList.remove("box-success");
        box.classList.remove("box-medium");
        document.querySelector(".alert-pwd").setAttribute("style","display:block");
        document.querySelector(".ok-pwd").setAttribute("style","display:none");
        document.querySelector(".pwd-weak-remark").setAttribute("style","display:block;color:red;");
        document.querySelector(".pwd-medium-remark").setAttribute("style","display:none;");
        document.querySelector(".pwd-strong-remark").setAttribute("style","display:none;");
        document.querySelector("#password").setAttribute("style","border:2px solid red");

// ----------------------
        // lowerUpperCase.classList.add("li-success");
        // number.classList.remove("li-success");
        // lowerUpperCase.classList.remove("li-success");
        // specialChar.classList.remove("li-success");
        // eightChar.classList.remove("li-success");

// -------------------------------------
        
        

    }else if(no == 2){
        box.classList.remove("box-failed");
        box.classList.remove("box-success");
        box.classList.add("box-medium");
        document.querySelector(".alert-pwd").setAttribute("style","display:block");
        document.querySelector(".pwd-medium-remark").setAttribute("style","display:block;color:yellow;");
        document.querySelector(".pwd-weak-remark").setAttribute("style","display:none");
        document.querySelector(".ok-pwd").setAttribute("style","display:none");
        document.querySelector("#password").setAttribute("style","border:2px solid yellow");


        // -----------------------
        // number.classList.add("li-success");
        // lowerUpperCase.classList.add("li-success");
        // specialChar.classList.remove("li-success");
        // eightChar.classList.remove("li-success");

        // ---------------
        

    }else if(no == 3){
        // if(box.classList.contains("box-failed")){
            box.classList.remove("box-failed");
            box.classList.add("box-success");
            box.classList.remove("box-medium");   
        // }
        
        document.querySelector(".pwd-strong-remark").setAttribute("style","display:block;color:green");
        document.querySelector(".pwd-weak-remark").setAttribute("style","display:none");
        document.querySelector(".pwd-medium-remark").setAttribute("style","display:none");
        document.querySelector(".alert-pwd").setAttribute("style","display:none");
        document.querySelector(".ok-pwd").setAttribute("style","display:block");
        document.querySelector("#password").setAttribute("style","border:2px solid green");

        // ----------------
        // number.classList.add("li-success");
        // lowerUpperCase.classList.add("li-success");
        // specialChar.classList.add("li-success");
        // eightChar.classList.add("li-success");

        //----------------
        



    // }else if(no == 4){
    //  lowCase.classList.add("li-success");
    // }else if(no == 5){
    // uppCase.classList.add("li-success");
    // }else if(no == 6){
    //     number.classList.add("li-success");
    // }else if(no == 7){
    //    specialChar.classList.add("li-success");
    }else if(no == 8){
        // eightChar.classList.add("li-success");
    }else if(no == 9){
        box.classList.add("box-failed");
        box.classList.remove("box-success");
        box.classList.remove("box-medium");
        lowCase.classList.remove("li-success");
        uppCase.classList.remove("li-success");
        number.classList.remove("li-success");
        // lowerUpperCase.classList.remove("li-success");
        specialChar.classList.remove("li-success");
        eightChar.classList.remove("li-success");
        document.querySelector(".alert-pwd").setAttribute("style","display:block");
        document.querySelector(".ok-pwd").setAttribute("style","display:none");
        document.querySelector("#password").setAttribute("style","border:2px solid red");  
    }
    
}


function generatePwd(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*(-_){}[]";
    
    let pawdlength = 10;
    let pwd = "";

    for(let i = 0; i < pawdlength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);

        pwd += chars.substring(randomNumber,randomNumber + 1);
        document.querySelector("#password").value = pwd;
        document.querySelector(".ok-pwd").setAttribute("style","display:block");
        document.querySelector(".alert-pwd").setAttribute("style","display:none");
        document.querySelector("#password").setAttribute("style","border:1px solid green");
        box.classList.remove("box-failed");
        box.classList.add("box-success");
        box.classList.remove("box-medium");

    }
}

function sbmt(){
    alert("Your form has successfully submitted!")
}

    //    box.classList.add("box-success");
    //    box.classList.remove("box-failed");
    //    lowerUpperCase.classList.add("li-success");
//         // lowerUpperCase.setAttribute("class","li-success");
//         strength += 1;
//     }else if((password.toLowerCase() === password)){
//         box.classList.add("box-failed") ;
//         box.classList.remove("box-success"); // lowerUpperCase.classListAdd("li-ops");
//     }

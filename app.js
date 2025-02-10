"use strict"
const $ = document;

const inputElms = $.querySelectorAll('input');
const boxError = $.querySelector('.error');
const inputPassword = $.querySelector('.password');
const wrapperTextError = $.querySelector('.text-Error');

let pattern = null ;
let textError = null ; 

const appointmentReg = (determiner)=>{
    if (determiner.dataset.name === "Email") {
        pattern = /@gmail.com/g;
        textError='incorrect Email'
    } else if (determiner.dataset.name === "Password") {
        pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[%@#$])[a-zA-Z\d%@#$]+$/;
        textError='Use uppercase and lowercase words and numbers and symbols @ $ % #';
    } else if (determiner.dataset.name === "Repeat") {
        textError='The password does not match';        
        if (determiner.value === inputPassword.value) {
            pattern = /.*/; 
        } else {
            pattern = /^$/; 
        }
    }
}

const check = (event)=>{
    const target = event.target ;
    appointmentReg(target) ;
    if(!pattern.test(target.value)){
        boxError.classList.remove("disabled");
        target.parentElement.style.border = "0.5px solid #7b3333";
        wrapperTextError.innerHTML=textError
        target.focus()
    }else{
        boxError.classList.add("disabled");
        target.parentElement.style.border = "none";
    }
}

inputElms.forEach(inputElm=>{
    inputElm.addEventListener("blur",check)
})
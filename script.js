const input = document.querySelector("#input");
const calculation = document.querySelector("#calculation");

const digits = document.querySelectorAll(".digit");
let upperDisplay = "";
let lowerDisplay = ""; 

digits.forEach( 
    digit =>  digit.addEventListener("click", function(){
        lowerDisplay += digit.textContent;
        input.innerHTML = lowerDisplay
        console.log(lowerDisplay);
    }));


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b === 0){
        return "undefined";
    }
    return a / b;
}

function operate(operator, a, b){
    switch(operator){
        case "add": add(a,b); break;
        case "subtract": subtract(a,b); break;
        case "multiply": multiply(a,b); break;
        case "divide": divide(a,b); break;
    }
}


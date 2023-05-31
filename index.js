let displayVal = '0';
let num1 = null; 
let num2 = null; 
let operator = null;

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

function updateDisplay(){
    display.innerText = displayVal;
}

updateDisplay();

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        if(button.classList.contains('allClear')){
            clearDisplay(true);
        }
        if(button.classList.contains('clear')){
            clearDisplay(false);
        }
        if(button.classList.contains('digit')){
            inputDigit(button.value);
        }
        if(button.classList.contains('operator')){
           inputOperator(button.value);
        }
        if(button.classList.contains('equals')){
            inputEquals();
        }
        if(button.classList.contains('decimal')){
            inputDecimal();
        }
        if(button.classList.contains('sign')){
            inputSign(displayVal);   
        }

        updateDisplay()
    })
})

function clearDisplay(allClear){
    if(allClear){
        displayVal = '0';
        num1 = null; 
        num2 = null;
        operator = null;
        return; 
    } else{
        return;
    }
}   

function inputDigit(digit){
    if(displayVal == 0){
        displayVal = digit;
    }else{
        displayVal += digit;
    }
}

function inputOperator(operatorVal){
    if(operator === null){
        operator = operatorVal;
        num1 = displayVal;
    }else if(operator !== null){
        //evaluate num1 and current number on display with the current operator and then assign operator to the new operator
        num1 = operate(num1, displayVal, operator);
    }
    console.log(displayVal, operator)
}

function inputEquals(){
    displayVal = operate(Number(num1), Number(displayVal), operator)
    console.log(displayVal, 'equals')
}

function inputDecimal(){
    console.log('Not implemented yet')
}

function inputSign(value){
    console.log('Not implemented yet')
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return 'error'
    }
    return a/b;
}

function operate(a, b, operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

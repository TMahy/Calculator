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
        operator = null;
        return; 
    } else{
        displayVal = 0;
        return;
    }
}   

function inputDigit(digit){
    if(operator === null | operator === 'equals'){
        if(displayVal == 0 | displayVal == num1){
            displayVal = digit;
        }else{
            displayVal +=digit
        }
    }
    else {
        if(displayVal == 0 | displayVal == num1){
            displayVal = digit
        }else{
            displayVal += digit
        }   
    }
    console.log(`displayVal: ${displayVal}, num1: ${num1}, operator: ${operator}, num2: ${num2}`)
}

function inputOperator(operatorVal){
    if(operator === null){
        num1 = displayVal;
        operator = operatorVal;
    }else if(operator !== null){
        if(operator != 'equals'){
            if(displayVal == num1){
                operator = operatorVal;
                displayVal = num1;
            }else{
                num1 = operate(num1, displayVal, operator);
                operator = operatorVal;
                displayVal = num1;
            }
        } else if(operator == 'equals'){
            operator = operatorVal;
            num1 = displayVal;
        }
    }
    console.log(`displayVal: ${displayVal}, num1: ${num1}, operator: ${operator}, num2: ${num2}`)
}

function inputEquals(){
    if(operator != 'equals'){
        if(operator === null | num1 === null){
            operator = 'equals';
            num1 = displayVal;
        }else{
            displayVal = operate(num1, displayVal, operator)
            operator = 'equals';
            num1 = displayVal;
        }
    }
    console.log(`displayVal: ${displayVal}, num1: ${num1}, operator: ${operator}, num2: ${num2}`)
}

function inputDecimal(){
    console.log('Not implemented yet')
}

function inputSign(value){
    displayVal = -1*Number(displayVal);
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
            return add(Number(a),Number(b));
        case '-':
            return subtract(Number(a),Number(b));
        case '*':
            return multiply(Number(a),Number(b));
        case '/':
            return divide(Number(a),Number(b));
    }
}

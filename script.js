
let number1 = NaN;
let number2 = NaN;
let operator = '';
let currentInput = '';

const inputText = document.querySelector('.input-text');

function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    if (b === 0){
        return "Cannot Divide By Zero";
    }
    else{
        return a / b;
    }
}

function operate(num1, op, num2) {
    if (op === '+'){
        return addition(num1, num2);
    }
    else if (op === '-'){
        return subtraction(num1, num2);
    }
    else if (op === '*'){
        return multiplication(num1, num2);
    }
    else if (op === '/'){
        return division(num1, num2);
    }
}

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button) => {
    button.onclick = function(e){
        currentInput += e.target.innerHTML;
        inputText.innerHTML = currentInput;
    }
});

document.querySelector('#clear').onclick = function(){
    currentInput = ''
    inputText.innerHTML = currentInput;
};

document.querySelector('#delete').onclick = function(){
    currentInput = currentInput.slice(0, -1);
    inputText.innerHTML = currentInput;
};

//console.log(operate(number1, operator, number2));
// console.log(subtraction(7, 2));
// console.log(multiplication(3, 5));
// console.log(division(101, 23));
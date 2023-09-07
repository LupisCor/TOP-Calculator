
let number1 = NaN;
let number2 = NaN;
let operator = '';
let currentInput = '';
let prevSolution = '';

const inputText = document.querySelector('.input-text');
const equationText = document.querySelector('.equation-text');

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
// Create nodelist of all buttons with 'number-button' class
const numberButtons = document.querySelectorAll('.number-button');
// For each button in above node list, do something onclick
numberButtons.forEach((button) => {
    button.onclick = function(e){
        currentInput += e.target.innerHTML;
        inputText.innerHTML = currentInput;
    }
});

// Create nodelist of all buttons with 'operator-button' class
const operatorButtons = document.querySelectorAll('.operator-buttons');
// For each button in above node list, do something onclick
operatorButtons.forEach((button) => {
    button.onclick = function(e){
        if (prevSolution !== '' && currentInput === ''){
            currentInput += prevSolution;
        }
        if(operator === ''){
            operator = e.target.innerHTML;
            currentInput += ` ${e.target.innerHTML} `;
            inputText.innerHTML = currentInput;
        }
    }
});

document.querySelector('#clear').onclick = function(){
    if (currentInput === ''){
        clearEquation();
    }
    clearInput();
};

document.querySelector('#delete').onclick = function(){
    if (currentInput.charAt(currentInput.length-1) === ' '){
        currentInput = currentInput.slice(0, -3);
        operator = '';
    }
    else{
        currentInput = currentInput.slice(0, -1);
    }
    inputText.innerHTML = currentInput;
};

document.querySelector('#period').onclick = function(e){
    if (currentInput === ''){
        currentInput += "0.";
        inputText.innerHTML = currentInput;
    }
    // Allow period to be added if there is no period in currentInput, or if the last occuranc of a period is before the operator
    if (!currentInput.includes(".") || (currentInput.lastIndexOf(' ') > currentInput.lastIndexOf('.'))){
        currentInput += e.target.innerHTML;
        inputText.innerHTML = currentInput;
    }
}

// When equals is clicked, split currentInput at the spaces and set the number variables accordingly
document.querySelector('#equals').onclick = function(){
    const equation = currentInput.split(' ');
    number1 = Number(equation[0]);
    number2 = Number(equation[2]);
    prevSolution = operate(number1, operator, number2);
    equationText.innerHTML = prevSolution;
    clearInput();
}

function clearInput(){
    operator = '';
    currentInput = '';
    inputText.innerHTML = currentInput;
}
function clearEquation(){
    prevSolution = '';
    equationText.innerHTML = prevSolution;
    
}
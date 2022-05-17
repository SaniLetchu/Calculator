
let screenNumber = "";
let operatorClicked = 0;
let operator = null;
let memoryNumber = "0";

const screenText = document.querySelector('.screentext');


function numberPress(number) {
    if(screenNumber.length < 6) {
        if(!(number == 0 && screenNumber.length == 0)) {
            if(operatorClicked == 1) {
                memoryNumber = screenNumber;
                screenNumber = "";
                operatorClicked = 0;
            }
            screenNumber += number;
            screenText.textContent = screenNumber;
        }
    }
}

function operatorSelector(operatorSelection) {
    operatorClicked = 1;
    operator = operatorSelection;
}

function calculate() {
    let answer = operate(operator, parseInt(memoryNumber), parseInt(screenNumber));
    operator = null;
    screenNumber = answer.toString();
    screenText.textContent = screenNumber;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(mathOperator, a, b) {
    return mathOperator(a, b);
}
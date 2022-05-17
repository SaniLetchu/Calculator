
let screenNumber = "";
let operatorClicked = 0;
let operator = null;
let memoryNumber = "";

const screenText = document.querySelector('.screentext');


function numberPress(number) {
    if(screenNumber.length < 6) {
        if(!(number == 0 && screenNumber.length == 0)) {
            if(operatorClicked == 1) {
                memoryNumber = screenNumber;
                screenNumber = "";
                operatorClicked = 0;
            }
            if(number === ".") {
                if(screenNumber.length == 0) {
                    screenNumber = "0.";
                }
                else if (!screenNumber.includes('.')) {
                    screenNumber += number;
                }
            }
            else {
                screenNumber += number;
            }
            screenText.textContent = screenNumber;
        }
    }
}

function operatorSelector(operatorSelection) {
    operatorClicked = 1;
    operator = operatorSelection;
}

function calculate() {
    if(memoryNumber != "" &&  operator != null) {
        let answer = operate(operator, parseFloat(memoryNumber), parseFloat(screenNumber));
        operator = null;
        screenNumber = answer.toString();
        screenText.textContent = screenNumber;
    }  
}

function clearR() {
    screenNumber = "";
    operatorClicked = 0;
    operator = null;
    memoryNumber = "";
    screenText.textContent = "0";
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
    if(b != 0) {
        return a / b;
    }
    else {
        return 'NaN';
    }
}

function operate(mathOperator, a, b) {
    return mathOperator(a, b);
}
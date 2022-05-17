
let screenNumber = "";
let operatorActive = false;
let operator = null;
let memoryNumber = null;
let justCalculated = false;

const screenText = document.querySelector('.screentext');

function numberPress(number) {
    if(justCalculated && operatorActive == false) {
        clearR();
    }
    if(operatorActive == true) {
        memoryNumber = screenNumber;
        screenNumber = "";
        operatorActive = false;
    }
    if(screenNumber.length < 6) {
        if(!(number == 0 && screenNumber.length == 0)) {
            if(operatorActive == true) {
                memoryNumber = screenNumber;
                screenNumber = "";
                operatorActive = false;
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
                if(screenNumber.includes('.')) {
                    if(screenNumber.split('.')[1].length == 1) {

                    }
                    else {
                        screenNumber += number;
                    }
                }
                else {
                    screenNumber += number;
                }
            }
            screenText.textContent = screenNumber;
        }
    }
}

function calculate() {
    if(memoryNumber != null &&  operator != null) {
        let answer = operate(operator, parseFloat(memoryNumber), parseFloat(screenNumber));
        if(!(answer % 1 === 0)) {
            answer = answer.toFixed(1);
        }
        memoryNumber = answer;
        operator = null;
        if(answer.toString().length < 7) {
            screenNumber = answer.toString();
            screenText.textContent = screenNumber;
        }
        else {
            clearR()
            screenText.textContent = "!!!!!!"
        }
        justCalculated = true;
    }  
}

function operatorSelector(operatorSelection) {
    justCalculated = false;
    if(screenNumber == "") {
        screenNumber = "0";
    }
    if(memoryNumber != null) {
        calculate();
    }
    operatorActive = true;
    operator = operatorSelection;
}

function clearR() {
    screenNumber = "";
    operatorActive= false;
    operator = null;
    memoryNumber = null;
    justCalculated = false;
    screenText.textContent = "0";
}

function operate(mathOperator, a, b) {
    return mathOperator(a, b);
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


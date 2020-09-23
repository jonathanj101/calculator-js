document.addEventListener('DOMContentLoaded', () => {
    display()
})

const result = document.querySelector("#result")
let prevResult = document.querySelector("#top-result")

let number;
let operator;

function display() {
    const clear = document.getElementById("clear")
    const backspaceBtn = document.getElementById('backspace')
    const numberBtn = document.querySelectorAll("#number")
    numberBtn.forEach(btns => {
        btns.addEventListener('click', btn => {
            number = btn.target.value
            if (number.includes('.') && result.value.includes('.')) return;
            result.value += number
        })
    })
    clear.addEventListener('click', () => {
        result.value = ''
        prevResult.value = ''
    })
    backspaceBtn.addEventListener('click', () => {
        result.value = result.value.substr(0, result.value.length - 1)
        if (result.value === '') {
            result.value = ''
            prevResult.value = prevResult.value.substr(0, prevResult.value.length - 1)
            if (prevResult.value === '') {
                prevResult.value = ''
            }
        }
    })
    calculate()
}

let firstNum;
let secondNum;

function calculate() {
    const operators = document.querySelectorAll("#operator")
    operators.forEach(operation => {
        operation.addEventListener('click', oper => {
            operator = oper.target.value
            switch (operator) {
                case '+':
                    if (prevResult.value !== "") {
                        firstNum = prevResult.value
                        secondNum = result.value
                        prevResult.value = `${firstNum} + ${parseFloat(result.value)}`
                        if (prevResult.value.includes('NaN')) {
                            prevResult.value = `${firstNum} ${operator}`
                        }
                    } else {
                        prevResult.value += `${parseFloat(result.value)} + `
                        if (prevResult.value.includes('NaN')) {
                            prevResult.value = ''
                        }
                        result.value = ''
                    }
                    break;
                case '-':
                    if (prevResult.value !== "") {
                        firstNum = prevResult.value
                        secondNum = result.value
                        prevResult.value = `${firstNum} - ${parseFloat(result.value)}`
                        if (prevResult.value.includes('NaN')) {
                            prevResult.value = `${firstNum} ${operator}`
                        }
                    } else {
                        prevResult.value += `${parseFloat(result.value)} - `
                        if (prevResult.value.includes('NaN')) {
                            prevResult.value = ''
                        }
                        result.value = ''
                    }
                    break;
                case '*':
                    if (prevResult.value !== "") {
                        firstNum = prevResult.value
                        secondNum = result.value
                        prevResult.value = ` ${firstNum} * ${parseFloat(result.value)}`
                        if (prevResult.value.includes('NaN')) {
                            prevResult.value = `${firstNum} ${operator}`
                        }
                    } else {
                        prevResult.value += `${parseFloat(result.value)} * `
                        if (prevResult.value.includes("NaN")) {
                            prevResult.value = ''
                        }
                        result.value = ''
                    }
                    break;
                case "/":
                    if (prevResult.value !== "") {
                        firstNum = prevResult.value
                        secondNum = result.value
                        prevResult.value = `${firstNum} / ${parseFloat(result.value)}`
                        if (prevResult.value.includes('NaN')) {
                            prevResult.value = `${firstNum} ${operator}`
                        }
                    } else {
                        prevResult.value += `${parseFloat(result.value)} / `
                        if (prevResult.value.includes("NaN")) {
                            prevResult.value = ''
                        }
                        result.value = ''
                    }
                    break;
            }
        })
    })
}
const equalOperator = document.getElementById("equal-operator")
equalOperator.addEventListener('click', () => {
    if (result.value !== '') {
        firstNum = prevResult.value.slice('')
        secondNum = result.value.slice('')
    }
    if (operator === '+') {
        addition(firstNum, secondNum)
    }
    if (operator === '-') {
        substract(firstNum, secondNum)
    }
    if (operator === '/') {
        devide(firstNum, secondNum)
    }
    if (operator === '*') {
        multiply(firstNum, secondNum)
    }
})

function addition(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    let total = num + num2
    prevResult.value = total
    result.value = ''
    if (!prevResult.value) {
        prevResult.value = total + num2
        result.value = ''
    } else {
        prevResult.value = num + num2
    }
}
function multiply(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    let total = num * num2
    prevResult.value = total
    result.value = ''
    if (!prevResult.value) {
        prevResult.value = total * num2
        result.value = ''
    } else {
        prevResult.value = num * num2
    }
}
function devide(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    let total = (num / num2)
    prevResult.value = total
    result.value = ''
    if (!prevResult.value) {
        prevResult.value = total / num2
        result.value = ''

    } else {
        prevResult.value = num / num2
    }
}
function substract(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    let total = num - num2
    prevResult.value = total
    result.value = ''
    if (!prevResult.value) {
        prevResult.value = total - num2
        result.value = ''
    } else {
        prevResult.value = num - num2
    }
}
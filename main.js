document.addEventListener('DOMContentLoaded', () => {
    display()
})

const result = document.querySelector("#result")
const prevResult = document.querySelector("#top-result")
const operators = document.querySelectorAll("#operator")
const insertBtns = document.querySelectorAll("#num")
const divBtns = document.querySelectorAll('div.btns')


let number;
let number2
let operator;

function display() {
    insertBtns.forEach(btns => {
        btns.addEventListener('click', btn => {

            number = btn.target.value

            if (number.includes('.') && result.value.includes('.')) return;
            result.value += number
        })
    })
    calculate()
}


function calculate() {
    operators.forEach(operation => {
        operation.addEventListener('click', oper => {
            operator = oper.target.value
            switch (operator) {
                case "C":
                    clear(result)
                    break;

                case '<':
                    backspace(result)
                    break;

                case '+':
                    if (operator.includes("+") && result.value.includes("+")) return;
                    result.value += operator

                    break;

                case '-':
                    if (operator.includes("-") && result.value.includes("-")) return;
                    result.value += operator

                case '*':
                    if (operator.includes("*") && result.value.includes("*")) return;
                    result.value += operator
                    break;

                case "/":
                    if (operator.includes("/") && result.value.includes("/")) return;
                    result.value += operator
                    break;

                default:
                    break;
            }
        })
    })
}

function clear(str) {
    str.value = "0"
}

function backspace(str) {
    str.value = str.value.substr(0, str.value.length - 1)
    if (str.value === '') {
        result.value = 0
    }
}


function addition(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    let total = num + num2
    console.log(num, num2, total)
    console.log(typeof (num), typeof (num2), typeof (total))
    return total
}

function multiply(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    return total = num * num2
}

function devide(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    return total
}

function substract(num, num2) {
    num = parseFloat(num)
    num2 = parseFloat(num2)
    return total = num - num2
}
document.addEventListener('DOMContentLoaded', () => {
    display()
})

const result = document.querySelector("#result")
let prevResult = document.querySelector("#top-result")
const operators = document.querySelectorAll("#operator")
const insertBtns = document.querySelectorAll("#num")
const divBtns = document.querySelectorAll('div.btns')

let number
let firstValue;
let secondValue;
let operator;

function display() {
    insertBtns.forEach(btns => {
        btns.addEventListener('click', btn => {

            number = btn.target.value
            firstValue = number
            console.log(firstValue, secondValue)
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
                    // result.value += operator
                    // secondValue += result.value
                    // console.log(`${secondValue}, ${result.value}`)
                    if (result.value.includes("+")) return;
                    // debugger;
                    prevResult.value = result.value
                    result.value = ''
                    result.value = '+'

                    console.log(number)

                    // debugger;
                    // result.value += operator
                    secondValue = result.value
                    // prevResult.value = result.value
                    // debugger;
                    console.log(result.value, firstValue, secondValue)

                    addition(firstValue, secondValue)
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
console.log(firstValue, secondValue)

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
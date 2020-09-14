document.addEventListener('DOMContentLoaded', () => {
    display()
})

const isDecimal = false
const result = document.querySelector("#result")
const prevResult = document.querySelector("#top-result")
const operators = document.querySelectorAll("#operator")
const insertBtns = document.querySelectorAll("#num")


function display() {
    for (i = 0; i < insertBtns.length; i++) {
        insertBtns[i].addEventListener('click', (e) => {
            let parsed = parseInt(result.value + e.target.value)
            result.value = parsed
            if (e.target.value === '.') {
                result.value = parsed + e.target.value
            }
        })
    }
    for (i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', (e) => {
            if (e.target.value !== "C" && e.target.value !== "=" && e.target.value !== "<") {
                result.value = e.target.value
            } else {
                result.value != e.target.value
                // prevResult.value = result.value
            }

        })
    }


}

// function 

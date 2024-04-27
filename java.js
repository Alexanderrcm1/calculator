let currentValue = "";
let previousValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded", function() {
let calculator = document.querySelector(".calculator");
let screen = document.querySelector("#screen");
let screenValues = document.querySelector("#screenValues");
let previousScreen = document.querySelector("#previousScreen");
let currentScreen = document.querySelector("#currentScreen");

let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let decimal = document.querySelector("#decimal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

numbers.forEach((number) => number.addEventListener("click", function(e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}));

operators.forEach((op) => op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
}));

clear.addEventListener("click", function() {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = previousValue;
    currentScreen.textContent = currentValue;
});

equal.addEventListener("click", function() {
    if (previousValue != "" && currentValue != "") {
        calculate()
        previousScreen.textContent = "";
        if (previousValue.length <= 5) {
            currentScreen.textContent = previousValue;
        } else {
            currentScreen.textContent = previousValue.slice(0,5) + "...";
        }
        if (previousValue === "Infinity") {
            currentScreen.textContent = "0";
        }
        if (previousValue == "NaN" || currentValue == "NaN") {
            currentValue = "0";
            previousValue = "0";
            currentScreen.textContent = "";
        }
    }
})

decimal.addEventListener("click", function() {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }

})


});
function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    };
};

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "X") {
        previousValue *= currentValue;
    }
    else if (operator === "+") {
        previousValue += currentValue;
    }
    else if (operator === "-") {
        previousValue -= currentValue;
    }
    else {
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

    return previousValue;
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
} 

function addDecimal() {

}






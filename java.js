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

operators.forEach((operator) => operator.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue;
    currentScreen.textContent = currentValue;
}));


});
function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    };
};

function handleOperator(op) {
    previousValue = currentValue;
    currentValue = op;
}






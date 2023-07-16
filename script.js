let mainString = "0";
let firstOperand = "";
let secondOperand = "";
let operator = "";

const numButtons = [...document.querySelectorAll(`[data-numbers]`)];
const operatorButtons = [...document.querySelectorAll(`[data-operators]`)];
const primaryText = document.querySelector("h2");
const secondaryText = document.querySelector("h3");
const clearOneButton = document.querySelector(".clearOneButton");
const clearAllButton = document.querySelector(".clearAllButton");
const equalToButton = document.querySelector(".equalToButton");

numButtons.forEach(appendToMainString);
operatorButtons.forEach(updateOperator);
clearOneButton.addEventListener("click", clearOne);
clearAllButton.addEventListener("click", clearAll);
equalToButton.addEventListener("click", updateSecondOperand);

function appendToMainString(button) {
  button.addEventListener("click", (event) => {
    clickedButton = event.target;
    /*The below two lines of code exists so 
    the primaryText will have a placeholder "0" until a number is entered
    and there extra zeroes infront a string is trimmed.
    also stops user from entering multiple zeroes as input*/
    if (mainString !== "ERROR") {
      mainString = mainString + clickedButton.innerHTML;
      mainString = mainString.replace(/^0+/, "");
      mainString = mainString.toString();
      updatePrimaryText(mainString);
    }
  });
}

function updateOperator(button) {
  button.addEventListener("click", (event) => {
    clickedButton = event.target;
    operator = clickedButton.innerHTML;

    if (firstOperand !== "" && operator !== "" && secondOperand !== "") {
      operate(firstOperand, operator, secondOperand);
      firstOperand = mainString;
      operator = "";
      secondOperand = "";
    } else if (firstOperand !== "" && operator !== "") {
      secondOperand = mainString;
      operate(firstOperand, operator, secondOperand);
      firstOperand = mainString;
      operator = "";
      secondOperand = "";
    } else {
      firstOperand = mainString;
    }

    updateSecondaryText(firstOperand, operator);
    resetMainString();
    updatePrimaryText(mainString);
  });
}

function clearOne() {
  mainString = mainString.slice(0, -1);
  updatePrimaryText(mainString);
}

function clearAll() {
  operator = "";
  secondOperand = "";
  firstOperand = "";
  resetMainString();
  updateSecondaryText(firstOperand, operator);
  updatePrimaryText(mainString);
  console.table(firstOperand, secondOperand, operator, mainString);
}

function operate(firstOperand, operator, secondOperand) {
  let answer = "";
  if (
    firstOperand !== "" &&
    secondOperand !== "" &&
    operator !== "" &&
    secondOperand !== "0"
  ) {
    switch (operator) {
      case "+":
        answer = +firstOperand + +secondOperand;
        break;
      case "-":
        answer = +firstOperand - +secondOperand;
        break;
      case "/":
        answer = +firstOperand / +secondOperand;
        break;
      case "%":
        answer = +firstOperand % +secondOperand;
        break;
      case "*":
        answer = +firstOperand * +secondOperand;
        break;
    }
    mainString = answer;
    firstOperand = answer;
    secondOperand = "";
    operator = "";
    updatePrimaryText(mainString);
    updateSecondaryText(firstOperand, operator);
  } else answer = "ERROR";

  if (answer === Infinity || answer === NaN) {
    answer = "ERROR";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    updatePrimaryText(mainString);
  }
  mainString = answer;
  firstOperand = "";
  secondOperand = "";
  operator = "";
  updatePrimaryText(mainString);
  updateSecondaryText(firstOperand, operator);
}

function updateSecondOperand() {
  if (mainString !== "ERROR") {
    secondOperand = mainString;
    operate(firstOperand, operator, secondOperand);
  }
}

let updateSecondaryText = (firstOperand, operator) =>(secondaryText.textContent = firstOperand + operator);
let updatePrimaryText = (str) => (primaryText.textContent = str);
let resetMainString = () => (mainString = "0");
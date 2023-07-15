let mainString = "0";
let firstOperand = "";
let secondOperand = "";
let operator = "";

const numButtons = [...document.querySelectorAll(`[data-numbers]`)];
const operatorButtons = [...document.querySelectorAll(`[data-operators]`)];
const primaryText = document.querySelector('h2');
const secondaryText = document.querySelector('h3');

numButtons.forEach(appendToMainString);

operatorButtons.forEach(updateOperator);

function appendToMainString(button){
    button.addEventListener('click', (event)=>{
    clickedButton = event.target;
    /*The below two lines of code exists so 
    the primaryText will have a placeholder "0" until a number is entered
    and there extra zeroes infront a string is trimmed.
    also stops user from entering multiple zeroes as input*/
    numberedMainString = Number(mainString + clickedButton.innerHTML);
    mainString = numberedMainString.toString();
    console.log(mainString);
    updatePrimaryText(mainString);})
};


function updateOperator(button){
    button.addEventListener('click', (event)=>{
        clickedButton = event.target;
        operator = clickedButton.innerHTML;
        firstOperand = mainString;
        updateSecondaryText(firstOperand, operator);
        console.log(operator);})
};
    
let updateSecondaryText = (firstOperand, operator) => secondaryText.textContent = firstOperand + operator;
let updatePrimaryText = (str) => primaryText.textContent = str; 
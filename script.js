let operator = "";
let firstOperand;
let secondOperand;

let str = "";

const currentCalculation = document.querySelector('h2');
const firstOperandDisplay = document.querySelector('h3');


currentCalculation.textContent = "0";
firstOperandDisplay.textContent = "";

const numButtons = [...document.querySelectorAll(`[data-numbers]`)];
const operatorButtons = [...document.querySelectorAll(`[data-operators]`)];

numButtons.forEach(appendToString);
// operatorButtons.forEach(appendToString);

function appendToString(button){
    button.addEventListener('click', (event)=>{
        const clickedButton = event.target;
        str = str + clickedButton.innerText;
        console.log(str);
        updateCurrentCalculation();
    })
};

let updateCurrentCalculation = () => currentCalculation.textContent = str;

//clear display

const clearOneButton = document.getElementsByClassName('clearOneButton')[0];
clearOneButton.addEventListener('click', clearOne);

function clearOne(){
    str = str.slice(0, -1);
    console.log(str);
    updateCurrentCalculation();
};

const clearAllButton = document.getElementsByClassName('clearAllButton')[0];
clearAllButton.addEventListener('click', clearAll);


function clearAll(){
    resetString();
    firstOperand = "";
    operator = "";
    displayFirstOperandOperator();
    updateCurrentCalculation();
};

function resetString(){currentCalculation.textContent = ""};

function displayFirstOperandOperator(){
    firstOperandDisplay.textContent = firstOperand + operator};

operatorButtons.forEach(updateFirstOperandAndOperator);

function updateFirstOperandAndOperator(button){
    button.addEventListener('click', (event)=>{
        clickedButton = event.target;
        operator = clickedButton.innerHTML;
        if (str === ""){currentCalculation.textContent = "Error"}
        else {firstOperand = str};
        displayFirstOperandOperator();
        resetString();
        console.log(str);
        console.log(firstOperand);
        console.log(operator);
})};

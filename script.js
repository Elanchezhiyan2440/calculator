const currentCalculation = document.querySelector('h2');
const previousCalculation = document.querySelector('h3');


currentCalculation.textContent = "0";
previousCalculation.textContent = "Test";

const numButtons = [...document.querySelectorAll(`[data-numbers]`)];
const operatorButtons = [...document.querySelectorAll(`[data-operators]`)];

let str = "";

numButtons.forEach(appendToString);
operatorButtons.forEach(appendToString);

function appendToString(button){
    button.addEventListener('click', (event)=>{
        const clickedButton = event.target;
        str = str + clickedButton.innerText;
        currentCalculation.textContent = str;
        console.log(str)
    })
};

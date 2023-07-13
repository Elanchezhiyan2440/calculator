const currentCalculation = document.querySelector('h2');
const previousCalculation = document.querySelector('h3');


currentCalculation.textContent = "0";
previousCalculation.textContent = "Test";

const numButtons = [...document.querySelectorAll(`[data-numbers]`)];
const operatorButtons = [...document.querySelectorAll(`[data-operators]`)];

//update display
let str = "";

numButtons.forEach(appendToString);
operatorButtons.forEach(appendToString);

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
     str = "";
     updateCurrentCalculation();
};
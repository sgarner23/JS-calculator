/*
setting all button variables 
*/

let displayScreen = document.querySelector(".display");
let plusBtn = document.getElementById("plus-btn");
let minusBtn = document.getElementById("minus-btn");
let multiplyBtn = document.getElementById("multiply-btn");
let divisionBtn = document.getElementById("division-btn");
let sevenBtn = document.getElementById("seven");
let eightBtn = document.getElementById("eight");
let nineBtn = document.getElementById("nine");
let equalBtn = document.getElementById("equal-btn");
let fourBtn = document.getElementById("four");
let fiveBtn = document.getElementById("five");
let sixBtn = document.getElementById("six");
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let zeroBtn = document.getElementById("zero");
let decimalBtn = document.getElementById("decimal");
let clearBtn = document.getElementById("clear-btn");

let operatorIsSelected = false;
let firstNumStr = "";
let secondNumStr = "";
let operatorForEquation;
let equalBtnSelected = false;
let answer = 0;
let firstCharOfSecondNum = false;

/*
NUMBER FUNCTION
*/

function addCharacterToNumberInput(char) {
  if (!operatorIsSelected) {
    displayScreen.textContent += char;
    firstNumStr += char;
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += char;
    displayScreen.textContent += char;
  }
}

oneBtn.addEventListener("click", () => addCharacterToNumberInput("1"));
twoBtn.addEventListener("click", () => addCharacterToNumberInput("2"));
threeBtn.addEventListener("click", () => addCharacterToNumberInput("3"));
fourBtn.addEventListener("click", () => addCharacterToNumberInput("4"));
fiveBtn.addEventListener("click", () => addCharacterToNumberInput("5"));
sixBtn.addEventListener("click", () => addCharacterToNumberInput("6"));
sevenBtn.addEventListener("click", () => addCharacterToNumberInput("7"));
eightBtn.addEventListener("click", () => addCharacterToNumberInput("8"));
nineBtn.addEventListener("click", () => addCharacterToNumberInput("9"));
zeroBtn.addEventListener("click", () => addCharacterToNumberInput("0"));
decimalBtn.addEventListener("click", () => addCharacterToNumberInput("."));

//////////////////////////////////////////////////////////////
plusBtn.addEventListener("click", () => {
  operatorIsSelected = true;
  operatorForEquation = "+";
  firstCharOfSecondNum = true;
});

//////////////////////////////////////////////////////////////
minusBtn.addEventListener("click", () => {
  operatorIsSelected = true;
  operatorForEquation = "-";
  firstCharOfSecondNum = true;
});

//////////////////////////////////////////////////////////////
multiplyBtn.addEventListener("click", () => {
  operatorIsSelected = true;
  operatorForEquation = "*";
  firstCharOfSecondNum = true;
});

//////////////////////////////////////////////////////////////
divisionBtn.addEventListener("click", () => {
  operatorIsSelected = true;
  operatorForEquation = "/";
  firstCharOfSecondNum = true;
});

//////////////////////////////////////////////////////////////
clearBtn.addEventListener("click", () => {
  operatorIsSelected = false;
  firstNumStr = "";
  secondNumStr = "";
  operatorForEquation = "";
  equalBtnSelected = false;
  answer = 0;
  firstCharOfSecondNum = false;
  displayScreen.textContent = "";
});

//////////////////////////////////////////////////////////////
equalBtn.addEventListener("click", () => {
  switch (operatorForEquation) {
    case "+":
      answer = +firstNumStr + +secondNumStr;
      break;
    case "-":
      answer = +firstNumStr - +secondNumStr;
      break;
    case "*":
      answer = +firstNumStr * +secondNumStr;
      break;
    case "/":
      answer = +firstNumStr / +secondNumStr;
      break;
  }

  displayScreen.textContent = answer;

  firstNumStr = answer;
  secondNumStr = "";
});

//////////////////////////////////////////////////////////////

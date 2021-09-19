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


/*
NUMBER FUNCTIONS
*/

////////////////////////////////////////////////////////////
sevenBtn.addEventListener("click", () => {
  displayScreen.textContent += "7";
  if (!operatorIsSelected) {
    firstNumStr += "7";
  } else {
    displayScreen.textContent = "";
    secondNumStr += "7";
    displayScreen.textContent = "7";
  }
});


////////////////////////////////////////////////////////////
eightBtn.addEventListener("click", () => {
  displayScreen.textContent += "8"
  if(!operatorIsSelected) {
    firstNumStr += "8"
  } else {
    displayScreen.textContent = "";
    secondNumStr += "8";
    displayScreen.textContent = "8"
  }
})

//////////////////////////////////////////////////////////////
plusBtn.addEventListener("click", () => {
  operatorIsSelected = true;
  // displayScreen.textContent = "";
  operatorForEquation = "+";
});

//////////////////////////////////////////////////////////////
equalBtn.addEventListener("click", () => {

  const operator = operatorForEquation
  switch (operator) {
    case '+':
      console.log(`operator was +`)
      answer = +firstNumStr + +secondNumStr;
      console.log(firstNumStr)
      console.log(secondNumStr)
      console.log(answer);
      break;
    case '-':
      console.log(`operator was -`)
      answer = +firstNumStr - +secondNumStr
      console.log(answer)
      break;
    case 'x':
      console.log(`operator was x`)
      answer = +firstNumStr * +secondNumStr
      console.log(answer)
      break;
    case '/':
      console.log(`operator was /`)
      answer = +firstNumStr / +secondNumStr
      console.log(answer)
      break;
  }

   displayScreen.textContent = answer;

   firstNumStr = answer;
   secondNumStr = "";

   /*
    Need to finish the logic here if they instantly start typing a new num without hititng clear first
   */

});

//////////////////////////////////////////////////////////////


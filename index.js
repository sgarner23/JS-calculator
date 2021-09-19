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
NUMBER FUNCTIONS
*/

////////////////////////////////////////////////////////////
sevenBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "7";
    firstNumStr += "7";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "7";
    displayScreen.textContent += "7";
  }
});

////////////////////////////////////////////////////////////
eightBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "8";
    firstNumStr += "8";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "8";
    displayScreen.textContent += "8";
  }
});

////////////////////////////////////////////////////////////
nineBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "9";
    firstNumStr += "9";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "9";
    displayScreen.textContent += "9";
  }
});

////////////////////////////////////////////////////////////
fourBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "4";
    firstNumStr += "4";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "4";
    displayScreen.textContent += "4";
  }
});

////////////////////////////////////////////////////////////
fiveBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "5";
    firstNumStr += "5";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "5";
    displayScreen.textContent += "5";
  }
});

////////////////////////////////////////////////////////////
sixBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "6";
    firstNumStr += "6";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "6";
    displayScreen.textContent += "6";
  }
});

////////////////////////////////////////////////////////////
oneBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "1";
    firstNumStr += "1";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "1";
    displayScreen.textContent += "1";
  }
});

////////////////////////////////////////////////////////////
twoBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "2";
    firstNumStr += "2";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "2";
    displayScreen.textContent += "2";
  }
});

////////////////////////////////////////////////////////////
threeBtn.addEventListener("click", () => {
  if (!operatorIsSelected) {
    displayScreen.textContent += "3";
    firstNumStr += "3";
  } else {
    if (firstCharOfSecondNum) {
      displayScreen.textContent = "";
      firstCharOfSecondNum = false;
    }
    secondNumStr += "3";
    displayScreen.textContent += "3";
  }
});
  

////////////////////////////////////////////////////////////
decimalBtn.addEventListener("click", () => {
  if (!operatorIsSelected){
    displayScreen.textContent += "."
    firstNumStr += "."
  } else {
    if (firstCharOfSecondNum){
      displayScreen.textContent = ""
      firstCharOfSecondNum = false;
    }
    secondNumStr += "."
    displayScreen.textContent += "."
  }
})

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
})

//////////////////////////////////////////////////////////////
multiplyBtn.addEventListener("click", () => {
  operatorIsSelected = true; 
  operatorForEquation = "*";
  firstCharOfSecondNum = true;
})

//////////////////////////////////////////////////////////////
divisionBtn.addEventListener("click", () => {
  operatorIsSelected = true; 
  operatorForEquation = "/";
  firstCharOfSecondNum = true;
})

clearBtn.addEventListener("click", () => {
  operatorIsSelected = false;
  firstNumStr = "";
  secondNumStr = "";
  operatorForEquation = "";
  equalBtnSelected = false;
  answer = 0;
  firstCharOfSecondNum = false;
  displayScreen.textContent = "";
})


//////////////////////////////////////////////////////////////
equalBtn.addEventListener("click", () => {
  switch (operatorForEquation) {
    case "+":
      console.log(`operator was +`);
      answer = +firstNumStr + +secondNumStr;
      console.log(firstNumStr);
      console.log(secondNumStr);
      console.log(answer);
      break;
    case "-":
      console.log(`operator was -`);
      answer = +firstNumStr - +secondNumStr;
      console.log(firstNumStr);
      console.log(secondNumStr);
      console.log(answer);
      break;
    case "*":
      console.log(`operator was x`);
      answer = +firstNumStr * +secondNumStr;
      console.log(firstNumStr);
      console.log(secondNumStr);
      console.log(answer);
      break;
    case "/":
      console.log(`operator was /`);
      answer = +firstNumStr / +secondNumStr;
      console.log(firstNumStr);
      console.log(secondNumStr);
      console.log(answer);
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

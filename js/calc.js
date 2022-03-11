// add number and operations to the screen
// when pressing = compute operation and display it in the 'sum' screen
// set up clear function to clear whole operation
// set del button to delete last sign
// prevent showing any non-numerical signs before numerical input
// ! PREVENT DISPLAYING SIGN AFTER SIGN
// * CHANGE ADDING NUMBER => WHEN ADDING SIGN NUMBER MOVES TO THE MIDDLE SCREEN WITH SIGN // THAT PREVENTS FROM ADDING MORE SIGNS THAN ONE // MAKE IT INSTANTLY SUMMING BY CONVERTING STRING WITH parseFloat.

let topScreen = document.querySelector("#top-screen");
let bottomScreen = document.querySelector("#bottom-screen");
let middleScreen = document.querySelector(`#middle-screen`);

const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".sign");

const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const dot = document.querySelector("#dot");

// let topScreenValue = topScreen.textContent;
// let middleScreenValue = middleScreen.textContent;
// let bottomScreenValue = bottomScreen.textContent;

// ADD NUMBERS

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let numberValue = e.target.getAttribute("value");
    bottomScreen.textContent += numberValue;
  });
});

// ADD SIGN

signs.forEach((sign) => {
  sign.addEventListener("click", (e) => {
    if (bottomScreen.textContent === "" || null) return;
    else {
      let signValue = e.target.getAttribute("value");

      bottomScreen.textContent += signValue;
    }
  });
});

// COMPUTATION

equal.addEventListener("click", () => {});

// DELETE LAST CHARACTER

del.addEventListener("click", () => {
  let newValue = bottomScreen.textContent.slice(0, -1);
  bottomScreen.textContent = newValue;
});

// CLEARING INPUT

clear.addEventListener("click", () => {
  topScreen.textContent = null;
  middleScreen.textContent = null;
  bottomScreen.textContent = null;
});

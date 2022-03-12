const display = document.querySelector(".calculator__display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll("[data-action]");
const equals = document.querySelector("[data-equals]");
const decimal = document.querySelector("[data-decimal]");
const clear = document.querySelector("[data-clear]");
const calculator = document.querySelector(".calculator");
const del = document.querySelector("[data-delete]");

function calculatorFunctionality() {
  // ADDING NUMBER TO SCREEN

  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      const numberValue = e.target.textContent;
      const displayedNumber = display.textContent;

      if (displayedNumber === "0") {
        display.textContent = numberValue;
      } else {
        display.textContent += numberValue;
      }

      calculator.dataset.operation = "inactive";
    });
  });

  // ADDING DECIMAL

  decimal.addEventListener("click", () => {
    if (display.textContent.includes(".")) return;
    else {
      display.textContent += decimal.textContent;
    }
  });

  //  CLEARING DISPLAY

  clear.addEventListener("click", () => {
    display.textContent = "0";
    calculator.dataset.operation = "inactive";
  });

  // DELETING LAST ITEM

  del.addEventListener("click", () => {
    if (
      display.textContent.charAt(display.textContent.length - 1) === "+" ||
      display.textContent.charAt(display.textContent.length - 1) === "-" ||
      display.textContent.charAt(display.textContent.length - 1) === "*" ||
      display.textContent.charAt(display.textContent.length - 1) === "/"
    ) {
      calculator.dataset.operation = "inactive";
    }

    display.textContent = display.textContent.slice(0, -1);
    if (!display.textContent) {
      display.textContent = "0";
    }
  });

  // ADDING OPERATION

  operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
      const operationValue = e.target.textContent;
      if (
        (calculator.dataset.operation === "active" &&
          display.textContent.charAt(display.textContent.length - 1) === "+") ||
        display.textContent.charAt(display.textContent.length - 1) === "-" ||
        display.textContent.charAt(display.textContent.length - 1) === "*" ||
        display.textContent.charAt(display.textContent.length - 1) === "/"
      ) {
        return;
      } else {
        display.textContent += operationValue;
        calculator.dataset.operation = "active";
      }
    });
  });

  // CALCULATION

  equals.addEventListener("click", () => {
    display.textContent = eval(display.textContent);
    calculator.dataset.operation = "inactive";
  });
}

calculatorFunctionality();

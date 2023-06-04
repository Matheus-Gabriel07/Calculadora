let currentOperation = null;
let numbers = [];

function setNumber(num) {
  numbers.push(num);
  updateDisplay();
}

function operation(op) {
  currentOperation = op;
  updateDisplay();
}

function calculate() {
  let result;

  switch (currentOperation) {
    case "add":
      result = numbers.reduce((a, b) => a + b, 0);
      break;
    case "subtract":
      result = numbers.reduce((a, b) => a - b);
      break;
    case "multiply":
      result = numbers.reduce((a, b) => a * b, 1);
      break;
    case "divide":
      result = numbers.reduce((a, b) => a / b);
      break;
    default:
      result = null;
  }

  document.getElementById("resultado").textContent = result;
  reset();
}

function updateDisplay() {
  const displayText = numbers.join(` ${currentOperation} `);
  document.getElementById("resultado").textContent = displayText;
}

function reset() {
  numbers = [];
  currentOperation = null;
  document.getElementById("resultado").textContent = "";
}

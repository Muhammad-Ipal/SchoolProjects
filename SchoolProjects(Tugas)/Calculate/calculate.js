function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const displayValue = document.getElementById("display").value;
  let result = "";
  try {
    result = eval(displayValue);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("display").value = result;
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function addPercent() {
  const display = document.getElementById("display");
  const value = eval(display.value);
  display.value = (value / 100).toString();
}

function power() {
  const display = document.getElementById("display");
  const value = eval(display.value);
  display.value = Math.pow(value, 2).toString();
}

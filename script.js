const display = document.getElementById('display');

// Appends a value to the display
function appendValue(value) {
  display.value += value;
}

// Clears the display
function clearDisplay() {
  display.value = '';
}

// Evaluates the expression in the display
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
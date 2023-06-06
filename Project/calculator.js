function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  var displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculatePercentage() {
  var displayValue = document.getElementById('display').value;
  var result;

  try {
    result = parseFloat(displayValue) / 100;
  } catch (error) {
    result = 'Invalid expression';
  }

  document.getElementById('display').value = result;
}

function calculateResult() {
  var displayValue = document.getElementById('display').value;
  var result;

  try {
    result = eval(displayValue);
  } catch (error) {
    result = 'Invalid expression';
  }

  document.getElementById('display').value = result;
}

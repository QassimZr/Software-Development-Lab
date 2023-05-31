var count = 0;
var countDisplay = document.getElementById('count');

function increaseCount() {
  count++;
  updateDisplay();
}

function reduceCount() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

function resetCount() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  countDisplay.value = count;
}

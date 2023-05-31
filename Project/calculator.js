function appendCharacter(char) {
    document.getElementById('display').value += char;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLastChar() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function evaluate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
  
    // Display result and clear the display for the next input
    display.value = result;
  }
  
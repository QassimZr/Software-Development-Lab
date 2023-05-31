var startTime;
var running = false;
var lapCounter = 1;

function startStop() {
  var startStopButton = document.getElementById('startStopButton');
  var lapResetButton = document.getElementById('lapResetButton');
  var display = document.getElementById('display');

  if (!running) {
    startStopButton.textContent = 'Stop';
    lapResetButton.textContent = 'Lap';
    startTime = new Date().getTime();
    running = true;
    updateTimer(display);
  } else {
    startStopButton.textContent = 'Start';
    lapResetButton.textContent = 'Reset';
    running = false;
    clearInterval(timerInterval);
  }
}

function lapReset() {
  var lapResetButton = document.getElementById('lapResetButton');
  var lapsList = document.getElementById('lapsList');
  var display = document.getElementById('display');

  if (running) {
    var lapTime = new Date().getTime() - startTime;
    var lapItem = document.createElement('li');
    lapItem.textContent = 'Lap ' + lapCounter + ': ' + formatTime(lapTime);
    lapsList.appendChild(lapItem);
    lapCounter++;
  } else {
    lapResetButton.textContent = 'Lap';
    display.textContent = '00:00:00';
    lapCounter = 1;
    lapsList.innerHTML = '';
  }
}

function updateTimer(display) {
  timerInterval = setInterval(function() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
}

function formatTime(time) {
  var milliseconds = Math.floor(time % 1000 / 10);
  var seconds = Math.floor(time / 1000 % 60);
  var minutes = Math.floor(time / (1000 * 60) % 60);
  var hours = Math.floor(time / (1000 * 60 * 60) % 24);

  return (
    leadingZero(hours) + ':' +
    leadingZero(minutes) + ':' +
    leadingZero(seconds) + '.' +
    leadingZero(milliseconds)
  );
}

function leadingZero(number) {
  return (number < 10 ? '0' : '') + number;
}

var startBtn = document.getElementById('startBtn');
var resetBtn = document.getElementById('resetBtn');
var hoursInput = document.getElementById('hours');
var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
var display = document.getElementById('display');
var intervalId;

startBtn.addEventListener('click', function() {
  if (!intervalId) {
    var totalSeconds = getRemainingTime();
    if (totalSeconds > 0) {
      startTimer(totalSeconds);
      startBtn.textContent = 'Stop';
      startBtn.classList.add('stop');
    }
  } else {
    stopTimer();
    startBtn.textContent = 'Start';
    startBtn.classList.remove('stop');
  }
});

resetBtn.addEventListener('click', function() {
  stopTimer();
  resetInputs();
  display.textContent = '00:00:00';
  startBtn.textContent = 'Start';
  startBtn.classList.remove('stop');
});

function getRemainingTime() {
  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;

  return hours * 3600 + minutes * 60 + seconds;
}

function startTimer(totalSeconds) {
  intervalId = setInterval(function() {
    if (totalSeconds <= 0) {
      stopTimer();
      display.textContent = '00:00:00';
      playAlertSound();
      return;
    }

    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    totalSeconds--;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetInputs() {
  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function playAlertSound() {
  var audio = new Audio('clock.mp3');
  audio.play();
}

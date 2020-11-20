// global variables and document elements
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');

// quiz questions and make sure that correct or wrong displays onclick

// timer HELP, make the timer detract -- when the answer is wrong, use && on the if and else if
function countdown() {
    var timeLeft = 60;
  
var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      // instead of display message, have the quiz end and display the high score screen
      displayMessage();
    }
  }, 1000);
}

// calls 
startBtn.onclick = countdown;

// event listeners

// high score to local storage
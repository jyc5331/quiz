// global variables and document elements
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var quizContainer = document.getElementById('quizContainer');
var highScoreText = document.getElementById('highScoreText');

// timer HELP timer will detract based on answers from another function 
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

// quiz questions and make sure that correct or wrong displays onclick
function quizBegin() {
alert ("quiz is beginning");
}

// calls 
startBtn.onclick = countdown;
startBtn.onclick = quizBegin;

// event listeners

// high score to local storage. make numbered list of high scores in order of highest-lowest. 
// set information in key, value format to local storage, get information on command and have on a slide
// have the slide display when the user clicks "highScoreText"
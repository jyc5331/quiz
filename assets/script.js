// global variables and document elements
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("theStartButton");
var quizContainer = document.getElementById("quizContainer");
var highScoreButton = document.getElementById("highScoreButton");
var questionSlide = document.getElementById("questionSlide");
var highScoreSlide = document.getElementById("highScoreSlide");
var highScores = [];
var timeLeft = 60;
var timeInterval;
var counter = 0;

var questions = [
  {
    question:
      "Select which variable uses the best-practice for casing in JavaScript:",
    answers: {
      a: "dangerZone",
      b: "DangerZone",
      c: "DANGERZONE",
      d: "dangerzone",
    },
    correctAnswer: "dangerZone",
  },
  {
    question: "What does DOM stand for in JavaScript?",
    answers: {
      a: "Document Object Map",
      b: "Document Obliterate Malfeasance",
      c: "Document Object Noodle",
      d: "Document Object Model",
    },
    correctAnswer: "Document Object Model",
  },
  {
    question:
      "Which of the following is considered best practice for incorporating CSS into your HTML",
    answers: {
      a: "Incorporating inline in HTML",
      b: "Linking to an external style sheet",
      c: "The ancient, time honored ritual of augury",
      d: "There is no current best practice",
    },
    correctAnswer: "Linking to an external style sheet",
  },
];

// timer, starts at 60, displays in 'timer' element, is affected by quizBegin function
function countdown() {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      // instead of display message, have the quiz end and display the high score screen
      displayMessage();
    }
  }, 1000);
}

// showQuestion will write HTML and change which question is displayed on when a button is clicked
function showQuestion(index) {
  var questionSelected = event.target.textContent;
  var currentAnswer = questions[index].correctAnswer;
  function answerClickHandler() {
    counter += 1;
    showQuestion(counter);
    if (questionSelected === currentAnswer) {
      document.querySelecter("#feedback").innerHTML += "Correct!";
    } else {
      timeLeft -= 10;
      document.querySelecter("#feedback").innerHTML += "Wrong!";
    }
    if (index >= questions.length) {
      displayHighScores();
    }
  }
  document.querySelector("#quizContainer").innerHTML = `
  <h2 id="question"> ${questions[index].question} </h2>
  <button class="theButton" id="a">${questions[index].answers.a}</button>
  <button class="theButton" id="b">${questions[index].answers.b}</button>
  <button class="theButton" id="c">${questions[index].answers.c}</button>
  <button class="theButton" id="d">${questions[index].answers.d}</button>
  <p id="feedback"> </p>
  `;
  document.querySelector("#a").addEventListener("click", answerClickHandler);
  document.querySelector("#b").addEventListener("click", answerClickHandler);
  document.querySelector("#c").addEventListener("click", answerClickHandler);
  document.querySelector("#d").addEventListener("click", answerClickHandler);
}

// get high score from localStorage, append the values to individual <li> within highScoreSlide

function displayHighScores() {
  document.querySelector("#quizContainer").innerHTML = `
  <div class="highScoreSlide">
  <h2>High Scores!</h2>
  <ol id="highScoreList">
    <li></li>
  </ol>
</div>`;
  // var highScores = JSON.parse(localStorage.getItem("score"));
  // append scores to highScoreList
}

// calls
//highScoreText.onClick (displayHighScores);
startBtn.addEventListener("click", function (e) {
  countdown();
  showQuestion(counter);
});

highScoreButton.addEventListener("click", displayHighScores);

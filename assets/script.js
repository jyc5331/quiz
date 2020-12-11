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
  timerEl.textContent = timeLeft + " seconds remaining";
  timeLeft--;
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
  function answerClickHandler(e) {
    var answerSelected = e.target.textContent;
    var correctAnswer = questions[index].correctAnswer;
    counter += 1;
    if (answerSelected === correctAnswer) {
      document.querySelector("#feedback").innerHTML += "Correct!";
    } else {
      timeLeft -= 10;
      document.querySelector("#feedback").innerHTML += "Wrong!";
    }
    if (counter >= questions.length) {
      setTimeout(displayHighScores, 500);
    } else {
      setTimeout(function () {
        showQuestion(counter);
      }, 500);
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
  timerEl.textContent = "";
  clearInterval(timeInterval);
  console.log(timeLeft);
  var highScore = localStorage.getItem("highScore");
  document.querySelector("#quizContainer").innerHTML = `
  <div class="highScoreSlide">
  <label for="initials">Enter your initials:</label>
  <input type="text" id="initials"  required
         minlength="1" />
         <button id="highScoreSave"> Save </button>
  <h2>High Scores!</h2>
  <ol id="highScoreList">
    <li>${highScore}</li>
  </ol>
</div>`;
  document
    .querySelector("#highScoreSave")
    .addEventListener("click", function () {
      var initials = document.querySelector("#initials").value;
      localStorage.setItem("highScore", initials + " " + timeLeft);
    });
}

// calls
//highScoreText.onClick (displayHighScores);
startBtn.addEventListener("click", function () {
  countdown();
  showQuestion(counter);
});

highScoreButton.addEventListener("click", displayHighScores);

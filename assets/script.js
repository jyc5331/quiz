// global variables and document elements
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('theStartButton');
var quizContainer = document.getElementById('quizContainer');
var highScoreText = document.getElementById('highScoreText');
var questionSlide = document.getElementById('questionSlide');
var highScoreSlide = document.getElementById('highScoreSlide');
var highScores = [];


// timer, starts at 60, displays in 'timer' element, is affected by quizBegin function
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
  return timeLeft;
}


const questions = [
  {
    question: "Select which variable uses the best-practice for casing in JavaScript:",
    answers: {
      a: "dangerZone",
      b: "DangerZone",
      c: "DANGERZONE",
      d: "dangerzone"
    },
    correctAnswer: "a"
  },
  {
    question: "What does DOM stand for in JavaScript?",
    answers: {
      a: "Document Object Map",
      b: "Document Obliterate Malfeasance",
      c: "Document Object Noodle",
      d: "Document Object Model"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following is considered best practice for incorporating CSS into your HTML",
    answers: {
      a: "Incorporating inline in HTML",
      b: "Linking to an external style sheet",
      c: "The ancient, time honored ritual of augury",
      d: "There is no current best practice"
    },
    correctAnswer: "b"
  }
];


// Actual quiz function. HELP how to run questions...for loop? idea is to replace quizContainer content with a new explanationText and 4 buttons 
function quizBegin() {
alert ("quiz is beginning");
// HELP uncaught property quizContainer.style.display = "none" ;

// loop through the questions with: for(var i=0; i <questions.length; i++){
// var response = HELP something to indicate that the question has been answered
// if (response == questions[i]. correctAnswer){
    //writing feedback: document.getElementById("feedback").innerHTML =Correct or Wrong!
// else { display Wrong! text and subtract 10 from timeLeft}

//} end of if statement
//} end of loop
// return timeLeft instruct the game to run the displayHighScores function
} //end of quizBegin function

// calls 
startBtn.onclick = countdown;
startBtn.onclick = quizBegin;
highScoreText.onclick = displayHighScores;

// get high score from localStorage, append the values to individual <li> within highScoreSlide
// have the active page disappear and highScoreSlide display when the user clicks "highScoreText"
function displayHighScores() {
    alert ('heyo');
}
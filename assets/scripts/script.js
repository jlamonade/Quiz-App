// Dependencies (HTML Elements, Libraries, etc.) =====================
// Starting Data
var startButton = document.querySelector("#start");
var highScoresButtonDiv = document.querySelector(".button");
var playButtonDiv = document.querySelector(".play");
var startDiv = document.querySelector(".start-btn");
var questionDiv = document.querySelector(".question");
var questionText = document.querySelector("#question-title");
var answerOl = document.querySelector(".answer-choices");
var answerChoices = document.querySelectorAll(".choice");
var correctAnswer = document.querySelector("#correct");
var incorrectAnswer = document.querySelector("#incorrect");
var scoreDiv = document.querySelector(".score");
var currentScoreSpan = document.querySelector(".current-score");
var timer = document.querySelector(".timer");
var highScoresDiv = document.querySelector(".highscores");
var formDiv = document.querySelector(".form");

// Build

// Starting Data =====================================================
// high scores are read from external data
// questions/answers

var timeLeft = 100;
var questionIndexCounter = 0;
var currentScore = 0;
var questionList = [];

// Functions =========================================================

// timer function

function startTimer() {
  timer.textContent = "Time: " + timeLeft;
  var timeInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft > 0) {
      timer.textContent = "Time: " + timeLeft;
    } else {
      stopTimer(timeInterval);
      timer.textContent = "Time: 0";
      timeLeft = 100;
      hideQuestion();
      showFormDiv();
      showPlayButtonDiv();
    }
  }, 1000);
}
// Question constructor

function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

function addQuestionToList(question, answers, correctAnswer) {
  var question = new Question(question, answers, correctAnswer);
  questionList.push(question);
}

// quiz functions

function populateQuestionElements() {
  var chosenQuestion = getNextQuestion();
  var correctIndex = chosenQuestion.correctAnswer;
  questionText.textContent = chosenQuestion.question;
  for (var i = 0; i < answerChoices.length; i++) {
    answerChoices[i].textContent = chosenQuestion.answers[i];
    answerChoices[i].setAttribute("data-correct", "false");
  }
  answerChoices[correctIndex].setAttribute("data-correct", "true");
}

function shuffleQuestionList() {
  for (var i = questionList.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    [questionList[i], questionList[randomIndex]] = [
      questionList[randomIndex],
      questionList[i],
    ];
  }
}

function validateUserChoice(isAnswer) {
  if (isAnswer == "true") {
    currentScore++;
    currentScoreSpan.textContent = currentScore;
  } else {
    timeLeft -= 10;
    if (timeLeft > 0) {
      timer.textContent = "Time: " + timeLeft;
    } else {
      timer.textContent = "Time: 0";
    }
  }
}

function getNextQuestion() {
  if (questionIndexCounter < questionList.length) {
    return questionList[questionIndexCounter++];
  } else {
    console.log(questionList);
    questionIndexCounter = 0;
    return questionList[questionIndexCounter++];
  }
}

// high score functions

function saveHighScore() {
  // write high score to external file
}

function showHighScores() {
  // adds high score li element to .scores-list
}

// functions to hide elements

function hideCorrectAnswer() {
  correctAnswer.style = "display: none;";
}

function hideIncorrectAnswer() {
  incorrectAnswer.style = "display: none;";
}

function hideStartDiv() {
  startDiv.style = "display: none;";
}

function hideQuestion() {
  questionDiv.style = "display: none;";
}

function hideHighScoresDiv() {
  highScoresDiv.style = "display: none;";
}

function hideFormDiv() {
  formDiv.style = "display: none;";
}

function hideTimer() {
  timer.style = "display: none;";
}

function hideHighScoresButtonsDiv() {
  highScoresButtonDiv.style = "display: none;";
}

function hideScoreDiv() {
  scoreDiv.style = "display: none;";
}

function hidePlayButtonDiv() {
  playButtonDiv.style = "display: none;";
}

// functions to show elements

function showCorrectAnswer() {
  correctAnswer.style = "display: block;";
}

function showIncorrectAnswer() {
  incorrectAnswer.style = "display: block;";
}

function showStartDiv() {
  startDiv.style = "display: block;";
}

function showQuestion() {
  questionDiv.style = "display: block;";
}

function showHighScoresDiv() {
  highScoresDiv.style = "display: block;";
}

function showFormDiv() {
  formDiv.style = "display: block;";
}

function showTimer() {
  timer.style = "display: block;";
}

function showHighScoresButtonsDiv() {
  highScoresButtonDiv.style = "display: block;";
}

function showScoreDiv() {
  scoreDiv.style = "display: block;";
}

function showPlayButtonDiv() {
  playButtonDiv.style = "display: block;";
}

// show/hide testing area

// hideHighScoresButtonsDiv();
// hideScoreDiv();
// hideTimer();
// showHighScoresButtonsDiv();
// showScoreDiv();
// showTimer();

// hideHighScoresDiv();
// hideFormDiv();
// showHighScoresDiv();
// showFormDiv();

// showIncorrectAnswer();
// showCorrectAnswer();
// hideAllQuestionElements();
// showAllQuestionElements();
// populateQuestionElements();

// page view functions

function showHighScoresButtonActions() {
  hideStartDiv();
  showHighScoresDiv();
  hideHighScoresButtonsDiv();
  showPlayButtonDiv();
  // showhighscores
}

function startButtonActions() {
  hideStartDiv();
  startTimer();
  shuffleQuestionList();
  populateQuestionElements();
  showScoreDiv();
  showTimer();
  hideHighScoresButtonsDiv();
  showQuestion();
}

function playButtonActions() {
  hideFormDiv();
  hideScoreDiv();
  hideTimer();
  showHighScoresButtonsDiv();
  hidePlayButtonDiv();
  hideHighScoresDiv();
  showStartDiv();
}

// User Interactions =================================================
// start button is clicked
// start button disappears
// game will start
// hideAllQuestionElements();
// showAllQuestionElements();
// hideStartDiv();

// timer starts
// questions appear
// answers appear
startButton.addEventListener("click", startButtonActions);

// when user clicks on show high-scores
// high scores is displayed
highScoresButtonDiv.addEventListener("click", showHighScoresButtonActions);

// when user clicks on play button high scores view
// start button appears and button for high scores appears
playButtonDiv.addEventListener("click", playButtonActions);

// user clicks on an answer
// record outcome/decrement time

for (var i = 0; i < answerChoices.length; i++) {
  answerChoices[i].addEventListener("click", function () {
    validateUserChoice(this.dataset.correct);
  });
  answerChoices[i].addEventListener("click", populateQuestionElements);
}

// show next question
// when timer runs out
// display user score
// record user score to high scores
// display high scores
// go back to start button

// Initialization ====================================================

// page loads
addQuestionToList("How?", ["0", "1", "3", "4"], 0);
addQuestionToList("Who?", ["0", "1", "3", "4"], 0);
addQuestionToList("What?", ["0", "1", "3", "4"], 0);
addQuestionToList("When?", ["0", "1", "3", "4"], 0);
addQuestionToList("Where?", ["0", "1", "3", "4"], 0);
addQuestionToList("Why?", ["0", "1", "3", "4"], 0);

// show view highscores button
// when view highscores is pressed
// display high scores
// show start button
// when start button is clicked
// timer starts
// questions and answers appear
// user chooses answer
// if correct answer is chosen
// alert user that they were correct
// record correct answer
// else if incorrect answer is chosen
// alert user that they were incorrect
// record incorrect answer
// take time away from timer
// if timer runs out
// display user score
// ask for their initials to record high scores
// go back to start button

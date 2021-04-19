// Dependencies (HTML Elements, Libraries, etc.) =====================

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

// Build =============================================================

// Starting Data =====================================================

var timeLeft = 100;
var questionIndexCounter = 0;
var currentScore = 0;
var questionList = [];
var highScoresArray = [];

// FUNCTIONS =========================================================

// FUNCTIONS TO HIDE ELEMENTS

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

// FUNCTIONS TO SHOW ELEMENTS

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

// PAGE VIEW FUNCTIONS

function showHighScoresButtonActions() {
  hideStartDiv();
  showHighScoresDiv();
  hideHighScoresButtonsDiv();
  showPlayButtonDiv();
  // showhighscores
}

function startButtonActions() {
  resetScore();
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

function submitHighscoreOptions() {
  return
}

// TIMER FUNCTION

function startTimer() {
  /* 
  timer starts with 100 seconds and when timeLeft is 0 or less
  question elements are hidden and score submission view
  is shown
  */
  timer.textContent = "Time: " + timeLeft;
  var timeInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft > 0) {
      timer.textContent = "Time: " + timeLeft;
    } else {
      clearInterval(timeInterval);
      timer.textContent = "Time: 0";
      timeLeft = 100;
      hideQuestion();
      showFormDiv();
      showPlayButtonDiv();
    }
  }, 1000);
}

// QUESTION CONSTRUCTOR

function Question(question, answers, correctAnswer) {
  /* 
  creates a question object with question, answers taken in array form,
  and an index for the correct answer
  */
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

function addQuestionToList(question, answers, correctAnswer) {
  /* 
  creates a new question object and pushes it into a questionList array
  */
  var question = new Question(question, answers, correctAnswer);
  questionList.push(question);
}

// QUIZ FUNCTIONS

function resetScore() {
  currentScore = 0;
  currentScoreSpan.textContent = "0";
}

function populateQuestionElements() {
  /* 
  populates the question elements with the question and answers
  as well as adds a data-correct attribute to answer elements
  signifying whether they are true, correct answer; or false,
  incorrect answer.
  */
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
  /* 
  shuffles the question list so that each new iteration of the list
  is in a new order
  */
  for (var i = questionList.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    [questionList[i], questionList[randomIndex]] = [
      questionList[randomIndex],
      questionList[i],
    ];
  }
}

function validateUserChoice(isAnswer) {
  /* 
  checks whether the element's data-correct attribute contains true
  or false, if true increment score, if false decrement time
  */
  if (isAnswer == "true") {
    currentScore++;
    currentScoreSpan.textContent = currentScore;
  } else {
    timeLeft -= 10;
    if (timeLeft > 0) {
      // to make sure time doesn't display a negative value
      timer.textContent = "Time: " + timeLeft;
    } else {
      timer.textContent = "Time: 0";
    }
  }
}

function getNextQuestion() {
  /* 
  used together with questionIndexCounter, to get questions
  from the list in order
  */
  if (questionIndexCounter < questionList.length) {
    // if there are questions that haven't been used in this iteration
    return questionList[questionIndexCounter++];
  } else {
    // if out of questions
    shuffleQuestionList();
    questionIndexCounter = 0;
    return questionList[questionIndexCounter++];
    // returns the first question in newly shuffled question array
  }
}

// HIGH SCORE FUNCTIONS

function Highscore(name, score) {
  this.name = name;
  this.score = score;
}

function saveHighScoreToArray(name) {
  var highScoreObject = new Highscore(name, currentScore);
  highScoreArray.push(highScoreObject);
  sortHighScoreArray();
}

function sortHighScoreArray() {
  highScoreArray.sort((object1, object2) => {
    return object1.score > object2.score ? 1 : -1;
  });
}

function showHighScores() {
  // adds high score li element to .scores-list
}

// INITIALIZATION ====================================================

startButton.addEventListener("click", startButtonActions);
highScoresButtonDiv.addEventListener("click", showHighScoresButtonActions);
playButtonDiv.addEventListener("click", playButtonActions);

for (var i = 0; i < answerChoices.length; i++) {
  answerChoices[i].addEventListener("click", function () {
    validateUserChoice(this.dataset.correct);
    // this passes the value of data-correct into validateUserChoice()
  });
  answerChoices[i].addEventListener("click", populateQuestionElements);
}

addQuestionToList(
  "What is the syntax to declare a function?",
  [
    "function functionName() {}",
    "doThis() {}",
    "var function() {}",
    "var name = {}",
  ],
  0
);
addQuestionToList(
  "How do we get the value of a property of an object within itself?",
  ["git[property]", "objectName[property]", "this.property", "git.property"],
  2
);
addQuestionToList(
  "Inside which HTML element do we put the JavaScript??",
  ["<javascript>", "<script>", "<js>", "<scripting>"],
  1
);
addQuestionToList(
  `What is the correct JavaScript syntax to change the content of the HTML element below?
  <p id='demo'>This is a demonstration.</p>`,
  [
    "#demo.innerHTML = 'Hello World!'",
    "document.getElementsById('demo').innerHTML = 'Hello World!'",
    "document.getElement('p').innerHTML = 'Hello World!'';",
    "document.getElementByName('p').innerHTML = 'Hello World!'';",
  ],
  1
);
addQuestionToList(
  "Where is the correct place to insert JavaScript?",
  [
    "The <body> section",
    "Both the <head> section and the <body> section are correct",
    "The <head> section",
    "The <footer> section",
  ],
  1
);
addQuestionToList(
  "What is the correct syntax for referring to an external script called 'xyz.js'?",
  [
    "<script name='xyz.js'>",
    "<script href='xyz.js'>",
    "<script rel='xyz.js'>",
    "<script src='xyz.js'>",
  ],
  3
);

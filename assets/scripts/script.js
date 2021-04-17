// Dependencies (HTML Elements, Libraries, etc.) =====================
// Starting Data
var startButton = document.querySelector("#start");
var startDiv = document.querySelector(".start-btn");
var question = document.querySelector("#question");
var answerOl = document.querySelector(".answer-choices");
var answerChoices = document.querySelectorAll(".choice");
var correctAnswer = document.querySelector("#correct");
var incorrectAnswer = document.querySelector("#incorrect");
var scoreDiv = document.querySelector(".current-score");
var timer = document.querySelector(".timer");
var questionList = [];

var currentScore = 0;

// Build

// Question constructor

function Question (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

function addQuestionToList (question, answers, correctAnswer) {
    var question = new Question(question, answers, correctAnswer);
    questionList.push(question);
}

addQuestionToList("How?", ["0", "1", "3", "4"], 2);
addQuestionToList("Who?", ["0", "1", "3", "4"], 2);
addQuestionToList("What?", ["0", "1", "3", "4"], 2);
addQuestionToList("When?", ["0", "1", "3", "4"], 2);
addQuestionToList("Where?", ["0", "1", "3", "4"], 2);
addQuestionToList("Why?", ["0", "1", "3", "4"], 2);

function populateQuestionElements () {
    var chosenQuestion = getRandomQuestion();
    var correctIndex = chosenQuestion.correctAnswer;
    question.textContent = chosenQuestion.question;
    for (var i = 0; i < answerChoices.length; i++) {
        answerChoices[i].textContent = chosenQuestion.answers[i];
        answerChoices[i].setAttribute("data-correct", "false");
    }
    answerChoices[correctIndex].setAttribute("data-correct", "true");
}

function getRandomQuestion () {
    var randomQuestion = questionList[generateRandomQuestionIndex()];
    return randomQuestion;
} 

function generateRandomQuestionIndex () {
    var randomIndex = Math.floor(Math.random() * questionList.length);
    return randomIndex;
}

// Starting Data =====================================================
    // high scores are read from external data
    // questions/answers
var timeLeft = 100;

// Functions =========================================================
function validateUserChoice (isAnswer) {
    if (isAnswer == "true") {
        currentScore++;
        scoreDiv.textContent = currentScore;
    } else {
        timeLeft -= 10;
        if (timeLeft > 0) {
            timer.textContent = "Time: " + timeLeft;
        } else {
            timer.textContent = "Time: 0";
        }
    }
}

function hideAllQuestionElements () {
    hideQuestion();
    hideAnswers();
}

function showAllQuestionElements() {
    showQuestion();
    showAnswers();
}

// functions to hide elements
function hideQuestion () {
    question.style = "display: none;"
}

function hideAnswers () {
    answerOl.style = "display: none;"
}

function hideCorrectAnswer () {
    correctAnswer.style = "display: none;"
}

function hideIncorrectAnswer () {
    incorrectAnswer.style = "display: none;"
}

function hideStartDiv () {
    startDiv.style = "display: none;"
}

// functions to show elements

function showQuestion () {
    question.style = "display: block;"
}

function showAnswers () {
    answerOl.style = "display: block;"
}

function showCorrectAnswer () {
    correctAnswer.style = "display: inherit;"
}

function showIncorrectAnswer () {
    incorrectAnswer.style = "display: inherit;"
}

function showStartDiv () {
    startDiv.style = "display: revert;"
}


// function testing area
// showIncorrectAnswer();
// showCorrectAnswer();
// hideAllQuestionElements();
// showAllQuestionElements();
// populateQuestionElements();

// timer functions



function startTimer() {
    function stopTimer (clearThisTimer) {clearInterval(clearThisTimer)};
    timer.textContent = "Time: " + timeLeft;
    var timeInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            timer.textContent = "Time: " + timeLeft;
        } else {
            stopTimer(timeInterval);
            timer.textContent = "Time: 0";
            timeLeft = 100;
            hideAllQuestionElements();
            showStartDiv();
        }
    }, 1000)
}


// User Interactions =================================================
    // start button is clicked
        // start button disappears
        // game will start
hideAllQuestionElements();
// showAllQuestionElements();
            // timer starts
            // questions appear
            // answers appear
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", populateQuestionElements);
startButton.addEventListener("click", showAllQuestionElements);
startButton.addEventListener("click", hideStartDiv);
            
            // user clicks on an answer
            // record outcome/decrement time
answerChoices[0].addEventListener("click", function() {validateUserChoice(this.dataset.correct)});
answerChoices[1].addEventListener("click", function() {validateUserChoice(this.dataset.correct)});
answerChoices[2].addEventListener("click", function() {validateUserChoice(this.dataset.correct)});
answerChoices[3].addEventListener("click", function() {validateUserChoice(this.dataset.correct)});
            
            // show next question
        // when timer runs out
            // display user score
            // record user score to high scores
            // display high scores
            // go back to start button


// Initialization ====================================================


// page loads 

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
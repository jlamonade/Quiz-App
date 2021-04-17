// Dependencies (HTML Elements, Libraries, etc.) =====================
// Starting Data
var startBtn = document.querySelector(".start-btn");
var question = document.querySelector("#question");
var answerList = document.querySelector(".answer-choices");
var answerChoices = document.querySelectorAll(".choice");
var correctAnswer = document.querySelector("#correct");
var incorrectAnswer = document.querySelector("#incorrect");
var currentScore = document.querySelector(".current-score");
var timer = document.querySelector(".timer");
var questionList = [];



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
addQuestionToList("How?", ["0", "1", "3", "4"], 2);
addQuestionToList("How?", ["0", "1", "3", "4"], 2);

function populateQuestionElements () {
    question.textContent = questionList[0].question;
    answerChoices[0].textContent = questionList[0].answers[0];
    answerChoices[1].textContent = questionList[0].answers[1];
    answerChoices[2].textContent = questionList[0].answers[2];
    answerChoices[3].textContent = questionList[0].answers[3];
}




// Starting Data =====================================================
    // high scores are read from external data
    // questions/answers

// Functions =========================================================
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
    answerList.style = "display: none;"
}

function hideCorrectAnswer () {
    correctAnswer.style = "display: none;"
}

function hideIncorrectAnswer () {
    incorrectAnswer.style = "display: none;"
}

function hideStartBtn () {
    startBtn.style = "display: none;"
}

// functions to show elements

function showQuestion () {
    question.style = "display: inherit;"
}

function showAnswers () {
    answerList.style = "display: inherit;"
}

function showCorrectAnswer () {
    correctAnswer.style = "display: inherit;"
}

function showIncorrectAnswer () {
    incorrectAnswer.style = "display: inherit;"
}

function showStartButton () {
    startBtn.style = "display: inherit;"
}

hideAllQuestionElements();
showAllQuestionElements();
populateQuestionElements();

// timer functions

function startTimer() {
    var timeLeft = 3;
    timer.textContent = "Time: " + timeLeft;
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            hideAllQuestionElements();
        }
    }, 1000)
}

// event listeners

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", showAllQuestionElements);

// User Interactions =================================================
    // start button is clicked
        // start button disappears
        // game will start
            // timer starts
            // questions appear
            // answers appear
            // user clicks on an answer
            // record outcome/decrement time
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
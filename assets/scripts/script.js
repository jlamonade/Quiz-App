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




// Build


// Starting Data =====================================================
    // high scores are read from external data
    // questions/answers

// Functions =========================================================


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
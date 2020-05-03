// create start screen with a start button
// after starting, show question with multiple choice and countdown from 30 seconds
// create three scenarios: 1) correct guess(shows congratulation for 3 seconds), 2) incorrect guess, 3) timeout
// end screen that shows: correct tally, incorrect tally, and unanswered tally.
// start over button that starts new round of questions 

var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var countDown = 30;
var questions = [
    questionA = {
        question: "What is 2 + 2?",
        answer: "4",
        options: {
            line1: "8",
            line2: "4",
            line3: "2",
            line4: "10"
        }
    },
    questionB = {
        question: "What is 2 x 8?",
        answer: "16",
        options: {
            line1: "8",
            line2: "4",
            line3: "16",
            line4: "10"
        }
    }    
]



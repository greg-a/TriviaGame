var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var countDown = 30;
var questions = [
    questionA = {
        question: "What is 2 + 2?",
        answer: "4",
        options: [
            line1 = {
                box: $("<div class='option'>"),
                option: "8"
            },
            line2 = {
                box: $("<div class='option'>"),
                option: "12"
            },
            line3 = {
                box: $("<div class='option'>"),
                option: "4"
            },
            line4 = {
                box: $("<div class='option'>"),
                option: "2"
            },
            
        ]
    },
    questionB = {
        question: "What is 2 x 8?",
        answer: "16",
        options: [
            line1 = {
                box: $("<div class='option'>"),
                option: "8"
            },
            line2 = {
                box: $("<div class='option'>"),
                option: "12"
            },
            line3 = {
                box: $("<div class='option'>"),
                option: "4"
            },
            line4 = {
                box: $("<div class='option'>"),
                option: "0"
            },
            
        ]
    }    
]
var answerInt = 1;

var intervalId;

function nextQuestion() {

    $(".button, h1").remove();
    $(".question").append(questions[answerInt].question);
    $(".countdown").append(countDown);

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    for (var i = 0; i < questions[answerInt].options.length; i++) {
        $(".choices").append(questions[answerInt].options[i].box);
        $(questions[answerInt].options[i].box).addClass("box" + i);
        $(".box" + i).append(questions[answerInt].options[i].option);

    }
}



function decrement() {
    countDown--;

    $(".countdown").html("<h2>" + countDown + "</h2>");

    if (number === 0) {
        
        unansweredQuestions++;
        
      // run wrong answer function

    }
  }

$("#start-button").on("click", function() {
    nextQuestion();
})

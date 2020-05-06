// add more questions 
// style countdown

var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var countDown = 5;
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
                option: "16"
            },
            
        ]
    }    
]
var answerInt = 0;
var intervalId;

function clearPage() {
    $(".button, h2").remove();
    $("h1, .countdown, .question, .choices").empty();
}

function nextQuestion(newQuestion) {

    if (answerInt !== questions.length) {
        startTimer();
        
        $(".countdown").show();
        $(".countdown").html("<h2>" + countDown);
        var newQ = $(".question").append("<div>");
        var newCh1 = $("<div class='option'></div>");
        var newCh2 = $("<div class='option'></div>");
        var newCh3 = $("<div class='option'></div>");
        var newCh4 = $("<div class='option'></div>");

        newQ.append(newQuestion.question);
        newCh1.text(newQuestion.options[0].option);
        newCh2.append(newQuestion.options[1].option);
        newCh3.append(newQuestion.options[2].option);
        newCh4.append(newQuestion.options[3].option);
        $(".choices").append(newCh1);
        $(".choices").append(newCh2);
        $(".choices").append(newCh3);
        $(".choices").append(newCh4);

        $(".option").on("click", function(){
            if (this.textContent === questions[answerInt].answer) {
                correctAnswer();
            }
            else {
                wrongAnswer();
            }
        })
        
    }
    else {
        // create page that shows totals and button to restart
        $("h1").text("Your Stats");
        $(".countdown").text("Correct: " + correctGuesses);
        $(".question").text("Wrong: " + incorrectGuesses);
        $(".choices").text("Timed Out: " + unansweredQuestions);
    }
}

function startTimer() {
    intervalId = setInterval(decrement, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
    $(".countdown").empty();
}

function decrement() {
    
    countDown--;
    $(".countdown").html("<h2>" + countDown + "</h2>");
    

    // if (countDown === 0) {
    //     stopTimer();
    //     clearPage();  
    //     $("h1").text("Time is up!");
    //     $(".question").append("The correct answer was: " + questions[answerInt].answer);
    //     unansweredQuestions++;
    //     answerInt++;
    //     setTimeout(function() {
    //         countDown = 5;
    //         clearPage();
    //         nextQuestion(questions[answerInt]);
    //     }, 3000);
    // }
}

function wrongAnswer() {
    stopTimer();
    $(".option").remove();
    $(".question").empty();
    $("h1").append("Wrong Answer");
    $(".question").append("The correct answer was: " + questions[answerInt].answer);
    incorrectGuesses++;
    answerInt++;
    setTimeout(function() {
        countDown = 5;
        clearPage();
        nextQuestion(questions[answerInt]);
    }, 3000);
}

function correctAnswer() {
    stopTimer();
    $(".option").remove();
    $(".question").empty();
    clearInterval(intervalId);
    $(".countdown").append("That's Correct!");
    correctGuesses++;
    answerInt++;
    setTimeout(function() {
        countDown = 5;
        clearPage();
        nextQuestion(questions[answerInt]);
    }, 3000);
}

$(".button").on("click", function() {
    clearPage();
    nextQuestion(questions[answerInt]);
})
    


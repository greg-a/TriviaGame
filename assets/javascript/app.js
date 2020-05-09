var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var countDown = 10;
var questions = [
    questionA = {
        question: "In which American city does Ferris Beuller’s Day Off take place??",
        answer: "Chicago",
        options: ["Philadelphia", "New York", "Boston", "Chicago"],
        pic: [$("<img src='assets/images/bueller.gif' style='width:250px; height:150px'>"), $("<img src='assets/images/saveferris.jpg' style='width:250px; height:150px'>")]
    },
    questionB = {
        question: "What type of business did Annie have that failed in Bridesmaids?",
        answer: "Bakery",
        options: ["Bakery", "Subway", "Gift Shop", "Landscaping"],
        pic: [$("<img src='assets/images/wiig.jpg' style='width:250px; height:150px'>"), $("<img src='assets/images/sorry.jpg' style='width:250px; height:150px'>")]
    },
    questionC = {
        question: "What has Jason Bourne lost at the start of The Bourne Ultimatum?",
        answer: "His Memory",
        options: ["His Car", "His Dignity", "His Memory", "His Fighting Skills"],
        pic: [$("<img src='assets/images/bournepic.jpg' style='width:250px; height:150px'>"), $("<img src='assets/images/bourne.gif' style='width:250px; height:150px'>")]
    },
    questionD = {
        question: "Which 1997 film stars Nicolas Cage, John Cusack, and John Malkovich?",
        answer: "Con Air",
        options: ["Con Air", "Face/Off", "Gone in 60 Seconds", "The Rock"],
        pic: [$("<img src='assets/images/niccage.jpg' style='width:250px; height:150px'>"), $("<img src='assets/images/ConAir.jpg' style='width:250px; height:150px'>")]
    }
];
var answerInt = 0;
var intervalId;

function clearPage() {
    $(".button, h2, .header").remove();
    $("h1, .countdown, .question, .choices").empty();
    $(".countdown").hide();
}

function nextQuestion(newQuestion) {

    if (answerInt !== questions.length) {
        startTimer();
        
        $(".countdown").show();
        $(".countdown").html("<h3>" + countDown);
        var newQ = $(".question").append("<div>");
        var newCh1 = $("<div class='option'></div>");
        var newCh2 = $("<div class='option'></div>");
        var newCh3 = $("<div class='option'></div>");
        var newCh4 = $("<div class='option'></div>");

        newQ.append(newQuestion.question);
        newCh1.text(newQuestion.options[0]);
        newCh2.append(newQuestion.options[1]);
        newCh3.append(newQuestion.options[2]);
        newCh4.append(newQuestion.options[3]);
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
                incorrectGuesses++;
                $(".question").html("<h2>Wrong Answer</h2>");
            }
        })
        
    }
    else {
        
        var correctTotal = $("<div>");
        var incorrectTotal = $("<div>");
        var timeTotal = $("<div>");
        var restartButton = $("<div>");

        $(".countdown").hide();
        $(".question").html("<h2>Your Stats</h2>");
        correctTotal.text("Correct: " + correctGuesses);
        incorrectTotal.text("Incorrect: " + incorrectGuesses);
        timeTotal.text("Timed Out: " + unansweredQuestions);
        $(".choices").append(correctTotal);
        $(".choices").append(incorrectTotal);
        $(".choices").append(timeTotal);

        restartButton.addClass("button");
        restartButton.append("<div class='button-text'>Restart</div>");
        restartButton.append("<div class='start-button'></div>");
        $(".question-section").append(restartButton);
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
    $(".countdown").html("<h3>" + countDown + "</h3>");
    

    if (countDown === 0) {
        wrongAnswer();
        unansweredQuestions++;
        $(".question").html("<h2>Time is up!</h2>");
    }
}

function wrongAnswer() {
    stopTimer();
    clearPage();
    $(".option").remove();
    $(".question").empty();    
    $(".choices").append(questions[answerInt].pic[1]);    
    answerInt++;
    setTimeout(function() {
        countDown = 10;
        clearPage();
        nextQuestion(questions[answerInt]);
    }, 3000);
}

function correctAnswer() {
    stopTimer();
    clearPage();
    $(".option").remove();
    $(".question").empty();
    clearInterval(intervalId);
    $(".question").html("<h2>That's Correct!</h2>");
    $(".choices").append(questions[answerInt].pic[0]);
    correctGuesses++;
    answerInt++;
    setTimeout(function() {
        countDown = 10;
        clearPage();
        nextQuestion(questions[answerInt]);
    }, 3000);
}

$(document).on("click", ".button", function() {
    unansweredQuestions = 0;
    correctGuesses = 0;
    incorrectGuesses = 0;
    answerInt = 0;
    clearPage();
    nextQuestion(questions[answerInt]);
})
    


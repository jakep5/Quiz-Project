//Question database
const questions = [
    {
        question: 'Which of the following is the greatest selling artist of all time?',
        option1: 'The Beatles',
        option2: 'Madonna',
        option3: 'Led Zeppelin',
        option4: 'Michael Jackson',
        answer: 'The Beatles',
    },
    {   
        question: 'Which of the following is the greatest selling album of all time?',
        option1: 'Thriller by Michael Jackson',
        option2: 'Rumors by Fleetwood Mac',
        option3: 'Their Greatest Hits by The Eagles',
        option4: 'Back in Black by AC/DC',
        answer: 'Their Greatest Hits by The Eagles',
    },
    {
        question: 'Which of these albums was the best selling of the 90s?',
        option1: 'Millenium by The Backstreet Boys',
        option2: 'Metallica by Metallica',
        option3: 'Jagged Little Pill by Alanis Morissette',
        option4: 'Nevermind by Nirvana',
        answer: 'Metallica by Metallica',
    },
    {
        question: 'Which of the following albums is the best selling so far in the 21st Century?',
        option1: '1 by The Beatles',
        option2: 'Come Away With Me by Norah Jones',
        option3: '21 by Adele',
        option4: 'The Marshall Mathers LP by Eminem',
        answer: 'The Marshall Mathers LP by Eminem'
    },
    {
        question: 'Which of the following is the best selling album by The Beatles?',
        option1: 'Abbey Road',
        option2: 'Sgt. Peppers Lonely Hearts Club Band',
        option3: 'Revolver',
        option4: 'The White album',
        answer: 'Sgt. Peppers Lonely Hearts Club Band',
    },
    {
        question: 'Which of the following bands had the highest number of band members?',
        option1: 'The Beatles',
        option2: 'Queen',
        option3: 'Metallica',
        option4: 'Guns N Roses',
        answer: 'Guns N Roses',
    },
    {
        question: 'Which of the following bands does NOT have a lead singer that also plays the bass?',
        option1: 'Rush',
        option2: 'Kiss',
        option3: 'Led Zeppelin',
        option4: 'The Police',
        answer: 'Led Zeppelin',
    },
    {
        question: 'Which of these bands has two drummers?',
        option1: 'The Beatles',
        option2: 'Blink 182',
        option3: 'The Allman Brothers Band',
        option4: 'Metallica',
        answer: 'The Allman Brothers Band',
    },
    {
        question: 'How many albums have The Beatles sold worldwide?',
        option1: '200 million',
        option2: '90 million',
        option3: '450 million',
        option4: '600 million',
        answer: '600 million',
    },
    {  
        question: 'How many total albums did The Beatles release?',
        option1: '13',
        option2: '10',
        option3: '6',
        option4: '8',
        answer: '13',
    },
    ];

let currentQuestion = 0;
let currentScore = 0;


//Event listeners

$(document).keypress(function(e){
    e.preventDefault();
    if(e.keyCode==13 && ('div.questionDisplay' != null)) {
        $('button.submitAnswer').click();
}});

$(document).on('click', 'button.beginQuiz', function() {
    generateQuestion();
    createLegend();
});

$(document).on('click', 'button.nextQuestion', function() {
    if (currentQuestion < 9) {
        currentQuestion++;
        generateQuestion();
        refreshLegend();
    }
    else {
        currentQuestion++;
        generateResults();
    }
});

$(document).on('click', 'button.takeAgain', function(){
    currentQuestion = 0;
    currentScore = 0;
    generateQuestion();
    refreshLegend ();
})

function createLegend () {
    $('body').append(`
        <div class="quizInfo">
            <p>Your score: ${currentScore} out of 10</p>
            <p>Current question: ${currentQuestion + 1} of 10</p>
        </div>
        `)
};

function refreshLegend () {
    $('.quizInfo').html(`
            <p>Your score: ${currentScore} out of 10</p>
            <p>Current question: ${currentQuestion + 1} of 10</p>
        `)
};

function generateQuestion () {
    let questionCurrent = questions[currentQuestion];
    let questionDisplayed = questionCurrent.question; 
    let optionOneCurrent = questionCurrent.option1;
    let optionTwoCurrent = questionCurrent.option2;
    let optionThreeCurrent = questionCurrent.option3;
    let optionFourCurrent = questionCurrent.option4;
    $('main').html(`
        <div class="questionDisplay">
            <div>
                    <h1 class="questionText">${questionDisplayed}</h1>
                    <form class="options">
                        <fieldset>
                            <label for='optionOne'><input type="radio" name="choice" value="${optionOneCurrent}" required value="1">${optionOneCurrent}</label>
                            <label for='optionTwo'><input type="radio" name="choice" value="${optionTwoCurrent}">${optionTwoCurrent}</label>
                            <label for='optionThree'><input type="radio" name="choice" value="${optionThreeCurrent}">${optionThreeCurrent}</label>
                            <label for='optionFour'><input type="radio" name="choice" value="${optionFourCurrent}">${optionFourCurrent}</label>
                        </fieldset>
                    </form>
            </div>
            <div class="button">
                <button class="submitAnswer" name="submitAnswer">Submit</button>
            </div>
        </div>
    `);
};


function submitResponse() {
    $('.quiz').on('click', '.submitAnswer', function() {
        let questionCurrent = questions[currentQuestion];
        if ($("form.options input:radio:checked").length > 0) {
            if ($('input[name="choice"]:checked').val() === questionCurrent.answer) {
                currentScore++;
                correctResponse();
            }
            else {
                incorrectResponse();
            };
        } else {
            alert("You must pick an option");
        }
})};



function incorrectResponse() {
    let questionCurrent = questions[currentQuestion];
    let correctAnswer = questionCurrent.answer;
    let score = currentScore
    $('main').html(`
        <div class="homescreen">
            <container>
                <div class="feedback">
                        <h1>Incorrect!</h1>
                        <h2>The correct answer was: ${correctAnswer}</h2>
                        <h2>Your score: ${score} out of 10</h2>
                </div>
                <div class="button">
                    <button class="nextQuestion" name="nextQuestion">Next question =></button>
                </div>
            </container>
        </div>
`)};

function correctResponse() {
    let score = currentScore
    $('main').html(`
        <div class="homescreen">
            <container>
                <div class="feedback">
                        <h1>Correct!</h1>
                        <h2>Great job!</h2>
                        <h2>Your score: ${score} out of 10</h2>
                </div>
                <div class="button">
                    <button class="nextQuestion" name="nextQuestion">Next question =></button>
                </div>
            </container>
        </div>
    `)
};

function generateResults () {
    $('main').html(`
        <div class="homescreen">
            <div class="results">
                    <h1>You have completed the quiz!</h1>
                    <h2>Your score: ${currentScore} out of 10!</h2>
            </div>
            <div class="button">
                <button class="takeAgain" name="takeAgain">Take quiz again =></button>
            </div>
        </div>
`)};


function initializePage() {
    submitResponse();
};


$(initializePage());
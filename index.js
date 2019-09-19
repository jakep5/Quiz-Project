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
        answer: 'Their Greatest Hits by the Eagles',
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
    let questionCurrent = questions[currentQuestion];
    let questionDisplayed = questionCurrent.question; 
    let optionOneCurrent = questionCurrent.option1;
    let optionTwoCurrent = questionCurrent.option2;
    let optionThreeCurrent = questionCurrent.option3;
    let optionFourCurrent = questionCurrent.option4;
    let answerCurrent = questionCurrent.answer;
    let currentScore = 0;

$(document).on('click', 'button.nextQuestion', function() {
    currentQuestion++;
    generateQuestion();
});



function generateQuestion () {
    $('button.beginQuiz').click (function() {
        $('main').replaceWith(`
            <div class="questionDisplay">
                <div>
                        <h1 class="questionText">${questionDisplayed}</h1>
                        <form class="options">
                            <input type="radio" name="choice" value="${optionOneCurrent}">${optionOneCurrent}
                            <input type="radio" name="choice" value="${optionTwoCurrent}">${optionTwoCurrent}
                            <input type="radio" name="choice" value="${optionThreeCurrent}">${optionThreeCurrent}
                            <input type="radio" name="choice" value="${optionFourCurrent}">${optionFourCurrent}
                        </form>
                </div>
                <div class="button">
                    <button class="submitAnswer" name="submitAnswer">Submit</button>
                </div>
            </div>
        `);
    });
};


function submitResponse() {
    $('.quiz').on('click', '.submitAnswer', function() {
        if ($('input[name="choice"]:checked').val() === questionCurrent.answer) {
            correctResponse();
            currentScore + 1;
            return currentScore;
        }
        else {
            incorrectResponse();
        };
})};

function incorrectResponse() {
    let correctAnswer = questionCurrent.answer;
    $('div.questionDisplay').replaceWith(`
        <div class="homescreen">
            <container>
                <div class="feedback">
                        <h1>Incorrect!</h1>
                        <h2>The correct answer was: ${correctAnswer}</h2>
                        <h2>Your score: ${currentScore} out of 10</h2>
                </div>
                <div class="button">
                    <button class="nextQuestion" name="nextQuestion">Next question =></button>
                </div>
            </container>
        </div>
`)};

function correctResponse() {
    $('div.questionDisplay').replaceWith(`
        <div class="homescreen">
            <container>
                <div class="feedback">
                        <h1>Correct!</h1>
                        <h2>Great job!</h2>
                        <h2>Your score: 2 out of 10</h2>
                </div>
                <div class="button">
                    <button class="nextQuestion" name="nextQuestion">Next question =></button>
                </div>
            </container>
        </div>
    `)
};




function initializePage() {
    generateQuestion();
    submitResponse();
};


$(initializePage());
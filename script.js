// JavaScript Document
const startButton = document.getElementById('start-btn')Id('question-container')
const suffledQuestions, currentQuestionIndex
yId()''question
const answerButtonElement = document.getElementById()
let suffledQuestions, currentQuestionIndex
startButton 
= addEventListener('click',  startGame)function startGame() {
    console.log('Started'''answer-buttons

)
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function showQuestion(question) {
    questionElement.innerText = question.question 
    question.answers.forEach(answer)
    
}

function selectAnswer() {
    
}

const questions = [
    {
        question: 'What is Blackboards mission statement?', answers: [
            {text: 'Lets advance learning', correct: true}, {text: 'Not sure', correct: false}
        ]
    }
]
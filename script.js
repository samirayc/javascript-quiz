var questions = [
    {
        question: 'What is the correct syntax for referring to an external script called "abc.js"?',
        choices: ['script src="abc.js"', 'script href="abc.js"', 'script name="abc.js"'],
        correct: 0
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        choices: ['-', '=', 'X'],
        correct: 1
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        choices: ['onmouseclick', 'onclick', 'onmouseover'],
        correct: 1
    },
    {
        question: 'Which of the following will write the message "Hello World!" in an alert box?',
        choices: ['alertBox("Hello World!");', 'alert(Hello World!);', 'alert("Hello World!");'],
        correct: 2
    },
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;
  
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
      choice.textContent = questions[currentQuestion].choices[index];
    });
    const response = document.getElementById("response");
    response.textContent = "";
  }
  
  function checkAnswer(selected) {
    const response = document.getElementById("response");
    if (selected === questions[currentQuestion].correct) {
      response.textContent = "Correct!";
      correctAnswers++;
    } else {
      response.textContent = "Incorrect!";
    }
  
    setTimeout(() => {
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        const quizContainer = document.querySelector(".quiz");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
      }
    }, 1000);
  }
  
  showQuestion();
  
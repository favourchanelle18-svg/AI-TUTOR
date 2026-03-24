let currentQuestionIndex = 0;
let score = 0;
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    answer: "Shakespeare"
  },
  // Add more questions here
];

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = ''; // Clear previous options
  
  question.options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.textContent = option;
    optionDiv.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(optionDiv);
  });
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestionIndex];
  const feedback = document.getElementById('feedback');
  
  if (selectedOption === question.answer) {
    score += 10;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Wrong! The correct answer is ${question.answer}.`;
  }

  document.getElementById('score').textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById('feedback').textContent = '';
  } else {
    document.getElementById('question-container').innerHTML = "<p>Quiz Completed!</p>";
    document.getElementById('feedback').textContent = `Your final score is ${score}.`;
  }
}

window.onload = () => {
  displayQuestion();
};

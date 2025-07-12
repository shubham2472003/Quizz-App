const quizData = [
  {
    question: "Which of the following is a client-side language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "JavaScript Object Notation",
    d: "Hyperloop Terminal Machine Language",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheet",
    b: "Creative Style System",
    c: "Computer Styled Sections",
    d: "Colorful Style Sheet",
    correct: "a",
  },
];

let index = 0;
let correct = 0;
const total = quizData.length;

const questionBox = document.getElementById("questionBox");
const options = document.querySelectorAll("input[name='option']");
const submitBtn = document.getElementById("submit");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }

  resetOptions();

  const data = quizData[index];
  questionBox.innerText = `${index + 1}) ${data.question}`;
  document.querySelector("label[for='first']").innerText = data.a;
  document.querySelector("label[for='second']").innerText = data.b;
  document.querySelector("label[for='third']").innerText = data.c;
  document.querySelector("label[for='fourth']").innerText = data.d;
};

const getSelectedAnswer = () => {
  let selected;
  options.forEach((opt) => {
    if (opt.checked) {
      selected = opt.value;
    }
  });
  return selected;
};

const resetOptions = () => {
  options.forEach((opt) => {
    opt.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const data = quizData[index];
  const userAnswer = getSelectedAnswer();

  if (!userAnswer) {
    alert("Please select an option!");
    return;
  }

  if (userAnswer === data.correct) {
    correct++;
  }

  index++;
  loadQuestion();
});

const endQuiz = () => {
  const container = document.getElementById("quizContainer");
  container.innerHTML = `
    <div class="col">
      <h3>Thank you for playing!</h3>
      <p>You scored <strong>${correct}</strong> out of <strong>${total}</strong>.</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    </div>
  `;
};

const restartQuiz = () => {
  index = 0;
  correct = 0;
  location.reload(); // reloads the entire quiz
};

loadQuestion();

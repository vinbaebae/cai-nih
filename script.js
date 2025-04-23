
const questions = [
  { q: "(-7) + (-4)", a: "-11" },
  { q: "(-8) + 5", a: "-3" },
  { q: "6 + (-9)", a: "-3" },
  { q: "3 + (-3)", a: "0" },
  { q: "-10 + 2", a: "-8" },
  { q: "7 + (-4)", a: "3" },
];

let current = 0;
let score = 0;
let lives = 3;

const questionText = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");

function showQuestion() {
  if (lives <= 0 || current >= questions.length) {
    questionText.innerText = lives <= 0 ? "😢 Kamu kehabisan nyawa!" : "🎉 Permainan selesai!";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.innerText = "Main Lagi";
    return;
  }
  answerInput.value = "";
  questionText.innerText = `Soal: ${questions[current].q}`;
  answerInput.style.display = "inline-block";
  submitBtn.style.display = "inline-block";
}

submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();
  if (userAnswer === questions[current].a) {
    score += 10;
    alert("✅ Benar!");
  } else {
    lives -= 1;
    alert(`❌ Salah! Jawaban: ${questions[current].a}`);
  }
  scoreDisplay.innerText = score;
  livesDisplay.innerText = lives;
  current++;
  showQuestion();
});

nextBtn.addEventListener("click", () => {
  if (lives <= 0 || current >= questions.length) {
    score = 0;
    lives = 3;
    current = 0;
    scoreDisplay.innerText = score;
    livesDisplay.innerText = lives;
    submitBtn.style.display = "inline-block";
    answerInput.style.display = "inline-block";
  }
  showQuestion();
});

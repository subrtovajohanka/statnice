let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option");
        btn.addEventListener("click", () => selectOption(btn, index));
        optionsEl.appendChild(btn);
    });
}

function selectOption(button, index) {
    const correct = questions[currentQuestion].answer;
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
    if (index === correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correct].classList.add("correct");
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.textContent = "Výsledek:";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Získal(a) jsi ${score} z ${questions.length} bodů.`;
}

showQuestion();

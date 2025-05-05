let currentQuestion = 0;
let score = 0;
let questions = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function getOkruh() {
    const params = new URLSearchParams(window.location.search);
    return params.get("okruh") || "mikro";
}

function loadQuestions(callback) {
    const okruh = getOkruh();
    document.title = "Test: " + (okruh === "eko" ? "Ekonomie" : "Cestovní ruch");
    const script = document.createElement("script");
    script.src = `questions_${okruh}.js`;
    script.onload = () => {
        questions = window.questions;
        callback();
    };
    document.body.appendChild(script);
}

function showQuestion() {
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;

    optionsEl.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "options-container";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-button");
        btn.addEventListener("click", () => selectOption(btn, index));
        wrapper.appendChild(btn);
    });

    optionsEl.appendChild(wrapper);
}

function selectOption(button, index) {
    const correct = questions[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option-button");

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) {
            btn.classList.add("correct");
        } 
        if (i === index && index !== correct) {
            btn.classList.add("wrong");
        }
    });

    if (index === correct) {
        score++;
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

loadQuestions(() => showQuestion());

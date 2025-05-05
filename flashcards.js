let index = 0;
let flipped = false;
let flashcardEl = document.getElementById("flashcard");

function showFlashcard() {
    flipped = false;
    flashcardEl.textContent = questions[index].question;
}

function flipCard() {
    if (flipped) {
        flashcardEl.textContent = questions[index].question;
    } else {
        flashcardEl.textContent = questions[index].options[questions[index].answer];
    }
    flipped = !flipped;
}

function markKnow(know) {
    if (!know) {
        localStorage.setItem(questions[index].question, "neumim");
    } else {
        localStorage.removeItem(questions[index].question);
    }
    index = (index + 1) % questions.length;
    showFlashcard();
}

showFlashcard();

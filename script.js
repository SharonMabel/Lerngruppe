// script.js
function checkAnswers() {
    const answers = {
        q1: "richtig",
        q2: "richtig"
    };

    let score = 0;
    for (const [key, value] of Object.entries(answers)) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === value) {
            score++;
        }
    }

    document.getElementById("result").innerText = `Du hast ${score} von ${Object.keys(answers).length} richtig!`;
}

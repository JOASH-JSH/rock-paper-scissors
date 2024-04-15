const PLAYERS_SCORE_KEY = "rps-score";

// get computer move
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// checks the current round winner return winner assign number
// 0 -> draw, 1 -> player, 2 -> computer
function checkCurrentRoundWinner(pChoice, cChoice) {
    if (pChoice === cChoice) return 0;
    else if (
        (pChoice === 0 && cChoice === 2) ||
        (pChoice === 1 && cChoice === 0) ||
        (pChoice === 2 && cChoice === 1)
    ) return 1;
    return 2;
}

// check final winner
function checkWinner() {
    const score = JSON.parse(localStorage.getItem(PLAYERS_SCORE_KEY));

    let result = "";

    if (score.player === 5) result = "You Win!!!";
    else if (score.computer === 5) result = "You Lost!!!";

    if (result) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const h2 = document.createElement("h2");
        const button = document.createElement("button");

        div1.setAttribute("class", "flex final-result-box");
        div2.setAttribute("class", "flex result-box");
        h2.setAttribute("id", "header-result-text");
        button.setAttribute("class", "reset-btn");
        button.setAttribute("id", "reset");

        h2.textContent = result;
        button.textContent = "reset";

        div2.appendChild(h2);
        div2.appendChild(button);
        div1.appendChild(div2);

        document.querySelector(".main").appendChild(div1);

        document.querySelector("#reset").addEventListener("click", (e) => {
            e.stopPropagation();
            resetGame();
        });
    }
}

// update score
function updateScore(pScore, cScore) {
    const data = JSON.stringify({ player: pScore, computer: cScore });
    localStorage.setItem(PLAYERS_SCORE_KEY, data);
}

// get score
function getScore() {
    return (
        JSON.parse(localStorage.getItem(PLAYERS_SCORE_KEY)) ?? { player: 0, computer: 0 }
    );
}

// display score
function displayScore(winner, pChoice, cChoice) {
    const resultText1 = document.querySelector("#section-result-text-1");
    const resultText2 = document.querySelector("#section-result-text-2");
    const playerChoice = document.querySelector("#player-choice");
    const computerChoice = document.querySelector("#computer-choice");
    const playerScoreText = document.querySelector("#p-score");
    const computerScoreText = document.querySelector("#c-score");

    const choices = ["rock", "paper", "scissors"];
    const choiceEmoji = ["🪨", "📃", "✂️"];

    if (winner === 0) {
        resultText1.textContent = "Draw!!!";
        resultText2.textContent = `${choices[pChoice]} and ${choices[cChoice]}`;
    } else if (winner === 1) {
        resultText1.textContent = "You win!!!";
        resultText2.textContent = `${choices[pChoice]} beats ${choices[cChoice]}`;
    } else {
        resultText1.textContent = "You lost!!!";
        resultText2.textContent = `${choices[cChoice]} beats ${choices[pChoice]}`;
    }

    playerChoice.textContent = choiceEmoji[pChoice];
    computerChoice.textContent = choiceEmoji[cChoice];

    const score = getScore();

    if (winner === 1) score.player++;
    else if (winner === 2) score.computer++;

    playerScoreText.textContent = score.player;
    computerScoreText.textContent = score.computer;

    updateScore(score.player, score.computer);
}

// reset game
function resetGame() {
    updateScore(0, 0);
    const mainElement = document.querySelector(".main");
    mainElement.remove(mainElement.lastChild);
    location.reload();
}

// start
function gameStart() {
    const choiceButtons = document.querySelector(".choice-buttons-section");

    let score = getScore();

    if (score.player === 5 || score.computer === 5) {
        updateScore(0, 0);
        score = getScore();
    }

    document.querySelector("#p-score").textContent = score.player;
    document.querySelector("#c-score").textContent = score.computer;


    choiceButtons.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = e.target;
        if (target.classList.contains("btn-choice")) {
            const playerChoice = parseInt(target.dataset["value"]);
            const computerChoice = getComputerChoice();
            const currentRoundWinner = checkCurrentRoundWinner(playerChoice, computerChoice);
            displayScore(currentRoundWinner, playerChoice, computerChoice);
            checkWinner();
        }
    });
}

gameStart();

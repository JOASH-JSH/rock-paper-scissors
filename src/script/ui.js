"use strict";

export default class UI {
    constructor() {
        this._mainElem = document.querySelector(".main");
        this._moves = [
            { move: "rock", emoji: "🪨" },
            { move: "paper", emoji: "📃" },
            { move: "scissors", emoji: "✂️" },
        ];
    }

    loadInitialPage() {
        this._mainElem.innerHTML = `
            <div class="round-result-section">
                <p id="round-result-who-won">Select any one from below</p>
                <p id="round-result-who-beats">First to score 5 points wins the game</p>
            </div>
            <div class="players-score-and-move-section">
                <div class="human-score-and-move-inner-section">
                    <p class="player-move human-move">❔</p>
                    <p class="player-score human-score">You: 0</p>
                </div>
                <div class="computer-score-and-move-inner-section">
                    <p class="player-move computer-move">❔</p>
                    <p class="player-score computer-score">Computer: 0</p>
                </div>
            </div>
            <div class="moves-buttons-section">
                <button class="move-button" data-move="0">🪨</button>
                <button class="move-button" data-move="1">📃</button>
                <button class="move-button" data-move="2">✂️</button>
            </div>
        `;
    }

    displayPlayersMove(playersMove) {
        document.querySelector(".human-move").innerText = this._moves[playersMove.human].emoji;
        document.querySelector(".computer-move").innerText = this._moves[playersMove.computer].emoji;
    }

    displayPlayersScore(playersScore) {
        document.querySelector(".human-score").innerText = `You: ${playersScore.human}`;
        document.querySelector(".computer-score").innerText = `Computer: ${playersScore.computer}`;
    }

    displayRoundResult(result, playersMove) {
        let roundResult = "Draw!!!";
        let moveBeatsMove = this._moves[playersMove.human].move + " and " + this._moves[playersMove.computer].move;

        if (result === 1) {
            roundResult = "You win!!!";
            moveBeatsMove = this._moves[playersMove.human].move + " beats " + this._moves[playersMove.computer].move;
        } else if (result === 2) {
            roundResult = "You lost!!!";
            moveBeatsMove = this._moves[playersMove.computer].move + " beats " + this._moves[playersMove.human].move;
        } 

        document.querySelector("#round-result-who-won").innerText = roundResult;
        document.querySelector("#round-result-who-beats").innerText = moveBeatsMove;
    }

    displayFinalResult(finalWinner) {
        const resultText = finalWinner === 1 ? "You Win!!!" : "You Lose!!!";

        const resultBox = document.createElement("div");

        resultBox.classList.add("final-result-dialog-box-container");

        resultBox.innerHTML = `
            <div class="final-result-dialog-box">
                <h2>${resultText}</h2>
                <button id="restart-button">restart</button> 
            </div>
        `;

        this._mainElem.appendChild(resultBox);
    }
}
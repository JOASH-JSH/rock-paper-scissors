"use strict";

import UI from "./ui.js";

export default class Game {
    constructor() {
        this._ui = new UI();
    }

    start() {
        this._ui.loadInitialPage();

        const playersScore = { human: 0, computer: 0 };

        document.querySelector(".moves-buttons-section").addEventListener("click", (event) => {
                if (event.target.classList.contains("move-button")) {
                    const playersMove = this.getPlayersMove(event.target);
                    const roundWinner = this.checkRoundWinner(playersMove);

                    this.updatePlayersScore(roundWinner, playersScore);
                    this._ui.displayRoundResult(roundWinner, playersMove);
                    this._ui.displayPlayersMove(playersMove);
                    this._ui.displayPlayersScore(playersScore);

                    const finalWinner = this.checkFinalWinner(playersScore);

                    if (finalWinner) {
                        this._ui.displayFinalResult(finalWinner);
                        document.getElementById("restart-button").addEventListener("click", this.restart.bind(this));
                    }
                }
            });
    }

    getPlayersMove(target) {
        const human = parseInt(target.dataset["move"]);
        const computer = Math.floor(Math.random() * 3);
        return { human, computer };
    }

    checkRoundWinner(playersMove) {
        if (playersMove.human === playersMove.computer) {
            return 0;
        } else if (
            (playersMove.human === 0 && playersMove.computer === 2) ||
            (playersMove.human === 1 && playersMove.computer === 0) ||
            (playersMove.human === 2 && playersMove.computer === 1)
        ) {
            return 1;
        }
        return 2;
    }

    updatePlayersScore(roundWinner, playersScore) {
        if (roundWinner === 1) {
            playersScore.human++;
        } else if (roundWinner === 2) {
            playersScore.computer++;
        }
    }

    checkFinalWinner(playersScore) {
        if (playersScore.human === 5 || playersScore.computer === 5) {
            return playersScore.human > playersScore.computer ? 1 : 2;
        }
        return null;
    }

    restart() {
        this.start();
    }
}

// return the computer selected (randomly) choice  
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerPicked = Math.floor(Math.random() * 3);
    return choices[computerPicked];
}

// compares the player and computer choices and return the result 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} and ${computerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

// function to start the game 
function playGame() {
    let rounds = 5;

    while (rounds > 0) {
        const validChoices = ["rock", "paper", "scissors"];

        let playerSelection = prompt("Enter your choice ( rock, paper, scissors ).");
        playerSelection = playerSelection.trim().toLowerCase();

        if (validChoices.includes(playerSelection)) {
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            console.log(result);
            rounds--;
        }
    }
}

playGame();

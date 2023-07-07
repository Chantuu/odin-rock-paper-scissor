function getComputerChoice() {
    const choice = Math.round(Math.random() * 2) + 1;

    switch (choice) {
        case 1:
            return 'Rock';

        case 2:
            return 'Paper';

        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Draw Round');
    } else if (playerSelection === 'Rock' && computerSelection == 'Paper') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'Rock' && computerSelection == 'Scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Paper' && computerSelection == 'Rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Paper' && computerSelection == 'Scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'Scissors' && computerSelection == 'Paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Scissors' && computerSelection == 'Rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt(`Round ${i}!\nPlease choose one of these: [Rock, Paper, Scissors]`);
        playerChoice = `${playerChoice.slice(0, 1).toUpperCase()}${playerChoice.slice(1).toLowerCase()}`;
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

game();

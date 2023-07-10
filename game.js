const userChoice = document.querySelector('#userChoice');
const computerChoice = document.querySelector('#computerChoice');
const scoreNode = document.querySelector('#score');
scoreNode.innerText = 0;
let score = 0;

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

function addScore() {
    score += 1;
    scoreNode.innerText = score;
}

function endGame() {
    if (scoreNode.innerText >= 5) {
        score = 0;
        userChoice.innerText = '';
        computerChoice.innerText = '';
        scoreNode.innerText = 0;
        alert('Game finished! Starting again! Thank you for playing!');
    }
}

function playRound(playerSelection, computerSelection) {
    userChoice.innerText = playerSelection;
    computerChoice.innerText = computerSelection;

    if (playerSelection === computerSelection) {
        alert('Draw Round');
    } else if (playerSelection === 'Rock' && computerSelection == 'Paper') {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'Rock' && computerSelection == 'Scissors') {
        addScore();
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === 'Paper' && computerSelection == 'Rock') {
        addScore();
        alert(`You win! ${playerSelection} beats ${computerSelection}`) ;
    } else if (playerSelection === 'Paper' && computerSelection == 'Scissors') {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'Scissors' && computerSelection == 'Paper') {
        addScore();
        alert(`You win! ${playerSelection} beats ${computerSelection}`) ;
    } else if (playerSelection === 'Scissors' && computerSelection == 'Rock') {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    endGame();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    playRound(e.target.innerText, getComputerChoice());
}));


// the computerScore function
/*
use the conditions to play the game 
if the computerChoice is randomly selected to be 1 then it has to return Rock
*/

// the computerScore function
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// the humanScore
function getHumanChoice() {
    let answer = prompt('Rock, Paper, or Scissors?');
    answer = answer.toLowerCase();

    if (answer === 'rock') {
        return 'Rock';
    } else if (answer === 'paper') {
        return 'Paper';
    } else if (answer === 'scissors') {
        return 'Scissors';
    } else {
        return 'Invalid Choice'; // Handling invalid input
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Invalid Choice') {
        console.log("Please enter a valid choice: Rock, Paper, or Scissors.");
        return; // Exit if invalid choice
    }

    if (humanChoice === computerChoice) {
        console.log('A draw!');
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
    } else {
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

  
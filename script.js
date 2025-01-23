// name variables
// Variables to track scores
let humanScore = 0;
let computerScore = 0;

// Get DOM elements
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to update the score display
function updateScore() {
    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}

// Function to play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = 'It\'s a draw!';
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateScore();

    // Check for a winner
    if (humanScore === 5) {
        alert('Congratulations! You won the game!');
        resetGame();
    } else if (computerScore === 5) {
        alert('Game Over! The computer won.');
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    resultDiv.textContent = 'Game reset. Play again!';
}

// Add event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('Rock'));
document.getElementById('paper').addEventListener('click', () => playRound('Paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('Scissors'));

// Initialize the score display
updateScore();

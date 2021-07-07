
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// function to generate a new secret target number
const generateTarget = () => Math.floor( Math.random() * 10);

// function to determine which guess is closest to the target number
const compareGuessues = (humanGuess, computerGuess, secretTarget) => {
    if ( Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess - secretTarget) ) {
        return true;
    } else {
        return false;
    }
};

// function to correctly increase the winner’s score after each round
const updateScore = (winner) => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break;
    }
};

// function to update the round number after each round
const advanceRound = () => {
    currentRoundNumber++
};

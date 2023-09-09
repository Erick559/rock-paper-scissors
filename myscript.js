// Declaring the variables that will handle the random computer choices;
// The choices variable stores all the possible choices in an array;
// The randomChoices variable stores the randomized selection; 

const choices = ['rock', 'paper', 'scissors'];
const randomChoices = Math.floor(Math.random() * choices.length);


// Function to get the computers rendomized choice between rock,paper or scissors://

function getComputerchoice() {
    let computerChoice = choices[randomChoices];

    return computerChoice;
}

// Function that takes the user's choice and the computer's and returns the winner://

function playRound(computerSelection) {
    computerSelection = getComputerchoice();

    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        let winner = 'Computer';
        return `${winner} wins!! Rock beats Scissors.`;
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        winner = 'Computer';
        return `${winner} wins!! Scissors beats Paper.`;
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        winner = 'Computer';
        return `${winner} wins!! Paper beats Rock.`;
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        winner = 'User';
        return `${winner} wins!! Paper beats Rock.`;
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        winner = 'User';
        return `${winner} wins!! Rock beats Scissors.`;
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        winner = 'User';
        return `${winner} wins!! Scissors beats Paper.`;
    } else if (computerSelection == playerSelection) {
        return `Draw!! You both selected ${computerSelection}.`;
    } else {
        console.error('Invalid selection');
    }
}

// The user inserts their preferred move to play: Should be case insensitive;
const playerSelection = prompt("Enter your play:").toLowerCase();

// console.log(playRound(getComputerchoice()));


// A five round game that takes the oneRound function and returns the winner for 5 rounds.
// It has a for loop that has an incremental value `round` that increases to 5 rounds and ends once if reaches 5 rounds.

// function game() {
//     for (let round = 0; round < 5; round++) {
//         const playerSelection = 'paper';

//         const result = playRound(playerSelection);

//         console.log(`Round ${round+1}: ${result}`)
//     }
// }
// playerSelection = 'Paper';
console.log(playRound())
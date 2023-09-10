// Declaring the variables that will handle the random computer choices;
// The choices variable stores all the possible choices in an array;
// The randomChoices variable stores the randomized selection; 

const choices = ['rock', 'paper', 'scissors'];
let userSelection;
let winner;
// const randomChoices = Math.floor(Math.random() * choices.length);


// Function to get the computers randomized choice between rock,paper or scissors://

function getComputerchoice() {
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];

}


// Function that takes the user's choice and the computer's and returns the winner://

function playRound(computerSelection) {
    computerSelection = getComputerchoice();

    if (computerSelection == 'rock' && userSelection == 'scissors') {
        winner = 'Computer';
        return `Oh no!! Computer wins!! Rock beats Scissors.`;
    } else if (computerSelection == 'scissors' && userSelection == 'paper') {
        winner = 'Computer';
        return `We go again!! Computer wins!! Scissors beats Paper.`;
    } else if (computerSelection == 'paper' && userSelection == 'rock') {
        winner = 'Computer';
        return `Try Again! Computer wins!! Paper beats Rock.`;
    } else if (computerSelection == 'rock' && userSelection == 'paper') {
        winner = 'User';
        return `Lets Go! You win!! Paper beats Rock.`;
    } else if (computerSelection == 'scissors' && userSelection == 'rock') {
        winner = 'User';
        return `Okay, I see you! You win!! Rock beats Scissors.`;
    } else if (computerSelection == 'paper' && userSelection == 'scissors') {
        winner = 'User';
        return `Cool!!! You win!! Scissors beats Paper.`;
    } else if (computerSelection == userSelection) {
        return `It's a tie!! ${computerSelection} was selected.`;
    } else {
        return 'Invalid selection';
    }
}


// A five round game that takes the oneRound function and returns the winner for 5 rounds.
// It has a for loop that has an incremental value `round` that increases to 5 rounds and ends once if reaches 5 rounds.

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        userSelection = prompt("Enter your play:").toLowerCase();
        const computerSelection = getComputerchoice(); // Corrected function name
        const result = playRound(userSelection, computerSelection);

        // if (winner === 'Computer') {
        //     computerScore++;
        // } else if (winner === 'User') {
        //     userScore++;
        // } else {
        //     userScore,
        //     computerScore;
        // }

        if (result.includes('Computer wins')) {
            computerScore++;
        } else if (result.includes('You win')) {
            userScore++;
        }

        console.log(`Round ${round + 1}: ${result}: ${computerScore}:${userScore}`);
    }
    if (computerScore > userScore) {
        let overallResult = 'Oh no!! We lost. Try again';
    } else if (userScore > computerScore) {
        overallResult = 'Lets go! We beat the machines';
    } else {
        overallResult = `It's a tie`;
    }
    console.log(overallResult);
}

console.log(game())
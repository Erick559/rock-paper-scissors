// Declaring the variables that will handle the random computer choices;
// The choices variable stores all the possible choices in an array;
// The randomChoices variable stores the randomized selection; 

const choices = ['rock', 'paper', 'scissors'];
let userSelection;

// Select and create the elements that are needed in the playRound() function;

let userChoice = document.querySelector('.user')
let compChoice = document.querySelector('.comp')
let userScore = document.querySelector ('.user-score')
let compScore = document.querySelector ('.comp-score')
let btnRock = document.querySelector('.rock')
let btnScissors = document.querySelector('.scissors')
let btnPaper = document.querySelector('.paper')

// Function to get the computers randomized choice between rock,paper and scissors://

function getComputerchoice() {
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];

}


// Function that takes the user's choice and the computer's and returns the winner://

function playRound(computerSelection) {
    computerSelection = getComputerchoice();

    if (computerSelection == 'rock' && userSelection == 'scissors') {
        return `Oh no!! Computer wins!! Rock beats Scissors.`;

    } else if (computerSelection == 'scissors' && userSelection == 'paper') {
        return `We go again!! Computer wins!! Scissors beats Paper.`;

    } else if (computerSelection == 'paper' && userSelection == 'rock') {
        return `Try Again! Computer wins!! Paper beats Rock.`;

    } else if (computerSelection == 'rock' && userSelection == 'paper') {
        return `Lets Go! You win!! Paper beats Rock.`;

    } else if (computerSelection == 'scissors' && userSelection == 'rock') {
        return `Okay, I see you! You win!! Rock beats Scissors.`;

    } else if (computerSelection == 'paper' && userSelection == 'scissors') {
        return `Cool!!! You win!! Scissors beats Paper.`;

    } else if (computerSelection == userSelection) {
        return `It's a tie!! ${computerSelection} was selected.`;

    } else {
        return 'Invalid selection';
    }
}


// A five round game that takes the oneRound function and returns the winner for 5 rounds.
// It has a for loop that has an incremental value `round` that increases to 5 rounds and ends once it reaches 5 rounds.

// function game() {
//     //Declared two variables that will store the player's scores
//     let userScore = 0;
//     let computerScore = 0;

//     for (let round = 0; round < 5; round++) {
//         userSelection = prompt("Enter your play:").toLowerCase();
//         const computerSelection = getComputerchoice(); // Corrected function name
//         const result = playRound(userSelection, computerSelection);

//         if (result.includes('Computer wins')) {
//             computerScore++;
//         } else if (result.includes('You win')) {
//             userScore++;
//         }

//         console.log(`Round ${round + 1}: ${result}: ComputerScore: ${computerScore}: UserScore: ${userScore}`);
//     }

//     if (computerScore > userScore) {
//         console.log('Oh no!! We lost. Try again');
//     } else if (userScore > computerScore) {
//         console.log('Lets go! We beat the machines');
//     } else {
//         console.log(`Its a tie, We didn't get them this time.`);
//     }
//     console.log(overallResult);
// }

// console.log(game())
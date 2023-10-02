// Declaring the variables that will handle the random computer choices;
// The choices variable stores all the possible choices in an array;
// The randomChoices variable stores the randomized selection; 

const choices = ['rock', 'paper', 'scissors'];
let result;
let playerSelection;
let computerSelection;
let gameWinner;
let computerScore = 0
let playerScore = 0

// Statements that will be appended randomly once the player or computer wins

const compWinningStatements = [
    "The machine triumphs in a symphony of circuits and code!",
    "Algorithms align, victory is mine!",
    "You've been outsmarted by the silicon mind!",
    "In the digital arena, the machine reigns supreme!",
    "Electrons dance, victory's advance!",
    "Error 404: Player's Victory Not Found. Computer dominates!",
    "The computer outwits, outplays, and emerges as the ultimate tactician!"

]

const playerWinningStatements = [
    "Human ingenuity prevails! You are the ultimate strategist!",
    "You've cracked the code and claimed victory! Well played!",
    "A triumph of flesh over circuits! Player wins the day!",
    "In the battle of wits, you stand tall as the champion!",
    "Humanity's brilliance shines through! Player claims victory!",
    "You've unlocked the achievement of strategic supremacy!",
    "Clever moves, brilliant strategy — player, you've conquered!"
]




// Select and create the elements that are needed in the playRound() function;

const playerChoice = document.querySelector('.user')
const compChoice = document.querySelector('.comp')
const userScore = document.querySelector('.user-score')
const compScore = document.querySelector('.comp-score')
const btnChoice = document.querySelectorAll('[data-selection]')
const winner = document.querySelector('.winner')
const spanWinner = document.createElement('span')
const spanCompScore = document.createElement('span')
const spanPlayerScore = document.createElement('span')
const spanCompChoice = document.createElement('span')
const spanPlayerChoice = document.createElement('span')
const btnReset = document.querySelector('#reset')

// Function to get the computers randomized choice between rock,paper and scissors://

function getComputerchoice() {
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];

}

// Event listener that will handle the entire game logic once the buttons are clicked

btnChoice.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.getAttribute('data-selection')
    computerSelection = getComputerchoice();
    result = playRound(playerSelection, computerSelection)



    spanCompChoice.textContent = ` ${computerSelection}`
    spanPlayerChoice.textContent = ` ${playerSelection}`
    playerChoice.appendChild(spanPlayerChoice)
    compChoice.appendChild(spanCompChoice)

    console.log(result)

    if (result.includes('you win')) {
        playerScore++
    } else if (result.includes('you lose')) {
        computerScore++
    }

    spanPlayerScore.textContent = ` ${playerScore}`
    userScore.appendChild(spanPlayerScore)

    spanCompScore.textContent = ` ${computerScore}`
    compScore.appendChild(spanCompScore)

    const winningScore = 5

    if (playerScore == winningScore) {
        gameWinner = getRandomStatement(playerWinningStatements)
        resetScore();
    } else if (computerScore == winningScore) {
        gameWinner = getRandomStatement(compWinningStatements)
        resetScore();
    } else {
        gameWinner = ' '
    }

    spanWinner.textContent = ` ${gameWinner}`
    winner.appendChild(spanWinner)


}))

// Function that determines the winner for each individual round played

function playRound() {
    if (playerSelection === computerSelection) {
        return ('Draw')
    } else if (playerSelection == 'rock') {
        return (computerSelection == 'scissors') ? 'you win' : 'you lose'
    } else if (playerSelection == 'scissors') {
        return (computerSelection == 'paper') ? 'you win' : 'you lose'
    } else if (playerSelection == 'paper') {
        return (computerSelection == 'rock') ? 'you win' : 'you lose'
    }
}

// Function that is intended to reset the game once the the winning score is attained.
// It will be called in the button event handler

function resetScore() {
    playerScore = 0;
    computerScore = 0;

    spanPlayerScore.textContent = ` ${playerScore}`;
    spanCompScore.textContent = ` ${computerScore}`;
    spanWinner.textContent = '';

    // Clear player and computer choices from the DOM

    spanPlayerChoice.textContent = '';
    spanCompChoice.textContent = '';
}

function getRandomStatement(array) {
    const random = Math.floor(Math.random() * array.length)
    return array[random]
}


// This button add functionality to the game by letting a player reset the entire game
btnReset.addEventListener("click", () => resetScore());

// Styles for the newly appended spans

spanCompChoice.style.fontFamily = 'Indie Flower'
spanPlayerChoice.style.fontFamily = 'indie Flower'

spanCompChoice.style.fontSize = '30px'
spanPlayerChoice.style.fontSize = '30px'

spanPlayerScore.style.fontFamily = 'Indie Flower'
spanCompScore.style.fontFamily = 'Indie Flower'

spanPlayerScore.style.fontSize = '40px'
spanCompScore.style.fontSize = '40px'

spanPlayerScore.style.color=='red'
spanCompScore.style.color=='red'
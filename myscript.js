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




// Select and create the elements that are needed in the playRound() function;

let playerChoice = document.querySelector('.user')
let compChoice = document.querySelector('.comp')
let userScore = document.querySelector('.user-score')
let compScore = document.querySelector('.comp-score')
let btnChoice = document.querySelectorAll('[data-selection]')
let winner = document.querySelector('.winner')
let spanWinner = document.createElement('span')
let spanCompScore = document.createElement('span')
let spanPlayerScore = document.createElement('span')
let spanCompChoice = document.createElement('span')
let spanPlayerChoice = document.createElement('span')

// Function to get the computers randomized choice between rock,paper and scissors://

function getComputerchoice() {
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];

}


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

    let winningScore = 5

    if (playerScore == winningScore) {
        gameWinner = 'We beat the computers!!'
    } else if (computerScore == winningScore) {
        gameWinner = 'Computer takes it all!'
    } else {
        gameWinner = ' '
    }

    spanWinner.textContent = ` ${gameWinner}`
    winner.appendChild(spanWinner)
}))

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

spanCompChoice.style.fontFamily = 'Indie Flower'
spanPlayerChoice.style.fontFamily = 'indie Flower'

spanCompChoice.style.fontSize = '30px'
spanPlayerChoice.style.fontSize = '30px'

spanPlayerScore.style.fontFamily == 'Indie Flower'
spanCompScore.style.fontFamily == 'Indie Flower'

spanPlayerScore.style.fontSize == '30px'
spanCompScore.style.fontSize == '30px'

spanPlayerScore.style.color == 'red'
spanCompScore.style.color == 'red'
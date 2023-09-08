// Declaring the variables that will handle the random computer choices;
// The choices variable stores all the possible choices in an array;
// The randomChoices variable stores the randomized selection; 

const choices = ['rock' , 'paper', 'scissors'];
const randomChoices = Math.floor(Math.random() * choices.length);

// Function to get the computers rendomized choice between rock,paper or scissors://

function getComputerchoice(){
    let computerChoice = choices[randomChoices];

    return computerChoice;
}

// Function that takes the user's choice and the computer's and returns the winner://

function oneRound(computerSelection, playerSelection){
    computerSelection = getComputerchoice();

    if (computerSelection == 'rock' && playerSelection == 'scissors'){
        let winner = 'Computer';
        return `${winner} wins!! Rock beats Scissors.`;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        winner = 'Computer';
        return `${winner} wins!! Scissors beats Paper.`;
    }
    else if(computerSelection == 'paper' && playerSelection == 'rock'){
        winner = 'Computer';
        return `${winner} wins!! Paper beats Rock.`;
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper'){
        winner = 'User';
        return `${winner} wins!! Paper beats Rock.`;  
    }
    else if(computerSelection == 'scissors' && playerSelection == 'rock'){
        winner = 'User';
        return `${winner} Rock beats Scissors.`;
    }
    else if(computerSelection == 'paper' && playerSelection == 'scissors'){
        winner = 'User';
        return `${winner} Scissors beats Paper.`;
    }

    else{
        return 'Draw!!'
    }
}

// The user inserts their prefered move to play: 
const playerSelection = 'paper';

console.log(oneRound(getComputerchoice(),playerSelection));



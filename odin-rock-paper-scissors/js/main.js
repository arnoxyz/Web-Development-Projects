console.log("Welcome to Rock, Paper, Scissors:")

// Function that gives a random number 0,1, or 2 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {	
    let choice = getRandomInt(3);
    if (choice === 0) {
        return 'r';
    }
    if (choice === 1) {
        return 'p';
    }
    if (choice === 2) {
        return 's';
    }
}

function getPlayerChoice() {
    let playerChoice = "";

    while (true) {
        let inputText = prompt("Please insert your choice: (R)ock, (P)aper, (S)cissor").toLowerCase();
        if (inputText.includes("rock") || inputText==="r") {
            playerChoice = 'r';
            break;
           }
        if (inputText.includes("paper") || inputText==="p") {
            playerChoice = 'p';
            break;
           }
        if (inputText.includes("scissor") || inputText==="s") {
            playerChoice = 's';
            break;
           }
        console.log("wrong input, try that again...");
        }

    return playerChoice;
    }

function gameLogic(computerChoice, playerChoice) {
    console.log("Computer =" + computerChoice);
    console.log("Player = " + playerChoice);
    if(computerChoice === playerChoice){
        console.log("TIE!");
    } else if((computerChoice === 'r') && (playerChoice === 's')) {
        console.log("KI Win!")
    } else if((computerChoice === 's') && (playerChoice === 'p')) {
        console.log("KI Win!")
    } else if((computerChoice === 'p') && (playerChoice === 'r')) {
        console.log("KI Win!")
    } else { 
        console.log("Player Win!")
    }
}

function main(){
    //let computerChoice = getComputerChoice()
    //let playerChoice = getPlayerChoice()
    //gameLogic(computerChoice, playerChoice)


    // Testing all options:
    gameLogic('r', 'r')
    gameLogic('r', 'p')
    gameLogic('r', 's')

    gameLogic('s', 'r')
    gameLogic('s', 'p')
    gameLogic('s', 's')

    gameLogic('p', 'r')
    gameLogic('p', 'p')
    gameLogic('p', 's')
}


main()

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
            playerChoice = "r";
            break;
           }
        if (inputText.includes("paper") || inputText==="p") {
            playerChoice = "p";
            break;
           }
        if (inputText.includes("scissor") || inputText==="s") {
            playerChoice = "s";
            break;
           }
        console.log("wrong input, try that again...");
        }

    return playerChoice;
    }

function gameLogic(computerChoice, playerChoice) {
    console.log(computerChoice);
    console.log(playerChoice);
    }

let computerChoice = getComputerChoice();
console.log(computerChoice);

let playerChoice = getPlayerChoice();
console.log(playerChoice);

gameLogic(computerChoice, playerChoice);


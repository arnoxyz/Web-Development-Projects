// import module game.logic
import * as gameLogic from "./game.logic.js";

const main = () => {
  console.log("Welcome to Rock, Paper, Scissors:");

  while (true) {
    let computerChoice = gameLogic.getComputerChoice();
    let playerChoice = gameLogic.getPlayerChoice();
    gameLogic.playRound(computerChoice, playerChoice);
  }
};

main();

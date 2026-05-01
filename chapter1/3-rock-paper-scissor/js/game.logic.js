export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getComputerChoice = () => {
  switch (getRandomInt(3)) {
    case 0:
      return "r";
    case 1:
      return "p";
    case 2:
      return "s";
  }
};

export const getPlayerChoice = () => {
  let playerChoice = "";

  while (true) {
    let inputText = prompt(
      "Please insert your choice: (R)ock, (P)aper, (S)cissor"
    ).toLowerCase();

    if (inputText.includes("rock") || inputText === "r") {
      playerChoice = "r";
      break;
    }
    if (inputText.includes("paper") || inputText === "p") {
      playerChoice = "p";
      break;
    }
    if (inputText.includes("scissor") || inputText === "s") {
      playerChoice = "s";
      break;
    }
    console.log("wrong input, try that again...");
  }

  return playerChoice;
};

export default playRound = (playerChoice, computerChoice) => {
  console.log("Computer = " + computerChoice);
  console.log("Player = " + playerChoice);

  if (computerChoice === playerChoice) {
    console.log("TIE!");
    return "T";
  } else if (computerChoice === "r" && playerChoice === "s") {
    console.log("Player Lose!");
    return "L";
  } else if (computerChoice === "s" && playerChoice === "p") {
    console.log("Player Lose!");
    return "L";
  } else if (computerChoice === "p" && playerChoice === "r") {
    console.log("Player Lose!");
    return "L";
  } else {
    console.log("Player Win!");
    return "W";
  }
};

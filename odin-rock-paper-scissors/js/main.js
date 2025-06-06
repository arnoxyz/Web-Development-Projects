console.log("Hello World!")
let computerChoice

// Function that gives a random number 0,1, or 2 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// returns computerChoide
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

console.log(getComputerChoice());

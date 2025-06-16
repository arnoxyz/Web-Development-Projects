function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF) .toString(16) .padStart(6, '0');
    return `#${hex}`;
}

function createBoard(lines) {
    for (let i = 0; i < lines; i++){
        const element = document.getElementById("game-board");
        const newDiv = document.createElement("div");
        newDiv.textContent = "";
        newDiv.style.padding = "0px";
        newDiv.style.margin = "0px";
        newDiv.className = "game-board-line";
        element.append(newDiv);
   }

   createBoardElements(lines);
}

function makeOpacityFader() {
  let step = 1;
  return function() {
    const alpha = Math.max(0, (10 - step) / 10);
    step++;
    return `rgba(255, 255, 255, ${alpha.toFixed(1)})`;
  };
}


function createBoardElements(elementsPerLine) {
    const elements = Array.from(document.getElementsByClassName("game-board-line"));

    elements.forEach(element => {    
        for (let i = 0; i < elementsPerLine; i++){
            const newDiv = document.createElement("div");
            newDiv.textContent = "";
            newDiv.style.padding = "10px";
            newDiv.style.margin = "0px";
            newDiv.className = "game-board-element";
            newDiv.style.background = document.getElementById("board-color").value;
            element.append(newDiv);

            const fadedColor = makeOpacityFader();
            //Set background to defined color
            newDiv.addEventListener("mouseenter", () => {

            newDiv.style.background = fadedColor(); 
            //Random Color Mode:
                //Check if random color is ticked
                //newDiv.style.background = getRandomColor();

            //Normal Color Mode:
                //newDiv.style.background = document.getElementById("pen-color").value;
            });
        }
    });
}

function initBoard(boardSize) {
    const btn = document.getElementById("btn-gen-board");
    btn.addEventListener("click", () => {
        // remove old board
        removeBoard();
        const input = document.getElementById("input-board-size");
        const boardSize = input.value;
        createBoard(boardSize);
    });
}

function removeBoard() {
    const board = document.getElementById("game-board");
    board.innerHTML = "";
}

function main(){
    // creates Board when websites loads for the first time
    createBoard(16);
    // add eventListener and removes the old board when btn is clicked
    initBoard();
}

main();

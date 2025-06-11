

function createBoard(lines) {
    for (let i = 0; i < lines; i++){
        const element = document.getElementById("game-board");
        const newDiv = document.createElement("div");
        newDiv.textContent = "";
        newDiv.style.backgroundColor = "black";
        newDiv.style.padding = "0px";
        newDiv.style.margin = "0px";
        newDiv.className = "game-board-line";
        element.append(newDiv);
   }

   createBoardElements(lines);
}

function createBoardElements(elementsPerLine) {
    const elements = Array.from(document.getElementsByClassName("game-board-line"));

    elements.forEach(element => {    
        for (let i = 0; i < elementsPerLine; i++){
            const newDiv = document.createElement("div");
            newDiv.textContent = "";
            newDiv.style.backgroundColor = "red";
            newDiv.style.padding = "10px";
            newDiv.style.margin = "0px";
            newDiv.className = "game-board-element";
            element.append(newDiv);
        }
    });
}


function main(){
    // Init-Board
    createBoard(16);
}

main();


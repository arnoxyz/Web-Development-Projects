let toggle = false;

const gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    //Board Cells:
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function setCell(index, player) {
        if (index >= 0 && index < 9 && board[index] === "") {
            board[index] = player;
            return true;
        }
        return false;
    }

    function getBoard() {
        return [...board]; // return a copy to prevent external mutation
    }

    function resetBoard() {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    function renderBoard() {
        console.clear();
        console.log(`
            ${board[0] || "_"} | ${board[1] || "_"} | ${board[2] || "_"}
            ${board[3] || "_"} | ${board[4] || "_"} | ${board[5] || "_"}
            ${board[6] || "_"} | ${board[7] || "_"} | ${board[8] || "_"}
        `);
    }

    function checkWinner(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    return {
        setCell,
        getBoard,
        resetBoard,
        renderBoard,
        checkWinner
    };
})();

function createUIBoard(){
    const mainDiv = document.getElementById("main");
    //Board Cells:
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8
    for (let i = 0; i <= 8; i++) {
        mainDiv.appendChild(createElement(i));
    }
}

function createElement(number){
    const newElement= document.createElement('button');
    newElement.className = 'board';
    newElement.id = number;
    newElement.innerText = " ";

    newElement.addEventListener("click", (e) => handleClick(e));
    return newElement;
}

function handleClick(e){
    if (e.currentTarget.textContent.trim() === ""){
        toggle = !toggle;
        const current = toggle ? "X" : "O";

        e.currentTarget.textContent = current;
        gameBoard.setCell(e.currentTarget.id, current);
        gameBoard.renderBoard();
    }

}


function main(){
    createUIBoard();
}

main();

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

    const row0 = document.createElement('div');
    row0.id = row0;
    row0.appendChild(createDiv(0));
    row0.appendChild(createDiv(1));
    row0.appendChild(createDiv(2));

    const row1 = document.createElement('div');
    row1.id = row0;
    row1.appendChild(createDiv(3));
    row1.appendChild(createDiv(4));
    row1.appendChild(createDiv(5));

    const row2 = document.createElement('div');
    row2.id = row0;
    row2.appendChild(createDiv(6));
    row2.appendChild(createDiv(7));
    row2.appendChild(createDiv(8));

    mainDiv.appendChild(row0);
    mainDiv.appendChild(row1);
    mainDiv.appendChild(row2);
}

function createDiv(number){
    const div = document.createElement('div');
    div.textContent = number;
    div.className = 'board';
    div.id = number;
    return div;
}


function main(){
    createUIBoard();

    //test1
    gameBoard.setCell(0, "X");
    gameBoard.setCell(4, "X");
    gameBoard.setCell(8, "X");
    gameBoard.renderBoard();
    console.log(gameBoard.checkWinner("X"));
    console.log(gameBoard.checkWinner("O"));

    //test2
    gameBoard.resetBoard();
    gameBoard.setCell(0, "O");
    gameBoard.setCell(1, "O");
    gameBoard.setCell(2, "O");
    gameBoard.renderBoard();
    console.log(gameBoard.checkWinner("X"));
    console.log(gameBoard.checkWinner("O"));

    //test3
    gameBoard.resetBoard();
    gameBoard.setCell(0, "O");
    gameBoard.setCell(1, "X");
    gameBoard.setCell(2, "O");
    gameBoard.renderBoard();
    console.log(gameBoard.checkWinner("X"));
    console.log(gameBoard.checkWinner("O"));
}

main();

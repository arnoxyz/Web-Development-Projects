const gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

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

    return {
        setCell,
        getBoard,
        resetBoard,
        renderBoard
    };
})();



function main(){
    gameBoard.setCell(0, "X");
    gameBoard.setCell(4, "O");
    gameBoard.setCell(8, "X");
    gameBoard.renderBoard();
}

main();

const gameContainer = document.getElementById('game-container');
const sizeButton = document.getElementById('set-size');
const resetButton = document.getElementById('reset');
const root = document.querySelector(":root");

var gameRows = 16;
var fillColor = 'blue';
var cellSize = "24px";

function setBoardSize() {
    gameContainer.innerHTML = "";
    let i = 0;
    cellSize = (`${(Math.floor(800 / gameRows) - 2).toString()}px`);
    console.log(cellSize);
    root.style.setProperty("--colWidth", cellSize)
    root.style.setProperty("--colNum", gameRows);
    while (i < (gameRows * gameRows)) {
        let currentDiv = document.createElement("div");
        currentDiv.classList.add("cell");
        gameContainer.appendChild(currentDiv);
        ++i;
    }
    let cells = document.querySelectorAll(".cell");
    let cellNumber = 0;
    for (let cell of cells) {
        let cellID = ("cell-number-" + cellNumber)
        cell.setAttribute("id", cellID);
        let currentCell = document.getElementById(cellID);
        cell.addEventListener("mouseover", function
            colorCell() { currentCell.classList.add("colored"); });
        ++cellNumber;
    }
}

function getBoardSize() {
    let userInput = parseInt(prompt("How many cells across should the board be?", "16"));
    if ((userInput <= 64) && (userInput >= 1)){
        gameRows = userInput;
        setBoardSize();
    }
}

resetButton.addEventListener("click", setBoardSize);
sizeButton.addEventListener("click", getBoardSize);


setBoardSize()

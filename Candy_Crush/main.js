var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;

var currTile;
var otherTile;

window.onload = function () {
    startGame();
    window.setInterval(function () {
        crushCandy();
        slideCandy();
        generateCandy();
    }, 100);
};

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)];
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}

function dragStart(event) {
    currTile = this;
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
}

function dragLeave(event) {}

function dragDrop(event) {
    otherTile = this;
}

function dragEnd(event) {
    if (!currTile || !otherTile) return;

    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    let curCord = currTile.id.split("-");
    let r = parseInt(curCord[0]);
    let c = parseInt(curCord[1]);

    let otherCord = otherTile.id.split("-");
    let r2 = parseInt(otherCord[0]);
    let c2 = parseInt(otherCord[1]);

    let moveLeft = c2 == c - 1 && r == r2;
    let moveRight = c2 == c + 1 && r == r2;
    let moveUp = r2 == r - 1 && c == c2;
    let moveDown = r2 == r + 1 && c == c2;

    let isAdjacent = moveDown || moveRight || moveUp || moveLeft;

    if (isAdjacent) {
        let curImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = curImg;

        if (!checkValid()) {
            currTile.src = curImg;
            otherTile.src = otherImg;
        }
    }
}

function crushCandy() {
    let crushed = crushThree() || crushFour() || crushFive() || crushLShape();
    if (crushed) {
        score += crushed;
        document.getElementById("score").innerText = score;
    }
}

function crushThree() {
    let crushed = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];

            if (
                candy1.src == candy2.src &&
                candy2.src == candy3.src &&
                !candy1.src.includes("blank")
            ) {
                candy1.src = candy2.src = candy3.src = "./images/blank.png";
                crushed++;
            }
        }
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];

            if (
                candy1.src == candy2.src &&
                candy2.src == candy3.src &&
                !candy1.src.includes("blank")
            ) {
                candy1.src = candy2.src = candy3.src = "./images/blank.png";
                crushed++;
            }
        }
    }
    return crushed;
}

function crushFour() {
    let crushed = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            let candy4 = board[r][c + 3];

            if (
                candy1.src == candy2.src &&
                candy2.src == candy3.src &&
                candy3.src == candy4.src &&
                !candy1.src.includes("blank")
            ) {
                candy1.src = candy2.src = candy3.src = candy4.src = "./images/blank.png";
                crushed++;
            }
        }
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            let candy4 = board[r + 3][c];

            if (
                candy1.src == candy2.src &&
                candy2.src == candy3.src &&
                candy3.src == candy4.src &&
                !candy1.src.includes("blank")
            ) {
                candy1.src = candy2.src = candy3.src = candy4.src = "./images/blank.png";
                crushed++;
            }
        }
    }
    return crushed;
}

function crushFive() {
    let crushed = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 4; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            let candy4 = board[r][c + 3];
            let candy5 = board[r][c + 4];

            if (
                candy1.src == candy2.src &&
                candy2.src == candy3.src &&
                candy3.src == candy4.src &&
                candy4.src == candy5.src &&
                !candy1.src.includes("blank")
            ) {
                candy1.src = candy2.src = candy3.src = candy4.src = candy5.src = "./images/blank.png";
                crushed++;
            }
        }
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 4; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            let candy4 = board[r + 3][c];
            let candy5 = board[r + 4][c];

            if (
                candy1.src == candy2.src &&
                candy2.src == candy3.src &&
                candy3.src == candy4.src &&
                candy4.src == candy5.src &&
                !candy1.src.includes("blank")
            ) {
                candy1.src = candy2.src = candy3.src = candy4.src = candy5.src = "./images/blank.png";
                crushed++;
            }
        }
    }
    function crushLShape() {
        // Placeholder for L-shaped match detection logic
        return
    return crushed;
}
// 
// function crushLShape() {
//     // Placeholder for L-shaped match detection logic
//     return 0;
function slideCandy() {
    for (let c = 0; c < columns; c++) {
        let ind = rows - 1;
        for (let r = rows - 1; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;
                ind -= 1;
            }
        }
        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./images/blank.png";
        }
    }
}

function generateCandy() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c].src.includes("blank")) {
                board[r][c].src = "./images/" + randomCandy() + ".png";
            }
        }
    }
}

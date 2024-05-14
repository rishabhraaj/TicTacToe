let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let displayWin = document.querySelector("#display-win");
let newGameBtn = document.querySelector("#new-game-btn");


let turnO = true;//player X, player O

//store all the wimming patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {

        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val == pos3Val) {
                displayWinner(pos1Val);
                resetBtn.innerText = "New Game";
            }
        }
    }
}

const displayWinner = (winner) => {
    displayWin.innerHTML = `Congrats, the winner is "${winner}".`;
    displayWin.classList.remove("hide");
    disabledBtns();
}

const disabledBtns = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}



resetBtn.addEventListener("click", () => {
    resetBtn.innerText = "Reset Game";
    turnO = true;
    for (box of boxes) {
        box.innerText = '';
        box.disabled = false;
        displayWin.classList.add("hide");
    }

})

var x = document.querySelectorAll(".btn1");
var resetBtn = document.querySelector(".resetbtn");
var turnO = true;

const winningpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

x.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO) {
            btn.innerText = "O";
            btn.disabled = true;
            turnO = false;
        } else {
            btn.innerText = "X";
            btn.disabled = true;
            turnO = true;
        }
        checkwinner();
    });
});

function checkwinner() {
    for (let pattern of winningpattern) {
        let pos1val = x[pattern[0]].innerText;
        let pos2val = x[pattern[1]].innerText;
        let pos3val = x[pattern[2]].innerText;

        if (pos1val && pos2val && pos3val) {
            if (pos1val === pos2val && pos2val === pos3val) {
                alert(`Winner is ${pos1val}!`);
                disableAllButtons();
            }
        }
    }
}

function disableAllButtons() {
    x.forEach((btn) => btn.disabled = true);
}


resetBtn.addEventListener("click", () => {
    x.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
    });
    turnO = true; 
});

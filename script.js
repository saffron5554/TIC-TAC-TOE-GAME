let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let resultMsg = document.querySelector(".result-msg");
let msg = document.querySelector("#msg");
let turnX = true;
let count = 0;//to track draw
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX===true){
            box.innerText = "X";
            turnX=false;  
            }
        else{
            box.innerText = "O";
            turnX=true;
            }
            box.disabled=true;
            count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw,Try again`;
    resultMsg.classList.remove("hide");
    disableboxes();
  };
const disableboxes =() => {
    for (let box of boxes) {
        box.disabled = true; 
    }
}
const enableBoxes =() => {
    for (let box of boxes) {
        box.disabled = false; 
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is Player "${winner}"`;
    resultMsg.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        
        if(pos1Value !=""&& pos2Value !=""&& pos3Value !=""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value);
                return true;
            }
        }
    }
};
const resetGame = () => {
    turnX - true;
    count = 0;
    enableBoxes();
    resultMsg.classList.add("hide");
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
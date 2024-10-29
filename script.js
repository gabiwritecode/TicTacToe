// 設定玩家組合
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let player = "x";
const cells = document.querySelectorAll(".cell");
const overlay = document.querySelector(".overlay");
const restartButton = document.querySelector(".restart-button");
const message = document.querySelector(".message");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      cell.classList.add(player);
    }
    if (winningGame()) {
      endGame(`${player} Wins the game!`);
    } else if (checkDraw()) {
      endGame("It's a draw");
    } else {
      player = player === "x" ? "o" : "x";
    }
  });
  cell.addEventListener("mouseenter", () => {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      cell.setAttribute("data-player", player);
    }
  });
  cell.addEventListener("mouseleave", () => {
    cell.removeAttribute("data-player");
  });
});
function winningGame() {
  // 要使用some來返回布林值
  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return (
      cells[a].classList.contains(player) &&
      cells[b].classList.contains(player) &&
      cells[c].classList.contains(player)
    );
  });
}
function restartGame() {
  cells.forEach((cell) => {
    cell.classList.remove("x", "o");
  });
  player = "x";
  overlay.style.display = "none";
}
restartButton.addEventListener("click", restartGame);
// 用every檢查平手
function checkDraw() {
  return [...cells].every(
    (cell) => cell.classList.contains("x") || cell.classList.contains("o")
  );
}
function endGame(resultMessage) {
  overlay.style.display = "flex";
  message.innerHTML = resultMessage;
}

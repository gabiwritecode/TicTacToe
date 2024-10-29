let player = "x";
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      cell.classList.add(player);
    }
    player = player === "x" ? "o" : "x";
  });
  cell.addEventListener("mouseenter", () => {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      cell.setAttribute("data-player", player);
    }
    cell.addEventListener("mouseleave", () => {
      cell.removeAttribute("data-player");
    });
  });
});

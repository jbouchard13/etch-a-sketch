const gridContainerEl = document.querySelector(".grid-container");
const clearBtnEl = document.querySelector(".clearBtn");
let inputSquareCount = 0;
let squareCount = 4096;
let divArray = [];
const createGrid = (squareCount) => {
  for (let i = 0; i < squareCount; i++) {
    let div = document.createElement("div");
    div.classList = "div-grid";
    div.addEventListener("mouseover", (e) => {
      e.target.classList.add("hover");
    });
    divArray.push(div);
    gridContainerEl.appendChild(div);
  }
};

const handleClear = () => {
  divArray.forEach((div) => {
    div.classList.remove("hover");
  });
};

clearBtnEl.addEventListener("click", () => {
  console.log("clear");
  handleClear();
});

createGrid(squareCount);

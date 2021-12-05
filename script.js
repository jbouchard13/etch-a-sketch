const gridContainerEl = document.querySelector(".grid-container");
const clearBtnEl = document.querySelector(".clear-btn");
const squareCountEl = document.querySelector("#boxSelect");
const createBtnEl = document.querySelector("#createBtn");
const modalContainerEl = document.querySelector(".modal-container");
let squareCount = squareCountEl.value * squareCountEl.value;

let divArray = [];

const closeModal = () => {
  modalContainerEl.classList.add("hide-modal");
};

const openModal = () => {
  modalContainerEl.classList.remove("hide-modal");
};

const createGrid = (squareCount) => {
  closeModal();
  // set the column template style to the square count
  gridContainerEl.style.gridTemplateColumns = `repeat(${squareCountEl.value}, auto)`;
  // create the amount of divs required to build the grid
  for (let i = 0; i < squareCount; i++) {
    let div = document.createElement("div");
    // add the default white background (div-grid)
    div.classList = "div-grid";
    // add hover listener to each div
    // changes background to black when hovered over
    div.addEventListener("mouseover", (e) => {
      e.target.classList.add("hover");
    });
    // push each div to an array to be used when clearing
    divArray.push(div);
    // attach each dive to the grid container
    gridContainerEl.appendChild(div);
  }
};

const handleClear = () => {
  // remove the hover class from each div
  divArray.forEach((div) => {
    div.classList.remove("hover");
  });
};

const clearOldGrid = () => {
  // create an array from the nodes to be removed
  let toBeCleared = Array.from(document.querySelectorAll(".div-grid"));
  // for the length of the array
  // delete each child from the grid container
  for (let i = 0; i < toBeCleared.length; i++) {
    gridContainerEl.removeChild(toBeCleared[i]);
  }
};

clearBtnEl.addEventListener("click", () => {
  openModal();
  // set all backgrounds back to white
  handleClear();
});

createBtnEl.addEventListener("click", () => {
  // set the squareCount to the new value from input
  squareCount = squareCountEl.value * squareCountEl.value;
  // clear the old grid before creating a new one
  clearOldGrid();
  createGrid(squareCount);
});

// on page load create a grid with a default 64x64 grid
// createGrid(squareCount);

// when the create button is clicked
// the div array will be emptied
// original grid items will be removed from the page
// new grid will be created
// populated by the specified number of divs squared

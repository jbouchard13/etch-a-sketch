const gridContainerEl = document.querySelector(".grid-container");
const clearBtnEl = document.querySelector(".clear-btn");
const squareCountEl = document.querySelector("#boxSelect");
const createBtnEl = document.querySelector("#createBtn");
const modalContainerEl = document.querySelector(".modal-container");
const rainbowBtnEl = document.querySelector(".color-btn");
const shaderBtnEl = document.querySelector(".shader-btn");
let squareCount = squareCountEl.value * squareCountEl.value;

let colorArray = ["red", "orange", "yellow", "green", "cyan", "blue", "violet"];

let op = 0.0;

let divArray = [];
let rainbowActive = false;
let shaderActive = false;

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
      // determine how to color the tiles depending on which button is selected
      if (rainbowActive === false) {
        e.target.style.background = "black";
      } else if (rainbowActive === true) {
        e.target.style.background =
          colorArray[Math.floor(Math.random() * colorArray.length)];
      }
      // non working shader code
      // if (shaderActive === true) {
      //   e.target.classList.add("shader");
      //   e.target.style.opacity = 0.1;
      //   if (e.target.style.opacity === e.target.style.opacity) {
      //     let originalOpacity = window
      //       .getComputedStyle(e.target)
      //       .getPropertyValue("opacity");
      //     let parsedOriginal = parseFloat(originalOpacity);
      //     parsedOriginal = parsedOriginal + 0.1;
      //     e.target.style.opacity = parsedOriginal + 0.1;
      //     console.log(parsedOriginal + 0.1);
      //   }
      // }
      // if (shaderActive === false) {
      //   e.target.classList.remove("shader");
      // }
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
    div.style.background = "white";
    div.style.opacity = 0;
    rainbowActive = false;
    rainbowBtnEl.classList.remove("held");
    shaderActive = false;
    shaderBtnEl.classList.remove("held");
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

rainbowBtnEl.addEventListener("click", () => {
  if (rainbowActive === false) {
    rainbowActive = true;
    rainbowBtnEl.classList.add("held");
    return true;
  } else if (rainbowActive === true) {
    rainbowActive = false;
    rainbowBtnEl.classList.remove("held");
    return false;
  }
});

shaderBtnEl.addEventListener("click", () => {
  if (shaderActive === false) {
    shaderActive = true;
    shaderBtnEl.classList.add("held");
    return true;
  } else if (shaderActive === true) {
    shaderActive = false;
    shaderBtnEl.classList.remove("held");
    return false;
  }
});

// on page load create a grid with a default 64x64 grid
// createGrid(squareCount);

// when the create button is clicked
// the div array will be emptied
// original grid items will be removed from the page
// new grid will be created
// populated by the specified number of divs squared

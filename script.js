const gridContainer = document.querySelector(".grid-container");

let squareCount = 1024;

for (let i = 0; i < squareCount; i++) {
  let div = document.createElement("div");
  div.classList = "div-grid";
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
  gridContainer.appendChild(div);
}

/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("TileCell");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Oändlig smärta";
    nameElement.appendChild(objectEl);

    let squareEl = document.createElement("div");
    squareEl.className = 'Square';
    nameElement.appendChild(squareEl);
}

example();


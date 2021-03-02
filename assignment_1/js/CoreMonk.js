/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("CoreMonk");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Pog Champ";
    nameElement.appendChild(objectEl);
}

example();


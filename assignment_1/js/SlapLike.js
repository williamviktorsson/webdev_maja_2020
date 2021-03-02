/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("SlapLike");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Elton > Axel";
    nameElement.appendChild(objectEl);
}

example();


/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("DebtMess");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Example :)";
    nameElement.appendChild(objectEl);
}

example();


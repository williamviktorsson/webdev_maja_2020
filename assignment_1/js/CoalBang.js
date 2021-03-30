/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("CoalBang");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "hej isak :)";
    nameElement.appendChild(objectEl);
}

example(); 


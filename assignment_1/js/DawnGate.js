/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("DawnGate");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Example :)";
    nameElement.appendChild(objectEl);

    let cubeEl = document.createElement("div");
    cubeEl.className = "cubeEl";
    cubeEl.style.height = "70px";
    cubeEl.style.width = "70px";
    cubeEl.style.backgroundColor = "red";
    nameElement.appendChild(cubeEl);

    let button = document.createElement("button");
    button.textContent = "click";
    let buttonClick = function() {
        cubeEl.style.backgroundColor = "green";
    };
    button.addEventListener("click", buttonClick);
    nameElement.appendChild(button);

} 

example();
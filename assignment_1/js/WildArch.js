/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("WildArch");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Joe mama :)";
    nameElement.appendChild(objectEl);
    let triangleEl = document.createElement("div")
    triangleEl.className = "Triangle-up"
    nameElement.appendChild(triangleEl);
    let buttonEl = document.createElement("button")
    buttonEl.className = "button"
    nameElement.appendChild(buttonEl)

}

example();


function buttonfunction(buttonEl){
    
    onclick = document.getElementById(triangleEl).style.color = 'blue';
    
    



}




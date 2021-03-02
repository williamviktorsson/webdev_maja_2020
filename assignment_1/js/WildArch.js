/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("WildArch");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Assigment 1 :)";
    nameElement.appendChild(objectEl);
    let triangleEl = document.createElement("div")
    triangleEl.className = "Triangle-up"
    triangleEl.id = "unaiTriangle"
    nameElement.appendChild(triangleEl);
    let buttonEl = document.createElement("button")
    buttonEl.className = "button"
    buttonEl.onclick = buttonfunction;
    nameElement.appendChild(buttonEl)

  
 
    

}

example();





function buttonfunction(){
   
    let triangleEl = document.getElementById("unaiTriangle")
    triangleEl.className = "Triangle-up2"
    
    
}


/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("RootBend");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Bamses bananer";
    nameElement.appendChild(objectEl);

     //cirkel
     let cirkel = document.createElement("div")
     cirkel.className = "Cirkel"
 
     //button
     let button = document.createElement("button")
     button.textContent = "Byt frukt"
     let buttonClick = function() {
        objectEl.textContent="Bamses päron";
         
     };
     button.addEventListener("click", buttonClick)
     nameElement.appendChild(cirkel)
    nameElement.appendChild(button)
 
}

    example()

    
        
        

    
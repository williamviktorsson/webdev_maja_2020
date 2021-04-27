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
     button.textContent = "Byt färg"
     let buttonClick = function() {
         cirkel.style.backgroundColor = 'red';
         
     };
     nameElement.appendChild(cirkel)
    nameElement.appendChild(button)
 
}

    example()

    
        
        

    
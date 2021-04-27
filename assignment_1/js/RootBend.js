/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("RootBend");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Bamses bananer";
    nameElement.appendChild(objectEl);

    let button = document.createElement("Button")
    button.textContent = "Byt färg";
    let buttonClick= function(){
        h3.color= "red";
    }
    button.addEventListener("Click", buttonClick)
}

    example()

    
        
        

    
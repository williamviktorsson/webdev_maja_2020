/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("TollBeat");
  
    //cirkel
    let circEl = document.createElement("div");
    circEl.className = "circle";
    
    //knapp
    let knapEl = document.createElement("button");
    knapEl.style.background = "#FDF06D"
    
    //klick
    let knapElClick = function() {
        if (circEl.className == "circle"){
            circEl.className = "square";
        }
        else{
            circEl.className = "circle";
        }
    };
    knapEl.addEventListener("click", knapElClick);

    

    //appends
    nameElement.appendChild(circEl);
    nameElement.appendChild(knapEl);
    nameElement.appendChild(square);
}

example();


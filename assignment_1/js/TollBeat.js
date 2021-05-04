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
    
    
    var showen = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9jX07VQtMNA%2Fhqdefault.jpg&f=1&nofb=1",
    "https://i.pinimg.com/564x/c4/4f/99/c44f99ffb74969f9f237caf21b602258.jpg",
    "https://i.pinimg.com/474x/60/ff/60/60ff604e26d25be75e07e5efb85c4b9b.jpg"]

    var picturas = document.createElement("img");
    picturas.src = showen[0];
    

    var bild = 0;

    var enShow = function(){

        picturas.src = showen[bild];
        bild++;
        

        if(bild == 3){
            bild = 0;
        }

    }
    window.setInterval(enShow, 1800);
    
   

    //appends
    
    nameElement.appendChild(circEl);
    nameElement.appendChild(picturas);
    nameElement.appendChild(knapEl);
    nameElement.appendChild(square);
    
    

    
}



example();


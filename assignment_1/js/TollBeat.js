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
    
    
    var showen = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J3ZIOBjTE7rkoeLWlR-QsgHaGg%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9jX07VQtMNA%2Fhqdefault.jpg&f=1&nofb=1",
    "https://i.pinimg.com/564x/8a/67/8d/8a678dcde4bfa9dcb9bc1166b19cf6d8.jpg"]

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


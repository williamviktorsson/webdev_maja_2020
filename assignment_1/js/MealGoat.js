/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("MealGoat");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Test no.69";
    nameElement.appendChild(objectEl);



    let buttonClick = document.createElement("button");
    buttonClick.textContent = "Click me :)";
    nameElement.appendChild(buttonClick)

    let ruta = document.createElement("div");
    ruta.className = "ruta";
    nameElement.appendChild(ruta);


   

    let clickOn = function(){
        ruta.style.background = "green"
        
        buttonClick.textContent ="mähhhehe"
    }
    buttonClick.addEventListener("click", clickOn);

}

example();





/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
  
    let nameElement = document.getElementById("PumpRage");
    let objectEl = document.createElement("h3");
    nameElement.appendChild(objectEl);

    //bild
    let img = document.createElement("img")
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSfACzgwqMS1DzaqJCxQTZ8SVP_mim3AZhQ&usqp=CAU"
    img.id = "Naskar"
    
    
    //cirkel
    let cirkel = document.createElement("div")
    cirkel.className = "Cirkel"

    //button
    let button = document.createElement("button")
    button.textContent = "Byt färg"
    let buttonClick = function() {
        cirkel.style.backgroundColor = 'red';
    };
    button.addEventListener("click", buttonClick)
    
    nameElement.appendChild(img)
    nameElement.appendChild(cirkel)
    nameElement.appendChild(button)
}


example();


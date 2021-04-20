
function example() {
    //Min namnen
    let nameElement = document.getElementById("CodeTool");
    let objectEl = document.createElement("h3");
    nameElement.appendChild(objectEl);

    //Min cirkeln
        let circle = document.createElement("div")
        circle.className = "KirnisCircle"
        nameElement.appendChild(circle)

    //Min knappen
        let button = document.createElement("Button")
        button.textContent = "Roblox"
        button.className = "KirnisButton"
        let buttonClick = function(){
            circle.style.backgroundColor = "pink";
        };
        button.addEventListener("click", buttonClick)
        nameElement.appendChild(button)

    //Min kuben
        let square = document.getElement("square")
        square.className = "KirnisSquare"
        nameElement.appendChild(square)

    

    
}

example();


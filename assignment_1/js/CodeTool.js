
function example() {
    //Min namnen
    let nameElement = document.getElementById("CodeTool");
    let objectEl = document.createElement("h3");
    nameElement.appendChild(objectEl);

    //Min cirkeln
        let cirkel = document.createElement("div")
        cirkel.className = "KirnisCirkel"
        nameElement.appendChild(cirkel)

    //Min knappen
        let button = document.createElement("knapp")
        button.textContent = "tryck för epic moment"
        button.className = "KirnisKnapp"
        let knappClick = function(){
            cirkel.style.backgroundColor = "Green";
        };
        button.addEventListener("click", knappClick)
        nameElement.appendChild(button)

    

    
}

example();


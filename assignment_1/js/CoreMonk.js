/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    //Mitt namn
    let nameElement = document.getElementById("CoreMonk");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Pogu Champu UwU";
    nameElement.appendChild(objectEl);

        //Min triangel (down)
        let triangelCM = document.createElement("div");
        triangelCM.className = "HugoTriangle";
        nameElement.appendChild(triangelCM);

        //Min triangel (up)
        let triangelUpCM = document.createElement("div");
        triangelUpCM.className = "HugoUpTriangle";
        nameElement.appendChild(triangelUpCM);


            //Min knappen
            var color = 0;
            let button = document.createElement("Button")
            button.textContent = "CUM"
            button.className = ".HugoButton"
            let buttonClick = function(){
                color += 1;
                if (color >= 6)
                {
                    color = 0;
                }
                switch (color)
                {
                    case 0:
                        triangelCM.style.borderTopColor = "orange";
                        break;
                    case 1:
                        triangelCM.style.borderTopColor = "pink";
                        break;
                    case 2:
                        triangelCM.style.borderTopColor = "green";
                        break;
                    case 3:
                        triangelCM.style.borderTopColor = "blue";
                        break;
                    case 4:
                        triangelCM.style.borderTopColor = "red";
                        break;
                    case 5:
                        triangelCM.style.borderTopColor = "purple";
                        break;
                }
            };
            button.addEventListener("click", buttonClick)
            nameElement.appendChild(button)
}

example();


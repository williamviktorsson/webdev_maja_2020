/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("WildArch");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Assigment 1 :)";
    nameElement.appendChild(objectEl);
    let triangleEl = document.createElement("div")
    triangleEl.className = "Triangle-up"
    triangleEl.id = "unaiTriangle"
    nameElement.appendChild(triangleEl);
    let buttonEl = document.createElement("button")
    buttonEl.className = "button"
    buttonEl.onclick = buttonfunction;
    nameElement.appendChild(buttonEl)

  
    






    let ovalEl = document.createElement("div")
    ovalEl.className = "oval1"
    let g = 0;
    
   
    ovalEl.style.backgroundColor = 'rgb(1, ' + g + ', 0)';
    let changeColor = function() {
        g += 1;
        ovalEl.style.backgroundColor = 'rgb(1, ' + g + ', 0)';
        if (g < 400) {
            window.requestAnimationFrame(changeColor);
        } else {
            g = 0;
            window.requestAnimationFrame(changeColor);
        };
    };
    nameElement.appendChild(ovalEl);
    changeColor();
}


  
 
    



example();





function buttonfunction(){
   
    let triangleEl = document.getElementById("unaiTriangle")
    triangleEl.className = "Triangle-up2"
    button.className=button.className=="unaiTriangle"?"Triangle-up2":"unaiTriangle";
    
    
}





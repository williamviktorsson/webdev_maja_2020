/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("CoalBang");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "hej isak";
    nameElement.appendChild(objectEl);
    let boxEl = document.createElement("div");
    boxEl.className = "newBox";
    nameElement.appendChild(boxEl)
    let boxEl1 = document.createElement("button");
    boxEl1.className = "newBox1";
    nameElement.appendChild(boxEl1)
    
    let number = 1;
    boxEl.addEventListener ("click",buttonfunc)
    
    function buttonfunc(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    boxEl1.style.backgroundColor = randomColor;
    
    if(number = 1){
        objectEl.textContent = "du är fin";
        number = number - 1
    }
    else
        objectEl.textContent = "hej isak" 
        number = number + 1
}
}
example();



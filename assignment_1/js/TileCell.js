/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    //texten som säger "oändlig smärta"
    let nameElement = document.getElementById("TileCell");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Oändlig smärta";
    nameElement.appendChild(objectEl);

    //the geometric object
    let squareEl = document.createElement("div");
    squareEl.className = 'Square';
    nameElement.appendChild(squareEl);

    //the colorchanging button
    let butEl = document.createElement("button")
    butEl.textContent = "do a switcheroo"
    let clicked = function(){
        squareEl.style.backgroundColor = 'green';
    }

}

example();


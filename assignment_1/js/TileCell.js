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
    var joeMama = document.createElement("div");
    joeMama.className = 'RedBox';
    joeMama.id = 'squareID';
    nameElement.appendChild(joeMama);

    //the colorchanging button
    let butEl = document.createElement("button");
    butEl.textContent = "FORTNITE EPIC";
    nameElement.appendChild(butEl);

    let clicked = function(){
        //let joeMama = document.getElementById('squareID');
        if(joeMama.className = 'RedBox'){
            joeMama.className = 'PinkBox';
        }
        
    }
    butEl.addEventListener("fortniet", clicked);
    
    
}

example();


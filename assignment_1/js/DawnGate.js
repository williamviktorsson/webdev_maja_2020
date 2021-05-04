/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("DawnGate");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Example :)";
    nameElement.appendChild(objectEl);

    let cubeEl = document.createElement("div");
    cubeEl.className = "cubeEl";
    cubeEl.style.height = "70px";
    cubeEl.style.width = "70px";
    cubeEl.style.backgroundColor = "red";
    nameElement.appendChild(cubeEl);

    let button = document.createElement("button");
    button.textContent = "click";
    let buttonClick = function() {
        cubeEl.style.backgroundColor = "green";
    };
    button.addEventListener("click", buttonClick);
    nameElement.appendChild(button);

    let squareEl = document.createElement("div");
    squareEl.className = "squareEl";
    nameElement.appendChild(squareEl);

    var bilderLol = ["https://freepngimg.com/thumb/mouth/92712-ear-head-twitch-pogchamp-emote-free-download-png-hq-thumb.png", 
    "https://cdn.akamai.steamstatic.com/steam/apps/731180/header.jpg?t=1557771759",];

    var biner = document.createElement("img");
    biner.src = bilderLol[0];
    nameElement.appendChild(biner);

    let bildtid = 0

    var bytBild = function() {
        

        biner.src = bilderLol[bildtid];
        bildtid++;
        if (bildtid == 2) {
            bildtid = 0;
        }
    }

    window.setInterval(bytBild, 1000);
} 



example();
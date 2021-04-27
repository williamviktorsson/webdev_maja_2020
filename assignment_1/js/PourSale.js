/*
    Do everything you want in functions because you do not want to define global variables.
*/



function example() {
    let nameElement = document.getElementById("PourSale");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Example :)";
    nameElement.appendChild(objectEl);

    let square = document.createElement("div");

    let spaceboi = document.createElement("div");
    spaceboi.classList.add("spaceboi");
    nameElement.appendChild(spaceboi);

    let coolCircle = document.createElement("div");
    coolCircle.classList.add("coolCircle");
    nameElement.appendChild(coolCircle);

    let knapp = document.createElement("button");
    knapp.className = "square";
    nameElement.appendChild(knapp);

    var onButtonClick = function() {
        spaceboi.className = "spaceboi2" 
    };

    knapp.addEventListener("click", onButtonClick);

    var slideshow = ["https://i.pinimg.com/280x280_RS/fc/fd/49/fcfd49e044a51e6f4c76a6748b8fc2fc.jpg",
    "https://m.media-amazon.com/images/I/71OpO-3gUfL._SS500_.jpg",
    "https://ih1.redbubble.net/image.1543360260.9387/pp,504x498-pad,600x600,f8f8f8.jpg"]

    var bilden = document.createElement("img");
    bilden.src = slideshow[0];
    nameElement.appendChild(bilden);

    var ooga = 0;

    var bich = function(){

        bilden.src = slideshow[ooga];
        ooga++;
        console.log(ooga);

        if(ooga == 3){
            ooga = 0;
        }

    }
    window.setInterval(bich, 2000);

}





example();


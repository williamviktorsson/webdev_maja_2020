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


}

var slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }
    
    // Handle going to to the next slide
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 1000);
    };
    
    nextSlide.call(this);
};
slideShow(document.getElementById("slideshow"));

example();


/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    //texten som säger "oändlig smärta"
    let nameElement = document.getElementById("TileCell");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Oändlig smärta";
    nameElement.appendChild(objectEl);

    //the cringe
    var joeMama = document.createElement("div");
    joeMama.className = "RedTri";
    joeMama.id = 'squareID';
    nameElement.appendChild(joeMama);

    //the colorchanging button
    let jonasBros = document.createElement("button");
    jonasBros.textContent = "tomrum";
    nameElement.appendChild(jonasBros);

    //the cool cringe
    var deezNuts = document.createElement("div");
    deezNuts.className = "Box"
    nameElement.appendChild(deezNuts);
    
 
    let clicked = function(){
        let vadFan = document.getElementById('squareID');
        vadFan.className = "PinkTri";   
    }

    jonasBros.addEventListener("click", clicked);

    //slideshow list of pics
    let goldScar = document.createElement('div');
    goldScar.id = "slideshow"
    let list = ['http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/flushed-face.png', 'https://assets.icanet.se/t_product_large_v1,f_auto/5449000149343.jpg', 'https://lekmer.se/images/367944/full.png']
    for (let i = 0; i < list.length ;i++){
        let fortnite = document.createElement('img');
        fortnite.src = list[i];
        fortnite.alt = "pictures representing pain";
        goldScar.appendChild(fortnite)
    }
    nameElement.appendChild(goldScar);
}

var slide = function(container) {
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

example();
slideShow(document.getElementById("slideshow"));

 

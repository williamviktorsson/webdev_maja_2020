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
    let joeMama = document.createElement("div");
    joeMama.className = "RedTri";
    joeMama.id = 'squareID';
    nameElement.appendChild(joeMama);

    //the colorchanging button
    let jonasBros = document.createElement("button");
    jonasBros.textContent = "tomrum";
    nameElement.appendChild(jonasBros);

    //the cool cringe
    let deezNuts = document.createElement("div");
    deezNuts.className = "Box"
    nameElement.appendChild(deezNuts);
    
 
    let clicked = function(){
        let vadFan = document.getElementById('squareID');
        vadFan.className = "PinkTri";   
    }

    jonasBros.addEventListener("click", clicked);

   
}

let TCslide = function() {
    
    let nameElement = document.getElementById("TileCell");

    let goldScar = document.createElement('div');
    goldScar.id = "slideshow"
    let cuck = ['http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/flushed-face.png', 'https://assets.icanet.se/t_product_large_v1,f_auto/5449000149343.jpg', 'https://lekmer.se/images/367944/full.png']
    for (let i = 0; i < cuck.length ;i++){
        let fortnite = document.createElement('img');
        fortnite.src = cuck[i];
        fortnite.alt = "pictures representing pain";
        fortnite.style.height = '200px';
        goldScar.appendChild(fortnite)
    }
    nameElement.appendChild(goldScar);
    
    
    
    
    this.gaGa = [];
    this.goGo = 0;
    for (i = 0; i < goldScar.childElementCount; i++) {
        this.gaGa.push(goldScar.children[i]);
        this.gaGa[i].style.display = "none";
    }

    // Handle going to to the next slide
    let next = function() {
        for (var i = 0; i < this.gaGa.length; i++) {
            this.gaGa[i].style.display = "none";
        }
        this.gaGa[this.goGo].style.display = "block";
        this.goGo++;
        if (this.goGo >= this.gaGa.length) {
            this.goGo = 0;
        }
        window.setTimeout(next.bind(this), 1369);
    };

    next.call(this);
};

example();
TCslide(document.getElementById("slideshow"));

 

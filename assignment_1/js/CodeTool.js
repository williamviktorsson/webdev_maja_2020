
function example() {
    //Min namnen
    let nameElement = document.getElementById("CodeTool");
    let objectEl = document.createElement("h3");
    nameElement.appendChild(objectEl);

    //Min cirkeln
        let circle = document.createElement("div");
        circle.className = "KirnisCircle";
        nameElement.appendChild(circle);

    //Min knappen
        let button = document.createElement("Button");
        button.textContent = "Roblox";
        button.className = "KirnisButton";
        let buttonClick = function(){
            circle.style.backgroundColor = "pink";
        };
        button.addEventListener("click", buttonClick);
        nameElement.appendChild(button);

    //Min kuben
        let square = document.createElement("div");
        square.className = "KirnisSquare";
        nameElement.appendChild(square);

    
}

let CTslide = function() {
    let nameElement = document.getElementById("CodeTool");

    let kirnisSlide = document.createElement("div");
    kirnisSlide.id = "slide"
    let bild = ["https://img.ifunny.co/images/522a6f7e8e35f591101258c294883787a3565a88b8a49e2621e4133b07625a21_1.jpg","https://i.ytimg.com/vi/tTCqAJLwAaE/maxresdefault.jpg","https://cdnb.artstation.com/p/assets/images/images/031/556/619/large/anthony-maddox-fungus-full-small.jpg?1603950449"]
    for (let i = 0; i < bild.length; i++){
        let amogus = document.createElement("img");
        amogus.src = bild[i];
        amogus.alt = "Bilder på fet coola amogus players";
        amogus.style.height = "200px";
        kirnisSlide.appendChild(amogus)
    }
    nameElement.appendChild(kirnisSlide);

    this.first = [];
    this.second = 0;
    for (i = 0; i < kirnisSlide.childElementCount; i++){
        this.first.push(kirnisSlide.children[i]);
        this.first[i].style.display = "none";
    }

    let nextSlide = function(){
        for (var i = 0; i < this.first.length; i++){
            this.first[i].style.display = "none";
        }
        this.first[this.second].style.display = "block";
        this.second++;
        if (this.second >= this.first.length){
            this.second = 0;
        }
        window.setTimeout(nextSlide.bind(this), 1000);
    }

    nextSlide.call(this);
}

example();
CTslide(document.getElementById("slideshow"));


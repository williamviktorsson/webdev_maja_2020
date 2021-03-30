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

    var oImg = document.createElement("img");
    oImg.setAttribute('src', 'https://static.wikia.nocookie.net/minecraft/images/e/e8/New_Zombie.png/revision/latest?cb=20190525152011');
    oImg.className = "Img1"
    nameElement.appendChild(oImg)

    var oImg1 = document.createElement("img");
    oImg1.setAttribute('src', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/00/Zombie_SSBU.webp/revision/latest/scale-to-width-down/250?cb=20201002040351');
    oImg1.className = "Img2"
    nameElement.appendChild(oImg1)






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

var slideShow = function(container) {
    this.images = [Img1,Img2];
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
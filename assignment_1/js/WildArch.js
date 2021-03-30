/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example(){
    let nameElement = document.getElementById("WildArch");

    let objectEl = document.createElement("h3");
    objectEl.textContent = "Assigment 1 :)";
    nameElement.appendChild(objectEl);

    let triangleEl = document.createElement("div")
    triangleEl.className = "Triangle-up"
    triangleEl.id = "unaiTriangle"
    nameElement.appendChild(triangleEl);

    let buttonEl = document.createElement("button")
    buttonEl.className = "buttonUnai"
    buttonEl.onclick = buttonfunction;
    nameElement.appendChild(buttonEl);




   

    
    

  

  
    






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

function slideshow(){

    let slideEl = document.createElement("div")
    slideEl.id = "bruh"
    nameElement.appendChild(slideEl)
    let nudepics = ['https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/236NC5/b535b89568c240f3be08260009e21d83.jpg/f/minecraft-mini-crafter-zombie-plush.jpg', 'https://static.wikia.nocookie.net/minecraft/images/e/e8/New_Zombie.png/revision/latest?cb=20190525152011', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/00/Zombie_SSBU.webp/revision/latest/scale-to-width-down/250?cb=20201002040351']
    







    var slideShow = function(container) {
        this.images = nudepics;
        this.curImage = 0;
        for (i = 0; i < container.childElementCount; i++) {
            this.images.push(container.children[i]);
            this.images[i].style.display = "none";
        }
        
       
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


}
slideshow();






  
 
    









function buttonfunction(){
   
    let triangleEl = document.getElementById("unaiTriangle")
    triangleEl.className = "Triangle-up2"
    buttonUnai.className=buttonUnai.className=="unaiTriangle"?"Triangle-up2":"unaiTriangle";
    
    
}





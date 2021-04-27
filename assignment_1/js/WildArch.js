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
function slideshowPoggers() {

    let nameElement = document.getElementById("WildArch");
    
    let bruhEl = document.createElement("div")
    bruhEl.id = "slideshowcringe";
    let nudes = ["https://images.pexels.com/photos/38280/monkey-mandril-africa-baboon-38280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/33535/primate-ape-thinking-mimic.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/605223/pexels-photo-605223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]
    for (let i = 0; i < nudes.length; i++) {
        let lolEl = document.createElement('img');
        lolEl.src = nudes[i];
        lolEl.style.height = '300px'
        bruhEl.appendChild(lolEl);
    };
    nameElement.appendChild(bruhEl)

    
        this.tiddies = [];
        this.bruhImage = 0;
        for ( i = 0 ; i < bruhEl.childElementCount; i++) {
            this.tiddies.push(bruhEl.children[i]);
            this.tiddies[i].style.display = "none";
        }
        
        // Handle going to to the next slide
        var nextSlidebruh = function() {
            for (var i = 0; i < this.tiddies.length; i++) {
                this.tiddies[i].style.display = "none";
            }
            this.tiddies[this.bruhImage].style.display = "block";
            this.bruhImage++;
            if (this.bruhImage >= this.tiddies.length) {
                this.bruhImage = 0;
            }
            window.setTimeout(nextSlidebruh.bind(this), 1000);
        };
        
        nextSlidebruh.call(this);
    };
 

   




example();
slideshowPoggers();






















        
function buttonfunction(){
   
    let triangleEl = document.getElementById("unaiTriangle")
    triangleEl.className = "Triangle-up2"
    buttonUnai.className=buttonUnai.className=="unaiTriangle"?"Triangle-up2":"unaiTriangle";
    
    
}





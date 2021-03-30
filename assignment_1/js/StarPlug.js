/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {

    let nameElement = document.getElementById("StarPlug");

    // Geometric object
    let geoEl = document.createElement('div');
    geoEl.className = 'geoEl';
    geoEl.style.width = '100px';
    geoEl.style.height = '100px';
    geoEl.style.backgroundColor = 'blue';
    nameElement.appendChild(geoEl);

    // Button
    let buttonEl = document.createElement('button');
    buttonEl.textContent = 'Click';
    let buttonClick = function() {
        geoEl.style.backgroundColor = 'red';
    };
    buttonEl.addEventListener('click', buttonClick);
    nameElement.appendChild(buttonEl);

    // Changing geometrical object
    let geoEl2 = document.createElement('div');
    let g = 0;
    geoEl2.className = 'geoEl';
    geoEl2.style.width = '100px';
    geoEl2.style.height = '100px';
    geoEl2.style.backgroundColor = 'rgb(0, ' + g + ', 0)';
    let changeColor = function() {
        g += 1;
        geoEl2.style.backgroundColor = 'rgb(0, ' + g + ', 0)';
        if (g < 255) {
            window.requestAnimationFrame(changeColor);
        } else {
            g = 0;
            window.requestAnimationFrame(changeColor);
        };
    };
    nameElement.appendChild(geoEl2);
    changeColor();
}

function slideshowFunc() {

    let nameElement = document.getElementById("StarPlug");

    let slideEl = document.createElement('div');
    slideEl.id = 'slideshow';
    let pictures = ['https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg', 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg', 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg']
    for (let i = 0; i < pictures.length; i++) {
        let picEl = document.createElement('img');
        picEl.src = pictures[i];
        picEl.alt = 'Picture of code';
        picEl.style.height = '250px'
        slideEl.appendChild(picEl);
    };
    nameElement.appendChild(slideEl)

    this.images = [];
    this.curImage = 0;
    for (i = 0; i < slideEl.childElementCount; i++) {
        this.images.push(slideEl.children[i]);
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

example();
slideshowFunc();


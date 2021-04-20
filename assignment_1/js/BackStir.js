/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("BackStir");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Example:-)";
    nameElement.appendChild(objectEl);
    //fin bild
    let abijitNaskar = document.createElement("img")
    abijitNaskar.src = "https://scontent.fbma2-1.fna.fbcdn.net/v/t1.6435-9/109228874_3347407255317583_4680176748756913683_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=9267fe&_nc_ohc=nO6nVHhzP7IAX9QEQGb&_nc_ht=scontent.fbma2-1.fna&oh=6be5c39af6490ecf2fd60219210bdf93&oe=609BAF09"
    abijitNaskar.id = "naskar"
    nameElement.appendChild(abijitNaskar)

    let skogge = document.createElement("img")
    skogge.src = "https://tmssl.akamaized.net/images/wappen/big/8885.png?lm=1411063846"
    skogge.id = "skogge"
    nameElement.appendChild(skogge)

    let elton = document.createElement("img")
    elton.src = "http://www2.sportadmin.se/vault/getIm.asp?ID=7775&typ=0&v=1"
    elton.id = "elton"
    nameElement.appendChild(elton)
    //button
    let button = document.createElement("button")
    button.textContent = "Klicka på mig!"
    nameElement.appendChild(button);
    //rektangel
    let rectangle = document.createElement("div")
    rectangle.className = "rectangle"
    nameElement.appendChild(rectangle)
    //knappfunktion
    let klickButton = function(){
        rectangle.style.backgroundColor = 'red'; 
    }
    
    button.addEventListener('click',klickButton);

    //slideshow

    function changePicture(){

        let allaBilder = ["https://scontent.fbma2-1.fna.fbcdn.net/v/t1.6435-9/109228874_3347407255317583_4680176748756913683_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=9267fe&_nc_ohc=nO6nVHhzP7IAX9QEQGb&_nc_ht=scontent.fbma2-1.fna&oh=6be5c39af6490ecf2fd60219210bdf93&oe=609BAF09","https://tmssl.akamaized.net/images/wappen/big/8885.png?lm=1411063846","http://www2.sportadmin.se/vault/getIm.asp?ID=7775&typ=0&v=1"]

        abijitNaskar.src = allaBilder[Math.floor(Math.random()*3)]
        skogge.src = allaBilder[Math.floor(Math.random()*3)]
        elton.src = allaBilder[Math.floor(Math.random()*3)]
    }

    window.setInterval(changePicture, 1000)


}
example();





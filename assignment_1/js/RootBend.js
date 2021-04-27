/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
  
    let nameElement = document.getElementById("PumpRage");
    let objectEl = document.createElement("h3");
    nameElement.appendChild(objectEl);

    //bilder
    let img1 = document.createElement("img")
    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSfACzgwqMS1DzaqJCxQTZ8SVP_mim3AZhQ&usqp=CAU"
    img1.id = "Naskar1"
    nameElement.appendChild(img1)

    let img2 = document.createElement("img")
    img2.src = "https://quotefancy.com/media/wallpaper/3840x2160/6937335-Abhijit-Naskar-Quote-Martial-arts-is-not-about-fighting-it-is.jpg"
    img2.id = "Naskar2"
    nameElement.appendChild(img2)
    
    let img3 = document.createElement("img")
    img3.src = "https://www.quoteslyfe.com/images/collection3/quotations102/The-society-terms-the-varied-paths-of-102524.jpg"
    img3.id = "Naskar3"
    nameElement.appendChild(img3)
    
    //cirkel
    let cirkel = document.createElement("div")
    cirkel.className = "Cirkel"

    //button
    let button = document.createElement("button")
    button.textContent = "Byt färg"
    let buttonClick = function() {
        cirkel.style.backgroundColor = 'red';
        
    };
    button.addEventListener("click", buttonClick)

    // SlideShow
    function slideshow(){
        let  bilder = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSfACzgwqMS1DzaqJCxQTZ8SVP_mim3AZhQ&usqp=CAU","https://quotefancy.com/media/wallpaper/3840x2160/6937335-Abhijit-Naskar-Quote-Martial-arts-is-not-about-fighting-it-is.jpg","https://www.quoteslyfe.com/images/collection3/quotations102/The-society-terms-the-varied-paths-of-102524.jpg"]
        img1.src = bilder[Math.floor(Math.random()* 3)]
        img2.src = bilder[Math.floor(Math.random()* 3)]
        img3.src = bilder[Math.floor(Math.random()* 3)]
    }
    
    
    nameElement.appendChild(cirkel)
    nameElement.appendChild(button)
    window.setInterval(slideshow, 1000)
}


example();

        

    
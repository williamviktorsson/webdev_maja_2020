/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("MealGoat");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Test no.69";
    nameElement.appendChild(objectEl);



    let buttonClick = document.createElement("button");
    buttonClick.textContent = "Click me :)";
    nameElement.appendChild(buttonClick)

    let ruta = document.createElement("div");
    ruta.className = "ruta";
    nameElement.appendChild(ruta);


   

    let clickOn = function(){
        ruta.style.background = "green"
        
        buttonClick.textContent ="mähhhehe"
    }
    buttonClick.addEventListener("click", clickOn);


    var i = 0
    var imgList = []
    var time = 2000;

    imgList[0] = "https://media.whatscap.com/5fc/6fe/5fc6feabf1ef00380ed777d156df56dc1c381386_n.jpg"
    imgList[1] = "https://i.pinimg.com/originals/b7/cd/ed/b7cded2e6c866a147425f525eeb1e56e.gif"
        let img = document.createElement("img")
        img.className = "image"
        img.src = imgList[i]
        nameElement.appendChild(img)

    function slideShow(){
        let img = document.getElementsByClassName("image")

        if(i <imgList.length - 1){
            i++
        }else{
            i = 0;
        }
        img[0].src = imgList[i]
        setTimeout(slideShow,time);
        
    }
    window.onload = slideShow;

    
    




}

example();





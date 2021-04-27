/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    //Mitt namn
    let nameElement = document.getElementById("CoreMonk");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Pogu Champu UwU";
    nameElement.appendChild(objectEl);

        //Min triangel (down)
        let triangelCM = document.createElement("div");
        triangelCM.className = "HugoTriangle";
        nameElement.appendChild(triangelCM);

        //Min triangel (up)
        let triangelUpCM = document.createElement("div");
        triangelUpCM.className = "HugoUpTriangle";
        nameElement.appendChild(triangelUpCM);

        var imgList = ["https://i.redd.it/5ghtlk9in9a61.jpg",
"https://i.pinimg.com/originals/d9/6a/ef/d96aef7f46b7ffcdea67240cd4c1c7b9.png",
"https://i.ytimg.com/vi/M2GwVLDEoIw/maxresdefault.jpg",
"https://i.ytimg.com/vi/kkBgqTXLgTw/maxresdefault.jpg",
"https://i.ytimg.com/vi/3TZ7isYtbxM/maxresdefault.jpg"]

let slideshow = document.createElement("img");


slideshow.className = "FFimgHolder";

nameElement.appendChild(slideshow);

var CurrentImg = 0;
slideshow.src = imgList[CurrentImg];

let CUMM = function(){
    CurrentImg += 1;
    if (CurrentImg >= 5)
    {
        CurrentImg = 0;
    }
    slideshow.src = imgList[CurrentImg];
};
slideshow.addEventListener("click", CUMM);

            //Min knapp
            var color = 0;
            let button = document.createElement("Button")
            button.textContent = "CUM"
            button.className = ".HugoButton"
            let buttonClick = function(){
                color += 1;
                if (color >= 6)
                {
                    color = 0;
                }
                switch (color)
                {
                    case 0:
                        triangelCM.style.borderTopColor = "orange";
                        CurrentImg = 1;
                        break;
                    case 1:
                        triangelCM.style.borderTopColor = "pink";
                        CurrentImg = 2;
                        break;
                    case 2:
                        triangelCM.style.borderTopColor = "green";
                        CurrentImg = 3;
                        break;
                    case 3:
                        triangelCM.style.borderTopColor = "blue";
                        CurrentImg = 4;
                        break;
                    case 4:
                        triangelCM.style.borderTopColor = "red";
                        CurrentImg = 5;
                        break;
                    case 5:
                        triangelCM.style.borderTopColor = "purple";
                        break;
                }
            };
            button.addEventListener("click", buttonClick)
            nameElement.appendChild(button)
}

example();


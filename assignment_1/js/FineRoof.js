/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let FineRoofCanvas = document.getElementById("FineRoof");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "wrow";
    objectEl.style.backgroundColor = "black";
    objectEl.style.width = "70px"
    FineRoofCanvas.appendChild(objectEl);
}

function circle(){
    let circleObj = document.createElement("div");
    circleObj.className = "circle";
    circleObj.style.backgroundColor = "rgb(0,128,128)";
    circleObj.style.animationName = "glowOrb";
    circleObj.style.animationDuration = "5s";
    FineRoofCanvas.appendChild(circleObj);
}

function sweetCaroline(){
    let sweetImage = document.createElement("img");
    sweetImage.src = "https://img.youtube.com/vi/2w-_Vtttrfc/0.jpg";
    sweetImage.alt = "An album photo of Neil Diamond"
    sweetImage.className = "fixedImage";
    let sweetButton = document.createElement("button");
    sweetButton.textContent = "click for some sweet caroline ;)";
    sweetButton.className = "button";
    let onButtonClick = function(){
        sweetImage.src = "https://i.ytimg.com/vi/A1KXT7oghPQ/maxresdefault.jpg";
        sweetImage.alt = "An album photo of Neil Diamond, but now with a gun"
        window.open("https://www.youtube.com/watch?v=A1KXT7oghPQ", "popup", "width=500, height=500, left=500"); return false;
    }
    FineRoofCanvas.appendChild(sweetImage);
    FineRoofCanvas.appendChild(sweetButton);
    sweetButton.addEventListener("click", onButtonClick);
}

function slideshowFunc(){
    let imgList = ["https://img.itch.zone/aW1nLzIzODcxNzguZ2lm/original/U50cJ3.gif", "https://i.pinimg.com/originals/a3/a3/8b/a3a38b2b44db8ac3dee2231f72f46b89.gif"
    , "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1b1d7fa-6f73-4d3d-8057-9a7c68838ecd/daa0oa2-3252452f-29da-46ea-bffe-2b7261a99cff.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjFiMWQ3ZmEtNmY3My00ZDNkLTgwNTctOWE3YzY4ODM4ZWNkXC9kYWEwb2EyLTMyNTI0NTJmLTI5ZGEtNDZlYS1iZmZlLTJiNzI2MWE5OWNmZi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jw3Y5NIQFznC07mDwyoEUhXAQQ_as-cTwimaqDveb7Q"]
    let slideshow = document.createElement("img");
    slideshow.src = imgList[0];
    slideshow.className = "fixedGif";
    let imgIndex = 0;
    function imgChanger(){
        if(imgIndex < imgList.length -1){
            imgIndex++
        }
        else{imgIndex = 0;}
        
        slideshow.src = imgList[imgIndex];
    }
    FineRoofCanvas.appendChild(slideshow);
    slideshow.addEventListener("click", imgChanger);
}

example();
circle();
sweetCaroline();
slideshowFunc();

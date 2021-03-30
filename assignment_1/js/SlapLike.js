/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("SlapLike");
    let objectEl = document.createElement("h3");
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    img1.src = "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
    img2.src = "https://www.kasandbox.org/programming-images/avatars/marcimus.png"
    
    objectEl.textContent = "Axel trollar"

    var id = null
    function imgMove(){
        var pos = -300
        
        clearInterval(id)
        id = setInterval(frame, 5)
        function frame(){
            if(pos == 1550){
                clearInterval(id)
                imgMove()
            } else {
                pos++
                img1.style.left = pos + "px"
                img2.style.left = pos + "px"
            }
        }

    }

   
    nameElement.appendChild(objectEl);
    nameElement.appendChild(img1)
    nameElement.appendChild(img2)
    imgMove()
    
}

example();


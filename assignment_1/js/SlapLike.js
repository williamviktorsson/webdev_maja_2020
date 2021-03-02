/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("SlapLike");
    let objectEl = document.createElement("h3");
    let imgEl = document.createElement("img")
    imgEl.src = "https://www.kasandbox.org/programming-images/avatars/marcimus.png"
    imgEl.alt = "Axel är fin"
    imgEl.title = imgEl.alt
    objectEl.textContent = "Axel trollar"

    var id = null
    function imgElMove(){
        var pos = 0
        clearInterval(id)
        id = setInterval(frame, 5)
        function frame(){
            if(pos == 1400){
                clearInterval(id)
                imgElMove()
            } else {
                pos++
                imgEl.style.left = pos + "px"
            }
        }

    }
    
    nameElement.appendChild(objectEl);
    nameElement.appendChild(imgEl)
    imgElMove()
}

example();


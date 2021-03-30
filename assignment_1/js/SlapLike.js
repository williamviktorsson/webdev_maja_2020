/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("SlapLike");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Axel trollar"

    let button = document.createElement("button")
    button.innerHTML = "Klicka här"
    button.addEventListener("click", changeColor)

    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    img1.src = "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
    img2.src = "https://www.kasandbox.org/programming-images/avatars/marcimus.png"
    img1.className = "jakt"
    img2.className = "jakt"
    
    let cirkel = document.createElement("p")
    cirkel.id = "cirkel"

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

    function changeColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.getElementById("cirkel").style.backgroundColor = color
    }

    function quiz(){
        let box = document.createElement("div")
        box.id = "box1"
        nameElement.appendChild(box)

        let button1 = document.createElement("button")
        button1.className = "quizButton"
        button1.textContent = "Jacob är bäst"
        
        box.appendChild(button1)
        button1.style.left = "30px"
        

        let button2 = document.createElement("button")
        button2.className = "quizButton"
        button2.textContent = "Axel är bäst"
        button2.style.left = "125px"
        box.appendChild(button2)
        

        let button3 = document.createElement("button")
        button3.className = "quizButton"
        button3.textContent = "Isak är bäst"
        button3.style.left = "220px"
        box.appendChild(button3)

        let jacob = document.createElement("img")
        jacob.src = "https://www.ufc.se/wp-content/uploads/2020/09/akad_jacob_berglund_200901_xl.jpg"
        jacob.id = "jacob"
        box.appendChild(jacob)

        let axel = document.createElement("img")
        axel.src = "https://media.discordapp.net/attachments/762977870049443861/826422058435084298/image0.jpg?width=283&height=612"
        axel.id = "axel"
        box.appendChild(axel)

        let isak = document.createElement("img")
        isak.src = "https://media.discordapp.net/attachments/762977870049443861/826423295662096394/image0.jpg?width=458&height=612"
        isak.id = "isak"
        box.appendChild(isak)
        
    }

   
    nameElement.appendChild(objectEl);
    nameElement.appendChild(cirkel)
    nameElement.appendChild(button)
    nameElement.appendChild(img1)
    nameElement.appendChild(img2)
    imgMove()
    quiz()
    window.setInterval(changeColor, 1000)
}

example();


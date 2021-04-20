/*
    Do everything you want in functions because you do not want to define global variables.
*/
let jacobRöster = 0
let axelRöster = 0
let isakRöster = 0

function example() {
    let nameElement = document.getElementById("SlapLike");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Axel trollar"

    let button = document.createElement("button")
    button.textContent = "Byt färg"
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
        var pos2 = 0
        clearInterval(id)
        id = setInterval(frame, 5)
        function frame(){
            if(pos == 1550){
                clearInterval(id)
                imgMove()
            }  else {
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
        button1.id = "jacobKnapp"
        button1.textContent = "Jacob är bäst"
        box.appendChild(button1)
        button1.style.left = "30px"
        button1.addEventListener("click", Jacob)
        

        let button2 = document.createElement("button")
        button2.className = "quizButton"
        button2.id = "axelKnapp"
        button2.textContent = "Axel är bäst"
        button2.style.left = "125px"
        box.appendChild(button2)
        button2.addEventListener("click", Axel)
        

        let button3 = document.createElement("button")
        button3.className = "quizButton"
        button3.id = "isakKnapp"
        button3.textContent = "Isak är bäst"
        button3.style.left = "220px"
        box.appendChild(button3)
        button3.addEventListener("click", Isak)

        let button4 = document.createElement("button")
        button4.className = "quizButton"
        button4.id = "resultatKnapp"
        button4.textContent = "Ställning"
        button4.style.bottom = "200px"
        nameElement.appendChild(button4)
        button4.addEventListener("click", result)


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

    function Jacob(){
        if(document.getElementById("jacobKnapp").style.backgroundColor = "navy"){
            document.getElementById("jacobKnapp").style.backgroundColor = "green"
            jacobRöster++
        }
        
    }

    function Axel(){
        if(document.getElementById("axelKnapp").style.backgroundColor = "navy"){
            document.getElementById("axelKnapp").style.backgroundColor = "green"
            axelRöster++

        }
    }

    function Isak(){
        if(document.getElementById("isakKnapp").style.backgroundColor == "navy" && document.getElementById("axelKnapp").style.backgroundColor == "navy" && document.getElementById("jacobKnapp").style.backgroundColor == "navy"){
            document.getElementById("isakKnapp").style.backgroundColor = "green"  
            isakRöster++
        } else if(document.getElementById("axelKnapp").style.backgroundColor == "green"){
            if(confirm("Vill du ändra din röst?\nStällningen just nu är:\nJacob: " + jacobRöster +" röster\nAxel: " + axelRöster +" röster\nIsak: " + isakRöster + " röster")){
                isakRöster++
                axelRöster--
                document.getElementById("isakKnapp").style.backgroundColor = "green"
                document.getElementById("axelKnapp").style.backgroundColor = "navy"
            }
        } else if(document.getElementById("jacobKnapp").style.backgroundColor == "green"){
            if(confirm("Vill du ändra din röst?\nStällningen just nu är:\nJacob: " + jacobRöster +" röster\nAxel: " + axelRöster +" röster\nIsak: " + isakRöster + " röster")){
                isakRöster++
                jacobRöster--
                document.getElementById("isakKnapp").style.backgroundColor = "green"
                document.getElementById("jacobKnapp").style.backgroundColor = "navy"
            }
        }
    }

    function result(){
        alert("Ställningen just nu är:\nJacob: " + jacobRöster +" röster\nAxel: " + axelRöster +" röster\nIsak: " + isakRöster + " röster")
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


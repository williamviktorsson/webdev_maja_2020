
function example() {
    let nameElement = document.getElementById("CoalBang");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Hej Isak";
    objectEl.id = "Isak"
    nameElement.appendChild(objectEl);
    let boxEl = document.createElement("div");
    boxEl.className = "newBox";
    nameElement.appendChild(boxEl)
    let boxEl1 = document.createElement("button");
    boxEl1.className = "newBox1";
    nameElement.appendChild(boxEl1)

    boxEl.addEventListener ("click",buttonfunc)
    
    function buttonfunc(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    boxEl1.style.backgroundColor = randomColor;
    }
    
    if(document.getElementById("Isak").textContent == "Hej Isak"){
        document.getElementById("Isak").textContent = "Du är fin";
            
        } else if(document.getElementById("Isak").textContent == "Du är fin"){
        document.getElementById("Isak").textContent = "Hej Isak" 
        }

    var piclist = []
    var time = 1000          
    var i = 0 

    piclist[0] ="https://www.oregonlive.com/resizer/Ce9tKDpKYzwPzQj-35KN3Se-Lu8=/1280x0/smart/image.oregonlive.com/home/olive-media/width600/img/blazers_impact/photo/portland-trail-blazers-basketball-kermit-washington-d76ff3b4c1ace536.jpg"
    piclist[1] ="https://s.hdnux.com/photos/01/13/71/64/19897639/3/rawImage.jpg"
    piclist[2] ="https://www.nba.com/kings/sites/kings/files/gettyimages-81006068.jpg?w=756&h=438"
        let pic = document.createElement("img")
        pic.className = "pic"
        pic.src = piclist[i]
        nameElement.appendChild(pic)
    
    function changeImg(){
        let pic = document.getElementsByClassName("pic");
        if(i<piclist.length - 1){
            i++
        }else{
            i = 0
        }
        pic[0].src = piclist[i]
        setTimeout(changeImg,time)
    }
    window.onload = changeImg;   
}
example();



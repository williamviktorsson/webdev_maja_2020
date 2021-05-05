/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("FuelTaxi");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "We're no strangers to love";
    let paragrafEL = document.createElement("p");
    paragrafEL.textContent = "You know the rules and so do I...🔫";
    nameElement.appendChild(objectEl);
    nameElement.appendChild(paragrafEL);

    //rectangle that changes color (loop no work only changes after page refresh)
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let line1 = document.createElement('canvas');
    line1.setAttribute('id','shapeR');
    const rect = line1.getContext('2d');
    rect.fillStyle = '#' + randomColor;
    rect.fillRect(20, 10, 160, 100);
    nameElement.append(line1);

    //rectangle that can get you epilepsy
    let shape2 = document.createElement('canvas');
    shape2.setAttribute('id','shapeB');
    const rect2 = shape2.getContext('2d'); 
    rect2.fillStyle = 'blue';
    rect2.fillRect(20, 10, 160, 100);
    nameElement.append(shape2);
    timeOut = 100;

    function shapeRandomColor(){
        let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
        var color = '#';
        for (var i = 0; i < 1; i++) {
            color += randomColor3
        }
        rect2.fillStyle = color;
        rect2.fillRect(20, 10, 160, 100);
    }
    window.setInterval(shapeRandomColor, timeOut);

    
    //button to manually change rectangle color
    let button = document.createElement("button");
    button.textContent = "random color";
    button.setAttribute('id', 'colorButton');
    let buttonClick = function() {
        changeColor = Math.floor(Math.random()*16777215).toString(16);
        rect.fillStyle = '#' + changeColor;
        rect.fillRect(20, 10, 160, 100);
    };
    button.addEventListener("click", buttonClick);
    nameElement.appendChild(button);


    
}
example();
let nameElement = document.getElementById("FuelTaxi");

//slideshow
let ppEL = document.createElement('p');
ppEL.setAttribute('id','plaseHolder')
ppEL.textContent = "hi ...............................................................";
nameElement.appendChild(ppEL);

let lastEl = document.getElementById("plaseHolder");

let emptyImg = document.createElement('img');
emptyImg.setAttribute('name', 'slide');
emptyImg.setAttribute('id', 'slideShow');

var i = 0;
const images = [];
var time = 3000;
images[0] = "https://cdn.discordapp.com/attachments/825782329384763412/825808216121278464/ExLoD6RVkAM-m2c.png";
images[1] = "https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg";
images[2] = "https://cdn.discordapp.com/attachments/822989732195205170/836564584475131914/14e6c67f2ec4602bb6fa9e1e79449ec5.jpg"; 
images[3] = "https://cdn.discordapp.com/attachments/825782329384763412/825787854843805706/js_thanks.png";

function imageChanger(){
    emptyImg.src = images[i];
    if(i < images.length - 1){
        i++;
    }else {
        i = 0;
    }
    setTimeout("imageChanger()", time);
}

lastEl.appendChild(emptyImg);
imageChanger()


//Youtube Embed
let videoPlayer = document.createElement("iframe");
videoPlayer.setAttribute('width', '560');
videoPlayer.setAttribute('height', '315');
videoPlayer.src = "https://www.youtube.com/embed/I1uGKLsMiDo";
videoPlayer.setAttribute('title', 'YouTube video player');
videoPlayer.setAttribute('frameborder', '0');
videoPlayer.setAttribute('allow', "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
videoPlayer.setAttribute('allowfullscreen', 'true');
nameElement.appendChild(videoPlayer);


//Play Button
let playButton = document.createElement("button");
playButton.textContent = "Play";
playButton.setAttribute('id', 'play');
playButton.setAttribute('onclick', 'playVideo()');
playButton.setAttribute('type', 'button');
nameElement.appendChild(playButton);
//Pause Button
let pauseButton = document.createElement("button");
pauseButton.textContent = "Pause";
pauseButton.setAttribute('id', 'pause');
pauseButton.setAttribute('onclick', 'pauseVideo()');
pauseButton.setAttribute('type', 'button');
nameElement.appendChild(pauseButton);
//Video change Button
let changeButton = document.createElement("button");
changeButton.textContent = "Sheeeeesh";
changeButton.setAttribute('id', 'change');
changeButton.setAttribute('onclick', 'changeVideo()');
changeButton.setAttribute('type', 'button');
nameElement.appendChild(changeButton);
//Skip Time Button
let rewindButton = document.createElement("button");
rewindButton.textContent = "Click to jump to (default is 0) >>";
rewindButton.setAttribute('id', 'rewind');
rewindButton.setAttribute('onclick', 'rewindVideo()');
rewindButton.setAttribute('type', 'text');
nameElement.appendChild(rewindButton);
//Input For Where To Skip
var inputForTime = document.createElement("INPUT");
inputForTime.setAttribute("type", "number");
inputForTime.setAttribute('id', 'changeTime');
nameElement.appendChild(inputForTime);

//Video Player
let videoClip = document.createElement("video");
let videoSource = document.createElement("source");
videoSource.src = "https://cdn.discordapp.com/attachments/825782329384763412/825787778980904980/video0.mp4";
videoSource.setAttribute('type', 'video/mp4');
videoSource.setAttribute('id', 'sauce');
videoSource.textContent = "Sorry, your browser does not support HTML5 video.";
videoClip.setAttribute('name', 'myVid');

//Functions For Buttons 
function playVideo() { 
 videoClip.play(); 
} 
function pauseVideo() { 
 videoClip.pause(); 
} 

let rewindTime = 0;
function rewindVideo() {
    rewindTime = document.getElementById("changeTime").value;
    videoClip.currentTime = rewindTime;
}

function changeVideo() {
    console.log("sheeeesh been presed");
    var current_image = document.getElementById('sauce');
    console.log(current_image);
    if(current_image.src == "https://cdn.discordapp.com/attachments/825782329384763412/825787778980904980/video0.mp4"){  
        document.getElementById('sauce').src = "https://cdn.discordapp.com/attachments/822989732195205170/836903620443635742/video0-95.mov";
        changeButton.textContent = "we do a little trolling";
    }else if(current_image.src == "https://cdn.discordapp.com/attachments/822989732195205170/836903620443635742/video0-95.mov"){
        document.getElementById('sauce').src = "https://cdn.discordapp.com/attachments/825782329384763412/825787778980904980/video0.mp4";
        changeButton.textContent = "Sheeeeesh";
    }
    videoClip.load();
}

//Video Player And Source Append
videoClip.appendChild(videoSource);
nameElement.appendChild(videoClip);
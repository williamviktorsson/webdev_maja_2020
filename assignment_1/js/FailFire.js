/*
    Do everything you want in functions because you do not want to define global variables.
*/


let nameElement = document.getElementById("FailFire");
let objectEl = document.createElement("h3");
objectEl.textContent = "You're gonna have a great time";
objectEl.className += " FFnagot";
nameElement.appendChild(objectEl);

let knappen = document.createElement("button");
knappen.className += "FFknapp";
knappen.textContent = "time for crazy";
nameElement.appendChild(knappen);

var oneVone = false;
var buttonChange = function(){
    if (!oneVone){
        objectEl.textContent = ":)";
        knappen.textContent = "regret";
        objectEl.className += " FFregret";
        var ljudshit = document.createElement("audio");
        ljudshit.src = "https://www.kasandbox.org/programming-sounds/rpg/giant-no.mp3";
        ljudshit.autoplay = true;
        document.body.appendChild(ljudshit);
        oneVone = true;
    }
    else{
        objectEl.textContent = "okej";
        knappen.textContent = ":(";
        objectEl.className = "FFnagot";
        oneVone = false;
    }
}

knappen.addEventListener("click", buttonChange);

let objectHolder = document.createElement("div");
objectHolder.className = "FFholder";
let loadingThing = document.createElement("div");
loadingThing.className = "FFloadingObject";
nameElement.appendChild(objectHolder);
objectHolder.appendChild(loadingThing);

var objecthover = function(){
    loadingThing.className += " FFloading";
    objectHolder.className += " FFmoving";
}
objecthover();



var imgList = ["https://i.kym-cdn.com/entries/icons/facebook/000/020/633/le_monke.jpg",
"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUPDxIVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA9EAACAgECAgcGBQEHBAMAAAABAgADEQQhEjEFBkFRYXGREyIygaHwQnKxwdEHFCMzQ1KCspKi4fEVc4P/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACgRAQEAAgEDBAEDBQAAAAAAAAABAhEDEyExEhRBUQRCUmGBobHh8P/aAAwDAQACEQMRAD8AosSDuk0LEgtizpjKgmWVkQl1lJEpKuKSIjYgRoo8UAUkI0eATWXIZQJapiMShhNbQRDCEMmqGVvCEsgSNLVaTYpoJZL1smcry5bJOj20FslgsgC2Sa2xaA8PH44GLJIWQ0Yvij8cFFkfjiAnjj+0gvHFxwAgvIM8o9pG44BJ2lFhkmaVsYwosg7wh5Q4jIM8pYQlllTLGQcrFLeGKMC7q4DbXNy6mAXVQlKxkWLKGE0Lq4LYsuJoYiRxLWWQIlJQIikiIxgDYjxRYgDiTUyEeAXo0IRoGplqPFYco9GlqtAkeXK8nSti1aTV4MHkg8Wj2LDyQsggeTDxaPYoWSYsggaOGi0NjBbJCyBhpMNEBftIuOUBpMGBrOKLikBJARAsxiJICPwwClhK2SFcEY1wAJq5Wa4ea5E1RhnmuKaHsYobA+6qAX0zctrgV1UUoYN9MBtqm9fTM+6qXKmxjukpImhbXBXSaSoD4jYlhEjiMkMRSREUAjiKPI2uFGWOAIBMSQaZNnSBPLYffbK/7XkAE/zMcuaTw1nFfluq8uWzxnPLqhjlI2anbI/8zPr/AML6P8uoV5MPMLTDUkAqrMPLI35ecPr1DDaxSh8Rt8+6aY8uNTcLGjxyQaDBpYploEhpYDKEl6CTTWKJYqxVrCEriNBUlgSXJVLlqkmHCSQSFCqTFMNgIEkgkK9lHFcNmGFcf2cJFckEi2Anso3sYd7OL2cNgF7KKG+zihsaFWJBba5pOkGsSKU2TdVAL6pt21wG6qVKmsK6qBW1zcvqgF1U0lRYyXSVEQ22uDOsuVKkiNiTIkcRkbE5rpfXcVvCPhTbzbBz6cp0GsvWtGdiBgHn+3fOIo0ltgZ0HEAOI4znfmcYmPNlqaa8U77E36/7+X8wQ6o5+s0dN1Z1Wp+CvAI5scD77J1vQP8ATBuFTrLAMfgqzuCSfedu3cDYcgJzdm9rhq9Qx5An5ZnZdVerTX4stJHvDC4/XM7/AKJ6r6TS+8lYz4knl5zWqZeLCjGPvaKltPSaJFUAruB5wfpHomq0cLrn54I9JpiwSjUWwJwnSnRbUHbdOw9oHj3wWszd6asO+Hx4HGPntOWTWhXKsNs7HumuHLrtU5ce+8atYhVawejfcQ6lZtWcW1JC6q5GlIbVXIqoauqEJVLK65eiSdmoWqTFUKWuTFcWzB+yjGqG+ziNcNgCa4gkMNcga4bCgJHCy3gjhYBVwRS/higFzrB7FhbCVOIgBsSCW1zRsWD2JKgZF1cBvqm1bXAbqpcqaxLq4FbXNq6qAXVy5UWM1llTCF2JKGWaRLGbR2IpPBprW3/vLa3Nm/iWYDHZgDE5vRdYbNOz8CVniO4ZSQMH8O4IE7XVJlSJ53rNKyWMnLft2G52nPy4xrhlXpfVvrepXBKbgYByCPhBOd/9Q+950en6zUsc+0HwhiOL3VB2GTgY5HnPFVUJyZs75HIct8epHpDejbUX38gcIPCcY3A2BzzGRymOmj2rT65bVFgbI7N9pKvpMcex8OycFV1lJQpSnE4UHiyQDvucHtxiNotFbY/vC1CcEkZIyNjgE4xnuA58otB6JqOkOFclh559Jj39YFHu8fzxBNHoCqH2zh8Zw2+R4YzMd6LEPutxDfvBx6mRllppjjK0OkukkYZG/lnf59k5vUWduN/vHznRaPS+6fcGe/mZj9K6NwTy+eNplMt1pcdRsdBX8dY7wcHvm5QJ57pdY1Lh133weE527cjtE7bobpJbsgbMvMfuJ24ZbmnJljqtygQ+lYHRNCkR0RfWsIRZCoQhFkmSpJhZNVkwsRq+CMUl3DFwxAOUkCkKKyBWAClY3DCGWQKxhXiKTxFAJtK2kyZAmAVOJQ6wlpUwjIHYkEtrmi6wexJUJk3VwC+qbVtcCuqlSprDuqgliTXurgNtc0lRYAZZxvWWnhv4jkAqOydu6zn+lk42K+O58ouTweDnqtKXBVe4Fjj8PM+OZt9DdXRYBY6kbKAh3x2gjvHP1l/RtS8BqXYkHu5ZGPvynQ6HUgAH/QF35Z7SPMGc1bQP0ZoqAQfZhM5XkPdZe0+eG38J0FerAXChTjmPDlkfSYb2oWPDnPFuOw45/tNTo/gXh4gCMHB7QOZHlg/SRTLUgsTgYAxvkcv4mZpE989gzucEYl/T+t9mc1KTnC7Hl3ZXt+Up6I4rCSp37VYc/vvmdx33rSZa7R0OnUEYGPPaDdKdFh13Jz3jH7ydHunhbbs8BLWcg4J2mF7VtO8ea9L9H3U2fAxX/UADt4kYlfQ3Sh094cHiCnBH4sdo337+fdt3z0W2vMwOkuiaTl/ZqD2ldjv4idGHL9sc+N2vRuqW1FsrOVYZB++2a1Jnn/UPUFDZpicgH2iHPYThh8jj1nd0NOre4w8NOowquA0tDKzJpiFEsAkElokmWIsSQigEMSJWW4jEQNQVlbLCSJWywIPwx5bwxQAQmRzIF43FKJORMbMWYBBhKnWXmVsIwDsSB3VzTdYLakcKsi6uAX1zZuSAX1y5UVkWpOV6XbhsYd+D+k7K5JzHWHT+8G7xj0hn4GPkBRkV5TnkA4O+O71mhTlauJzsxGPDOMn5bTHpbhOO8idBclZrIHxAHhz445/X0mNaRWLgSTuDxEr4DJ2+W3rC7bLURNueOE93Zj77oF0UnHZlhtnfzmz03qkHBWpzghlzz8j99kmnFOk0bWYa/wCIHkNgQMgbHl2ek2KNPwNg79x7TnvgK6wfEPAeYmiuoDr7reRmec7Lxvc1+w7x97SDXbANy7DELc/EOZx8x/6g96e7kTmsdEqVrcO4MB1pz2/tLA3unw/SCXHMIdC9XMV6riYqo4SMk4JJ7N+f/ieiaeyeX64qNtie7IB+ux+kGp6Yto/w3evwJwp/2tlT8iZ34Xs4sp3e1UPDqmnnHVzruCeDWYQ9lgBCn8w/D58vKd9pL1cBlIYHcEEEHyIj8k1K2l6mB1NCUMlS4SWJBTJiBmxEZKNAIESBEsMiYBXiKSjQDD44uKcNpuvyHa1CviN8ecNr67af8WfDGW/abdLP6c858Pt1waTBnHUdfdMSQy2rjtKgg+WDn1EN03XTRPj+9K5295HUZ88YheLOfCpy4X5dLImZtHT+lc8Kaionu4wD6GGV6uttlsQ+TKf0MiyzzFTKXxU2EosWEkSlxAwFywG5JqWiBXLKhVk3JMfpfS+0rKjnzHnN+9YBcsvzNI8PO7GOYRVqWYgE42xt+/32zR6c6NIY2KNickePb9+Mx02My/ho6fQ2JUwU7nbPiCdiD6QTrA4DBlOSOR8O4zJ9pkgg4xtvsQc5/n7Mq17lzk9vlv4+MnR7bHR3SZXG+3Lfcb981ejLsBt8e8TgdhyCcTitPcV2P/sTT0+uK4Oe3+N4rDldjbbk+72HPpkH9YxfsxsZkJ0krciOecwx75z54tsckDYQSvfKsEtw7juMj7biPMcvDshtFAwHMMMLarLKSOd6w0MAOJSQN8gZ9ZiJrCowCT5z0VGzLW0lVg4bK1YeIE7vRqOP1bec0atCQAuCTjC5GSfBeZ+U2eiun7dG3925Tf3kb4T+ZNt/rO26P6D0tbB0oQMNwcZI8s8p0VSK3xKD5gGTZDAdWevem1TLSzBLW2Cn4WPcrd/gZ2lZmPptLUDkVoD3hVB9cTTraRVQYplgMoQy0GI1kUYGKBmMiZMyJgEI0lFAPHLOoFX4NRcO7IRsegEEfqBaPg1Snu4qiPqGO3hO6MQM6ZzZ/bnvDhfh5/Z1J1g+F6G+bj5YKkEecEs6p69f8gN+Wys/8iCf18Z6crS5Wle4zR7bj+nkF/QmrXdtHd/tU2f8M7fe8Bu07L/i02L38VTrjzyPr9J7mrSxXlT8rL6TfxMPi14VR0nwjhrudR3Cxlx6Hbz/AEh1XWLUqoC6q3bPN+IeHPP128Z7Hdp63+NEb8yqf1EzdR1b0T/FpaPMVqp9QBH7jG+cS9tZ4zeeaTrdq0Pv2iwdzqox8wBv5/KE1dc78njStgeWMqfI986fUdSdA3+Tw/lssH04sTM1PUPTfge5fJww/wC5TDqcV/SLxc08ZA9J1uRtr0KHvX3lP7yOr6yUD4Q7Dv4QP1MhqOo+Pg1Lf7kDeuCPWZ93VO9eVyN5qy/pnfxjnSK9eCD0/Q/ukOuf9SjA9CZkaw0ksUcYzvkEYzyO45Sy3oLVL2Vt+VsfqB/HhANX0ZqcEexPmCp9MGGXFx3xTx5OWdriECl24amBJwBjfcsqgbfmltNbrhm95Dupxjl2HxgP9hsrcFlsrAxluEjB78+f6Q7/AOS4gAxKYA90ZAUgY5fLz85hOK3PW2+XL6cd6K2slspk55Dt8oXqujmqVQ5TifOFDgsoGCSw/CPHwMy9b0vc3CofZfhxgc+/HM+cC1Otsdy9pySME5OR5b+frM8+LOXt4Xx542d/LZ0On98FCTnBwdtjyIHccfpOhqRyPf2EwujdUa/eTByqjLdgwMAZ5DkM+E0k6afizYq47eEYI+vOXPx8sptnfycMctbbNOnAGDy58gd/OXF+yZ56WpLHBcDGRxLzP+nAOxlS9M17/F6Dfv7ZphwXH4Tl+Rjl8titoZS0x9P0hWw4gw2GSDzA7yIZ0frUtPDWwY93b6GFxv0JnPtvaZ5qad5hV2hThiAe4kAzV0z90yrSVs0tDqmmXQ8OpaZ1pGhW0vUwOtpehkmIBjysGSzA0oxjZiJgDRRRQDj2SQKw96pQ9c02gOJNTHZZHECWq0sDwYGSDQArjjFpQHi44BJzBrDLGaUOYwotgV0LtMEtlQqCtEGcQuyCvLiAmppDqUbkecrTTIGdwN3ILHvwMCEtIGUQezR1t8VaHzUfxAdZ0DRYpAQIdveUAEYOeXKasaAZK9XqQABxjHaGPr3Stur6/htsH/Sf2m1FKmVibjjfMYLdAOPhu9U+nPlK26Fv7GrPnkftOiij6mSelhfhzL9Gagf5anyYfvj+ZV/ZL1OfY2A967n/ALTOsBlqGPq5J6GDirzYf8Su3zZWP1I++6PT0k1YwlrpjsyQPT7HlO/peHVgNswB8wDF1/uD28+K4SnrRqQ3ELznGME+75gDYHx+sMp66a5eV4OO9FOfA5E7MdD6V/j09R//ADX+I56naB+enA/Kzr+jRdXj+cT6Gc8ZObp/qJrR2VNvyKHu7MMN/CaWm/qnaMe00yHv4HZfQHP6w9v6d6FuXtk/LaT/AMgYNZ/S6k/Bqrh+ZUf1wFi9XBfMV6OafqF6b+q9Of73TWL4qyv9NpsU/wBR9CycZZ18CuW9AZyNv9LLvwaxD+epl+oY+sCt/pprx8L6d/J3X9U5xejgvi/9/U988+NvTOjeuWi1AJru5c+JHUj1ELp6x6NzwrqqSe72iA+hM8av6i9JIdtMG/8Artr/AE4h+nymfqermuT49Ff/ALay3/HP33Q9vx3xl/gdblnnB9AjW1HcWIfJ1/mKfNrdH2g4OnuB7vZOPpwxRe1n7v7f7P3GX7X0G9UHeuaj1yiyucu3Qy3rlDLNKyuDWJKlIERIky51lDCMi4oxeQJkC0YWF5U7SLNK2aMkXMGsMtcyiwxlQ9kHeEPB3lRKlpAyxpAyiRjRzGjBooooAooooA4k1MrkhEBNTQ6h5mo0KqeTYca9Fk0aLJi0vD6bJFXGzVZCq3mVTZC63kVTRR5arwJHlyvJMWHj8UHDRw0Rr+OKU8UUANZZS6RRQAaxILYkUUZBLUgtixRSoQdxKmiilEraVtHijJS0peKKMqoeUNFFKhKWkDFFKSiY0UUYKKNFAFFFFECj5jRRhYpl1bRRRGMpaH0vFFM6qDaXhlTxRSKoSjy9WiiiUtVpINFFJCXFFFFA3//Z",
"https://sexyshrek-07.webself.net/file/si1300654/DF0Vaw0WAAEmZGB-fi19752028x1000.jpg",
"data:image/jpeg;base64,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",
"https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"]

let slideshow = document.createElement("img");


slideshow.className = "FFimgHolder";

nameElement.appendChild(slideshow);

var CurrentImg = 0;
slideshow.src = imgList[CurrentImg];

let displayNumb = document.createElement("p");
displayNumb.textContent = "1";
displayNumb.style.color = "purple";

nameElement.appendChild(displayNumb);
var imgChanger = function(e){

    if (e.clientX > 445){
        if (CurrentImg != 4){
            CurrentImg += 1;
        }else{
            CurrentImg = 0;
        }
        
    }else{
        if (CurrentImg != 0){
            CurrentImg -= 1;
        }
        else{
            CurrentImg = 4;
        }
        
    }
    displayNumb.textContent = (CurrentImg + 1).toString();
    console.log(e.clientX);
    slideshow.src = imgList[CurrentImg];
}


slideshow.addEventListener("click", imgChanger);
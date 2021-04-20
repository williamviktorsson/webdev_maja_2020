// This is a hack, please let me know if this breaks in some setting // William
function setCorrectNavBarItemAsActive() {
    let array = document.getElementById("myNavbar").children;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.className += (element.hasAttribute("href") && element.href.includes(location.pathname)) ? "active" : ""
    }
}
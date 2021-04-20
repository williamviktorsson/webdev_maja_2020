// This is a hack, please let me know if this breaks in some setting // William


function addNavBar() {

    // The buttons to exist in the navbar, what they should say as text is the key
    // The value is the corresponding html file to swap to on click.
    let navigation = {
        "Home": "index.html",
        "Test1": "test1.html",
        "Test2": "test2.html",
    };

    let navbar = document.getElementById("myNavbar");

    for (let key in navigation) {
        let value = navigation[key];
        let element = document.createElement("a");
        element.textContent = key;
        element.href = value;
        element.className += (location.pathname.includes(value) || (!location.pathname.includes(".html") && value.includes("index.html"))) ? " active" : ""
        navbar.appendChild(element);
    }
}

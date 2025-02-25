let images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
];
let randomIndex = Math.floor(Math.random() * images.length);
document.getElementById("banner").src = images[randomIndex];

function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Tashqariga bosganda menyuni yopish
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var menus = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < menus.length; i++) {
            menus[i].style.display = "none";
        }
    }
}

function menu() {
    var menu = document.getElementById("dropdownMenu1");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Tashqariga bosganda menyuni yopish
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var menus = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < menus.length; i++) {
            menus[i].style.display = "none";
        }
    }
}
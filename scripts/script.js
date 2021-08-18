var height_screen = (window.innerHeight);
var home = document.querySelector("#home");

if (window.innerWidth > 420) {
    home.style.height = height_screen + 'px'
}else {
    home.style.height = (height_screen - 80) + 'px'
}
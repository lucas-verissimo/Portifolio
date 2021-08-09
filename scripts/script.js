var height_screen = ((window.innerHeight)-60).toString();
height_screen += "px";
var home123 = document.querySelector("#home");
home123.style.height = height_screen

var width_screen = window.innerWidth
if (width_screen < 750) {
    document.querySelector('#img-sobre-mim').style.width = '100%';
    document.querySelector('#img-sobre-mim').style.margin = '20px auto';
}

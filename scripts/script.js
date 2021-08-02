var height_screen = ((window.innerHeight)-60).toString();
height_screen += "px";
var home123 = document.querySelector("#home");
home123.style.height = height_screen

var width_screen = window.innerWidth
if (width_screen < 600) {
    document.querySelector('#minha-foto').style.width = '100%';
    document.querySelector('#minha-foto').style.margin = 'auto';
}

function clicou() {
    window.open("https://api.whatsapp.com/send?phone=5531984784190", '_blank');
}
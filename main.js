var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rx = 10;
var ry = 10;
var rl = 150;
var ra = 100;
var roverimg = "carro.png";
var backgroundimg = "https://img.freepik.com/fotos-premium/vista-superior-de-estrada-asfalto_51195-810.jpg?w=2000";
function add() {
    background = new Image();
    background.src = backgroundimg;
    background.onload = uploadb;

    rover = new Image();
    rover.src = roverimg;
    rover.onload = uploadr;

}
function uploadb() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

}
function uploadr() {
    ctx.drawImage(rover, rx, ry, rl, ra);

}
window.addEventListener("keydown", teclado);
function teclado(e) {
    tecla = e.keyCode;
    if (tecla == "38") {
        up();
    }
    if (tecla == "40") {
        down();
    }
    if (tecla == "37") {
        left();
    }
    if (tecla == "39") {
        right();
    }
}
function up() {
    if (ry >= 0) {
        ry = ry - 10;
        uploadb();
        uploadr();

    }
}
function down() {
    if (ry <= 500) {
        ry = ry + 10;
        uploadb();
        uploadr();
    }
}
function left() {
    if (rx >= 0) {
        rx = rx - 10;
        uploadb();
        uploadr();

    }
}
    function right(){
    if(rx<=700){
        rx=rx+10;
        uploadb();
        uploadr();
    }
}
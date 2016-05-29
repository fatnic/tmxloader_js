var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var tmx = new TMXLoader();

canvas.width = tmx.mapsize.x;
canvas.height = tmx.mapsize.y;

function draw() {

}

window.onload = function(){
    draw();
};

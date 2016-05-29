var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var tmx = new TMXLoader('../assets/basic.json');

canvas.width = tmx.canvas.x;
canvas.height = tmx.canvas.y;

function draw() {

}

window.onload = function(){
    draw();
};

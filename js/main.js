var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var TMX;

var assets = {
    base: '../assets/',
    paths: [ 'testtiles.png', 'basic2.json' ]
};

var AM = new AssetManager(assets);
AM.downloadAll(init);

function init(){
    TMX = new TMXLoader(AM, 'basic2');
    canvas.width = TMX.canvas.x;
    canvas.height = TMX.canvas.y;
    draw();
}

function draw(){
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    TMX.draw(ctx);
}

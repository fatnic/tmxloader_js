var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var tmx;

var am = new AssetManager('../assets/');

am.queueDownload('sixteen.json');
am.downloadAll(init);

function init(){
    tmx = new TMXLoader(am.get('json.sixteen'));
    canvas.width = tmx.canvas.x;
    canvas.height = tmx.canvas.y;
    draw();
}

function draw(){
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    tmx.renderLayer('floor');
}

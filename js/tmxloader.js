// Requires: assetmanager.js

function TMXLoader(am, json) {
    this.am = am;
    this.loaded = false;
    this.json = am.get('json.' + json);
    this.init();
    this.img = new Image();
}

TMXLoader.prototype = {

    init: function() {
        this.canvas = new Vec2(this.json.tilewidth * this.json.width, this.json.tileheight * this.json.height);
        this.tile = new Vec2(this.json.tilewidth, this.json.tileheight);
        this.grid = new Vec2(this.json.width, this.json.height);
    },

    renderLayer: function(name) {
        var layer = this.json.layers.filter(function(layers) { return layers.name == name; })[0];
        var imgname = this.json.tilesets[0].image.split('.')[0];
        var tilesetWidth = this.json.tilesets[0].imagewidth;
        var that = this;
        var sourceX, sourceY;
        var tileimg = this.am.get('img.' + imgname);
        for (var i=0; i < layer.data.length; i++) {

            sourceX = ((layer.data[i] - 1) * this.tile.x) % tilesetWidth;
            sourceY = Math.floor(((layer.data[i] - 1) * this.tile.x) / tilesetWidth) * this.tile.x;

            targetX = (i % this.grid.x) * this.tile.x;
            targetY = Math.floor((i / this.grid.x)) * this.tile.x;

            ctx.drawImage(tileimg, sourceX, sourceY, this.tile.x, this.tile.y, targetX, targetY, this.tile.x, this.tile.y);
        }
    }
};

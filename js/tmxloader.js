function TMXLoader(json) {
    this.loaded = false;
    this.json = json;
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
        var imgpath = this.json.tilesets[0].image;
        var imgname = imgpath.split('.')[0];
        var tilesetWidth = this.json.tilesets[0].imagewidth;
        var that = this;
        am.queueDownload(imgpath);
        am.downloadAll(function(){
            var sourceX, sourceY;
            var tileimg = am.get('img.' + imgname);
            for (var i=0; i < layer.data.length; i++) {

                sourceX = ((layer.data[i] - 1) * that.tile.x) % tilesetWidth;
                sourceY = Math.floor(((layer.data[i] - 1) * that.tile.x) / tilesetWidth) * that.tile.x;

                targetX = (i % that.grid.x) * that.tile.x;
                targetY = Math.floor((i / that.grid.x)) * that.tile.x;

                ctx.drawImage(tileimg, sourceX, sourceY, that.tile.x, that.tile.y, targetX, targetY, that.tile.x, that.tile.y);
            }
        });
    }
};

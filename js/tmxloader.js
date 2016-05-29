function TMXLoader(filename) {
    this.filename = filename;
    this.json = {};

    this.canvas = new Vec2(600,300);
    this.tile = new Vec2();
    this.grid = new Vec2();

    this.loadJSON();
}

TMXLoader.prototype = {

    loadJSON: function() {
        
    }

};

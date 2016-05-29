Array.prototype.get2d = function(x,y,width) {
  return this[y * width + x];
};

Array.prototype.set2d = function(value,x,y,width) {
  this[y * width + x] = value;
};

'use strict';

var Set = function() {
  this.elements = [];
}

Set.setInstance = function(element) {
    if (this.elements.indexOf(element) === -1) {
        this.elements.push(element);
    }
};


Set.prototype.remove = function(element){
    var index = this.elements.indexOf(element);
    if (index !== -1) {
        this.elements.splice(index, 1);
    }
};

Set.prototype.size = function(){
  return this.elements.length;
}

Set.prototype.clone = function() {
    var s = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        s.add(this.elements[i]);
    }
    return s;
};


module.exports = Set;

'use strict';

class Set {
  constructor(){

  }

  add(element) {

  };

  remove(element){

  };

  isEmpty() {

  };

  size(){

  };

  contains(element) {

  };

  intersect = function(s) {
    var resultSet = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        if (s.contains(this.elements[i])) {
            resultSet.add(this.elements[i]);
        }
    }
    return resultSet;
  };

  difference = function(s) {
    var resultSet = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        if (!s.contains(this.elements[i])) {
            resultSet.add(this.elements[i]);
        }
    }
    return resultSet;
  };

  clone() {
    var s = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        s.add(this.elements[i]);
    }
    return s;
  };

}

module.exports = Set;
